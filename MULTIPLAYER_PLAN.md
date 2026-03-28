# Starfall Survivors Multiplayer Plan

## Best Fit For This Game

Use an **authoritative WebSocket server**, not peer-to-peer.

That gives you:

- host creates a lobby code, other players join it
- lobby owner can change voyage length and threat level before the run
- players can join an already started run
- server decides enemy spawns, damage, drops, augments, timers, and victory
- much less cheating and much less desync

For this project, "join your instance or theirs" should mean:

- one player is the **lobby owner**
- the match still runs on a **dedicated server process**
- the owner controls pre-run settings

Do **not** make one browser tab fully authoritative. This codebase is too stateful on the client, and peer hosting will make reconnects and join-in-progress much harder.

## What In The Current Code Needs To Change

Right now the browser owns almost everything:

- run reset happens in `resetGame()` in `game.js`
- the full simulation runs in `update(dt)` in `game.js`
- movement and boost are handled in `updatePlayer(dt)` in `game.js`
- enemies, projectiles, crates, augments, and timers all live in the client `state`
- DOM, input, and simulation are mixed together in the same file

That means multiplayer is not a socket add-on. It is a **simulation split**:

1. move gameplay rules into shared pure logic
2. run that logic on the server
3. let clients send inputs and render snapshots

## Recommended Architecture

### 1. Shared Simulation

Create a shared simulation layer used by both client and server:

- `shared/sim/constants.js`
- `shared/sim/state.js`
- `shared/sim/player.js`
- `shared/sim/enemies.js`
- `shared/sim/weapons.js`
- `shared/sim/loot.js`
- `shared/sim/update.js`

These files should contain pure game logic only:

- no DOM
- no canvas
- no audio
- no `localStorage`
- no direct keyboard/gamepad reads

The shared sim should accept:

- current state
- elapsed time
- per-player inputs
- seeded RNG

And return:

- next state
- events generated this tick

### 2. Server

Add a small Node server:

- `server/package.json`
- `server/server.js`
- `server/rooms.js`
- `server/protocol.js`

Use WebSockets for transport.

Server responsibilities:

- create rooms
- assign players to rooms
- store lobby settings
- run simulation ticks
- broadcast snapshots
- accept late joiners
- send full world snapshot on join
- validate setting changes so only the lobby owner can change them

### 3. Client Networking Layer

Add a browser networking module:

- `client/network.js`

Client responsibilities:

- connect to server
- create or join room by code
- send input packets only
- receive room state and game snapshots
- render remote players
- interpolate remote movement
- reconcile local player with server state

## Lobby Flow

Add a simple room model:

```txt
Room
- id
- ownerPlayerId
- phase: lobby | playing | summary
- settings:
  - difficulty
  - extraTimeSteps
  - startingWeaponRules
- players[]
- snapshot
```

Suggested flow:

1. Player clicks `Host Voyage`
2. Server creates room and returns a short code
3. Other player clicks `Join Voyage` and enters code
4. In lobby, owner changes:
   - threat level
   - voyage length
   - possibly public/private or max players later
5. Owner starts voyage
6. Server begins sim and sends snapshots

## Join-In-Progress

This is absolutely doable, but only if the server owns the truth.

When a player joins mid-run:

1. server sends full snapshot:
   - elapsed time
   - voyage progress
   - current difficulty and goal time
   - all active players
   - all enemies
   - projectiles
   - pickups
   - loot planets
   - run stats needed by HUD
2. client spawns into a safe position near the group
3. client begins rendering from that snapshot
4. server starts including the new player in future ticks

Important rule:

- **late joiners should inherit the room settings**
- they should **not** be allowed to independently change threat/time while the run is active

If you want active settings changes during a run, treat those as server events. Do not let clients mutate timers directly.

## Networking Model

### Client -> Server

Send small input packets at 20 to 30 Hz:

```json
{
  "type": "input",
  "seq": 182,
  "moveX": 0.82,
  "moveY": -0.21,
  "aimX": 1,
  "aimY": 0,
  "boost": 0.6,
  "dash": false
}
```

Also send menu actions:

- ready
- start
- set difficulty
- set extra time
- equip augments

### Server -> Client

Broadcast snapshots at 10 to 20 Hz:

```json
{
  "type": "snapshot",
  "serverTime": 523.2,
  "phase": "playing",
  "roomSettings": {
    "difficulty": 3,
    "extraTimeSteps": 2
  },
  "players": [],
  "enemies": [],
  "projectiles": [],
  "pickups": [],
  "events": []
}
```

Use separate event packets for:

- level-up choice opened
- player damaged
- loot planet explored
- elite spawned
- voyage cleared
- player joined or left

## How To Refactor This Codebase Safely

### Phase 1: Prepare The Client

Do this before networking:

1. split `game.js` into:
   - `ui`
   - `render`
   - `input`
   - `sim`
2. stop reading browser input directly inside sim code
3. stop writing DOM directly inside sim code
4. make all random gameplay use one seeded RNG helper

### Phase 2: Local Shared Sim

Make the browser use the extracted shared sim first, still offline.

If single-player still works after that, you are ready to move the sim to a server.

### Phase 3: Online Lobby

Add:

- host room
- join room
- sync threat level
- sync voyage length
- ready/start flow

At this point you can already have networked menus without full gameplay networking.

### Phase 4: Full Co-op

Move these server-side:

- player movement and collisions
- enemy spawning
- enemy AI
- projectile hits
- scrap and credit drops
- level-up rolls
- loot planet rewards
- victory and failure

### Phase 5: Join-In-Progress

Add:

- full room snapshot on join
- safe spawn for late joiner
- state resync on reconnect

## Things That Will Break If You Skip The Refactor

If you try to just sync parts of current browser state, you will likely get:

- different enemy spawns on each client
- duplicated damage
- different loot rewards
- different timers
- broken level-up states
- remote players drifting or teleporting
- unfair pause/menu behavior

## Practical Rules For Your Game

Because this is a survivor-style game, use these rules:

- no global pause in online rooms
- only lobby owner can start voyage
- only lobby owner changes difficulty and voyage length in lobby
- once playing starts, those settings lock
- if a player joins late, they join as a live ship with current room state
- if a player dies, keep the room alive unless all players are dead

## Smallest Useful First Version

If you want the shortest path, build this first:

- 2-player online co-op
- lobby code create/join
- synced difficulty and voyage length in lobby
- no join-in-progress yet
- no augments syncing beyond equip-at-start

Then add join-in-progress second.

That gives you a working foundation much faster.

## What I Would Do Next In This Repo

If we continue from here, the best next implementation step is:

1. extract the current gameplay state and update loop from `game.js` into a pure shared sim module
2. keep the browser running that sim locally
3. once it still plays correctly, add a WebSocket room server

That is the cleanest route to the feature set you asked for.
