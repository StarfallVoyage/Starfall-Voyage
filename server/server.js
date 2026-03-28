import crypto from "node:crypto";
import http from "node:http";
import cors from "cors";
import express from "express";
import { WebSocketServer } from "ws";

const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(",").map(value => value.trim()).filter(Boolean) || true,
}));

const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: "/ws" });

const PORT = Number(process.env.PORT || 10000);
const ROOM_CODE_LENGTH = Number(process.env.ROOM_CODE_LENGTH || 4);
const ROOM_IDLE_MINUTES = Number(process.env.ROOM_IDLE_MINUTES || 60);

const rooms = new Map();

function roomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < ROOM_CODE_LENGTH; i += 1) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function createRoom(settings = {}) {
  let code = roomCode();
  while (rooms.has(code)) {
    code = roomCode();
  }

  const room = {
    code,
    createdAt: Date.now(),
    lastActiveAt: Date.now(),
    started: false,
    hostId: null,
    players: new Map(),
    settings: {
      route: "asteroidBelt",
      difficulty: 1,
      timerMinutes: 5,
      ...settings,
    },
  };

  rooms.set(code, room);
  return room;
}

function roomSummary(room) {
  return {
    code: room.code,
    started: room.started,
    hostId: room.hostId,
    playerCount: room.players.size,
    players: Array.from(room.players.values()).map(player => ({
      id: player.id,
      name: player.name,
      isHost: player.id === room.hostId,
    })),
    settings: room.settings,
  };
}

function markRoomActive(room) {
  room.lastActiveAt = Date.now();
}

function getRoom(code) {
  return rooms.get(String(code || "").toUpperCase());
}

function send(ws, payload) {
  if (ws.readyState === 1) {
    ws.send(JSON.stringify(payload));
  }
}

function broadcastRoom(room, payload) {
  markRoomActive(room);
  for (const player of room.players.values()) {
    send(player.ws, payload);
  }
}

function removePlayerFromRoom(room, playerId) {
  room.players.delete(playerId);
  if (room.hostId === playerId) {
    room.hostId = room.players.keys().next().value || null;
  }

  if (room.players.size === 0) {
    rooms.delete(room.code);
    return;
  }

  broadcastRoom(room, {
    type: "room_update",
    room: roomSummary(room),
  });
}

setInterval(() => {
  const cutoff = Date.now() - ROOM_IDLE_MINUTES * 60 * 1000;
  for (const room of rooms.values()) {
    if (room.players.size === 0 || room.lastActiveAt < cutoff) {
      rooms.delete(room.code);
    }
  }
}, 60 * 1000);

app.get("/", (_req, res) => {
  res.send("Starfall multiplayer room server is online.");
});

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    rooms: rooms.size,
    uptimeSeconds: Math.round(process.uptime()),
  });
});

app.post("/api/rooms", (req, res) => {
  const room = createRoom(req.body?.settings);
  res.status(201).json(roomSummary(room));
});

app.get("/api/rooms/:code", (req, res) => {
  const room = getRoom(req.params.code);
  if (!room) {
    return res.status(404).json({ error: "Room not found." });
  }

  markRoomActive(room);
  return res.json(roomSummary(room));
});

app.post("/api/rooms/:code/join", (req, res) => {
  const room = getRoom(req.params.code);
  if (!room) {
    return res.status(404).json({ error: "Room not found." });
  }

  markRoomActive(room);
  return res.json(roomSummary(room));
});

wss.on("connection", (ws, req) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const code = String(url.searchParams.get("room") || "").toUpperCase();
  const requestedName = String(url.searchParams.get("name") || "Pilot").trim().slice(0, 24);
  const room = getRoom(code);

  if (!room) {
    send(ws, { type: "error", message: "Room not found." });
    ws.close();
    return;
  }

  const playerId = crypto.randomUUID();
  const player = {
    id: playerId,
    name: requestedName || "Pilot",
    ws,
  };

  room.players.set(playerId, player);
  if (!room.hostId) {
    room.hostId = playerId;
  }

  markRoomActive(room);

  send(ws, {
    type: "welcome",
    playerId,
    room: roomSummary(room),
  });

  broadcastRoom(room, {
    type: "room_update",
    room: roomSummary(room),
  });

  ws.on("message", raw => {
    let message;
    try {
      message = JSON.parse(raw.toString());
    } catch {
      send(ws, { type: "error", message: "Invalid JSON payload." });
      return;
    }

    markRoomActive(room);

    if (message.type === "ping") {
      send(ws, { type: "pong", now: Date.now() });
      return;
    }

    if (message.type === "update_settings") {
      if (room.hostId !== playerId) {
        send(ws, { type: "error", message: "Only the host can change lobby settings." });
        return;
      }

      room.settings = {
        ...room.settings,
        ...(message.settings || {}),
      };

      broadcastRoom(room, {
        type: "room_update",
        room: roomSummary(room),
      });
      return;
    }

    if (message.type === "start_game") {
      if (room.hostId !== playerId) {
        send(ws, { type: "error", message: "Only the host can start the voyage." });
        return;
      }

      room.started = true;
      broadcastRoom(room, {
        type: "game_started",
        room: roomSummary(room),
      });
      return;
    }

    if (message.type === "client_event") {
      broadcastRoom(room, {
        type: "client_event",
        from: playerId,
        payload: message.payload || null,
      });
    }
  });

  ws.on("close", () => {
    removePlayerFromRoom(room, playerId);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Starfall multiplayer room server listening on ${PORT}`);
});
