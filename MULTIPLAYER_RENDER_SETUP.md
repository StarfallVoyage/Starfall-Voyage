# Render + Netlify Multiplayer Setup

## Files added

- `server/package.json`
- `server/server.js`
- `render.yaml`

## What the server does

- `POST /api/rooms` creates a room code
- `GET /api/rooms/:code` gets room info
- `POST /api/rooms/:code/join` validates a join code
- `wss://YOUR-RENDER-URL/ws?room=CODE&name=PilotName` joins the live room socket

## Render deploy

1. Push this repo to GitHub.
2. In Render, create a new `Web Service`.
3. Point it at this repo.
4. Set the root directory to `server` if Render does not pick it from `render.yaml`.
5. Confirm:
   - Build command: `npm install`
   - Start command: `npm start`
6. Deploy.
7. Copy your Render URL, for example:
   - `https://starfall-multiplayer-server.onrender.com`

## Netlify proxy

After Render gives you a real URL, update `netlify.toml` by uncommenting the example proxy block and replacing `YOUR-RENDER-SERVICE` with your real service URL.

Use WebSockets directly against Render:

- `wss://YOUR-RENDER-SERVICE.onrender.com/ws?room=ABCD&name=Pilot`

## Current frontend state

The `Team Voyage` menu is already in the frontend. Right now it is a frontend shell only.

The next step is wiring:

- `Host Voyage` -> `POST /api/rooms`
- `Join Voyage` -> `POST /api/rooms/:code/join`
- lobby WebSocket connection
- room code display and lobby player list

## Quick local test

Open PowerShell in `server` and run:

```powershell
npm install
npm start
```

Then test:

- `http://localhost:10000/`
- `http://localhost:10000/api/health`
