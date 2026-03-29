const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const overlay = document.getElementById("overlay");
const overlayKicker = overlay.querySelector(".overlay-kicker");
const overlayTitle = document.getElementById("overlay-title");
const overlayBody = document.getElementById("overlay-body");
const overlayButton = document.getElementById("overlay-button");
const overlayEndVoyage = document.getElementById("overlay-end-voyage");
const pauseOptions = document.getElementById("pause-options");
const overlayFullscreen = document.getElementById("overlay-fullscreen");
const musicVolume = document.getElementById("music-volume");
const musicVolumeReadout = document.getElementById("music-volume-readout");
const sfxVolume = document.getElementById("sfx-volume");
const sfxVolumeReadout = document.getElementById("sfx-volume-readout");
const otherSfxVolume = document.getElementById("other-sfx-volume");
const otherSfxVolumeReadout = document.getElementById("other-sfx-volume-readout");
const upgradeChoices = document.getElementById("upgrade-choices");

const timeReadout = document.getElementById("time-readout");
const hudTimeReadout = document.getElementById("hud-time-readout");
const levelReadout = document.getElementById("level-readout");
const hudLevelReadout = document.getElementById("hud-level-readout");
const xpReadout = document.getElementById("xp-readout");
const hudXpReadout = document.getElementById("hud-xp-readout");
const killReadout = document.getElementById("kill-readout");
const hudKillReadout = document.getElementById("hud-kill-readout");
const goldReadout = document.getElementById("gold-readout");
const hudGoldReadout = document.getElementById("hud-gold-readout");
const bankReadout = document.getElementById("bank-readout");
const metaUpgrades = document.getElementById("meta-upgrades");
const shieldBar = document.getElementById("shield-bar");
const healthBar = document.getElementById("health-bar");
const xpBar = document.getElementById("xp-bar");
const shieldReadout = document.getElementById("shield-readout");
const healthReadout = document.getElementById("health-readout");
const barXpReadout = document.getElementById("bar-xp-readout");
const barGoldReadout = document.getElementById("bar-gold-readout");
const buildReadout = document.getElementById("build-readout");
const enemyReadout = document.getElementById("enemy-readout");
const minuteWarning = document.getElementById("minute-warning");
const arsenalGrid = document.getElementById("arsenal-grid");
const weaponSwitchReadout = document.getElementById("weapon-switch-readout");
const statusText = document.getElementById("status-text");
const hudStatusText = document.getElementById("hud-status-text");
const playerEffectIcons = document.getElementById("player-effect-icons");
const startButton = document.getElementById("start-button");
const mainMenuScreen = document.getElementById("main-menu-screen");
const mainMenuStatus = document.getElementById("main-menu-status");
const mainMenuSoloButton = document.getElementById("main-menu-solo-button");
const mainMenuTeamButton = document.getElementById("main-menu-team-button");
const mainMenuSettingsButton = document.getElementById("main-menu-settings-button");
const mainMenuLeaderboardsButton = document.getElementById("main-menu-leaderboards-button");
const mainMenuSettingsMenu = document.getElementById("main-menu-settings-menu");
const mainMenuSettingsBack = document.getElementById("main-menu-settings-back");
const mainMenuFullscreen = document.getElementById("main-menu-fullscreen");
const mainMenuMusicVolume = document.getElementById("main-menu-music-volume");
const mainMenuMusicVolumeReadout = document.getElementById("main-menu-music-volume-readout");
const mainMenuSfxVolume = document.getElementById("main-menu-sfx-volume");
const mainMenuSfxVolumeReadout = document.getElementById("main-menu-sfx-volume-readout");
const mainMenuOtherSfxVolume = document.getElementById("main-menu-other-sfx-volume");
const mainMenuOtherSfxVolumeReadout = document.getElementById("main-menu-other-sfx-volume-readout");
const teamVoyageMenu = document.getElementById("team-voyage-menu");
const teamVoyageBack = document.getElementById("team-voyage-back");
const teamVoyageHost = document.getElementById("team-voyage-host");
const teamVoyageJoin = document.getElementById("team-voyage-join");
const teamVoyageStatus = document.getElementById("team-voyage-status");
const teamVoyageServerUrl = document.getElementById("team-voyage-server-url");
const teamVoyagePlayerName = document.getElementById("team-voyage-player-name");
const teamVoyageRoomInput = document.getElementById("team-voyage-room-input");
const teamVoyageLobby = document.getElementById("team-voyage-lobby");
const teamVoyageRoomCode = document.getElementById("team-voyage-room-code");
const teamVoyageCopyCode = document.getElementById("team-voyage-copy-code");
const teamVoyageRefresh = document.getElementById("team-voyage-refresh");
const teamVoyageLeave = document.getElementById("team-voyage-leave");
const teamVoyagePlayerList = document.getElementById("team-voyage-player-list");
const teamVoyageRouteAsteroid = document.getElementById("team-voyage-route-asteroid");
const teamVoyageRouteVentari = document.getElementById("team-voyage-route-ventari");
const teamVoyageTimeDown = document.getElementById("team-voyage-time-down");
const teamVoyageTimeUp = document.getElementById("team-voyage-time-up");
const teamVoyageTimeReadout = document.getElementById("team-voyage-time-readout");
const teamVoyageDifficultyDown = document.getElementById("team-voyage-difficulty-down");
const teamVoyageDifficultyUp = document.getElementById("team-voyage-difficulty-up");
const teamVoyageDifficultyReadout = document.getElementById("team-voyage-difficulty-readout");
const teamVoyageStart = document.getElementById("team-voyage-start");
const teamVoyageLobbyNote = document.getElementById("team-voyage-lobby-note");
const hangarScreen = document.getElementById("hangar-screen");
const hangarWindow = document.getElementById("hangar-window");
const hangarBank = document.getElementById("hangar-bank");
const hangarSettingsButton = document.getElementById("hangar-settings-button");
const hangarRouteChip = document.getElementById("hangar-route-chip");
const hangarLengthChip = document.getElementById("hangar-length-chip");
const hangarThreatChip = document.getElementById("hangar-threat-chip");
const hangarBonusChip = document.getElementById("hangar-bonus-chip");
const hangarSettingsMenu = document.getElementById("hangar-settings-menu");
const hangarSettingsBack = document.getElementById("hangar-settings-back");
const hangarFullscreen = document.getElementById("hangar-fullscreen");
const hangarMusicVolume = document.getElementById("hangar-music-volume");
const hangarMusicVolumeReadout = document.getElementById("hangar-music-volume-readout");
const hangarSfxVolume = document.getElementById("hangar-sfx-volume");
const hangarSfxVolumeReadout = document.getElementById("hangar-sfx-volume-readout");
const hangarOtherSfxVolume = document.getElementById("hangar-other-sfx-volume");
const hangarOtherSfxVolumeReadout = document.getElementById("hangar-other-sfx-volume-readout");
const hangarReturnMainMenu = document.getElementById("hangar-return-main-menu");
const hangarResetProgress = document.getElementById("hangar-reset-progress");
const hangarUpgradesMenu = document.getElementById("hangar-upgrades-menu");
const hangarRecordsMenu = document.getElementById("hangar-records-menu");
const hangarAugmentsMenu = document.getElementById("hangar-augments-menu");
const hangarMetaUpgrades = document.getElementById("hangar-meta-upgrades");
const hangarUpgradeBank = document.getElementById("hangar-upgrade-bank");
const hangarRecordsButton = document.getElementById("hangar-records-button");
const hangarHostilesButton = document.getElementById("hangar-hostiles-button");
const hangarRecordsBack = document.getElementById("hangar-records-back");
const hangarRecordsGrid = document.getElementById("hangar-records-grid");
const hangarHostilesMenu = document.getElementById("hangar-hostiles-menu");
const hangarHostilesCard = document.getElementById("hangar-hostiles-card");
const hangarHostilesBack = document.getElementById("hangar-hostiles-back");
const hangarHostilesSummary = document.getElementById("hangar-hostiles-summary");
const hangarHostilesGrid = document.getElementById("hangar-hostiles-grid");
const hangarStatsGrid = document.getElementById("hangar-stats-grid");
const hangarStartButton = document.getElementById("hangar-start-button");
const hangarUpgradesButton = document.getElementById("hangar-upgrades-button");
const hangarAugmentsButton = document.getElementById("hangar-augments-button");
const hangarUpgradesBack = document.getElementById("hangar-upgrades-back");
const hangarUpgradesRespec = document.getElementById("hangar-upgrades-respec");
const hangarAugmentsBack = document.getElementById("hangar-augments-back");
const hangarAugmentBank = document.getElementById("hangar-augment-bank");
const hangarAugmentCache = document.getElementById("hangar-augment-cache");
const hangarRareAugmentCache = document.getElementById("hangar-rare-augment-cache");
const hangarAugmentLoadout = document.getElementById("hangar-augment-loadout");
const hangarEquippedAugments = document.getElementById("hangar-equipped-augments");
const hangarAugmentGrid = document.getElementById("hangar-augment-grid");
const hangarStatus = document.getElementById("hangar-status");
const hangarVoyageReadout = document.getElementById("hangar-voyage-readout");
const hangarVoyageAsteroid = document.getElementById("hangar-voyage-asteroid");
const hangarVoyageVentari = document.getElementById("hangar-voyage-ventari");
const hangarTimeDown = document.getElementById("hangar-time-down");
const hangarTimeUp = document.getElementById("hangar-time-up");
const hangarTimeReadout = document.getElementById("hangar-time-readout");
const hangarDifficulty = document.getElementById("hangar-difficulty");
const hangarDifficultyReadout = document.getElementById("hangar-difficulty-readout");
const runSummary = document.getElementById("run-summary");
const runSummaryScroll = document.getElementById("run-summary-scroll");
const runSummaryTitle = document.getElementById("run-summary-title");
const runSummaryBody = document.getElementById("run-summary-body");
const runSummaryGrid = document.getElementById("run-summary-grid");
const runSummaryKills = document.getElementById("run-summary-kills");
const runSummaryAugments = document.getElementById("run-summary-augments");
const runSummaryClose = document.getElementById("run-summary-close");
const runSummaryCard = runSummary.querySelector(".run-summary-card");
const modMenu = document.getElementById("mod-menu");
const modMenuClose = document.getElementById("mod-menu-close");
const modMenuBank = document.getElementById("mod-menu-bank");
const modMenuUpgrades = document.getElementById("mod-menu-upgrades");
const modCreditButtons = Array.from(document.querySelectorAll(".mod-credit-button"));
const modUnlockAugments = document.getElementById("mod-unlock-augments");
const voyageUpgradesMenu = document.getElementById("voyage-upgrades-menu");
const voyageUpgradesClose = document.getElementById("voyage-upgrades-close");
const voyageUpgradeBank = document.getElementById("voyage-upgrade-bank");
const voyageUpgradeVersion = document.getElementById("voyage-upgrade-version");
const voyageUpgradeGrid = document.getElementById("voyage-upgrade-grid");
const sceneTransition = document.getElementById("scene-transition");
const shell = document.querySelector(".shell");
const arenaFrame = document.querySelector(".arena-frame");

const LOGICAL_WIDTH = 1280;
const LOGICAL_HEIGHT = 720;
let WIDTH = LOGICAL_WIDTH;
let HEIGHT = LOGICAL_HEIGHT;
const WORLD_W = 3200;
const WORLD_H = 3200;
const BASE_RUN_TIME = 5 * 60;
const MAX_EXTRA_RUN_STEPS = 6;
const HANGAR_UPGRADE_LEVEL_CAP = 100;
const INFINITE_RUN_UPGRADE_LEVEL = Number.POSITIVE_INFINITY;
const WEAPON_SWITCH_COOLDOWN = 1;
const WEAPON_SWITCH_FIRE_DELAY = 0.16;
const MULTIPLAYER_INPUT_INTERVAL = 0.06;
const MULTIPLAYER_SNAPSHOT_INTERVAL = 0.16;
const MULTIPLAYER_SYNC_RANGE = 960;
const MULTIPLAYER_SYNC_PROJECTILE_CAP = 90;
const MULTIPLAYER_SYNC_ENEMY_CAP = 120;
const MAX_SLOW_FIELD_RADIUS = 210;
const PLANET_SPAWN_INTERVAL = 90;
const PLANET_SPAWN_CHANCE = 0.25;
const PLANET_SPAWN_DIFFICULTY_BONUS = 0.1;
const PLANET_SPAWN_VENTARI_BONUS = 0.2;
const PLANET_SPAWN_CAP = 5;
const PLANET_SCRAP_REWARD_MIN = 5000;
const PLANET_SCRAP_REWARD_MAX = 10000;
const BASE_REPEAT_CRUDE_CACHE_CHANCE = 0.34;
const ASTEROID_DAMAGE_START_DIFFICULTY = 3;
const CAMERA_ZOOM = 0.68;
const META_STORAGE_KEY = "starfall-survivors-meta-v2";
const COOP_META_STORAGE_KEY = "starfall-survivors-meta-coop-v1";
const MULTIPLAYER_SERVER_STORAGE_KEY = "starfall-survivors-multiplayer-server";
const MULTIPLAYER_NAME_STORAGE_KEY = "starfall-survivors-multiplayer-name";
const BASE_BOOST_CAPACITY = 50;
const BASE_DASH_STAMINA_COST = BASE_BOOST_CAPACITY * 0.25;
const PHOTON_PHAZER_MAX_RANGE = 138;
const PLASMA_CANNON_MAX_END_RADIUS = 42;
const PLASMA_CANNON_MAX_CREST_HEIGHT = 66;
const PLASMA_CANNON_MAX_REACH = 170;
// Shared sprite folder for UI/game art references.
const SPRITE_ASSET_ROOT = "Assets/Sprites";
const enemySpriteCache = new Map();
const droneSpriteCache = new Map();
const plasmaWaveSpriteCache = new Map();
const weaponPreviewCache = new Map();
const basicUpgradeIconCache = new Map();
const basicUpgradePreviewCache = new Map();
const augmentIconCache = new Map();
const choiceCardAssetSources = {
  emberBolt: `${SPRITE_ASSET_ROOT}/Photonlance.png`,
  plasmaCannon: `${SPRITE_ASSET_ROOT}/Plasmacannon.png`,
  vitality: `${SPRITE_ASSET_ROOT}/Hullupgrade.png`,
};
const planetSpriteImage = new Image();
planetSpriteImage.src = `${SPRITE_ASSET_ROOT}/planet.png`;
const SHIP_RENDER_SCALE = 0.82;
const MAX_EQUIPPED_AUGMENTS = 5;
const ELEMENTAL_PROC_CHANCE = 0.25;
const SECRET_NORMAL_ELEMENTAL_AUGMENT = "crossSystemConduit";
const SECRET_NORMAL_ELEMENTAL_UNLOCK_TIME = 35 * 60;
const AUGMENT_CACHE_TYPES = {
  crude: "crude",
  ardonis: "ardonis",
};
const difficultyLabels = ["Normal", "Dangerous", "Deadly", "Nightmare", "Cataclysm"];
const VOYAGE_DEFS = {
  asteroidBelt: {
    name: "Asteroid Belt",
    threatLabel: "Threat Signature I",
    description: "Standard route with asteroid strikes only on higher threat levels.",
    launchStatus: "Flight active. Asteroid Belt approach underway.",
  },
  ventariSystem: {
    name: "Ventari System",
    threatLabel: "Threat Signature II",
    description: "Unstable route filled with EMP storms, radiation pockets, solar flare fields, and hack anomalies.",
    launchStatus: "Flight active. Ventari anomalies detected across the system.",
  },
};

const VENTARI_ZONE_DEFS = {
  emp: {
    name: "EMP Storm",
    short: "EMP",
    color: "#77dbff",
    edge: "rgba(184, 242, 255, 0.92)",
  },
  radiation: {
    name: "Radiation Pocket",
    short: "RAD",
    color: "#97ff78",
    edge: "rgba(212, 255, 175, 0.92)",
  },
  solar: {
    name: "Solar Flare",
    short: "SOL",
    color: "#ff9b52",
    edge: "rgba(255, 219, 152, 0.94)",
  },
  hack: {
    name: "Hack Surge",
    short: "HCK",
    color: "#cf8bff",
    edge: "rgba(239, 206, 255, 0.94)",
  },
};
const ENEMY_RAMP_MULTIPLIER = 1.5;
const MAX_ACTIVE_ENEMIES = 1250;
const MAX_RELAY_SHIPS = 8;
const MAX_HACK_SNIPERS = 10;
const MAX_LEVIATHANS = 2;
const MAX_LEVIATHAN_SPAWNS_PER_RUN = 5;
const enemyTypeLabels = {
  shade: "Shade",
  hound: "Hound",
  brute: "Brute",
  witch: "Witch",
  aegis: "Aegis Cruiser",
  drifter: "Null Drifter",
  reactor: "Reactor Hulk",
  relay: "Relay Shepherd",
  scrambler: "Cipher Saboteur",
  viper: "Viper Ace",
  bastion: "Bastion Dreadnought",
  leviathan: "Leviathan",
};
const WEAPON_SYSTEM_LABELS = {
  normal: "Normal Weapons System",
  advanced: "Advanced Weapon Systems",
  support: "Support Systems",
};
const WEAPON_SYSTEM_COLORS = {
  normal: "#ffd585",
  advanced: "#8af6ff",
  support: "#bde8ff",
};
const MENU_CONFIRM_HOLD_DURATION = 0.5;
const PLAYER_DEATH_BURST_TIME = 1.35;
const PLAYER_DEATH_SEQUENCE_TIME = 4.1;

const state = {
  mode: "menu",
  profileMode: "solo",
  keys: new Set(),
  pointerActive: false,
  pointerVector: { x: 0, y: 0 },
  menuConfirmKeyHeld: false,
  menuConfirm: {
    source: null,
    target: null,
    progress: 0,
    completed: false,
  },
  gamepad: {
    moveX: 0,
    moveY: 0,
    aimX: 0,
    aimY: 0,
    boostAmount: 0,
    connected: false,
    pausePressed: false,
    backPressed: false,
    confirmPressed: false,
    confirmDown: false,
    dashPressed: false,
    upgradeMenuPressed: false,
    weaponPrevPressed: false,
    weaponNextPressed: false,
    navXPressed: false,
    navYPressed: false,
    modComboPressed: false,
    menuIndex: 0,
  },
  lastTime: 0,
  enemies: [],
  projectiles: [],
  gems: [],
  pulses: [],
  explosions: [],
  hazards: [],
  asteroids: [],
  voyageZones: [],
  orbitalStrikes: [],
  crates: [],
  texts: [],
  particles: [],
  levelChoices: [],
  levelChoiceUnlockAt: 0,
  kills: 0,
  gold: 0,
  survivalCreditsAwarded: 0,
  survivalCreditProgress: 0,
  reactorSpawnCounter: 0,
  leviathanSpawnCount: 0,
  planetSpawnCount: 0,
  spawnClock: 0,
  crateClock: PLANET_SPAWN_INTERVAL,
  asteroidClock: 18,
  voyageZoneClock: 8,
  eliteClock: 9,
  time: 0,
  voyageProgress: 0,
  player: null,
  camera: { x: 0, y: 0 },
  meta: null,
  audioStarted: false,
  uiAudioContext: null,
  music: null,
  sfx: null,
  lastMenuNavigateSfxAt: 0,
  lastMenuNavigateTarget: null,
  runStats: null,
  pendingPlanetReward: null,
  pendingRunSummary: null,
  pendingHangarMessage: "Begin your voyage when ready.",
  shieldDamageFlash: 0,
  hullDamageFlash: 0,
  modMenuReturnMode: "menu",
  modKeyboardComboPressed: false,
  pendingFreeLevels: 0,
  runConfig: {
    extraTimeSteps: 0,
    difficulty: 1,
    voyageId: "asteroidBelt",
    startingWeapon: "emberBolt",
  },
  currentRun: {
    goalTime: BASE_RUN_TIME,
    difficulty: 1,
    bonusAugmentsAwarded: 0,
    voyageId: "asteroidBelt",
    startingWeapon: "emberBolt",
    normalWeaponUnlocksPurchased: 0,
    advancedWeaponUnlocksPurchased: 0,
  },
  settings: {
    musicVolume: 0.8,
    gunSfxVolume: 0.8,
    otherSfxVolume: 0.8,
  },
  multiplayer: {
    serverUrl: "",
    playerName: "Pilot",
    joinCode: "",
    roomCode: "",
    socket: null,
    playerId: null,
    hostId: null,
    players: [],
    playerProfiles: {},
    lobbySettings: {
      route: "asteroidBelt",
      difficulty: 1,
      timerMinutes: 5,
      startingWeapon: "emberBolt",
    },
    connected: false,
    connecting: false,
    started: false,
    manualClose: false,
    runtime: {
      active: false,
      mode: "solo",
      remotePilots: {},
      inputClock: 0,
      snapshotClock: 0,
      pendingDash: false,
    },
  },
  sceneTransitionActive: false,
};

const xpCurve = level => {
  const lateScalingLevel = Math.max(0, level - 1);
  return Math.floor(8 + level * level * 2.9 + Math.pow(lateScalingLevel, 2.25) * 0.95);
};

function resizeGameViewport() {
  WIDTH = LOGICAL_WIDTH;
  HEIGHT = LOGICAL_HEIGHT;
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  if (state.player) {
    const viewportW = WIDTH / CAMERA_ZOOM;
    const viewportH = HEIGHT / CAMERA_ZOOM;
    state.camera.x = clamp(state.player.x - viewportW / 2, 0, Math.max(0, WORLD_W - viewportW));
    state.camera.y = clamp(state.player.y - viewportH / 2, 0, Math.max(0, WORLD_H - viewportH));
    syncHud();
  }
}

function difficultyCreditBonus() {
  return 1 + (state.currentRun.difficulty - 1) * 0.25;
}

function difficultyAugmentFindBonus() {
  return 1 + (state.currentRun.difficulty - 1) * 0.2;
}

function difficultyXpRequirementMultiplier() {
  return 1 + (state.currentRun.difficulty - 1) * 0.18;
}

function runXpCurve(level) {
  return Math.floor(xpCurve(level) * difficultyXpRequirementMultiplier());
}

function planetSpawnChance() {
  let chance = PLANET_SPAWN_CHANCE + (state.currentRun.difficulty - 1) * PLANET_SPAWN_DIFFICULTY_BONUS;
  if (ventariVoyageActive()) {
    chance += PLANET_SPAWN_VENTARI_BONUS;
  }
  return clamp(chance, 0, 1);
}

function formatVersionNumber(level) {
  return (1 + Math.max(0, level) / 100).toFixed(2);
}

function formatVersionLabel(level) {
  return `Ver. ${formatVersionNumber(level)}`;
}

function enemyDisplayName(type) {
  if (enemyTypeLabels[type]) return enemyTypeLabels[type];
  return type
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/^./, char => char.toUpperCase());
}

const HOSTILE_INTEL_DEFS = [
  {
    id: "shade",
    tier: "Common Raider",
    overview: "Baseline strike craft that closes directly on the player and overwhelms with numbers.",
    systems: "No shields. Pure contact pressure and the most common hull in the belt.",
    stats: {
      hull: 26,
      shield: 0,
      speed: 82,
      scrap: 1,
      attack: "8 contact damage",
    },
    tags: ["Swarm", "Chaser"],
  },
  {
    id: "hound",
    tier: "Interceptor",
    overview: "Fast pursuit craft that exists to collapse safe lanes and punish slow turns.",
    systems: "No shields. Very high opening speed with lighter hull than a Shade.",
    stats: {
      hull: 20,
      shield: 0,
      speed: 128,
      scrap: 2,
      attack: "6 contact damage",
    },
    tags: ["Fast", "Pressure"],
  },
  {
    id: "brute",
    tier: "Heavy Rammer",
    overview: "Large armored attacker that soaks fire and pushes the player out of clear flight paths.",
    systems: "No shields. Slow body, heavy hull, and dangerous contact bursts in dense packs.",
    stats: {
      hull: 92,
      shield: 0,
      speed: 58,
      scrap: 5,
      attack: "14 contact damage",
    },
    tags: ["Heavy", "Frontline"],
  },
  {
    id: "witch",
    tier: "Ranged Disruptor",
    overview: "Mid-range support attacker that strips defenses before melee ships arrive.",
    systems: "Fires orb shots that target shields first and keeps distance while kiting.",
    stats: {
      hull: 62,
      shield: 0,
      speed: 75,
      scrap: 4,
      attack: "10 contact, 9 shield-shot damage",
    },
    tags: ["Ranged", "Shield Break"],
  },
  {
    id: "aegis",
    tier: "Shield Cruiser",
    overview: "Shielded warship that enters later in a run and adds sustained ranged pressure.",
    systems: "Heavy shield reserve, ranged shield-shot volleys, and durable frontline presence.",
    stats: {
      hull: 235,
      shield: 170,
      speed: 74,
      scrap: 7,
      attack: "16 contact, 16 ranged shield damage",
    },
    tags: ["Shielded", "Cruiser"],
  },
  {
    id: "drifter",
    tier: "Anomaly Carrier",
    overview: "Null field vessel that punishes close play by slowing the player and decaying while engaged.",
    systems: "Creates a local slow zone around itself and burns out over time while the field is active.",
    stats: {
      hull: 210,
      shield: 185,
      speed: 62,
      scrap: 6,
      attack: "13 contact damage",
    },
    tags: ["Slow Field", "Zone Control"],
  },
  {
    id: "reactor",
    tier: "Siege Bomber",
    overview: "Rare heavy bomber that crawls toward the player and detonates once it closes the gap.",
    systems: "Explodes on proximity with a large blast radius and extremely high durability for a non-elite hull.",
    stats: {
      hull: 340,
      shield: 260,
      speed: 34,
      scrap: 10,
      attack: "72 explosive damage on detonation",
    },
    tags: ["Explosive", "Rare Spawn"],
  },
  {
    id: "relay",
    tier: "Support Shepherd",
    overview: "Battlefield support ship that keeps nearby enemies alive and moving faster.",
    systems: "Projects an ally aura that heals nearby hostiles and increases their movement speed.",
    stats: {
      hull: 205,
      shield: 165,
      speed: 78,
      scrap: 8,
      attack: "12 contact damage",
    },
    tags: ["Healer", "Haste Aura"],
  },
  {
    id: "scrambler",
    tier: "Hack Sniper",
    overview: "Rare electronic warfare ship that weaponizes the hack debuff against the player.",
    systems: "Fires hack payload rounds, carries shields, and is hard-capped to ten live hulls at a time.",
    stats: {
      hull: 168,
      shield: 118,
      speed: 92,
      scrap: 9,
      attack: "11 contact, 11 hack-shot damage",
    },
    tags: ["Rare", "Hack Payload"],
  },
  {
    id: "viper",
    tier: "Elite Ace",
    overview: "High-speed elite hunter built to force brutal collision checks and punish sloppy evasive lines.",
    systems: "Shielded elite interceptor with very high movement speed and a flat 50 damage ram.",
    stats: {
      hull: 190,
      shield: 140,
      speed: 168,
      scrap: 14,
      attack: "50 contact damage",
    },
    tags: ["Elite", "Burst Contact"],
  },
  {
    id: "bastion",
    tier: "Elite Dreadnought",
    overview: "Late-run siege fortress that anchors waves with extreme durability and heavy hull damage fire.",
    systems: "Massive shields, slow advance, and 50 damage siege rounds that directly threaten the hull.",
    stats: {
      hull: 640,
      shield: 520,
      speed: 56,
      scrap: 18,
      attack: "50 siege-shot damage",
    },
    tags: ["Elite", "Siege Fire"],
  },
  {
    id: "leviathan",
    tier: "Rare Apex Carrier",
    overview: "Massive elite command hull that enters rarely, floods space with seeking warheads, and ruptures into a pack of shield-heavy hounds on death.",
    systems: "Extreme hull and shield reserve, medium-range homing missiles that self-detonate after two seconds, and a brood-release death protocol.",
    stats: {
      hull: 1280,
      shield: 1360,
      speed: 44,
      scrap: 24,
      attack: "24 contact, 34 missile-burst shield damage, spawns 20 shielded hounds on kill",
    },
    tags: ["Elite", "Rare", "Carrier"],
  },
];

function hostileIntelPreview(type) {
  const preview = document.createElement("canvas");
  preview.width = 72;
  preview.height = 72;
  const c = preview.getContext("2d");
  c.imageSmoothingEnabled = false;
  const sprite = buildEnemySprite(type, false);
  c.drawImage(sprite, 4, 4, 64, 64);
  preview.className = "hostile-intel-sprite";
  return preview;
}

function createKillStats() {
  const killsByType = {};
  for (const type of Object.keys(enemyTypeLabels)) {
    killsByType[type] = 0;
  }
  return killsByType;
}

function hostileIntelUnlocked(id) {
  return Boolean(state.meta?.discoveredHostiles?.includes(id));
}

function discoverHostileIntel(type) {
  if (!state.meta || hostileIntelUnlocked(type) || !HOSTILE_INTEL_DEFS.some(hostile => hostile.id === type)) return false;
  state.meta.discoveredHostiles = [...(state.meta.discoveredHostiles || []), type];
  saveMetaProgression();
  renderHostileDataMenu();
  return true;
}

function enemyThreatTimeValue() {
  return threatTimeValue() * ENEMY_RAMP_MULTIPLIER;
}

function maxEnemyCount() {
  if (state.currentRun.difficulty === 1) return 150;
  if (!ventariVoyageActive() && state.currentRun.difficulty === 2) return 500;
  return MAX_ACTIVE_ENEMIES;
}

function normalThreatBasicEnemyOnly() {
  return !ventariVoyageActive() && state.currentRun.difficulty === 1;
}

function dangerousThreatWitchCapOnly() {
  return !ventariVoyageActive() && state.currentRun.difficulty === 2;
}

function asteroidRestrictedEnemyRoster() {
  return normalThreatBasicEnemyOnly() || dangerousThreatWitchCapOnly();
}

function activeEnemyTypeCount(type) {
  let count = 0;
  for (const enemy of state.enemies) {
    if (enemy.alive !== false && enemy.type === type) count += 1;
  }
  return count;
}

function leviathanDifficultyUnlocked() {
  return (state.currentRun?.difficulty || 1) >= 4;
}

function asteroidLowDifficultyHalfProgress() {
  if (ventariVoyageActive() || state.currentRun.difficulty > 2) return 1;
  const goalTime = Math.max(1, state.currentRun.goalTime || BASE_RUN_TIME);
  const rampWindow = state.currentRun.difficulty === 1 ? 0.78 : 0.68;
  const adjustedRampWindow = state.currentRun.difficulty === 2 ? 0.84 : rampWindow;
  return clamp(state.time / (goalTime * adjustedRampWindow), 0, 1);
}

function easiestDifficultyDurabilityScale() {
  if (ventariVoyageActive() || state.currentRun.difficulty > 2) return 1;
  const progress = asteroidLowDifficultyHalfProgress();
  if (state.currentRun.difficulty === 1) {
    return 0.56 + 0.24 * Math.pow(progress, 1.35);
  }
  return 0.68 + 0.16 * Math.pow(progress, 1.18);
}

function enemyDurabilityMultiplier() {
  const goalTime = Math.max(1, state.currentRun.goalTime || BASE_RUN_TIME);
  const progress = clamp(state.time / goalTime, 0, 1);
  return (1 + 2.5 * Math.pow(progress, 1.08)) * easiestDifficultyDurabilityScale();
}

function enemyRouteBaseStatMultiplier() {
  return ventariVoyageActive() ? 10 : 1;
}

function enemyRouteSpeedMultiplier() {
  return ventariVoyageActive() ? 2 : 1;
}

function enemyVoyageScale() {
  const goalTime = Math.max(1, state.currentRun.goalTime || BASE_RUN_TIME);
  const progress = clamp(state.time / goalTime, 0, 1);
  const routeBonus = ventariVoyageActive() ? 1 + 0.14 * progress : 1;
  return {
    hp: (1 + 0.42 * Math.pow(progress, 1.28)) * routeBonus,
    shield: (1 + 0.5 * Math.pow(progress, 1.32)) * routeBonus,
    speed: 1 + 0.18 * Math.pow(progress, 1.18) * routeBonus,
    damage: (1 + 0.72 * Math.pow(progress, 1.38)) * routeBonus,
  };
}

function applyEnemyVoyageScaling(enemy) {
  if (!enemy || enemy.alive === false) return;
  const scale = enemyVoyageScale();
  const hpRatio = enemy.maxHp > 0 ? enemy.hp / enemy.maxHp : 1;
  const shieldRatio = enemy.maxShield > 0 ? enemy.shield / enemy.maxShield : 1;

  enemy.maxHp = enemy.baseMaxHp * scale.hp;
  enemy.hp = clamp(enemy.maxHp * hpRatio, 0, enemy.maxHp);

  enemy.maxShield = enemy.baseMaxShield * scale.shield;
  enemy.shield = enemy.maxShield > 0 ? clamp(enemy.maxShield * shieldRatio, 0, enemy.maxShield) : 0;

  enemy.speed = enemy.baseSpeed * scale.speed;
  enemy.contactDamage = enemy.baseContactDamage * scale.damage;
  enemy.shotDamage = enemy.baseShotDamage * scale.damage;
  enemy.shotExplosionDamage = enemy.baseShotExplosionDamage * scale.damage;
  enemy.explosionDamage = enemy.baseExplosionDamage * scale.damage;
}

function metaPowerScore() {
  if (!state.meta) return 0;
  const upgradeScore = Object.values(state.meta.upgrades || {}).reduce((sum, level) => sum + level, 0);
  const unlockedAugments = (state.meta.unlockedAugments || []).length;
  const equippedAugments = (state.meta.equippedAugments || []).length;
  return upgradeScore + unlockedAugments * 8 + equippedAugments * 5;
}

function rookiePressureMultiplier() {
  const score = metaPowerScore();
  const completedRuns = state.meta?.totals?.runs || 0;
  const scoreRelief = 0.55 * (1 - Math.exp(-score / 42));
  const runRelief = Math.min(0.18, completedRuns * 0.04);
  return clamp(1.55 - scoreRelief - runRelief, 1.05, 1.55);
}

const metaUpgradeDefs = {
  shield: { name: "Shield Capacity", maxLevel: 100, baseCost: 22, scale: 1.12, description: "Adds more shield before hull damage." },
  shieldRegen: { name: "Shield Regen", maxLevel: 100, baseCost: 24, scale: 1.12, description: "Restores shields faster after a short delay." },
  hpRegen: { name: "HP Regen", maxLevel: 100, baseCost: 24, scale: 1.12, description: "Slowly repairs hull every second." },
  attackSpeed: { name: "Attack Speed", maxLevel: 100, baseCost: 24, scale: 1.12, description: "Fire weapons more often." },
  attackDamage: { name: "Attack Damage", maxLevel: 100, baseCost: 26, scale: 1.12, description: "Increase weapon and pulse damage." },
  overheatModule: { name: "Overheat Module", maxLevel: 100, baseCost: 5000, scale: 1.12, description: "Unlocks base critical chance. Starts at 1% and reaches 25% at max version." },
  overheatRounds: { name: "Overheat Rounds", maxLevel: 100, baseCost: 5000, scale: 1.12, description: "Unlocks base critical damage. Starts at 150% and reaches 300% at max version." },
  elementalResistance: { name: "Elemental Resistance", maxLevel: 100, baseCost: 28, scale: 1.12, description: "Reduces elemental affliction chance and elemental damage taken." },
  elementalProcChance: { name: "Elemental Proc", maxLevel: 100, baseCost: 28, scale: 1.12, description: "Raises the chance for elemental effects to trigger." },
  elementalDamage: { name: "Elemental Damage", maxLevel: 100, baseCost: 30, scale: 1.12, description: "Raises elemental damage dealt." },
  elementalDuration: { name: "Elemental Duration", maxLevel: 100, baseCost: 28, scale: 1.12, description: "Extends how long elemental effects last." },
  expIncrease: { name: "Scrap Yield", maxLevel: 100, baseCost: 18, scale: 1.11, description: "Gain more Scrap from enemy drops." },
  moreGold: { name: "More Credits", maxLevel: 100, baseCost: 20, scale: 1.11, description: "Earn more Ardonis Credits from enemies and survival." },
  phaseDash: { name: "Phase Dash", maxLevel: 100, baseCost: 34, scale: 1.13, description: "Reduces dash cooldown, lowers stamina cost, and increases dash distance." },
  piercing: { name: "Piercing Rounds", maxLevel: 100, baseCost: 32, scale: 1.12, description: "Adds permanent pierce and stronger carry-through damage." },
  weaponRange: { name: "Weapon Range", weaponSystem: "support", maxLevel: 100, baseCost: 22, scale: 1.11, description: "Makes shots travel farther before dissipating." },
  hyperdriveEngine: { name: "Hyperdrive Engine", maxLevel: 100, baseCost: 28, scale: 1.12, description: "Adds more boost, faster recharge, and cuts burnout recovery by 10% per level." },
  costReduction: { name: "Upgrade Discount", maxLevel: 100, baseCost: 40, scale: 1.14, description: "Reduces future hangar upgrade costs." },
};

const metaUpgradeVisuals = {
  shield: { icon: "SH", accent: "#7ee7ff" },
  shieldRegen: { icon: "SR", accent: "#5cc7ff" },
  hpRegen: { icon: "HR", accent: "#93ffb8" },
  attackSpeed: { icon: "AS", accent: "#ffd166" },
  attackDamage: { icon: "AD", accent: "#ff9d66" },
  overheatModule: { icon: "OM", accent: "#ffbb7a" },
  overheatRounds: { icon: "OR", accent: "#ffd36e" },
  elementalResistance: { icon: "ER", accent: "#9fffe8" },
  elementalProcChance: { icon: "EP", accent: "#ffcf8b" },
  elementalDamage: { icon: "ED", accent: "#ff9f6b" },
  elementalDuration: { icon: "ET", accent: "#ffc77e" },
  expIncrease: { icon: "SC", accent: "#92f0ff" },
  moreGold: { icon: "CR", accent: "#ffe27a" },
  phaseDash: { icon: "PD", accent: "#b29bff" },
  piercing: { icon: "PR", accent: "#8bf2ff" },
  weaponRange: { icon: "RG", accent: "#74d4ff" },
  hyperdriveEngine: { icon: "HD", accent: "#d0d7de" },
  costReduction: { icon: "DC", accent: "#d1f3ff" },
};

const passiveUpgradeVisuals = {
  swiftness: { icon: "TB", accent: "#8af6ff" },
  vitality: { icon: "HP", accent: "#ffd7a3" },
  magnet: { icon: "MG", accent: "#9ee4ff" },
  recovery: { icon: "RC", accent: "#7ee7ff" },
  overheatModule: { icon: "OM", accent: "#ffbb7a" },
  overheatRounds: { icon: "OR", accent: "#ffd36e" },
  elementalProcChance: { icon: "EP", accent: "#ffcf8b" },
  elementalDamage: { icon: "ED", accent: "#ff9f6b" },
  elementalDuration: { icon: "ET", accent: "#ffc77e" },
  piercingRounds: { icon: "PR", accent: "#8bf2ff" },
  weaponRange: { icon: "RG", accent: "#74d4ff" },
  emberBolt: { icon: "PL", accent: "#ffd585" },
  plasmaCannon: { icon: "PC", accent: "#7ae0ff" },
  photonPhazer: { icon: "PP", accent: "#8af6ff" },
  orbitBlades: { icon: "DR", accent: "#8af6ff" },
  novaPulse: { icon: "NP", accent: "#b7a0ff" },
};

const upgradeGlyphs = {
  shield: "shield",
  shieldRegen: "shieldRegen",
  hpRegen: "hullRegen",
  attackSpeed: "attackSpeed",
  attackDamage: "attackDamage",
  elementalResistance: "shield",
  elementalProcChance: "reactor",
  elementalDamage: "reactor",
  elementalDuration: "reactor",
  expIncrease: "scrap",
  moreGold: "credits",
  phaseDash: "phaseDash",
  piercing: "pierce",
  weaponRange: "range",
  hyperdriveEngine: "engine",
  costReduction: "discount",
  swiftness: "thruster",
  vitality: "hull",
  magnet: "magnet",
  recovery: "recovery",
  overheatModule: "reactor",
  overheatRounds: "warhead",
  piercingRounds: "pierce",
  emberBolt: "photon",
  plasmaCannon: "plasma",
  photonPhazer: "lightning",
  orbitBlades: "drone",
  novaPulse: "pulse",
};

const augmentGlyphs = {
  laserAmplifier: "photon",
  dualBarrelCannons: "dualBarrel",
  overchargedReactor: "reactor",
  augmentPiercingRounds: "pierce",
  explosivePayload: "explosion",
  chainLightningArray: "lightning",
  thermalWarheads: "warhead",
  radiationPayload: "quantum",
  railAccelerator: "rail",
  cryoPayload: "cryo",
  voidSingularity: "field",
  hackProtocol: "shock",
  crossSystemConduit: "quantum",
  orbitalStrikeModule: "orbital",
  shrapnelBurst: "shrapnel",
  novaLauncher: "nova",
  droneMissilePods: "drone",
  quantumWeaponCore: "quantum",
  tractorBeam: "magnet",
  slowingField: "field",
  shieldCapacitor: "shield",
  reactivePlating: "plating",
  nanobotRepairSystem: "recovery",
  energyBarrier: "shieldRegen",
  reflectiveArmor: "reflect",
  emergencyShieldBurst: "shieldBurst",
  adaptivePlating: "adaptive",
  kineticAbsorber: "absorb",
  armorReinforcement: "plating",
  droneShieldProjector: "drone",
  fortressCore: "fortress",
  gravityShield: "field",
  shockBarrier: "shock",
  titaniumHull: "hull",
};

const weaponDefs = {
  emberBolt: {
    name: "Photon Lance",
    slot: "primary",
    weaponSystem: "normal",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description(level) {
      const ranks = [
        "faster reload",
        "more damage",
        "+1 projectile",
        "pierce",
        "faster reload",
        "more damage",
        "+1 projectile",
        "crit chance",
      ];
      return `Auto-fires toward the nearest hostile contact. Next rank: ${ranks[level - 1] || "more damage and faster bolts"}.`;
    },
    apply(player) {
      applyNormalWeaponUpgrade(player, "emberBolt");
    },
  },
  plasmaCannon: {
    name: "Plasma Cannon",
    slot: "primary",
    weaponSystem: "normal",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description(level) {
      const ranks = [
        "replace your primary weapon with a crescent plasma wave",
        "larger wave",
        "more damage",
        "faster cycling",
        "more carry-through damage",
        "larger wave",
        "more damage",
        "stronger carry-through damage",
      ];
      return `Emits a close-range crescent wave that swells as it crests outward. Next rank: ${ranks[level] || "stronger and wider plasma"}.`;
    },
    apply(player) {
      applyNormalWeaponUpgrade(player, "plasmaCannon");
    },
  },
  photonPhazer: {
    name: "Photon Phazer",
    weaponSystem: "advanced",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description(level) {
      return level === 0
        ? "Unlocks a short-range lock-on beam that shreds the nearest target."
        : "Increases beam damage by 1% per version.";
    },
    apply(player) {
      player.weapons.photonPhazer.level = Math.max(1, player.weapons.photonPhazer.level || 0);
      player.weapons.photonPhazer.tickClock = 0;
    },
  },
  orbitBlades: {
    name: "Drone Halo",
    weaponSystem: "advanced",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description(level) {
      return level === 0
        ? "Unlocks a ring of attack drones that shreds nearby ships."
        : "Adds more drones early, then keeps raising orbital damage and rotation pressure.";
    },
    apply(player) {
      player.weapons.orbitBlades.level = Math.max(1, player.weapons.orbitBlades.level || 0);
    },
  },
  novaPulse: {
    name: "Nebula Pulse",
    weaponSystem: "advanced",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description(level) {
      return level === 0
        ? "Unlocks a periodic shockwave that clears space around your hull."
        : "Pulse expands farther, hits harder, and returns sooner.";
    },
    apply(player) {
      player.weapons.novaPulse.level = Math.max(1, player.weapons.novaPulse.level || 0);
    },
  },
};

function primaryWeaponId(player = state.player) {
  return player?.primaryWeapon || "emberBolt";
}

function primaryWeaponDef(player = state.player) {
  return weaponDefs[primaryWeaponId(player)] || weaponDefs.emberBolt;
}

function primaryWeaponState(player = state.player) {
  return player?.weapons?.[primaryWeaponId(player)] || player?.weapons?.emberBolt;
}

function primaryWeaponLevel(player = state.player) {
  return primaryWeaponState(player)?.level || 0;
}

function levelChoiceReady() {
  return performance.now() >= state.levelChoiceUnlockAt;
}

function equipPrimaryWeapon(player, id, level = 1) {
  if (!player || !weaponDefs[id] || weaponDefs[id].slot !== "primary") return;
  const cappedLevel = clamp(level, 1, weaponDefs[id].maxLevel);
  player.primaryWeapon = id;
  player.weapons[id].level = Math.max(player.weapons[id].level || 0, cappedLevel);
  player.weapons[id].cooldown = 0;
  if (player.weapons.plasmaCannon) {
    player.weapons.plasmaCannon.waveFlip = player.weapons.plasmaCannon.waveFlip || 1;
  }
}

function normalWeaponSystemIds() {
  return Object.entries(weaponDefs)
    .filter(([, def]) => def.slot === "primary" && def.weaponSystem === "normal")
    .map(([id]) => id);
}

function unlockedNormalWeaponSystemIds(player = state.player) {
  if (!player?.weapons) return [];
  return normalWeaponSystemIds().filter(id => (player.weapons[id]?.level || 0) > 0);
}

function weaponActivationColor(id) {
  if (id === "emberBolt") return "#ffd585";
  if (id === "plasmaCannon") return "#c99eff";
  return WEAPON_SYSTEM_COLORS[weaponDefs[id]?.weaponSystem] || "#8af6ff";
}

function weaponActivationText(id) {
  return `${weaponDefs[id]?.name || "Weapon"} Activated`;
}

function preparePrimaryWeaponForActivation(player, id, delay = WEAPON_SWITCH_FIRE_DELAY) {
  if (!player?.weapons?.[id]) return;
  player.weapons[id].cooldown = Math.max(player.weapons[id].cooldown || 0, delay);
  if (id === "plasmaCannon") {
    player.weapons.plasmaCannon.waveFlip = player.weapons.plasmaCannon.waveFlip || 1;
  }
}

function announcePrimaryWeaponActivation(player, id) {
  if (!player || !weaponDefs[id]) return;
  playPrimaryWeaponActivationSfx(id);
  const text = weaponActivationText(id);
  statusText.textContent = text;
  if (state.mode === "playing") {
    floatingText(player.x, player.y - 56, text, weaponActivationColor(id), 0.72);
  }
}

function switchNormalWeaponSystem(id, { player = state.player, silent = false, force = false } = {}) {
  if (!player || !weaponDefs[id] || weaponDefs[id].slot !== "primary") return false;
  if ((player.weapons[id]?.level || 0) <= 0) return false;
  if (!force && (player.weaponSwitchCooldown || 0) > 0) return false;
  if (!force && player.primaryWeapon === id) return false;
  player.primaryWeapon = id;
  preparePrimaryWeaponForActivation(player, id);
  if (!force) {
    player.weaponSwitchCooldown = WEAPON_SWITCH_COOLDOWN;
  }
  if (!silent) {
    announcePrimaryWeaponActivation(player, id);
    syncHud();
  }
  return true;
}

function cycleNormalWeaponSystem(delta) {
  const unlocked = unlockedNormalWeaponSystemIds();
  if (unlocked.length < 2) return false;
  const current = primaryWeaponId();
  const currentIndex = unlocked.indexOf(current);
  const nextIndex = currentIndex < 0
    ? 0
    : (currentIndex + delta + unlocked.length) % unlocked.length;
  return switchNormalWeaponSystem(unlocked[nextIndex]);
}

function selectNormalWeaponSystemSlot(slotIndex) {
  const id = normalWeaponSystemIds()[slotIndex];
  if (!id) return false;
  return switchNormalWeaponSystem(id);
}

function applyNormalWeaponUpgrade(player, id) {
  if (!player || !weaponDefs[id] || weaponDefs[id].slot !== "primary") return;
  const weapon = player.weapons[id];
  if (!weapon) return;
  if (weapon.level <= 0) {
    weapon.level = Math.max(1, primaryWeaponLevel(player));
  }
  switchNormalWeaponSystem(id, { player, silent: true, force: true });
  weapon.cooldown = 0;
}

function buildWeaponPreviewSprite(id) {
  const canvas = document.createElement("canvas");
  canvas.width = 164;
  canvas.height = 112;
  const c = canvas.getContext("2d");
  c.imageSmoothingEnabled = false;

  if (id === "orbitBlades") {
    const drone = getDroneSprite("combat");
    c.save();
    c.translate(82, 56);
    c.rotate(-0.18);

    c.globalAlpha = 0.2;
    c.strokeStyle = "#8af6ff";
    c.lineWidth = 4;
    c.beginPath();
    c.arc(0, 0, 34, 0, Math.PI * 2);
    c.stroke();

    c.globalAlpha = 1;
    c.save();
    c.translate(-30, 6);
    c.rotate(-0.55);
    c.drawImage(drone, -18, -18, 36, 36);
    c.restore();

    c.save();
    c.translate(0, -24);
    c.rotate(0.08);
    c.drawImage(drone, -18, -18, 36, 36);
    c.restore();

    c.save();
    c.translate(30, 8);
    c.rotate(0.62);
    c.drawImage(drone, -18, -18, 36, 36);
    c.restore();

    c.restore();
    return canvas;
  }

  const px = (x, y, w, h, color) => {
    c.fillStyle = color;
    c.fillRect(x, y, w, h);
  };

  if (id === "plasmaCannon") {
    c.save();
    c.translate(34, 82);
    c.rotate(-0.56);

    px(0, -18, 62, 36, "#0a1222");
    px(8, -16, 52, 32, "#1a2741");
    px(18, -22, 18, 44, "#223454");
    px(22, -16, 22, 32, "#1ef0ff");
    px(26, -12, 14, 24, "#d8fcff");
    px(6, -12, 12, 10, "#2d4167");
    px(2, -18, 16, 8, "#3a5178");
    px(10, -30, 12, 10, "#2a3552");
    px(4, -4, 14, 14, "#10192f");
    px(48, -18, 18, 36, "#10182d");
    px(60, -14, 8, 28, "#2d4168");
    px(6, -8, 10, 4, "#ffae3a");
    px(8, -2, 8, 4, "#ffae3a");
    px(-4, 10, 18, 8, "#09111f");
    px(-8, 16, 18, 10, "#22314f");
    px(-4, 20, 12, 6, "#dfefff");

    c.restore();

    c.save();
    c.translate(114, 34);
    c.rotate(-0.56);
    c.globalAlpha = 0.34;
    c.fillStyle = "#9d3cff";
    c.beginPath();
    c.ellipse(10, 0, 34, 24, 0, 0, Math.PI * 2);
    c.fill();
    c.globalAlpha = 0.26;
    c.fillStyle = "#27f1ff";
    c.beginPath();
    c.ellipse(0, 0, 24, 18, 0, 0, Math.PI * 2);
    c.fill();
    c.restore();

    c.save();
    c.translate(116, 34);
    c.rotate(-0.56);
    px(-6, -22, 12, 44, "#a100ff");
    px(0, -18, 10, 36, "#ff5dff");
    px(8, -14, 12, 28, "#27f1ff");
    px(14, -10, 10, 20, "#dfffff");
    px(20, -8, 12, 16, "#ff7cff");
    px(28, -4, 10, 10, "#9b38ff");
    c.restore();
    return canvas;
  }

  if (id === "photonPhazer") {
    c.save();
    c.translate(44, 70);
    c.rotate(-0.26);
    px(0, -12, 52, 24, "#0d1628");
    px(8, -10, 38, 20, "#1c2b47");
    px(18, -8, 14, 16, "#7cefff");
    px(22, -4, 6, 8, "#f0feff");
    px(44, -6, 14, 12, "#2f476f");
    px(-6, 8, 16, 8, "#0a1120");
    c.restore();

    c.save();
    c.translate(84, 52);
    c.rotate(-0.12);
    c.globalAlpha = 0.34;
    c.strokeStyle = "#4be2ff";
    c.lineWidth = 14;
    c.lineCap = "round";
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(46, -4);
    c.stroke();
    c.globalAlpha = 0.95;
    c.strokeStyle = "#dffeff";
    c.lineWidth = 4;
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(46, -4);
    c.stroke();
    c.restore();
    return canvas;
  }

  if (id === "novaPulse") {
    c.save();
    c.translate(82, 56);
    for (const radius of [18, 30, 42]) {
      c.globalAlpha = radius === 18 ? 0.95 : radius === 30 ? 0.6 : 0.35;
      c.strokeStyle = radius === 18 ? "#dffbff" : radius === 30 ? "#8af6ff" : "#9b7cff";
      c.lineWidth = radius === 18 ? 6 : radius === 30 ? 5 : 4;
      c.beginPath();
      c.arc(0, 0, radius, 0, Math.PI * 2);
      c.stroke();
    }
    c.globalAlpha = 1;
    c.fillStyle = "#8af6ff";
    c.beginPath();
    c.arc(0, 0, 10, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = "#f4fdff";
    c.beginPath();
    c.arc(0, 0, 5, 0, Math.PI * 2);
    c.fill();
    c.restore();
    return canvas;
  }

  c.save();
  c.translate(34, 68);
  c.rotate(-0.42);
  px(0, -12, 64, 24, "#121c31");
  px(8, -10, 46, 20, "#22314d");
  px(18, -8, 24, 16, "#ffd06e");
  px(26, -6, 10, 12, "#fff6c1");
  px(52, -8, 18, 16, "#5ec7ff");
  px(-6, 8, 18, 8, "#101827");
  c.restore();
  return canvas;
}

function rgbaFromHex(hex, alpha) {
  const cleaned = hex.replace("#", "");
  const value = cleaned.length === 3
    ? cleaned.split("").map(char => char + char).join("")
    : cleaned;
  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function upgradeVisualFor(id) {
  const visual = metaUpgradeVisuals[id] || passiveUpgradeVisuals[id] || { icon: "UP", accent: "#8af6ff" };
  return {
    accent: visual.accent,
    icon: visual.icon,
    glyph: upgradeGlyphs[id] || "core",
  };
}

function buildBasicUpgradeIcon(id, visualOverride = null) {
  const { accent, glyph } = visualOverride || upgradeVisualFor(id);
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const c = canvas.getContext("2d");
  c.imageSmoothingEnabled = true;

  const roundedRect = (x, y, w, h, r) => {
    c.beginPath();
    c.moveTo(x + r, y);
    c.lineTo(x + w - r, y);
    c.quadraticCurveTo(x + w, y, x + w, y + r);
    c.lineTo(x + w, y + h - r);
    c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    c.lineTo(x + r, y + h);
    c.quadraticCurveTo(x, y + h, x, y + h - r);
    c.lineTo(x, y + r);
    c.quadraticCurveTo(x, y, x + r, y);
    c.closePath();
  };

  const panelGradient = c.createLinearGradient(8, 8, 56, 56);
  panelGradient.addColorStop(0, "#0f1a2b");
  panelGradient.addColorStop(1, "#08111f");
  c.fillStyle = panelGradient;
  roundedRect(6, 6, 52, 52, 12);
  c.fill();

  const glowGradient = c.createRadialGradient(32, 28, 6, 32, 32, 26);
  glowGradient.addColorStop(0, rgbaFromHex(accent, 0.22));
  glowGradient.addColorStop(1, rgbaFromHex(accent, 0));
  c.fillStyle = glowGradient;
  roundedRect(8, 8, 48, 48, 11);
  c.fill();

  c.strokeStyle = rgbaFromHex(accent, 0.72);
  c.lineWidth = 2;
  roundedRect(9, 9, 46, 46, 10);
  c.stroke();

  const cx = 32;
  const cy = 32;
  c.lineCap = "round";
  c.lineJoin = "round";
  c.strokeStyle = accent;
  c.fillStyle = accent;

  const drawShield = () => {
    c.beginPath();
    c.moveTo(cx, 16);
    c.lineTo(46, 22);
    c.lineTo(43, 36);
    c.lineTo(cx, 48);
    c.lineTo(21, 36);
    c.lineTo(18, 22);
    c.closePath();
    c.stroke();
  };

  switch (glyph) {
    case "shield":
      c.lineWidth = 4;
      drawShield();
      break;
    case "shieldRegen":
      c.lineWidth = 4;
      drawShield();
      c.fillRect(29, 22, 6, 20);
      c.fillRect(22, 29, 20, 6);
      break;
    case "hull":
      c.lineWidth = 4;
      c.beginPath();
      c.moveTo(20, 24);
      c.lineTo(28, 16);
      c.lineTo(36, 16);
      c.lineTo(44, 24);
      c.lineTo(44, 40);
      c.lineTo(36, 48);
      c.lineTo(28, 48);
      c.lineTo(20, 40);
      c.closePath();
      c.stroke();
      c.fillRect(24, 28, 16, 8);
      break;
    case "hullRegen":
    case "recovery":
      c.lineWidth = 4;
      c.beginPath();
      c.moveTo(20, 24);
      c.lineTo(28, 16);
      c.lineTo(36, 16);
      c.lineTo(44, 24);
      c.lineTo(44, 40);
      c.lineTo(36, 48);
      c.lineTo(28, 48);
      c.lineTo(20, 40);
      c.closePath();
      c.stroke();
      c.fillRect(29, 22, 6, 20);
      c.fillRect(22, 29, 20, 6);
      break;
    case "attackSpeed":
    case "thruster":
      c.lineWidth = 4;
      for (const offset of [0, 10, 20]) {
        c.beginPath();
        c.moveTo(18 + offset, 20);
        c.lineTo(28 + offset, 32);
        c.lineTo(18 + offset, 44);
        c.stroke();
      }
      break;
    case "attackDamage":
      c.lineWidth = 4;
      c.beginPath();
      c.moveTo(cx, 16);
      c.lineTo(cx + 5, 27);
      c.lineTo(48, 32);
      c.lineTo(cx + 5, 37);
      c.lineTo(cx, 48);
      c.lineTo(cx - 5, 37);
      c.lineTo(16, 32);
      c.lineTo(cx - 5, 27);
      c.closePath();
      c.stroke();
      break;
    case "photon":
      c.fillStyle = rgbaFromHex(accent, 0.9);
      c.fillRect(14, 28, 24, 8);
      c.fillRect(10, 24, 8, 16);
      c.fillStyle = "#fef7d8";
      c.fillRect(36, 26, 12, 12);
      c.fillStyle = accent;
      c.fillRect(48, 29, 6, 6);
      break;
    case "plasma":
      c.lineWidth = 4;
      c.strokeStyle = "#ff78ff";
      c.beginPath();
      c.moveTo(14, 40);
      c.quadraticCurveTo(32, 14, 50, 40);
      c.stroke();
      c.strokeStyle = accent;
      c.lineWidth = 3;
      c.beginPath();
      c.moveTo(16, 39);
      c.quadraticCurveTo(32, 20, 48, 39);
      c.stroke();
      break;
    case "drone":
      c.lineWidth = 4;
      c.beginPath();
      c.arc(cx, cy, 14, 0, Math.PI * 2);
      c.stroke();
      c.fillStyle = "#f4fdff";
      c.beginPath();
      c.arc(cx, cy, 5, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = accent;
      c.fillRect(12, 29, 8, 6);
      c.fillRect(44, 29, 8, 6);
      break;
    case "scrap":
      c.lineWidth = 3;
      c.strokeStyle = rgbaFromHex(accent, 0.96);
      c.fillStyle = rgbaFromHex(accent, 0.18);
      for (const shard of [
        [32, 18, 10],
        [22, 32, 8],
        [42, 32, 8],
      ]) {
        c.beginPath();
        c.moveTo(shard[0], shard[1] - shard[2]);
        c.lineTo(shard[0] + shard[2], shard[1]);
        c.lineTo(shard[0], shard[1] + shard[2]);
        c.lineTo(shard[0] - shard[2], shard[1]);
        c.closePath();
        c.fill();
        c.stroke();
      }
      c.fillStyle = "#f4fdff";
      c.beginPath();
      c.arc(32, 18, 2.4, 0, Math.PI * 2);
      c.fill();
      break;
    case "credits":
      c.lineWidth = 4;
      c.beginPath();
      c.arc(cx, cy, 16, 0, Math.PI * 2);
      c.stroke();
      c.font = "bold 20px Trebuchet MS";
      c.textAlign = "center";
      c.textBaseline = "middle";
      c.fillText("C", cx, cy + 1);
      break;
    case "phaseDash":
      c.lineWidth = 3.5;
      c.strokeStyle = rgbaFromHex(accent, 0.95);
      c.beginPath();
      c.arc(24, cy, 8, Math.PI * 0.7, Math.PI * 1.3);
      c.stroke();
      c.beginPath();
      c.arc(40, cy, 8, Math.PI * 1.7, Math.PI * 0.3);
      c.stroke();
      c.fillStyle = "#f4fdff";
      c.beginPath();
      c.moveTo(18, cy + 2);
      c.lineTo(34, cy - 10);
      c.lineTo(34, cy - 4);
      c.lineTo(46, cy - 4);
      c.lineTo(46, cy + 4);
      c.lineTo(34, cy + 4);
      c.lineTo(34, cy + 10);
      c.closePath();
      c.fill();
      break;
    case "pierce":
      c.strokeStyle = rgbaFromHex(accent, 0.95);
      c.lineWidth = 3.5;
      c.beginPath();
      c.moveTo(14, 32);
      c.lineTo(46, 32);
      c.stroke();
      c.beginPath();
      c.moveTo(40, 24);
      c.lineTo(50, 32);
      c.lineTo(40, 40);
      c.stroke();
      c.beginPath();
      c.moveTo(22, 22);
      c.lineTo(22, 42);
      c.stroke();
      c.beginPath();
      c.moveTo(32, 18);
      c.lineTo(32, 46);
      c.stroke();
      c.fillStyle = "#f4fdff";
      c.beginPath();
      c.moveTo(14, 32);
      c.lineTo(28, 24);
      c.lineTo(28, 29);
      c.lineTo(42, 29);
      c.lineTo(42, 35);
      c.lineTo(28, 35);
      c.lineTo(28, 40);
      c.closePath();
      c.fill();
      break;
    case "range":
      c.lineWidth = 4;
      c.beginPath();
      c.arc(cx, cy, 14, 0, Math.PI * 2);
      c.stroke();
      c.beginPath();
      c.moveTo(14, 32);
      c.lineTo(50, 32);
      c.stroke();
      c.beginPath();
      c.moveTo(42, 24);
      c.lineTo(50, 32);
      c.lineTo(42, 40);
      c.stroke();
      break;
    case "engine":
      c.fillStyle = accent;
      c.fillRect(20, 18, 24, 18);
      c.fillRect(24, 36, 16, 8);
      c.fillStyle = "#f4fdff";
      c.beginPath();
      c.moveTo(32, 50);
      c.lineTo(24, 38);
      c.lineTo(40, 38);
      c.closePath();
      c.fill();
      break;
    case "discount":
      c.lineWidth = 4;
      c.beginPath();
      c.moveTo(20, 18);
      c.lineTo(44, 18);
      c.lineTo(44, 36);
      c.lineTo(32, 48);
      c.lineTo(20, 36);
      c.closePath();
      c.stroke();
      c.beginPath();
      c.moveTo(32, 22);
      c.lineTo(32, 38);
      c.stroke();
      c.beginPath();
      c.moveTo(26, 32);
      c.lineTo(32, 38);
      c.lineTo(38, 32);
      c.stroke();
      break;
    case "field":
      c.lineWidth = 4;
      c.beginPath();
      c.arc(cx, cy, 18, 0, Math.PI * 2);
      c.stroke();
      c.beginPath();
      c.arc(cx, cy, 8, 0, Math.PI * 2);
      c.stroke();
      break;
    case "magnet":
      c.lineWidth = 5;
      c.beginPath();
      c.moveTo(20, 18);
      c.lineTo(20, 34);
      c.quadraticCurveTo(20, 46, 32, 46);
      c.quadraticCurveTo(44, 46, 44, 34);
      c.lineTo(44, 18);
      c.stroke();
      c.fillRect(16, 14, 8, 8);
      c.fillRect(40, 14, 8, 8);
      break;
    case "pulse":
      c.lineWidth = 4;
      for (const radius of [8, 16, 24]) {
        c.beginPath();
        c.arc(cx, cy, radius, 0, Math.PI * 2);
        c.stroke();
      }
      break;
    case "dualBarrel":
      c.fillStyle = accent;
      c.fillRect(18, 20, 9, 24);
      c.fillRect(37, 20, 9, 24);
      c.fillStyle = "#f4fdff";
      c.fillRect(14, 26, 6, 12);
      c.fillRect(46, 26, 6, 12);
      c.fillStyle = rgbaFromHex(accent, 0.45);
      c.fillRect(28, 24, 8, 16);
      break;
    case "reactor":
      c.lineWidth = 3.5;
      c.strokeStyle = rgbaFromHex(accent, 0.92);
      c.beginPath();
      c.moveTo(32, 16);
      c.lineTo(46, 24);
      c.lineTo(46, 40);
      c.lineTo(32, 48);
      c.lineTo(18, 40);
      c.lineTo(18, 24);
      c.closePath();
      c.stroke();
      c.fillStyle = "#f4fdff";
      c.beginPath();
      c.arc(32, 32, 6, 0, Math.PI * 2);
      c.fill();
      c.strokeStyle = rgbaFromHex(accent, 0.45);
      c.beginPath();
      c.arc(32, 32, 12, 0, Math.PI * 2);
      c.stroke();
      break;
    case "explosion":
      c.lineWidth = 3.5;
      c.strokeStyle = rgbaFromHex(accent, 0.92);
      c.fillStyle = rgbaFromHex(accent, 0.22);
      c.beginPath();
      c.moveTo(32, 14);
      c.lineTo(38, 24);
      c.lineTo(50, 22);
      c.lineTo(43, 31);
      c.lineTo(50, 42);
      c.lineTo(38, 40);
      c.lineTo(32, 50);
      c.lineTo(26, 40);
      c.lineTo(14, 42);
      c.lineTo(21, 31);
      c.lineTo(14, 22);
      c.lineTo(26, 24);
      c.closePath();
      c.fill();
      c.stroke();
      break;
    case "lightning":
      c.fillStyle = "#f4fdff";
      c.strokeStyle = rgbaFromHex(accent, 0.9);
      c.lineWidth = 3.5;
      c.beginPath();
      c.moveTo(36, 14);
      c.lineTo(24, 30);
      c.lineTo(33, 30);
      c.lineTo(26, 50);
      c.lineTo(42, 28);
      c.lineTo(32, 28);
      c.closePath();
      c.fill();
      c.stroke();
      break;
    case "warhead":
      c.lineWidth = 3;
      c.strokeStyle = rgbaFromHex(accent, 0.95);
      c.fillStyle = rgbaFromHex(accent, 0.2);
      c.beginPath();
      c.moveTo(18, 32);
      c.lineTo(28, 22);
      c.lineTo(42, 22);
      c.lineTo(48, 32);
      c.lineTo(42, 42);
      c.lineTo(28, 42);
      c.closePath();
      c.fill();
      c.stroke();
      c.fillStyle = "#f4fdff";
      c.beginPath();
      c.moveTo(48, 32);
      c.lineTo(54, 28);
      c.lineTo(54, 36);
      c.closePath();
      c.fill();
      c.fillStyle = accent;
      c.fillRect(16, 24, 4, 5);
      c.fillRect(16, 35, 4, 5);
      break;
    case "rail":
      c.lineWidth = 3.5;
      c.strokeStyle = rgbaFromHex(accent, 0.92);
      c.beginPath();
      c.arc(20, 32, 7, 0, Math.PI * 2);
      c.stroke();
      c.beginPath();
      c.arc(44, 32, 7, 0, Math.PI * 2);
      c.stroke();
      c.strokeStyle = "#f4fdff";
      c.lineWidth = 5;
      c.beginPath();
      c.moveTo(12, 32);
      c.lineTo(52, 32);
      c.stroke();
      break;
    case "cryo":
      c.lineWidth = 3;
      c.strokeStyle = rgbaFromHex(accent, 0.95);
      for (const angle of [0, Math.PI / 3, (2 * Math.PI) / 3]) {
        const dx = Math.cos(angle) * 16;
        const dy = Math.sin(angle) * 16;
        c.beginPath();
        c.moveTo(cx - dx, cy - dy);
        c.lineTo(cx + dx, cy + dy);
        c.stroke();
      }
      c.fillStyle = "#f4fdff";
      c.beginPath();
      c.arc(cx, cy, 3.5, 0, Math.PI * 2);
      c.fill();
      break;
    case "orbital":
      c.lineWidth = 3.5;
      c.strokeStyle = rgbaFromHex(accent, 0.9);
      c.beginPath();
      c.arc(26, 38, 11, 0, Math.PI * 2);
      c.stroke();
      c.strokeStyle = "#f4fdff";
      c.beginPath();
      c.moveTo(40, 14);
      c.lineTo(40, 44);
      c.stroke();
      c.fillStyle = accent;
      c.beginPath();
      c.moveTo(36, 18);
      c.lineTo(44, 18);
      c.lineTo(40, 10);
      c.closePath();
      c.fill();
      break;
    case "shrapnel":
      c.lineWidth = 3;
      c.strokeStyle = rgbaFromHex(accent, 0.92);
      for (const point of [
        [32, 16, 32, 24],
        [16, 32, 24, 32],
        [48, 32, 40, 32],
        [22, 22, 27, 27],
        [42, 22, 37, 27],
        [22, 42, 27, 37],
        [42, 42, 37, 37],
      ]) {
        c.beginPath();
        c.moveTo(point[0], point[1]);
        c.lineTo(point[2], point[3]);
        c.stroke();
      }
      c.fillStyle = "#f4fdff";
      c.beginPath();
      c.arc(cx, cy, 5, 0, Math.PI * 2);
      c.fill();
      break;
    case "nova":
      c.lineWidth = 3;
      c.strokeStyle = rgbaFromHex(accent, 0.95);
      for (const [dx, dy] of [
        [0, -16],
        [14, -8],
        [14, 8],
        [0, 16],
        [-14, 8],
        [-14, -8],
      ]) {
        c.beginPath();
        c.moveTo(cx, cy);
        c.lineTo(cx + dx, cy + dy);
        c.stroke();
      }
      c.fillStyle = "#f4fdff";
      c.beginPath();
      c.arc(cx, cy, 8, 0, Math.PI * 2);
      c.fill();
      break;
    case "quantum":
      c.lineWidth = 2.75;
      c.strokeStyle = rgbaFromHex(accent, 0.9);
      c.beginPath();
      c.ellipse(cx, cy, 16, 8, 0, 0, Math.PI * 2);
      c.stroke();
      c.beginPath();
      c.ellipse(cx, cy, 16, 8, Math.PI / 3, 0, Math.PI * 2);
      c.stroke();
      c.beginPath();
      c.ellipse(cx, cy, 16, 8, -Math.PI / 3, 0, Math.PI * 2);
      c.stroke();
      c.fillStyle = "#f4fdff";
      c.beginPath();
      c.arc(cx, cy, 4, 0, Math.PI * 2);
      c.fill();
      break;
    case "plating":
      c.lineWidth = 3.5;
      c.strokeStyle = rgbaFromHex(accent, 0.92);
      for (const inset of [0, 6, 12]) {
        c.beginPath();
        c.moveTo(18 + inset, 24 + inset * 0.3);
        c.lineTo(32, 16 + inset * 0.3);
        c.lineTo(46 - inset, 24 + inset * 0.3);
        c.lineTo(32, 40 + inset * 0.25);
        c.closePath();
        c.stroke();
      }
      break;
    case "reflect":
      c.lineWidth = 3.5;
      drawShield();
      c.strokeStyle = "#f4fdff";
      c.beginPath();
      c.moveTo(22, 24);
      c.lineTo(40, 24);
      c.lineTo(34, 18);
      c.moveTo(40, 24);
      c.lineTo(34, 30);
      c.moveTo(24, 38);
      c.lineTo(42, 38);
      c.stroke();
      break;
    case "shieldBurst":
      c.lineWidth = 3.5;
      drawShield();
      c.strokeStyle = rgbaFromHex(accent, 0.84);
      for (const [x1, y1, x2, y2] of [
        [32, 10, 32, 18],
        [14, 24, 22, 24],
        [42, 24, 50, 24],
        [18, 44, 24, 38],
        [46, 44, 40, 38],
      ]) {
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x2, y2);
        c.stroke();
      }
      break;
    case "adaptive":
      c.lineWidth = 3;
      c.strokeStyle = rgbaFromHex(accent, 0.95);
      for (const [start, end] of [
        [0.15, 0.95],
        [1.25, 2.05],
        [2.35, 3.15],
        [3.45, 4.25],
        [4.55, 5.35],
      ]) {
        c.beginPath();
        c.arc(cx, cy, 15, start * Math.PI, end * Math.PI);
        c.stroke();
      }
      c.fillStyle = "#f4fdff";
      c.fillRect(29, 29, 6, 6);
      break;
    case "absorb":
      c.lineWidth = 3.5;
      c.strokeStyle = rgbaFromHex(accent, 0.95);
      c.beginPath();
      c.arc(cx, cy, 12, 0, Math.PI * 2);
      c.stroke();
      for (const [x1, y1, x2, y2, x3, y3] of [
        [32, 14, 28, 22, 36, 22],
        [50, 32, 42, 28, 42, 36],
        [32, 50, 28, 42, 36, 42],
        [14, 32, 22, 28, 22, 36],
      ]) {
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x2, y2);
        c.lineTo(x3, y3);
        c.stroke();
      }
      break;
    case "fortress":
      c.lineWidth = 3.5;
      c.strokeStyle = rgbaFromHex(accent, 0.94);
      c.strokeRect(18, 24, 28, 18);
      c.strokeRect(24, 18, 16, 8);
      c.fillStyle = "#f4fdff";
      c.fillRect(28, 30, 8, 12);
      break;
    case "shock":
      c.lineWidth = 3.5;
      c.strokeStyle = rgbaFromHex(accent, 0.88);
      c.beginPath();
      c.arc(cx, cy, 16, 0, Math.PI * 2);
      c.stroke();
      c.strokeStyle = "#f4fdff";
      c.beginPath();
      c.moveTo(30, 18);
      c.lineTo(24, 31);
      c.lineTo(32, 31);
      c.lineTo(28, 46);
      c.lineTo(40, 30);
      c.lineTo(32, 30);
      c.stroke();
      break;
    default:
      c.lineWidth = 4;
      c.beginPath();
      c.arc(cx, cy, 16, 0, Math.PI * 2);
      c.stroke();
      c.fillRect(28, 28, 8, 8);
      break;
  }

  return canvas;
}

function basicUpgradeIconDataUrl(id) {
  if (!basicUpgradeIconCache.has(id)) {
    basicUpgradeIconCache.set(id, buildBasicUpgradeIcon(id).toDataURL());
  }
  return basicUpgradeIconCache.get(id);
}

function augmentIconDataUrl(id, def) {
  if (!augmentIconCache.has(id)) {
    const glyph = augmentGlyphs[id] || "core";
    const icon = buildBasicUpgradeIcon(`augment:${id}`, { accent: def.accent, glyph });
    augmentIconCache.set(id, icon.toDataURL());
  }
  return augmentIconCache.get(id);
}

function buildBasicUpgradePreview(id) {
  const canvas = document.createElement("canvas");
  canvas.width = 164;
  canvas.height = 112;
  const c = canvas.getContext("2d");
  const { accent } = upgradeVisualFor(id);
  const icon = buildBasicUpgradeIcon(id);

  c.fillStyle = "#08111f";
  c.fillRect(0, 0, canvas.width, canvas.height);
  const glow = c.createRadialGradient(82, 56, 8, 82, 56, 54);
  glow.addColorStop(0, rgbaFromHex(accent, 0.22));
  glow.addColorStop(0.6, rgbaFromHex(accent, 0.08));
  glow.addColorStop(1, "rgba(0, 0, 0, 0)");
  c.fillStyle = glow;
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.drawImage(icon, 46, 20, 72, 72);
  return canvas;
}

function basicUpgradePreviewDataUrl(id) {
  if (!basicUpgradePreviewCache.has(id)) {
    basicUpgradePreviewCache.set(id, buildBasicUpgradePreview(id).toDataURL());
  }
  return basicUpgradePreviewCache.get(id);
}

function buildDroneSprite(kind = "combat") {
  const canvas = document.createElement("canvas");
  canvas.width = 48;
  canvas.height = 48;
  const c = canvas.getContext("2d");
  c.imageSmoothingEnabled = false;
  const px = (x, y, w, h, color) => {
    c.fillStyle = color;
    c.fillRect(x, y, w, h);
  };
  const palette = {
    combat: {
      shell: "#bfcfe8",
      mid: "#6980a8",
      dark: "#16243e",
      core: "#8af6ff",
      hot: "#ffd07f",
      extra: "#31dfff",
    },
    missile: {
      shell: "#d7dce8",
      mid: "#60769e",
      dark: "#15223a",
      core: "#74ebff",
      hot: "#ff9f64",
      extra: "#ffcc7f",
    },
    shield: {
      shell: "#d8f3ff",
      mid: "#66a2c7",
      dark: "#173555",
      core: "#8af6ff",
      hot: "#cfffff",
      extra: "#5ecbff",
    },
  }[kind] || {
    shell: "#bfcfe8",
    mid: "#6980a8",
    dark: "#16243e",
    core: "#8af6ff",
    hot: "#ffd07f",
    extra: "#31dfff",
  };

  px(20, 4, 8, 4, palette.mid);
  px(16, 8, 16, 4, palette.mid);
  px(12, 12, 24, 4, palette.shell);
  px(8, 16, 32, 4, palette.shell);
  px(6, 20, 36, 8, palette.shell);
  px(8, 28, 32, 4, palette.shell);
  px(12, 32, 24, 4, palette.mid);
  px(16, 36, 16, 4, palette.mid);
  px(20, 40, 8, 4, palette.mid);

  px(18, 8, 12, 4, palette.dark);
  px(14, 12, 20, 4, palette.dark);
  px(10, 16, 28, 4, palette.dark);
  px(8, 20, 32, 8, palette.dark);
  px(10, 28, 28, 4, palette.dark);
  px(14, 32, 20, 4, palette.dark);
  px(18, 36, 12, 4, palette.dark);

  px(20, 12, 8, 4, palette.extra);
  px(18, 16, 12, 16, palette.core);
  px(20, 18, 8, 12, "#f5fdff");
  px(20, 32, 8, 4, palette.extra);

  px(4, 20, 4, 8, palette.mid);
  px(40, 20, 4, 8, palette.mid);
  px(2, 22, 4, 4, palette.dark);
  px(42, 22, 4, 4, palette.dark);
  px(12, 6, 4, 4, palette.shell);
  px(32, 6, 4, 4, palette.shell);
  px(12, 38, 4, 4, palette.mid);
  px(32, 38, 4, 4, palette.mid);

  if (kind === "combat") {
    px(6, 16, 4, 4, palette.mid);
    px(38, 16, 4, 4, palette.mid);
    px(6, 28, 4, 4, palette.mid);
    px(38, 28, 4, 4, palette.mid);
    px(16, 2, 4, 4, palette.shell);
    px(28, 2, 4, 4, palette.shell);
    px(8, 20, 4, 4, palette.hot);
    px(36, 20, 4, 4, palette.hot);
  } else if (kind === "missile") {
    px(8, 16, 4, 6, palette.hot);
    px(36, 16, 4, 6, palette.hot);
    px(8, 26, 4, 6, palette.hot);
    px(36, 26, 4, 6, palette.hot);
    px(18, 40, 4, 2, palette.hot);
    px(26, 40, 4, 2, palette.hot);
  } else if (kind === "shield") {
    px(16, 4, 16, 2, palette.extra);
    px(8, 14, 4, 4, palette.extra);
    px(36, 14, 4, 4, palette.extra);
    px(8, 30, 4, 4, palette.extra);
    px(36, 30, 4, 4, palette.extra);
    px(16, 40, 16, 2, palette.extra);
  }

  return canvas;
}

function getDroneSprite(kind = "combat") {
  if (!droneSpriteCache.has(kind)) {
    droneSpriteCache.set(kind, buildDroneSprite(kind));
  }
  return droneSpriteCache.get(kind);
}

function droneSpriteDataUrl(kind = "combat") {
  const key = `url:${kind}`;
  if (!droneSpriteCache.has(key)) {
    droneSpriteCache.set(key, getDroneSprite(kind).toDataURL());
  }
  return droneSpriteCache.get(key);
}

function buildPlasmaWaveSprite(radius) {
  const innerWidth = Math.ceil(radius * 4.8);
  const innerHeight = Math.ceil(radius * 2.6);
  const padding = Math.ceil(radius * 1.35);
  const width = innerWidth + padding * 2;
  const height = innerHeight + padding * 2;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const c = canvas.getContext("2d");
  const startX = padding + innerWidth * 0.12;
  const endX = padding + innerWidth * 0.88;
  const baseY = padding + innerHeight * 0.84;
  const crestY = padding + innerHeight * 0.14;

  const drawArc = (lineWidth, strokeStyle, alpha, shadowBlur = 0, shadowColor = strokeStyle, yOffset = 0) => {
    c.save();
    c.globalAlpha = alpha;
    c.lineCap = "round";
    c.lineJoin = "round";
    c.lineWidth = lineWidth;
    c.strokeStyle = strokeStyle;
    c.shadowBlur = shadowBlur;
    c.shadowColor = shadowColor;
    c.beginPath();
    c.moveTo(startX, baseY + yOffset);
    c.quadraticCurveTo(width * 0.5, crestY + yOffset, endX, baseY + yOffset);
    c.stroke();
    c.restore();
  };

  drawArc(radius * 0.68, "rgba(76, 188, 255, 0.28)", 0.78, radius * 0.72, "rgba(76, 188, 255, 0.7)");
  drawArc(radius * 0.42, "#008dff", 0.92, radius * 0.42, "#19b9ff", -radius * 0.02);
  drawArc(radius * 0.22, "#76fbff", 1, radius * 0.24, "#76fbff", -radius * 0.05);
  drawArc(radius * 0.09, "rgba(238, 255, 255, 0.95)", 0.95, radius * 0.12, "#dbffff", -radius * 0.07);

  c.save();
  c.globalAlpha = 0.72;
  for (let i = 0; i < 11; i += 1) {
    const t = i / 10;
    const x = startX + (endX - startX) * t;
    const arcY = (1 - t) * (1 - t) * baseY + 2 * (1 - t) * t * crestY + t * t * baseY;
    const size = t === 0 || t === 1 ? 1.2 : 1.8;
    c.fillStyle = i % 2 === 0 ? "#7af7ff" : "#f2ffff";
    c.beginPath();
    c.arc(x, arcY - radius * 0.06, size, 0, Math.PI * 2);
    c.fill();
  }
  c.restore();

  canvas.anchorX = width * 0.5;
  canvas.anchorY = padding + innerHeight * 0.56;
  return canvas;
}

function plasmaWaveSprite(radius) {
  const key = Math.max(1, Math.round(radius));
  if (!plasmaWaveSpriteCache.has(key)) {
    plasmaWaveSpriteCache.set(key, buildPlasmaWaveSprite(key));
  }
  return plasmaWaveSpriteCache.get(key);
}

function weaponPreviewDataUrl(id) {
  if (!weaponPreviewCache.has(id)) {
    weaponPreviewCache.set(id, buildWeaponPreviewSprite(id).toDataURL());
  }
  return weaponPreviewCache.get(id);
}

function upgradeArtSources(id) {
  if (id === "photonLanceSystems") {
    return {
      src: choiceCardAssetSources.emberBolt,
      fallback: weaponPreviewDataUrl("emberBolt"),
      generated: false,
    };
  }
  if (id === "plasmaCannonSystems") {
    return {
      src: choiceCardAssetSources.plasmaCannon,
      fallback: weaponPreviewDataUrl("plasmaCannon"),
      generated: false,
    };
  }
  if (id === "droneHaloSystems") {
    return {
      src: weaponPreviewDataUrl("orbitBlades"),
      fallback: basicUpgradePreviewDataUrl(id),
      generated: true,
    };
  }
  if (id === "photonPhazerSystems") {
    return {
      src: weaponPreviewDataUrl("photonPhazer"),
      fallback: basicUpgradePreviewDataUrl(id),
      generated: true,
    };
  }
  if (id === "emberBolt") {
    return {
      src: choiceCardAssetSources.emberBolt,
      fallback: weaponPreviewDataUrl("emberBolt"),
      generated: false,
    };
  }
  if (id === "plasmaCannon") {
    return {
      src: choiceCardAssetSources.plasmaCannon,
      fallback: weaponPreviewDataUrl("plasmaCannon"),
      generated: false,
    };
  }
  if (id === "photonPhazer") {
    return {
      src: weaponPreviewDataUrl("photonPhazer"),
      fallback: basicUpgradePreviewDataUrl(id),
      generated: true,
    };
  }
  if (id === "orbitBlades") {
    return {
      src: weaponPreviewDataUrl("orbitBlades"),
      fallback: basicUpgradePreviewDataUrl(id),
      generated: true,
    };
  }
  if (id === "novaPulse") {
    return {
      src: weaponPreviewDataUrl("novaPulse"),
      fallback: basicUpgradePreviewDataUrl(id),
      generated: true,
    };
  }
  if (choiceCardAssetSources[id]) {
    return {
      src: choiceCardAssetSources[id],
      fallback: basicUpgradePreviewDataUrl(id),
      generated: false,
    };
  }
  return {
    src: basicUpgradePreviewDataUrl(id),
    fallback: "",
    generated: true,
  };
}

function upgradeIconSources(id) {
  if (id === "photonLanceSystems") {
    return {
      src: choiceCardAssetSources.emberBolt,
      fallback: basicUpgradeIconDataUrl(id),
      generated: false,
    };
  }
  if (id === "plasmaCannonSystems") {
    return {
      src: choiceCardAssetSources.plasmaCannon,
      fallback: basicUpgradeIconDataUrl(id),
      generated: false,
    };
  }
  if (id === "droneHaloSystems" || id === "orbitBlades") {
    return {
      src: droneSpriteDataUrl("combat"),
      fallback: basicUpgradeIconDataUrl(id),
      generated: true,
    };
  }
  if (id === "photonPhazerSystems") {
    return {
      src: weaponPreviewDataUrl("photonPhazer"),
      fallback: basicUpgradeIconDataUrl(id),
      generated: true,
    };
  }
  if (id === "photonPhazer") {
    return {
      src: weaponPreviewDataUrl("photonPhazer"),
      fallback: basicUpgradeIconDataUrl(id),
      generated: true,
    };
  }
  if (choiceCardAssetSources[id]) {
    return {
      src: choiceCardAssetSources[id],
      fallback: basicUpgradeIconDataUrl(id),
      generated: false,
    };
  }
  return {
    src: basicUpgradeIconDataUrl(id),
    fallback: "",
    generated: true,
  };
}

function populateUpgradeArt(container, id, title, imageClass = "") {
  if (!container) return;
  container.textContent = "";
  const sourcePicker = imageClass === "meta-upgrade-icon-image" ? upgradeIconSources : upgradeArtSources;
  const { src, fallback, generated } = sourcePicker(id);
  if (!src) {
    container.textContent = upgradeVisualFor(id).icon;
    return;
  }

  const img = document.createElement("img");
  img.alt = title;
  if (imageClass) img.className = imageClass;
  if (generated) {
    img.classList.add(imageClass === "meta-upgrade-icon-image" ? "generated-meta-icon" : "generated-upgrade-art");
  }
  img.src = src;
  if (fallback && fallback !== src) {
    img.addEventListener("error", () => {
      img.src = fallback;
    }, { once: true });
  }
  container.appendChild(img);
}

function populateChoiceCard(button, choice) {
  button.textContent = "";

  if (choice.id) {
    const art = document.createElement("div");
    art.className = "upgrade-card-art";
    populateUpgradeArt(art, choice.id, choice.title);
    button.appendChild(art);
  }

  if (choice.systemLabel) {
    const system = document.createElement("span");
    system.textContent = choice.systemLabel;
    system.style.display = "block";
    system.style.marginBottom = "0.45rem";
    system.style.fontSize = "0.72rem";
    system.style.letterSpacing = "0.12em";
    system.style.textTransform = "uppercase";
    system.style.color = WEAPON_SYSTEM_COLORS[choice.systemType] || "#8af6ff";
    button.appendChild(system);
  }

  const title = document.createElement("h3");
  title.textContent = choice.title;
  button.appendChild(title);

  const description = document.createElement("p");
  description.textContent = choice.description;
  button.appendChild(description);
}

function augmentIconMarkup(id, def) {
  const droneKind = id === "droneMissilePods"
    ? "missile"
    : id === "droneShieldProjector"
      ? "shield"
      : id === "orbitBlades"
        ? "combat"
        : "";

  if (droneKind) {
    return `<img class="augment-icon-image" src="${droneSpriteDataUrl(droneKind)}" alt="${def.name}">`;
  }
  return `<img class="augment-icon-image generated-augment-icon" src="${augmentIconDataUrl(id, def)}" alt="${def.name}">`;
}

const passiveDefs = {
  shield: {
    name: "Shield Capacity",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Raises shield capacity by 2% and restores that much shielding immediately.";
    },
    apply(player) {
      player.passives.shield += 1;
      const nextMaxShield = player.maxShield * 1.02;
      const gainedShield = nextMaxShield - player.maxShield;
      player.maxShield = nextMaxShield;
      player.shield = Math.min(player.maxShield, player.shield + gainedShield);
    },
  },
  shieldRegen: {
    name: "Shield Regen",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Raises shield regeneration after the recharge delay ends.";
    },
    apply(player) {
      player.passives.shieldRegen += 1;
      player.shieldRegenRate += 1;
    },
  },
  hpRegen: {
    name: "HP Regen",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Raises passive hull regeneration each second.";
    },
    apply(player) {
      player.passives.hpRegen += 1;
      player.hullRegen += 0.45;
    },
  },
  attackSpeed: {
    name: "Attack Speed",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Raises firing cadence across your ship systems.";
    },
    apply(player) {
      player.passives.attackSpeed += 1;
      player.attackSpeedMultiplier += 0.08;
    },
  },
  attackDamage: {
    name: "Attack Damage",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Raises damage across your ship systems by 2%.";
    },
    apply(player) {
      player.passives.attackDamage += 1;
      player.attackDamageMultiplier += 0.02;
    },
  },
  elementalResistance: {
    name: "Elemental Resistance",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Reduces elemental affliction chance and elemental damage taken.";
    },
    apply(player) {
      player.passives.elementalResistance += 1;
      player.elementalResistance = Math.min(0.65, player.elementalResistance + 0.05);
    },
  },
  elementalProcChance: {
    name: "Elemental Proc",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Raises the chance for elemental effects to trigger.";
    },
    apply(player) {
      player.passives.elementalProcChance += 1;
      player.elementalProcChanceMultiplier += 0.05;
    },
  },
  elementalDamage: {
    name: "Elemental Damage",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Raises elemental damage dealt by your systems.";
    },
    apply(player) {
      player.passives.elementalDamage += 1;
      player.elementalDamageMultiplier += 0.08;
    },
  },
  elementalDuration: {
    name: "Elemental Duration",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Extends the duration of elemental effects.";
    },
    apply(player) {
      player.passives.elementalDuration += 1;
      player.elementalDurationMultiplier += 0.06;
    },
  },
  expIncrease: {
    name: "Scrap Yield",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Increases Scrap recovered from combat pickups.";
    },
    apply(player) {
      player.passives.expIncrease += 1;
      player.xpMultiplier += 0.1;
    },
  },
  moreGold: {
    name: "More Credits",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Increases Ardonis Credits from combat and survival payout.";
    },
    apply(player) {
      player.passives.moreGold += 1;
      player.goldMultiplier += 0.1;
    },
  },
  phaseDash: {
    name: "Phase Dash",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Reduces dash cooldown, lowers dash stamina cost, and increases dash distance.";
    },
    apply(player) {
      player.passives.phaseDash += 1;
      player.dashCooldownMultiplier = Math.max(1 / 3, player.dashCooldownMultiplier - 0.08);
      player.dashDistanceMultiplier += 0.14;
      player.dashStaminaCost = Math.max(BASE_DASH_STAMINA_COST * 0.25, player.dashStaminaCost * 0.92);
    },
  },
  piercing: {
    name: "Piercing Rounds",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Adds permanent pierce and stronger carry-through damage.";
    },
    apply(player) {
      player.passives.piercing += 1;
      player.hubPierce += 1;
      player.pierceDamageFloor = Math.min(0.95, player.pierceDamageFloor + 0.08);
    },
  },
  swiftness: {
    name: "Thruster Boost",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Move faster and kite incoming squadrons more safely.";
    },
    apply(player) {
      player.passives.swiftness += 1;
    },
  },
  vitality: {
    name: "Hull Plating",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Raises max hull by 2% and repairs that much immediately.";
    },
    apply(player) {
      player.passives.vitality += 1;
      const nextMaxHp = player.maxHp * 1.02;
      const gainedHull = nextMaxHp - player.maxHp;
      player.maxHp = nextMaxHp;
      player.hp = Math.min(player.maxHp, player.hp + gainedHull);
    },
  },
  recovery: {
    name: "Shield Recycler",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Adds passive shield regeneration each second.";
    },
    apply(player) {
      player.passives.recovery += 1;
    },
  },
  overheatModule: {
    name: "Overheat Module",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Raises critical chance for all offensive systems by 2.5%.";
    },
    apply(player) {
      player.passives.overheatModule += 1;
      player.critChance = Math.min(0.95, (player.critChance || 0) + 0.025);
    },
  },
  overheatRounds: {
    name: "Overheat Rounds",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Raises critical damage across your weapons by 2%.";
    },
    apply(player) {
      player.passives.overheatRounds += 1;
      player.critDamageMultiplier = (player.critDamageMultiplier || 1) + 0.02;
    },
  },
  piercingRounds: {
    name: "Piercing Rounds",
    weaponSystem: "advanced",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Shots pierce more enemies and keep more damage after each hit.";
    },
    apply(player) {
      player.passives.piercingRounds += 1;
    },
  },
  weaponRange: {
    name: "Weapon Range",
    weaponSystem: "support",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Shots travel farther before fading out.";
    },
    apply(player) {
      player.passives.weaponRange += 1;
    },
  },
  hyperdriveEngine: {
    name: "Hyperdrive Engine",
    maxLevel: INFINITE_RUN_UPGRADE_LEVEL,
    description() {
      return "Adds boost reserve, faster recharge, and shorter burnout recovery.";
    },
    apply(player) {
      player.passives.hyperdriveEngine += 1;
      player.boostMax += 12;
      player.boostCharge = Math.min(player.boostMax, player.boostCharge + 12);
      player.boostRegenRate += 2.4;
      player.boostExhaustedCooldown = Math.max(0.2, player.boostExhaustedCooldown * 0.9);
      player.boostCooldown = Math.min(player.boostCooldown, player.boostExhaustedCooldown);
    },
  },
};

const VOYAGE_UPGRADE_BASE_COSTS = {
  shield: 110,
  shieldRegen: 105,
  hpRegen: 110,
  attackSpeed: 120,
  attackDamage: 126,
  elementalResistance: 140,
  elementalProcChance: 142,
  elementalDamage: 148,
  elementalDuration: 142,
  expIncrease: 96,
  moreGold: 102,
  phaseDash: 140,
  piercing: 134,
  hyperdriveEngine: 128,
  emberBolt: 120,
  plasmaCannon: 150,
  photonPhazer: 170,
  orbitBlades: 150,
  novaPulse: 155,
  swiftness: 90,
  vitality: 105,
  recovery: 98,
  overheatModule: 118,
  overheatRounds: 126,
  piercingRounds: 132,
  weaponRange: 108,
};

const VOYAGE_UPGRADE_CARD_SUMMARIES = {
  emberBolt: choice => choice.level === 0
    ? "Unlock Photon Lance for this voyage."
    : "Unlocked for this voyage.",
  plasmaCannon: choice => choice.level === 0
    ? "Unlock Plasma Cannon for this voyage."
    : "Unlocked for this voyage.",
  photonPhazer: choice => choice.level === 0 ? "Unlock a close lock-on beam." : "Unlocked for this voyage.",
  orbitBlades: choice => choice.level === 0 ? "Unlock orbiting attack drones." : "Unlocked for this voyage.",
  novaPulse: choice => choice.level === 0 ? "Unlock a periodic close shockwave." : "Unlocked for this voyage.",
  shield: "+2% shield and instant refill.",
  shieldRegen: "Faster shield recharge.",
  hpRegen: "More hull regen.",
  attackSpeed: "Higher firing cadence.",
  attackDamage: "Higher weapon damage. +2%.",
  elementalResistance: "Less elemental damage and status chance.",
  elementalProcChance: "Higher elemental trigger chance.",
  elementalDamage: "Higher elemental damage.",
  elementalDuration: "Longer elemental effects.",
  expIncrease: "More Scrap from pickups.",
  moreGold: "More Ardonis Credits earned.",
  phaseDash: "Lower dash cost and cooldown, more range.",
  piercing: "More pierce and carry-through damage.",
  swiftness: "Higher ship speed.",
  vitality: "+2% hull and instant repair.",
  recovery: "More shield regen each second.",
  overheatModule: "+2.5% critical chance.",
  overheatRounds: "+2% critical damage.",
  piercingRounds: "More pierce and retained damage.",
  weaponRange: "Longer weapon reach.",
  hyperdriveEngine: "More boost, faster recharge, shorter burnout.",
};

const HIDDEN_VOYAGE_UPGRADE_IDS = new Set([
  "recovery",
  "piercingRounds",
  "photonLanceSystems",
  "plasmaCannonSystems",
  "droneHaloSystems",
  "photonPhazerSystems",
]);

function weaponSystemLabel(systemType) {
  return WEAPON_SYSTEM_LABELS[systemType] || "";
}

function voyageUpgradeCardSummary(choice) {
  const hubRequirement = voyageUpgradeHubRequirement(choice);
  if (hubRequirement) return hubRequirement;
  const summary = VOYAGE_UPGRADE_CARD_SUMMARIES[choice.id];
  if (typeof summary === "function") {
    return summary(choice);
  }
  return summary || choice.description;
}

function resolveUpgradeWeaponSystem(id) {
  return weaponDefs[id]?.weaponSystem || passiveDefs[id]?.weaponSystem || metaUpgradeDefs[id]?.weaponSystem || "";
}

function isNormalWeaponSystemUpgrade(id) {
  return resolveUpgradeWeaponSystem(id) === "normal";
}

function isAdvancedWeaponSystemUpgrade(id) {
  return resolveUpgradeWeaponSystem(id) === "advanced";
}

function voyageUpgradeMenuActive() {
  return Boolean(voyageUpgradesMenu) && !voyageUpgradesMenu.classList.contains("hidden");
}

function supportUpgradeLabel() {
  return "Support Systems";
}

function voyageUpgradeHubRequirement(choice) {
  if (!choice) return "";
  if (choice.id === "overheatModule" && metaLevel("overheatModule") <= 0) {
    return "Unlock Overheat Module in Engineering Bay to enable in-voyage crit chance tuning.";
  }
  if (choice.id === "overheatRounds" && metaLevel("overheatRounds") <= 0) {
    return "Unlock Overheat Rounds in Engineering Bay to enable in-voyage crit damage tuning.";
  }
  return "";
}

function voyageUpgradeHubLocked(choice) {
  return Boolean(voyageUpgradeHubRequirement(choice));
}

function voyageUpgradeLevel(choice, player = state.player) {
  if (!player || !choice) return 0;
  if (choice.type === "weapon") {
    return player.weapons?.[choice.id]?.level || 0;
  }
  return player.passives?.[choice.id] || 0;
}

function voyageUpgradeBaseCost(choice) {
  return VOYAGE_UPGRADE_BASE_COSTS[choice.id] || (choice.type === "weapon" ? 130 : 96);
}

function isVoyageWeaponUnlockChoice(choice) {
  return Boolean(choice)
    && choice.type === "weapon"
    && Boolean(weaponDefs[choice.id]);
}

function currentRunWeaponUnlockCount(systemType, run = state.currentRun) {
  if (systemType === "normal") return Math.max(0, run?.normalWeaponUnlocksPurchased || 0);
  if (systemType === "advanced") return Math.max(0, run?.advancedWeaponUnlocksPurchased || 0);
  return 0;
}

function voyageWeaponUnlockCost(choice, run = state.currentRun) {
  return 100 * Math.pow(10, currentRunWeaponUnlockCount(choice.systemType, run));
}

function voyageWeaponChoiceUnlocked(choice, player = state.player) {
  return isVoyageWeaponUnlockChoice(choice) && voyageUpgradeLevel(choice, player) > 0;
}

function voyageUpgradeTierLabel(choice, player = state.player) {
  if (voyageUpgradeHubLocked(choice)) return "Hub Locked";
  if (voyageWeaponChoiceUnlocked(choice, player)) return "Unlocked";
  if (isVoyageWeaponUnlockChoice(choice)) return `Locked -> ${formatVersionLabel(1)}`;
  const currentLevel = voyageUpgradeLevel(choice, player);
  return `${formatVersionLabel(currentLevel)} -> ${formatVersionLabel(currentLevel + 1)}`;
}

function voyageUpgradeCost(choice, player = state.player) {
  if (voyageUpgradeHubLocked(choice)) return 0;
  const level = Math.max(0, voyageUpgradeLevel(choice, player));
  if (isVoyageWeaponUnlockChoice(choice)) return voyageWeaponUnlockCost(choice);
  if (level === 0) return 3;
  const baseWeight = clamp((voyageUpgradeBaseCost(choice) - 82) / 88, 0, 1);
  const growth = 1.16 + baseWeight * 0.06;
  const tierMultiplier = 1 + Math.floor(level / 4) * (0.1 + baseWeight * 0.04);
  const deepMultiplier = 1 + Math.max(0, level - 6) * (0.024 + baseWeight * 0.01);
  return Math.max(3, Math.floor(3 * Math.pow(growth, level) * tierMultiplier * deepMultiplier));
}

function voyageUpgradePurchaseLabel(choice, affordable, cost, player = state.player) {
  if (voyageUpgradeHubLocked(choice)) {
    return "Unlock in Engineering Bay";
  }
  if (voyageWeaponChoiceUnlocked(choice, player)) {
    return "Unlocked";
  }
  if (isVoyageWeaponUnlockChoice(choice)) {
    return affordable ? `Unlock for ${cost} Scrap` : `${cost} Scrap Required`;
  }
  return affordable ? `Spend ${cost} Scrap` : `${cost} Scrap Required`;
}

function voyageUpgradeStatusLabel(choice) {
  const systemLabel = weaponSystemLabel(choice.systemType);
  if (systemLabel) return systemLabel;
  return supportUpgradeLabel();
}

function voyageUpgradeStatusClass(choice) {
  if (choice.systemType === "normal") return "normal";
  if (choice.systemType === "advanced") return "advanced";
  return "support";
}

function incrementVoyageWeaponUnlockCounter(systemType) {
  if (systemType === "normal") {
    state.currentRun.normalWeaponUnlocksPurchased = Math.max(0, state.currentRun.normalWeaponUnlocksPurchased || 0) + 1;
    return;
  }
  if (systemType === "advanced") {
    state.currentRun.advancedWeaponUnlocksPurchased = Math.max(0, state.currentRun.advancedWeaponUnlocksPurchased || 0) + 1;
  }
}

function photonPhazerRange(level) {
  return 119;
}

function photonPhazerDamageRatio(level) {
  return 0.1 * (1 + Math.max(0, level - 1) * 0.01);
}

function photonPhazerTicksPerSecond(level) {
  return 2;
}

function canUseElementalAugments(systemType, player = state.player) {
  if (systemType === "advanced") return true;
  return systemType === "normal" && Boolean(player?.normalElementalAugmentsUnlocked);
}

function rollPlayerCrit(baseAmount, bonusChance = 0) {
  const player = state.player;
  const critChance = clamp((player?.critChance || 0) + bonusChance, 0, 0.95);
  const critMultiplier = Math.max(1, player?.critDamageMultiplier || 1);
  const crit = critChance > 0 && Math.random() < critChance;
  return {
    amount: baseAmount * (crit ? critMultiplier : 1),
    crit,
  };
}

const augmentDefs = {
  laserAmplifier: {
    name: "Laser Amplifier",
    category: "Offense",
    icon: "LA",
    accent: "#ffd36e",
    description: "25% chance for Photon Lance shots to deal double damage.",
  },
  dualBarrelCannons: {
    name: "Dual Barrel Cannons",
    category: "Offense",
    icon: "DB",
    accent: "#ffb067",
    description: "25% chance to fire a second full weapon volley.",
  },
  overchargedReactor: {
    name: "Overcharged Reactor",
    category: "Offense",
    icon: "OR",
    accent: "#8af6ff",
    description: "All weapons fire 20% faster.",
  },
  augmentPiercingRounds: {
    name: "Piercing Rounds",
    category: "Offense",
    icon: "PR",
    accent: "#8bf2ff",
    description: "Projectiles pierce one additional enemy.",
  },
  explosivePayload: {
    name: "Explosive Payload",
    category: "Offense",
    icon: "EX",
    accent: "#ff9f67",
    description: "25% chance for projectiles to detonate on impact.",
  },
  chainLightningArray: {
    name: "Electromagnetic Shot",
    category: "Elemental",
    icon: "CL",
    accent: "#8de4ff",
    description: "Advanced weapon hits have a 25% chance to arc, stun, and damage nearby enemies with falloff.",
  },
  thermalWarheads: {
    name: "Thermal Warheads",
    category: "Elemental",
    icon: "TW",
    accent: "#ff7b52",
    description: "Advanced weapon hits have a 25% chance to ignite targets and burn them for max-HP damage over time.",
  },
  radiationPayload: {
    name: "Radiation Payload",
    category: "Elemental",
    icon: "RD",
    accent: "#a7ff7a",
    description: "Advanced weapon hits have a 25% chance to irradiate targets, causing them to take more damage.",
  },
  railAccelerator: {
    name: "Rail Accelerator",
    category: "Offense",
    icon: "RA",
    accent: "#b8f6ff",
    description: "25% chance for Photon Lance rounds to become double-damage rail shots.",
  },
  cryoPayload: {
    name: "Cryo Payload",
    category: "Elemental",
    icon: "CR",
    accent: "#b7ecff",
    description: "Advanced weapon hits have a 25% chance to freeze enemies and a 50% chance to shatter frozen targets.",
  },
  voidSingularity: {
    name: "Void Singularity",
    category: "Elemental",
    icon: "VS",
    accent: "#b69eff",
    description: "Advanced weapon hits have a 25% chance to create a singularity that pulls in and damages enemies.",
  },
  hackProtocol: {
    name: "Hack Protocol",
    category: "Elemental",
    icon: "HK",
    accent: "#8dffb5",
    description: "Advanced weapon hits have a 25% chance to hack targets and turn them against nearby enemies.",
  },
  crossSystemConduit: {
    name: "Cross-System Conduit",
    category: "Elemental",
    icon: "XS",
    accent: "#d9f1ff",
    rarity: "rare",
    cacheType: AUGMENT_CACHE_TYPES.ardonis,
    description: "Allows elemental augments to affect Normal Weapon Systems when equipped.",
  },
  orbitalStrikeModule: {
    name: "Orbital Strike Module",
    category: "Offense",
    icon: "OS",
    accent: "#7edcff",
    description: "Calls in a periodic orbital strike near the nearest hostile ship.",
  },
  shrapnelBurst: {
    name: "Shrapnel Burst",
    category: "Offense",
    icon: "SB",
    accent: "#ffc86b",
    description: "Explosions leave fragment fields that shred enemies passing through them.",
  },
  novaLauncher: {
    name: "Nova Launcher",
    category: "Offense",
    icon: "NV",
    accent: "#c49cff",
    rarity: "rare",
    cacheType: AUGMENT_CACHE_TYPES.ardonis,
    description: "Photon Lance volleys fire outward in a radial burst instead of at a single target.",
  },
  droneMissilePods: {
    name: "Drone Missile Pods",
    category: "Offense",
    icon: "DM",
    accent: "#ffae73",
    description: "Deploys three missile drones that launch rockets every five seconds.",
  },
  quantumWeaponCore: {
    name: "Quantum Weapon Core",
    category: "Offense",
    icon: "QW",
    accent: "#9be6ff",
    description: "Grants one random weapon buff at the start of each run.",
  },
  tractorBeam: {
    name: "Tractor Beam",
    category: "Utility",
    icon: "TB",
    accent: "#9ee4ff",
    description: "Projects a medium pickup field around your ship that pulls in Scrap.",
  },
  slowingField: {
    name: "Slowing Field",
    category: "Defense",
    icon: "SF",
    accent: "#79ffd4",
    description: "Projects a local field around your ship that slows nearby enemies by 25%.",
  },
  shieldCapacitor: {
    name: "Shield Capacitor",
    category: "Defense",
    icon: "SC",
    accent: "#7ee7ff",
    description: "+25 base shield capacity.",
  },
  reactivePlating: {
    name: "Reactive Plating",
    category: "Defense",
    icon: "RP",
    accent: "#93b7ff",
    description: "Reduces incoming damage by 25%.",
  },
  nanobotRepairSystem: {
    name: "Nanobot Repair System",
    category: "Defense",
    icon: "NR",
    accent: "#93ffb8",
    description: "Adds 0.4 hull regeneration every second.",
  },
  energyBarrier: {
    name: "Energy Barrier",
    category: "Defense",
    icon: "EB",
    accent: "#8af6ff",
    description: "Shield regeneration rate is 35% faster.",
  },
  reflectiveArmor: {
    name: "Reflective Armor",
    category: "Defense",
    icon: "RF",
    accent: "#d9f1ff",
    description: "Reflects 40% of incoming damage back to the attacker.",
  },
  emergencyShieldBurst: {
    name: "Emergency Shield Burst",
    category: "Defense",
    icon: "ES",
    accent: "#8ff6ff",
    description: "Once per run, dropping below 10% hull instantly restores full shields.",
  },
  adaptivePlating: {
    name: "Adaptive Plating",
    category: "Defense",
    icon: "AP",
    accent: "#b6c7ff",
    description: "Taking damage grants 1.5 seconds of invulnerability on a 10 second cooldown.",
  },
  kineticAbsorber: {
    name: "Kinetic Absorber",
    category: "Defense",
    icon: "KA",
    accent: "#7cd2ff",
    description: "Part of incoming damage is converted back into shields.",
  },
  armorReinforcement: {
    name: "Armor Reinforcement",
    category: "Defense",
    icon: "AR",
    accent: "#c9d8ff",
    description: "Adds another 25% layer of defense.",
  },
  droneShieldProjector: {
    name: "Drone Shield Projector",
    category: "Defense",
    icon: "DS",
    accent: "#8af6ff",
    description: "Deploys shield drones that increase your shield reserve.",
  },
  fortressCore: {
    name: "Fortress Core",
    category: "Defense",
    icon: "FC",
    accent: "#8da6ff",
    description: "Adds 500 shield, but your ship is 35% slower.",
  },
  gravityShield: {
    name: "Gravity Shield",
    category: "Defense",
    icon: "GS",
    accent: "#b69eff",
    description: "Emits a slowing pulse every 10 seconds that hinders nearby enemies for 10 seconds.",
  },
  shockBarrier: {
    name: "Shock Barrier",
    category: "Defense",
    icon: "SB",
    accent: "#79ffd4",
    description: "A defensive field damages nearby enemies for 20 damage per second.",
  },
  titaniumHull: {
    name: "Titanium Hull",
    category: "Defense",
    icon: "TH",
    accent: "#d7dee9",
    description: "+50 maximum hull integrity.",
  },
};

function normalElementalUnlockMet() {
  return (state.meta?.totals?.bestVictoryTime || 0) >= SECRET_NORMAL_ELEMENTAL_UNLOCK_TIME;
}

function augmentRequirementLocked(id) {
  return id === SECRET_NORMAL_ELEMENTAL_AUGMENT && !normalElementalUnlockMet();
}

function augmentCacheType(id) {
  return augmentDefs[id]?.cacheType || AUGMENT_CACHE_TYPES.crude;
}

function augmentCacheName(type, plural = true) {
  if (type === AUGMENT_CACHE_TYPES.ardonis) {
    return plural ? "Ardonis Augment Caches" : "Ardonis Augment Cache";
  }
  return plural ? "Crude Augment Caches" : "Crude Augment Cache";
}

function augmentCacheCount(type) {
  if (type === AUGMENT_CACHE_TYPES.ardonis) {
    return Number(state.meta?.ardonisAugmentCaches) || 0;
  }
  return Number(state.meta?.crudeAugmentCaches) || 0;
}

function spendAugmentCache(type) {
  if (augmentCacheCount(type) <= 0) return false;
  if (type === AUGMENT_CACHE_TYPES.ardonis) {
    state.meta.ardonisAugmentCaches -= 1;
  } else {
    state.meta.crudeAugmentCaches -= 1;
  }
  return true;
}

const quantumWeaponBuffs = [
  { name: "Rapid Cycle", attackSpeedMultiplier: 1.22 },
  { name: "Heavy Payload", attackDamageMultiplier: 1.28 },
  { name: "Long Reach", rangeBonus: 0.34 },
  { name: "Vector Spread", extraAttacks: 1 },
  { name: "Phase Piercer", pierceBonus: 1 },
];

const planetProfiles = [
  {
    name: "Iop",
    descriptor: "a storm-scoured refinery planet wrapped in cobalt dust",
    approach: "You descend through ionized blue squalls and the glow of half-buried landing beacons.",
    landmark: "a crash-landed Ardonis cruiser",
    salvageSite: "the fractured cruiser bay",
  },
  {
    name: "Vespera",
    descriptor: "a twilight garden world choked by glass reeds and violet fog",
    approach: "The atmosphere hums softly as your hull skims above luminous wetlands and collapsed relay towers.",
    landmark: "an abandoned survey sanctum",
    salvageSite: "the sealed observation vault",
  },
  {
    name: "Nadir-9",
    descriptor: "a frozen frontier moon pitted with deep mining scars",
    approach: "You touch down under a black sky while old extraction lasers flicker beneath the ice.",
    landmark: "a split-open ore hauler",
    salvageSite: "the frozen cargo spine",
  },
  {
    name: "Cinder Wake",
    descriptor: "a volcanic salvage world ringed by molten trenchlines",
    approach: "Your ship rides heat shimmer and ash plumes toward a field of red-hot wreckage.",
    landmark: "a shattered escort frigate",
    salvageSite: "the emergency stores locker",
  },
  {
    name: "Auralis",
    descriptor: "a pale crystal world covered in signal-reflecting spires",
    approach: "Prismatic reflections scatter across your cockpit as you thread between crystalline ridges.",
    landmark: "a silent research array",
    salvageSite: "the central archive chamber",
  },
  {
    name: "Thalos Minor",
    descriptor: "a rust-red trade world buried beneath ancient convoy routes",
    approach: "Cargo rails and ruined depots stretch to the horizon as your landing gear locks into cracked ferrocrete.",
    landmark: "a looted merchant dock",
    salvageSite: "the customs strongroom",
  },
  {
    name: "Orun Vale",
    descriptor: "a wind-hollowed canyon planet streaked with copper lightning",
    approach: "Sand devils roll beneath your hull while dormant weather pylons spark against the horizon.",
    landmark: "a toppled relay spine",
    salvageSite: "the emergency broadcast vault",
  },
  {
    name: "Myriah Drift",
    descriptor: "a low-gravity archive world surrounded by broken librarian satellites",
    approach: "You settle through silver dust clouds as old indexing drones drift silently around your ship.",
    landmark: "a collapsed memory basilica",
    salvageSite: "the subterranean catalog chamber",
  },
  {
    name: "Khepri Delta",
    descriptor: "an equatorial flood planet laced with bioluminescent deltas",
    approach: "Warm stormwater flashes below the hull while drowned extraction towers blink in fading sequence.",
    landmark: "a half-submerged ore skimmer",
    salvageSite: "the pressurized salvage lock",
  },
  {
    name: "Palisade-3",
    descriptor: "a militarized bastion world covered in trench cities and magnetic walls",
    approach: "Defense spires rise through the haze as your ship follows a narrow corridor between shattered battlements.",
    landmark: "a breached command citadel",
    salvageSite: "the armored logistics vault",
  },
  {
    name: "Zephra Coil",
    descriptor: "a ribbon-ringed gas dwarf with habitable platforms suspended in its storms",
    approach: "Static crawls over the canopy while you thread between tether pylons and drifting habitation shells.",
    landmark: "a ruptured aerostat dock",
    salvageSite: "the suspended maintenance cradle",
  },
  {
    name: "Umber Reach",
    descriptor: "a charcoal agricultural world where black grain plains stretch beyond sight",
    approach: "Your landing path cuts over abandoned harvest engines and long-dead irrigation lasers.",
    landmark: "a derailed freight harvester",
    salvageSite: "the sealed seed reserve",
  },
  {
    name: "Solace Verge",
    descriptor: "a monastery planet cloaked in pale fog and inactive prayer transmitters",
    approach: "The silence is total as your ship glides above marble causeways and moonlit cloisters.",
    landmark: "a ruined pilgrim ascent tower",
    salvageSite: "the sanctum reliquary",
  },
  {
    name: "Caelus Rift",
    descriptor: "a fractured tectonic world split by luminous azure chasms",
    approach: "Heat haze and tectonic thunder rise around you while navigation lights reflect off exposed crystal seams.",
    landmark: "a bridge station torn in half",
    salvageSite: "the riftside survey bunker",
  },
  {
    name: "Brinefall",
    descriptor: "a salt ocean planet whose inland basins have crystallized into white labyrinths",
    approach: "You skim over mirror-flat brine flats and the skeletons of desalination rigs.",
    landmark: "a stranded export barge",
    salvageSite: "the evaporator control vault",
  },
  {
    name: "Helion Scar",
    descriptor: "a star-burned mining world etched by orbital mirror strikes",
    approach: "The ground glows in long amber scars as you descend through a curtain of heated dust.",
    landmark: "a melted drilling crown",
    salvageSite: "the shielded excavation locker",
  },
  {
    name: "Yarrow Prime",
    descriptor: "a failed colony world overgrown with luminous thorn forests",
    approach: "Dense green light pulses beneath the canopy while emergency beacons blink from buried prefabs.",
    landmark: "an overrun colonist refuge",
    salvageSite: "the hydroponics command vault",
  },
  {
    name: "Kharon Bloom",
    descriptor: "a fungal twilight planet where giant spore towers loom over frozen marshes",
    approach: "Your approach path winds between phosphorescent caps and drifting violet spores.",
    landmark: "a quarantine shuttle pad",
    salvageSite: "the decontamination archive",
  },
  {
    name: "Ossa-12",
    descriptor: "a bone-white graveyard world layered with the remains of ancient fleets",
    approach: "Wreck fields glitter beneath the haze as your ship settles beside rusting carrier ribs.",
    landmark: "the exposed keel of an Ardonis battleship",
    salvageSite: "the sealed munitions repository",
  },
  {
    name: "Lumen Bastion",
    descriptor: "a signal fortress world lit by colossal blue transmitters and endless service rails",
    approach: "Beacon light sweeps across your hull as you descend into a maze of antenna shadows.",
    landmark: "a silent broadcast tower",
    salvageSite: "the repeater core chamber",
  },
  {
    name: "Viridian Wake",
    descriptor: "a reclaimed shipbreaker planet carpeted in emerald oxidation blooms",
    approach: "Broken hull plates jut from the surface like reefs while salvage cranes sway in the wind.",
    landmark: "a disassembled escort carrier",
    salvageSite: "the recycler oversight bunker",
  },
  {
    name: "Tethys Hollow",
    descriptor: "a cavern world riddled with sinkholes and suspended inland seas",
    approach: "Your thrusters ripple underground mist as you descend through a collapsed skylight basin.",
    landmark: "an inverted docking spindle",
    salvageSite: "the cavern intake reservoir",
  },
  {
    name: "Pyre Lantern",
    descriptor: "a cinder moon where dormant beacons still burn over fields of black glass",
    approach: "Amber navigation fires guide your ship across a plain of fused volcanic mirrors.",
    landmark: "a beacon keeper outpost",
    salvageSite: "the thermal relay cellar",
  },
  {
    name: "Rook Meridian",
    descriptor: "a surveillance world of shattered sensor mesas and buried observatories",
    approach: "You glide beneath fallen radar crowns and strings of inert defense balloons.",
    landmark: "a cracked horizon scanner",
    salvageSite: "the buried targeting annex",
  },
  {
    name: "Noctis Vale",
    descriptor: "a midnight world lit only by auroral rivers and deep ice crevasses",
    approach: "The cockpit floods with cold green light while the landscape fractures beneath you like broken glass.",
    landmark: "a frost-locked comms mast",
    salvageSite: "the aurora research shelter",
  },
  {
    name: "Crownfall Delta",
    descriptor: "a ring-debris planet whose skies glitter with endless descending fragments",
    approach: "You fly through a gentle rain of incandescent debris and guided recovery flares.",
    landmark: "a toppled ring-harvester",
    salvageSite: "the fragment sorting vault",
  },
];

const planetIntroVariants = [
  profile => `You land on ${profile.name}, ${profile.descriptor}. ${profile.approach}`,
  profile => `Your descent carries you onto ${profile.name}, ${profile.descriptor}. ${profile.approach}`,
  profile => `You break through the upper haze of ${profile.name}, ${profile.descriptor}. ${profile.approach}`,
  profile => `The ship settles onto ${profile.name}, ${profile.descriptor}. ${profile.approach}`,
  profile => `You guide the hull down toward ${profile.name}, ${profile.descriptor}. ${profile.approach}`,
];

const planetAugmentFindings = [
  ({ profile, reward }) => `Near ${profile.landmark}, you uncover a sealed augment archive inside ${profile.salvageSite}. The cache holds blueprint fragments for ${reward.augmentName}, which are now available back in the Augment Bay.`,
  ({ profile, reward }) => `Inside ${profile.salvageSite}, your scanners detect intact Ardonis blueprint wafers. Once decoded, they resolve into the augment pattern for ${reward.augmentName}.`,
  ({ profile, reward }) => `A sweep around ${profile.landmark} reveals a hardened data casket hidden beneath the debris. Its surviving design lattice contains the schematics for ${reward.augmentName}.`,
  ({ profile, reward }) => `Your crew breaches ${profile.salvageSite} and recovers a bundle of preserved subsystem plans. After verification, the recovered cache unlocks ${reward.augmentName} in the hangar.`,
];

const planetCreditFindings = [
  ({ profile, reward }) => `Inside ${profile.salvageSite}, you find intact Ardonis ledgers, precious alloys, and recoverable trade chits. After conversion and salvage processing, you acquire ${reward.amount} Ardonis Credits.`,
  ({ profile, reward }) => `At ${profile.landmark}, sealed cargo drawers still hold stamped credit bars and convertible salvage bonds. The haul is processed into ${reward.amount} Ardonis Credits.`,
  ({ profile, reward }) => `Your survey team strips ${profile.salvageSite} for reactor metals, exchange chips, and black-box claims data. Once sold and refined, the recovery yields ${reward.amount} Ardonis Credits.`,
  ({ profile, reward }) => `Among the wreckage around ${profile.landmark}, you recover untouched vault tubes filled with Ardonis scrip and rare industrial metals. The spoils total ${reward.amount} Ardonis Credits after reconciliation.`,
];

const planetScrapFindings = [
  ({ profile, reward }) => `Deep in ${profile.salvageSite}, you recover intact targeting coils, reactor regulators, and refined hull stock. Once processed aboard ship, the haul adds ${reward.amount} Scrap to your field reserves.`,
  ({ profile, reward }) => `The remains around ${profile.landmark} still hold dense Ardonis metals, capacitor banks, and reusable control wafers. Your engineers convert the recovery into ${reward.amount} Scrap.`,
  ({ profile, reward }) => `Your crew strips ${profile.salvageSite} for calibrated power routing assemblies and weapon-grade composites. The salvage yield comes back as ${reward.amount} Scrap for in-voyage upgrades.`,
  ({ profile, reward }) => `A sealed compartment near ${profile.landmark} opens onto pristine combat hardware and reserve alloy stock. After a quick sort and breakdown, you bank ${reward.amount} Scrap.`,
];

const planetOutroVariants = [
  () => "You refuel your ship, secure the haul, and return to your voyage with fresh momentum.",
  () => "With the recovery locked down, you lift off and rejoin the voyage carrying fresh spoils.",
  () => "Your ship climbs back into the void with the find secured and systems humming harder than before.",
  () => "After a rapid salvage sweep and fuel top-off, you clear the atmosphere and resume the voyage.",
  () => "The haul is stowed, the drives are primed, and you push back into open space with renewed purpose.",
];

const planetHuePresets = [0, 24, 52, 88, 126, 164, 198, 232, 268, 302, 332];

function rollQuantumWeaponBuff() {
  const choice = quantumWeaponBuffs[Math.floor(Math.random() * quantumWeaponBuffs.length)];
  return { ...choice };
}

function critChanceBaseFromMeta(level) {
  if (level <= 0) return 0;
  const maxLevel = Math.max(1, metaUpgradeDefs.overheatModule?.maxLevel || HANGAR_UPGRADE_LEVEL_CAP);
  if (maxLevel <= 1) return 0.25;
  const progress = (clamp(level, 1, maxLevel) - 1) / (maxLevel - 1);
  return 0.01 + progress * 0.24;
}

function critDamageBaseFromMeta(level) {
  if (level <= 0) return 1;
  const maxLevel = Math.max(1, metaUpgradeDefs.overheatRounds?.maxLevel || HANGAR_UPGRADE_LEVEL_CAP);
  if (maxLevel <= 1) return 1.5;
  const progress = (clamp(level, 1, maxLevel) - 1) / (maxLevel - 1);
  return 1.5 + progress * 1.5;
}

function pickOne(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function metaDerivedStats() {
  const shieldLevel = metaLevel("shield");
  const shieldRegen = metaLevel("shieldRegen");
  const hpRegen = metaLevel("hpRegen");
  const attackSpeed = metaLevel("attackSpeed");
  const attackDamage = metaLevel("attackDamage");
  const overheatModule = metaLevel("overheatModule");
  const overheatRounds = metaLevel("overheatRounds");
  const elementalResistance = metaLevel("elementalResistance");
  const elementalProcChance = metaLevel("elementalProcChance");
  const elementalDamage = metaLevel("elementalDamage");
  const elementalDuration = metaLevel("elementalDuration");
  const expIncrease = metaLevel("expIncrease");
  const moreGold = metaLevel("moreGold");
  const phaseDash = metaLevel("phaseDash");
  const piercing = metaLevel("piercing");
  const weaponRange = metaLevel("weaponRange");
  const hyperdriveEngine = metaLevel("hyperdriveEngine");
  const scaled = hangarBonus;

  return {
    shieldBonus: Math.round(scaled(shieldLevel, 20, 420)),
    shieldRegenBonus: scaled(shieldRegen, 20, 18),
    hullRegenBonus: scaled(hpRegen, 22, 8),
    scrapMultiplier: 1 + scaled(expIncrease, 22, 2.4),
    creditMultiplier: 0.75 * (1 + scaled(moreGold, 20, 2)) * difficultyCreditBonus(),
    dashCooldownMultiplier: Math.max(1 / 3, 1 - scaled(phaseDash, 22, 0.95)),
    dashDistanceMultiplier: 1 + scaled(phaseDash, 20, 2.4),
    dashStaminaCostMultiplier: Math.max(0.25, 1 - scaled(phaseDash, 20, 0.75)),
    fireRateMultiplier: 1 + scaled(attackSpeed, 18, 2.4),
    damageMultiplier: 1 + scaled(attackDamage, 20, 3.2),
    critChanceBase: critChanceBaseFromMeta(overheatModule),
    critDamageBase: critDamageBaseFromMeta(overheatRounds),
    photonLanceDamageMultiplier: 1,
    photonLanceCycleMultiplier: 1,
    plasmaCannonDamageMultiplier: 1,
    plasmaCannonWaveMultiplier: 1,
    droneDamageMultiplier: 1,
    droneCadenceMultiplier: 1,
    photonPhazerDamageMultiplier: 1,
    photonPhazerRangeMultiplier: 1,
    photonPhazerCadenceMultiplier: 1,
    elementalResistance: Math.min(0.65, scaled(elementalResistance, 18, 0.17)),
    elementalProcChanceMultiplier: 1 + scaled(elementalProcChance, 18, 0.19),
    elementalDamageMultiplier: 1 + scaled(elementalDamage, 20, 0.28),
    elementalDurationMultiplier: 1 + scaled(elementalDuration, 20, 0.22),
    hubPierce: Math.max(0, Math.floor(scaled(piercing, 18, 8))),
    pierceDamageFloor: Math.min(0.95, 0.2 + scaled(piercing, 22, 0.65)),
    rangeMultiplier: 1 + scaled(weaponRange, 20, 3),
    boostReserveBonus: Math.round(scaled(hyperdriveEngine, 16, 180)),
    boostRegenMultiplier: 1 + scaled(hyperdriveEngine, 16, 2.8),
    boostCooldownMultiplier: Math.max(0.045, 1 - scaled(hyperdriveEngine, 18, 0.955)),
    slowFieldRadius: 190,
    slowFieldMultiplier: 0.75,
    slowingFieldLevel: 0,
  };
}

function makePlayer() {
  const stats = metaDerivedStats();
  const augmentSet = new Set(state.meta.equippedAugments || []);
  const quantumBuff = augmentSet.has("quantumWeaponCore") ? rollQuantumWeaponBuff() : null;
  const startingPrimary = weaponDefs[state.currentRun?.startingWeapon]?.slot === "primary"
    ? state.currentRun.startingWeapon
    : "emberBolt";

  let maxHp = 100;
  let speed = 340;
  let thrustPower = 1180;
  let hullRegen = stats.hullRegenBonus;
  let maxShield = 100 + stats.shieldBonus;
  let shieldRegenRate = stats.shieldRegenBonus;
  let attackSpeedMultiplier = stats.fireRateMultiplier;
  let attackDamageMultiplier = stats.damageMultiplier;
  let extraAttacks = 0;
  let tractorBeamLevel = 0;
  let hubPierce = stats.hubPierce;
  let rangeMultiplier = stats.rangeMultiplier;
  let damageTakenMultiplier = 1;
  let slowingFieldLevel = 0;
  let slowFieldRadius = stats.slowFieldRadius;
  let slowFieldMultiplier = stats.slowFieldMultiplier;
  let shieldProjectorCount = 0;
  let photonLanceDamageMultiplier = stats.photonLanceDamageMultiplier;
  let photonLanceCycleMultiplier = stats.photonLanceCycleMultiplier;
  let plasmaCannonDamageMultiplier = stats.plasmaCannonDamageMultiplier;
  let plasmaCannonWaveMultiplier = stats.plasmaCannonWaveMultiplier;
  let droneDamageMultiplier = stats.droneDamageMultiplier;
  let droneCadenceMultiplier = stats.droneCadenceMultiplier;
  let photonPhazerDamageMultiplier = stats.photonPhazerDamageMultiplier;
  let photonPhazerRangeMultiplier = stats.photonPhazerRangeMultiplier;
  let photonPhazerCadenceMultiplier = stats.photonPhazerCadenceMultiplier;

  if (augmentSet.has("overchargedReactor")) attackSpeedMultiplier *= 1.2;
  if (augmentSet.has("augmentPiercingRounds")) hubPierce += 1;
  if (augmentSet.has("shieldCapacitor")) maxShield += 25;
  if (augmentSet.has("reactivePlating")) damageTakenMultiplier *= 0.75;
  if (augmentSet.has("nanobotRepairSystem")) hullRegen += 0.4;
  if (augmentSet.has("energyBarrier")) shieldRegenRate *= 1.35;
  if (augmentSet.has("armorReinforcement")) damageTakenMultiplier *= 0.75;
  if (augmentSet.has("titaniumHull")) maxHp += 50;
  if (augmentSet.has("fortressCore")) {
    maxShield += 500;
    speed *= 0.65;
    thrustPower *= 0.65;
  }
  if (augmentSet.has("droneShieldProjector")) {
    maxShield += 60;
    shieldProjectorCount = 2;
  }
  if (augmentSet.has("tractorBeam")) {
    tractorBeamLevel = 2;
  }
  if (augmentSet.has("slowingField")) {
    slowingFieldLevel = 1;
    slowFieldRadius = Math.max(slowFieldRadius, 190);
    slowFieldMultiplier = Math.min(slowFieldMultiplier, 0.75);
  }
  if (augmentSet.has("gravityShield")) {
    slowingFieldLevel = Math.max(slowingFieldLevel, 1);
    slowFieldRadius = Math.max(slowFieldRadius, 190);
    slowFieldMultiplier = Math.min(slowFieldMultiplier, 0.72);
  }
  if (quantumBuff?.attackSpeedMultiplier) attackSpeedMultiplier *= quantumBuff.attackSpeedMultiplier;
  if (quantumBuff?.attackDamageMultiplier) attackDamageMultiplier *= quantumBuff.attackDamageMultiplier;
  if (quantumBuff?.rangeBonus) rangeMultiplier += quantumBuff.rangeBonus;
  if (quantumBuff?.extraAttacks) extraAttacks += quantumBuff.extraAttacks;
  if (quantumBuff?.pierceBonus) hubPierce += quantumBuff.pierceBonus;

  return {
    x: WORLD_W / 2,
    y: WORLD_H / 2,
    prevX: WORLD_W / 2,
    prevY: WORLD_H / 2,
    radius: 14,
    speed,
    thrustPower,
    turnRate: 1,
    hp: maxHp,
    maxHp,
    hullRegen,
    shield: maxShield,
    maxShield,
    shieldRegenDelay: 0,
    shieldRegenRate,
    level: 1,
    scrap: 0,
    xp: 0,
    nextXp: runXpCurve(1),
    upgradesMaxed: false,
    xpMultiplier: stats.scrapMultiplier,
    goldMultiplier: stats.creditMultiplier,
    augmentFindMultiplier: difficultyAugmentFindBonus(),
    dashCooldownMultiplier: stats.dashCooldownMultiplier,
    dashDistanceMultiplier: stats.dashDistanceMultiplier,
    dashStaminaCost: BASE_DASH_STAMINA_COST * stats.dashStaminaCostMultiplier,
    attackSpeedMultiplier,
    attackDamageMultiplier,
    critChance: stats.critChanceBase,
    critDamageMultiplier: stats.critDamageBase,
    damageTakenMultiplier,
    elementalResistance: stats.elementalResistance,
    elementalProcChanceMultiplier: stats.elementalProcChanceMultiplier,
    elementalDamageMultiplier: stats.elementalDamageMultiplier,
    elementalDurationMultiplier: stats.elementalDurationMultiplier,
    enemySlowMultiplier: 1,
    extraAttacks,
    photonLanceDamageMultiplier,
    photonLanceCycleMultiplier,
    plasmaCannonDamageMultiplier,
    plasmaCannonWaveMultiplier,
    droneDamageMultiplier,
    droneCadenceMultiplier,
    photonPhazerDamageMultiplier,
    photonPhazerRangeMultiplier,
    photonPhazerCadenceMultiplier,
    hubPierce,
    pierceDamageFloor: stats.pierceDamageFloor,
    rangeMultiplier,
    slowingField: slowingFieldLevel,
    slowFieldRadius,
    slowFieldMultiplier,
    augmentSet,
    equippedAugmentNames: equippedAugmentNames(state.meta.equippedAugments),
    quantumBuff,
    laserAmplifierChance: augmentSet.has("laserAmplifier") ? 0.25 : 0,
    dualBarrelChance: augmentSet.has("dualBarrelCannons") ? 0.25 : 0,
    explosivePayloadChance: augmentSet.has("explosivePayload") ? 0.25 : 0,
    chainLightningArray: augmentSet.has("chainLightningArray"),
    thermalWarheads: augmentSet.has("thermalWarheads"),
    radiationPayload: augmentSet.has("radiationPayload"),
    railAcceleratorChance: augmentSet.has("railAccelerator") ? 0.25 : 0,
    cryoPayloadChance: augmentSet.has("cryoPayload") ? 0.25 : 0,
    voidSingularity: augmentSet.has("voidSingularity"),
    hackProtocol: augmentSet.has("hackProtocol"),
    normalElementalAugmentsUnlocked: augmentSet.has(SECRET_NORMAL_ELEMENTAL_AUGMENT),
    orbitalStrikeModule: augmentSet.has("orbitalStrikeModule"),
    orbitalStrikeClock: augmentSet.has("orbitalStrikeModule") ? 3.4 : 0,
    shrapnelBurst: augmentSet.has("shrapnelBurst"),
    novaLauncher: augmentSet.has("novaLauncher"),
    droneMissilePods: augmentSet.has("droneMissilePods"),
    droneMissileClock: augmentSet.has("droneMissilePods") ? 2.4 : 0,
    droneMissileCount: augmentSet.has("droneMissilePods") ? 3 : 0,
    droneOrbit: rand(0, Math.PI * 2),
    reflectiveArmorRatio: augmentSet.has("reflectiveArmor") ? 0.4 : 0,
    emergencyShieldBurst: augmentSet.has("emergencyShieldBurst"),
    emergencyShieldUsed: false,
    adaptivePlating: augmentSet.has("adaptivePlating"),
    adaptiveCooldown: 0,
    kineticAbsorberRatio: augmentSet.has("kineticAbsorber") ? 0.4 : 0,
    gravityShield: augmentSet.has("gravityShield"),
    gravityPulseClock: augmentSet.has("gravityShield") ? 4.5 : 0,
    gravityPulseFlash: 0,
    shockBarrier: augmentSet.has("shockBarrier"),
    shockBarrierTick: 0.25,
    shockBarrierDps: 20,
    shockBarrierRadius: 72,
    shieldProjectorCount,
    disabledTimer: 0,
    controlsInverted: false,
    hackInfectionTimer: 0,
    hullCriticalWarningArmed: true,
    shieldDepletedWarningArmed: maxShield > 0,
    zoneDamageMultiplier: 1,
    radiationZoneTimer: 0,
    radiationZoneActive: false,
    solarZoneActive: false,
    hackZoneActive: false,
    spinBoost: 0,
    facing: 0,
    rotation: 0,
    vx: 0,
    vy: 0,
    thrusting: false,
    boosting: false,
    boostCharge: BASE_BOOST_CAPACITY + stats.boostReserveBonus,
    boostMax: BASE_BOOST_CAPACITY + stats.boostReserveBonus,
    boostDrainRate: 40,
    boostRegenRate: 26 * stats.boostRegenMultiplier,
    boostExhaustedCooldown: 2 * stats.boostCooldownMultiplier,
    boostCooldown: 0,
    boostUiAlpha: 0,
    enginePulse: 0,
    engineOutput: 0,
    weaponSwitchCooldown: 0,
    dashCooldown: 0,
    dashTimer: 0,
    dashRollPhase: 0,
    dashSpinDirection: 1,
    invuln: 0,
    regenTick: 0,
    primaryWeapon: startingPrimary,
    weapons: {
      emberBolt: { level: startingPrimary === "emberBolt" ? 1 : 0, cooldown: 0 },
      plasmaCannon: { level: startingPrimary === "plasmaCannon" ? 1 : 0, cooldown: 0, waveFlip: 1 },
      photonPhazer: { level: 0, tickClock: 0, beamAlpha: 0, beamPulse: 0, target: null, beamEndX: 0, beamEndY: 0, afterglow: 0 },
      orbitBlades: { level: 0, angle: 0, hitMap: new Map() },
      novaPulse: { level: 0, cooldown: 0 },
    },
    passives: {
      shield: 0,
      shieldRegen: 0,
      hpRegen: 0,
      attackSpeed: 0,
      attackDamage: 0,
      photonLanceSystems: 0,
      plasmaCannonSystems: 0,
      droneHaloSystems: 0,
      photonPhazerSystems: 0,
      elementalResistance: 0,
      elementalProcChance: 0,
      elementalDamage: 0,
      elementalDuration: 0,
      expIncrease: 0,
      moreGold: 0,
      phaseDash: 0,
      piercing: 0,
      swiftness: 0,
      vitality: 0,
      magnet: tractorBeamLevel,
      recovery: 0,
      overheatModule: 0,
      overheatRounds: 0,
      piercingRounds: 0,
      weaponRange: 0,
      hyperdriveEngine: 0,
    },
  };
}

function resetGame() {
  state.mode = "playing";
  state.pendingRunSummary = null;
  state.enemies = [];
  state.projectiles = [];
  state.gems = [];
  state.pulses = [];
  state.explosions = [];
  state.hazards = [];
  state.asteroids = [];
  state.voyageZones = [];
  state.orbitalStrikes = [];
  state.crates = [];
  state.texts = [];
  state.particles = [];
  state.levelChoices = [];
  state.levelChoiceUnlockAt = 0;
  state.kills = 0;
  state.gold = 0;
  state.survivalCreditsAwarded = 0;
  state.survivalCreditProgress = 0;
  state.reactorSpawnCounter = 0;
  state.leviathanSpawnCount = 0;
  state.planetSpawnCount = 0;
  state.pendingFreeLevels = 0;
  state.runStats = freshRunStats();
  state.spawnClock = 0;
  state.crateClock = PLANET_SPAWN_INTERVAL;
  state.asteroidClock = 10;
  state.voyageZoneClock = 8;
  state.eliteClock = 9;
  state.time = 0;
  state.voyageProgress = 0;
  state.shieldDamageFlash = 0;
  state.hullDamageFlash = 0;
  state.currentRun.goalTime = getRunGoalTime();
  state.currentRun.difficulty = state.runConfig.difficulty;
  state.currentRun.bonusAugmentsAwarded = 0;
  state.currentRun.voyageId = state.runConfig.voyageId;
  state.currentRun.startingWeapon = state.runConfig.startingWeapon;
  state.currentRun.normalWeaponUnlocksPurchased = 0;
  state.currentRun.advancedWeaponUnlocksPurchased = 0;
  state.voyageZoneClock = ventariVoyageActive(state.currentRun.voyageId) ? ventariZoneSpawnDelay() : 8;
  state.player = makePlayer();
  if (multiplayerRunHost()) {
    ensureMultiplayerRemotePilots();
  }
  state.camera.x = state.player.x - WIDTH / (2 * CAMERA_ZOOM);
  state.camera.y = state.player.y - HEIGHT / (2 * CAMERA_ZOOM);
  overlay.classList.add("hidden");
  if (voyageUpgradesMenu) voyageUpgradesMenu.classList.add("hidden");
  upgradeChoices.classList.add("hidden");
  upgradeChoices.innerHTML = "";
  overlayButton.textContent = "Resume";
  statusText.textContent = activeVoyageStatus(state.currentRun.voyageId);
  syncHud();
}

function openOverlay(title, body, buttonLabel, showButton = true) {
  if (overlayKicker) overlayKicker.textContent = "Orbital Command";
  overlayTitle.textContent = title;
  overlayBody.textContent = body;
  overlayButton.textContent = buttonLabel;
  overlayButton.style.display = showButton ? "inline-block" : "none";
  overlayEndVoyage.style.display = "none";
  pauseOptions.classList.add("hidden");
  overlay.classList.remove("hidden");
}

function showPlanetDiscoveryPopup(title, body, pendingReward = null) {
  state.pendingPlanetReward = pendingReward;
  state.mode = "planet";
  if (overlayKicker) overlayKicker.textContent = "Planetfall Report";
  overlayTitle.textContent = title;
  overlayBody.textContent = body;
  overlayButton.textContent = "Continue Voyage";
  overlayButton.style.display = "inline-block";
  overlayEndVoyage.style.display = "none";
  pauseOptions.classList.add("hidden");
  overlay.classList.remove("hidden");
  statusText.textContent = "Planetfall complete. Reviewing field findings.";
  syncHud();
  syncGamepadFocus();
}

function closePlanetDiscovery() {
  const pendingReward = state.pendingPlanetReward;
  state.pendingPlanetReward = null;
  overlay.classList.add("hidden");
  pauseOptions.classList.add("hidden");

  if (pendingReward?.followup === "freeLevel") {
    state.mode = "playing";
    grantFreeLevels(pendingReward?.levels || 1);
    return;
  }

  state.mode = "playing";
  statusText.textContent = pendingReward?.statusText || activeVoyageStatus();
  syncHud();
  syncGamepadFocus();
}

function showPauseOptions() {
  pauseOptions.classList.remove("hidden");
}

function hidePauseOptions() {
  pauseOptions.classList.add("hidden");
}

function pauseVoyage() {
  if (state.mode !== "playing") return;
  state.mode = "paused";
  openOverlay("Paused", "Catch your breath. Resume when you are ready.", "Resume");
  overlayEndVoyage.style.display = "inline-block";
  showPauseOptions();
  statusText.textContent = "Flight paused.";
  syncGamepadFocus();
}

function resumeVoyage() {
  if (state.mode !== "paused") return;
  state.mode = "playing";
  overlay.classList.add("hidden");
  hidePauseOptions();
  statusText.textContent = activeVoyageStatus();
}

async function syncEscapeFullscreenLock() {
  try {
    if (document.fullscreenElement && navigator.keyboard?.lock) {
      await navigator.keyboard.lock(["Escape"]);
    } else if (navigator.keyboard?.unlock) {
      navigator.keyboard.unlock();
    }
  } catch {}
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
    await syncEscapeFullscreenLock();
  } catch {}
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function angleDelta(current, target) {
  let diff = target - current;
  while (diff > Math.PI) diff -= Math.PI * 2;
  while (diff < -Math.PI) diff += Math.PI * 2;
  return diff;
}

function rotateToward(current, target, amount) {
  return current + angleDelta(current, target) * amount;
}

function defaultMetaProgression() {
  const upgrades = {};
  for (const id of Object.keys(metaUpgradeDefs)) {
    upgrades[id] = 0;
  }
  return {
    goldBank: 0,
    upgradeCreditsSpent: 0,
    crudeAugmentCaches: 0,
    ardonisAugmentCaches: 0,
    clearedVoyageRewardCombos: [],
    discoveredHostiles: [],
    unlockedAugments: [],
    equippedAugments: [],
    upgrades,
    settings: {
      musicVolume: 0.8,
      gunSfxVolume: 0.8,
      otherSfxVolume: 0.8,
    },
    totals: { runs: 0, kills: 0, bestTime: 0, bestVictoryTime: 0, creditsEarned: 0 },
  };
}

function currentMetaStorageKey() {
  return state.profileMode === "coop" ? COOP_META_STORAGE_KEY : META_STORAGE_KEY;
}

function normalizeMetaProgression(parsed) {
  const base = defaultMetaProgression();
  const source = parsed && typeof parsed === "object" ? parsed : {};
  const legacyPhaseDashLevel = Number(source.upgrades?.phaseDash) || Number(source.upgrades?.dodgeSpins) || 0;
  const legacySlowingFieldLevel = Number(source.upgrades?.slowingField) || 0;
  const legacyElementalIncreaseLevel = Number(source.upgrades?.elementalIncrease) || 0;
  const upgrades = {};
  for (const id of Object.keys(base.upgrades)) {
    upgrades[id] = id === "phaseDash"
      ? legacyPhaseDashLevel
      : (id === "elementalProcChance" || id === "elementalDamage" || id === "elementalDuration")
        ? Number(source.upgrades?.[id] ?? legacyElementalIncreaseLevel) || 0
        : Number(source.upgrades?.[id]) || 0;
  }
  const unlockedSet = new Set(
    Array.isArray(source.unlockedAugments)
      ? source.unlockedAugments.filter(id => augmentDefs[id])
      : []
  );
  if (Array.isArray(source.equippedAugments)) {
    for (const id of source.equippedAugments) {
      if (augmentDefs[id]) unlockedSet.add(id);
    }
  }
  if (legacySlowingFieldLevel > 0) {
    unlockedSet.add("slowingField");
  }
  const validHostileIds = new Set(HOSTILE_INTEL_DEFS.map(hostile => hostile.id));
  const discoveredHostiles = Array.isArray(source.discoveredHostiles)
    ? source.discoveredHostiles.filter(id => validHostileIds.has(id))
    : [];
  const clearedVoyageRewardCombos = Array.isArray(source.clearedVoyageRewardCombos)
    ? source.clearedVoyageRewardCombos.filter(entry => typeof entry === "string")
    : [];
  const unlockedAugments = Array.from(unlockedSet);
  const equippedAugments = Array.isArray(source.equippedAugments)
    ? source.equippedAugments.filter(id => unlockedSet.has(id)).slice(0, MAX_EQUIPPED_AUGMENTS)
    : [];
  const legacyAugmentCaches = Number(source.augmentCaches) || 0;
  const estimatedUpgradeSpend = estimateMetaUpgradeInvestment(upgrades);
  const earnedMinusBank = Math.max(0, (Number(source.totals?.creditsEarned) || 0) - (Number(source.goldBank) || 0));
  const parsedUpgradeSpend = Number(source.upgradeCreditsSpent);
  return {
    goldBank: Number(source.goldBank) || 0,
    upgradeCreditsSpent: Number.isFinite(parsedUpgradeSpend) ? Math.max(0, parsedUpgradeSpend) : Math.max(estimatedUpgradeSpend, earnedMinusBank),
    crudeAugmentCaches: Number(source.crudeAugmentCaches) || legacyAugmentCaches,
    ardonisAugmentCaches: Number(source.ardonisAugmentCaches) || 0,
    clearedVoyageRewardCombos,
    discoveredHostiles,
    unlockedAugments,
    equippedAugments,
    upgrades,
    settings: {
      musicVolume: clamp(Number(source.settings?.musicVolume ?? base.settings.musicVolume), 0, 1),
      gunSfxVolume: clamp(Number(source.settings?.gunSfxVolume ?? source.settings?.sfxVolume ?? base.settings.gunSfxVolume), 0, 1),
      otherSfxVolume: clamp(Number(source.settings?.otherSfxVolume ?? source.settings?.sfxVolume ?? base.settings.otherSfxVolume), 0, 1),
    },
    totals: { ...base.totals, ...(source.totals || {}) },
  };
}

function switchMetaProfile(mode, options = {}) {
  const nextMode = mode === "coop" ? "coop" : "solo";
  if (state.profileMode === nextMode && !options.forceReload) return;
  const preservedSettings = {
    musicVolume: clamp(Number(state.settings?.musicVolume ?? 0.8), 0, 1),
    gunSfxVolume: clamp(Number(state.settings?.gunSfxVolume ?? 0.8), 0, 1),
    otherSfxVolume: clamp(Number(state.settings?.otherSfxVolume ?? 0.8), 0, 1),
  };
  state.profileMode = nextMode;
  state.meta = loadMetaProgression();
  state.settings = {
    ...state.settings,
    ...(state.meta?.settings || preservedSettings),
  };
  if (options.preserveAudio !== false) {
    state.settings = {
      ...state.settings,
      ...preservedSettings,
    };
    state.meta.settings = {
      ...state.meta.settings,
      ...preservedSettings,
    };
  }
  applyAudioSettings();
  renderMetaUpgrades();
  renderAugmentBay();
  renderHostileDataMenu();
  syncHangarRunConfig();
  syncHud();
}

function freshRunStats() {
  return {
    damageDealt: 0,
    damageTaken: 0,
    scrapRecovered: 0,
    creditsEarned: 0,
    bonusAugmentsAwarded: 0,
    crudeCachesAwarded: 0,
    ardonisCachesAwarded: 0,
    killsByType: createKillStats(),
    augments: [],
  };
}

function getRunGoalTime() {
  return BASE_RUN_TIME + state.runConfig.extraTimeSteps * 5 * 60;
}

function ventariUnlockRequirementText() {
  return "Clear Asteroid Belt on Nightmare threat or complete any 35:00 voyage.";
}

function lockedVentariDescription() {
  return "Cordinates not found, cant initate hyper drive";
}

function nightmareAsteroidClearMet(meta = state.meta) {
  const combos = Array.isArray(meta?.clearedVoyageRewardCombos)
    ? meta.clearedVoyageRewardCombos
    : [];
  return combos.some(entry => {
    const [voyageId, difficultyText] = String(entry).split("|");
    return voyageId === "asteroidBelt" && Number(difficultyText) >= 4;
  });
}

function ventariSystemUnlocked(meta = state.meta) {
  return nightmareAsteroidClearMet(meta) || (meta?.totals?.bestVictoryTime || 0) >= SECRET_NORMAL_ELEMENTAL_UNLOCK_TIME;
}

function voyageRewardComboKey(run = state.currentRun) {
  const goalMinutes = Math.round((run?.goalTime || BASE_RUN_TIME) / 60);
  return `${run?.voyageId || "asteroidBelt"}|${run?.difficulty || 1}|${goalMinutes}`;
}

function voyageRewardComboLabel(run = state.currentRun) {
  const voyage = currentVoyageDef(run?.voyageId);
  const difficulty = difficultyLabels[(run?.difficulty || 1) - 1] || "Normal";
  return `${voyage.name} ${difficulty} ${formatTime(run?.goalTime || BASE_RUN_TIME)}`;
}

function repeatVoyageCrudeCacheChance(run = state.currentRun) {
  const extraTimeSteps = Math.max(0, Math.round(((run?.goalTime || BASE_RUN_TIME) - BASE_RUN_TIME) / (5 * 60)));
  const difficultyBonus = Math.max(0, ((run?.difficulty || 1) - 1) * 0.08);
  const durationBonus = extraTimeSteps * 0.05;
  const voyageBonus = run?.voyageId === "ventariSystem" ? 0.12 : 0;
  return clamp(BASE_REPEAT_CRUDE_CACHE_CHANCE + difficultyBonus + durationBonus + voyageBonus, 0.34, 0.9);
}

function resolveVoyageCacheRewards(run = state.currentRun) {
  const rewardKey = voyageRewardComboKey(run);
  const clearedCombos = Array.isArray(state.meta?.clearedVoyageRewardCombos)
    ? state.meta.clearedVoyageRewardCombos
    : [];
  const firstTime = !clearedCombos.includes(rewardKey);
  let crudeCaches = 0;
  const ardonisCaches = 1;
  const repeatChance = repeatVoyageCrudeCacheChance(run);

  if (firstTime) {
    crudeCaches = 2;
    state.meta.clearedVoyageRewardCombos = [...clearedCombos, rewardKey];
  } else if (Math.random() < repeatChance) {
    crudeCaches = 1;
  }

  return {
    firstTime,
    repeatChance,
    crudeCaches,
    ardonisCaches,
    comboLabel: voyageRewardComboLabel(run),
  };
}

function voyageEncounterDifficulty() {
  if (!ventariVoyageActive()) return state.currentRun.difficulty;
  return 4 + (state.currentRun.difficulty - 1) * 0.25;
}

function ventariCombatPressureMultiplier() {
  if (!ventariVoyageActive()) return 1;
  return 1.08 + (state.currentRun.difficulty - 1) * 0.23;
}

function easiestDifficultyHalfProgress() {
  return asteroidLowDifficultyHalfProgress();
}

function easiestDifficultyThreatScale() {
  if (ventariVoyageActive() || state.currentRun.difficulty > 2) return 1;
  const progress = easiestDifficultyHalfProgress();
  if (state.currentRun.difficulty === 1) {
    return 0.2 + 0.54 * Math.pow(progress, 1.42);
  }
  return 0.46 + 0.24 * Math.pow(progress, 1.22);
}

function easiestDifficultyCombatScale() {
  if (ventariVoyageActive() || state.currentRun.difficulty > 2) return 1;
  const progress = easiestDifficultyHalfProgress();
  if (state.currentRun.difficulty === 1) {
    return 0.46 + 0.32 * Math.pow(progress, 1.28);
  }
  return 0.62 + 0.2 * Math.pow(progress, 1.14);
}

function easiestDifficultySpeedScale() {
  if (ventariVoyageActive() || state.currentRun.difficulty > 2) return 1;
  const progress = easiestDifficultyHalfProgress();
  if (state.currentRun.difficulty === 1) {
    return 0.74 + 0.12 * Math.pow(progress, 1.18);
  }
  return 0.82 + 0.08 * Math.pow(progress, 1.06);
}

function asteroidLowDifficultySpawnScale() {
  if (ventariVoyageActive() || state.currentRun.difficulty > 2) return 1;
  const progress = asteroidLowDifficultyHalfProgress();
  if (state.currentRun.difficulty === 1) {
    return 0.54 + 0.28 * Math.pow(progress, 1.2);
  }
  return 0.62 + 0.2 * Math.pow(progress, 1.12);
}

function difficultyMultiplier() {
  const effectiveDifficulty = voyageEncounterDifficulty();
  return (1 + (effectiveDifficulty - 1) * 0.22) * easiestDifficultyCombatScale() * ventariCombatPressureMultiplier();
}

function threatTimeValue() {
  const effectiveDifficulty = voyageEncounterDifficulty();
  return (
    state.time * (1 + (effectiveDifficulty - 1) * 0.3) + (effectiveDifficulty - 1) * 30
  ) * easiestDifficultyThreatScale();
}

function eliteSpawnStartTime() {
  return Math.max(60, 180 - (voyageEncounterDifficulty() - 1) * 30);
}

function currentVoyageDef(voyageId = state.currentRun?.voyageId || state.runConfig?.voyageId) {
  return VOYAGE_DEFS[voyageId] || VOYAGE_DEFS.asteroidBelt;
}

function activeVoyageStatus(voyageId = state.currentRun?.voyageId || state.runConfig?.voyageId) {
  return currentVoyageDef(voyageId).launchStatus;
}

function ventariVoyageActive(voyageId = state.currentRun?.voyageId || state.runConfig?.voyageId) {
  return voyageId === "ventariSystem";
}

function asteroidHazardsEnabled() {
  return !ventariVoyageActive() && state.currentRun.difficulty >= ASTEROID_DAMAGE_START_DIFFICULTY;
}

function asteroidSpawnDelay() {
  const difficulty = state.currentRun.difficulty;
  const baseDelay = difficulty === 3 ? 26 : difficulty === 4 ? 20 : 16;
  const lateRunPressure = Math.min(6, state.time * 0.01);
  return Math.max(9, baseDelay - lateRunPressure);
}

function ventariZoneSpawnDelay() {
  const difficulty = state.currentRun.difficulty;
  return Math.max(8.8, 16 - difficulty * 1.15 - Math.min(2.6, state.time * 0.008));
}

function syncHangarRunConfig() {
  if (!ventariSystemUnlocked() && state.runConfig.voyageId === "ventariSystem") {
    state.runConfig.voyageId = "asteroidBelt";
  }
  const runGoalTime = formatTime(getRunGoalTime());
  hangarTimeReadout.textContent = runGoalTime;
  hangarDifficulty.value = String(state.runConfig.difficulty);
  const voyage = currentVoyageDef(state.runConfig.voyageId);
  const creditBonus = (state.runConfig.difficulty - 1) * 25;
  const ventariUnlocked = ventariSystemUnlocked();
  if (hangarRouteChip) {
    hangarRouteChip.textContent = voyage.name;
  }
  if (hangarLengthChip) {
    hangarLengthChip.textContent = runGoalTime;
  }
  if (hangarThreatChip) {
    hangarThreatChip.textContent = difficultyLabels[state.runConfig.difficulty - 1] || "Normal";
  }
  if (hangarBonusChip) {
    hangarBonusChip.textContent = `+${creditBonus}% Credits`;
  }
  hangarDifficultyReadout.textContent = `${difficultyLabels[state.runConfig.difficulty - 1] || "Normal"} +${creditBonus}%`;
  hangarTimeDown.disabled = state.runConfig.extraTimeSteps <= 0;
  hangarTimeUp.disabled = state.runConfig.extraTimeSteps >= MAX_EXTRA_RUN_STEPS;
  if (hangarVoyageReadout) {
    hangarVoyageReadout.textContent = `${voyage.name}. ${voyage.threatLabel}. ${voyage.description}`;
  }
  hangarVoyageAsteroid?.classList.toggle("selected", state.runConfig.voyageId === "asteroidBelt");
  hangarVoyageVentari?.classList.toggle("selected", state.runConfig.voyageId === "ventariSystem");
  hangarVoyageVentari?.classList.toggle("locked", !ventariUnlocked);
  hangarVoyageVentari?.setAttribute("aria-disabled", ventariUnlocked ? "false" : "true");
  if (hangarVoyageVentari) {
    hangarVoyageVentari.innerHTML = ventariUnlocked
      ? `Ventari System<span>Threat II</span>`
      : `???<span>${lockedVentariDescription()}</span>`;
    hangarVoyageVentari.title = ventariUnlocked ? VOYAGE_DEFS.ventariSystem.description : lockedVentariDescription();
    const subtitle = hangarVoyageVentari.querySelector("span");
    if (subtitle) {
      subtitle.textContent = ventariUnlocked ? "Threat II" : lockedVentariDescription();
    }
  }
}

function adjustRunTimeSteps(delta) {
  state.runConfig.extraTimeSteps = clamp(state.runConfig.extraTimeSteps + delta, 0, MAX_EXTRA_RUN_STEPS);
  syncHangarRunConfig();
}

function setRunDifficulty(value) {
  state.runConfig.difficulty = clamp(Math.round(value), 1, 5);
  syncHangarRunConfig();
}

function setVoyageRoute(id) {
  if (!VOYAGE_DEFS[id]) return;
  if (id === "ventariSystem" && !ventariSystemUnlocked()) {
    const message = `Ventari System locked. ${ventariUnlockRequirementText()}`;
    statusText.textContent = message;
    if (hangarStatus) {
      hangarStatus.textContent = message;
    }
    state.pendingHangarMessage = message;
    syncHangarRunConfig();
    return;
  }
  state.runConfig.voyageId = id;
  syncHangarRunConfig();
}

function applyPlayerControlModifiers(move, player = state.player) {
  const adjusted = { ...move };
  if (!player) return adjusted;
  if (player.controlsInverted) {
    adjusted.x *= -1;
    adjusted.y *= -1;
  }
  if ((player.disabledTimer || 0) > 0) {
    adjusted.x = 0;
    adjusted.y = 0;
    adjusted.strength = 0;
    adjusted.active = false;
  }
  return adjusted;
}

function setStartingWeapon(id) {
  if (!weaponDefs[id] || weaponDefs[id].slot !== "primary") return;
  state.runConfig.startingWeapon = id;
}

function presentStartingWeaponChoice() {
  state.levelChoiceUnlockAt = performance.now() + 500;
  state.mode = "weaponselect";
  state.gamepad.menuIndex = 0;
  upgradeChoices.innerHTML = "";

  const choices = [
    {
      id: "emberBolt",
      systemType: "normal",
      systemLabel: weaponSystemLabel("normal"),
      title: "Photon Lance",
      description: "Focused single-target primary with stronger direct damage.",
    },
    {
      id: "plasmaCannon",
      systemType: "normal",
      systemLabel: weaponSystemLabel("normal"),
      title: "Plasma Cannon",
      description: "Emits a close-range crescent wave that swells outward and clips clustered enemies.",
    },
  ];

  for (const choice of choices) {
    const button = document.createElement("button");
    button.className = "upgrade-card";
    button.type = "button";
    populateChoiceCard(button, choice);
    button.addEventListener("click", () => chooseStartingWeapon(choice.id));
    upgradeChoices.appendChild(button);
  }

  upgradeChoices.classList.remove("hidden");
  openOverlay("Choose Starting Weapon", "Pick the primary weapon for this voyage.", "", false);
  statusText.textContent = "Choose your starting weapon.";
  syncHud();
  syncGamepadFocus();
}

function chooseStartingWeapon(id) {
  if (!levelChoiceReady() || !state.player) return;
  setStartingWeapon(id);
  state.currentRun.startingWeapon = id;
  equipPrimaryWeapon(state.player, id, 1);
  playPrimaryWeaponActivationSfx(id);
  state.mode = "playing";
  state.levelChoiceUnlockAt = 0;
  upgradeChoices.classList.add("hidden");
  upgradeChoices.innerHTML = "";
  overlay.classList.add("hidden");
  statusText.textContent = `Flight active. ${weaponDefs[id].name} online.`;
  syncHud();
  syncGamepadFocus();
}

function bindDiscretePress(button, handler) {
  let armed = false;
  button.addEventListener("pointerdown", event => {
    event.preventDefault();
    armed = true;
  });
  button.addEventListener("pointerleave", () => {
    armed = false;
  });
  button.addEventListener("pointerup", event => {
    event.preventDefault();
    if (!armed) return;
    armed = false;
    handler();
  });
  button.addEventListener("click", event => {
    event.preventDefault();
  });
}

function loadMetaProgression() {
  try {
    const raw = localStorage.getItem(currentMetaStorageKey());
    if (!raw) return defaultMetaProgression();
    return normalizeMetaProgression(JSON.parse(raw));
  } catch {
    return defaultMetaProgression();
  }
}

function saveMetaProgression() {
  const payload = {
    ...normalizeMetaProgression(state.meta),
    settings: {
      musicVolume: clamp(Number(state.settings?.musicVolume ?? 0.8), 0, 1),
      gunSfxVolume: clamp(Number(state.settings?.gunSfxVolume ?? 0.8), 0, 1),
      otherSfxVolume: clamp(Number(state.settings?.otherSfxVolume ?? 0.8), 0, 1),
    },
    augmentCaches: Number(state.meta?.crudeAugmentCaches) || 0,
  };
  localStorage.setItem(currentMetaStorageKey(), JSON.stringify(payload));
}

function persistAudioSettings() {
  if (!state.meta) return;
  state.meta.settings = {
    musicVolume: clamp(Number(state.settings?.musicVolume ?? 0.8), 0, 1),
    gunSfxVolume: clamp(Number(state.settings?.gunSfxVolume ?? 0.8), 0, 1),
    otherSfxVolume: clamp(Number(state.settings?.otherSfxVolume ?? 0.8), 0, 1),
  };
  saveMetaProgression();
}

function captureScrollAnchor(container, selector) {
  if (!container) return { scrollTop: 0, offsetTop: null };
  const anchorNode = selector ? container.querySelector(selector) : null;
  const offsetTop = anchorNode
    ? anchorNode.getBoundingClientRect().top - container.getBoundingClientRect().top
    : null;
  return {
    scrollTop: container.scrollTop,
    offsetTop,
  };
}

function restoreScrollAnchor(container, selector, anchor) {
  if (!container || !anchor) return;
  if (selector && anchor.offsetTop != null) {
    const anchorNode = container.querySelector(selector);
    if (anchorNode) {
      const nextOffsetTop = anchorNode.getBoundingClientRect().top - container.getBoundingClientRect().top;
      container.scrollTop += nextOffsetTop - anchor.offsetTop;
      return;
    }
  }
  container.scrollTop = anchor.scrollTop || 0;
}

function showUpgradePurchaseToast(card, text, accent = "#8af6ff") {
  if (!card) return;
  card.querySelectorAll(".upgrade-purchase-toast").forEach(node => node.remove());
  const toast = document.createElement("div");
  toast.className = "upgrade-purchase-toast";
  toast.textContent = text;
  toast.style.setProperty("--purchase-toast-accent", accent);
  card.appendChild(toast);
  void toast.offsetWidth;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 180);
  }, 820);
}

function metaUpgradeCard(id) {
  return hangarMetaUpgrades?.querySelector(`[data-upgrade-id="${id}"]`)?.closest(".meta-upgrade") || null;
}

function voyageUpgradeCard(id) {
  return voyageUpgradeGrid?.querySelector(`[data-voyage-upgrade-id="${id}"]`)?.closest(".voyage-upgrade") || null;
}

function playSceneDoorTransition(onMidpoint, closeDuration = 620, totalDuration = 1320) {
  if (state.sceneTransitionActive) {
    onMidpoint?.();
    return;
  }
  state.sceneTransitionActive = true;
  sceneTransition.classList.remove("hidden");
  sceneTransition.classList.remove("closing");
  sceneTransition.classList.remove("opening");
  requestAnimationFrame(() => {
    sceneTransition.classList.add("closing");
  });
  setTimeout(() => {
    sceneTransition.classList.remove("closing");
    onMidpoint?.();
    requestAnimationFrame(() => {
      sceneTransition.classList.add("opening");
    });
  }, closeDuration);
  setTimeout(() => {
    sceneTransition.classList.add("hidden");
    sceneTransition.classList.remove("closing");
    sceneTransition.classList.remove("opening");
    state.sceneTransitionActive = false;
  }, totalDuration);
}

function metaLevel(id) {
  return state.meta.upgrades[id] || 0;
}

function diminishingBonus(level, scale, cap) {
  return cap * (1 - Math.exp(-level / scale));
}

function hangarGrowthFactor(level, maxMultiplier = 4, curvePower = 1.2) {
  const progress = clamp(level / HANGAR_UPGRADE_LEVEL_CAP, 0, 1);
  return 1 + (maxMultiplier - 1) * Math.pow(progress, curvePower);
}

function hangarBonus(level, scale, cap, maxMultiplier = 4, curvePower = 1.2) {
  if (level <= 0) return 0;
  return diminishingBonus(level, scale, cap) * hangarGrowthFactor(level, maxMultiplier, curvePower);
}

function metaCostForLevels(id, levels) {
  const def = metaUpgradeDefs[id];
  const level = clamp(Number(levels?.[id] || 0), 0, def?.maxLevel || 0);
  const costReductionLevel = clamp(Number(levels?.costReduction || 0), 0, metaUpgradeDefs.costReduction.maxLevel);
  const discount = 1 - diminishingBonus(costReductionLevel, 24, 0.5);
  const critUnlockCostFixed = level === 0 && (id === "overheatModule" || id === "overheatRounds");
  const onboardingMultiplier = level < 8 ? 0.2 + level * 0.09 : 1;
  const tierMultiplier = 1 + Math.floor(level / 5) * 0.55;
  const deepLevelMultiplier = 1 + Math.max(0, level - 18) * 0.06 + Math.max(0, level - 48) * 0.05;
  const milestoneSpike =
    (level + 1) % 25 === 0 ? 3.25 :
    (level + 1) % 10 === 0 ? 2.1 :
    (level + 1) % 5 === 0 ? 1.45 :
    1;
  const growthPower = level + Math.floor(level / 4) * 0.75 + Math.floor(level / 10) * 1.35;
  return Math.max(
    3,
    Math.floor(
      def.baseCost *
      onboardingMultiplier *
      Math.pow(def.scale, growthPower) *
      tierMultiplier *
      deepLevelMultiplier *
      milestoneSpike *
      (critUnlockCostFixed ? 1 : Math.max(0.35, discount))
    )
  );
}

function estimateMetaUpgradeInvestment(levels) {
  const simulatedLevels = {};
  for (const id of Object.keys(metaUpgradeDefs)) {
    simulatedLevels[id] = 0;
  }
  let spent = 0;
  const order = ["costReduction", ...Object.keys(metaUpgradeDefs).filter(id => id !== "costReduction")];
  for (const id of order) {
    const def = metaUpgradeDefs[id];
    const targetLevel = clamp(Number(levels?.[id] || 0), 0, def.maxLevel);
    while (simulatedLevels[id] < targetLevel) {
      spent += metaCostForLevels(id, simulatedLevels);
      simulatedLevels[id] += 1;
    }
  }
  return Math.max(0, Math.floor(spent));
}

function metaCost(id) {
  return metaCostForLevels(id, state.meta?.upgrades || {});
}

function augmentUnlocked(id) {
  return state.meta.unlockedAugments.includes(id) || (id === SECRET_NORMAL_ELEMENTAL_AUGMENT && normalElementalUnlockMet());
}

function augmentEquipped(id) {
  return state.meta.equippedAugments.includes(id);
}

function equippedAugmentNames(ids = state.meta.equippedAugments) {
  return ids.map(id => augmentDefs[id]?.name).filter(Boolean);
}

function unlockAugment(id) {
  if (!augmentDefs[id] || augmentUnlocked(id) || augmentRequirementLocked(id)) return;
  const cacheType = augmentCacheType(id);
  if (!spendAugmentCache(cacheType)) return;
  state.meta.unlockedAugments = [...state.meta.unlockedAugments, id];
  saveMetaProgression();
  renderMetaUpgrades();
  renderAugmentBay();
  syncHud();
  syncGamepadFocus();
}

function toggleEquipAugment(id) {
  if (!augmentUnlocked(id)) return;
  if (augmentEquipped(id)) {
    state.meta.equippedAugments = state.meta.equippedAugments.filter(entry => entry !== id);
  } else {
    if (state.meta.equippedAugments.length >= MAX_EQUIPPED_AUGMENTS) return;
    state.meta.equippedAugments = [...state.meta.equippedAugments, id];
  }
  saveMetaProgression();
  renderMetaUpgrades();
  syncHud();
  syncGamepadFocus();
}

function handleAugmentCardAction(id) {
  const def = augmentDefs[id];
  if (!def) return;
  if (augmentRequirementLocked(id)) return;
  const unlocked = augmentUnlocked(id);
  const equipped = augmentEquipped(id);
  const canEquip = unlocked && !equipped && state.meta.equippedAugments.length < MAX_EQUIPPED_AUGMENTS;

  if (!unlocked) {
    if (augmentCacheCount(augmentCacheType(id)) > 0) {
      unlockAugment(id);
    }
    return;
  }

  if (equipped || canEquip) {
    toggleEquipAugment(id);
  }
}

function renderAugmentBay() {
  if (!hangarAugmentGrid) return;

  hangarAugmentGrid.innerHTML = "";
  if (hangarAugmentBank) {
    hangarAugmentBank.textContent = `Ardonis Credits: ${state.meta.goldBank}`;
  }
  if (hangarAugmentCache) {
    hangarAugmentCache.textContent = `Crude Augment Caches: ${state.meta.crudeAugmentCaches}`;
  }
  if (hangarRareAugmentCache) {
    hangarRareAugmentCache.textContent = `Ardonis Augment Caches: ${state.meta.ardonisAugmentCaches}`;
  }
  if (hangarAugmentLoadout) {
    hangarAugmentLoadout.textContent = `Equipped: ${state.meta.equippedAugments.length} / ${MAX_EQUIPPED_AUGMENTS}`;
  }
  if (hangarEquippedAugments) {
    hangarEquippedAugments.innerHTML = "";
    const equipped = equippedAugmentNames();
    if (equipped.length) {
      for (const name of equipped) {
        const chip = document.createElement("span");
        chip.className = "run-summary-chip";
        chip.textContent = name;
        hangarEquippedAugments.appendChild(chip);
      }
    } else {
      const chip = document.createElement("span");
      chip.className = "run-summary-chip";
      chip.textContent = "No augments equipped";
      hangarEquippedAugments.appendChild(chip);
    }
  }

  for (const [id, def] of Object.entries(augmentDefs)) {
    const unlocked = augmentUnlocked(id);
    const equipped = augmentEquipped(id);
    const requirementLocked = augmentRequirementLocked(id);
    const cacheType = augmentCacheType(id);
    const cacheCount = augmentCacheCount(cacheType);
    const canEquip = unlocked && !equipped && state.meta.equippedAugments.length < MAX_EQUIPPED_AUGMENTS;
    const card = document.createElement("div");
    const isRare = def.rarity === "rare";
    card.className = `augment-card${equipped ? " equipped" : ""}${unlocked ? "" : " locked"}${isRare ? " rare" : ""}`;
    const title = requirementLocked ? "???" : def.name;
    const description = requirementLocked
      ? "Complete a 35:00 voyage on any difficulty to unlock this hidden augment."
      : def.description;
    const status = requirementLocked ? "Sealed" : (unlocked ? (equipped ? "Equipped" : "Unlocked") : "Locked");
    const badgeLabel = requirementLocked
      ? "Hidden"
      : isRare
      ? `${def.category} • Rare`
      : def.category;
    const actionLabel = requirementLocked
      ? "Requires 35:00 Voyage Clear"
      : unlocked
      ? (equipped ? "Unequip" : (canEquip ? "Equip" : "Loadout Full"))
      : (cacheCount > 0 ? `Unlock (1 ${augmentCacheName(cacheType, false)})` : `Locked - Need ${augmentCacheName(cacheType, false)}`);
    card.innerHTML = `
      <div class="augment-card-head">
        <div class="augment-card-top">
          <div class="augment-icon" style="--augment-accent:${def.accent};">${augmentIconMarkup(id, def)}</div>
          <div class="augment-copy">
            <div class="augment-heading">
              <h3>${title}</h3>
              <span class="augment-badge">${badgeLabel}</span>
            </div>
            <p>${description}</p>
          </div>
        </div>
        <strong class="augment-status">${status}</strong>
      </div>
      <button type="button" ${requirementLocked ? "disabled" : ""}>${actionLabel}</button>
    `;
    const button = card.querySelector("button");
    button.addEventListener("click", () => handleAugmentCardAction(id));
    hangarAugmentGrid.appendChild(card);
  }
}

function renderHostileDataMenu() {
  if (!hangarHostilesGrid) return;
  hangarHostilesGrid.innerHTML = "";
  if (hangarHostilesSummary) {
    const discoveredCount = HOSTILE_INTEL_DEFS.filter(hostile => hostileIntelUnlocked(hostile.id)).length;
    hangarHostilesSummary.textContent = `Cataloged Contacts: ${discoveredCount} / ${HOSTILE_INTEL_DEFS.length}`;
  }

  for (const hostile of HOSTILE_INTEL_DEFS) {
    const unlocked = hostileIntelUnlocked(hostile.id);
    const card = document.createElement("article");
    card.className = `hostile-intel-card hostile-intel-card-${hostile.tags.includes("Elite") ? "elite" : hostile.tags.includes("Rare") ? "rare" : "standard"}${unlocked ? "" : " hostile-intel-card-locked"}`;

    const top = document.createElement("div");
    top.className = "hostile-intel-top";

    const icon = document.createElement("div");
    icon.className = "hostile-intel-icon";
    icon.appendChild(hostileIntelPreview(hostile.id));

    const copy = document.createElement("div");
    copy.className = "hostile-intel-copy";
    copy.innerHTML = `
      <div class="hostile-intel-head">
        <div>
          <span class="hostile-intel-tier">${unlocked ? hostile.tier : "???"}</span>
          <h3>${unlocked ? enemyDisplayName(hostile.id) : "???"}</h3>
        </div>
      </div>
      <p>${unlocked ? hostile.overview : "More data is needed."}</p>
      <p class="hostile-intel-systems">${unlocked ? hostile.systems : "You must encounter this enemy to unlock this information card."}</p>
    `;

    top.appendChild(icon);
    top.appendChild(copy);
    card.appendChild(top);

    const details = document.createElement("div");
    details.className = "hostile-intel-details";
    for (const [label, value] of [
      ["Hull", unlocked ? hostile.stats.hull : "???"],
      ["Shield", unlocked ? (hostile.stats.shield > 0 ? hostile.stats.shield : "None") : "???"],
      ["Speed", unlocked ? hostile.stats.speed : "???"],
      ["Scrap", unlocked ? hostile.stats.scrap : "???"],
      ["Attack", unlocked ? hostile.stats.attack : "???"],
    ]) {
      const row = document.createElement("div");
      row.className = "hostile-intel-detail";
      row.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
      details.appendChild(row);
    }
    card.appendChild(details);

    const tags = document.createElement("div");
    tags.className = "hostile-intel-chip-row";
    for (const tag of (unlocked ? hostile.tags : ["Unknown"])) {
      const chip = document.createElement("span");
      chip.className = "hostile-intel-chip";
      chip.textContent = tag;
      tags.appendChild(chip);
    }
    card.appendChild(tags);

    hangarHostilesGrid.appendChild(card);
  }
}

function renderMetaUpgrades() {
  metaUpgrades.innerHTML = "";
  hangarMetaUpgrades.innerHTML = "";
  for (const [id, def] of Object.entries(metaUpgradeDefs)) {
    const visual = metaUpgradeVisuals[id] || { icon: "UP", accent: "#8af6ff" };
    const level = metaLevel(id);
    const cost = metaCost(id);
    const card = document.createElement("div");
    card.className = "meta-upgrade";
    const disabled = level >= def.maxLevel || state.meta.goldBank < cost;
    card.innerHTML = `
      <div class="meta-upgrade-top">
        <div class="meta-upgrade-icon" style="--upgrade-accent:${visual.accent};"></div>
        <div class="meta-upgrade-copy">
          <div class="meta-upgrade-head">
            <h3>${def.name}</h3>
            <strong>${formatVersionLabel(level)} / ${formatVersionNumber(def.maxLevel)}</strong>
          </div>
          <p>${def.description}</p>
        </div>
      </div>
      <button type="button" ${level >= def.maxLevel ? "disabled" : ""}>${level >= def.maxLevel ? "Maxed" : `Buy ${cost} Ardonis Credits`}</button>
    `;
    const clone = card.cloneNode(true);
    const wire = (node) => {
      const button = node.querySelector("button");
      button.dataset.upgradeId = id;
      button.dataset.instantConfirm = "true";
      populateUpgradeArt(node.querySelector(".meta-upgrade-icon"), id, def.name, "meta-upgrade-icon-image");
      if (!disabled && level < def.maxLevel) {
        button.addEventListener("click", () => purchaseMetaUpgrade(id));
      } else if (level < def.maxLevel) {
        button.disabled = true;
      }
    };
    wire(card);
    wire(clone);
    metaUpgrades.appendChild(card);
    hangarMetaUpgrades.appendChild(clone);
  }
  const respecAvailable = Object.values(state.meta.upgrades || {}).some(level => level > 0);
  const respecRefund = Math.max(0, Math.floor(state.meta.upgradeCreditsSpent || 0));
  if (hangarUpgradesRespec) {
    hangarUpgradesRespec.disabled = !respecAvailable;
    hangarUpgradesRespec.textContent = respecAvailable
      ? `Respec Ship Upgrades${respecRefund > 0 ? ` (+${respecRefund} Credits)` : ""}`
      : "No Upgrades To Respec";
  }
  bankReadout.textContent = `Bank: ${state.meta.goldBank} Ardonis Credits`;
  if (hangarBank) {
    hangarBank.textContent = `Ardonis Credits: ${state.meta.goldBank}`;
  }
  if (hangarUpgradeBank) {
    hangarUpgradeBank.textContent = `Ardonis Credits: ${state.meta.goldBank}`;
  }
  if (hangarAugmentBank) {
    hangarAugmentBank.textContent = `Ardonis Credits: ${state.meta.goldBank}`;
  }
  renderOverallStats();
  renderAugmentBay();
  syncHangarRunConfig();
  if (modMenu && !modMenu.classList.contains("hidden")) {
    renderModMenu();
  }
}

function modMenuActive() {
  return modMenu && !modMenu.classList.contains("hidden");
}

function renderModMenu() {
  if (!modMenuUpgrades || !modMenuBank) return;
  modMenuBank.textContent = `Ardonis Credits: ${state.meta.goldBank}`;
  modMenuUpgrades.innerHTML = "";
  for (const [id, def] of Object.entries(metaUpgradeDefs)) {
    const visual = metaUpgradeVisuals[id] || { icon: "UP", accent: "#8af6ff" };
    const level = metaLevel(id);
    const maxed = level >= def.maxLevel;
    const card = document.createElement("div");
    card.className = "meta-upgrade";
    card.innerHTML = `
      <div class="meta-upgrade-top">
        <div class="meta-upgrade-icon" style="--upgrade-accent:${visual.accent};"></div>
        <div class="meta-upgrade-copy">
          <div class="meta-upgrade-head">
            <h3>${def.name}</h3>
            <strong>${formatVersionLabel(level)} / ${formatVersionNumber(def.maxLevel)}</strong>
          </div>
          <p>${def.description}</p>
        </div>
      </div>
      <button type="button" ${maxed ? "disabled" : ""}>${maxed ? "Maxed" : "Max Upgrade"}</button>
    `;
    populateUpgradeArt(card.querySelector(".meta-upgrade-icon"), id, def.name, "meta-upgrade-icon-image");
    const button = card.querySelector("button");
    button.dataset.modUpgradeId = id;
    if (!maxed) {
      button.addEventListener("click", () => maxMetaUpgrade(id));
    }
    modMenuUpgrades.appendChild(card);
  }
}

function canOpenModMenu() {
  return !state.sceneTransitionActive && !["levelup", "weaponselect", "planet", "voyageupgrades"].includes(state.mode);
}

function keyboardModComboActive() {
  return state.keys.has("j") && state.keys.has("k") && state.keys.has("l");
}

function openModMenu() {
  if (modMenuActive() || !canOpenModMenu()) return;
  state.modMenuReturnMode = state.mode;
  state.mode = "modmenu";
  renderModMenu();
  modMenu.classList.remove("hidden");
  state.gamepad.menuIndex = 0;
  syncGamepadFocus();
}

function closeModMenu() {
  if (!modMenuActive()) return;
  modMenu.classList.add("hidden");
  state.mode = state.modMenuReturnMode || "menu";
  state.gamepad.menuIndex = 0;
  syncGamepadFocus();
}

function grantModCredits(amount) {
  const value = Number(amount);
  if (!Number.isFinite(value) || value <= 0) return;
  state.meta.goldBank += Math.floor(value);
  saveMetaProgression();
  renderMetaUpgrades();
  syncHud();
}

function maxMetaUpgrade(id) {
  const def = metaUpgradeDefs[id];
  if (!def) return;
  state.meta.upgrades[id] = def.maxLevel;
  saveMetaProgression();
  renderMetaUpgrades();
  syncHud();
}

function unlockAllAugmentsFromModMenu() {
  const allAugmentIds = Object.keys(augmentDefs);
  state.meta.unlockedAugments = allAugmentIds.slice();
  state.meta.totals.bestVictoryTime = Math.max(
    state.meta.totals.bestVictoryTime || 0,
    SECRET_NORMAL_ELEMENTAL_UNLOCK_TIME
  );
  saveMetaProgression();
  renderMetaUpgrades();
  renderAugmentBay();
  statusText.textContent = "All augments unlocked through override controls.";
  hangarStatus.textContent = "All augments unlocked through override controls.";
  syncHud();
}

function renderOverallStats() {
  const stats = metaDerivedStats();
  hangarStatsGrid.innerHTML = "";
  const groups = [
    {
      eyebrow: "Defense",
      title: "Shield & Hull",
      items: [
        ["Shield Capacity", Math.round(100 + stats.shieldBonus)],
        ["Shield Regen", `${stats.shieldRegenBonus.toFixed(1)}/s`],
        ["Hull Regen", `${stats.hullRegenBonus.toFixed(1)}/s`],
      ],
    },
    {
      eyebrow: "Mobility",
      title: "Drive Systems",
      items: [
        ["Boost Reserve", Math.round(50 + stats.boostReserveBonus)],
        ["Boost Recharge", `${(26 * stats.boostRegenMultiplier).toFixed(1)}/s`],
        ["Boost Burnout", `${(2 * stats.boostCooldownMultiplier).toFixed(2)}s`],
        ["Phase Dash", `${(3 * stats.dashCooldownMultiplier).toFixed(2)}s / ${stats.dashDistanceMultiplier.toFixed(2)}x range`],
      ],
    },
    {
      eyebrow: "Offense",
      title: "Weapons Output",
      items: [
        ["Attack Speed", `${stats.fireRateMultiplier.toFixed(2)}x`],
        ["Attack Damage", `${stats.damageMultiplier.toFixed(2)}x`],
        ["Crit Chance", `${Math.round(stats.critChanceBase * 100)}%`],
        ["Crit Damage", `${Math.round(stats.critDamageBase * 100)}%`],
      ],
    },
    {
      eyebrow: "Elemental",
      title: "Status Control",
      items: [
        ["Elemental Resist", `${Math.round(stats.elementalResistance * 100)}%`],
        ["Elemental Proc", `+${Math.round((stats.elementalProcChanceMultiplier - 1) * 100)}%`],
        ["Elemental Damage", `${stats.elementalDamageMultiplier.toFixed(2)}x`],
        ["Elemental Duration", `${stats.elementalDurationMultiplier.toFixed(2)}x`],
      ],
    },
  ];
  for (const group of groups) {
    const section = document.createElement("section");
    section.className = "hangar-stat-group";
    const head = document.createElement("div");
    head.className = "hangar-stat-group-head";
    head.innerHTML = `<p class="eyebrow">${group.eyebrow}</p><h3>${group.title}</h3>`;
    section.appendChild(head);
    for (const [label, value] of group.items) {
      const row = document.createElement("div");
      row.className = "hangar-stat";
      row.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
      section.appendChild(row);
    }
    hangarStatsGrid.appendChild(section);
  }

  if (!hangarRecordsGrid) return;
  const totals = state.meta.totals;
  hangarRecordsGrid.innerHTML = "";
  const recordItems = [
    ["Runs", totals.runs],
    ["Hostiles Destroyed", totals.kills],
    ["Best Survival", formatTime(totals.bestTime)],
    ["Lifetime Credits", totals.creditsEarned],
    ["Crude Caches", state.meta.crudeAugmentCaches],
    ["Ardonis Caches", state.meta.ardonisAugmentCaches],
    ["Augments Unlocked", state.meta.unlockedAugments.length],
    ["Augments Equipped", state.meta.equippedAugments.length],
  ];
  for (const [label, value] of recordItems) {
    const row = document.createElement("div");
    row.className = "hangar-stat";
    row.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    hangarRecordsGrid.appendChild(row);
  }
}

function setupMusicSystem() {
  const runTracks = [
    new Audio("monume-space-ambient-498030.mp3"),
    new Audio("freemusicforvideo-space-ambient-495614.mp3"),
  ];
  const deathTrack = new Audio("Assets/SFX/Death SFX.mp3");
  const hubTracks = [
    new Audio("freesound_community-space-ship-bridge-loop-104525.mp3"),
    new Audio("freesound_community-space-ship-bridge-loop-104525.mp3"),
  ];
  for (const track of hubTracks) {
    track.preload = "auto";
    track.volume = 0;
    track.loop = false;
  }
  for (const track of runTracks) {
    track.preload = "auto";
    track.volume = 0;
  }
  deathTrack.preload = "auto";
  deathTrack.volume = 0;
  deathTrack.loop = false;
  state.music = {
    hubTracks,
    hubActive: 0,
    hubCrossfadeStarted: false,
    hubFadeSeconds: 1.8,
    runTracks,
    deathTrack,
    active: 0,
    mode: "hub",
    hubTargetVolume: 0.34,
    runTargetVolume: 0.42,
    deathTargetVolume: 0.5,
    deathFadeSeconds: 1.2,
    fadeSeconds: 4,
    crossfadeStarted: false,
  };
  applyAudioSettings();
}

function setupSfxSystem() {
  const playerFirePool = Array.from({ length: 8 }, () => {
    const sound = new Audio("freesound_community-pixel-sound-effect-3-82880.mp3");
    sound.preload = "auto";
    sound.volume = 0.42 * state.settings.gunSfxVolume;
    return sound;
  });
  const photonLanceOnline = new Audio("Assets/SFX/Photon lance online!.mp3");
  photonLanceOnline.preload = "auto";
  photonLanceOnline.volume = 0.78 * state.settings.otherSfxVolume;
  const droneHaloOnline = new Audio("Assets/SFX/Drone halo online!.mp3");
  droneHaloOnline.preload = "auto";
  droneHaloOnline.volume = 0.78 * state.settings.otherSfxVolume;
  const photonPhazerOnline = new Audio("Assets/SFX/Photon phazer online!.mp3");
  photonPhazerOnline.preload = "auto";
  photonPhazerOnline.volume = 0.78 * state.settings.otherSfxVolume;
  const leviathanApproachingPool = Array.from({ length: 2 }, () => {
    const sound = new Audio("Assets/SFX/Warning, Leviathan Approaching!.mp3");
    sound.preload = "auto";
    sound.volume = 0.82 * state.settings.otherSfxVolume;
    return sound;
  });
  const hullCriticalWarning = new Audio("Assets/SFX/Warning,Hull Critical!.mp3");
  hullCriticalWarning.preload = "auto";
  hullCriticalWarning.volume = 0.72 * state.settings.otherSfxVolume;
  const shieldDepletedWarning = new Audio("Assets/SFX/Warning shields depleted!.mp3");
  shieldDepletedWarning.preload = "auto";
  shieldDepletedWarning.volume = 0.76 * state.settings.otherSfxVolume;
  const deathDetectedWarning = new Audio("Assets/SFX/Lifesigns no longer detected!.mp3");
  deathDetectedWarning.preload = "auto";
  deathDetectedWarning.volume = 0.82 * state.settings.otherSfxVolume;
  state.sfx = {
    playerFirePool,
    photonLanceOnline,
    droneHaloOnline,
    photonPhazerOnline,
    leviathanApproachingPool,
    leviathanApproachingIndex: 0,
    hullCriticalWarning,
    shieldDepletedWarning,
    deathDetectedWarning,
    playerFireIndex: 0,
    primed: false,
  };
  applyAudioSettings();
}

function applyAudioSettings() {
  const musicPercent = Math.round(state.settings.musicVolume * 100);
  const gunSfxPercent = Math.round(state.settings.gunSfxVolume * 100);
  const otherSfxPercent = Math.round(state.settings.otherSfxVolume * 100);

  musicVolume.value = String(musicPercent);
  musicVolumeReadout.textContent = `${musicPercent}%`;
  sfxVolume.value = String(gunSfxPercent);
  sfxVolumeReadout.textContent = `${gunSfxPercent}%`;
  if (otherSfxVolume) {
    otherSfxVolume.value = String(otherSfxPercent);
  }
  if (otherSfxVolumeReadout) {
    otherSfxVolumeReadout.textContent = `${otherSfxPercent}%`;
  }
  if (hangarMusicVolume) {
    hangarMusicVolume.value = String(musicPercent);
  }
  if (hangarMusicVolumeReadout) {
    hangarMusicVolumeReadout.textContent = `${musicPercent}%`;
  }
  if (hangarSfxVolume) {
    hangarSfxVolume.value = String(gunSfxPercent);
  }
  if (hangarSfxVolumeReadout) {
    hangarSfxVolumeReadout.textContent = `${gunSfxPercent}%`;
  }
  if (hangarOtherSfxVolume) {
    hangarOtherSfxVolume.value = String(otherSfxPercent);
  }
  if (hangarOtherSfxVolumeReadout) {
    hangarOtherSfxVolumeReadout.textContent = `${otherSfxPercent}%`;
  }
  if (mainMenuMusicVolume) {
    mainMenuMusicVolume.value = String(musicPercent);
  }
  if (mainMenuMusicVolumeReadout) {
    mainMenuMusicVolumeReadout.textContent = `${musicPercent}%`;
  }
  if (mainMenuSfxVolume) {
    mainMenuSfxVolume.value = String(gunSfxPercent);
  }
  if (mainMenuSfxVolumeReadout) {
    mainMenuSfxVolumeReadout.textContent = `${gunSfxPercent}%`;
  }
  if (mainMenuOtherSfxVolume) {
    mainMenuOtherSfxVolume.value = String(otherSfxPercent);
  }
  if (mainMenuOtherSfxVolumeReadout) {
    mainMenuOtherSfxVolumeReadout.textContent = `${otherSfxPercent}%`;
  }

  if (state.music) {
    state.music.hubTargetVolume = 0.34 * state.settings.musicVolume;
    state.music.runTargetVolume = 0.42 * state.settings.musicVolume;
    state.music.deathTargetVolume = 0.5 * state.settings.musicVolume;
    for (const track of state.music.hubTracks) {
      track.volume = Math.min(track.volume, state.music.hubTargetVolume);
    }
    for (const track of state.music.runTracks) {
      track.volume = Math.min(track.volume, state.music.runTargetVolume);
    }
    if (state.music.deathTrack) {
      state.music.deathTrack.volume = Math.min(state.music.deathTrack.volume, state.music.deathTargetVolume);
    }
  }

  if (state.sfx?.playerFirePool) {
    for (const sound of state.sfx.playerFirePool) {
      sound.volume = 0.42 * state.settings.gunSfxVolume;
    }
  }
  if (state.sfx?.photonLanceOnline) {
    state.sfx.photonLanceOnline.volume = 0.78 * state.settings.otherSfxVolume;
  }
  if (state.sfx?.droneHaloOnline) {
    state.sfx.droneHaloOnline.volume = 0.78 * state.settings.otherSfxVolume;
  }
  if (state.sfx?.photonPhazerOnline) {
    state.sfx.photonPhazerOnline.volume = 0.78 * state.settings.otherSfxVolume;
  }
  if (state.sfx?.leviathanApproachingPool) {
    for (const sound of state.sfx.leviathanApproachingPool) {
      sound.volume = 0.82 * state.settings.otherSfxVolume;
    }
  }
  if (state.sfx?.hullCriticalWarning) {
    state.sfx.hullCriticalWarning.volume = 0.72 * state.settings.otherSfxVolume;
  }
  if (state.sfx?.shieldDepletedWarning) {
    state.sfx.shieldDepletedWarning.volume = 0.76 * state.settings.otherSfxVolume;
  }
  if (state.sfx?.deathDetectedWarning) {
    state.sfx.deathDetectedWarning.volume = 0.82 * state.settings.otherSfxVolume;
  }
}

function tickMusic(dt) {
  if (!state.music) return;
  const music = state.music;
  if (music.mode === "hub") {
    const currentHub = music.hubTracks[music.hubActive];
    const nextHubIndex = (music.hubActive + 1) % music.hubTracks.length;
    const nextHub = music.hubTracks[nextHubIndex];
    const fadeDelta = dt / music.hubFadeSeconds;
    if (
      currentHub.duration &&
      !music.hubCrossfadeStarted &&
      currentHub.currentTime >= Math.max(0, currentHub.duration - music.hubFadeSeconds - 0.08)
    ) {
      music.hubCrossfadeStarted = true;
      nextHub.currentTime = 0;
      nextHub.volume = 0;
      if (nextHub.paused) {
        nextHub.play().catch(() => {});
      }
    }

    if (state.audioStarted && currentHub.paused) {
      keepHubAmbienceAlive();
    }

    if (music.hubCrossfadeStarted) {
      currentHub.volume = Math.max(0, currentHub.volume - fadeDelta * music.hubTargetVolume);
      nextHub.volume = Math.min(music.hubTargetVolume, nextHub.volume + fadeDelta * music.hubTargetVolume);
      if (currentHub.volume <= 0.01) {
        currentHub.pause();
        currentHub.currentTime = 0;
        music.hubActive = nextHubIndex;
        music.hubCrossfadeStarted = false;
      }
    } else if (!currentHub.paused) {
      currentHub.volume = Math.min(music.hubTargetVolume, currentHub.volume + dt * 0.4);
    }

    for (const track of music.runTracks) {
      if (!track.paused) {
        track.volume = Math.max(0, track.volume - dt * 0.5);
        if (track.volume <= 0.01) {
          track.pause();
          track.currentTime = 0;
        }
      }
    }
    return;
  }

  if (music.mode === "death") {
    const fadeDelta = dt / music.deathFadeSeconds;
    for (const hubTrack of music.hubTracks) {
      if (!hubTrack.paused) {
        hubTrack.volume = Math.max(0, hubTrack.volume - fadeDelta * music.hubTargetVolume);
        if (hubTrack.volume <= 0.01) {
          hubTrack.pause();
          hubTrack.currentTime = 0;
        }
      }
    }
    for (const track of music.runTracks) {
      if (!track.paused) {
        track.volume = Math.max(0, track.volume - fadeDelta * music.runTargetVolume);
        if (track.volume <= 0.01) {
          track.pause();
          track.currentTime = 0;
        }
      }
    }
    if (music.deathTrack && !music.deathTrack.ended) {
      if (music.deathTrack.paused) {
        music.deathTrack.play().catch(() => {});
      }
      music.deathTrack.volume = Math.min(
        music.deathTargetVolume,
        music.deathTrack.volume + fadeDelta * music.deathTargetVolume
      );
    }
    return;
  }

  const current = music.runTracks[music.active];
  const nextIndex = (music.active + 1) % music.runTracks.length;
  const next = music.runTracks[nextIndex];
  const fadeDelta = dt / music.fadeSeconds;

  if (
    current.duration &&
    !music.crossfadeStarted &&
    current.currentTime >= Math.max(0, current.duration - music.fadeSeconds - 0.1)
  ) {
    music.crossfadeStarted = true;
    next.currentTime = 0;
    next.volume = 0;
    next.play().catch(() => {});
  }

  if (music.crossfadeStarted) {
    current.volume = Math.max(0, current.volume - fadeDelta * music.runTargetVolume);
    next.volume = Math.min(music.runTargetVolume, next.volume + fadeDelta * music.runTargetVolume);
    if (current.volume <= 0.01) {
      current.pause();
      current.currentTime = 0;
      music.active = nextIndex;
      music.crossfadeStarted = false;
    }
  } else if (!current.paused) {
    current.volume = Math.min(music.runTargetVolume, current.volume + fadeDelta * music.runTargetVolume);
  }
}

function ensureMusicStarted() {
  if (state.audioStarted || !state.music) return;
  state.audioStarted = true;
  playHubAmbience(true);
  if (state.music.hubTracks.every(track => track.paused)) {
    state.audioStarted = false;
  }
  primeSfxPool();
}

function ensureUiAudioContext() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;
  if (!state.uiAudioContext) {
    state.uiAudioContext = new AudioCtor();
  }
  if (state.uiAudioContext.state === "suspended") {
    state.uiAudioContext.resume().catch(() => {});
  }
  return state.uiAudioContext;
}

function playMenuNavigateSfx() {
  if (state.settings.otherSfxVolume <= 0.001) return;
  const now = performance.now();
  if (now - (state.lastMenuNavigateSfxAt || 0) < 48) return;
  state.lastMenuNavigateSfxAt = now;
  const ctx = ensureUiAudioContext();
  if (!ctx) return;
  const start = ctx.currentTime;
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(980, start);
  osc.frequency.exponentialRampToValueAtTime(720, start + 0.065);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(2400, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.001, 0.022 * state.settings.otherSfxVolume), start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.08);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + 0.09);
  osc.onended = () => {
    osc.disconnect();
    filter.disconnect();
    gain.disconnect();
  };
}

function playHubAmbience(reset = false) {
  if (!state.audioStarted || !state.music) return;
  const { hubTracks } = state.music;
  if (reset) {
    state.music.hubActive = 0;
    state.music.hubCrossfadeStarted = false;
    for (const track of hubTracks) {
      track.pause();
      track.currentTime = 0;
      track.volume = 0;
    }
  }
  const currentHub = hubTracks[state.music.hubActive];
  const otherHub = hubTracks[(state.music.hubActive + 1) % hubTracks.length];
  if (otherHub.currentTime > 0 || !otherHub.paused) {
    otherHub.pause();
    otherHub.currentTime = 0;
    otherHub.volume = 0;
  }
  if (currentHub.duration && currentHub.currentTime >= Math.max(0, currentHub.duration - 0.08)) {
    currentHub.currentTime = 0;
  }
  if (currentHub.paused) {
    currentHub.play().catch(() => {});
  }
}

function keepHubAmbienceAlive() {
  if (!state.audioStarted || !state.music || state.music.mode !== "hub") return;
  playHubAmbience();
  const currentHub = state.music.hubTracks[state.music.hubActive];
  if (!currentHub) return;
  currentHub.volume = Math.max(
    currentHub.volume,
    Math.min(state.music.hubTargetVolume, 0.05 + state.music.hubTargetVolume * 0.12)
  );
}

function switchMusicMode(mode) {
  if (!state.music) return;
  state.music.mode = mode;
  if (state.music.deathTrack && mode !== "death") {
    state.music.deathTrack.pause();
    state.music.deathTrack.currentTime = 0;
    state.music.deathTrack.volume = 0;
  }
  if (!state.audioStarted) return;
  if (mode === "hub") {
    playHubAmbience();
  } else if (mode === "death") {
    state.music.crossfadeStarted = false;
    state.music.hubCrossfadeStarted = false;
    if (state.music.deathTrack) {
      state.music.deathTrack.pause();
      state.music.deathTrack.currentTime = 0;
      state.music.deathTrack.volume = 0;
      state.music.deathTrack.play().catch(() => {});
    }
  } else {
    for (const hubTrack of state.music.hubTracks) {
      hubTrack.volume = 0;
      hubTrack.pause();
    }
    state.music.hubCrossfadeStarted = false;
    const current = state.music.runTracks[state.music.active];
    if (current.paused) {
      current.currentTime = 0;
      current.volume = 0;
      current.play().catch(() => {});
    }
  }
}

function playPlayerFireSfx() {
  if (!state.sfx?.playerFirePool?.length) return;
  const sound = state.sfx.playerFirePool[state.sfx.playerFireIndex];
  state.sfx.playerFireIndex = (state.sfx.playerFireIndex + 1) % state.sfx.playerFirePool.length;
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function playPrimaryWeaponActivationSfx(id) {
  if (id !== "emberBolt") return;
  const sound = state.sfx?.photonLanceOnline;
  if (!sound) return;
  sound.pause();
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function playDroneHaloOnlineSfx() {
  const sound = state.sfx?.droneHaloOnline;
  if (!sound) return;
  sound.pause();
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function playPhotonPhazerOnlineSfx() {
  const sound = state.sfx?.photonPhazerOnline;
  if (!sound) return;
  sound.pause();
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function playLeviathanApproachingWarningSfx() {
  ensureMusicStarted();
  if (!state.sfx?.leviathanApproachingPool?.length) return;
  const sound = state.sfx.leviathanApproachingPool[state.sfx.leviathanApproachingIndex];
  state.sfx.leviathanApproachingIndex =
    (state.sfx.leviathanApproachingIndex + 1) % state.sfx.leviathanApproachingPool.length;
  sound.pause();
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function playHullCriticalWarningSfx() {
  if (!state.player || state.player.hp <= 0 || state.mode === "death" || state.player.deathSequence?.active) return;
  const sound = state.sfx?.hullCriticalWarning;
  if (!sound) return;
  sound.pause();
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function playShieldDepletedWarningSfx() {
  const sound = state.sfx?.shieldDepletedWarning;
  if (!sound) return;
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function playDeathDetectedWarningSfx() {
  ensureMusicStarted();
  const hullWarning = state.sfx?.hullCriticalWarning;
  if (hullWarning) {
    hullWarning.pause();
    hullWarning.currentTime = 0;
  }
  const sound = state.sfx?.deathDetectedWarning;
  if (!sound) return;
  sound.pause();
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function unlockAudio() {
  ensureMusicStarted();
  ensureUiAudioContext();
  if (state.audioStarted && state.music?.mode === "hub") {
    playHubAmbience();
  }
}

function primeSfxPool() {
  if (!state.sfx?.playerFirePool?.length || state.sfx.primed) return;
  state.sfx.primed = true;
  for (const sound of state.sfx.playerFirePool) {
    sound.load();
  }
  state.sfx.photonLanceOnline?.load();
  state.sfx.droneHaloOnline?.load();
  state.sfx.photonPhazerOnline?.load();
  if (state.sfx.leviathanApproachingPool) {
    for (const sound of state.sfx.leviathanApproachingPool) {
      sound.load();
    }
  }
  state.sfx.hullCriticalWarning?.load();
  state.sfx.shieldDepletedWarning?.load();
  state.sfx.deathDetectedWarning?.load();
}

function updateHullCriticalWarning(player = state.player) {
  if (!player || player.maxHp <= 0) return;
  const hullRatio = player.hp / player.maxHp;
  if (player.hp > 0 && hullRatio <= 0.25) {
    if (player.hullCriticalWarningArmed) {
      playHullCriticalWarningSfx();
      player.hullCriticalWarningArmed = false;
    }
    return;
  }
  if (hullRatio >= 0.3) {
    player.hullCriticalWarningArmed = true;
  }
}

function updateShieldDepletedWarning(player = state.player) {
  if (!player || player.maxShield <= 0) return;
  const shieldRatio = player.shield / player.maxShield;
  if (player.shield <= 0) {
    if (player.shieldDepletedWarningArmed) {
      playShieldDepletedWarningSfx();
      player.shieldDepletedWarningArmed = false;
    }
    return;
  }
  if (shieldRatio >= 0.2) {
    player.shieldDepletedWarningArmed = true;
  }
}

function gamepadMenuTargets() {
  if (modMenuActive()) {
    return [
      modMenuClose,
      ...modCreditButtons,
      ...(modUnlockAugments ? [modUnlockAugments] : []),
      ...Array.from(modMenuUpgrades.querySelectorAll("button:not([disabled])")),
    ];
  }
  if (voyageUpgradeMenuActive()) {
    const purchaseButtons = Array.from(voyageUpgradeGrid.querySelectorAll(".voyage-upgrade-purchase"));
    return purchaseButtons.length ? purchaseButtons : [voyageUpgradesClose];
  }
  if (!runSummary.classList.contains("hidden")) {
    return [runSummaryClose];
  }
  if (teamVoyageMenu && !teamVoyageMenu.classList.contains("hidden")) {
    return Array.from(teamVoyageMenu.querySelectorAll("button")).filter(node => {
      if (!(node instanceof HTMLButtonElement)) return false;
      if (node.disabled) return false;
      if (node.getClientRects().length === 0) return false;
      const style = getComputedStyle(node);
      return style.display !== "none" && style.visibility !== "hidden";
    });
  }
  if (mainMenuSettingsMenu && !mainMenuSettingsMenu.classList.contains("hidden")) {
    return [mainMenuSettingsBack, mainMenuFullscreen, mainMenuMusicVolume, mainMenuSfxVolume, mainMenuOtherSfxVolume].filter(Boolean);
  }
  if (mainMenuScreen && !mainMenuScreen.classList.contains("hidden")) {
    return [mainMenuSoloButton, mainMenuTeamButton, mainMenuSettingsButton, mainMenuLeaderboardsButton].filter(Boolean);
  }
  if (!hangarHostilesMenu.classList.contains("hidden")) {
    return [hangarHostilesBack];
  }
  if (!hangarRecordsMenu.classList.contains("hidden")) {
    return [hangarRecordsBack];
  }
  if (!hangarAugmentsMenu.classList.contains("hidden")) {
    return [hangarAugmentsBack, ...Array.from(hangarAugmentGrid.querySelectorAll("button:not([disabled])"))];
  }
  if (!hangarSettingsMenu.classList.contains("hidden")) {
    return [hangarSettingsBack, hangarFullscreen, hangarMusicVolume, hangarSfxVolume, hangarOtherSfxVolume, hangarReturnMainMenu, hangarResetProgress];
  }
  if (!hangarUpgradesMenu.classList.contains("hidden")) {
    return [
      hangarUpgradesBack,
      ...(!hangarUpgradesRespec?.disabled ? [hangarUpgradesRespec] : []),
      ...Array.from(hangarMetaUpgrades.querySelectorAll(".meta-upgrade button")),
    ];
  }
  if (!hangarScreen.classList.contains("hidden")) {
    return [
      hangarSettingsButton,
      hangarUpgradesButton,
      hangarAugmentsButton,
      hangarHostilesButton,
      hangarRecordsButton,
      hangarVoyageAsteroid,
      hangarVoyageVentari,
      hangarTimeDown,
      hangarTimeUp,
      hangarDifficulty,
      hangarStartButton,
    ].filter(Boolean);
  }
  if (state.mode === "levelup" || state.mode === "weaponselect") {
    return Array.from(upgradeChoices.querySelectorAll("button"));
  }
  if (!overlay.classList.contains("hidden")) {
    const targets = [];
    if (overlayButton.style.display !== "none") targets.push(overlayButton);
    if (overlayEndVoyage.style.display !== "none") targets.push(overlayEndVoyage);
    if (!pauseOptions.classList.contains("hidden")) {
      targets.push(overlayFullscreen, musicVolume, sfxVolume, otherSfxVolume);
    }
    return targets;
  }
  return [];
}

function overlayMenuActive() {
  return !overlay.classList.contains("hidden") && state.mode !== "levelup";
}

function canHoldConfirmTarget(target) {
  if (!(target instanceof HTMLButtonElement)) return false;
  if (target.disabled || !target.isConnected) return false;
  const style = getComputedStyle(target);
  return style.display !== "none" && style.visibility !== "hidden";
}

function menuTargetUsesInstantConfirm(target) {
  return target instanceof HTMLElement && target.dataset?.instantConfirm === "true";
}

function gamepadMenuConfirmTarget() {
  const targets = gamepadMenuTargets();
  if (!targets.length) return null;
  const target = targets[Math.max(0, Math.min(state.gamepad.menuIndex, targets.length - 1))];
  return canHoldConfirmTarget(target) ? target : null;
}

function keyboardMenuConfirmTarget() {
  if (document.activeElement instanceof HTMLElement && canHoldConfirmTarget(document.activeElement)) {
    return document.activeElement;
  }
  return gamepadMenuConfirmTarget();
}

function updateMenuConfirmVisual(target, progress) {
  if (!canHoldConfirmTarget(target)) return;
  target.classList.add("hold-confirming");
  target.style.setProperty("--hold-progress", `${clamp(progress, 0, 1)}`);
}

function clearMenuConfirmHold() {
  const target = state.menuConfirm?.target;
  if (target instanceof HTMLElement) {
    target.classList.remove("hold-confirming");
    target.style.removeProperty("--hold-progress");
  }
  state.menuConfirm = {
    source: null,
    target: null,
    progress: 0,
    completed: false,
  };
}

function startMenuConfirmHold(source) {
  const target = source === "keyboard" ? keyboardMenuConfirmTarget() : gamepadMenuConfirmTarget();
  if (!canHoldConfirmTarget(target)) {
    clearMenuConfirmHold();
    return false;
  }
  const current = state.menuConfirm;
  if (current.target !== target || current.source !== source) {
    clearMenuConfirmHold();
    state.menuConfirm = {
      source,
      target,
      progress: 0,
      completed: false,
    };
    updateMenuConfirmVisual(target, 0);
  }
  return true;
}

function menuConfirmInputHeld(source) {
  if (source === "keyboard") return state.menuConfirmKeyHeld;
  if (source === "gamepad") return Boolean(state.gamepad.confirmDown);
  return false;
}

function activateMenuTarget(target) {
  if (!target) return false;
  if (target.disabled) return true;
  if (voyageUpgradeMenuActive()) {
    if (target === voyageUpgradesClose) {
      closeVoyageUpgradesMenu();
      return true;
    }
    const voyageUpgradeId = target.dataset?.voyageUpgradeId;
    if (voyageUpgradeId) {
      const choice = availableUpgrades().find(entry => entry.id === voyageUpgradeId);
      if (choice) {
        purchaseVoyageUpgrade(choice);
      }
      return true;
    }
  }
  if (
    target === hangarDifficulty ||
    target === mainMenuMusicVolume ||
    target === mainMenuSfxVolume ||
    target === mainMenuOtherSfxVolume ||
    target === hangarMusicVolume ||
    target === hangarSfxVolume ||
    target === hangarOtherSfxVolume ||
    target === musicVolume ||
    target === sfxVolume ||
    target === otherSfxVolume
  ) {
    return true;
  }
  target.click();
  return true;
}

function updateMenuConfirmHold(dt) {
  const hold = state.menuConfirm;
  if (!hold?.target || !hold.source) return;
  const activeTarget = hold.source === "keyboard" ? keyboardMenuConfirmTarget() : gamepadMenuConfirmTarget();
  if (!menuConfirmInputHeld(hold.source) || activeTarget !== hold.target || !canHoldConfirmTarget(hold.target)) {
    clearMenuConfirmHold();
    return;
  }
  if (!hold.completed) {
    hold.progress = clamp(hold.progress + dt / MENU_CONFIRM_HOLD_DURATION, 0, 1);
    updateMenuConfirmVisual(hold.target, hold.progress);
    if (hold.progress >= 1) {
      activateMenuTarget(hold.target);
      hold.completed = true;
      updateMenuConfirmVisual(hold.target, 1);
    }
    return;
  }
  updateMenuConfirmVisual(hold.target, 1);
}

function scrollFocusableIntoView(node) {
  const scrollNode = node?.closest?.(".voyage-upgrade") ?? node;
  const margin = scrollNode !== node ? 10 : 20;
  let parent = node.parentElement;
  while (parent && parent !== document.body) {
    const style = getComputedStyle(parent);
    const isScrollableY = /(auto|scroll)/.test(style.overflowY) && parent.scrollHeight > parent.clientHeight + 2;
    if (isScrollableY) {
      const nodeRect = scrollNode.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      if (nodeRect.top < parentRect.top + margin) {
        parent.scrollTop -= parentRect.top + margin - nodeRect.top;
      } else if (nodeRect.bottom > parentRect.bottom - margin) {
        parent.scrollTop += nodeRect.bottom - (parentRect.bottom - margin);
      }
    }
    parent = parent.parentElement;
  }
}

function applyGamepadFocus(targets, shouldScroll = false) {
  targets.forEach((node, index) => {
    node.classList.toggle("gamepad-focus", index === state.gamepad.menuIndex);
    if (shouldScroll && index === state.gamepad.menuIndex) {
      scrollFocusableIntoView(node);
    }
  });
}

function syncGamepadFocus() {
  const targets = gamepadMenuTargets();
  if (!targets.length) {
    state.gamepad.menuIndex = 0;
    state.lastMenuNavigateTarget = null;
    return;
  }
  state.gamepad.menuIndex = Math.max(0, Math.min(state.gamepad.menuIndex, targets.length - 1));
  applyGamepadFocus(targets, false);
}

function syncUpgradeMenuFocus(id) {
  if (!id || hangarUpgradesMenu.classList.contains("hidden")) {
    syncGamepadFocus();
    return;
  }
  const targets = gamepadMenuTargets();
  const targetIndex = targets.findIndex(node => node?.dataset?.upgradeId === id);
  if (targetIndex >= 0) {
    state.gamepad.menuIndex = targetIndex;
    applyGamepadFocus(targets, true);
    return;
  }
  syncGamepadFocus();
}

function moveGamepadFocus(direction) {
  const targets = gamepadMenuTargets();
  if (!targets.length) return;
  if (targets.length === 1) {
    state.gamepad.menuIndex = 0;
    applyGamepadFocus(targets, true);
    return;
  }

  const currentIndex = Math.max(0, Math.min(state.gamepad.menuIndex, targets.length - 1));
  const currentRect = targets[currentIndex].getBoundingClientRect();
  const currentCenterX = currentRect.left + currentRect.width / 2;
  const currentCenterY = currentRect.top + currentRect.height / 2;

  let bestIndex = currentIndex;
  let bestScore = Infinity;

  for (let index = 0; index < targets.length; index += 1) {
    if (index === currentIndex) continue;
    const rect = targets[index].getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = centerX - currentCenterX;
    const dy = centerY - currentCenterY;

    if (direction === "left" && dx >= -8) continue;
    if (direction === "right" && dx <= 8) continue;
    if (direction === "up" && dy >= -8) continue;
    if (direction === "down" && dy <= 8) continue;

    const primaryDistance = direction === "left" || direction === "right" ? Math.abs(dx) : Math.abs(dy);
    const secondaryDistance = direction === "left" || direction === "right" ? Math.abs(dy) : Math.abs(dx);
    const score = primaryDistance + secondaryDistance * 2.4;

    if (score < bestScore) {
      bestScore = score;
      bestIndex = index;
    }
  }

  if (bestIndex === currentIndex) {
    if (direction === "left" || direction === "up") {
      bestIndex = Math.max(0, currentIndex - 1);
    } else {
      bestIndex = Math.min(targets.length - 1, currentIndex + 1);
    }
  }

  const changed = bestIndex !== currentIndex;
  state.gamepad.menuIndex = bestIndex;
  applyGamepadFocus(targets, true);
  if (changed) {
    state.lastMenuNavigateTarget = targets[bestIndex];
    playMenuNavigateSfx();
  }
}

function menuNavigationElement(target) {
  if (!(target instanceof Element)) return null;
  const element = target.closest("button, input[type='range']");
  if (!element) return null;
  if (
    mainMenuScreen?.contains(element) ||
    mainMenuSettingsMenu?.contains(element) ||
    teamVoyageMenu?.contains(element) ||
    hangarScreen?.contains(element) ||
    overlay?.contains(element) ||
    runSummary?.contains(element) ||
    modMenu?.contains(element) ||
    voyageUpgradesMenu?.contains(element) ||
    upgradeChoices?.contains(element)
  ) {
    return element;
  }
  return null;
}

function scrollRunSummary(direction) {
  const scrollNode = runSummaryScroll || runSummaryCard;
  if (!scrollNode) return false;
  const maxScroll = Math.max(0, scrollNode.scrollHeight - scrollNode.clientHeight);
  if (maxScroll <= 0) return false;
  const step = Math.max(96, scrollNode.clientHeight * 0.22);
  const previous = scrollNode.scrollTop;
  scrollNode.scrollTop = clamp(
    scrollNode.scrollTop + (direction === "up" ? -step : step),
    0,
    maxScroll
  );
  return Math.abs(scrollNode.scrollTop - previous) > 0.5;
}

function scrollHostileDataMenu(direction) {
  const scrollNode = hangarHostilesCard;
  if (!scrollNode) return false;
  const maxScroll = Math.max(0, scrollNode.scrollHeight - scrollNode.clientHeight);
  if (maxScroll <= 0) return false;
  const step = Math.max(120, scrollNode.clientHeight * 0.28);
  const previous = scrollNode.scrollTop;
  scrollNode.scrollTop = clamp(
    scrollNode.scrollTop + (direction === "up" ? -step : step),
    0,
    maxScroll
  );
  return Math.abs(scrollNode.scrollTop - previous) > 0.5;
}

function scrollMenuNode(scrollNode, direction, minimumStep = 110, viewportRatio = 0.24) {
  if (!scrollNode) return false;
  const maxScroll = Math.max(0, scrollNode.scrollHeight - scrollNode.clientHeight);
  if (maxScroll <= 0) return false;
  const step = Math.max(minimumStep, scrollNode.clientHeight * viewportRatio);
  const previous = scrollNode.scrollTop;
  scrollNode.scrollTop = clamp(
    scrollNode.scrollTop + (direction === "up" ? -step : step),
    0,
    maxScroll
  );
  return Math.abs(scrollNode.scrollTop - previous) > 0.5;
}

function activeMenuScrollNode() {
  if (voyageUpgradeMenuActive()) return voyageUpgradeGrid;
  if (modMenuActive()) return modMenuUpgrades;
  if (teamVoyageMenu && !teamVoyageMenu.classList.contains("hidden")) return teamVoyageMenu.querySelector(".hangar-submenu-card");
  if (mainMenuSettingsMenu && !mainMenuSettingsMenu.classList.contains("hidden")) return mainMenuSettingsMenu.querySelector(".hangar-submenu-card");
  if (!hangarHostilesMenu.classList.contains("hidden")) return hangarHostilesCard;
  if (!hangarRecordsMenu.classList.contains("hidden")) return hangarRecordsMenu.querySelector(".hangar-submenu-card");
  if (!hangarAugmentsMenu.classList.contains("hidden")) return hangarAugmentsMenu.querySelector(".hangar-submenu-card");
  if (!hangarUpgradesMenu.classList.contains("hidden")) return hangarUpgradesMenu.querySelector(".hangar-submenu-card");
  if (!hangarSettingsMenu.classList.contains("hidden")) return hangarSettingsMenu.querySelector(".hangar-submenu-card");
  return null;
}

function scrollActiveMenu(direction) {
  return scrollMenuNode(activeMenuScrollNode(), direction);
}

function activateGamepadFocus() {
  if ((state.mode === "levelup" || state.mode === "weaponselect") && !levelChoiceReady()) {
    return true;
  }
  const targets = gamepadMenuTargets();
  if (!targets.length) return false;
  return activateMenuTarget(targets[state.gamepad.menuIndex]);
}

function adjustFocusedRange(delta) {
  const targets = gamepadMenuTargets();
  const target = targets[state.gamepad.menuIndex];
  if (target === hangarDifficulty) {
    setRunDifficulty(state.runConfig.difficulty + delta);
    return true;
  }
  if (target === hangarMusicVolume) {
    state.settings.musicVolume = clamp(state.settings.musicVolume + delta * 0.05, 0, 1);
    applyAudioSettings();
    persistAudioSettings();
    return true;
  }
  if (target === hangarSfxVolume) {
    state.settings.gunSfxVolume = clamp(state.settings.gunSfxVolume + delta * 0.05, 0, 1);
    applyAudioSettings();
    persistAudioSettings();
    return true;
  }
  if (target === hangarOtherSfxVolume) {
    state.settings.otherSfxVolume = clamp(state.settings.otherSfxVolume + delta * 0.05, 0, 1);
    applyAudioSettings();
    persistAudioSettings();
    return true;
  }
  if (target === musicVolume) {
    state.settings.musicVolume = clamp(state.settings.musicVolume + delta * 0.05, 0, 1);
    applyAudioSettings();
    persistAudioSettings();
    return true;
  }
  if (target === sfxVolume) {
    state.settings.gunSfxVolume = clamp(state.settings.gunSfxVolume + delta * 0.05, 0, 1);
    applyAudioSettings();
    persistAudioSettings();
    return true;
  }
  if (target === otherSfxVolume) {
    state.settings.otherSfxVolume = clamp(state.settings.otherSfxVolume + delta * 0.05, 0, 1);
    applyAudioSettings();
    persistAudioSettings();
    return true;
  }
  if (target === hangarTimeDown || target === hangarTimeUp) {
    adjustRunTimeSteps(delta);
    if (delta < 0) {
      state.gamepad.menuIndex = targets.indexOf(hangarTimeDown);
    } else {
      state.gamepad.menuIndex = targets.indexOf(hangarTimeUp);
    }
    applyGamepadFocus(targets, false);
    return true;
  }
  return false;
}

function performDash() {
  const player = state.player;
  if (!player || player.dashCooldown > 0 || state.mode !== "playing" || player.disabledTimer > 0) return;
  if (multiplayerRunClient()) {
    multiplayerRuntime().pendingDash = true;
    return;
  }
  const dashStaminaCost = player.dashStaminaCost || BASE_DASH_STAMINA_COST;
  if ((player.boostCharge || 0) < dashStaminaCost) return;
  const speed = Math.hypot(player.vx, player.vy);
  let dx = Math.cos(player.facing);
  let dy = Math.sin(player.facing);
  if (speed > 20) {
    dx = player.vx / speed;
    dy = player.vy / speed;
  } else {
    const move = applyPlayerControlModifiers(getMoveVector(), player);
    if (move.active) {
      dx = move.x;
      dy = move.y;
    }
  }
  const dashVelocity = 3920 * (player.dashDistanceMultiplier || 1);
  player.vx = dx * dashVelocity;
  player.vy = dy * dashVelocity;
  player.boostCharge = Math.max(0, player.boostCharge - dashStaminaCost);
  player.boosting = false;
  if (player.boostCharge <= 0.05) {
    player.boostCharge = 0;
    player.boostCooldown = player.boostExhaustedCooldown;
  }
  player.dashCooldown = Math.max(1, 3 * (player.dashCooldownMultiplier || 1));
  player.dashTimer = 0.46;
  player.dashRollPhase = 0;
  player.invuln = Math.max(player.invuln, player.dashTimer);
  burst(player.x, player.y, "#8af6ff", 26);
  floatingText(player.x, player.y - 30, "PHASE DASH", "#8af6ff", 0.55);
}

function setMainMenuStatus(message) {
  if (mainMenuStatus) {
    mainMenuStatus.textContent = message;
  }
}

function setTeamVoyageStatus(message) {
  if (teamVoyageStatus) {
    teamVoyageStatus.textContent = message;
  }
}

function defaultMultiplayerServerUrl() {
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1") {
    return "http://localhost:10000";
  }
  return "";
}

function normalizeServerUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  let normalized = raw;
  if (/^wss?:\/\//i.test(normalized)) {
    normalized = normalized.replace(/^ws/i, "http");
  } else if (!/^https?:\/\//i.test(normalized)) {
    const localish = /^localhost\b|^127(?:\.\d{1,3}){3}\b/i.test(normalized);
    normalized = `${localish ? "http" : "https"}://${normalized}`;
  }
  return normalized.replace(/\/+$/, "");
}

function multiplayerWsUrl(serverUrl, roomCode, playerName) {
  const url = new URL(normalizeServerUrl(serverUrl));
  url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
  url.pathname = "/ws";
  url.search = "";
  url.searchParams.set("room", String(roomCode || "").toUpperCase());
  url.searchParams.set("name", String(playerName || "Pilot").trim() || "Pilot");
  return url.toString();
}

function multiplayerHttpUrl(serverUrl, path) {
  return `${normalizeServerUrl(serverUrl)}${path}`;
}

function currentTeamVoyageSettings() {
  return {
    route: state.multiplayer?.lobbySettings?.route || "asteroidBelt",
    difficulty: clamp(Math.round(state.multiplayer?.lobbySettings?.difficulty || 1), 1, 5),
    timerMinutes: clamp(Math.round(state.multiplayer?.lobbySettings?.timerMinutes || 5), 5, BASE_RUN_TIME / 60 + MAX_EXTRA_RUN_STEPS * 5),
    startingWeapon: state.multiplayer?.lobbySettings?.startingWeapon || state.runConfig.startingWeapon || "emberBolt",
  };
}

function readTeamVoyagePreferences() {
  state.multiplayer.serverUrl = normalizeServerUrl(localStorage.getItem(MULTIPLAYER_SERVER_STORAGE_KEY) || defaultMultiplayerServerUrl());
  state.multiplayer.playerName = String(localStorage.getItem(MULTIPLAYER_NAME_STORAGE_KEY) || "Pilot").trim().slice(0, 24) || "Pilot";
  state.multiplayer.lobbySettings = {
    route: state.runConfig.voyageId || "asteroidBelt",
    difficulty: clamp(Math.round(state.runConfig.difficulty || 1), 1, 5),
    timerMinutes: Math.max(5, Math.round(getRunGoalTime() / 60)),
    startingWeapon: state.runConfig.startingWeapon || "emberBolt",
  };
}

function persistTeamVoyagePreferences() {
  localStorage.setItem(MULTIPLAYER_SERVER_STORAGE_KEY, state.multiplayer.serverUrl || "");
  localStorage.setItem(MULTIPLAYER_NAME_STORAGE_KEY, state.multiplayer.playerName || "Pilot");
}

function syncTeamVoyageFormState() {
  if (teamVoyageServerUrl) {
    teamVoyageServerUrl.value = state.multiplayer.serverUrl || "";
  }
  if (teamVoyagePlayerName) {
    teamVoyagePlayerName.value = state.multiplayer.playerName || "Pilot";
  }
  if (teamVoyageRoomInput) {
    teamVoyageRoomInput.value = state.multiplayer.joinCode || "";
  }
}

function teamVoyageConnected() {
  return Boolean(state.multiplayer.connected && state.multiplayer.roomCode);
}

function teamVoyageIsHost() {
  return Boolean(state.multiplayer.playerId && state.multiplayer.playerId === state.multiplayer.hostId);
}

function multiplayerRuntime() {
  return state.multiplayer.runtime;
}

function multiplayerRunActive() {
  return Boolean(multiplayerRuntime().active);
}

function multiplayerRunHost() {
  return multiplayerRunActive() && multiplayerRuntime().mode === "host";
}

function multiplayerRunClient() {
  return multiplayerRunActive() && multiplayerRuntime().mode === "client";
}

function clearMultiplayerRuntime() {
  state.multiplayer.runtime = {
    active: false,
    mode: "solo",
    remotePilots: {},
    inputClock: 0,
    snapshotClock: 0,
    pendingDash: false,
  };
}

function currentTeamVoyagePlayerRoster() {
  return Array.isArray(state.multiplayer.players) ? state.multiplayer.players : [];
}

function teamVoyageRoomSettings() {
  return {
    route: state.multiplayer.lobbySettings?.route || "asteroidBelt",
    difficulty: clamp(Math.round(state.multiplayer.lobbySettings?.difficulty || 1), 1, 5),
    timerMinutes: clamp(Math.round(state.multiplayer.lobbySettings?.timerMinutes || 5), 5, BASE_RUN_TIME / 60 + MAX_EXTRA_RUN_STEPS * 5),
    startingWeapon: state.multiplayer.lobbySettings?.startingWeapon || state.runConfig.startingWeapon || "emberBolt",
  };
}

function applyTeamVoyageRoomSettingsToRun(room) {
  const settings = room?.settings || teamVoyageRoomSettings();
  state.runConfig.voyageId = settings.route === "ventariSystem" ? "ventariSystem" : "asteroidBelt";
  state.runConfig.difficulty = clamp(Math.round(settings.difficulty || 1), 1, 5);
  const timerMinutes = clamp(Math.round(settings.timerMinutes || 5), 5, BASE_RUN_TIME / 60 + MAX_EXTRA_RUN_STEPS * 5);
  state.runConfig.extraTimeSteps = clamp(Math.round((timerMinutes - 5) / 5), 0, MAX_EXTRA_RUN_STEPS);
  state.runConfig.startingWeapon = weaponDefs[settings.startingWeapon]?.slot === "primary"
    ? settings.startingWeapon
    : (state.runConfig.startingWeapon || "emberBolt");
  syncHangarRunConfig();
}

function makePlayerFromMetaProfile(metaProfile, startingWeapon) {
  const previousMeta = state.meta;
  const previousStartingWeapon = state.currentRun.startingWeapon;
  state.meta = normalizeMetaProgression(metaProfile);
  if (startingWeapon) {
    state.currentRun.startingWeapon = startingWeapon;
  }
  const pilot = makePlayer();
  state.meta = previousMeta;
  state.currentRun.startingWeapon = previousStartingWeapon;
  return pilot;
}

function currentMultiplayerProfilePayload() {
  return {
    meta: normalizeMetaProgression(state.meta),
  };
}

function makeNetworkPilot(id, name, index = 0, profileMeta = null) {
  const offsetAngle = (Math.PI * 2 * index) / Math.max(1, currentTeamVoyagePlayerRoster().length + 1);
  const spawnDistance = 92;
  const x = WORLD_W / 2 + Math.cos(offsetAngle) * spawnDistance;
  const y = WORLD_H / 2 + Math.sin(offsetAngle) * spawnDistance;
  const startingWeapon = teamVoyageRoomSettings().startingWeapon || "emberBolt";
  const pilot = makePlayerFromMetaProfile(profileMeta || state.meta, startingWeapon);
  pilot.id = id;
  pilot.name = name || "Pilot";
  pilot.x = x;
  pilot.y = y;
  pilot.prevX = x;
  pilot.prevY = y;
  pilot.vx = 0;
  pilot.vy = 0;
  pilot.facing = 0;
  pilot.rotation = 0;
  pilot.level = 1;
  pilot.scrap = 0;
  pilot.xp = 0;
  pilot.nextXp = runXpCurve(1);
  pilot.primaryWeapon = startingWeapon;
  pilot.weapons.emberBolt.level = startingWeapon === "emberBolt" ? 1 : 0;
  pilot.weapons.emberBolt.cooldown = 0;
  pilot.weapons.plasmaCannon.level = startingWeapon === "plasmaCannon" ? 1 : 0;
  pilot.weapons.plasmaCannon.cooldown = 0;
  pilot.weapons.plasmaCannon.waveFlip = 1;
  pilot.weapons.orbitBlades.level = 0;
  pilot.weapons.orbitBlades.angle = 0;
  pilot.weapons.orbitBlades.hitMap = new Map();
  pilot.weapons.photonPhazer.level = 0;
  pilot.weapons.photonPhazer.active = false;
  pilot.weapons.photonPhazer.beamAlpha = 0;
  pilot.weapons.photonPhazer.beamEndX = x;
  pilot.weapons.photonPhazer.beamEndY = y;
  pilot.weapons.photonPhazer.target = null;
  pilot.weapons.novaPulse.level = 0;
  pilot.weapons.novaPulse.cooldown = 0;
  pilot.input = {
    moveX: 0,
    moveY: 0,
    strength: 0,
    active: false,
    aimX: 1,
    aimY: 0,
    boost: 0,
    dash: false,
  };
  return pilot;
}

function ensureMultiplayerRemotePilots() {
  if (!multiplayerRunHost()) return;
  const runtime = multiplayerRuntime();
  const roster = currentTeamVoyagePlayerRoster().filter(player => player.id && player.id !== state.multiplayer.playerId);
  const validIds = new Set();
  roster.forEach((player, index) => {
    validIds.add(player.id);
    const existing = runtime.remotePilots[player.id];
    if (!existing) {
      runtime.remotePilots[player.id] = makeNetworkPilot(
        player.id,
        player.name,
        index + 1,
        state.multiplayer.playerProfiles[player.id] || null
      );
    } else {
      existing.name = player.name || existing.name;
    }
  });
  for (const id of Object.keys(runtime.remotePilots)) {
    if (!validIds.has(id)) {
      delete runtime.remotePilots[id];
    }
  }
}

function visibleToAnyMultiplayerPilot(entity, padding = MULTIPLAYER_SYNC_RANGE) {
  if (!entity) return false;
  const pilots = [state.player, ...Object.values(multiplayerRuntime().remotePilots)];
  return pilots.some(pilot => pilot && Math.abs(entity.x - pilot.x) <= padding && Math.abs(entity.y - pilot.y) <= padding);
}

function serializeMultiplayerPilot(id, pilot, extra = {}) {
  const phazer = pilot?.weapons?.photonPhazer;
  return {
    id,
    name: extra.name || "Pilot",
    local: Boolean(extra.local),
    x: pilot.x,
    y: pilot.y,
    vx: pilot.vx || 0,
    vy: pilot.vy || 0,
    facing: pilot.facing || 0,
    rotation: pilot.rotation || 0,
    radius: pilot.radius || 14,
    hp: pilot.hp || 0,
    maxHp: pilot.maxHp || 1,
    shield: pilot.shield || 0,
    maxShield: pilot.maxShield || 0,
    level: pilot.level || 1,
    scrap: Math.floor(pilot.scrap || 0),
    boostCharge: pilot.boostCharge || 0,
    boostMax: pilot.boostMax || BASE_BOOST_CAPACITY,
    thrusting: Boolean(pilot.thrusting),
    boosting: Boolean(pilot.boosting),
    dashTimer: pilot.dashTimer || 0,
    enginePulse: pilot.enginePulse || 0,
    engineOutput: pilot.engineOutput || 0,
    primaryWeapon: pilot.primaryWeapon || "emberBolt",
    primaryWeaponLevel: primaryWeaponState(pilot)?.level || 0,
    orbitBladeLevel: pilot?.weapons?.orbitBlades?.level || 0,
    orbitBladeAngle: pilot?.weapons?.orbitBlades?.angle || 0,
    photonPhazerLevel: pilot?.weapons?.photonPhazer?.level || 0,
    phazerBeam: phazer && (phazer.target || phazer.active || phazer.afterglow > 0)
      ? {
        active: true,
        beamAlpha: phazer.beamAlpha || 0,
        beamEndX: phazer.target?.x ?? phazer.beamEndX ?? pilot.x,
        beamEndY: phazer.target?.y ?? phazer.beamEndY ?? pilot.y,
      }
      : null,
  };
}

function snapshotWorldState() {
  const pilots = [];
  const localName = currentTeamVoyagePlayerRoster().find(player => player.id === state.multiplayer.playerId)?.name || state.multiplayer.playerName;
  pilots.push(serializeMultiplayerPilot(state.multiplayer.playerId || "host", state.player, { name: localName, local: true }));
  for (const remote of Object.values(multiplayerRuntime().remotePilots)) {
    pilots.push(serializeMultiplayerPilot(remote.id, remote, { name: remote.name, local: false }));
  }

  const enemies = [];
  for (const enemy of state.enemies) {
    if (enemy.alive === false || !visibleToAnyMultiplayerPilot(enemy)) continue;
    enemies.push({
      type: enemy.type,
      x: enemy.x,
      y: enemy.y,
      radius: enemy.radius,
      hp: enemy.hp,
      maxHp: enemy.maxHp,
      shield: enemy.shield || 0,
      maxShield: enemy.maxShield || 0,
      hitFlash: enemy.hitFlash || 0,
      slowed: Boolean(enemy.slowed),
      elite: Boolean(enemy.elite),
      empTimer: enemy.empTimer || 0,
      radiationTimer: enemy.radiationTimer || 0,
      hackTimer: enemy.hackTimer || 0,
      allyAuraRadius: enemy.allyAuraRadius || 0,
      supportBuffed: Boolean(enemy.supportBuffed),
      playerSlowRadius: enemy.playerSlowRadius || 0,
      explodesOnProximity: Boolean(enemy.explodesOnProximity),
      detonationRadius: enemy.detonationRadius || 0,
    });
    if (enemies.length >= MULTIPLAYER_SYNC_ENEMY_CAP) break;
  }

  const projectiles = [];
  for (const shot of state.projectiles) {
    if (!visibleToAnyMultiplayerPilot(shot, MULTIPLAYER_SYNC_RANGE + 180)) continue;
    projectiles.push({
      kind: shot.kind || "shot",
      x: shot.x,
      y: shot.y,
      radius: shot.radius || 4,
      color: shot.color || "#8af6ff",
      hostile: Boolean(shot.hostile),
      vx: shot.vx || 0,
      vy: shot.vy || 0,
      fadeAlpha: shot.fadeAlpha ?? 1,
    });
    if (projectiles.length >= MULTIPLAYER_SYNC_PROJECTILE_CAP) break;
  }

  return {
    phase: state.mode,
    time: state.time,
    voyageProgress: state.voyageProgress,
    kills: state.kills,
    gold: state.gold,
    statusText: statusText.textContent,
    currentRun: {
      goalTime: state.currentRun.goalTime,
      difficulty: state.currentRun.difficulty,
      voyageId: state.currentRun.voyageId,
      startingWeapon: state.currentRun.startingWeapon,
    },
    pilots,
    enemies,
    projectiles,
    asteroids: state.asteroids.filter(asteroid => visibleToAnyMultiplayerPilot(asteroid, MULTIPLAYER_SYNC_RANGE + 260)).map(asteroid => ({
      x: asteroid.x,
      y: asteroid.y,
      radius: asteroid.radius,
      rotation: asteroid.rotation || 0,
    })),
    gems: state.gems.filter(gem => visibleToAnyMultiplayerPilot(gem, MULTIPLAYER_SYNC_RANGE)).map(gem => ({
      x: gem.x,
      y: gem.y,
      radius: gem.radius,
      color: gem.color,
    })),
    crates: state.crates.filter(crate => visibleToAnyMultiplayerPilot(crate, MULTIPLAYER_SYNC_RANGE + 140)).map(crate => ({
      x: crate.x,
      y: crate.y,
      bob: crate.bob || 0,
      hue: crate.hue || 0,
      saturation: crate.saturation || 1,
      brightness: crate.brightness || 1,
    })),
    hazards: state.hazards.filter(hazard => visibleToAnyMultiplayerPilot(hazard, MULTIPLAYER_SYNC_RANGE + 180)).map(hazard => ({
      x: hazard.x,
      y: hazard.y,
      radius: hazard.radius || 0,
      life: hazard.life || 0,
      maxLife: hazard.maxLife || 1,
      kind: hazard.kind || "fragment",
    })),
    pulses: state.pulses.filter(pulse => visibleToAnyMultiplayerPilot(pulse, MULTIPLAYER_SYNC_RANGE + 180)).map(pulse => ({
      x: pulse.x,
      y: pulse.y,
      radius: pulse.radius || 0,
    })),
    orbitalStrikes: state.orbitalStrikes.filter(strike => visibleToAnyMultiplayerPilot(strike, MULTIPLAYER_SYNC_RANGE + 240)).map(strike => ({
      x: strike.x,
      y: strike.y,
      radius: strike.radius || 0,
      delay: strike.delay || 0,
      color: strike.color || "#8af6ff",
    })),
    voyageZones: state.voyageZones.filter(zone => visibleToAnyMultiplayerPilot(zone, MULTIPLAYER_SYNC_RANGE + 260)).map(zone => ({
      x: zone.x,
      y: zone.y,
      radius: zone.radius || 0,
      life: zone.life || 0,
      maxLife: zone.maxLife || 1,
      phase: zone.phase || 0,
      type: zone.type,
    })),
  };
}

function applyPilotSnapshot(target, snapshot) {
  if (!target || !snapshot) return;
  target.x = snapshot.x;
  target.y = snapshot.y;
  target.prevX = snapshot.x;
  target.prevY = snapshot.y;
  target.vx = snapshot.vx || 0;
  target.vy = snapshot.vy || 0;
  target.facing = snapshot.facing || 0;
  target.rotation = snapshot.rotation || 0;
  target.radius = snapshot.radius || 14;
  target.hp = snapshot.hp || 0;
  target.maxHp = snapshot.maxHp || 1;
  target.shield = snapshot.shield || 0;
  target.maxShield = snapshot.maxShield || 0;
  target.level = snapshot.level || 1;
  target.scrap = snapshot.scrap || 0;
  target.boostCharge = snapshot.boostCharge || 0;
  target.boostMax = snapshot.boostMax || BASE_BOOST_CAPACITY;
  target.thrusting = Boolean(snapshot.thrusting);
  target.boosting = Boolean(snapshot.boosting);
  target.dashTimer = snapshot.dashTimer || 0;
  target.enginePulse = snapshot.enginePulse || 0;
  target.engineOutput = snapshot.engineOutput || 0;
  target.primaryWeapon = snapshot.primaryWeapon || target.primaryWeapon || "emberBolt";
  if (!target.weapons) {
    target.weapons = {
      orbitBlades: { level: 0, angle: 0 },
      photonPhazer: { active: false, beamAlpha: 0, beamEndX: 0, beamEndY: 0 },
    };
  }
  if (!target.weapons[snapshot.primaryWeapon || target.primaryWeapon || "emberBolt"]) {
    target.weapons[snapshot.primaryWeapon || target.primaryWeapon || "emberBolt"] = { level: 0, cooldown: 0 };
  }
  if (snapshot.primaryWeapon) {
    target.weapons[snapshot.primaryWeapon].level = Math.max(
      target.weapons[snapshot.primaryWeapon].level || 0,
      snapshot.primaryWeaponLevel || 1
    );
  }
  target.weapons.orbitBlades = {
    ...(target.weapons.orbitBlades || {}),
    level: snapshot.orbitBladeLevel || 0,
    angle: snapshot.orbitBladeAngle || 0,
  };
  target.weapons.photonPhazer = {
    ...(target.weapons.photonPhazer || {}),
    level: snapshot.photonPhazerLevel || target.weapons.photonPhazer?.level || 0,
    active: Boolean(snapshot.phazerBeam?.active),
    beamAlpha: snapshot.phazerBeam?.beamAlpha || 0,
    beamEndX: snapshot.phazerBeam?.beamEndX || target.x,
    beamEndY: snapshot.phazerBeam?.beamEndY || target.y,
  };
}

function applyWorldSnapshot(snapshot) {
  if (!multiplayerRunClient() || !snapshot) return;
  state.time = snapshot.time || 0;
  state.voyageProgress = snapshot.voyageProgress || 0;
  state.kills = snapshot.kills || 0;
  state.gold = snapshot.gold || 0;
  if (snapshot.statusText) {
    statusText.textContent = snapshot.statusText;
  }
  if (snapshot.currentRun) {
    state.currentRun.goalTime = snapshot.currentRun.goalTime || state.currentRun.goalTime;
    state.currentRun.difficulty = snapshot.currentRun.difficulty || state.currentRun.difficulty;
    state.currentRun.voyageId = snapshot.currentRun.voyageId || state.currentRun.voyageId;
    state.currentRun.startingWeapon = snapshot.currentRun.startingWeapon || state.currentRun.startingWeapon;
  }
  const pilots = Array.isArray(snapshot.pilots) ? snapshot.pilots : [];
  const localPilot = pilots.find(pilot => pilot.id === state.multiplayer.playerId) || pilots[0];
  if (localPilot) {
    if (!state.player) {
      state.player = makePlayer();
    }
    applyPilotSnapshot(state.player, localPilot);
  }
  const remotes = {};
  pilots.filter(pilot => pilot.id !== state.multiplayer.playerId).forEach(pilot => {
    const entity = makeNetworkPilot(pilot.id, pilot.name);
    applyPilotSnapshot(entity, pilot);
    remotes[pilot.id] = entity;
  });
  multiplayerRuntime().remotePilots = remotes;
  state.enemies = (snapshot.enemies || []).map(enemy => ({ ...enemy }));
  state.projectiles = (snapshot.projectiles || []).map(shot => ({ ...shot }));
  state.asteroids = (snapshot.asteroids || []).map(entry => ({ ...entry }));
  state.gems = (snapshot.gems || []).map(entry => ({ ...entry }));
  state.crates = (snapshot.crates || []).map(entry => ({ ...entry }));
  state.hazards = (snapshot.hazards || []).map(entry => ({ ...entry }));
  state.pulses = (snapshot.pulses || []).map(entry => ({ ...entry }));
  state.orbitalStrikes = (snapshot.orbitalStrikes || []).map(entry => ({ ...entry }));
  state.voyageZones = (snapshot.voyageZones || []).map(entry => ({ ...entry }));
  if (voyageUpgradeMenuActive()) {
    renderVoyageUpgradesMenu();
  }
  syncHud();
}

function currentMultiplayerInput() {
  const move = getMoveVector();
  let aimX = Math.cos(state.player?.facing || 0);
  let aimY = Math.sin(state.player?.facing || 0);
  if (Math.hypot(state.gamepad.aimX, state.gamepad.aimY) > 0.1) {
    aimX = state.gamepad.aimX;
    aimY = state.gamepad.aimY;
  } else if (state.pointerActive && Math.hypot(state.pointerVector.x, state.pointerVector.y) > 0.08) {
    aimX = state.pointerVector.x;
    aimY = state.pointerVector.y;
  } else if (move.active) {
    aimX = move.x;
    aimY = move.y;
  }
  return {
    moveX: move.x,
    moveY: move.y,
    strength: move.strength,
    active: move.active,
    aimX,
    aimY,
    boost: Math.max(clamp(state.gamepad.boostAmount || 0, 0, 1), state.keys.has("shiftleft") ? 1 : 0),
    dash: Boolean(multiplayerRuntime().pendingDash),
  };
}

function sendMultiplayerClientEvent(payload) {
  if (!state.multiplayer.socket || state.multiplayer.socket.readyState !== 1) return;
  state.multiplayer.socket.send(JSON.stringify({
    type: "client_event",
    payload,
  }));
}

function tickMultiplayerClientInput(dt) {
  if (!multiplayerRunClient() || state.mode !== "playing") return;
  const runtime = multiplayerRuntime();
  runtime.inputClock += dt;
  if (runtime.inputClock < MULTIPLAYER_INPUT_INTERVAL) return;
  runtime.inputClock = 0;
  sendMultiplayerClientEvent({
    kind: "pilot_input",
    input: currentMultiplayerInput(),
  });
  runtime.pendingDash = false;
}

function updateRemotePilot(pilot, dt) {
  if (!pilot) return;
  const input = pilot.input || {};
  const currentSpeed = Math.hypot(pilot.vx, pilot.vy);
  const boostRequested = (input.boost || 0) > 0.12 && (input.active || currentSpeed > 28);
  pilot.boostCooldown = Math.max(0, pilot.boostCooldown - dt);
  pilot.boosting = boostRequested && pilot.boostCharge > 0.2 && pilot.dashTimer <= 0 && pilot.boostCooldown <= 0;
  const boostStrength = pilot.boosting ? Math.max(0.35, input.boost || 0) : 0;
  if (pilot.boosting) {
    pilot.boostCharge = Math.max(0, pilot.boostCharge - pilot.boostDrainRate * boostStrength * dt);
    if (pilot.boostCharge <= 0.05) {
      pilot.boostCharge = 0;
      pilot.boosting = false;
      pilot.boostCooldown = pilot.boostExhaustedCooldown;
    }
  } else if (pilot.boostCooldown <= 0) {
    pilot.boostCharge = Math.min(pilot.boostMax, pilot.boostCharge + pilot.boostRegenRate * dt);
  }
  const maxSpeed = pilot.speed * (1 + boostStrength * 0.78);
  const thrust = pilot.thrustPower * (1 + boostStrength * 1.08);
  const activeDrag = Math.exp(-dt * 4.4);
  const idleDrag = Math.exp(-dt * 14);
  pilot.thrusting = Boolean(input.active);
  pilot.prevX = pilot.x;
  pilot.prevY = pilot.y;
  pilot.dashCooldown = Math.max(0, pilot.dashCooldown - dt);
  pilot.dashTimer = Math.max(0, pilot.dashTimer - dt);
  if (pilot.dashTimer > 0) {
    pilot.invuln = Math.max(pilot.invuln || 0, pilot.dashTimer);
  }
  if (input.active) {
    pilot.vx += (input.moveX || 0) * thrust * (input.strength || 1) * dt;
    pilot.vy += (input.moveY || 0) * thrust * (input.strength || 1) * dt;
  }
  const drag = pilot.dashTimer > 0 ? 1 : input.active ? activeDrag : idleDrag;
  pilot.vx *= drag;
  pilot.vy *= drag;
  if (!input.active && Math.hypot(pilot.vx, pilot.vy) < 10) {
    pilot.vx = 0;
    pilot.vy = 0;
  }
  const speed = Math.hypot(pilot.vx, pilot.vy);
  if (speed > maxSpeed) {
    const scale = maxSpeed / speed;
    pilot.vx *= scale;
    pilot.vy *= scale;
  }
  if (input.dash && pilot.dashCooldown <= 0 && pilot.boostCharge >= pilot.dashStaminaCost) {
    const dashVelocity = 3920 * (pilot.dashDistanceMultiplier || 1);
    const aimX = input.aimX || (input.active ? input.moveX : Math.cos(pilot.facing));
    const aimY = input.aimY || (input.active ? input.moveY : Math.sin(pilot.facing));
    const aimLength = Math.hypot(aimX, aimY) || 1;
    pilot.vx = (aimX / aimLength) * dashVelocity;
    pilot.vy = (aimY / aimLength) * dashVelocity;
    pilot.boostCharge = Math.max(0, pilot.boostCharge - pilot.dashStaminaCost);
    pilot.dashCooldown = 1;
    pilot.dashTimer = 0.46;
  }
  pilot.x = clamp(pilot.x + pilot.vx * dt, pilot.radius, WORLD_W - pilot.radius);
  pilot.y = clamp(pilot.y + pilot.vy * dt, pilot.radius, WORLD_H - pilot.radius);
  if (Math.hypot(input.aimX || 0, input.aimY || 0) > 0.08) {
    pilot.facing = Math.atan2(input.aimY, input.aimX);
  } else if (speed > 18) {
    pilot.facing = Math.atan2(pilot.vy, pilot.vx);
  }
  pilot.rotation = pilot.facing + Math.PI / 2;
  const thrustVisual = Math.min(1, (input.active ? 0.28 : 0) + (pilot.boosting ? 0.72 : 0) + (pilot.dashTimer > 0 ? 0.82 : 0));
  pilot.engineOutput += (thrustVisual - pilot.engineOutput) * Math.min(1, dt * (thrustVisual > pilot.engineOutput ? 14 : 6));
  pilot.enginePulse += dt * (pilot.boosting ? 16 : 9) * (0.55 + pilot.engineOutput * 0.65);
  pilot.input.dash = false;
}

function fireRemoteEmberBolt(pilot) {
  if (!pilot?.weapons?.emberBolt || pilot.weapons.emberBolt.level <= 0) return;
  const target = nearestEnemyFrom(pilot, 900);
  if (!target) return;
  const angle = Math.atan2(target.y - pilot.y, target.x - pilot.x);
  const damage = (14 + pilot.weapons.emberBolt.level * 5)
    * (pilot.attackDamageMultiplier || 1)
    * (pilot.photonLanceDamageMultiplier || 1);
  state.projectiles.push({
    kind: "ember",
    x: pilot.x,
    y: pilot.y,
    radius: 6,
    vx: Math.cos(angle) * (440 + pilot.weapons.emberBolt.level * 18),
    vy: Math.sin(angle) * (440 + pilot.weapons.emberBolt.level * 18),
    life: 1.4 * ((pilot.rangeMultiplier || 1) + (pilot.passives?.weaponRange || 0) * 0.12),
    damage,
    baseDamage: damage,
    pierce: (pilot.weapons.emberBolt.level >= 4 ? 1 : 0) + (pilot.hubPierce || 0) + (pilot.passives?.piercingRounds || 0),
    pierceDamageMultiplier: 0.75,
    hitEnemies: new Set(),
    critChance: 0,
    color: "#ffc274",
    hostile: false,
    systemType: "normal",
  });
}

function fireRemotePlasmaCannon(pilot) {
  if (!pilot?.weapons?.plasmaCannon || pilot.weapons.plasmaCannon.level <= 0) return;
  const target = nearestEnemyFrom(pilot, 360);
  if (!target) return;
  const level = pilot.weapons.plasmaCannon.level;
  const angle = Math.atan2(target.y - pilot.y, target.x - pilot.x);
  const endRadius = Math.min(PLASMA_CANNON_MAX_END_RADIUS, (18 + level * 1.9) * 1.5);
  const startRadius = Math.max(7, endRadius * 0.34);
  const maxLife = 0.34 + level * 0.024;
  const maxDistance = Math.min(
    118 + level * 14,
    Math.max(78, PLASMA_CANNON_MAX_REACH - 34 - endRadius * 0.35)
  );
  const crestHeight = Math.min(PLASMA_CANNON_MAX_CREST_HEIGHT, (24 + level * 3.2) * 1.5);
  const waveFlip = pilot.weapons.plasmaCannon.waveFlip || 1;
  state.projectiles.push({
    kind: "plasma",
    x: pilot.x + Math.cos(angle) * 34,
    y: pilot.y + Math.sin(angle) * 34,
    radius: startRadius,
    vx: Math.cos(angle),
    vy: Math.sin(angle),
    life: maxLife,
    maxLife,
    age: 0,
    damage: (7 + level * 3.2) * (pilot.attackDamageMultiplier || 1) * (pilot.plasmaCannonDamageMultiplier || 1),
    baseDamage: (7 + level * 3.2) * (pilot.attackDamageMultiplier || 1) * (pilot.plasmaCannonDamageMultiplier || 1),
    pierce: 999 + (pilot.hubPierce || 0) + (pilot.passives?.piercingRounds || 0),
    pierceDamageMultiplier: 1,
    hitEnemies: new Set(),
    critChance: 0,
    color: "#74f3ff",
    hostile: false,
    systemType: "normal",
    originX: pilot.x + Math.cos(angle) * 34,
    originY: pilot.y + Math.sin(angle) * 34,
    forwardX: Math.cos(angle),
    forwardY: Math.sin(angle),
    sideX: Math.cos(angle + Math.PI / 2),
    sideY: Math.sin(angle + Math.PI / 2),
    lateralOffset: 0,
    arcDirection: waveFlip,
    crestHeight,
    maxDistance,
    startRadius,
    endRadius,
    inheritedVx: pilot.vx,
    inheritedVy: pilot.vy,
    progress: 0,
    fadeAlpha: 0,
  });
  pilot.weapons.plasmaCannon.waveFlip = -waveFlip;
}

function updateRemotePilotWeapons(dt) {
  if (!multiplayerRunHost()) return;
  for (const pilot of Object.values(multiplayerRuntime().remotePilots)) {
    if (!pilot || (pilot.disabledTimer || 0) > 0) continue;
    const primaryId = pilot.primaryWeapon || "emberBolt";
    const primary = pilot.weapons?.[primaryId];
    if (!primary || primary.level <= 0) continue;
    primary.cooldown = (primary.cooldown || 0) - dt;
    const primaryRate = primaryId === "plasmaCannon"
      ? Math.max(0.22, (0.92 - primary.level * 0.07) / (pilot.attackSpeedMultiplier || 1))
      : Math.max(0.14, (0.72 - primary.level * 0.06) / ((pilot.attackSpeedMultiplier || 1) * (pilot.photonLanceCycleMultiplier || 1)));
    if (primary.cooldown <= 0) {
      if (primaryId === "plasmaCannon") {
        fireRemotePlasmaCannon(pilot);
      } else {
        fireRemoteEmberBolt(pilot);
      }
      primary.cooldown = primaryRate;
    }
  }
}

function updateRemotePilots(dt) {
  if (!multiplayerRunHost()) return;
  ensureMultiplayerRemotePilots();
  for (const pilot of Object.values(multiplayerRuntime().remotePilots)) {
    updateRemotePilot(pilot, dt);
  }
  updateRemotePilotWeapons(dt);
}

function sendMultiplayerSnapshot(dt) {
  if (!multiplayerRunHost() || state.mode !== "playing") return;
  const runtime = multiplayerRuntime();
  runtime.snapshotClock += dt;
  if (runtime.snapshotClock < MULTIPLAYER_SNAPSHOT_INTERVAL) return;
  runtime.snapshotClock = 0;
  sendMultiplayerClientEvent({
    kind: "run_snapshot",
    snapshot: snapshotWorldState(),
  });
}

function rebuildRemotePilotFromProfile(id, metaProfile) {
  const runtime = multiplayerRuntime();
  const existing = runtime.remotePilots[id];
  const rosterIndex = currentTeamVoyagePlayerRoster().findIndex(player => player.id === id);
  const rosterEntry = currentTeamVoyagePlayerRoster().find(player => player.id === id);
  const rebuilt = makeNetworkPilot(id, rosterEntry?.name || existing?.name || "Pilot", Math.max(0, rosterIndex) + 1, metaProfile);
  if (!existing) return rebuilt;
  rebuilt.x = existing.x;
  rebuilt.y = existing.y;
  rebuilt.prevX = existing.prevX;
  rebuilt.prevY = existing.prevY;
  rebuilt.vx = existing.vx;
  rebuilt.vy = existing.vy;
  rebuilt.facing = existing.facing;
  rebuilt.rotation = existing.rotation;
  rebuilt.input = existing.input || rebuilt.input;
  rebuilt.boostCharge = existing.boostCharge;
  rebuilt.dashCooldown = existing.dashCooldown;
  rebuilt.dashTimer = existing.dashTimer;
  rebuilt.enginePulse = existing.enginePulse;
  rebuilt.engineOutput = existing.engineOutput;
  rebuilt.thrusting = existing.thrusting;
  rebuilt.boosting = existing.boosting;
  return rebuilt;
}

function handleMultiplayerClientEvent(from, payload) {
  if (!payload?.kind) return;
  if (payload.kind === "profile_sync" && multiplayerRunHost()) {
    const profileMeta = normalizeMetaProgression(payload.profile?.meta || payload.meta || payload.profile);
    state.multiplayer.playerProfiles[from] = profileMeta;
    if (multiplayerRuntime().remotePilots[from]) {
      multiplayerRuntime().remotePilots[from] = rebuildRemotePilotFromProfile(from, profileMeta);
    }
    return;
  }
  if (payload.kind === "pilot_input" && multiplayerRunHost()) {
    ensureMultiplayerRemotePilots();
    const pilot = multiplayerRuntime().remotePilots[from];
    if (pilot) {
      pilot.input = {
        ...pilot.input,
        ...(payload.input || {}),
      };
    }
    return;
  }
  if (payload.kind === "purchase_upgrade" && multiplayerRunHost()) {
    const pilot = multiplayerRuntime().remotePilots[from];
    if (!pilot || !payload.upgradeId) return;
    const choice = availableUpgrades(pilot).find(entry => entry.id === payload.upgradeId);
    const purchase = applyVoyageUpgradeChoice(choice, pilot);
    if (!purchase) return;
    if (choice.type === "weapon" && purchase.previousLevel <= 0) {
      if (choice.id === "orbitBlades") {
        floatingText(pilot.x, pilot.y - 52, "Drone Halo Online", "#8af6ff", 0.7);
      } else if (choice.id === "photonPhazer") {
        floatingText(pilot.x, pilot.y - 52, "Photon Phazer Online", "#8af6ff", 0.7);
      } else {
        floatingText(pilot.x, pilot.y - 52, `${choice.title} Online`, "#8af6ff", 0.7);
      }
    } else {
      floatingText(pilot.x, pilot.y - 52, purchase.purchaseToast, "#8af6ff", 0.66);
    }
    return;
  }
  if (payload.kind === "run_snapshot" && multiplayerRunClient()) {
    applyWorldSnapshot(payload.snapshot);
    return;
  }
  if (payload.kind === "run_complete" && multiplayerRunClient()) {
    const summary = payload.summary || {};
    const stats = payload.stats || {};
    state.time = Number(stats.time || state.time || 0);
    state.gold = Number(stats.gold || 0);
    state.kills = Number(stats.kills || 0);
    state.runStats = {
      ...freshRunStats(),
      ...state.runStats,
      damageDealt: Number(stats.damageDealt || 0),
      damageTaken: Number(stats.damageTaken || 0),
      scrapRecovered: Number(stats.scrapRecovered || 0),
      bonusAugmentsAwarded: Number(stats.bonusAugmentsAwarded || 0),
      crudeCachesAwarded: Number(stats.crudeCachesAwarded || 0),
      ardonisCachesAwarded: Number(stats.ardonisCachesAwarded || 0),
    };
    state.pendingHangarMessage = summary.pendingHangarMessage || "Team Voyage complete. Returning to hangar.";
    closeTeamVoyageSocket("", true);
    showRunSummary({
      title: summary.title || "Team Voyage Complete",
      body: summary.body || "The synchronized voyage has ended.",
      personalBest: false,
    });
  }
}

function launchTeamVoyageRun(room) {
  if (multiplayerRunActive()) return;
  applyTeamVoyageRoomSettingsToRun(room);
  const runtime = multiplayerRuntime();
  runtime.active = true;
  runtime.mode = teamVoyageIsHost() ? "host" : "client";
  runtime.inputClock = 0;
  runtime.snapshotClock = 0;
  runtime.pendingDash = false;
  runtime.remotePilots = {};
  showHangar("Team Voyage link locked. Preparing synchronized launch.");
  beginLaunchSequence();
}

function updateTeamVoyageBackLabel() {
  if (!teamVoyageBack) return;
  teamVoyageBack.textContent = teamVoyageConnected() ? "Leave Lobby" : "Back";
}

function renderTeamVoyagePlayers() {
  if (!teamVoyagePlayerList) return;
  const players = Array.isArray(state.multiplayer.players) ? state.multiplayer.players : [];
  if (!players.length) {
    teamVoyagePlayerList.innerHTML = `<p class="team-voyage-player-empty">No pilots linked yet.</p>`;
    return;
  }
  teamVoyagePlayerList.innerHTML = players.map(player => `
    <div class="team-voyage-player-entry">
      <strong>${player.name || "Pilot"}</strong>
      <span class="team-voyage-player-role ${player.isHost ? "host" : "guest"}">${player.isHost ? "Host" : "Wing"}</span>
    </div>
  `).join("");
}

function renderTeamVoyageLobby() {
  const connected = teamVoyageConnected();
  if (teamVoyageLobby) {
    teamVoyageLobby.classList.toggle("hidden", !connected);
  }
  if (teamVoyageRoomCode) {
    teamVoyageRoomCode.textContent = connected ? state.multiplayer.roomCode : "----";
  }
  const lobbySettings = currentTeamVoyageSettings();
  if (teamVoyageTimeReadout) {
    teamVoyageTimeReadout.textContent = formatTime(lobbySettings.timerMinutes * 60);
  }
  if (teamVoyageDifficultyReadout) {
    teamVoyageDifficultyReadout.textContent = difficultyLabels[lobbySettings.difficulty - 1] || "Normal";
  }
  if (teamVoyageRouteAsteroid) {
    teamVoyageRouteAsteroid.classList.toggle("selected", lobbySettings.route === "asteroidBelt");
  }
  if (teamVoyageRouteVentari) {
    teamVoyageRouteVentari.classList.toggle("selected", lobbySettings.route === "ventariSystem");
  }
  const host = teamVoyageIsHost();
  const lockedVentari = !ventariSystemUnlocked();
  if (teamVoyageRouteAsteroid) {
    teamVoyageRouteAsteroid.disabled = !host;
    teamVoyageRouteAsteroid.dataset.instantConfirm = "true";
  }
  if (teamVoyageRouteVentari) {
    teamVoyageRouteVentari.disabled = !host || lockedVentari;
    teamVoyageRouteVentari.dataset.instantConfirm = "true";
  }
  [teamVoyageTimeDown, teamVoyageTimeUp, teamVoyageDifficultyDown, teamVoyageDifficultyUp].forEach(button => {
    if (button) {
      button.disabled = !host;
      button.dataset.instantConfirm = "true";
    }
  });
  if (teamVoyageStart) {
    teamVoyageStart.disabled = !host || !connected || state.multiplayer.started;
  }
  if (teamVoyageCopyCode) {
    teamVoyageCopyCode.disabled = !connected;
    teamVoyageCopyCode.dataset.instantConfirm = "true";
  }
  if (teamVoyageRefresh) {
    teamVoyageRefresh.disabled = !connected;
    teamVoyageRefresh.dataset.instantConfirm = "true";
  }
  if (teamVoyageLeave) {
    teamVoyageLeave.disabled = !connected;
    teamVoyageLeave.dataset.instantConfirm = "true";
  }
  if (teamVoyageLobbyNote) {
    teamVoyageLobbyNote.textContent = state.multiplayer.started
      ? "The room is live. Host snapshots now drive the synchronized flight while the session stays active."
      : host
        ? "You are the host. Route, time, and threat changes will sync to every pilot in the room."
        : "Host controls are locked on your side. You will receive route, time, and threat updates from the host.";
  }
  if (teamVoyageHost) {
    teamVoyageHost.disabled = state.multiplayer.connecting || connected;
    teamVoyageHost.dataset.instantConfirm = "true";
  }
  if (teamVoyageJoin) {
    teamVoyageJoin.disabled = state.multiplayer.connecting || connected;
    teamVoyageJoin.dataset.instantConfirm = "true";
  }
  renderTeamVoyagePlayers();
  updateTeamVoyageBackLabel();
}

function updateTeamVoyageStateFromRoom(room) {
  if (!room) return;
  state.multiplayer.roomCode = String(room.code || state.multiplayer.roomCode || "").toUpperCase();
  state.multiplayer.hostId = room.hostId || null;
  state.multiplayer.players = Array.isArray(room.players) ? room.players : [];
  state.multiplayer.started = Boolean(room.started);
  state.multiplayer.lobbySettings = {
    route: room.settings?.route === "ventariSystem" ? "ventariSystem" : "asteroidBelt",
    difficulty: clamp(Math.round(room.settings?.difficulty || 1), 1, 5),
    timerMinutes: clamp(Math.round(room.settings?.timerMinutes || 5), 5, BASE_RUN_TIME / 60 + MAX_EXTRA_RUN_STEPS * 5),
    startingWeapon: weaponDefs[room.settings?.startingWeapon]?.slot === "primary"
      ? room.settings.startingWeapon
      : (state.multiplayer.lobbySettings?.startingWeapon || state.runConfig.startingWeapon || "emberBolt"),
  };
  if (multiplayerRunHost()) {
    ensureMultiplayerRemotePilots();
  }
  renderTeamVoyageLobby();
}

async function fetchTeamVoyageJson(path, options = {}) {
  const serverUrl = normalizeServerUrl(state.multiplayer.serverUrl);
  if (!serverUrl) {
    throw new Error("Enter your Render server URL first.");
  }
  const response = await fetch(multiplayerHttpUrl(serverUrl, path), {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload?.error || `Request failed (${response.status}).`);
  }
  return payload;
}

function closeTeamVoyageSocket(message = "", preserveStatus = false) {
  const socket = state.multiplayer.socket;
  state.multiplayer.manualClose = true;
  if (socket) {
    try {
      socket.close();
    } catch {}
  }
  state.multiplayer.socket = null;
  state.multiplayer.connected = false;
  state.multiplayer.connecting = false;
  state.multiplayer.playerId = null;
  state.multiplayer.hostId = null;
  state.multiplayer.players = [];
  state.multiplayer.playerProfiles = {};
  state.multiplayer.roomCode = "";
  state.multiplayer.started = false;
  if (multiplayerRunActive()) {
    clearMultiplayerRuntime();
  }
  renderTeamVoyageLobby();
  if (message && !preserveStatus) {
    setTeamVoyageStatus(message);
  }
}

function connectTeamVoyageSocket(roomCode) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(multiplayerWsUrl(state.multiplayer.serverUrl, roomCode, state.multiplayer.playerName));
    let resolved = false;
    state.multiplayer.socket = socket;
    socket.addEventListener("open", () => {
      state.multiplayer.connecting = false;
      setTeamVoyageStatus(`Room ${String(roomCode).toUpperCase()} link established.`);
    });
    socket.addEventListener("message", event => {
      let message;
      try {
        message = JSON.parse(event.data);
      } catch {
        return;
      }
      if (message.type === "welcome") {
        state.multiplayer.connected = true;
        state.multiplayer.playerId = message.playerId || null;
        updateTeamVoyageStateFromRoom(message.room);
        sendMultiplayerClientEvent({
          kind: "profile_sync",
          profile: currentMultiplayerProfilePayload(),
        });
        renderTeamVoyageLobby();
        if (!resolved) {
          resolved = true;
          resolve(message.room);
        }
        if (message.room?.started && !multiplayerRunActive()) {
          setTeamVoyageStatus("Live room detected. Linking synchronized voyage.");
          launchTeamVoyageRun(message.room);
        }
        return;
      }
      if (message.type === "room_update") {
        updateTeamVoyageStateFromRoom(message.room);
        setTeamVoyageStatus(`Room ${state.multiplayer.roomCode} synced. ${state.multiplayer.players.length} pilot${state.multiplayer.players.length === 1 ? "" : "s"} linked.`);
        return;
      }
      if (message.type === "client_event") {
        handleMultiplayerClientEvent(message.from, message.payload);
        return;
      }
      if (message.type === "game_started") {
        updateTeamVoyageStateFromRoom(message.room);
        setTeamVoyageStatus("Synchronized launch initiated.");
        launchTeamVoyageRun(message.room);
        return;
      }
      if (message.type === "error") {
        setTeamVoyageStatus(message.message || "Multiplayer server error.");
        if (!resolved) {
          resolved = true;
          reject(new Error(message.message || "Multiplayer server error."));
        }
      }
    });
    socket.addEventListener("close", () => {
      const intentional = state.multiplayer.manualClose;
      state.multiplayer.manualClose = false;
      const runtimeWasActive = multiplayerRunActive();
      state.multiplayer.socket = null;
      state.multiplayer.connected = false;
      state.multiplayer.connecting = false;
      state.multiplayer.playerId = null;
      state.multiplayer.hostId = null;
      state.multiplayer.players = [];
      state.multiplayer.playerProfiles = {};
      state.multiplayer.started = false;
      if (runtimeWasActive) {
        clearMultiplayerRuntime();
      }
      renderTeamVoyageLobby();
      if (!intentional) {
        setTeamVoyageStatus("Lobby link closed.");
      }
      if (!resolved) {
        resolved = true;
        reject(new Error("Lobby link closed before the connection finished."));
      }
    });
    socket.addEventListener("error", () => {
      if (!resolved) {
        resolved = true;
        reject(new Error("Could not reach the multiplayer server."));
      }
    });
  });
}

async function hostTeamVoyage() {
  if (state.multiplayer.connecting || teamVoyageConnected()) return;
  state.multiplayer.serverUrl = normalizeServerUrl(teamVoyageServerUrl?.value || state.multiplayer.serverUrl);
  state.multiplayer.playerName = String(teamVoyagePlayerName?.value || state.multiplayer.playerName || "Pilot").trim().slice(0, 24) || "Pilot";
  persistTeamVoyagePreferences();
  renderTeamVoyageLobby();
  state.multiplayer.connecting = true;
  setTeamVoyageStatus("Creating lobby...");
  try {
    const room = await fetchTeamVoyageJson("/api/rooms", {
      method: "POST",
      body: JSON.stringify({ settings: currentTeamVoyageSettings() }),
    });
    state.multiplayer.joinCode = room.code || "";
    if (teamVoyageRoomInput) {
      teamVoyageRoomInput.value = room.code || "";
    }
    await connectTeamVoyageSocket(room.code);
    setTeamVoyageStatus(`Room ${room.code} ready. Share the code with your wing pilot.`);
  } catch (error) {
    state.multiplayer.connecting = false;
    setTeamVoyageStatus(error.message || "Could not create the room.");
    renderTeamVoyageLobby();
  }
}

async function joinTeamVoyage() {
  if (state.multiplayer.connecting || teamVoyageConnected()) return;
  state.multiplayer.serverUrl = normalizeServerUrl(teamVoyageServerUrl?.value || state.multiplayer.serverUrl);
  state.multiplayer.playerName = String(teamVoyagePlayerName?.value || state.multiplayer.playerName || "Pilot").trim().slice(0, 24) || "Pilot";
  state.multiplayer.joinCode = String(teamVoyageRoomInput?.value || state.multiplayer.joinCode || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
  syncTeamVoyageFormState();
  persistTeamVoyagePreferences();
  if (!state.multiplayer.joinCode) {
    setTeamVoyageStatus("Enter a room code before joining.");
    return;
  }
  state.multiplayer.connecting = true;
  setTeamVoyageStatus(`Joining room ${state.multiplayer.joinCode}...`);
  renderTeamVoyageLobby();
  try {
    await fetchTeamVoyageJson(`/api/rooms/${state.multiplayer.joinCode}/join`, { method: "POST" });
    await connectTeamVoyageSocket(state.multiplayer.joinCode);
    setTeamVoyageStatus(`Joined room ${state.multiplayer.joinCode}. Awaiting host instructions.`);
  } catch (error) {
    state.multiplayer.connecting = false;
    setTeamVoyageStatus(error.message || "Could not join that room.");
    renderTeamVoyageLobby();
  }
}

async function refreshTeamVoyageLobby() {
  if (!teamVoyageConnected()) return;
  try {
    const room = await fetchTeamVoyageJson(`/api/rooms/${state.multiplayer.roomCode}`);
    updateTeamVoyageStateFromRoom(room);
    setTeamVoyageStatus(`Room ${state.multiplayer.roomCode} refreshed.`);
  } catch (error) {
    setTeamVoyageStatus(error.message || "Could not refresh the lobby.");
  }
}

function leaveTeamVoyageLobby(message = "Lobby link closed.") {
  closeTeamVoyageSocket(message);
  state.multiplayer.lobbySettings = {
    route: state.runConfig.voyageId || "asteroidBelt",
    difficulty: clamp(Math.round(state.runConfig.difficulty || 1), 1, 5),
    timerMinutes: Math.max(5, Math.round(getRunGoalTime() / 60)),
    startingWeapon: state.runConfig.startingWeapon || "emberBolt",
  };
  renderTeamVoyageLobby();
}

function sendTeamVoyageSettings() {
  if (!teamVoyageConnected() || !teamVoyageIsHost() || !state.multiplayer.socket) return;
  state.multiplayer.socket.send(JSON.stringify({
    type: "update_settings",
    settings: currentTeamVoyageSettings(),
  }));
}

function setTeamVoyageRoute(route) {
  if (!teamVoyageIsHost()) return;
  if (route === "ventariSystem" && !ventariSystemUnlocked()) {
    setTeamVoyageStatus(`Ventari System locked. ${ventariUnlockRequirementText()}`);
    return;
  }
  state.multiplayer.lobbySettings.route = route === "ventariSystem" ? "ventariSystem" : "asteroidBelt";
  renderTeamVoyageLobby();
  sendTeamVoyageSettings();
}

function adjustTeamVoyageMinutes(delta) {
  if (!teamVoyageIsHost()) return;
  const settings = currentTeamVoyageSettings();
  state.multiplayer.lobbySettings.timerMinutes = clamp(settings.timerMinutes + delta * 5, 5, BASE_RUN_TIME / 60 + MAX_EXTRA_RUN_STEPS * 5);
  renderTeamVoyageLobby();
  sendTeamVoyageSettings();
}

function adjustTeamVoyageDifficulty(delta) {
  if (!teamVoyageIsHost()) return;
  const settings = currentTeamVoyageSettings();
  state.multiplayer.lobbySettings.difficulty = clamp(settings.difficulty + delta, 1, 5);
  renderTeamVoyageLobby();
  sendTeamVoyageSettings();
}

function startTeamVoyageLobby() {
  if (!teamVoyageConnected() || !teamVoyageIsHost() || !state.multiplayer.socket) return;
  state.multiplayer.socket.send(JSON.stringify({ type: "start_game" }));
  setTeamVoyageStatus("Start signal sent. Syncing the room into live flight.");
}

async function copyTeamVoyageCode() {
  if (!teamVoyageConnected() || !state.multiplayer.roomCode) return;
  try {
    await navigator.clipboard.writeText(state.multiplayer.roomCode);
    setTeamVoyageStatus(`Room code ${state.multiplayer.roomCode} copied.`);
  } catch {
    setTeamVoyageStatus(`Room code: ${state.multiplayer.roomCode}`);
  }
}

function handleTeamVoyageBack() {
  if (teamVoyageConnected()) {
    leaveTeamVoyageLobby("Lobby link closed.");
    syncTeamVoyageFormState();
    state.gamepad.menuIndex = 0;
    syncGamepadFocus();
    return true;
  }
  closeTeamVoyageMenu();
  return true;
}

function showMainMenu(message = "Select a command to continue.") {
  if (!teamVoyageConnected() && !multiplayerRunActive()) {
    switchMetaProfile("solo");
  }
  setMainMenuStatus(message);
  setTeamVoyageStatus("Enter your Render server URL, then host a room or join one by code.");
  clearMenuConfirmHold();
  mainMenuScreen?.classList.remove("hidden");
  mainMenuSettingsMenu?.classList.add("hidden");
  teamVoyageMenu?.classList.add("hidden");
  hangarScreen.classList.add("hidden");
  shell.classList.add("scene-hidden");
  overlay.classList.add("hidden");
  runSummary.classList.add("hidden");
  hangarSettingsMenu.classList.add("hidden");
  hangarUpgradesMenu.classList.add("hidden");
  hangarAugmentsMenu.classList.add("hidden");
  hangarHostilesMenu.classList.add("hidden");
  hangarRecordsMenu.classList.add("hidden");
  if (modMenu) modMenu.classList.add("hidden");
  if (voyageUpgradesMenu) voyageUpgradesMenu.classList.add("hidden");
  sceneTransition.classList.add("hidden");
  sceneTransition.classList.remove("closing");
  sceneTransition.classList.remove("opening");
  state.sceneTransitionActive = false;
  state.mode = "mainmenu";
  unlockAudio();
  switchMusicMode("hub");
  state.gamepad.menuIndex = 0;
  syncGamepadFocus();
}

function openMainMenuSettingsMenu() {
  if (state.mode !== "mainmenu") return;
  keepHubAmbienceAlive();
  teamVoyageMenu?.classList.add("hidden");
  mainMenuSettingsMenu?.classList.remove("hidden");
  state.gamepad.menuIndex = 0;
  syncGamepadFocus();
}

function closeMainMenuSettingsMenu() {
  keepHubAmbienceAlive();
  mainMenuSettingsMenu?.classList.add("hidden");
  state.gamepad.menuIndex = 0;
  syncGamepadFocus();
}

function openTeamVoyageMenu() {
  if (state.mode !== "mainmenu") return;
  switchMetaProfile("coop");
  keepHubAmbienceAlive();
  mainMenuSettingsMenu?.classList.add("hidden");
  teamVoyageMenu?.classList.remove("hidden");
  syncTeamVoyageFormState();
  renderTeamVoyageLobby();
  state.gamepad.menuIndex = 0;
  syncGamepadFocus();
}

function closeTeamVoyageMenu() {
  keepHubAmbienceAlive();
  teamVoyageMenu?.classList.add("hidden");
  renderTeamVoyageLobby();
  if (!teamVoyageConnected() && !multiplayerRunActive()) {
    switchMetaProfile("solo");
  }
  state.gamepad.menuIndex = 0;
  syncGamepadFocus();
}

function notifyMainMenuLocked(feature, detail) {
  setMainMenuStatus(`${feature} locked. ${detail}`);
}

function showHangar(message = "Begin your voyage when ready.", options = {}) {
  const preserveTransition = Boolean(options.preserveTransition);
  hangarStatus.textContent = message;
  mainMenuScreen?.classList.add("hidden");
  mainMenuSettingsMenu?.classList.add("hidden");
  teamVoyageMenu?.classList.add("hidden");
  hangarScreen.classList.remove("hidden");
  shell.classList.add("scene-hidden");
  hangarScreen.classList.remove("launching");
  hangarWindow.classList.remove("launching");
  hangarSettingsMenu.classList.add("hidden");
  hangarUpgradesMenu.classList.add("hidden");
  hangarAugmentsMenu.classList.add("hidden");
  hangarHostilesMenu.classList.add("hidden");
  overlay.classList.add("hidden");
  runSummary.classList.add("hidden");
  if (modMenu) modMenu.classList.add("hidden");
  if (voyageUpgradesMenu) voyageUpgradesMenu.classList.add("hidden");
  if (!preserveTransition) {
    sceneTransition.classList.add("hidden");
    sceneTransition.classList.remove("closing");
    sceneTransition.classList.remove("opening");
    state.sceneTransitionActive = false;
  }
  state.mode = "menu";
  state.pendingHangarMessage = message;
  unlockAudio();
  switchMusicMode("hub");
  state.gamepad.menuIndex = 0;
  syncHangarRunConfig();
  renderMetaUpgrades();
  syncHud();
  syncGamepadFocus();
}

function beginLaunchSequence() {
  if (state.mode !== "menu") return;
  playSceneDoorTransition(() => {
    launchRun();
  });
}

function openHangarUpgradesMenu() {
  if (state.mode !== "menu") return;
  keepHubAmbienceAlive();
  hangarSettingsMenu.classList.add("hidden");
  hangarRecordsMenu.classList.add("hidden");
  hangarAugmentsMenu.classList.add("hidden");
  hangarHostilesMenu.classList.add("hidden");
  hangarUpgradesMenu.classList.remove("hidden");
  state.gamepad.menuIndex = 0;
  syncGamepadFocus();
}

function openHangarRecordsMenu() {
  if (state.mode !== "menu") return;
  keepHubAmbienceAlive();
  hangarSettingsMenu.classList.add("hidden");
  hangarAugmentsMenu.classList.add("hidden");
  hangarUpgradesMenu.classList.add("hidden");
  hangarHostilesMenu.classList.add("hidden");
  hangarRecordsMenu.classList.remove("hidden");
  state.gamepad.menuIndex = 0;
  syncGamepadFocus();
}

function openHangarAugmentsMenu() {
  if (state.mode !== "menu") return;
  keepHubAmbienceAlive();
  hangarSettingsMenu.classList.add("hidden");
  hangarRecordsMenu.classList.add("hidden");
  hangarUpgradesMenu.classList.add("hidden");
  hangarHostilesMenu.classList.add("hidden");
  hangarAugmentsMenu.classList.remove("hidden");
  state.gamepad.menuIndex = 0;
  renderAugmentBay();
  syncGamepadFocus();
}

function openHangarHostilesMenu() {
  if (state.mode !== "menu") return;
  keepHubAmbienceAlive();
  hangarSettingsMenu.classList.add("hidden");
  hangarRecordsMenu.classList.add("hidden");
  hangarUpgradesMenu.classList.add("hidden");
  hangarAugmentsMenu.classList.add("hidden");
  hangarHostilesMenu.classList.remove("hidden");
  if (hangarHostilesCard) {
    hangarHostilesCard.scrollTop = 0;
  }
  state.gamepad.menuIndex = 0;
  renderHostileDataMenu();
  syncGamepadFocus();
}

function openHangarSettingsMenu() {
  if (state.mode !== "menu") return;
  keepHubAmbienceAlive();
  hangarAugmentsMenu.classList.add("hidden");
  hangarRecordsMenu.classList.add("hidden");
  hangarUpgradesMenu.classList.add("hidden");
  hangarHostilesMenu.classList.add("hidden");
  hangarSettingsMenu.classList.remove("hidden");
  state.gamepad.menuIndex = 0;
  syncGamepadFocus();
}

function closeHangarAugmentsMenu() {
  keepHubAmbienceAlive();
  hangarAugmentsMenu.classList.add("hidden");
  state.gamepad.menuIndex = 0;
  syncGamepadFocus();
}

function closeHangarRecordsMenu() {
  keepHubAmbienceAlive();
  hangarRecordsMenu.classList.add("hidden");
  state.gamepad.menuIndex = 0;
  syncGamepadFocus();
}

function closeHangarHostilesMenu() {
  keepHubAmbienceAlive();
  hangarHostilesMenu.classList.add("hidden");
  state.gamepad.menuIndex = 0;
  syncGamepadFocus();
}

function closeHangarSettingsMenu() {
  keepHubAmbienceAlive();
  hangarSettingsMenu.classList.add("hidden");
  state.gamepad.menuIndex = 0;
  syncGamepadFocus();
}

function returnToMainMenuFromHangar() {
  closeHangarSettingsMenu();
  showMainMenu("Returned to main menu.");
}

function resetProgress() {
  const confirmed = window.confirm(
    "Reset all Ardonis Credits, upgrades, augments, caches, and lifetime stats? This cannot be undone."
  );
  if (!confirmed) return;

  state.meta = defaultMetaProgression();
  saveMetaProgression();
  renderMetaUpgrades();
  statusText.textContent = "All hangar progression reset.";
  hangarStatus.textContent = "Progress reset. A fresh hull awaits your next voyage.";
  state.pendingHangarMessage = "Progress reset. A fresh hull awaits your next voyage.";
  syncHud();
  syncHangarRunConfig();
  syncGamepadFocus();
}

function closeHangarUpgradesMenu() {
  keepHubAmbienceAlive();
  hangarUpgradesMenu.classList.add("hidden");
  state.gamepad.menuIndex = 0;
  syncGamepadFocus();
}

function renderVoyageUpgradesMenu() {
  if (!voyageUpgradeGrid || !state.player) return;
  const player = state.player;
  const upgrades = availableUpgrades();
  voyageUpgradeGrid.innerHTML = "";

  if (voyageUpgradeBank) {
    voyageUpgradeBank.textContent = `Scrap: ${Math.floor(player.scrap || 0)}`;
  }
  if (voyageUpgradeVersion) {
    voyageUpgradeVersion.textContent = `Ship Version: ${formatVersionLabel(player.level)}`;
  }

  for (const choice of upgrades) {
    const currentLevel = voyageUpgradeLevel(choice, player);
    const alreadyUnlocked = voyageWeaponChoiceUnlocked(choice, player);
    const hubLocked = voyageUpgradeHubLocked(choice);
    const cost = alreadyUnlocked || hubLocked ? 0 : voyageUpgradeCost(choice, player);
    const affordable = !alreadyUnlocked && !hubLocked && (player.scrap || 0) >= cost;
    const card = document.createElement("div");
    card.className = `meta-upgrade voyage-upgrade${alreadyUnlocked ? " unlocked" : ""}${hubLocked ? " locked" : ""}`;
    card.innerHTML = `
      <div class="meta-upgrade-top">
        <div class="meta-upgrade-icon" style="--upgrade-accent:${upgradeVisualFor(choice.id).accent};"></div>
        <div class="meta-upgrade-copy">
          <div class="meta-upgrade-head">
            <div>
              <span class="voyage-upgrade-badge ${voyageUpgradeStatusClass(choice)}">${voyageUpgradeStatusLabel(choice)}</span>
              <h3>${choice.title}</h3>
            </div>
            <strong>${voyageUpgradeTierLabel(choice, player)}</strong>
          </div>
          <p>${voyageUpgradeCardSummary(choice)}</p>
        </div>
      </div>
      <button type="button" class="voyage-upgrade-purchase${alreadyUnlocked ? " is-unlocked" : ""}" data-voyage-upgrade-id="${choice.id}" ${affordable ? "" : "disabled"}>${voyageUpgradePurchaseLabel(choice, affordable, cost, player)}</button>
    `;
    populateUpgradeArt(card.querySelector(".meta-upgrade-icon"), choice.id, choice.title, "meta-upgrade-icon-image");
    const button = card.querySelector("button");
    button.dataset.instantConfirm = "true";
    button.addEventListener("click", () => purchaseVoyageUpgrade(choice));
    voyageUpgradeGrid.appendChild(card);
  }
}

function applyVoyageUpgradeChoice(choice, player) {
  if (!choice || !player) return null;
  if (voyageUpgradeHubLocked(choice)) return null;
  if (voyageWeaponChoiceUnlocked(choice, player)) return null;
  const previousLevel = voyageUpgradeLevel(choice, player);
  const cost = voyageUpgradeCost(choice, player);
  if ((player.scrap || 0) < cost) return null;

  player.scrap -= cost;
  if (choice.type === "weapon") {
    weaponDefs[choice.id]?.apply(player);
    if (previousLevel <= 0) {
      incrementVoyageWeaponUnlockCounter(choice.systemType);
    }
  } else {
    passiveDefs[choice.id]?.apply(player);
  }

  const newLevel = voyageUpgradeLevel(choice, player);
  return {
    cost,
    previousLevel,
    newLevel,
    purchaseText: choice.type === "weapon"
      ? `${choice.title} unlocked.`
      : `${choice.title} upgraded to ${formatVersionLabel(newLevel)}.`,
    purchaseToast: choice.type === "weapon"
      ? `${choice.title} Online`
      : `${choice.title} ${formatVersionLabel(newLevel)}`,
  };
}

function openVoyageUpgradesMenu() {
  if (state.mode !== "playing" || !state.player) return;
  state.mode = "voyageupgrades";
  voyageUpgradesMenu.classList.remove("hidden");
  renderVoyageUpgradesMenu();
  if (voyageUpgradeGrid) {
    voyageUpgradeGrid.scrollTop = 0;
  }
  const targets = gamepadMenuTargets();
  state.gamepad.menuIndex = 0;
  applyGamepadFocus(targets, true);
}

function closeVoyageUpgradesMenu() {
  if (!voyageUpgradeMenuActive()) return;
  voyageUpgradesMenu.classList.add("hidden");
  if (state.mode === "voyageupgrades") {
    state.mode = "playing";
  }
  state.gamepad.menuIndex = 0;
  syncHud();
  syncGamepadFocus();
}

function purchaseVoyageUpgrade(choice) {
  if (!choice || !state.player) return;
  if (multiplayerRunClient()) {
    if (voyageUpgradeHubLocked(choice)) return;
    if (voyageWeaponChoiceUnlocked(choice, state.player)) return;
    const cost = voyageUpgradeCost(choice, state.player);
    if ((state.player.scrap || 0) < cost) return;
    sendMultiplayerClientEvent({
      kind: "purchase_upgrade",
      upgradeId: choice.id,
    });
    statusText.textContent = `Purchase request sent for ${choice.title}.`;
    return;
  }
  const previousUpgradeId = choice.id;
  const anchorSelector = `[data-voyage-upgrade-id="${choice.id}"]`;
  const scrollAnchor = captureScrollAnchor(voyageUpgradeGrid, anchorSelector);
  const purchase = applyVoyageUpgradeChoice(choice, state.player);
  if (!purchase) return;
  const { previousLevel, newLevel, purchaseText, purchaseToast } = purchase;
  if (choice.type === "weapon" && previousLevel <= 0) {
    if (choice.id === "orbitBlades") {
      playDroneHaloOnlineSfx();
    } else if (choice.id === "photonPhazer") {
      playPhotonPhazerOnlineSfx();
    }
  }
  state.runStats.augments.push(choice.type === "weapon" ? `${choice.title} unlocked` : `${choice.title} ${formatVersionLabel(newLevel)}`);
  statusText.textContent = purchaseText;
  renderVoyageUpgradesMenu();
  restoreScrollAnchor(voyageUpgradeGrid, anchorSelector, scrollAnchor);
  syncHud();
  const targets = gamepadMenuTargets();
  const targetIndex = targets.findIndex(node => node?.dataset?.voyageUpgradeId === previousUpgradeId);
  state.gamepad.menuIndex = targetIndex >= 0 ? targetIndex : Math.min(state.gamepad.menuIndex, Math.max(0, targets.length - 1));
  applyGamepadFocus(targets, false);
  showUpgradePurchaseToast(voyageUpgradeCard(choice.id), purchaseToast, upgradeVisualFor(choice.id).accent);
}

function handleMenuBack() {
  clearMenuConfirmHold();
  if (teamVoyageMenu && !teamVoyageMenu.classList.contains("hidden")) {
    handleTeamVoyageBack();
    return true;
  }
  if (mainMenuSettingsMenu && !mainMenuSettingsMenu.classList.contains("hidden")) {
    closeMainMenuSettingsMenu();
    return true;
  }
  if (modMenuActive()) {
    closeModMenu();
    return true;
  }
  if (voyageUpgradeMenuActive()) {
    closeVoyageUpgradesMenu();
    return true;
  }
  if (!runSummary.classList.contains("hidden")) {
    closeRunSummary();
    return true;
  }
  if (!hangarHostilesMenu.classList.contains("hidden")) {
    closeHangarHostilesMenu();
    return true;
  }
  if (!hangarRecordsMenu.classList.contains("hidden")) {
    closeHangarRecordsMenu();
    return true;
  }
  if (!hangarAugmentsMenu.classList.contains("hidden")) {
    closeHangarAugmentsMenu();
    return true;
  }
  if (!hangarSettingsMenu.classList.contains("hidden")) {
    closeHangarSettingsMenu();
    return true;
  }
  if (!hangarUpgradesMenu.classList.contains("hidden")) {
    closeHangarUpgradesMenu();
    return true;
  }
  if (state.mode === "planet") {
    closePlanetDiscovery();
    return true;
  }
  if (state.mode === "paused") {
    resumeVoyage();
    return true;
  }
  return false;
}

function showRunSummary({ title, body, personalBest }) {
  const stats = state.runStats || freshRunStats();
  if (multiplayerRunHost()) {
    sendMultiplayerClientEvent({
      kind: "run_complete",
      summary: {
        title,
        body,
        pendingHangarMessage: state.pendingHangarMessage || "Team Voyage complete. Returning to hangar.",
      },
      stats: {
        time: state.time,
        gold: state.gold,
        kills: state.kills,
        damageDealt: stats.damageDealt || 0,
        damageTaken: stats.damageTaken || 0,
        scrapRecovered: stats.scrapRecovered || 0,
        bonusAugmentsAwarded: stats.bonusAugmentsAwarded || 0,
        crudeCachesAwarded: stats.crudeCachesAwarded || 0,
        ardonisCachesAwarded: stats.ardonisCachesAwarded || 0,
      },
    });
  }
  hangarScreen.classList.add("hidden");
  overlay.classList.add("hidden");
  if (voyageUpgradesMenu) voyageUpgradesMenu.classList.add("hidden");
  runSummary.classList.remove("hidden");
  state.mode = "summary";
  state.gamepad.menuIndex = 0;
  if (runSummaryCard) {
    runSummaryCard.scrollTop = 0;
  }
  if (runSummaryScroll) {
    runSummaryScroll.scrollTop = 0;
  }
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
  runSummaryTitle.textContent = personalBest ? `${title} - Personal Best` : title;
  runSummaryBody.textContent = body;
  runSummaryGrid.innerHTML = "";
  runSummaryKills.innerHTML = "";
  runSummaryAugments.innerHTML = "";

  const rows = [
    ["Time Lasted", formatTime(state.time)],
    ["Ardonis Credits", state.gold],
    ["Damage Dealt", Math.round(stats.damageDealt)],
    ["Damage Received", Math.round(stats.damageTaken)],
    ["Enemies Killed", state.kills],
    ["Scrap Recovered", stats.scrapRecovered],
  ];
  if (stats.bonusAugmentsAwarded > 0) {
    if (stats.crudeCachesAwarded > 0) rows.push(["Crude Caches Earned", stats.crudeCachesAwarded]);
    if (stats.ardonisCachesAwarded > 0) rows.push(["Ardonis Caches Earned", stats.ardonisCachesAwarded]);
    if (stats.crudeCachesAwarded <= 0 && stats.ardonisCachesAwarded <= 0) {
      rows.push(["Augment Caches Earned", stats.bonusAugmentsAwarded]);
    }
  }
  for (const [label, value] of rows) {
    const row = document.createElement("div");
    row.className = "run-summary-row";
    row.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    runSummaryGrid.appendChild(row);
  }

  const killHeader = document.createElement("div");
  killHeader.className = "run-summary-section";
  killHeader.textContent = "Kills By Type";
  runSummaryKills.appendChild(killHeader);
  let killRows = 0;
  for (const [type, count] of Object.entries(stats.killsByType)) {
    if (count <= 0) continue;
    const row = document.createElement("div");
    row.className = "run-summary-row";
    row.innerHTML = `<span>${enemyDisplayName(type)}</span><strong>${count}</strong>`;
    runSummaryKills.appendChild(row);
    killRows += 1;
  }
  if (killRows === 0) {
    const row = document.createElement("div");
    row.className = "run-summary-row";
    row.innerHTML = "<span>No kills recorded</span><strong>0</strong>";
    runSummaryKills.appendChild(row);
  }

  const augmentHeader = document.createElement("div");
  augmentHeader.className = "run-summary-section";
  augmentHeader.textContent = "Run Upgrades";
  runSummaryAugments.appendChild(augmentHeader);
  const augmentRow = document.createElement("div");
  augmentRow.className = "run-summary-chip-row";
  if (stats.augments.length) {
    for (const augment of stats.augments) {
      const chip = document.createElement("span");
      chip.className = "run-summary-chip";
      chip.textContent = augment;
      augmentRow.appendChild(chip);
    }
  } else {
    const chip = document.createElement("span");
    chip.className = "run-summary-chip";
    chip.textContent = "No run upgrades";
    augmentRow.appendChild(chip);
  }
  runSummaryAugments.appendChild(augmentRow);
  syncGamepadFocus();
}

function buildPlayerDeathPieces(player) {
  const rotation = player.rotation || 0;
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);
  const rotatePoint = (x, y) => ({
    x: x * cos - y * sin,
    y: x * sin + y * cos,
  });
  const pieceDefs = [
    {
      points: [[0, -16], [10, 0], [-10, 0]],
      anchor: [0, -24],
      velocity: [0, -82],
      spin: rand(-2.8, 2.8),
      fill: "#f6fbff",
      stroke: "#ffb7a1",
    },
    {
      points: [[-5, -6], [-20, 12], [-6, 8], [-2, -2]],
      anchor: [-22, 8],
      velocity: [-76, 48],
      spin: rand(-3.8, -1.8),
      fill: "#c8d5eb",
      stroke: "#ff9f82",
    },
    {
      points: [[5, -6], [20, 12], [6, 8], [2, -2]],
      anchor: [22, 8],
      velocity: [76, 48],
      spin: rand(1.8, 3.8),
      fill: "#c8d5eb",
      stroke: "#ff9f82",
    },
    {
      points: [[-10, -16], [10, -16], [12, 12], [4, 20], [-4, 20], [-12, 12]],
      anchor: [0, 0],
      velocity: [0, 60],
      spin: rand(-2.2, 2.2),
      fill: "#aebbd5",
      stroke: "#ffd2b8",
    },
    {
      points: [[-11, 0], [11, 0], [7, 10], [-7, 10]],
      anchor: [0, 18],
      velocity: [0, 92],
      spin: rand(-4.2, 4.2),
      fill: "#35507f",
      stroke: "#7de5ff",
    },
  ];

  return pieceDefs.map(piece => {
    const anchor = rotatePoint(piece.anchor[0], piece.anchor[1]);
    const velocity = rotatePoint(piece.velocity[0], piece.velocity[1]);
    return {
      points: piece.points,
      x: player.x + anchor.x,
      y: player.y + anchor.y,
      vx: velocity.x + player.vx * 0.14,
      vy: velocity.y + player.vy * 0.14,
      angle: rotation,
      spin: piece.spin,
      fill: piece.fill,
      stroke: piece.stroke,
    };
  });
}

function finalizePlayerFailureRewards() {
  const personalBest = Math.floor(state.time) > state.meta.totals.bestTime;
  state.meta.goldBank += state.gold;
  state.meta.totals.runs += 1;
  state.meta.totals.kills += state.kills;
  state.meta.totals.bestTime = Math.max(state.meta.totals.bestTime, Math.floor(state.time));
  state.meta.totals.creditsEarned += state.gold;
  state.runStats.creditsEarned = state.gold;
  saveMetaProgression();
  renderMetaUpgrades();
  statusText.textContent = "The fleet went down this round. All earned credits were recovered.";
  state.pendingHangarMessage = `Voyage failed after ${formatTime(state.time)}. You banked ${state.gold} Ardonis Credits.`;
  return {
    title: "Voyage Failed",
    body: `You banked ${state.gold} Ardonis Credits from the voyage.`,
    personalBest,
  };
}

function beginPlayerDeathSequence(summaryPayload) {
  const player = state.player;
  if (!player || player.deathSequence?.active) return;
  ensureMusicStarted();
  switchMusicMode("death");
  state.pendingRunSummary = summaryPayload;
  state.mode = "death";
  player.hp = 0;
  player.shield = 0;
  player.boosting = false;
  player.thrusting = false;
  player.disabledTimer = Math.max(player.disabledTimer || 0, PLAYER_DEATH_SEQUENCE_TIME);
  player.invuln = Math.max(player.invuln || 0, PLAYER_DEATH_SEQUENCE_TIME);
  player.deathSequence = {
    active: true,
    hidden: false,
    time: 0,
    burstTriggered: false,
    pieces: buildPlayerDeathPieces(player),
  };
  playDeathDetectedWarningSfx();
  floatingText(player.x, player.y - 54, "HULL BREACH", "#ffd6d6", 0.7, {
    scale: 1.15,
    weight: 800,
    shadowColor: "#ff8a8a",
    shadowBlur: 14,
  });
  syncHud();
}

function closeRunSummary() {
  playSceneDoorTransition(() => {
    runSummary.classList.add("hidden");
    if (teamVoyageConnected()) {
      closeTeamVoyageSocket("", true);
      setTeamVoyageStatus("Team Voyage session complete. Reopen Team Voyage to host or join a new room.");
    }
    clearMultiplayerRuntime();
    showHangar(state.pendingHangarMessage, { preserveTransition: true });
  });
}

function launchRun() {
  ensureMusicStarted();
  switchMusicMode("run");
  hangarScreen.classList.remove("launching");
  hangarWindow.classList.remove("launching");
  hangarScreen.classList.add("hidden");
  shell.classList.remove("scene-hidden");
  resizeGameViewport();
  hangarUpgradesMenu.classList.add("hidden");
  hangarAugmentsMenu.classList.add("hidden");
  runSummary.classList.add("hidden");
  if (voyageUpgradesMenu) voyageUpgradesMenu.classList.add("hidden");
  resetGame();
  if (multiplayerRunActive()) {
    state.mode = "playing";
    upgradeChoices.classList.add("hidden");
    upgradeChoices.innerHTML = "";
    overlay.classList.add("hidden");
    statusText.textContent = `Flight active. ${weaponDefs[state.currentRun.startingWeapon]?.name || "Photon Lance"} online.`;
    syncHud();
    return;
  }
  presentStartingWeaponChoice();
}

function endVoyage() {
  if (state.mode !== "playing" && state.mode !== "paused") return;
  const personalBest = Math.floor(state.time) > state.meta.totals.bestTime;
  state.meta.totals.runs += 1;
  state.meta.totals.kills += state.kills;
  state.meta.totals.bestTime = Math.max(state.meta.totals.bestTime, Math.floor(state.time));
  state.meta.totals.creditsEarned += state.gold;
  state.meta.goldBank += state.gold;
  state.runStats.creditsEarned = state.gold;
  saveMetaProgression();
  renderMetaUpgrades();
  statusText.textContent = "Voyage ended early. All earned credits were recovered.";
  state.pendingHangarMessage = `Voyage ended. You returned with ${state.gold} Ardonis Credits.`;
  showRunSummary({
    title: "Voyage Ended",
    body: `You returned to the hangar with ${state.gold} Ardonis Credits.`,
    personalBest,
  });
}

function purchaseMetaUpgrade(id) {
  const def = metaUpgradeDefs[id];
  if (metaLevel(id) >= def.maxLevel) return;
  const cost = metaCost(id);
  if (state.meta.goldBank < cost) return;
  const upgradesScrollNode = hangarUpgradesMenu.querySelector(".hangar-submenu-card");
  const anchorSelector = `[data-upgrade-id="${id}"]`;
  const scrollAnchor = captureScrollAnchor(upgradesScrollNode, anchorSelector);
  state.meta.goldBank -= cost;
  state.meta.upgradeCreditsSpent = Math.max(0, (state.meta.upgradeCreditsSpent || 0) + cost);
  state.meta.upgrades[id] += 1;
  const newLevel = state.meta.upgrades[id];
  const purchaseMessage = `${def.name} upgraded to ${formatVersionLabel(newLevel)}.`;
  const purchaseAccent = metaUpgradeVisuals[id]?.accent || "#8af6ff";
  saveMetaProgression();
  renderMetaUpgrades();
  restoreScrollAnchor(upgradesScrollNode, anchorSelector, scrollAnchor);
  syncHud();
  showUpgradePurchaseToast(metaUpgradeCard(id), `${def.name} ${formatVersionLabel(newLevel)}`, purchaseAccent);
  statusText.textContent = purchaseMessage;
  if (hangarStatus) {
    hangarStatus.textContent = purchaseMessage;
  }
  syncUpgradeMenuFocus(id);
}

function respecMetaUpgrades() {
  const hasUpgrades = Object.values(state.meta?.upgrades || {}).some(level => level > 0);
  if (!hasUpgrades) return;
  const refund = Math.max(0, Math.floor(state.meta.upgradeCreditsSpent || 0));
  for (const id of Object.keys(metaUpgradeDefs)) {
    state.meta.upgrades[id] = 0;
  }
  state.meta.goldBank += refund;
  state.meta.upgradeCreditsSpent = 0;
  saveMetaProgression();
  renderMetaUpgrades();
  syncHud();
  statusText.textContent = refund > 0
    ? `Engineering Bay reset. ${refund} Ardonis Credits returned to bank.`
    : "Engineering Bay reset. Upgrade allocation cleared.";
  syncGamepadFocus();
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function segmentHitsCircle(x1, y1, x2, y2, cx, cy, radius) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lengthSq = dx * dx + dy * dy;
  if (lengthSq <= 0.0001) {
    return Math.hypot(cx - x1, cy - y1) <= radius;
  }

  const t = clamp(((cx - x1) * dx + (cy - y1) * dy) / lengthSq, 0, 1);
  const closestX = x1 + dx * t;
  const closestY = y1 + dy * t;
  return Math.hypot(cx - closestX, cy - closestY) <= radius;
}

function buildEnemySeparationGrid() {
  const cellSize = 112;
  const grid = new Map();
  for (const enemy of state.enemies) {
    if (enemy.alive === false) continue;
    const cellX = Math.floor(enemy.x / cellSize);
    const cellY = Math.floor(enemy.y / cellSize);
    const key = `${cellX},${cellY}`;
    if (!grid.has(key)) {
      grid.set(key, []);
    }
    grid.get(key).push(enemy);
  }
  return { cellSize, grid };
}

function enemySeparationVector(enemy, separationGrid) {
  if (!enemy || !separationGrid) return null;
  const { cellSize, grid } = separationGrid;
  const cellX = Math.floor(enemy.x / cellSize);
  const cellY = Math.floor(enemy.y / cellSize);
  let x = 0;
  let y = 0;
  let hits = 0;
  for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
    for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
      const bucket = grid.get(`${cellX + offsetX},${cellY + offsetY}`);
      if (!bucket) continue;
      for (const other of bucket) {
        if (other === enemy || other.alive === false) continue;
        const dx = enemy.x - other.x;
        const dy = enemy.y - other.y;
        const distanceToOther = Math.hypot(dx, dy);
        const desiredSpacing = enemy.radius + other.radius + 18;
        if (distanceToOther <= 0.001 || distanceToOther >= desiredSpacing) continue;
        const push = (desiredSpacing - distanceToOther) / desiredSpacing;
        x += (dx / distanceToOther) * push;
        y += (dy / distanceToOther) * push;
        hits += 1;
      }
    }
  }
  if (!hits) return null;
  const magnitude = Math.hypot(x, y);
  if (magnitude <= 0.001) return null;
  return {
    x: x / magnitude,
    y: y / magnitude,
    strength: clamp(magnitude / Math.max(1, hits * 0.42), 0, 1),
  };
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function normalizeStick(x, y, deadzone = 0.18) {
  const magnitude = Math.hypot(x, y);
  if (magnitude < deadzone) {
    return { x: 0, y: 0, magnitude: 0, active: false };
  }
  const scaled = (magnitude - deadzone) / (1 - deadzone);
  const curved = Math.min(1, scaled * scaled * 0.7 + scaled * 0.3);
  return {
    x: x / magnitude,
    y: y / magnitude,
    magnitude: curved,
    active: true,
  };
}

function pollGamepad() {
  const pads = navigator.getGamepads ? navigator.getGamepads() : [];
  const pad = Array.from(pads).find(Boolean);
  if (!pad) {
    state.gamepad.connected = false;
    state.gamepad.moveX = 0;
    state.gamepad.moveY = 0;
    state.gamepad.aimX = 0;
    state.gamepad.aimY = 0;
    state.gamepad.boostAmount = 0;
    state.gamepad.pausePressed = false;
    state.gamepad.backPressed = false;
    state.gamepad.confirmPressed = false;
    state.gamepad.confirmDown = false;
    state.gamepad.dashPressed = false;
    state.gamepad.upgradeMenuPressed = false;
    state.gamepad.weaponPrevPressed = false;
    state.gamepad.weaponNextPressed = false;
    state.gamepad.navXPressed = false;
    state.gamepad.navYPressed = false;
    state.gamepad.modComboPressed = false;
    return;
  }

  state.gamepad.connected = true;
  const move = normalizeStick(pad.axes[0] || 0, pad.axes[1] || 0);
  const aim = normalizeStick(pad.axes[2] || 0, pad.axes[3] || 0, 0.22);
  state.gamepad.moveX = move.x * move.magnitude;
  state.gamepad.moveY = move.y * move.magnitude;
  state.gamepad.aimX = aim.x * aim.magnitude;
  state.gamepad.aimY = aim.y * aim.magnitude;
  state.gamepad.boostAmount = clamp(pad.buttons[7]?.value ?? (pad.buttons[7]?.pressed ? 1 : 0), 0, 1);

  const confirmDown = Boolean(pad.buttons[0]?.pressed);
  const backDown = Boolean(pad.buttons[1]?.pressed);
  const upgradeMenuDown = Boolean(pad.buttons[3]?.pressed);
  const dashDown = Boolean(pad.buttons[0]?.pressed);
  const weaponPrevDown = Boolean(pad.buttons[4]?.pressed);
  const weaponNextDown = Boolean(pad.buttons[5]?.pressed);
  const pauseDown = Boolean(pad.buttons[9]?.pressed);
  const modComboDown = Boolean(pad.buttons[10]?.pressed) && Boolean(pad.buttons[11]?.pressed);
  const navX = pad.axes[0] || 0;
  const navY = pad.axes[1] || 0;
  const dpadLeft = Boolean(pad.buttons[14]?.pressed);
  const dpadRight = Boolean(pad.buttons[15]?.pressed);
  const dpadUp = Boolean(pad.buttons[12]?.pressed);
  const dpadDown = Boolean(pad.buttons[13]?.pressed);
  const horizontalNavDown = dpadLeft || dpadRight || Math.abs(navX) > 0.65;
  const verticalNavDown = dpadUp || dpadDown || Math.abs(navY) > 0.65;
  if (
    confirmDown ||
    backDown ||
    upgradeMenuDown ||
    dashDown ||
    weaponPrevDown ||
    weaponNextDown ||
    pauseDown ||
    modComboDown ||
    horizontalNavDown ||
    verticalNavDown
  ) {
    unlockAudio();
  }
  state.gamepad.confirmDown = confirmDown;

  syncGamepadFocus();

  if (modComboDown && !state.gamepad.modComboPressed) {
    openModMenu();
  }

  if ((state.mode === "mainmenu" || state.mode === "menu" || state.mode === "levelup" || state.mode === "summary" || state.mode === "modmenu" || state.mode === "voyageupgrades" || overlayMenuActive()) && horizontalNavDown && !state.gamepad.navXPressed) {
    const delta = dpadLeft || navX < -0.65 ? -1 : 1;
    if (!adjustFocusedRange(delta)) {
      moveGamepadFocus(delta < 0 ? "left" : "right");
    }
  }
  if (((mainMenuScreen && !mainMenuScreen.classList.contains("hidden")) || !hangarScreen.classList.contains("hidden") || !runSummary.classList.contains("hidden") || modMenuActive() || voyageUpgradeMenuActive() || overlayMenuActive() || (mainMenuSettingsMenu && !mainMenuSettingsMenu.classList.contains("hidden")) || (teamVoyageMenu && !teamVoyageMenu.classList.contains("hidden"))) && verticalNavDown && !state.gamepad.navYPressed) {
    const direction = dpadUp || navY < -0.65 ? "up" : "down";
    if (!runSummary.classList.contains("hidden") && scrollRunSummary(direction)) {
      applyGamepadFocus(gamepadMenuTargets(), false);
    } else if (!hangarHostilesMenu.classList.contains("hidden") && scrollHostileDataMenu(direction)) {
      applyGamepadFocus(gamepadMenuTargets(), false);
    } else {
      const previousIndex = state.gamepad.menuIndex;
      moveGamepadFocus(direction);
      if (state.gamepad.menuIndex === previousIndex && scrollActiveMenu(direction)) {
        applyGamepadFocus(gamepadMenuTargets(), false);
      }
    }
  }

  if (upgradeMenuDown && !state.gamepad.upgradeMenuPressed) {
    if (state.mode === "playing") {
      openVoyageUpgradesMenu();
    } else if (state.mode === "voyageupgrades") {
      closeVoyageUpgradesMenu();
    }
  }

  if (confirmDown && !state.gamepad.confirmPressed) {
    if (state.mode === "playing") {
      performDash();
    } else if (
      state.mode === "menu" ||
      state.mode === "summary" ||
      state.mode === "gameover" ||
      state.mode === "victory" ||
      state.mode === "levelup" ||
      state.mode === "modmenu" ||
      state.mode === "voyageupgrades" ||
      !overlay.classList.contains("hidden")
    ) {
      const target = gamepadMenuConfirmTarget();
      if (menuTargetUsesInstantConfirm(target)) {
        clearMenuConfirmHold();
        activateMenuTarget(target);
      } else {
        startMenuConfirmHold("gamepad");
      }
    }
  }

  if (state.mode === "playing") {
    if (weaponPrevDown && !state.gamepad.weaponPrevPressed) {
      cycleNormalWeaponSystem(-1);
    }
    if (weaponNextDown && !state.gamepad.weaponNextPressed) {
      cycleNormalWeaponSystem(1);
    }
  }

  if (backDown && !state.gamepad.backPressed) {
    handleMenuBack();
  }

  if (pauseDown && !state.gamepad.pausePressed) {
    if (modMenuActive()) {
      closeModMenu();
    } else if (state.mode === "voyageupgrades") {
      closeVoyageUpgradesMenu();
    } else if (state.mode === "playing") {
      pauseVoyage();
    } else if (state.mode === "planet") {
      closePlanetDiscovery();
    } else if (state.mode === "paused") {
      resumeVoyage();
    } else if (state.mode === "menu") {
      if (!handleMenuBack()) {
        openHangarSettingsMenu();
      }
    } else if (state.mode === "mainmenu") {
      if (!handleMenuBack()) {
        openMainMenuSettingsMenu();
      }
    }
  }

  state.gamepad.confirmPressed = confirmDown;
  state.gamepad.dashPressed = dashDown;
  state.gamepad.upgradeMenuPressed = upgradeMenuDown;
  state.gamepad.weaponPrevPressed = weaponPrevDown;
  state.gamepad.weaponNextPressed = weaponNextDown;
  state.gamepad.pausePressed = pauseDown;
  state.gamepad.backPressed = backDown;
  state.gamepad.navXPressed = horizontalNavDown;
  state.gamepad.navYPressed = verticalNavDown;
  state.gamepad.modComboPressed = modComboDown;
}

function pickWeightedEnemyType(time) {
  const threatTime = time;
  if (normalThreatBasicEnemyOnly()) {
    const basicPool = [
      { id: "shade", weight: 6 },
      { id: "hound", weight: threatTime > 45 ? 4 : 0 },
      { id: "brute", weight: threatTime > 100 ? 2.4 : 0 },
    ];
    const total = basicPool.reduce((sum, item) => sum + item.weight, 0);
    let roll = Math.random() * total;
    for (const item of basicPool) {
      roll -= item.weight;
      if (roll <= 0) {
        return item.id;
      }
    }
    return "shade";
  }
  if (dangerousThreatWitchCapOnly()) {
    const dangerousPool = [
      { id: "shade", weight: 6 },
      { id: "hound", weight: threatTime > 45 ? 4 : 0 },
      { id: "brute", weight: threatTime > 100 ? 2.4 : 0 },
      { id: "witch", weight: threatTime > 150 ? 1.7 : 0 },
    ];
    const total = dangerousPool.reduce((sum, item) => sum + item.weight, 0);
    let roll = Math.random() * total;
    for (const item of dangerousPool) {
      roll -= item.weight;
      if (roll <= 0) {
        return item.id;
      }
    }
    return "shade";
  }
  const relayCount = activeEnemyTypeCount("relay");
  const scramblerCount = activeEnemyTypeCount("scrambler");
  const pool = [
    { id: "shade", weight: 6 },
    { id: "hound", weight: threatTime > 45 ? 4 : 0 },
    { id: "brute", weight: threatTime > 100 ? 2.4 : 0 },
    { id: "witch", weight: threatTime > 170 ? 1.9 : 0 },
    { id: "drifter", weight: threatTime > 135 ? 1.6 : 0 },
    { id: "aegis", weight: threatTime > 165 ? 1.35 : 0 },
    { id: "relay", weight: threatTime > 145 && relayCount < MAX_RELAY_SHIPS ? 1.05 : 0 },
    { id: "scrambler", weight: threatTime > (ventariVoyageActive() ? 155 : 195) && scramblerCount < MAX_HACK_SNIPERS ? 0.52 : 0 },
  ];
  const total = pool.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;
  for (const item of pool) {
    roll -= item.weight;
    if (roll <= 0) {
      return item.id;
    }
  }
  return "shade";
}

function pickEliteEnemyType(time) {
  const leviathanCount = activeEnemyTypeCount("leviathan");
  const leviathanUnlocked = leviathanDifficultyUnlocked();
  const leviathanSpawnBudget = state.leviathanSpawnCount < MAX_LEVIATHAN_SPAWNS_PER_RUN;
  const pool = [
    { id: "viper", weight: time > 70 ? 1.55 : 0 },
    { id: "bastion", weight: time > 165 ? 1 + Math.min(1.8, (time - 165) * 0.012) : 0 },
    {
      id: "leviathan",
      weight: leviathanUnlocked && leviathanSpawnBudget && time > 220 && leviathanCount < MAX_LEVIATHANS
        ? 0.26 + Math.min(0.42, (time - 220) * 0.0024)
        : 0,
    },
  ];
  const total = pool.reduce((sum, item) => sum + item.weight, 0);
  if (total <= 0) return "viper";
  let roll = Math.random() * total;
  for (const item of pool) {
    roll -= item.weight;
    if (roll <= 0) {
      return item.id;
    }
  }
  return "viper";
}

function makeEnemy(type) {
  const threatTime = enemyThreatTimeValue();
  const difficulty = difficultyMultiplier();
  const durabilityMultiplier = enemyDurabilityMultiplier() * rookiePressureMultiplier();
  const side = Math.floor(Math.random() * 4);
  let x = 0;
  let y = 0;
  const pad = 120;
  if (side === 0) {
    x = rand(-pad, WORLD_W + pad);
    y = -pad;
  } else if (side === 1) {
    x = WORLD_W + pad;
    y = rand(-pad, WORLD_H + pad);
  } else if (side === 2) {
    x = rand(-pad, WORLD_W + pad);
    y = WORLD_H + pad;
  } else {
    x = -pad;
    y = rand(-pad, WORLD_H + pad);
  }

  const stats = {
    shade: { radius: 13, hp: 26, hpRamp: 0.25, speed: 82, speedRamp: 0.08, speedCap: 45, color: "#be3f58", xp: 1, contactDamage: enemyDamageValue("shade") },
    hound: { radius: 10, hp: 20, hpRamp: 0.24, speed: 128, speedRamp: 0.1, speedCap: 52, color: "#f28f3b", xp: 2, contactDamage: enemyDamageValue("hound") },
    brute: { radius: 20, hp: 92, hpRamp: 0.42, speed: 58, speedRamp: 0.06, speedCap: 34, color: "#8d5cf6", xp: 5, contactDamage: enemyDamageValue("brute") },
    witch: {
      radius: 15,
      hp: 62,
      hpRamp: 0.32,
      speed: 75,
      speedRamp: 0.07,
      speedCap: 38,
      color: "#66c7f4",
      xp: 4,
      ranged: true,
      shotClock: 3.2,
      minShotDelay: 1.6,
      shotRamp: 0.01,
      shotSpeed: 210,
      shotRadius: 7,
      shotColor: "#8cdaf9",
      shotDamageType: "shield",
      shotDamage: enemyDamageValue("orb"),
      contactDamage: enemyDamageValue("witch"),
    },
    aegis: {
      radius: 23,
      hp: 235,
      hpRamp: 0.68,
      shield: 170,
      shieldRamp: 0.55,
      speed: 74,
      speedRamp: 0.05,
      speedCap: 28,
      color: "#86d8ff",
      xp: 7,
      ranged: true,
      name: "Aegis Cruiser",
      shotClock: 3.9,
      minShotDelay: 2.2,
      shotRamp: 0.007,
      shotSpeed: 205,
      shotRadius: 8,
      shotColor: "#b0d8ff",
      shotDamageType: "shield",
      shotDamage: enemyDamageValue("aegis"),
      contactDamage: enemyDamageValue("aegis"),
    },
    drifter: {
      radius: 20,
      hp: 210,
      hpRamp: 0.58,
      shield: 185,
      shieldRamp: 0.64,
      speed: 62,
      speedRamp: 0.04,
      speedCap: 20,
      color: "#74ffc9",
      xp: 6,
      name: "Null Drifter",
      playerSlowRadius: 128,
      playerSlowMultiplier: 0.56,
      selfDecayRate: 82,
      contactDamage: enemyDamageValue("drifter"),
    },
    reactor: {
      radius: 24,
      hp: 340,
      hpRamp: 0.88,
      shield: 260,
      shieldRamp: 0.7,
      speed: 34,
      speedRamp: 0.02,
      speedCap: 12,
      color: "#ff8e54",
      xp: 10,
      name: "Reactor Hulk",
      explodesOnProximity: true,
      detonationRadius: 56,
      explosionRadius: 114,
      explosionDamage: 72,
      explosionColor: "#ff9a62",
      contactDamage: 0,
    },
    relay: {
      radius: 18,
      hp: 205,
      hpRamp: 0.56,
      shield: 165,
      shieldRamp: 0.5,
      speed: 78,
      speedRamp: 0.05,
      speedCap: 26,
      color: "#8bff96",
      xp: 8,
      name: "Relay Shepherd",
      allyAuraRadius: 154,
      allySpeedMultiplier: 1.3,
      allyHealRate: 24,
      contactDamage: enemyDamageValue("relay"),
    },
    scrambler: {
      radius: 16,
      hp: 168,
      hpRamp: 0.52,
      shield: 118,
      shieldRamp: 0.42,
      speed: 92,
      speedRamp: 0.06,
      speedCap: 34,
      color: "#bf8bff",
      xp: 9,
      ranged: true,
      name: "Cipher Saboteur",
      shotClock: 4.5,
      minShotDelay: 2.9,
      shotRamp: 0.004,
      shotSpeed: 225,
      shotRadius: 8,
      shotColor: "#cf8bff",
      shotDamageType: "hack",
      shotDamage: enemyDamageValue("scrambler"),
      hackDuration: 3.75,
      contactDamage: enemyDamageValue("scrambler"),
    },
    viper: {
      radius: 18,
      hp: 190,
      hpRamp: 0.82,
      shield: 140,
      shieldRamp: 0.52,
      speed: 168,
      speedRamp: 0.11,
      speedCap: 72,
      color: "#ff6a7a",
      xp: 14,
      elite: true,
      name: "Viper Ace",
      contactDamage: 50,
    },
    bastion: {
      radius: 32,
      hp: 640,
      hpRamp: 1.8,
      shield: 520,
      shieldRamp: 1.35,
      speed: 56,
      speedRamp: 0.04,
      speedCap: 20,
      color: "#73c6ff",
      xp: 18,
      elite: true,
      ranged: true,
      name: "Bastion Dreadnought",
      shotClock: 2.8,
      minShotDelay: 1.85,
      shotRamp: 0.004,
      shotSpeed: 185,
      shotRadius: 9,
      shotColor: "#ffd166",
      shotDamageType: "hull",
      shotDamage: 50,
      contactDamage: enemyDamageValue("bastion"),
    },
    leviathan: {
      radius: 38,
      hp: 1280,
      hpRamp: 2.6,
      shield: 1360,
      shieldRamp: 2.4,
      speed: 44,
      speedRamp: 0.03,
      speedCap: 16,
      color: "#9f8cff",
      xp: 24,
      elite: true,
      ranged: true,
      name: "Leviathan",
      shotKind: "leviathanMissile",
      shotClock: 4.9,
      minShotDelay: 3.2,
      shotRamp: 0.003,
      shotSpeed: 188,
      shotRadius: 10,
      shotColor: "#ffd7a6",
      shotDamageType: "shield",
      shotDamage: 34,
      shotLife: 2,
      shotExplosionRadius: 78,
      shotExplosionDamage: 34,
      shotExplosionColor: "#ffd0a0",
      shotHomingTurn: 2.65,
      deathSpawnHounds: 20,
      contactDamage: enemyDamageValue("leviathan"),
    },
  }[type];

  const routeBaseMultiplier = enemyRouteBaseStatMultiplier();
  const routeSpeedMultiplier = enemyRouteSpeedMultiplier();
  const scaledHp =
    (stats.hp + threatTime * (stats.hpRamp || 0.25)) *
    (1 + (difficulty - 1) * 0.95) *
    durabilityMultiplier *
    routeBaseMultiplier;
  const scaledShield =
    ((stats.shield || 0) + threatTime * (stats.shieldRamp || 0)) *
    (1 + (difficulty - 1) * 1.02) *
    durabilityMultiplier *
    routeBaseMultiplier;
  const scaledSpeed =
    (stats.speed + Math.min(stats.speedCap || 45, threatTime * (stats.speedRamp || 0.08))) *
    (1 + (difficulty - 1) * 0.22) *
    easiestDifficultySpeedScale() *
    (1 + (rookiePressureMultiplier() - 1) * 0.12) *
    routeSpeedMultiplier;
  const scaledShotDamage = (stats.shotDamage || 0) * routeBaseMultiplier;
  const scaledContactDamage = (stats.contactDamage || enemyDamageValue(type)) * routeBaseMultiplier;
  const scaledExplosionDamage = (stats.explosionDamage || 0) * routeBaseMultiplier;
  const scaledShotExplosionDamage = (stats.shotExplosionDamage || 0) * routeBaseMultiplier;

  return {
    type,
    x,
    y,
    radius: stats.radius,
    baseMaxHp: scaledHp,
    hp: scaledHp,
    maxHp: scaledHp,
    baseMaxShield: scaledShield,
    shield: scaledShield,
    maxShield: scaledShield,
    baseSpeed: scaledSpeed,
    speed: scaledSpeed,
    color: stats.color,
    xp: stats.xp,
    ranged: Boolean(stats.ranged),
    shotClock: stats.shotClock ? rand(stats.minShotDelay || 0.8, stats.shotClock) : 0,
    shotBaseDelay: stats.shotClock || 0,
    minShotDelay: stats.minShotDelay || 0,
    shotRamp: stats.shotRamp || 0,
    shotSpeed: stats.shotSpeed || 210,
    shotRadius: stats.shotRadius || 7,
    shotColor: stats.shotColor || "#8cdaf9",
    shotKind: stats.shotKind || "orb",
    shotLife: stats.shotLife || 4.5,
    shotExplosionRadius: stats.shotExplosionRadius || 0,
    shotExplosionDamage: scaledShotExplosionDamage,
    baseShotExplosionDamage: scaledShotExplosionDamage,
    shotExplosionColor: stats.shotExplosionColor || stats.shotColor || stats.color,
    shotHomingTurn: stats.shotHomingTurn || 0,
    shotDamageType: stats.shotDamageType || "shield",
    baseShotDamage: scaledShotDamage,
    shotDamage: scaledShotDamage,
    shotEffectType: stats.shotDamageType === "hack" ? "hack" : "",
    shotEffectDuration: stats.hackDuration || 0,
    baseContactDamage: scaledContactDamage,
    contactDamage: scaledContactDamage,
    baseExplosionDamage: scaledExplosionDamage,
    allyAuraRadius: stats.allyAuraRadius || 0,
    allySpeedMultiplier: stats.allySpeedMultiplier || 1,
    allyHealRate: stats.allyHealRate || 0,
    playerSlowRadius: stats.playerSlowRadius || 0,
    playerSlowMultiplier: stats.playerSlowMultiplier || 1,
    selfDecayRate: stats.selfDecayRate || 0,
    explodesOnProximity: Boolean(stats.explodesOnProximity),
    detonationRadius: stats.detonationRadius || 0,
    explosionRadius: stats.explosionRadius || 0,
    explosionDamage: scaledExplosionDamage,
    explosionColor: stats.explosionColor || stats.color,
    deathSpawnHounds: stats.deathSpawnHounds || 0,
    elite: Boolean(stats.elite),
    displayName: stats.name || enemyDisplayName(type),
    hitFlash: 0,
    shieldFlash: 0,
    freezeTimer: 0,
    empTimer: 0,
    gravitySlowTimer: 0,
    burnTimer: 0,
    burnTick: 0.5,
    burnDamage: 0,
    radiationTimer: 0,
    radiationMultiplier: 1,
    hackTimer: 0,
    hackContactCooldown: 0,
    supportBuffed: false,
  };
}

function spawnLeviathanHounds(enemy) {
  const spawnCount = Math.max(0, enemy?.deathSpawnHounds || 0);
  if (!spawnCount) return;
  for (let i = 0; i < spawnCount; i += 1) {
    const angle = (Math.PI * 2 * i) / spawnCount + rand(-0.08, 0.08);
    const radius = rand(enemy.radius + 26, enemy.radius + 84);
    const hound = makeEnemy("hound");
    hound.x = clamp(enemy.x + Math.cos(angle) * radius, 56, WORLD_W - 56);
    hound.y = clamp(enemy.y + Math.sin(angle) * radius, 56, WORLD_H - 56);
    hound.baseMaxHp *= 1.45;
    hound.maxHp = hound.baseMaxHp;
    hound.hp = hound.maxHp;
    hound.baseMaxShield = Math.max(220, hound.maxHp * 3.8);
    hound.maxShield = hound.baseMaxShield;
    hound.shield = hound.maxShield;
    hound.color = "#b59cff";
    hound.xp = Math.max(hound.xp, 4);
    hound.supportBuffed = true;
    state.enemies.push(hound);
  }
  burst(enemy.x, enemy.y, "#cab2ff", 18);
  floatingText(enemy.x, enemy.y - enemy.radius - 28, "Brood Released", "#e8dbff", 0.85);
}

function detonateHostileProjectile(shot) {
  if (!shot) return;
  const radius = shot.explosionRadius || Math.max(42, shot.radius * 4.5);
  const color = shot.explosionColor || shot.color || "#ffd08f";
  state.explosions.push({
    x: shot.x,
    y: shot.y,
    radius,
    life: 0.34,
    maxLife: 0.34,
    color,
  });
  burst(shot.x, shot.y, color, 14);

  if (distance(shot, state.player) > radius + state.player.radius) return;
  const elementalDamage = shot.effectType === "hack";
  const shieldDamage = shot.explosionDamage || shot.damage || 0;
  const hullDamage = shot.explosionHullDamage || shot.hullDamage || 0;
  if (hullDamage > 0) {
    hurtPlayerHullOnly(
      elementalDamage ? reduceIncomingElementalDamage(hullDamage, state.player) : hullDamage,
      shot.sourceEnemy
    );
  } else if (shieldDamage > 0) {
    hurtPlayerShieldOnly(
      elementalDamage ? reduceIncomingElementalDamage(shieldDamage, state.player) : shieldDamage,
      shot.sourceEnemy
    );
  }
  if (shot.effectType === "hack") {
    infectPlayerWithHack(shot.effectDuration || 3.5);
  }
}

function spawnWave(dt) {
  state.spawnClock -= dt;
  const threatTime = enemyThreatTimeValue();
  const activeCap = maxEnemyCount();
  let density = (0.72 + threatTime * 0.014) * difficultyMultiplier() * (1 + (rookiePressureMultiplier() - 1) * 0.6);
  density *= asteroidLowDifficultySpawnScale();
  if (state.time < 75) {
    density *= 0.75;
  }
  if (state.spawnClock <= 0) {
    const count = Math.min(Math.max(0, activeCap - state.enemies.length), 1 + Math.floor(threatTime / 22));
    for (let i = 0; i < count; i += 1) {
      state.enemies.push(makeEnemy(pickWeightedEnemyType(threatTime)));
    }
    state.reactorSpawnCounter += count;
    if (!asteroidRestrictedEnemyRoster() && threatTime > 185) {
      const reactorsToSpawn = Math.min(
        2,
        Math.floor(state.reactorSpawnCounter / 50),
        Math.max(0, activeCap - state.enemies.length)
      );
      for (let i = 0; i < reactorsToSpawn; i += 1) {
        state.enemies.push(makeEnemy("reactor"));
      }
      state.reactorSpawnCounter -= reactorsToSpawn * 50;
    }
    state.spawnClock = Math.max(0.15, 1 / density);
  }

  state.eliteClock -= dt;
  if (!asteroidRestrictedEnemyRoster() && state.time >= eliteSpawnStartTime() && state.eliteClock <= 0 && state.enemies.length < activeCap) {
    const eliteType = pickEliteEnemyType(threatTime);
    const elite = makeEnemy(eliteType);
    state.enemies.push(elite);
    if (eliteType === "leviathan") {
      state.leviathanSpawnCount += 1;
      playLeviathanApproachingWarningSfx();
    }
    state.eliteClock = Math.max(10, (28 - threatTime * 0.03) / Math.max(1, difficultyMultiplier() * 0.92));
    floatingText(state.player.x, state.player.y - 90, `${elite.displayName} inbound`, elite.color, 1.2);
  }
}

function getMoveVector() {
  let x = 0;
  let y = 0;
  let strength = 0;
  if (state.keys.has("w") || state.keys.has("arrowup")) y -= 1;
  if (state.keys.has("s") || state.keys.has("arrowdown")) y += 1;
  if (state.keys.has("a") || state.keys.has("arrowleft")) x -= 1;
  if (state.keys.has("d") || state.keys.has("arrowright")) x += 1;

  if (state.pointerActive) {
    x += state.pointerVector.x;
    y += state.pointerVector.y;
  }

  if (state.gamepad.connected) {
    x += state.gamepad.moveX;
    y += state.gamepad.moveY;
    strength = Math.max(strength, Math.hypot(state.gamepad.moveX, state.gamepad.moveY));
  }

  if (x === 0 && y === 0) {
    return { x: 0, y: 0, strength: 0, active: false };
  }
  const len = Math.hypot(x, y);
  return { x: x / len, y: y / len, strength: strength > 0 ? strength : 1, active: true };
}

function playerEnemySlowMultiplier() {
  if (!state.player) return 1;
  let multiplier = 1;
  for (const enemy of state.enemies) {
    if (enemy.alive === false || !enemy.playerSlowRadius) continue;
    if (distance(enemy, state.player) <= enemy.playerSlowRadius + state.player.radius) {
      multiplier = Math.min(multiplier, enemy.playerSlowMultiplier || 1);
    }
  }
  return multiplier;
}

function updatePlayer(dt) {
  const player = state.player;
  const move = applyPlayerControlModifiers(getMoveVector(), player);
  const enemySlowMultiplier = playerEnemySlowMultiplier();
  player.enemySlowMultiplier = enemySlowMultiplier;
  const currentSpeed = Math.hypot(player.vx, player.vy);
  const controlsDisabled = player.disabledTimer > 0;
  const keyboardBoost = state.keys.has("shiftleft") ? 1 : 0;
  const boostInput = Math.max(clamp(state.gamepad.boostAmount || 0, 0, 1), keyboardBoost);
  const boostRequested = !controlsDisabled && boostInput > 0.12 && (move.active || currentSpeed > 28);
  player.boostCooldown = Math.max(0, player.boostCooldown - dt);
  player.boosting = boostRequested && player.boostCharge > 0.2 && player.dashTimer <= 0 && player.boostCooldown <= 0;
  const boostStrength = player.boosting ? Math.max(0.35, boostInput) : 0;
  if (player.boosting) {
    player.boostCharge = Math.max(0, player.boostCharge - player.boostDrainRate * boostStrength * dt);
    if (player.boostCharge <= 0.05) {
      player.boostCharge = 0;
      player.boosting = false;
      player.boostCooldown = player.boostExhaustedCooldown;
    }
  } else if (player.boostCooldown <= 0) {
    player.boostCharge = Math.min(player.boostMax, player.boostCharge + player.boostRegenRate * dt);
  }
  const boostSpeedMultiplier = 1 + boostStrength * 0.78;
  const boostThrustMultiplier = 1 + boostStrength * 1.08;
  const maxSpeed = (player.speed + player.passives.swiftness * 20) * enemySlowMultiplier * boostSpeedMultiplier;
  const thrust = (player.thrustPower + player.passives.swiftness * 60) * enemySlowMultiplier * boostThrustMultiplier;
  const activeDrag = Math.exp(-dt * 4.4);
  const idleDrag = Math.exp(-dt * 14);
  player.thrusting = move.active;
  player.prevX = player.x;
  player.prevY = player.y;
  player.dashCooldown = Math.max(0, player.dashCooldown - dt);
  player.dashTimer = Math.max(0, player.dashTimer - dt);
  if (player.dashTimer > 0) {
    player.invuln = Math.max(player.invuln, player.dashTimer);
    player.dashRollPhase += dt * 34;
  }

  if (move.active) {
    player.vx += move.x * thrust * move.strength * dt;
    player.vy += move.y * thrust * move.strength * dt;
  }

  const drag = player.dashTimer > 0 ? 1 : move.active ? activeDrag : idleDrag;
  player.vx *= drag;
  player.vy *= drag;
  if (!move.active && Math.hypot(player.vx, player.vy) < 10) {
    player.vx = 0;
    player.vy = 0;
  }

  const velocityMagnitude = Math.hypot(player.vx, player.vy);
  if (velocityMagnitude > maxSpeed) {
    const scale = maxSpeed / velocityMagnitude;
    player.vx *= scale;
    player.vy *= scale;
  }

  player.x += player.vx * dt;
  player.y += player.vy * dt;

  const speedForFacing = Math.hypot(player.vx, player.vy);
  const aimingWithPad = Math.hypot(state.gamepad.aimX, state.gamepad.aimY) > 0.1;
  const movingWithPad = state.gamepad.connected && Math.hypot(state.gamepad.moveX, state.gamepad.moveY) > 0.14;
  const aimingWithMouse = state.pointerActive && Math.hypot(state.pointerVector.x, state.pointerVector.y) > 0.08;
  if (aimingWithPad) {
    player.facing = Math.atan2(state.gamepad.aimY, state.gamepad.aimX);
  } else if (aimingWithMouse) {
    player.facing = Math.atan2(state.pointerVector.y, state.pointerVector.x);
  } else if (movingWithPad) {
    player.facing = Math.atan2(state.gamepad.moveY, state.gamepad.moveX);
  } else if (speedForFacing > 18) {
    player.facing = Math.atan2(player.vy, player.vx);
  } else if (move.active) {
    player.facing = Math.atan2(move.y, move.x);
  }

  const targetRotation = player.facing + Math.PI / 2;
  player.rotation = targetRotation;
  const boostVisibleWhileRecharging = player.boostCharge < player.boostMax - 0.05;
  const boostUiTarget = player.boosting || player.boostCooldown > 0 || boostVisibleWhileRecharging ? 0.78 : 0;
  player.boostUiAlpha += (boostUiTarget - player.boostUiAlpha) * Math.min(1, dt * 8);
  const engineTarget = controlsDisabled
    ? 0
    : player.thrusting
    ? (player.boosting ? 1 : 0.72 + move.strength * 0.22)
    : 0;
  const engineResponse = engineTarget > player.engineOutput ? 12 : 3.2;
  player.engineOutput += (engineTarget - player.engineOutput) * Math.min(1, dt * engineResponse);
  if (player.engineOutput < 0.01) {
    player.engineOutput = 0;
  }
  player.enginePulse += dt * (player.thrusting ? (player.boosting ? 28 : 18) : 6);

  if (player.x < 48) {
    player.x = 48;
    player.vx *= 0.35;
  } else if (player.x > WORLD_W - 48) {
    player.x = WORLD_W - 48;
    player.vx *= 0.35;
  }

  if (player.y < 48) {
    player.y = 48;
    player.vy *= 0.35;
  } else if (player.y > WORLD_H - 48) {
    player.y = WORLD_H - 48;
    player.vy *= 0.35;
  }

  player.invuln = Math.max(0, player.invuln - dt);
  player.shieldRegenDelay = Math.max(0, player.shieldRegenDelay - dt);
  player.disabledTimer = Math.max(0, player.disabledTimer - dt);
  player.hackInfectionTimer = Math.max(0, (player.hackInfectionTimer || 0) - dt);

  player.regenTick += dt;
  if (player.regenTick >= 1) {
    player.regenTick -= 1;
    if (player.hullRegen > 0) {
      player.hp = Math.min(player.maxHp, player.hp + player.hullRegen);
    }
    if (player.passives.recovery > 0 && player.maxShield > 0) {
      player.shield = Math.min(player.maxShield, player.shield + player.passives.recovery);
    }
  }

  if (player.maxShield > 0 && player.shieldRegenDelay <= 0) {
    player.shield = Math.min(player.maxShield, player.shield + player.shieldRegenRate * dt);
  }

  updateShieldDepletedWarning(player);
  updateHullCriticalWarning(player);
}

function updatePlayerDeathSequence(dt) {
  const player = state.player;
  const death = player?.deathSequence;
  if (!player || !death?.active) return;

  player.prevX = player.x;
  player.prevY = player.y;
  player.vx *= Math.exp(-dt * 2.4);
  player.vy *= Math.exp(-dt * 2.4);
  player.x += player.vx * dt;
  player.y += player.vy * dt;
  player.enginePulse += dt * 5.2;
  player.engineOutput = Math.max(0, player.engineOutput - dt * 0.34);
  death.time += dt;

  if (!death.burstTriggered && death.time >= PLAYER_DEATH_BURST_TIME) {
    death.burstTriggered = true;
    spawnVisualExplosion(player.x, player.y, 102, "#ff8b72", 0.9);
    spawnVisualExplosion(player.x, player.y, 58, "#fff2d8", 0.62);
    floatingText(player.x, player.y - 62, "SHIP LOST", "#fff0f0", 1.45, {
      scale: 1.28,
      weight: 900,
      shadowColor: "#ff7f7f",
      shadowBlur: 22,
    });
  }

  if (death.burstTriggered) {
    for (const piece of death.pieces) {
      piece.x += piece.vx * dt;
      piece.y += piece.vy * dt;
      piece.vx *= Math.exp(-dt * 0.68);
      piece.vy *= Math.exp(-dt * 0.68);
      piece.angle += piece.spin * dt;
    }
  }

  if (death.time >= PLAYER_DEATH_SEQUENCE_TIME) {
    death.active = false;
    death.hidden = true;
    player.engineOutput = 0;
    if (state.pendingRunSummary) {
      const summary = state.pendingRunSummary;
      state.pendingRunSummary = null;
      showRunSummary(summary);
    }
  }
}

function nearestEnemy(maxDistance = Infinity) {
  let best = null;
  let bestDistance = maxDistance;
  for (const enemy of state.enemies) {
    const d = distance(state.player, enemy);
    if (d < bestDistance) {
      bestDistance = d;
      best = enemy;
    }
  }
  return best;
}

function nearestEnemyFrom(point, maxDistance = Infinity, exclude = null) {
  let best = null;
  let bestDistance = maxDistance;
  for (const enemy of state.enemies) {
    if (enemy.alive === false || enemy === exclude) continue;
    const d = distance(point, enemy);
    if (d < bestDistance) {
      bestDistance = d;
      best = enemy;
    }
  }
  return best;
}

function orbitPoints(centerX, centerY, count, radius, phase) {
  const points = [];
  for (let i = 0; i < count; i += 1) {
    const angle = phase + (Math.PI * 2 * i) / count;
    points.push({
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
      angle,
    });
  }
  return points;
}

function orbitBladeAngularSpeed(level) {
  const earlyLevels = Math.min(8, level);
  const lateLevels = Math.max(0, level - 8);
  return 1.5 + earlyLevels * 0.14 + Math.log1p(lateLevels) * 0.26;
}

function orbitBladeCount(level) {
  if (level <= 0) return 0;
  return Math.min(14, 2 + Math.floor(level));
}

function orbitBladeRadius(level) {
  if (level <= 0) return 68;
  return Math.min(126, 66 + level * 4);
}

function droneFormationProfile(player) {
  const orbitLevel = player?.weapons?.orbitBlades?.level || 0;
  const combatCount = orbitBladeCount(orbitLevel);
  const combatRadius = orbitLevel > 0 ? orbitBladeRadius(orbitLevel) : 68;
  const combatAngularSpeed = orbitBladeAngularSpeed(orbitLevel);
  const basePhase = combatCount > 0 ? player.weapons.orbitBlades.angle : player.droneOrbit;
  return { combatCount, combatRadius, combatAngularSpeed, basePhase };
}

function supportDronePoints(player, kind) {
  const { combatCount, combatRadius, basePhase } = droneFormationProfile(player);

  if (kind === "missile") {
    const count = player.droneMissileCount || 0;
    if (count <= 0) return [];
    const radius = combatCount > 0 ? combatRadius + 28 : 84;
    const phase = combatCount > 0
      ? player.droneOrbit + Math.PI / combatCount
      : player.droneOrbit;
    return orbitPoints(player.x, player.y, count, radius, phase);
  }

  if (kind === "shield") {
    const count = player.shieldProjectorCount || 0;
    if (count <= 0) return [];
    const radius = combatCount > 0 ? Math.max(40, combatRadius - 24) : 40;
    const phase = combatCount > 0
      ? basePhase + Math.PI / combatCount + Math.PI / Math.max(count, 1)
      : basePhase + Math.PI / Math.max(count, 1);
    return orbitPoints(player.x, player.y, count, radius, phase);
  }

  return [];
}

function applyFreeze(enemy, duration = 1.2) {
  if (!enemy || enemy.alive === false) return;
  enemy.freezeTimer = Math.max(enemy.freezeTimer || 0, duration);
  floatingText(enemy.x, enemy.y - enemy.radius - 18, "Freeze", "#b7ecff", 0.4);
}

function shatterEnemy(enemy) {
  if (!enemy || enemy.alive === false) return;
  floatingText(enemy.x, enemy.y - enemy.radius - 22, "Shatter", "#e7fbff", 0.55);
  damageEnemy(enemy, enemy.hp + enemy.shield + 1, "#e7fbff", { allowAugments: false, ignoreRadiation: true });
  burst(enemy.x, enemy.y, "#dff7ff", 12);
}

function applyBurn(enemy, damagePerTick, duration = 1.5) {
  if (!enemy || enemy.alive === false) return;
  enemy.burnTimer = Math.max(enemy.burnTimer || 0, duration);
  enemy.burnTick = Math.min(enemy.burnTick || 0.5, 0.5);
  enemy.burnDamage = Math.max(enemy.burnDamage || 0, damagePerTick);
}

function applyEmp(enemy, duration = 0.5) {
  if (!enemy || enemy.alive === false) return;
  enemy.empTimer = Math.max(enemy.empTimer || 0, duration);
  floatingText(enemy.x, enemy.y - enemy.radius - 18, "EMP", "#8af6ff", 0.38);
}

function applyRadiation(enemy, duration = 5, multiplier = 1.3) {
  if (!enemy || enemy.alive === false) return;
  enemy.radiationTimer = Math.max(enemy.radiationTimer || 0, duration);
  enemy.radiationMultiplier = Math.max(enemy.radiationMultiplier || 1, multiplier);
  floatingText(enemy.x, enemy.y - enemy.radius - 18, "Radiated", "#b8ff6f", 0.42);
}

function applyHack(enemy, duration = 4) {
  if (!enemy || enemy.alive === false) return;
  enemy.hackTimer = Math.max(enemy.hackTimer || 0, duration);
  enemy.hackContactCooldown = Math.min(enemy.hackContactCooldown || 0, 0.05);
  floatingText(enemy.x, enemy.y - enemy.radius - 18, "Hacked", "#8dffb5", 0.42);
}

function playerElementalResistanceValue(player = state.player) {
  return clamp(player?.elementalResistance || 0, 0, 0.65);
}

function rollPlayerElementalAffliction(baseChance = 1, player = state.player) {
  return Math.random() < clamp(baseChance * (1 - playerElementalResistanceValue(player)), 0, 1);
}

function reduceIncomingElementalDamage(amount, player = state.player) {
  return amount * (1 - playerElementalResistanceValue(player));
}

function playerElementalProcChance(baseChance = ELEMENTAL_PROC_CHANCE, player = state.player) {
  return clamp(baseChance * (player?.elementalProcChanceMultiplier || 1), 0, 0.95);
}

function infectPlayerWithHack(duration = 3.5) {
  const player = state.player;
  if (!player) return;
  if (!rollPlayerElementalAffliction(1, player)) return;
  player.hackInfectionTimer = Math.max(player.hackInfectionTimer || 0, duration);
  player.controlsInverted = true;
  player.hackZoneActive = true;
  burst(player.x, player.y, "#d2a7ff", 10);
  floatingText(player.x, player.y - 52, "HACKED", "#efceff", 0.68);
}

function spawnVoidSingularity(x, y, baseDamage, durationMultiplier = 1) {
  const life = 2.8 * Math.max(1, durationMultiplier);
  const existing = state.hazards.find(hazard =>
    (hazard.kind || "") === "void" &&
    Math.hypot(hazard.x - x, hazard.y - y) <= 96
  );
  if (existing) {
    existing.life = Math.max(existing.life, existing.maxLife || life);
    existing.maxLife = Math.max(existing.maxLife || life, life);
    existing.damage = Math.max(existing.damage, Math.max(4, baseDamage * 0.28));
    return;
  }
  state.hazards.push({
    kind: "void",
    x,
    y,
    radius: 76,
    life,
    maxLife: life,
    tick: 0.2,
    damage: Math.max(4, baseDamage * 0.28),
    pullStrength: 300,
  });
  burst(x, y, "#b69eff", 14);
}

function reflectDamageToSource(source, amount) {
  if (!source || source.alive === false || typeof source.hp !== "number" || amount <= 0) return;
  damageEnemy(source, amount, "#8af6ff", { allowAugments: false });
}

function triggerChainLightning(originEnemy, amount, maxJumps = 5, falloff = 1, empDuration = 0.5) {
  if (!originEnemy || amount <= 0) return;
  let current = originEnemy;
  let chainDamage = amount;
  const visited = new Set([originEnemy]);

  for (let jump = 0; jump < maxJumps && chainDamage > 0.75; jump += 1) {
    const target = state.enemies
      .filter(enemy => enemy.alive !== false && !visited.has(enemy) && distance(enemy, current) <= 180)
      .sort((a, b) => distance(a, current) - distance(b, current))[0];
    if (!target) break;
    visited.add(target);
    damageEnemy(target, chainDamage, "#8af6ff", { allowAugments: false });
    applyEmp(target, empDuration);
    burst(target.x, target.y, "#8af6ff", 6);
    current = target;
    chainDamage *= falloff;
  }
}

function spawnFragmentField(x, y, damage) {
  for (let i = 0; i < 5; i += 1) {
    const angle = rand(0, Math.PI * 2);
    const radius = rand(18, 44);
    state.hazards.push({
      kind: "fragment",
      x: x + Math.cos(angle) * radius,
      y: y + Math.sin(angle) * radius,
      radius: 14,
      life: 3.6,
      maxLife: 3.6,
      tick: 0.2,
      damage,
    });
  }
}

function triggerExplosion(x, y, damage, radius, options = {}) {
  if (damage <= 0) return;
  state.explosions.push({
    x,
    y,
    radius,
    life: 0.32,
    maxLife: 0.32,
    color: options.color || "#ffb067",
  });
  for (const enemy of state.enemies) {
    if (enemy.alive === false) continue;
    if (Math.hypot(enemy.x - x, enemy.y - y) <= radius + enemy.radius) {
      damageEnemy(enemy, damage, options.color || "#ffb067", { allowAugments: false });
    }
  }
  if (state.player.shrapnelBurst || options.forceShrapnel) {
    spawnFragmentField(x, y, damage * 0.4);
  }
  burst(x, y, options.color || "#ffb067", 14);
}

function spawnVisualExplosion(x, y, radius, color = "#ffb067", life = 0.32) {
  state.explosions.push({
    x,
    y,
    radius,
    life,
    maxLife: life,
    color,
  });
  burst(x, y, color, Math.max(10, Math.round(radius / 5)));
}

function handleElementalAugments(enemy, source = {}) {
  const player = state.player;
  if (!enemy || enemy.alive === false || !player) return;
  if (!canUseElementalAugments(source.systemType || "", player)) return;

  const baseDamage = Math.max(1, source.baseDamage || source.amount || 1);
  const elementalProcChance = playerElementalProcChance(ELEMENTAL_PROC_CHANCE, player);
  const elementalDamageMultiplier = player.elementalDamageMultiplier || 1;
  const elementalDurationMultiplier = player.elementalDurationMultiplier || 1;
  const cryoChance = clamp((player.cryoPayloadChance || 0) * (player.elementalProcChanceMultiplier || 1), 0, 0.95);

  if (player.chainLightningArray && Math.random() < elementalProcChance) {
    const empDuration = 0.5 * elementalDurationMultiplier;
    applyEmp(enemy, empDuration);
    triggerChainLightning(enemy, baseDamage * 0.48 * elementalDamageMultiplier, 5, 0.72, empDuration);
  }

  if (player.thermalWarheads && Math.random() < elementalProcChance) {
    applyBurn(enemy, Math.max(1, enemy.maxHp * 0.04 * elementalDamageMultiplier), 2 * elementalDurationMultiplier);
  }

  if (player.radiationPayload && Math.random() < elementalProcChance) {
    applyRadiation(enemy, 5 * elementalDurationMultiplier, 1 + 0.3 * elementalDamageMultiplier);
  }

  if (cryoChance > 0 && Math.random() < cryoChance) {
    if ((enemy.freezeTimer || 0) > 0 && Math.random() < 0.5) {
      shatterEnemy(enemy);
      if (enemy.alive === false) return;
    } else {
      applyFreeze(enemy, 1.2 * elementalDurationMultiplier);
    }
  }

  if (player.voidSingularity && Math.random() < elementalProcChance) {
    spawnVoidSingularity(enemy.x, enemy.y, baseDamage * elementalDamageMultiplier, elementalDurationMultiplier);
  }

  if (player.hackProtocol && Math.random() < elementalProcChance) {
    applyHack(enemy, 4 * elementalDurationMultiplier);
  }
}

function handleDirectHitAugments(shot, enemy, amount) {
  if (!shot || !enemy || amount <= 0) return;
  handleElementalAugments(enemy, {
    amount,
    baseDamage: shot.baseDamage || amount,
    systemType: shot.systemType || "",
  });
  if (shot.explosiveChance > 0 && Math.random() < shot.explosiveChance) {
    triggerExplosion(enemy.x, enemy.y, shot.baseDamage * 0.55, 62, { color: "#ffb067" });
  }
}

function applyPlayerWeaponHit(enemy, amount, color, source = {}) {
  if (!enemy || enemy.alive === false || amount <= 0) return { dealt: 0, crit: false };
  const result = source.noCrit
    ? { amount, crit: false }
    : rollPlayerCrit(amount, source.critChance || 0);
  const dealt = damageEnemy(enemy, result.amount, result.crit ? "#fff0a6" : color, {
    allowAugments: false,
    highlightDamage: Boolean(result.crit || source.highlightDamage),
  });
  if (dealt > 0 && source.procAugments !== false) {
    handleElementalAugments(enemy, {
      amount: dealt,
      baseDamage: source.baseDamage || amount,
      systemType: source.systemType || "",
    });
  }
  return { dealt, crit: result.crit };
}

function fireDroneMissiles() {
  const player = state.player;
  if (!player.droneMissilePods || player.droneMissileCount <= 0) return;
  const points = supportDronePoints(player, "missile");
  const rocketDamage = (14 + primaryWeaponLevel(player) * 5) * player.attackDamageMultiplier * 0.4;
  for (const point of points) {
    const target = nearestEnemyFrom(point, 1000);
    if (!target) continue;
    const angle = Math.atan2(target.y - point.y, target.x - point.x);
    state.projectiles.push({
      kind: "rocket",
      x: point.x,
      y: point.y,
      radius: 6,
      vx: Math.cos(angle) * 320,
      vy: Math.sin(angle) * 320,
      speed: 320,
      life: 3.2,
      damage: rocketDamage,
      baseDamage: rocketDamage,
      pierce: 0,
      pierceDamageMultiplier: 1,
      hitEnemies: new Set(),
      critChance: 0,
      color: "#ff8f68",
      hostile: false,
      systemType: "advanced",
      homing: true,
      target,
      missile: true,
      explosionRadius: 72,
      chainLightning: false,
      cryoChance: 0,
      explosiveChance: 0,
    });
  }
}

function spawnOrbitalStrike() {
  const player = state.player;
  const target = nearestEnemy(1200);
  if (!target) return;
  state.orbitalStrikes.push({
    x: target.x,
    y: target.y,
    delay: 0.8,
    radius: 84,
    damage: (28 + primaryWeaponLevel(player) * 4 + player.weapons.novaPulse.level * 10) * player.attackDamageMultiplier,
    color: "#8af6ff",
  });
}

function updateAugmentSystems(dt) {
  const player = state.player;
  const formation = droneFormationProfile(player);
  const missileRadius = formation.combatCount > 0 ? formation.combatRadius + 28 : 84;
  const missileTangentialSpeed = formation.combatRadius * formation.combatAngularSpeed;
  const missileAngularSpeed = formation.combatCount > 0
    ? missileTangentialSpeed / missileRadius
    : 1.5;
  player.droneOrbit += dt * missileAngularSpeed;
  player.adaptiveCooldown = Math.max(0, player.adaptiveCooldown - dt);
  player.gravityPulseFlash = Math.max(0, player.gravityPulseFlash - dt * 2.6);

  if (player.droneMissilePods) {
    player.droneMissileClock -= dt;
    if (player.droneMissileClock <= 0) {
      fireDroneMissiles();
      player.droneMissileClock = 5;
    }
  }

  if (player.orbitalStrikeModule) {
    player.orbitalStrikeClock -= dt;
    if (player.orbitalStrikeClock <= 0) {
      spawnOrbitalStrike();
      player.orbitalStrikeClock = Math.max(4.8, 7 / player.attackSpeedMultiplier);
    }
  }

  if (player.gravityShield) {
    player.gravityPulseClock -= dt;
    if (player.gravityPulseClock <= 0) {
      for (const enemy of state.enemies) {
        if (enemy.alive === false) continue;
        if (distance(enemy, player) <= player.slowFieldRadius + 36) {
          enemy.gravitySlowTimer = Math.max(enemy.gravitySlowTimer || 0, 10);
        }
      }
      player.gravityPulseFlash = 0.95;
      player.gravityPulseClock = 10;
      burst(player.x, player.y, "#b69eff", 18);
    }
  }

  if (player.shockBarrier) {
    player.shockBarrierTick -= dt;
    if (player.shockBarrierTick <= 0) {
      player.shockBarrierTick += 0.25;
      for (const enemy of state.enemies) {
        if (enemy.alive === false) continue;
        if (distance(enemy, player) <= player.shockBarrierRadius + enemy.radius) {
          damageEnemy(enemy, player.shockBarrierDps * 0.25, "#79ffd4", { allowAugments: false });
        }
      }
    }
  }

  const nextExplosions = [];
  for (const explosion of state.explosions) {
    explosion.life -= dt;
    if (explosion.life > 0) nextExplosions.push(explosion);
  }
  state.explosions = nextExplosions;

  const nextHazards = [];
  for (const hazard of state.hazards) {
    hazard.life -= dt;
    hazard.tick -= dt;
    if ((hazard.kind || "fragment") === "void") {
      const readyToTick = hazard.tick <= 0;
      if (readyToTick) {
        hazard.tick += 0.2;
      }
      for (const enemy of state.enemies) {
        if (enemy.alive === false) continue;
        const d = distance(enemy, hazard);
        if (d > hazard.radius + enemy.radius) continue;
        const pullRatio = 1 - clamp(d / Math.max(1, hazard.radius + enemy.radius), 0, 1);
        const pullAngle = Math.atan2(hazard.y - enemy.y, hazard.x - enemy.x);
        enemy.x += Math.cos(pullAngle) * hazard.pullStrength * pullRatio * dt;
        enemy.y += Math.sin(pullAngle) * hazard.pullStrength * pullRatio * dt;
        if (readyToTick) {
          damageEnemy(enemy, hazard.damage, "#b69eff", { allowAugments: false });
        }
      }
    } else if (hazard.tick <= 0) {
      hazard.tick += 0.2;
      for (const enemy of state.enemies) {
        if (enemy.alive === false) continue;
        if (distance(enemy, hazard) <= hazard.radius + enemy.radius) {
          damageEnemy(enemy, hazard.damage, "#ffc980", { allowAugments: false });
        }
      }
    }
    if (hazard.life > 0) nextHazards.push(hazard);
  }
  state.hazards = nextHazards;

  const nextOrbitalStrikes = [];
  for (const strike of state.orbitalStrikes) {
    strike.delay -= dt;
    if (strike.delay <= 0) {
      triggerExplosion(strike.x, strike.y, strike.damage, strike.radius, {
        color: strike.color,
        applyBurn: true,
      });
    } else {
      nextOrbitalStrikes.push(strike);
    }
  }
  state.orbitalStrikes = nextOrbitalStrikes;
}

function spawnLootCrate(x, y) {
  const baseHue = pickOne(planetHuePresets);
  state.crates.push({
    x: clamp(x, 72, WORLD_W - 72),
    y: clamp(y, 72, WORLD_H - 72),
    radius: 19,
    bob: rand(0, Math.PI * 2),
    hue: (baseHue + rand(-14, 14) + 360) % 360,
    saturation: rand(1.08, 1.4),
    brightness: rand(0.96, 1.14),
  });
}

function unlockRandomAugmentReward() {
  const locked = Object.keys(augmentDefs).filter(id => !augmentUnlocked(id) && !augmentRequirementLocked(id));
  if (!locked.length) return null;
  const id = locked[Math.floor(Math.random() * locked.length)];
  state.meta.unlockedAugments = [...state.meta.unlockedAugments, id];
  saveMetaProgression();
  renderMetaUpgrades();
  return augmentDefs[id];
}

function grantFreeLevel() {
  if (!state.player) return;
  state.player.level += 1;
  state.player.nextXp = runXpCurve(state.player.level);
  if (voyageUpgradeMenuActive()) {
    renderVoyageUpgradesMenu();
  }
  syncHud();
  syncGamepadFocus();
}

function grantFreeLevels(count = 1) {
  const total = Math.max(1, Math.floor(count));
  if (!state.player) return;
  state.player.level += total;
  state.player.nextXp = runXpCurve(state.player.level);
  statusText.textContent = total === 1
    ? `${formatVersionLabel(state.player.level)} reached. Open Voyage Upgrades with Tab / Y to spend Scrap.`
    : `${total} versions recovered. Open Voyage Upgrades with Tab / Y to spend Scrap.`;
  floatingText(state.player.x, state.player.y - 64, `+${total} Ver.`, "#8af6ff", 0.75);
  if (voyageUpgradeMenuActive()) {
    renderVoyageUpgradesMenu();
  }
  syncHud();
  syncGamepadFocus();
}

function randomPlanetProfile() {
  return pickOne(planetProfiles);
}

function buildPlanetDiscoveryNarrative(profile, reward) {
  const intro = pickOne(planetIntroVariants)(profile);
  const outro = pickOne(planetOutroVariants)(profile, reward);

  if (reward.kind === "augment") {
    return `${intro}\n\n${pickOne(planetAugmentFindings)({ profile, reward })}\n\n${outro}`;
  }

  if (reward.kind === "credits") {
    return `${intro}\n\n${pickOne(planetCreditFindings)({ profile, reward })}\n\n${outro}`;
  }

  if (reward.kind === "scrap") {
    return `${intro}\n\n${pickOne(planetScrapFindings)({ profile, reward })}\n\n${outro}`;
  }

  return `${intro}\n\nA rapid sweep of ${profile.salvageSite} turns up enough useful materiel to make the landing worthwhile before you return to orbit.\n\n${outro}`;
}

function openLootCrate(crate) {
  const profile = randomPlanetProfile();
  const augmentChance = Math.min(0.6, 0.25 * state.player.augmentFindMultiplier);
  const roll = Math.random();
  let popupTitle = `${profile.name} Explored`;
  let popupBody = "";
  let pendingReward = { statusText: `Flight active. ${profile.name} logged and your haul secured.` };
  if (roll < augmentChance) {
    const augment = unlockRandomAugmentReward();
    if (augment) {
      state.runStats.augments.push(`Recovered ${augment.name}`);
      burst(crate.x, crate.y, "#8af6ff", 18);
      popupBody = buildPlanetDiscoveryNarrative(profile, {
        kind: "augment",
        augmentName: augment.name,
      });
      showPlanetDiscoveryPopup(popupTitle, popupBody, pendingReward);
      return;
    }
  }

  if (roll < augmentChance + 0.3) {
    const credits = clamp(Math.ceil(rand(3000, 7000) * state.player.goldMultiplier), 3000, 10000);
    state.gold += credits;
    burst(crate.x, crate.y, "#ffd166", 16);
    popupBody = buildPlanetDiscoveryNarrative(profile, {
      kind: "credits",
      amount: credits,
    });
    showPlanetDiscoveryPopup(popupTitle, popupBody, pendingReward);
    return;
  }

  if (roll < augmentChance + 0.52) {
    const scrap = Math.round(rand(PLANET_SCRAP_REWARD_MIN, PLANET_SCRAP_REWARD_MAX));
    state.player.scrap = (state.player.scrap || 0) + scrap;
    state.runStats.scrapRecovered += scrap;
    burst(crate.x, crate.y, "#9eeeff", 16);
    popupBody = buildPlanetDiscoveryNarrative(profile, {
      kind: "scrap",
      amount: scrap,
    });
    pendingReward = { statusText: `Flight active. ${profile.name} yielded ${scrap} Scrap.` };
    showPlanetDiscoveryPopup(popupTitle, popupBody, pendingReward);
    return;
  }

  const scrap = Math.round(rand(PLANET_SCRAP_REWARD_MIN, PLANET_SCRAP_REWARD_MAX));
  state.player.scrap = (state.player.scrap || 0) + scrap;
  state.runStats.scrapRecovered += scrap;
  burst(crate.x, crate.y, "#9eeeff", 16);
  popupBody = buildPlanetDiscoveryNarrative(profile, {
    kind: "scrap",
    amount: scrap,
  });
  pendingReward = { statusText: `Flight active. ${profile.name} yielded ${scrap} Scrap.` };
  showPlanetDiscoveryPopup(popupTitle, popupBody, pendingReward);
}

function updateLootCrates(dt) {
  if (!state.player) return;

  state.crateClock -= dt;
  while (state.crateClock <= 0 && state.planetSpawnCount < PLANET_SPAWN_CAP) {
    state.crateClock += PLANET_SPAWN_INTERVAL;
    if (Math.random() < planetSpawnChance()) {
      spawnLootCrate(
        state.player.x + rand(-320, 320),
        state.player.y + rand(-220, 220)
      );
      state.planetSpawnCount += 1;
    }
  }
  if (state.planetSpawnCount >= PLANET_SPAWN_CAP) {
    state.crateClock = PLANET_SPAWN_INTERVAL;
  }

  const next = [];
  for (const crate of state.crates) {
    crate.bob += dt * 2.5;
    if (distance(crate, state.player) <= crate.radius + state.player.radius + 8) {
      openLootCrate(crate);
      continue;
    }
    next.push(crate);
  }
  state.crates = next;
}

function activeVentariZoneCount() {
  const difficulty = state.currentRun.difficulty;
  if (difficulty >= 5) return 3;
  if (difficulty >= 3) return 2;
  return 1;
}

function ventariZoneRadius(zone) {
  const progress = clamp(1 - zone.life / zone.maxLife, 0, 1);
  return zone.radius * Math.max(0, Math.sin(progress * Math.PI));
}

function spawnVentariZone() {
  if (!state.player || !ventariVoyageActive()) return;
  const player = state.player;
  const types = ["emp", "radiation", "solar", "hack"];
  const type = types[Math.floor(Math.random() * types.length)];
  const angle = rand(0, Math.PI * 2);
  const travel = rand(240, 600);
  const radius = {
    emp: rand(188, 248),
    radiation: rand(236, 304),
    solar: rand(208, 276),
    hack: rand(192, 256),
  }[type];
  const duration = rand(7.8, 11.6);
  const x = clamp(player.x + Math.cos(angle) * travel, radius + 80, WORLD_W - radius - 80);
  const y = clamp(player.y + Math.sin(angle) * travel, radius + 80, WORLD_H - radius - 80);

  state.voyageZones.push({
    type,
    x,
    y,
    radius,
    life: duration,
    maxLife: duration,
    phase: rand(0, Math.PI * 2),
    triggerCooldown: rand(0.3, 0.85),
  });

  floatingText(player.x, player.y - 110, "DANGER ZONE INBOUND", VENTARI_ZONE_DEFS[type].edge, 0.95);
}

function updateVoyageZones(dt) {
  const player = state.player;
  if (!player) return;

  player.radiationZoneTimer = Math.max(0, (player.radiationZoneTimer || 0) - dt);
  player.controlsInverted = (player.hackInfectionTimer || 0) > 0;
  player.zoneDamageMultiplier = player.radiationZoneTimer > 0 ? 1.5 : 1;
  player.radiationZoneActive = player.radiationZoneTimer > 0;
  player.solarZoneActive = false;
  player.hackZoneActive = player.controlsInverted;

  if (!ventariVoyageActive()) {
    state.voyageZones = [];
    return;
  }

  state.voyageZoneClock -= dt;
  if (state.voyageZones.length < activeVentariZoneCount() && state.voyageZoneClock <= 0) {
    spawnVentariZone();
    state.voyageZoneClock = ventariZoneSpawnDelay();
  }

  const next = [];
  for (const zone of state.voyageZones) {
    zone.life -= dt;
    zone.triggerCooldown = Math.max(0, zone.triggerCooldown - dt);
    if (zone.life <= 0) continue;
    const currentRadius = ventariZoneRadius(zone);
    if (currentRadius <= 4) {
      next.push(zone);
      continue;
    }

    if (distance(zone, player) <= currentRadius + player.radius) {
      if (zone.type === "emp") {
        if (zone.triggerCooldown <= 0) {
          if (rollPlayerElementalAffliction(1, player)) {
            player.disabledTimer = Math.max(player.disabledTimer, 1);
            player.boosting = false;
            burst(player.x, player.y, "#77dbff", 14);
            floatingText(player.x, player.y - 52, "EMP DISRUPTION", "#9deaff", 0.72);
          }
          zone.triggerCooldown = 2.8;
        }
      } else if (zone.type === "radiation") {
        if (zone.triggerCooldown <= 0) {
          if (rollPlayerElementalAffliction(1, player)) {
            player.radiationZoneTimer = Math.max(player.radiationZoneTimer, 5);
            player.zoneDamageMultiplier = Math.max(player.zoneDamageMultiplier, 1.5);
            player.radiationZoneActive = true;
          }
          zone.triggerCooldown = 1;
        }
      } else if (zone.type === "solar") {
        player.solarZoneActive = true;
        if (zone.triggerCooldown <= 0) {
          hurtPlayer(reduceIncomingElementalDamage(Math.max(4, player.maxHp * 0.03), player));
          zone.triggerCooldown = 0.45;
        }
      } else if (zone.type === "hack") {
        if (zone.triggerCooldown <= 0) {
          infectPlayerWithHack(1.1);
          zone.triggerCooldown = 0.9;
        }
      }
    }

    next.push(zone);
  }

  state.voyageZones = next;
}

function spawnAsteroidHazard() {
  if (!state.player || !asteroidHazardsEnabled()) return;
  const side = Math.floor(Math.random() * 4);
  const margin = 180;
  const player = state.player;
  const playerTrackX = clamp(player.x + rand(-260, 260), 120, WORLD_W - 120);
  const playerTrackY = clamp(player.y + rand(-220, 220), 120, WORLD_H - 120);

  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;

  if (side === 0) {
    startX = -margin;
    startY = playerTrackY;
    endX = WORLD_W + margin;
    endY = clamp(playerTrackY + rand(-180, 180), 120, WORLD_H - 120);
  } else if (side === 1) {
    startX = WORLD_W + margin;
    startY = playerTrackY;
    endX = -margin;
    endY = clamp(playerTrackY + rand(-180, 180), 120, WORLD_H - 120);
  } else if (side === 2) {
    startX = playerTrackX;
    startY = -margin;
    endX = clamp(playerTrackX + rand(-220, 220), 120, WORLD_W - 120);
    endY = WORLD_H + margin;
  } else {
    startX = playerTrackX;
    startY = WORLD_H + margin;
    endX = clamp(playerTrackX + rand(-220, 220), 120, WORLD_W - 120);
    endY = -margin;
  }

  const dx = endX - startX;
  const dy = endY - startY;
  const len = Math.hypot(dx, dy) || 1;
  const radius = rand(28, 44);
  const speed = rand(360, 520) * (1 + (state.currentRun.difficulty - ASTEROID_DAMAGE_START_DIFFICULTY) * 0.12);
  const rotationSpeed = rand(-2.4, 2.4);

  state.asteroids.push({
    x: startX,
    y: startY,
    vx: dx / len * speed,
    vy: dy / len * speed,
    radius,
    rotation: rand(0, Math.PI * 2),
    rotationSpeed,
    damage: Math.round(70 + (state.currentRun.difficulty - ASTEROID_DAMAGE_START_DIFFICULTY) * 18),
    impactCooldown: 0,
  });

  floatingText(player.x, player.y - 110, "ASTEROID INBOUND", "#ffd08f", 0.9);
}

function updateAsteroids(dt) {
  if (!state.player) return;

  if (asteroidHazardsEnabled()) {
    state.asteroidClock -= dt;
    if (state.asteroidClock <= 0) {
      spawnAsteroidHazard();
      state.asteroidClock = asteroidSpawnDelay();
    }
  }

  const next = [];
  for (const asteroid of state.asteroids) {
    asteroid.x += asteroid.vx * dt;
    asteroid.y += asteroid.vy * dt;
    asteroid.rotation += asteroid.rotationSpeed * dt;
    asteroid.impactCooldown = Math.max(0, asteroid.impactCooldown - dt);

    if (asteroid.impactCooldown <= 0 && distance(asteroid, state.player) <= asteroid.radius + state.player.radius) {
      hurtPlayer(asteroid.damage, asteroid);
      asteroid.impactCooldown = 0.65;
      burst(asteroid.x, asteroid.y, "#ffd08f", 16);
    }

    const offscreenMargin = 260;
    if (
      asteroid.x < -offscreenMargin ||
      asteroid.y < -offscreenMargin ||
      asteroid.x > WORLD_W + offscreenMargin ||
      asteroid.y > WORLD_H + offscreenMargin
    ) {
      continue;
    }
    next.push(asteroid);
  }
  state.asteroids = next;
}

function fireEmberBolt() {
  const player = state.player;
  const level = player.weapons.emberBolt.level;
  if (level <= 0) return;
  const target = nearestEnemy(900);
  if (!target && !player.novaLauncher) return;

  const projectileCount = 1 + (level >= 3 ? 1 : 0) + (level >= 7 ? 1 : 0) + player.extraAttacks;
  const pierce = (level >= 4 ? 1 : 0) + player.hubPierce + player.passives.piercingRounds;
  const critChance = level >= 8 ? 0.18 : 0;
  const baseDamage = (14 + level * 5) * player.attackDamageMultiplier * player.photonLanceDamageMultiplier;
  const rangeMultiplier = player.rangeMultiplier + player.passives.weaponRange * 0.12;
  const pierceDamageMultiplier = Math.min(0.9, player.pierceDamageFloor + player.passives.piercingRounds * 0.08);
  const baseAngle = target ? Math.atan2(target.y - player.y, target.x - player.x) : player.facing;
  const volleyRepeats = player.dualBarrelChance > 0 && Math.random() < player.dualBarrelChance ? 2 : 1;
  const radialCount = Math.max(8, projectileCount * 3 + 2);

  playPlayerFireSfx();

  for (let volley = 0; volley < volleyRepeats; volley += 1) {
    const sideOffset = volleyRepeats === 2 ? (volley === 0 ? -10 : 10) : 0;
    const offsetX = Math.cos(baseAngle + Math.PI / 2) * sideOffset;
    const offsetY = Math.sin(baseAngle + Math.PI / 2) * sideOffset;

    const fireShot = (angle) => {
      let damage = baseDamage;
      let shotPierce = pierce;
      let speed = 440 + level * 18;
      let radius = 6;
      let color = "#ffb067";
      let highlightDamage = false;

      if (player.laserAmplifierChance > 0 && Math.random() < player.laserAmplifierChance) {
        damage *= 2;
        color = "#ffd78b";
        highlightDamage = true;
      }
      if (player.railAcceleratorChance > 0 && Math.random() < player.railAcceleratorChance) {
        damage *= 2;
        shotPierce += 1;
        speed += 120;
        radius = 7;
        color = "#8af6ff";
        highlightDamage = true;
      }

      state.projectiles.push({
        kind: "ember",
        x: player.x + offsetX,
        y: player.y + offsetY,
        radius,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1.4 * rangeMultiplier,
        damage,
        baseDamage: damage,
        pierce: shotPierce,
        pierceDamageMultiplier,
        hitEnemies: new Set(),
        critChance,
        color,
        hostile: false,
        systemType: "normal",
        explosiveChance: player.explosivePayloadChance,
        chainLightning: player.chainLightningArray,
        cryoChance: player.cryoPayloadChance,
        highlightDamage,
      });
    };

    if (player.novaLauncher) {
      for (let i = 0; i < radialCount; i += 1) {
        const angle = (Math.PI * 2 * i) / radialCount + volley * (Math.PI / radialCount);
        fireShot(angle);
      }
    } else {
      for (let i = 0; i < projectileCount; i += 1) {
        const spread = (i - (projectileCount - 1) / 2) * 0.15;
        fireShot(baseAngle + spread);
      }
    }
  }
}

function firePlasmaCannon() {
  const player = state.player;
  const plasmaWeapon = player.weapons.plasmaCannon;
  const level = plasmaWeapon.level;
  if (level <= 0) return;
  const target = nearestEnemy(360);
  if (!target && !player.novaLauncher) return;

  const waveCount = 1 + player.extraAttacks;
  const basePierce = 999 + player.hubPierce + player.passives.piercingRounds;
  const baseDamage = (7 + level * 3.2) * player.attackDamageMultiplier * player.plasmaCannonDamageMultiplier;
  const rangeMultiplier = player.rangeMultiplier + player.passives.weaponRange * 0.14;
  const pierceDamageMultiplier = 1;
  const baseAngle = target ? Math.atan2(target.y - player.y, target.x - player.x) : player.facing;
  const volleyRepeats = player.dualBarrelChance > 0 && Math.random() < player.dualBarrelChance ? 2 : 1;
  const radialCount = Math.max(8, waveCount * 2 + 6);
  const rawEndRadius = (18 + level * 1.9) * 1.5 * player.plasmaCannonWaveMultiplier;
  const endRadius = Math.min(PLASMA_CANNON_MAX_END_RADIUS, rawEndRadius);
  const startRadius = Math.max(7, endRadius * 0.34);
  const maxLife = (0.34 + level * 0.024) * (0.92 + Math.max(0, rangeMultiplier - 1) * 0.5) * (0.95 + (player.plasmaCannonWaveMultiplier - 1) * 0.45);
  const rawMaxDistance = (118 + level * 14) * (0.92 + Math.max(0, rangeMultiplier - 1) * 0.7) * (0.9 + (player.plasmaCannonWaveMultiplier - 1) * 0.65);
  const rawCrestHeight = (24 + level * 3.2) * 1.5 * (0.95 + (player.plasmaCannonWaveMultiplier - 1) * 0.7);
  const crestHeight = Math.min(PLASMA_CANNON_MAX_CREST_HEIGHT, rawCrestHeight);
  let nextWaveFlip = plasmaWeapon.waveFlip || 1;

  playPlayerFireSfx();

  for (let volley = 0; volley < volleyRepeats; volley += 1) {
    const sideOffset = volleyRepeats === 2 ? (volley === 0 ? -18 : 18) : 0;
    const offsetX = Math.cos(baseAngle + Math.PI / 2) * sideOffset;
    const offsetY = Math.sin(baseAngle + Math.PI / 2) * sideOffset;

    const fireWave = (angle, lateralOffset = 0, arcDirection = 1) => {
      const lateralX = Math.cos(angle + Math.PI / 2) * lateralOffset;
      const lateralY = Math.sin(angle + Math.PI / 2) * lateralOffset;
      const forwardX = Math.cos(angle);
      const forwardY = Math.sin(angle);
      const sideX = Math.cos(angle + Math.PI / 2);
      const sideY = Math.sin(angle + Math.PI / 2);
      const muzzleOffset = 34 + endRadius * 0.26;
      const maxDistance = Math.min(
        rawMaxDistance,
        Math.max(78, PLASMA_CANNON_MAX_REACH - muzzleOffset - endRadius * 0.35)
      );
      const originX = player.x + offsetX + lateralX + forwardX * muzzleOffset;
      const originY = player.y + offsetY + lateralY + forwardY * muzzleOffset;
      state.projectiles.push({
        kind: "plasma",
        x: originX,
        y: originY,
        radius: startRadius,
        vx: forwardX,
        vy: forwardY,
        life: maxLife,
        maxLife,
        age: 0,
        damage: baseDamage,
        baseDamage,
        pierce: basePierce,
        pierceDamageMultiplier,
        hitEnemies: new Set(),
        critChance: 0,
        color: "#74f3ff",
        hostile: false,
        systemType: "normal",
        explosiveChance: player.explosivePayloadChance,
        chainLightning: player.chainLightningArray,
        cryoChance: player.cryoPayloadChance,
        originX,
        originY,
        forwardX,
        forwardY,
        sideX,
        sideY,
        lateralOffset,
        arcDirection,
        crestHeight: crestHeight + Math.abs(lateralOffset) * 0.25,
        maxDistance: maxDistance + Math.abs(lateralOffset) * 0.45,
        startRadius,
        endRadius: endRadius + Math.abs(lateralOffset) * 0.1,
        inheritedVx: player.vx,
        inheritedVy: player.vy,
        progress: 0,
        fadeAlpha: 0,
      });
    };

    if (player.novaLauncher) {
      for (let i = 0; i < radialCount; i += 1) {
        const angle = (Math.PI * 2 * i) / radialCount + volley * (Math.PI / radialCount);
        fireWave(angle, 0, 0);
      }
    } else {
      for (let i = 0; i < waveCount; i += 1) {
        const lateralOffset = (i - (waveCount - 1) / 2) * (endRadius * 0.72);
        const arcDirection = lateralOffset === 0 ? nextWaveFlip : Math.sign(lateralOffset);
        fireWave(baseAngle, lateralOffset, arcDirection);
        if (lateralOffset === 0) nextWaveFlip *= -1;
      }
    }
  }

  plasmaWeapon.waveFlip = nextWaveFlip;
}

function emitPulse() {
  const level = state.player.weapons.novaPulse.level;
  if (level <= 0) return;
  const radius = 90 + level * 26;
  const damage = (18 + level * 12) * state.player.attackDamageMultiplier;
  state.pulses.push({
    x: state.player.x,
    y: state.player.y,
    radius: 0,
    maxRadius: radius,
    speed: 440,
    damage,
    hit: new Set(),
  });
}

function updatePhotonPhazer(dt) {
  const player = state.player;
  const phazer = player.weapons.photonPhazer;
  if (!phazer) return;

  phazer.beamPulse = (phazer.beamPulse || 0) + dt * 10;
  phazer.afterglow = Math.max(0, (phazer.afterglow || 0) - dt);
  if (phazer.level <= 0) {
    phazer.target = null;
    phazer.afterglow = 0;
    phazer.beamAlpha = Math.max(0, (phazer.beamAlpha || 0) - dt * 8);
    phazer.tickClock = 0;
    return;
  }

  const range = Math.min(
    PHOTON_PHAZER_MAX_RANGE,
    photonPhazerRange(phazer.level)
  );
  const target = nearestEnemy(range);
  if (!target) {
    phazer.target = null;
    phazer.beamAlpha = Math.max(0, (phazer.beamAlpha || 0) - dt * 7);
    phazer.tickClock = 0;
    return;
  }

  phazer.target = target;
  phazer.range = range;
  phazer.beamAlpha = Math.min(0.96, (phazer.beamAlpha || 0) + dt * 9);
  phazer.tickClock = Math.max(0, (phazer.tickClock || 0) - dt);
  phazer.beamEndX = target.x;
  phazer.beamEndY = target.y;

  const effectiveTicksPerSecond = photonPhazerTicksPerSecond(phazer.level);
  const tickInterval = 1 / Math.max(0.01, effectiveTicksPerSecond);
  const damageRatio = photonPhazerDamageRatio(phazer.level) * player.attackDamageMultiplier * player.photonPhazerDamageMultiplier;

  while (phazer.tickClock <= 0 && phazer.target?.alive !== false) {
    phazer.beamEndX = phazer.target.x;
    phazer.beamEndY = phazer.target.y;
    applyPlayerWeaponHit(
      phazer.target,
      Math.max(1, phazer.target.hp * damageRatio),
      "#8af6ff",
      {
        baseDamage: Math.max(1, phazer.target.hp * damageRatio),
        systemType: "advanced",
      }
    );
    phazer.tickClock += tickInterval;
    if (phazer.target.alive === false) {
      phazer.afterglow = Math.max(phazer.afterglow || 0, 0.12);
      phazer.target = null;
      phazer.beamAlpha = Math.max(phazer.beamAlpha || 0, 0.78);
      break;
    }
  }
}

function updateWeapons(dt) {
  const player = state.player;
  if ((player.disabledTimer || 0) > 0) {
    const phazer = player.weapons.photonPhazer;
    phazer.target = null;
    phazer.beamAlpha = Math.max(0, phazer.beamAlpha - dt * 7);
    phazer.beamPulse += dt * 2;
    return;
  }
  const primaryId = primaryWeaponId(player);
  const primary = primaryWeaponState(player);

  if (primary && primary.level > 0) {
    primary.cooldown -= dt;
    let primaryRate = 0.42;
    if (primaryId === "emberBolt") {
      primaryRate = Math.max(0.12, (0.72 - primary.level * 0.06) / (player.attackSpeedMultiplier * player.photonLanceCycleMultiplier));
    } else if (primaryId === "plasmaCannon") {
      primaryRate = Math.max(0.2, (0.92 - primary.level * 0.07) / player.attackSpeedMultiplier);
    }
    if (primary.cooldown <= 0) {
      if (primaryId === "plasmaCannon") {
        firePlasmaCannon();
      } else {
        fireEmberBolt();
      }
      primary.cooldown = primaryRate;
    }
  }

  const blades = player.weapons.orbitBlades;
  if (blades.level > 0) {
    blades.angle += dt * orbitBladeAngularSpeed(blades.level);
    for (const enemy of state.enemies) {
      const lastHit = blades.hitMap.get(enemy) || 0;
      if (lastHit > 0) {
        blades.hitMap.set(enemy, lastHit - dt);
      }
    }
  }

  const pulse = player.weapons.novaPulse;
  if (pulse.level > 0) {
    pulse.cooldown -= dt;
    const delay = Math.max(0.85, Math.max(1.8, 7 - pulse.level * 0.62) / player.attackSpeedMultiplier);
    if (pulse.cooldown <= 0) {
      emitPulse();
      pulse.cooldown = delay;
    }
  }

  updatePhotonPhazer(dt);
}

function damageEnemy(enemy, amount, color = "#ffd7a8", options = {}) {
  if (!enemy || enemy.alive === false || amount <= 0) return 0;
  if (!options.ignoreRadiation && (enemy.radiationTimer || 0) > 0) {
    amount *= enemy.radiationMultiplier || 1.3;
  }
  const popupDamage = amount;
  let remaining = amount;
  let shieldDamage = 0;
  let hullDamage = 0;
  if (enemy.shield > 0) {
    shieldDamage = Math.min(enemy.shield, remaining);
    enemy.shield -= shieldDamage;
    remaining -= shieldDamage;
    if (shieldDamage > 0) {
      enemy.shieldFlash = 0.12;
    }
  }
  if (remaining > 0) {
    hullDamage = Math.min(enemy.hp, remaining);
    enemy.hp -= hullDamage;
  }
  const actualDamage = shieldDamage + hullDamage;
  state.runStats.damageDealt += actualDamage;
  enemy.hitFlash = 0.08;
  const highlightDamage = options.highlightDamage === true;
  floatingText(
    enemy.x,
    enemy.y - enemy.radius - 8,
    Math.round(popupDamage).toString(),
    highlightDamage ? "#ff3849" : hullDamage > 0 ? color : "#8af6ff",
    highlightDamage ? 0.9 : 0.7,
    highlightDamage
      ? {
        scale: 1.5,
        weight: 900,
        shadowColor: "#ff9a9a",
        shadowBlur: 18,
        strokeColor: "#fff4f4",
        strokeWidth: 2.4,
      }
      : undefined
  );
  if (enemy.hp <= 0) {
    enemy.alive = false;
    state.kills += 1;
    if (state.runStats.killsByType[enemy.type] !== undefined) {
      state.runStats.killsByType[enemy.type] += 1;
    }
    const hostileDiscovered = discoverHostileIntel(enemy.type);
    if (hostileDiscovered && state.player) {
      floatingText(state.player.x, state.player.y - 82, "DATA ACQUIRED", "#8af6ff", 0.95);
      floatingText(state.player.x, state.player.y - 54, `${enemy.displayName} analyzed`, "#eefbff", 0.92);
      statusText.textContent = `Data acquired, ${enemy.displayName} has been analyzed and information will be downloaded to the HUB.`;
    }
    state.gold += Math.ceil(enemy.xp * state.player.goldMultiplier);
    const shardCount = enemy.elite ? 4 : 1;
    for (let i = 0; i < shardCount; i += 1) {
      state.gems.push({
        x: enemy.x + rand(-8, 8),
        y: enemy.y + rand(-8, 8),
        radius: enemy.elite ? 8 : 6,
        xp: enemy.xp,
        color: enemy.elite ? "#ffd166" : "#79e8ff",
        vy: rand(-24, 10),
      });
    }
    if (enemy.type === "leviathan") {
      spawnLeviathanHounds(enemy);
    }
    burst(enemy.x, enemy.y, enemy.color, enemy.elite ? 22 : 10);
  }
  return actualDamage;
}

function updateProjectiles(dt) {
  const next = [];
  for (const shot of state.projectiles) {
    if (shot.kind === "plasma") {
      shot.age += dt;
      shot.life = shot.maxLife - shot.age;
      if (shot.life <= 0) continue;

      const progress = clamp(shot.age / shot.maxLife, 0, 1);
      const travelProgress = 1 - Math.pow(1 - progress, 2.2);
      const crestProgress = Math.sin(progress * Math.PI * 0.5);
      const outward = shot.maxDistance * travelProgress;
      const crest = shot.arcDirection * shot.crestHeight * crestProgress;
      const inheritedX = (shot.inheritedVx || 0) * shot.age;
      const inheritedY = (shot.inheritedVy || 0) * shot.age;

      shot.x = shot.originX + inheritedX + shot.forwardX * outward + shot.sideX * (shot.lateralOffset + crest);
      shot.y = shot.originY + inheritedY + shot.forwardY * outward + shot.sideY * (shot.lateralOffset + crest);
      shot.radius = shot.startRadius + (shot.endRadius - shot.startRadius) * Math.pow(progress, 0.74);
      shot.progress = progress;

      const fadeIn = clamp(progress / 0.18, 0, 1);
      const fadeOut = clamp((1 - progress) / 0.32, 0, 1);
      shot.fadeAlpha = Math.min(fadeIn, fadeOut);
    } else {
      if (shot.homing) {
        const target = shot.hostile
          ? state.player
          : shot.target && shot.target.alive !== false
            ? shot.target
            : nearestEnemyFrom(shot, 1000);
        if (target) {
          if (!shot.hostile) {
            shot.target = target;
          }
          const speed = shot.speed || Math.hypot(shot.vx, shot.vy) || 320;
          const desired = Math.atan2(target.y - shot.y, target.x - shot.x);
          const current = Math.atan2(shot.vy, shot.vx);
          const turnRate = shot.hostile ? (shot.homingTurnRate || 2.5) : 4.2;
          const rotated = rotateToward(current, desired, Math.min(1, dt * turnRate));
          shot.vx = Math.cos(rotated) * speed;
          shot.vy = Math.sin(rotated) * speed;
        }
      }
      shot.x += shot.vx * dt;
      shot.y += shot.vy * dt;
      shot.life -= dt;
      if (shot.life <= 0) {
        if (shot.hostile && shot.explodesOnExpire) {
          detonateHostileProjectile(shot);
        }
        continue;
      }
    }

    if (shot.hostile) {
      if (shot.kind === "leviathanMissile" && distance(shot, state.player) <= shot.radius + state.player.radius) {
        detonateHostileProjectile(shot);
        continue;
      }
      next.push(shot);
      continue;
    }

    let keep = true;
    for (const enemy of state.enemies) {
      if (enemy.alive === false) continue;
      if (shot.hitEnemies && shot.hitEnemies.has(enemy)) continue;
      if (distance(shot, enemy) <= shot.radius + enemy.radius) {
        if (shot.kind === "rocket") {
          triggerExplosion(shot.x, shot.y, shot.damage, shot.explosionRadius || 72, {
            color: "#ff8f68",
            applyBurn: true,
          });
          keep = false;
          break;
        }
        const hit = applyPlayerWeaponHit(enemy, shot.damage, "#ffd7a8", {
          critChance: shot.critChance || 0,
          baseDamage: shot.baseDamage || shot.damage,
          systemType: shot.systemType || "",
          procAugments: false,
          highlightDamage: shot.highlightDamage === true,
        });
        const amount = hit.dealt;
        if (amount > 0) {
          handleDirectHitAugments(shot, enemy, amount);
        }
        if (shot.hitEnemies) shot.hitEnemies.add(enemy);
        if (shot.pierce > 0) {
          shot.pierce -= 1;
          shot.damage = Math.max(shot.baseDamage * shot.pierceDamageMultiplier, shot.damage * shot.pierceDamageMultiplier);
        } else {
          keep = false;
          break;
        }
      }
    }

    if (keep) next.push(shot);
  }
  state.projectiles = next;
}

function updateOrbitBlades() {
  if ((state.player?.disabledTimer || 0) > 0) return;
  const { orbitBlades } = state.player.weapons;
  if (orbitBlades.level <= 0) return;

  const count = orbitBladeCount(orbitBlades.level);
  const radius = orbitBladeRadius(orbitBlades.level);
  const damage = (3 + orbitBlades.level * 3) * state.player.attackDamageMultiplier * state.player.droneDamageMultiplier;
  const hitCooldown = Math.max(0.16, 0.42 / (state.player.attackSpeedMultiplier * state.player.droneCadenceMultiplier));

  for (let i = 0; i < count; i += 1) {
    const angle = orbitBlades.angle + (Math.PI * 2 * i) / count;
    const bx = state.player.x + Math.cos(angle) * radius;
    const by = state.player.y + Math.sin(angle) * radius;
    for (const enemy of state.enemies) {
      if (enemy.alive === false) continue;
      const hitTimer = orbitBlades.hitMap.get(enemy) || 0;
      if (hitTimer > 0) continue;
      if (Math.hypot(enemy.x - bx, enemy.y - by) <= enemy.radius + 12) {
        applyPlayerWeaponHit(enemy, damage, "#ffc980", {
          baseDamage: damage,
          systemType: "advanced",
        });
        orbitBlades.hitMap.set(enemy, hitCooldown);
      }
    }
  }
}

function updatePulses(dt) {
  const next = [];
  for (const pulse of state.pulses) {
    pulse.radius += pulse.speed * dt;
    for (const enemy of state.enemies) {
      if (enemy.alive === false || pulse.hit.has(enemy)) continue;
      if (distance(pulse, enemy) <= pulse.radius + enemy.radius) {
        pulse.hit.add(enemy);
        applyPlayerWeaponHit(enemy, pulse.damage, "#9ee4ff", {
          baseDamage: pulse.damage,
          systemType: "advanced",
        });
      }
    }
    if (pulse.radius < pulse.maxRadius) next.push(pulse);
  }
  state.pulses = next;
}

function enemyDamageValue(type) {
  const base = {
    shade: 8,
    hound: 6,
    brute: 14,
    witch: 10,
    aegis: 16,
    drifter: 13,
    reactor: 0,
    relay: 12,
    scrambler: 11,
    viper: 30,
    bastion: 20,
    leviathan: 24,
    orb: 9,
    siege: 1,
  }[type] || 6;
  const effectiveDifficulty = voyageEncounterDifficulty();
  const difficultyScale =
    (1 + (effectiveDifficulty - 1) * 0.22) *
    easiestDifficultyCombatScale();
  const rookieScale = 1 + (rookiePressureMultiplier() - 1) * 0.45;
  return Math.max(1, Math.round(base * difficultyScale * rookieScale));
}

function triggerDamageFlash(type, amount) {
  if (amount <= 0) return;
  const normalized = Math.max(0.32, Math.min(1.2, amount / 20));
  if (type === "shield") {
    state.shieldDamageFlash = Math.max(
      state.shieldDamageFlash,
      Math.min(0.96, 0.336 + normalized * 0.704)
    );
    return;
  }
  state.hullDamageFlash = Math.max(
    state.hullDamageFlash,
    Math.min(1.08, 0.432 + normalized * 0.768)
  );
}

function hurtPlayer(amount, source = null) {
  const player = state.player;
  if (!player || state.mode === "death" || player.deathSequence?.active) return;
  if (player.invuln > 0) return;
  if (amount <= 0) return;

  amount *= player.damageTakenMultiplier * (player.zoneDamageMultiplier || 1);
  const mitigatedDamage = amount;
  let totalTaken = 0;

  if (player.shield > 0) {
    const absorbed = Math.min(player.shield, amount);
    player.shield -= absorbed;
    amount -= absorbed;
    totalTaken += absorbed;
    player.shieldRegenDelay = 2.4;
    triggerDamageFlash("shield", absorbed);
    floatingText(player.x, player.y - 26, `-${Math.round(absorbed)} shield`, "#8af6ff", 0.7);
  }
  if (amount <= 0) {
    player.invuln = Math.max(player.invuln, 0.25);
    if (player.reflectiveArmorRatio > 0) {
      reflectDamageToSource(source, mitigatedDamage * player.reflectiveArmorRatio);
    }
    if (player.adaptivePlating && player.adaptiveCooldown <= 0) {
      player.invuln = Math.max(player.invuln, 1.5);
      player.adaptiveCooldown = 10;
    }
    updateShieldDepletedWarning(player);
    return;
  }

  player.hp -= amount;
  totalTaken += amount;
  state.runStats.damageTaken += amount;
  triggerDamageFlash("hull", amount);
  player.invuln = 0.55;
  player.shieldRegenDelay = 2.4;
  floatingText(player.x, player.y - 26, `-${Math.round(amount)}`, "#ff8ea1", 0.8);
  if (player.kineticAbsorberRatio > 0 && player.maxShield > 0) {
    player.shield = Math.min(player.maxShield, player.shield + totalTaken * player.kineticAbsorberRatio);
  }
  if (player.reflectiveArmorRatio > 0) {
    reflectDamageToSource(source, mitigatedDamage * player.reflectiveArmorRatio);
  }
  if (player.adaptivePlating && player.adaptiveCooldown <= 0) {
    player.invuln = Math.max(player.invuln, 1.5);
    player.adaptiveCooldown = 10;
    floatingText(player.x, player.y - 42, "Adaptive Plating", "#d9f1ff", 0.55);
  }
  if (
    player.emergencyShieldBurst &&
    !player.emergencyShieldUsed &&
    player.hp > 0 &&
    player.hp / player.maxHp <= 0.1 &&
    player.maxShield > 0
  ) {
    player.shield = player.maxShield;
    player.emergencyShieldUsed = true;
    floatingText(player.x, player.y - 58, "Emergency Shield", "#8af6ff", 0.7);
  }
  if (player.hp <= 0) {
    player.hp = 0;
    beginPlayerDeathSequence(finalizePlayerFailureRewards());
    return;
  }

  updateShieldDepletedWarning(player);
  updateHullCriticalWarning(player);
}

function hurtPlayerShieldOnly(amount, source = null) {
  const player = state.player;
  if (!player || state.mode === "death" || player.deathSequence?.active) return;
  if (player.invuln > 0) return;
  if (amount <= 0) return;

  amount *= player.damageTakenMultiplier * (player.zoneDamageMultiplier || 1);

  player.shieldRegenDelay = 2.4;
  if (player.reflectiveArmorRatio > 0) {
    reflectDamageToSource(source, amount * player.reflectiveArmorRatio);
  }
  if (player.adaptivePlating && player.adaptiveCooldown <= 0) {
    player.invuln = Math.max(player.invuln, 1.5);
    player.adaptiveCooldown = 10;
  }
  if (player.shield <= 0) return;

  const absorbed = Math.min(player.shield, amount);
  player.shield -= absorbed;
  triggerDamageFlash("shield", absorbed);
  floatingText(player.x, player.y - 26, `-${Math.round(absorbed)} shield`, "#8af6ff", 0.7);
  updateShieldDepletedWarning(player);
  updateHullCriticalWarning(player);
}

function hurtPlayerHullOnly(amount, source = null) {
  const player = state.player;
  if (!player || state.mode === "death" || player.deathSequence?.active) return;
  if (player.invuln > 0) return;
  if (amount <= 0) return;

  amount = Math.max(1, amount * player.damageTakenMultiplier * (player.zoneDamageMultiplier || 1));
  player.hp -= amount;
  state.runStats.damageTaken += amount;
  triggerDamageFlash("hull", amount);
  player.invuln = 0.45;
  player.shieldRegenDelay = 2.4;
  floatingText(player.x, player.y - 26, `-${amount.toFixed(amount < 2 ? 1 : 0)} hp`, "#ffb56a", 0.75);
  if (player.kineticAbsorberRatio > 0 && player.maxShield > 0) {
    player.shield = Math.min(player.maxShield, player.shield + amount * player.kineticAbsorberRatio);
  }
  if (player.reflectiveArmorRatio > 0) {
    reflectDamageToSource(source, amount * player.reflectiveArmorRatio);
  }
  if (player.adaptivePlating && player.adaptiveCooldown <= 0) {
    player.invuln = Math.max(player.invuln, 1.5);
    player.adaptiveCooldown = 10;
    floatingText(player.x, player.y - 42, "Adaptive Plating", "#d9f1ff", 0.55);
  }
  if (
    player.emergencyShieldBurst &&
    !player.emergencyShieldUsed &&
    player.hp > 0 &&
    player.hp / player.maxHp <= 0.1 &&
    player.maxShield > 0
  ) {
    player.shield = player.maxShield;
    player.emergencyShieldUsed = true;
    floatingText(player.x, player.y - 58, "Emergency Shield", "#8af6ff", 0.7);
  }
  if (player.hp <= 0) {
    player.hp = 0;
    beginPlayerDeathSequence(finalizePlayerFailureRewards());
    return;
  }

  updateShieldDepletedWarning(player);
  updateHullCriticalWarning(player);
}

function detonateEnemy(enemy) {
  if (!enemy || enemy.alive === false) return;
  enemy.alive = false;
  state.explosions.push({
    x: enemy.x,
    y: enemy.y,
    radius: enemy.explosionRadius || 100,
    life: 0.38,
    maxLife: 0.38,
    color: enemy.explosionColor || enemy.color,
  });
  burst(enemy.x, enemy.y, enemy.explosionColor || enemy.color, 20);
  if (Math.hypot(enemy.x - state.player.x, enemy.y - state.player.y) <= (enemy.explosionRadius || 100) + state.player.radius) {
    hurtPlayer(enemy.explosionDamage || 60, enemy);
  }
}

function updateEnemies(dt) {
  const slowFieldRadius = state.player.slowFieldRadius;
  const slowFieldMultiplier = state.player.slowFieldMultiplier;
  let contactDamage = 0;
  let contactSource = null;
  for (const enemy of state.enemies) {
    applyEnemyVoyageScaling(enemy);
    enemy.supportSpeedMultiplier = 1;
    enemy.supportHealRate = 0;
    enemy.supportBuffed = false;
  }
  for (const support of state.enemies) {
    if (
      support.alive === false ||
      support.allyAuraRadius <= 0 ||
      (support.freezeTimer || 0) > 0 ||
      (support.empTimer || 0) > 0 ||
      (support.hackTimer || 0) > 0
    ) {
      continue;
    }
    for (const ally of state.enemies) {
      if (
        ally === support ||
        ally.alive === false ||
        (ally.hackTimer || 0) > 0 ||
        distance(ally, support) > support.allyAuraRadius + ally.radius
      ) {
        continue;
      }
      ally.supportSpeedMultiplier = Math.max(ally.supportSpeedMultiplier || 1, support.allySpeedMultiplier || 1);
      ally.supportHealRate = Math.max(ally.supportHealRate || 0, support.allyHealRate || 0);
      ally.supportBuffed = true;
    }
  }
  const separationGrid = buildEnemySeparationGrid();
  for (const enemy of state.enemies) {
    enemy.hitFlash = Math.max(0, enemy.hitFlash - dt);
    enemy.shieldFlash = Math.max(0, (enemy.shieldFlash || 0) - dt);
    enemy.freezeTimer = Math.max(0, (enemy.freezeTimer || 0) - dt);
    enemy.empTimer = Math.max(0, (enemy.empTimer || 0) - dt);
    enemy.gravitySlowTimer = Math.max(0, (enemy.gravitySlowTimer || 0) - dt);
    enemy.radiationTimer = Math.max(0, (enemy.radiationTimer || 0) - dt);
    if (enemy.radiationTimer <= 0) {
      enemy.radiationMultiplier = 1;
    }
    enemy.hackTimer = Math.max(0, (enemy.hackTimer || 0) - dt);
    enemy.hackContactCooldown = Math.max(0, (enemy.hackContactCooldown || 0) - dt);
    if ((enemy.supportHealRate || 0) > 0) {
      enemy.hp = Math.min(enemy.maxHp, enemy.hp + enemy.supportHealRate * dt);
      if ((enemy.maxShield || 0) > 0) {
        enemy.shield = Math.min(enemy.maxShield, enemy.shield + enemy.supportHealRate * 0.8 * dt);
      }
    }
    if ((enemy.burnTimer || 0) > 0) {
      enemy.burnTimer = Math.max(0, enemy.burnTimer - dt);
      enemy.burnTick -= dt;
      while (enemy.burnTimer > 0 && enemy.burnTick <= 0) {
        enemy.burnTick += 0.5;
        damageEnemy(enemy, enemy.burnDamage || enemy.maxHp * 0.2, "#ff7b52", { allowAugments: false });
        if (enemy.alive === false) break;
      }
      if (enemy.alive === false) continue;
    }

    const hackedTarget = enemy.hackTimer > 0
      ? state.enemies
        .filter(other =>
          other.alive !== false &&
          other !== enemy &&
          (other.hackTimer || 0) <= 0 &&
          distance(other, enemy) <= 360
        )
        .sort((a, b) => distance(a, enemy) - distance(b, enemy))[0]
      : null;
    const pursuitTarget = hackedTarget || state.player;
    const angle = Math.atan2(pursuitTarget.y - enemy.y, pursuitTarget.x - enemy.x);
    let moveX = Math.cos(angle);
    let moveY = Math.sin(angle);
    const separation = enemySeparationVector(enemy, separationGrid);
    if (separation) {
      const separationWeight = enemy.ranged ? 0.68 : 0.46;
      moveX += separation.x * separationWeight * separation.strength;
      moveY += separation.y * separationWeight * separation.strength;
      const moveLength = Math.hypot(moveX, moveY);
      if (moveLength > 0.0001) {
        moveX /= moveLength;
        moveY /= moveLength;
      }
    }
    let speedMultiplier = 1;
    enemy.slowed = false;
    if (enemy.gravitySlowTimer > 0) {
      speedMultiplier *= 0.55;
      enemy.slowed = true;
    }
    if (enemy.hackTimer <= 0 && state.player.slowingField > 0 && distance(enemy, state.player) < slowFieldRadius) {
      speedMultiplier *= slowFieldMultiplier;
      enemy.slowed = true;
    }
    if (enemy.freezeTimer > 0) {
      speedMultiplier = 0;
      enemy.slowed = true;
    }
    if (enemy.empTimer > 0) {
      speedMultiplier = 0;
      enemy.slowed = true;
    }
    if (enemy.hackTimer > 0 && !hackedTarget) {
      speedMultiplier *= 0.18;
    }
    if ((enemy.supportSpeedMultiplier || 1) > 1 && enemy.hackTimer <= 0) {
      speedMultiplier *= enemy.supportSpeedMultiplier;
    }
    enemy.x += moveX * enemy.speed * speedMultiplier * dt;
    enemy.y += moveY * enemy.speed * speedMultiplier * dt;

    if (enemy.hackTimer <= 0 && enemy.playerSlowRadius > 0 && distance(enemy, state.player) <= enemy.playerSlowRadius + state.player.radius) {
      enemy.shield = Math.max(0, enemy.shield - enemy.selfDecayRate * 0.55 * dt);
      enemy.hp -= enemy.selfDecayRate * dt;
      if (enemy.hp <= 0) {
        enemy.shield = 0;
        enemy.alive = false;
        burst(enemy.x, enemy.y, enemy.color, 12);
        continue;
      }
    }

    if (enemy.ranged) {
      if (enemy.freezeTimer <= 0 && enemy.empTimer <= 0) {
        enemy.shotClock -= dt;
      }
      if (enemy.freezeTimer <= 0 && enemy.empTimer <= 0 && enemy.shotClock <= 0) {
        enemy.shotClock = Math.max(
          enemy.minShotDelay || 1.6,
          (enemy.shotBaseDelay || 3.2) - state.time * (enemy.shotRamp || 0.01)
        ) / Math.max(0.65, speedMultiplier);
        if (enemy.hackTimer > 0 && hackedTarget) {
          damageEnemy(hackedTarget, enemy.shotDamage || enemyDamageValue(enemy.type), "#8dffb5", { allowAugments: false });
          burst(hackedTarget.x, hackedTarget.y, "#8dffb5", 5);
        } else {
          state.projectiles.push({
            kind: enemy.shotKind || (enemy.shotDamageType === "hull" ? "siege" : "orb"),
            x: enemy.x,
            y: enemy.y,
            radius: enemy.shotRadius || 7,
            vx: Math.cos(angle) * (enemy.shotSpeed || 210),
            vy: Math.sin(angle) * (enemy.shotSpeed || 210),
            speed: enemy.shotSpeed || 210,
            life: enemy.shotLife || 4.5,
            damage: enemy.shotDamage || enemyDamageValue("orb"),
            hullDamage: enemy.shotDamageType === "hull" ? enemy.shotDamage || 1 : 0,
            hostile: true,
            pierce: 0,
            critChance: 0,
            color: enemy.shotColor || "#8cdaf9",
            effectType: enemy.shotEffectType || "",
            effectDuration: enemy.shotEffectDuration || 0,
            homing: (enemy.shotKind || "") === "leviathanMissile",
            homingTurnRate: enemy.shotHomingTurn || 0,
            explodesOnExpire: (enemy.shotKind || "") === "leviathanMissile",
            explosionRadius: enemy.shotExplosionRadius || 0,
            explosionDamage: enemy.shotExplosionDamage || enemy.shotDamage || 0,
            explosionColor: enemy.shotExplosionColor || enemy.shotColor || enemy.color,
            sourceEnemy: enemy,
          });
        }
      }
    }

    if (enemy.hackTimer <= 0 && enemy.explodesOnProximity && distance(enemy, state.player) <= enemy.detonationRadius + state.player.radius) {
      detonateEnemy(enemy);
      continue;
    }

    if (enemy.hackTimer > 0) {
      const hackedVictim = state.enemies.find(other =>
        other !== enemy &&
        other.alive !== false &&
        (other.hackTimer || 0) <= 0 &&
        distance(enemy, other) <= enemy.radius + other.radius
      );
      if (
        hackedVictim &&
        enemy.explodesOnProximity &&
        distance(enemy, hackedVictim) <= enemy.detonationRadius + hackedVictim.radius
      ) {
        damageEnemy(enemy, enemy.hp + enemy.shield + 1, enemy.explosionColor || enemy.color, {
          allowAugments: false,
          ignoreRadiation: true,
        });
        triggerExplosion(enemy.x, enemy.y, enemy.explosionDamage || 60, enemy.explosionRadius || 100, {
          color: enemy.explosionColor || enemy.color,
        });
        continue;
      }
      if (hackedVictim && enemy.hackContactCooldown <= 0) {
        damageEnemy(hackedVictim, enemy.contactDamage || enemyDamageValue(enemy.type), "#8dffb5", { allowAugments: false });
        enemy.hackContactCooldown = 0.55;
        burst(hackedVictim.x, hackedVictim.y, "#8dffb5", 4);
      }
      continue;
    }

    const bodyHit =
      distance(enemy, state.player) <= enemy.radius + state.player.radius ||
      segmentHitsCircle(
        state.player.prevX ?? state.player.x,
        state.player.prevY ?? state.player.y,
        state.player.x,
        state.player.y,
        enemy.x,
        enemy.y,
        enemy.radius + state.player.radius
      );
    if (bodyHit) {
      contactDamage += enemy.contactDamage || enemyDamageValue(enemy.type);
      if (!contactSource) {
        contactSource = enemy;
      }
    }
  }

  if (contactDamage > 0) {
    hurtPlayer(contactDamage, contactSource);
  }

  for (const shot of state.projectiles) {
    if (!shot.hostile) continue;
    if (distance(shot, state.player) <= shot.radius + state.player.radius) {
      shot.life = 0;
      const elementalDamage = shot.effectType === "hack";
      if ((shot.hullDamage || 0) > 0) {
        hurtPlayerHullOnly(
          elementalDamage ? reduceIncomingElementalDamage(shot.hullDamage, state.player) : shot.hullDamage,
          shot.sourceEnemy
        );
      } else {
        hurtPlayerShieldOnly(
          elementalDamage ? reduceIncomingElementalDamage(shot.damage, state.player) : shot.damage,
          shot.sourceEnemy
        );
      }
      if (shot.effectType === "hack") {
        infectPlayerWithHack(shot.effectDuration || 3.5);
      }
    }
  }

  state.enemies = state.enemies.filter(enemy => enemy.alive !== false);
}

function updateGems(dt) {
  const magnetRadius = 90 + state.player.passives.magnet * 42;
  const pickupRadius = 22 + state.player.passives.magnet * 8;
  for (const gem of state.gems) {
    gem.y += gem.vy * dt;
    gem.vy *= 0.96;
    const d = distance(gem, state.player);
    if (d < magnetRadius) {
      const angle = Math.atan2(state.player.y - gem.y, state.player.x - gem.x);
      const accel = 220 + state.player.passives.magnet * 70;
      gem.x += Math.cos(angle) * accel * dt;
      gem.y += Math.sin(angle) * accel * dt;
    }

    if (d <= pickupRadius) {
      gainXp(gem.xp);
      gem.collected = true;
      burst(gem.x, gem.y, gem.color, 6);
    }
  }
  state.gems = state.gems.filter(gem => !gem.collected);
}

function gainXp(amount) {
  const player = state.player;
  const recovered = Math.ceil(amount * player.xpMultiplier);
  state.runStats.scrapRecovered += recovered;
  player.scrap = (player.scrap || 0) + recovered;
  if (player.upgradesMaxed) return;
  player.xp += recovered;
  let gainedVersions = 0;
  while (player.xp >= player.nextXp) {
    player.xp -= player.nextXp;
    player.level += 1;
    player.nextXp = runXpCurve(player.level);
    gainedVersions += 1;
  }
  if (gainedVersions > 0) {
    statusText.textContent = gainedVersions === 1
      ? `${formatVersionLabel(player.level)} reached. Open Voyage Upgrades with Tab / Y to spend Scrap.`
      : `${formatVersionLabel(player.level)} reached. ${gainedVersions} versions recovered. Open Voyage Upgrades with Tab / Y to spend Scrap.`;
    floatingText(player.x, player.y - 62, `${formatVersionLabel(player.level)}`, "#8af6ff", 0.68);
    if (voyageUpgradeMenuActive()) {
      renderVoyageUpgradesMenu();
    }
  }
}

function availableUpgrades(player = state.player) {
  const list = [];

  for (const [id, def] of Object.entries(weaponDefs)) {
    if (HIDDEN_VOYAGE_UPGRADE_IDS.has(id)) continue;
    const level = player.weapons[id].level;
    if (level >= def.maxLevel) {
      continue;
    }
    if (level < def.maxLevel) {
      list.push({
        id,
        type: "weapon",
        level,
        systemType: def.weaponSystem || "",
        systemLabel: weaponSystemLabel(def.weaponSystem),
        title: def.name,
        description: def.description(level),
      });
    }
  }

  for (const [id, def] of Object.entries(passiveDefs)) {
    if (HIDDEN_VOYAGE_UPGRADE_IDS.has(id)) continue;
    const level = player.passives[id];
    if (level < def.maxLevel) {
      list.push({
        id,
        type: "passive",
        level,
        systemType: def.weaponSystem || "",
        systemLabel: weaponSystemLabel(def.weaponSystem),
        title: def.name,
        description: def.description(level),
      });
    }
  }

  const sorted = list.sort((a, b) => {
    const order = (choice) => {
      if (choice.type === "weapon" && choice.systemType === "normal") return 0;
      if (choice.type === "weapon" && choice.systemType === "advanced") return 1;
      return 2;
    };
    return order(a) - order(b) || a.title.localeCompare(b.title);
  });

  const seenTitles = new Set();
  return sorted.filter((choice) => {
    const titleKey = choice.title.trim().toLowerCase();
    if (seenTitles.has(titleKey)) return false;
    seenTitles.add(titleKey);
    return true;
  });
}

function setRunUpgradesMaxed() {
  const player = state.player;
  if (!player || player.upgradesMaxed) return false;
  player.upgradesMaxed = true;
  player.xp = 1;
  player.nextXp = 1;
  state.levelChoices = [];
  state.levelChoiceUnlockAt = 0;
  upgradeChoices.classList.add("hidden");
  upgradeChoices.innerHTML = "";
  if (state.mode === "levelup") {
    state.mode = "playing";
    overlay.classList.add("hidden");
  }
  statusText.textContent = "All in-run upgrades maxed.";
  syncHud();
  syncGamepadFocus();
  return true;
}

function presentLevelUp() {
  state.levelChoices = availableUpgrades();
  if (!state.levelChoices.length) {
    setRunUpgradesMaxed();
    return false;
  }
  state.levelChoiceUnlockAt = performance.now() + 500;
  state.gamepad.menuIndex = 0;
  upgradeChoices.innerHTML = "";
  for (const choice of state.levelChoices) {
    const button = document.createElement("button");
    button.className = "upgrade-card";
    button.type = "button";
    populateChoiceCard(button, choice);
    button.addEventListener("click", () => applyUpgrade(choice));
    upgradeChoices.appendChild(button);
  }

  upgradeChoices.classList.remove("hidden");
  openOverlay("Upgrade Available", "Choose one ship upgrade for this run.", "", false);
  statusText.textContent = `${formatVersionLabel(state.player.level)} reached. Pick your next system upgrade.`;
  syncGamepadFocus();
  return true;
}

function applyUpgrade(choice) {
  if (!levelChoiceReady()) return;
  state.runStats.augments.push(choice.title);
  if (choice.type === "weapon") {
    weaponDefs[choice.id].apply(state.player);
  } else {
    passiveDefs[choice.id].apply(state.player);
  }

  state.mode = "playing";
  state.levelChoiceUnlockAt = 0;
  upgradeChoices.classList.add("hidden");
  upgradeChoices.innerHTML = "";
  overlay.classList.add("hidden");
  if (!availableUpgrades().length) {
    state.pendingFreeLevels = 0;
    setRunUpgradesMaxed();
    return;
  }
  if (state.pendingFreeLevels > 0) {
    state.pendingFreeLevels -= 1;
    grantFreeLevel();
    return;
  }
  syncHud();
  syncGamepadFocus();
}

function floatingText(x, y, text, color, life, options = {}) {
  if (state.texts.length > 80) return;
  state.texts.push({
    x,
    y,
    text,
    color,
    life,
    maxLife: life,
    scale: options.scale || 1,
    weight: options.weight || 700,
    shadowColor: options.shadowColor || null,
    shadowBlur: options.shadowBlur || 0,
    strokeColor: options.strokeColor || null,
    strokeWidth: options.strokeWidth || 0,
  });
}

function burst(x, y, color, count) {
  const maxCount = state.particles.length > 260 ? Math.ceil(count / 3) : count;
  for (let i = 0; i < maxCount; i += 1) {
    const angle = rand(0, Math.PI * 2);
    const speed = rand(30, 180);
    state.particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: rand(0.35, 0.7),
      color,
    });
  }
}

function updateEffects(dt) {
  for (const text of state.texts) {
    text.y -= 28 * dt;
    text.life -= dt;
  }
  state.texts = state.texts.filter(text => text.life > 0);

  for (const particle of state.particles) {
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
    particle.vx *= 0.97;
    particle.vy *= 0.97;
    particle.life -= dt;
  }
  state.particles = state.particles.filter(particle => particle.life > 0);
}

function updateCamera(dt) {
  const viewportW = WIDTH / CAMERA_ZOOM;
  const viewportH = HEIGHT / CAMERA_ZOOM;
  state.camera.x += (state.player.x - viewportW / 2 - state.camera.x) * Math.min(1, dt * 8);
  state.camera.y += (state.player.y - viewportH / 2 - state.camera.y) * Math.min(1, dt * 8);
  state.camera.x = clamp(state.camera.x, 0, WORLD_W - viewportW);
  state.camera.y = clamp(state.camera.y, 0, WORLD_H - viewportH);
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function renderArsenalHud(player) {
  if (!arsenalGrid || !weaponSwitchReadout) return;
  const unlocked = unlockedNormalWeaponSystemIds(player);
  arsenalGrid.innerHTML = "";
  if (!unlocked.length) {
    weaponSwitchReadout.textContent = "No systems online";
    return;
  }

  for (const [slotIndex, id] of unlocked.entries()) {
    const def = weaponDefs[id];
    if (!def) continue;
    const slot = document.createElement("div");
    slot.className = `arsenal-slot${player.primaryWeapon === id ? " active" : ""}`;

    const key = document.createElement("span");
    key.className = "arsenal-slot-key";
    key.textContent = String(slotIndex + 1);

    const name = document.createElement("span");
    name.className = "arsenal-slot-name";
    name.textContent = def.name;

    const stateLabel = document.createElement("span");
    stateLabel.className = "arsenal-slot-state";
    stateLabel.textContent = player.primaryWeapon === id ? "Active" : "Standby";

    slot.appendChild(key);
    slot.appendChild(name);
    slot.appendChild(stateLabel);
    arsenalGrid.appendChild(slot);
  }

  if (unlocked.length < 2) {
    weaponSwitchReadout.textContent = "Single system online";
  } else if ((player.weaponSwitchCooldown || 0) > 0) {
    weaponSwitchReadout.textContent = `Swap in ${Math.max(0.1, player.weaponSwitchCooldown).toFixed(1)}s`;
  } else {
    weaponSwitchReadout.textContent = "Swap Ready";
  }
}

function renderPlayerEffectIcons(player) {
  if (!playerEffectIcons) return;
  playerEffectIcons.innerHTML = "";

  const effects = [];
  if ((player.disabledTimer || 0) > 0) {
    effects.push({ type: "emp", icon: "EMP", label: "Disabled" });
  }
  if (player.radiationZoneActive) {
    effects.push({ type: "radiation", icon: "RAD", label: "Radiation" });
  }
  if (player.solarZoneActive) {
    effects.push({ type: "solar", icon: "SOL", label: "Burning" });
  }
  if (player.hackZoneActive) {
    effects.push({ type: "hack", icon: "HCK", label: "Controls Inverted" });
  }

  for (const effect of effects) {
    const chip = document.createElement("div");
    chip.className = `player-effect-chip ${effect.type}`;

    const icon = document.createElement("span");
    icon.className = "player-effect-icon";
    icon.textContent = effect.icon;

    const label = document.createElement("span");
    label.className = "player-effect-label";
    label.textContent = effect.label;

    chip.appendChild(icon);
    chip.appendChild(label);
    playerEffectIcons.appendChild(chip);
  }
}

function syncHud() {
  const player = state.player;
  const activePrimaryDef = primaryWeaponDef(player);
  const activePrimaryLevel = primaryWeaponLevel(player);
  const levelText = formatVersionNumber(player.level);
  const scrapText = Math.floor(player.scrap || 0).toString();
  const timeText = formatTime(state.time);
  if (timeReadout) timeReadout.textContent = timeText;
  if (hudTimeReadout) hudTimeReadout.textContent = timeText;
  if (levelReadout) levelReadout.textContent = levelText;
  if (hudLevelReadout) hudLevelReadout.textContent = levelText;
  if (xpReadout) xpReadout.textContent = scrapText;
  if (hudXpReadout) hudXpReadout.textContent = scrapText;
  if (killReadout) killReadout.textContent = state.kills;
  if (hudKillReadout) hudKillReadout.textContent = state.kills;
  if (goldReadout) goldReadout.textContent = state.gold;
  if (hudGoldReadout) hudGoldReadout.textContent = state.gold;
  if (bankReadout) bankReadout.textContent = `Bank: ${state.meta.goldBank} Ardonis Credits`;
  if (voyageUpgradeBank) {
    voyageUpgradeBank.textContent = `Scrap: ${scrapText}`;
  }
  if (voyageUpgradeVersion) {
    voyageUpgradeVersion.textContent = `Ship Version: ${levelText}`;
  }
  if (hudStatusText) hudStatusText.textContent = statusText.textContent;
  const healthPercent = player.maxHp > 0 ? clamp((player.hp / player.maxHp) * 100, 0, 100) : 0;
  const shieldReference = Math.max(1, player.maxHp);
  const shieldPercent = player.maxShield > 0 ? clamp((player.shield / shieldReference) * 100, 0, 100) : 0;
  if (shieldBar) {
    shieldBar.style.left = "0%";
    shieldBar.style.width = `${shieldPercent}%`;
    shieldBar.style.borderRadius = "999px";
  }
  if (healthBar) {
    healthBar.style.left = "0%";
    healthBar.style.width = `${healthPercent}%`;
    healthBar.style.borderRadius = "999px";
  }
  if (xpBar) {
    const xpPercent = player.upgradesMaxed ? 100 : (player.xp / player.nextXp) * 100;
    xpBar.style.width = `${xpPercent}%`;
  }
  if (shieldReadout) shieldReadout.textContent = `${Math.round(player.shield)} / ${Math.round(player.maxShield)}`;
  if (healthReadout) healthReadout.textContent = `${Math.round(player.hp)} / ${Math.round(player.maxHp)}`;
  if (barXpReadout) barXpReadout.textContent = scrapText;
  if (barGoldReadout) barGoldReadout.textContent = `${state.gold}`;
  if (enemyReadout) enemyReadout.textContent = `Contacts: ${state.enemies.length}`;
  if (minuteWarning) {
    minuteWarning.textContent = state.voyageProgress >= state.currentRun.goalTime
      ? "Arrival window open"
      : `Arrive in ${formatTime(Math.max(0, state.currentRun.goalTime - state.voyageProgress))}`;
  }
  renderArsenalHud(player);
  renderPlayerEffectIcons(player);

  const build = [];
  build.push(`${activePrimaryDef.name} ${formatVersionLabel(activePrimaryLevel)}`);
  if (player.weapons.orbitBlades.level > 0) build.push(`Drone Halo ${formatVersionLabel(player.weapons.orbitBlades.level)}`);
  if (player.weapons.photonPhazer.level > 0) build.push(`Photon Phazer ${formatVersionLabel(player.weapons.photonPhazer.level)}`);
  if (player.weapons.novaPulse.level > 0) build.push(`Nebula Pulse ${formatVersionLabel(player.weapons.novaPulse.level)}`);
  if (player.passives.swiftness > 0) build.push(`Thrusters ${player.passives.swiftness}`);
  if (player.passives.magnet > 0) build.push("Tractor Beam");
  if (player.passives.recovery > 0) build.push(`Recycler ${player.passives.recovery}`);
  if (player.critChance > 0 || player.critDamageMultiplier > 1) {
    build.push(`Crit ${Math.round(player.critChance * 100)}% x${player.critDamageMultiplier.toFixed(2)}`);
  }
  if (player.passives.piercingRounds > 0 || player.hubPierce > 0) build.push(`Pierce ${player.hubPierce + player.passives.piercingRounds}`);
  if (player.passives.weaponRange > 0) build.push(`Range ${player.passives.weaponRange}`);
  if (player.equippedAugmentNames.length > 0) build.push(`Aug ${player.equippedAugmentNames.length}/${MAX_EQUIPPED_AUGMENTS}`);
  if (player.quantumBuff) build.push(player.quantumBuff.name);
  if (buildReadout) buildReadout.textContent = build.join(" | ");
}

function update(dt) {
  if (state.mode === "death") {
    state.shieldDamageFlash = Math.max(0, state.shieldDamageFlash - dt * 1.85);
    state.hullDamageFlash = Math.max(0, state.hullDamageFlash - dt * 1.55);
    updateEffects(dt);
    updatePlayerDeathSequence(dt);
    updateCamera(dt);
    syncHud();
    return;
  }
  if (state.mode !== "playing") return;

  state.shieldDamageFlash = Math.max(0, state.shieldDamageFlash - dt * 1.85);
  state.hullDamageFlash = Math.max(0, state.hullDamageFlash - dt * 1.55);
  if (multiplayerRunClient()) {
    updateEffects(dt);
    updateCamera(dt);
    syncHud();
    return;
  }
  state.time += dt;
  updateVoyageZones(dt);
  if (state.mode === "death") {
    updateEffects(dt);
    updatePlayerDeathSequence(dt);
    updateCamera(dt);
    syncHud();
    return;
  }
  const move = applyPlayerControlModifiers(getMoveVector(), state.player);
  const playerSpeed = state.player ? Math.hypot(state.player.vx, state.player.vy) : 0;
  const voyageAdvancing = Boolean(state.player) && (move.active || playerSpeed > 18 || state.player.dashTimer > 0);
  state.player.weaponSwitchCooldown = Math.max(0, (state.player.weaponSwitchCooldown || 0) - dt);
  if (voyageAdvancing) {
    state.voyageProgress = Math.min(state.currentRun.goalTime, state.voyageProgress + dt);
  }
  state.survivalCreditProgress += dt * state.player.goldMultiplier;
  const survivalCredits = Math.floor(state.survivalCreditProgress) - state.survivalCreditsAwarded;
  if (survivalCredits > 0) {
    state.gold += survivalCredits;
    state.survivalCreditsAwarded += survivalCredits;
  }
  if (state.voyageProgress >= state.currentRun.goalTime) {
    const ventariUnlockedBefore = ventariSystemUnlocked();
    const victoryGold = Math.floor(state.gold * 2);
    const cacheRewards = resolveVoyageCacheRewards();
    const bonusCrudeCachesAwarded = cacheRewards.crudeCaches;
    const bonusArdonisCachesAwarded = cacheRewards.ardonisCaches;
    const bonusAugmentsAwarded = bonusCrudeCachesAwarded + bonusArdonisCachesAwarded;
    state.gold = victoryGold;
    const personalBest = Math.floor(state.time) > state.meta.totals.bestTime;
    state.meta.goldBank += victoryGold;
    state.meta.crudeAugmentCaches += bonusCrudeCachesAwarded;
    state.meta.ardonisAugmentCaches += bonusArdonisCachesAwarded;
    state.meta.totals.runs += 1;
    state.meta.totals.kills += state.kills;
    state.meta.totals.bestTime = Math.max(state.meta.totals.bestTime, Math.floor(state.time));
    state.meta.totals.bestVictoryTime = Math.max(state.meta.totals.bestVictoryTime || 0, state.currentRun.goalTime);
    state.meta.totals.creditsEarned += victoryGold;
    const ventariUnlockedAfter = ventariSystemUnlocked();
    const ventariJustUnlocked = !ventariUnlockedBefore && ventariUnlockedAfter;
    state.runStats.creditsEarned = victoryGold;
    state.runStats.bonusAugmentsAwarded = bonusAugmentsAwarded;
    state.runStats.crudeCachesAwarded = bonusCrudeCachesAwarded;
    state.runStats.ardonisCachesAwarded = bonusArdonisCachesAwarded;
    saveMetaProgression();
    renderMetaUpgrades();
    const crudeRewardText = cacheRewards.firstTime
      ? `First-clear signature logged for ${cacheRewards.comboLabel}. Two Crude caches recovered.`
      : bonusCrudeCachesAwarded > 0
        ? `Repeat-clear cache roll succeeded. One Crude cache recovered.`
        : `No repeat Crude cache this time. Future clears still roll at ${Math.round(cacheRewards.repeatChance * 100)}%.`;
    statusText.textContent = `You survived the voyage. Double credits secured. ${crudeRewardText} ${bonusArdonisCachesAwarded} Ardonis cache secured.${ventariJustUnlocked ? " Ventari System route unlocked." : ""}`;
    state.pendingHangarMessage = cacheRewards.firstTime
      ? `Jump successful. ${cacheRewards.comboLabel} cleared for the first time. You banked ${victoryGold} Ardonis Credits, recovered ${bonusCrudeCachesAwarded} Crude Augment Caches, and secured ${bonusArdonisCachesAwarded} Ardonis Augment Cache.${ventariJustUnlocked ? " Ventari System route unlocked." : ""}`
      : bonusCrudeCachesAwarded > 0
        ? `Jump successful. You banked ${victoryGold} Ardonis Credits, recovered ${bonusCrudeCachesAwarded} bonus Crude Augment Cache from a repeat clear, and secured ${bonusArdonisCachesAwarded} Ardonis Augment Cache.${ventariJustUnlocked ? " Ventari System route unlocked." : ""}`
        : `Jump successful. You banked ${victoryGold} Ardonis Credits and secured ${bonusArdonisCachesAwarded} Ardonis Augment Cache.${ventariJustUnlocked ? " Ventari System route unlocked." : ""}`;
    showRunSummary({
      title: "Jump Successful",
      body: cacheRewards.firstTime
        ? `You completed the voyage, doubled your credits to ${victoryGold}, and logged a first-clear signature for ${cacheRewards.comboLabel}. That first-time completion awarded ${bonusCrudeCachesAwarded} Crude Augment Caches plus ${bonusArdonisCachesAwarded} Ardonis Augment Cache.${ventariJustUnlocked ? " Ventari System route access has been granted." : ""}`
        : bonusCrudeCachesAwarded > 0
          ? `You completed the voyage, doubled your credits to ${victoryGold}, rolled a bonus Crude Augment Cache on this repeat clear, and secured ${bonusArdonisCachesAwarded} Ardonis Augment Cache.${ventariJustUnlocked ? " Ventari System route access has been granted." : ""}`
          : `You completed the voyage, doubled your credits to ${victoryGold}, and secured ${bonusArdonisCachesAwarded} Ardonis Augment Cache. This route signature will keep rolling a ${Math.round(cacheRewards.repeatChance * 100)}% chance for a bonus Crude cache on future clears.${ventariJustUnlocked ? " Ventari System route access has been granted." : ""}`,
      personalBest,
    });
    return;
  }

  spawnWave(dt);
  updatePlayer(dt);
  updateRemotePilots(dt);
  updateAugmentSystems(dt);
  updateWeapons(dt);
  updateProjectiles(dt);
  if (state.mode === "death") {
    updateEffects(dt);
    updatePlayerDeathSequence(dt);
    updateCamera(dt);
    syncHud();
    return;
  }
  updateEnemies(dt);
  if (state.mode === "death") {
    updateEffects(dt);
    updatePlayerDeathSequence(dt);
    updateCamera(dt);
    syncHud();
    return;
  }
  updateAsteroids(dt);
  if (state.mode === "death") {
    updateEffects(dt);
    updatePlayerDeathSequence(dt);
    updateCamera(dt);
    syncHud();
    return;
  }
  updateOrbitBlades();
  updatePulses(dt);
  updateLootCrates(dt);
  updateGems(dt);
  updateEffects(dt);
  updateCamera(dt);
  syncHud();
}

function wrapLoop(value, max) {
  return ((value % max) + max) % max;
}

function backgroundViewport(parallax = 1) {
  return {
    x: state.camera.x * parallax,
    y: state.camera.y * parallax,
    w: WIDTH / CAMERA_ZOOM,
    h: HEIGHT / CAMERA_ZOOM,
  };
}

function backgroundVisible(viewport, x, y, radius) {
  return !(
    x < viewport.x - radius ||
    y < viewport.y - radius ||
    x > viewport.x + viewport.w + radius ||
    y > viewport.y + viewport.h + radius
  );
}

function drawScreenStarfield(ventari, time) {
  const layers = ventari
    ? [
      { count: 34, size: 1.4, speedX: -4.2, speedY: 7.2, alpha: 0.42, palette: ["255,255,255", "152,255,182", "207,150,255"] },
      { count: 18, size: 2.3, speedX: -8.6, speedY: 13.8, alpha: 0.2, palette: ["190,244,255", "211,171,255"] },
    ]
    : [
      { count: 30, size: 1.35, speedX: -3.2, speedY: 5.4, alpha: 0.38, palette: ["255,255,255", "138,246,255"] },
      { count: 16, size: 2.1, speedX: -6.8, speedY: 10.6, alpha: 0.18, palette: ["190,244,255", "181,161,255"] },
    ];

  ctx.save();
  for (const layer of layers) {
    for (let i = 0; i < layer.count; i += 1) {
      const seedX = (i * 97 + (i % 5) * 29) % WIDTH;
      const seedY = (i * 157 + (i % 7) * 19) % HEIGHT;
      const x = wrapLoop(seedX + time * layer.speedX * (0.72 + (i % 4) * 0.16), WIDTH + 70) - 35;
      const y = wrapLoop(seedY + time * layer.speedY * (0.76 + (i % 6) * 0.12), HEIGHT + 70) - 35;
      const twinkle = 0.48 + (Math.sin(time * (1.1 + layer.size * 0.12) + i * 1.37) * 0.5 + 0.5) * 0.52;
      const size = layer.size + (i % 9 === 0 ? 0.85 : 0);
      const rgb = layer.palette[i % layer.palette.length];
      ctx.fillStyle = `rgba(${rgb}, ${layer.alpha * twinkle})`;
      ctx.fillRect(x, y, size, size);

      if (size > 2.4) {
        ctx.fillStyle = `rgba(${rgb}, ${layer.alpha * 0.13 * twinkle})`;
        ctx.fillRect(x - size, y - 0.45, size * 3, size * 1.5);
        ctx.fillRect(x - 0.45, y - size, size * 1.5, size * 3);
      }
    }
  }
  ctx.restore();
}

function drawBackgroundNebulae(ventari, time, viewport) {
  const count = ventari ? 12 : 10;
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  for (let i = 0; i < count; i += 1) {
    const baseX = (i * 311 + 120) % WORLD_W;
    const baseY = (i * 223 + 80) % WORLD_H;
    const driftX = Math.sin(time * 0.12 + i * 0.84) * (ventari ? 88 : 52) + time * (ventari ? 6.2 : 3.1) * (i % 2 === 0 ? 1 : -1);
    const driftY = Math.cos(time * 0.1 + i * 1.13) * (ventari ? 66 : 38) + time * (ventari ? 1.6 : 0.9);
    const x = wrapLoop(baseX + driftX, WORLD_W);
    const y = wrapLoop(baseY + driftY, WORLD_H);
    const radius = (ventari ? 132 : 118) + (i % 4) * (ventari ? 34 : 28);
    if (!backgroundVisible(viewport, x, y, radius + 40)) continue;

    const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
    if (ventari) {
      if (i % 2 === 0) {
        grad.addColorStop(0, "rgba(123,255,184,0.16)");
        grad.addColorStop(0.55, "rgba(99,189,255,0.09)");
      } else {
        grad.addColorStop(0, "rgba(211,142,255,0.16)");
        grad.addColorStop(0.55, "rgba(123,255,184,0.07)");
      }
    } else if (i % 2 === 0) {
      grad.addColorStop(0, "rgba(96,184,255,0.14)");
      grad.addColorStop(0.55, "rgba(140,130,255,0.08)");
    } else {
      grad.addColorStop(0, "rgba(144,120,255,0.13)");
      grad.addColorStop(0.55, "rgba(96,184,255,0.07)");
    }
    grad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawAsteroidBackdrop(time, viewport) {
  ctx.save();
  for (let i = 0; i < 10; i += 1) {
    const baseX = (i * 389 + 160) % WORLD_W;
    const baseY = (i * 271 + 120) % WORLD_H;
    const radius = 48 + (i % 4) * 20;
    const x = wrapLoop(baseX - time * (7.5 + (i % 3) * 1.6) + Math.sin(time * 0.15 + i) * 24, WORLD_W);
    const y = wrapLoop(baseY + Math.cos(time * 0.12 + i * 0.72) * 28, WORLD_H);
    if (!backgroundVisible(viewport, x, y, radius * 2.3)) continue;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(time * (0.05 + (i % 5) * 0.012) + i * 0.7);
    ctx.fillStyle = i % 2 === 0 ? "rgba(86, 106, 136, 0.12)" : "rgba(60, 78, 102, 0.1)";
    ctx.beginPath();
    ctx.moveTo(radius * 0.95, 0);
    for (let point = 1; point <= 8; point += 1) {
      const angle = (Math.PI * 2 * point) / 8;
      const jag = 0.74 + ((point + i) % 3) * 0.16;
      ctx.lineTo(Math.cos(angle) * radius * jag, Math.sin(angle) * radius * jag);
    }
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "rgba(12, 17, 28, 0.1)";
    ctx.beginPath();
    ctx.arc(-radius * 0.12, radius * 0.08, radius * 0.52, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  ctx.restore();
}

function drawVentariBackdrop(time, viewport) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  for (let i = 0; i < 7; i += 1) {
    const baseX = (i * 463 + 180) % WORLD_W;
    const baseY = (i * 317 + 160) % WORLD_H;
    const width = 250 + (i % 3) * 86;
    const height = 60 + (i % 2) * 28;
    const x = wrapLoop(baseX + Math.sin(time * 0.14 + i * 0.7) * 96 + time * (i % 2 === 0 ? 5.8 : -4.4), WORLD_W);
    const y = wrapLoop(baseY + Math.cos(time * 0.11 + i * 1.03) * 70, WORLD_H);
    if (!backgroundVisible(viewport, x, y, width * 0.7)) continue;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.sin(time * 0.08 + i) * 0.46 + i * 0.22);
    const grad = ctx.createLinearGradient(-width / 2, 0, width / 2, 0);
    if (i % 2 === 0) {
      grad.addColorStop(0, "rgba(0,0,0,0)");
      grad.addColorStop(0.25, "rgba(123,255,184,0.08)");
      grad.addColorStop(0.6, "rgba(104,189,255,0.16)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
    } else {
      grad.addColorStop(0, "rgba(0,0,0,0)");
      grad.addColorStop(0.24, "rgba(211,142,255,0.08)");
      grad.addColorStop(0.58, "rgba(123,255,184,0.14)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
    }
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(-width * 0.5, 0);
    ctx.bezierCurveTo(-width * 0.22, -height * 1.18, width * 0.18, height * 1.12, width * 0.5, 0);
    ctx.bezierCurveTo(width * 0.16, height * 0.34, -width * 0.18, -height * 0.34, -width * 0.5, 0);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = i % 2 === 0 ? "rgba(200,255,232,0.12)" : "rgba(237,208,255,0.12)";
    ctx.lineWidth = 2.1;
    ctx.stroke();
    ctx.restore();
  }
  ctx.restore();
}

function drawBackground() {
  const ventari = ventariVoyageActive();
  const time = state.time;
  const midParallax = ventari ? 0.3 : 0.26;
  const farParallax = ventari ? 0.18 : 0.14;
  const grad = ctx.createLinearGradient(0, 0, 0, HEIGHT);
  if (ventari) {
    grad.addColorStop(0, "#18213c");
    grad.addColorStop(0.55, "#100f27");
    grad.addColorStop(1, "#080812");
  } else {
    grad.addColorStop(0, "#111a33");
    grad.addColorStop(1, "#060b15");
  }
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.save();
  ctx.scale(CAMERA_ZOOM, CAMERA_ZOOM);
  ctx.translate(-state.camera.x, -state.camera.y);
  ctx.fillStyle = ventari ? "#0b1020" : "#091120";
  ctx.fillRect(0, 0, WORLD_W, WORLD_H);

  ctx.save();
  ctx.translate(state.camera.x * (1 - midParallax), state.camera.y * (1 - midParallax));
  const midViewport = backgroundViewport(midParallax);
  drawBackgroundNebulae(ventari, time, midViewport);
  if (ventari) {
    drawVentariBackdrop(time, midViewport);
  } else {
    drawAsteroidBackdrop(time, midViewport);
  }
  ctx.restore();

  ctx.save();
  ctx.translate(state.camera.x * (1 - farParallax), state.camera.y * (1 - farParallax));
  const farViewport = backgroundViewport(farParallax);
  for (let i = 0; i < 180; i += 1) {
    const sx = wrapLoop((i * 173) % WORLD_W + time * ((i % 3) - 1) * (ventari ? 1.8 : 0.9), WORLD_W);
    const sy = wrapLoop((i * 97) % WORLD_H + time * (ventari ? 1.2 + (i % 4) * 0.26 : 0.5 + (i % 5) * 0.12), WORLD_H);
    if (!backgroundVisible(farViewport, sx, sy, 20)) continue;
    const twinkle = 0.45 + (Math.sin(time * (0.8 + (i % 5) * 0.06) + i * 1.29) * 0.5 + 0.5) * 0.55;
    ctx.fillStyle = ventari
      ? i % 5 === 0 ? `rgba(152,255,182,${0.36 + twinkle * 0.46})` : i % 7 === 0 ? `rgba(210,146,255,${0.3 + twinkle * 0.4})` : `rgba(255,255,255,${0.24 + twinkle * 0.34})`
      : i % 7 === 0 ? `rgba(138,246,255,${0.34 + twinkle * 0.48})` : `rgba(255,255,255,${0.22 + twinkle * 0.36})`;
    const size = i % 11 === 0 ? 3 : 2;
    ctx.fillRect(sx, sy, size, size);
  }
  ctx.restore();

  for (let x = 0; x < WORLD_W; x += 96) {
    ctx.strokeStyle = ventari ? "rgba(162, 236, 158, 0.045)" : "rgba(124,190,255,0.035)";
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, WORLD_H);
    ctx.stroke();
  }
  for (let y = 0; y < WORLD_H; y += 96) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(WORLD_W, y);
    ctx.stroke();
  }

  const scanX = wrapLoop(time * (ventari ? 52 : 28), WORLD_W + 320) - 160;
  const scanY = wrapLoop(time * (ventari ? 34 : 22), WORLD_H + 280) - 140;
  const verticalScan = ctx.createLinearGradient(scanX - 140, 0, scanX + 140, 0);
  verticalScan.addColorStop(0, "rgba(0,0,0,0)");
  verticalScan.addColorStop(0.5, ventari ? "rgba(152,255,182,0.05)" : "rgba(138,246,255,0.04)");
  verticalScan.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = verticalScan;
  ctx.fillRect(scanX - 140, 0, 280, WORLD_H);

  const horizontalScan = ctx.createLinearGradient(0, scanY - 120, 0, scanY + 120);
  horizontalScan.addColorStop(0, "rgba(0,0,0,0)");
  horizontalScan.addColorStop(0.5, ventari ? "rgba(210,146,255,0.04)" : "rgba(124,190,255,0.03)");
  horizontalScan.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = horizontalScan;
  ctx.fillRect(0, scanY - 120, WORLD_W, 240);

  ctx.save();
  ctx.translate(state.camera.x * (1 - farParallax), state.camera.y * (1 - farParallax));
  for (let i = 0; i < 36; i += 1) {
    const rx = wrapLoop((i * 271) % WORLD_W + Math.sin(time * 0.18 + i * 0.5) * (ventari ? 44 : 20), WORLD_W);
    const ry = wrapLoop((i * 193) % WORLD_H + Math.cos(time * 0.15 + i * 0.8) * (ventari ? 32 : 18), WORLD_H);
    if (!backgroundVisible(farViewport, rx, ry, 90)) continue;
    ctx.fillStyle = ventari
      ? i % 2 === 0 ? "rgba(112,255,176,0.1)" : "rgba(181,112,255,0.1)"
      : i % 2 === 0 ? "rgba(96,184,255,0.09)" : "rgba(156,125,255,0.08)";
    ctx.beginPath();
    ctx.arc(rx, ry, 28 + (i % 5) * 8, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
  ctx.restore();

  drawScreenStarfield(ventari, time);
}

function drawNetworkPilots() {
  const remotes = Object.values(multiplayerRuntime().remotePilots || {});
  if (!remotes.length) return;

  for (const pilot of remotes) {
    if (!pilot) continue;
    const primaryId = pilot.primaryWeapon || "emberBolt";
    const accent = primaryId === "plasmaCannon" ? "#7ae0ff" : "#ffd585";
    const hullColor = "#16243b";
    const wingColor = "#273b59";

    const phazer = pilot.weapons?.photonPhazer;
    if ((phazer?.active || 0) && (phazer?.beamAlpha || 0) > 0.02) {
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      ctx.strokeStyle = `rgba(120, 236, 255, ${0.26 * phazer.beamAlpha})`;
      ctx.lineWidth = 12;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(pilot.x, pilot.y);
      ctx.lineTo(phazer.beamEndX || pilot.x, phazer.beamEndY || pilot.y);
      ctx.stroke();
      ctx.strokeStyle = `rgba(232, 251, 255, ${0.86 * phazer.beamAlpha})`;
      ctx.lineWidth = 3.4;
      ctx.beginPath();
      ctx.moveTo(pilot.x, pilot.y);
      ctx.lineTo(phazer.beamEndX || pilot.x, phazer.beamEndY || pilot.y);
      ctx.stroke();
      ctx.restore();
    }

    const orbitLevel = pilot.weapons?.orbitBlades?.level || 0;
    if (orbitLevel > 0) {
      const count = Math.min(6, orbitBladeCount(orbitLevel));
      const radius = orbitBladeRadius(orbitLevel);
      const baseAngle = pilot.weapons?.orbitBlades?.angle || 0;
      for (let i = 0; i < count; i += 1) {
        const angle = baseAngle + (Math.PI * 2 * i) / count;
        const bx = pilot.x + Math.cos(angle) * radius;
        const by = pilot.y + Math.sin(angle) * radius;
        ctx.save();
        ctx.translate(bx, by);
        ctx.rotate(angle + Math.PI / 2);
        ctx.fillStyle = "#10223b";
        ctx.beginPath();
        ctx.moveTo(0, -8);
        ctx.lineTo(7, 8);
        ctx.lineTo(0, 4);
        ctx.lineTo(-7, 8);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "rgba(138, 246, 255, 0.8)";
        ctx.lineWidth = 1.4;
        ctx.stroke();
        ctx.restore();
      }
    }

    ctx.save();
    ctx.translate(pilot.x, pilot.y);
    ctx.rotate((pilot.facing || 0) + Math.PI / 2);

    const thrustGlow = Math.max(0.18, pilot.engineOutput || 0);
    ctx.fillStyle = `rgba(106, 236, 255, ${0.18 + thrustGlow * 0.22})`;
    ctx.beginPath();
    ctx.ellipse(0, 20, 14, 16 + thrustGlow * 8, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = hullColor;
    ctx.beginPath();
    ctx.moveTo(0, -18);
    ctx.lineTo(14, 13);
    ctx.lineTo(5, 9);
    ctx.lineTo(0, 16);
    ctx.lineTo(-5, 9);
    ctx.lineTo(-14, 13);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = wingColor;
    ctx.beginPath();
    ctx.moveTo(0, -14);
    ctx.lineTo(10, 10);
    ctx.lineTo(0, 6);
    ctx.lineTo(-10, 10);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = accent;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -18);
    ctx.lineTo(14, 13);
    ctx.lineTo(5, 9);
    ctx.lineTo(0, 16);
    ctx.lineTo(-5, 9);
    ctx.lineTo(-14, 13);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = "rgba(215, 244, 255, 0.9)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(0, -11);
    ctx.lineTo(0, 8);
    ctx.stroke();

    ctx.restore();

    if ((pilot.shield || 0) > 0) {
      const shieldRatio = clamp(pilot.shield / Math.max(1, pilot.maxShield || pilot.shield || 1), 0, 1);
      ctx.save();
      ctx.strokeStyle = `rgba(122, 224, 255, ${0.24 + shieldRatio * 0.32})`;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.arc(pilot.x, pilot.y, 18.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    ctx.save();
    ctx.font = "600 12px Rajdhani, sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#dff8ff";
    ctx.strokeStyle = "rgba(6, 14, 28, 0.82)";
    ctx.lineWidth = 3.4;
    ctx.strokeText(pilot.name || "Wing", pilot.x, pilot.y - 28);
    ctx.fillText(pilot.name || "Wing", pilot.x, pilot.y - 28);
    ctx.restore();
  }
}

function drawPlayer() {
  const player = state.player;
  if (player.deathSequence?.hidden) return;
  if (player.deathSequence?.active) {
    const death = player.deathSequence;
    const preBurst = death.time < PLAYER_DEATH_BURST_TIME;
    if (preBurst) {
      const glowT = clamp(death.time / PLAYER_DEATH_BURST_TIME, 0, 1);
      const jitter = (1 - glowT) * 0.06 + glowT * 0.78;
      ctx.save();
      ctx.translate(
        player.x + Math.sin(death.time * 24) * jitter,
        player.y + Math.cos(death.time * 19) * jitter
      );
      ctx.rotate(player.rotation);

      const glowRadius = 46 + glowT * 62;
      const glow = ctx.createRadialGradient(0, 0, 8, 0, 0, glowRadius);
      glow.addColorStop(0, "rgba(255,255,255,0.95)");
      glow.addColorStop(0.28, "rgba(255,236,184,0.88)");
      glow.addColorStop(0.58, "rgba(255,132,100,0.52)");
      glow.addColorStop(1, "rgba(255,88,88,0)");
      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      const outerBeamAlpha = Math.pow(glowT, 1.55) * 0.58;
      if (outerBeamAlpha > 0.02) {
        ctx.lineCap = "round";
        for (let i = 0; i < 6; i += 1) {
          const beamAngle = death.time * 0.72 + (Math.PI * 2 * i) / 6;
          const beamInner = 16 + glowT * 8;
          const beamOuter = 74 + glowT * 158 + Math.sin(death.time * 1.8 + i * 1.4) * 10;
          const beamWidth = 4 + glowT * 10;

          ctx.strokeStyle = `rgba(255, 198, 156, ${outerBeamAlpha * 0.44})`;
          ctx.lineWidth = beamWidth;
          ctx.beginPath();
          ctx.moveTo(Math.cos(beamAngle) * beamInner, Math.sin(beamAngle) * beamInner);
          ctx.lineTo(Math.cos(beamAngle) * beamOuter, Math.sin(beamAngle) * beamOuter);
          ctx.stroke();

          ctx.strokeStyle = `rgba(255, 248, 224, ${outerBeamAlpha})`;
          ctx.lineWidth = Math.max(1.8, beamWidth * 0.3);
          ctx.beginPath();
          ctx.moveTo(Math.cos(beamAngle) * (beamInner + 6), Math.sin(beamAngle) * (beamInner + 6));
          ctx.lineTo(Math.cos(beamAngle) * beamOuter, Math.sin(beamAngle) * beamOuter);
          ctx.stroke();
        }
      }

      ctx.globalCompositeOperation = "source-over";
      ctx.shadowBlur = 34 + glowT * 34;
      ctx.shadowColor = "rgba(255, 126, 110, 0.88)";
      const hullGradient = ctx.createLinearGradient(0, -36, 0, 28);
      hullGradient.addColorStop(0, "#ffffff");
      hullGradient.addColorStop(0.45, "#ffe5d6");
      hullGradient.addColorStop(1, "#ff8b72");
      ctx.fillStyle = hullGradient;
      ctx.beginPath();
      ctx.moveTo(0, -36);
      ctx.lineTo(19, -8);
      ctx.lineTo(33, 12);
      ctx.lineTo(14, 20);
      ctx.lineTo(8, 28);
      ctx.lineTo(-8, 28);
      ctx.lineTo(-14, 20);
      ctx.lineTo(-33, 12);
      ctx.lineTo(-19, -8);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = `rgba(255, 248, 240, ${0.4 + glowT * 0.42})`;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(-12, -10);
      ctx.lineTo(12, 8);
      ctx.moveTo(-4, -18);
      ctx.lineTo(4, 12);
      ctx.moveTo(-18, 2);
      ctx.lineTo(18, 2);
      ctx.stroke();

      ctx.globalCompositeOperation = "screen";
      const corePulse = 10 + glowT * 16 + Math.sin(death.time * 6.8) * 1.8;
      const coreGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, corePulse);
      coreGlow.addColorStop(0, `rgba(255,255,255,${0.7 + glowT * 0.22})`);
      coreGlow.addColorStop(0.35, `rgba(255,216,170,${0.42 + glowT * 0.2})`);
      coreGlow.addColorStop(1, "rgba(255,112,92,0)");
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(0, 0, corePulse, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      return;
    }

    const pieceAlpha = clamp(1 - (death.time - PLAYER_DEATH_BURST_TIME) / (PLAYER_DEATH_SEQUENCE_TIME - PLAYER_DEATH_BURST_TIME), 0, 1);
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    const emberGlow = ctx.createRadialGradient(player.x, player.y, 10, player.x, player.y, 92);
    emberGlow.addColorStop(0, `rgba(255, 238, 194, ${0.42 * pieceAlpha})`);
    emberGlow.addColorStop(0.38, `rgba(255, 124, 88, ${0.24 * pieceAlpha})`);
    emberGlow.addColorStop(1, "rgba(255, 92, 92, 0)");
    ctx.fillStyle = emberGlow;
    ctx.beginPath();
    ctx.arc(player.x, player.y, 92, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    for (const piece of death.pieces) {
      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate(piece.angle);
      ctx.globalAlpha = pieceAlpha;
      ctx.shadowBlur = 18;
      ctx.shadowColor = "rgba(255, 128, 112, 0.7)";
      ctx.fillStyle = piece.fill;
      ctx.beginPath();
      ctx.moveTo(piece.points[0][0], piece.points[0][1]);
      for (let i = 1; i < piece.points.length; i += 1) {
        ctx.lineTo(piece.points[i][0], piece.points[i][1]);
      }
      ctx.closePath();
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = piece.stroke;
      ctx.lineWidth = 1.6;
      ctx.stroke();
      ctx.restore();
    }
    return;
  }
  const pulseWave = Math.sin(player.enginePulse);
  const pulseNormalized = pulseWave * 0.5 + 0.5;
  const engineOutput = player.engineOutput || 0;
  const flamePulse = 0.88 + pulseNormalized * 0.18 + (player.boosting ? 0.1 : 0);
  const flameLength = 5 + engineOutput * (player.boosting ? 38 : 24) * flamePulse;
  const flameWidth = 2.6 + engineOutput * (player.boosting ? 7.2 : 5.1) * (0.94 + pulseNormalized * 0.08);
  const coreLength = flameLength * (0.52 + engineOutput * 0.14);
  const coreWidth = flameWidth * 0.44;
  const flameRootY = 22 - engineOutput * 2.4;
  const engineGlow = 0.14 + engineOutput * (player.boosting ? 0.92 : 0.72);
  const nozzleGlowHeight = 2.8 + engineOutput * (player.boosting ? 7.2 : 5.1);

  if (player.slowingField > 0) {
    ctx.save();
    ctx.globalAlpha = 0.12;
    ctx.fillStyle = "#8af6ff";
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.slowFieldRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 0.28;
    ctx.strokeStyle = "#8af6ff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.slowFieldRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  if (player.shockBarrier) {
    ctx.save();
    ctx.globalAlpha = 0.16;
    ctx.strokeStyle = "#79ffd4";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.shockBarrierRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  if (player.gravityPulseFlash > 0) {
    ctx.save();
    ctx.globalAlpha = player.gravityPulseFlash * 0.35;
    ctx.strokeStyle = "#b69eff";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.slowFieldRadius * (1.08 + (1 - player.gravityPulseFlash) * 0.26), 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  ctx.save();
  ctx.translate(player.x, player.y);
  ctx.rotate(player.rotation);
  const dashRollScaleX = player.dashTimer > 0
    ? SHIP_RENDER_SCALE * (0.16 + Math.abs(Math.cos(player.dashRollPhase)) * 0.84)
    : SHIP_RENDER_SCALE;
  const dashRollScaleY = player.dashTimer > 0
    ? SHIP_RENDER_SCALE * (1.04 + Math.abs(Math.sin(player.dashRollPhase)) * 0.2)
    : SHIP_RENDER_SCALE;
  ctx.scale(dashRollScaleX, dashRollScaleY);
  if (player.dashTimer > 0) {
    ctx.globalAlpha = 0.82 + Math.abs(Math.sin(player.dashRollPhase * 0.9)) * 0.18;
  }

  ctx.shadowBlur = 28;
  ctx.shadowColor = "rgba(96, 184, 255, 0.24)";

  for (const side of [-1, 1]) {
    const engineX = side * 12;
    if (engineOutput > 0.02) {
      ctx.save();
      ctx.translate(engineX, flameRootY);
      ctx.globalAlpha = engineGlow;
      const flameGradient = ctx.createLinearGradient(0, 0, 0, flameLength);
      flameGradient.addColorStop(0, "#fff4d8");
      flameGradient.addColorStop(0.22, "#ffe58f");
      flameGradient.addColorStop(0.56, "#ffb347");
      flameGradient.addColorStop(0.84, "#ff6f1c");
      flameGradient.addColorStop(1, "rgba(255, 90, 0, 0)");
      ctx.fillStyle = flameGradient;
      ctx.beginPath();
      ctx.moveTo(-flameWidth, 0);
      ctx.quadraticCurveTo(-flameWidth * 0.82, flameLength * 0.32, -flameWidth * 0.24, flameLength * 0.7);
      ctx.quadraticCurveTo(0, flameLength, flameWidth * 0.24, flameLength * 0.7);
      ctx.quadraticCurveTo(flameWidth * 0.82, flameLength * 0.32, flameWidth, 0);
      ctx.closePath();
      ctx.fill();

      const coreGradient = ctx.createLinearGradient(0, 0, 0, coreLength);
      coreGradient.addColorStop(0, "rgba(255, 255, 255, 0.96)");
      coreGradient.addColorStop(0.38, "rgba(166, 245, 255, 0.9)");
      coreGradient.addColorStop(0.84, "rgba(90, 228, 255, 0)");
      ctx.globalAlpha = 0.34 + engineOutput * 0.44;
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.moveTo(-coreWidth, 0);
      ctx.quadraticCurveTo(-coreWidth * 0.74, coreLength * 0.34, 0, coreLength);
      ctx.quadraticCurveTo(coreWidth * 0.74, coreLength * 0.34, coreWidth, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    ctx.save();
    ctx.translate(engineX, 14);
    ctx.fillStyle = "#2d385d";
    ctx.fillRect(-5.5, -1, 11, 14);
    ctx.fillStyle = engineOutput > 0.08 ? (player.boosting ? "#d6fbff" : "#5ae4ff") : "rgba(90, 228, 255, 0.24)";
    ctx.fillRect(-2.2, 11 - nozzleGlowHeight, 4.4, nozzleGlowHeight);
    ctx.restore();
  }

  ctx.shadowBlur = 0;

  const wingGradient = ctx.createLinearGradient(0, -26, 0, 22);
  wingGradient.addColorStop(0, "#eaf4ff");
  wingGradient.addColorStop(0.55, "#9eb3d4");
  wingGradient.addColorStop(1, "#3a466d");
  ctx.fillStyle = wingGradient;
  ctx.beginPath();
  ctx.moveTo(0, -34);
  ctx.lineTo(19, -8);
  ctx.lineTo(33, 12);
  ctx.lineTo(42, 26);
  ctx.lineTo(18, 18);
  ctx.lineTo(9, 8);
  ctx.lineTo(-9, 8);
  ctx.lineTo(-18, 18);
  ctx.lineTo(-42, 26);
  ctx.lineTo(-33, 12);
  ctx.lineTo(-19, -8);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#1a2441";
  ctx.beginPath();
  ctx.moveTo(0, -38);
  ctx.lineTo(9, -28);
  ctx.lineTo(4, -12);
  ctx.lineTo(-4, -12);
  ctx.lineTo(-9, -28);
  ctx.closePath();
  ctx.fill();

  const fuselageGradient = ctx.createLinearGradient(0, -30, 0, 28);
  fuselageGradient.addColorStop(0, player.invuln > 0 ? "#f5fdff" : "#ffffff");
  fuselageGradient.addColorStop(0.5, "#d6e1f2");
  fuselageGradient.addColorStop(1, "#606d92");
  ctx.fillStyle = fuselageGradient;
  ctx.beginPath();
  ctx.moveTo(0, -36);
  ctx.lineTo(11, -18);
  ctx.lineTo(12, 18);
  ctx.lineTo(4, 28);
  ctx.lineTo(-4, 28);
  ctx.lineTo(-12, 18);
  ctx.lineTo(-11, -18);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#182544";
  ctx.beginPath();
  ctx.moveTo(0, -24);
  ctx.lineTo(7, -10);
  ctx.lineTo(7, 2);
  ctx.lineTo(0, 10);
  ctx.lineTo(-7, 2);
  ctx.lineTo(-7, -10);
  ctx.closePath();
  ctx.fill();

  const canopyGradient = ctx.createLinearGradient(0, -24, 0, 8);
  canopyGradient.addColorStop(0, "#87efff");
  canopyGradient.addColorStop(0.45, "#1cb3ff");
  canopyGradient.addColorStop(1, "#154fbc");
  ctx.fillStyle = canopyGradient;
  ctx.beginPath();
  ctx.moveTo(0, -22);
  ctx.lineTo(6, -10);
  ctx.lineTo(6, 5);
  ctx.lineTo(0, 13);
  ctx.lineTo(-6, 5);
  ctx.lineTo(-6, -10);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#0c1732";
  ctx.beginPath();
  ctx.moveTo(-29, 4);
  ctx.lineTo(-40, 24);
  ctx.lineTo(-16, 16);
  ctx.lineTo(-11, 4);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(29, 4);
  ctx.lineTo(40, 24);
  ctx.lineTo(16, 16);
  ctx.lineTo(11, 4);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#79e8ff";
  ctx.fillRect(-31, 9, 12, 3);
  ctx.fillRect(19, 9, 12, 3);

  ctx.strokeStyle = "rgba(8, 16, 34, 0.9)";
  ctx.lineWidth = 2;
  ctx.strokeRect(-6, 13, 12, 10);

  ctx.restore();

  if (player.boostUiAlpha > 0.02) {
    const barWidth = 36;
    const barHeight = 4;
    const barX = player.x - barWidth / 2;
    const barY = player.y + 34;
    const fillWidth = Math.max(0, (barWidth - 2) * (player.boostCharge / player.boostMax));
    const boostEmpty = player.boostCooldown > 0 && player.boostCharge <= 0.05;
    const redFlash = boostEmpty ? 0.32 + (Math.sin(player.enginePulse * 5.2) * 0.5 + 0.5) * 0.32 : 0;
    ctx.save();
    ctx.globalAlpha = player.boostUiAlpha;
    ctx.fillStyle = "rgba(18, 24, 32, 0.58)";
    ctx.fillRect(barX, barY, barWidth, barHeight);
    if (boostEmpty) {
      ctx.fillStyle = `rgba(214, 62, 74, ${redFlash.toFixed(3)})`;
      ctx.fillRect(barX + 1, barY + 1, barWidth - 2, barHeight - 2);
    } else {
      ctx.fillStyle = player.boosting ? "rgba(214, 221, 228, 0.96)" : "rgba(164, 172, 180, 0.72)";
      ctx.fillRect(barX + 1, barY + 1, fillWidth, barHeight - 2);
    }
    ctx.strokeStyle = boostEmpty ? `rgba(255, 110, 126, ${Math.min(0.88, redFlash + 0.18).toFixed(3)})` : "rgba(132, 142, 150, 0.36)";
    ctx.lineWidth = 1;
    ctx.strokeRect(barX + 0.5, barY + 0.5, barWidth - 1, barHeight - 1);
    ctx.restore();
  }
}

function drawOrbitBlades() {
  const level = state.player.weapons.orbitBlades.level;
  if (level <= 0) return;
  const count = orbitBladeCount(level);
  const radius = orbitBladeRadius(level);
  const sprite = getDroneSprite("combat");
  for (let i = 0; i < count; i += 1) {
    const angle = state.player.weapons.orbitBlades.angle + (Math.PI * 2 * i) / count;
    const x = state.player.x + Math.cos(angle) * radius;
    const y = state.player.y + Math.sin(angle) * radius;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle + Math.PI / 2);
    ctx.drawImage(sprite, -16, -16, 32, 32);
    ctx.restore();
  }
}

function drawSupportDrones() {
  const player = state.player;

  if (player.droneMissilePods && player.droneMissileCount > 0) {
    const pods = supportDronePoints(player, "missile");
    const missileSprite = getDroneSprite("missile");
    for (const pod of pods) {
      ctx.save();
      ctx.translate(pod.x, pod.y);
      ctx.rotate(pod.angle + Math.PI / 2);
      ctx.drawImage(missileSprite, -13, -13, 26, 26);
      ctx.restore();
    }
  }

  if (player.shieldProjectorCount > 0) {
    const drones = supportDronePoints(player, "shield");
    const shieldSprite = getDroneSprite("shield");
    for (const drone of drones) {
      ctx.save();
      ctx.globalAlpha = 0.82;
      ctx.strokeStyle = "rgba(138, 246, 255, 0.55)";
      ctx.beginPath();
      ctx.moveTo(player.x, player.y);
      ctx.lineTo(drone.x, drone.y);
      ctx.stroke();
      ctx.translate(drone.x, drone.y);
      ctx.rotate(drone.angle + Math.PI / 2);
      ctx.drawImage(shieldSprite, -14, -14, 28, 28);
      ctx.restore();
    }
  }
}

function buildEnemySprite(type, flashed = false) {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const c = canvas.getContext("2d");
  c.imageSmoothingEnabled = false;
  const px = (x, y, w, h, color) => {
    c.fillStyle = color;
    c.fillRect(x, y, w, h);
  };
  const data = {
    shade: { body: flashed ? "#e6f8ff" : "#d74a6d", dark: "#64172a", accent: "#ff9caf" },
    hound: { body: flashed ? "#fff0d8" : "#f28f3b", dark: "#702b00", accent: "#ffd27d" },
    brute: { body: flashed ? "#efe7ff" : "#8d5cf6", dark: "#35205d", accent: "#c9b2ff" },
    witch: { body: flashed ? "#ecfbff" : "#66c7f4", dark: "#174f7f", accent: "#9eeeff" },
    aegis: { body: flashed ? "#f2fbff" : "#86d8ff", dark: "#224768", accent: "#d8f1ff" },
    drifter: { body: flashed ? "#effff8" : "#74ffc9", dark: "#1d5c4f", accent: "#d1fff0" },
    reactor: { body: flashed ? "#fff3ea" : "#ff8e54", dark: "#6f2e12", accent: "#ffd27d" },
    relay: { body: flashed ? "#f2fff1" : "#8bff96", dark: "#215829", accent: "#d8ffb6" },
    scrambler: { body: flashed ? "#faf0ff" : "#bf8bff", dark: "#3d1d61", accent: "#efd8ff" },
    viper: { body: flashed ? "#fff1f4" : "#ff6a7a", dark: "#6f1d31", accent: "#ffd5a3" },
    bastion: { body: flashed ? "#eef9ff" : "#73c6ff", dark: "#1b3d63", accent: "#ffe08b" },
    leviathan: { body: flashed ? "#f8f3ff" : "#9f8cff", dark: "#322357", accent: "#ffd6a8" },
  }[type];
  const cx = 32;
  const cy = 32;

  if (type === "shade") {
    px(cx - 2, cy - 22, 4, 6, data.body); px(cx - 6, cy - 16, 12, 6, data.body); px(cx - 10, cy - 10, 20, 6, data.body);
    px(cx - 14, cy - 4, 28, 6, data.body); px(cx - 10, cy + 2, 20, 6, data.body); px(cx - 6, cy + 8, 12, 4, data.body);
    px(cx - 4, cy - 4, 8, 12, data.dark); px(cx - 8, cy - 6, 4, 4, data.accent); px(cx + 4, cy - 6, 4, 4, data.accent);
  } else if (type === "hound") {
    px(cx - 2, cy - 20, 4, 4, data.body); px(cx - 6, cy - 16, 12, 4, data.body); px(cx - 10, cy - 12, 20, 4, data.body);
    px(cx - 18, cy - 8, 8, 4, data.body); px(cx + 10, cy - 8, 8, 4, data.body); px(cx - 14, cy - 4, 28, 8, data.body);
    px(cx - 8, cy + 4, 16, 6, data.body); px(cx - 4, cy - 8, 8, 14, data.dark); px(cx - 14, cy - 2, 6, 4, data.accent); px(cx + 8, cy - 2, 6, 4, data.accent);
  } else if (type === "brute") {
    px(cx - 4, cy - 26, 8, 6, data.body); px(cx - 10, cy - 20, 20, 6, data.body); px(cx - 16, cy - 14, 32, 8, data.body);
    px(cx - 22, cy - 6, 44, 10, data.body); px(cx - 18, cy + 4, 36, 10, data.body); px(cx - 12, cy + 14, 24, 6, data.body);
    px(cx - 8, cy - 12, 16, 24, data.dark); px(cx - 18, cy + 6, 6, 4, data.accent); px(cx + 12, cy + 6, 6, 4, data.accent);
  } else if (type === "witch") {
    px(cx - 2, cy - 22, 4, 6, data.body); px(cx - 8, cy - 16, 16, 6, data.body); px(cx - 12, cy - 10, 24, 6, data.body);
    px(cx - 16, cy - 4, 32, 8, data.body); px(cx - 12, cy + 4, 24, 8, data.body); px(cx - 8, cy + 12, 16, 4, data.body);
    px(cx - 4, cy - 8, 8, 16, data.dark); px(cx - 12, cy - 2, 24, 2, "#c5f1ff"); px(cx - 14, cy + 2, 4, 4, data.accent); px(cx + 10, cy + 2, 4, 4, data.accent);
  } else if (type === "aegis") {
    px(cx - 4, cy - 24, 8, 8, data.body); px(cx - 12, cy - 16, 24, 8, data.body); px(cx - 18, cy - 8, 36, 8, data.body);
    px(cx - 24, cy, 48, 10, data.body); px(cx - 18, cy + 10, 36, 8, data.body); px(cx - 10, cy + 18, 20, 6, data.body);
    px(cx - 8, cy - 8, 16, 22, data.dark); px(cx - 20, cy + 2, 6, 4, data.accent); px(cx + 14, cy + 2, 6, 4, data.accent);
  } else if (type === "drifter") {
    px(cx - 6, cy - 18, 12, 8, data.body); px(cx - 14, cy - 10, 28, 8, data.body); px(cx - 18, cy - 2, 36, 10, data.body);
    px(cx - 14, cy + 8, 28, 8, data.body); px(cx - 6, cy + 16, 12, 6, data.body);
    px(cx - 8, cy - 6, 16, 18, data.dark); px(cx - 4, cy - 20, 8, 4, data.accent); px(cx - 22, cy + 2, 4, 4, data.accent); px(cx + 18, cy + 2, 4, 4, data.accent);
  } else if (type === "reactor") {
    px(cx - 8, cy - 20, 16, 8, data.body); px(cx - 16, cy - 12, 32, 8, data.body); px(cx - 22, cy - 4, 44, 10, data.body);
    px(cx - 16, cy + 6, 32, 8, data.body); px(cx - 8, cy + 14, 16, 8, data.body);
    px(cx - 10, cy - 8, 20, 20, data.dark); px(cx - 4, cy - 4, 8, 8, data.accent); px(cx - 20, cy + 2, 4, 4, data.accent); px(cx + 16, cy + 2, 4, 4, data.accent);
  } else if (type === "relay") {
    px(cx - 4, cy - 18, 8, 6, data.body); px(cx - 12, cy - 12, 24, 8, data.body); px(cx - 18, cy - 4, 36, 10, data.body);
    px(cx - 12, cy + 6, 24, 8, data.body); px(cx - 4, cy + 14, 8, 6, data.body);
    px(cx - 8, cy - 6, 16, 18, data.dark); px(cx - 2, cy - 2, 4, 8, data.accent); px(cx - 18, cy + 1, 6, 4, data.accent); px(cx + 12, cy + 1, 6, 4, data.accent);
    c.strokeStyle = "rgba(185, 255, 174, 0.92)";
    c.lineWidth = 2;
    c.beginPath();
    c.arc(cx, cy, 20, 0, Math.PI * 2);
    c.stroke();
  } else if (type === "scrambler") {
    px(cx - 2, cy - 22, 4, 6, data.body); px(cx - 8, cy - 16, 16, 6, data.body); px(cx - 14, cy - 10, 28, 6, data.body);
    px(cx - 18, cy - 4, 36, 8, data.body); px(cx - 12, cy + 4, 24, 8, data.body); px(cx - 6, cy + 12, 12, 6, data.body);
    px(cx - 6, cy - 8, 12, 18, data.dark); px(cx - 16, cy, 6, 4, data.accent); px(cx + 10, cy, 6, 4, data.accent);
    px(cx - 2, cy - 22, 4, 20, data.accent);
  } else if (type === "viper") {
    px(cx - 2, cy - 26, 4, 8, data.body); px(cx - 8, cy - 18, 16, 6, data.body); px(cx - 14, cy - 12, 28, 6, data.body);
    px(cx - 22, cy - 6, 44, 8, data.body); px(cx - 16, cy + 2, 32, 8, data.body); px(cx - 10, cy + 10, 20, 6, data.body);
    px(cx - 6, cy - 10, 12, 18, data.dark); px(cx - 18, cy - 2, 6, 4, data.accent); px(cx + 12, cy - 2, 6, 4, data.accent);
    px(cx - 20, cy + 8, 8, 4, data.dark); px(cx + 12, cy + 8, 8, 4, data.dark);
  } else if (type === "bastion") {
    px(cx - 6, cy - 28, 12, 8, data.body); px(cx - 16, cy - 20, 32, 8, data.body); px(cx - 24, cy - 12, 48, 10, data.body);
    px(cx - 30, cy - 2, 60, 12, data.body); px(cx - 26, cy + 10, 52, 12, data.body); px(cx - 18, cy + 22, 36, 8, data.body);
    px(cx - 10, cy - 10, 20, 28, data.dark); px(cx - 24, cy + 12, 8, 4, data.accent); px(cx + 16, cy + 12, 8, 4, data.accent);
    px(cx - 30, cy + 2, 6, 12, data.dark); px(cx + 24, cy + 2, 6, 12, data.dark);
    c.strokeStyle = "rgba(138, 246, 255, 0.95)";
    c.lineWidth = 2;
    c.beginPath();
    c.arc(cx, cy, 26, 0, Math.PI * 2);
    c.stroke();
  } else if (type === "leviathan") {
    px(cx - 8, cy - 30, 16, 8, data.body); px(cx - 20, cy - 22, 40, 8, data.body); px(cx - 28, cy - 14, 56, 10, data.body);
    px(cx - 34, cy - 4, 68, 14, data.body); px(cx - 30, cy + 10, 60, 12, data.body); px(cx - 22, cy + 22, 44, 10, data.body);
    px(cx - 12, cy - 14, 24, 34, data.dark); px(cx - 28, cy + 12, 8, 6, data.accent); px(cx + 20, cy + 12, 8, 6, data.accent);
    px(cx - 34, cy + 2, 8, 12, data.dark); px(cx + 26, cy + 2, 8, 12, data.dark); px(cx - 6, cy - 24, 12, 8, data.accent);
    c.strokeStyle = "rgba(206, 186, 255, 0.9)";
    c.lineWidth = 2;
    c.beginPath();
    c.arc(cx, cy + 4, 30, 0, Math.PI * 2);
    c.stroke();
  }
  return canvas;
}

function enemySpriteFor(enemy) {
  const key = `${enemy.type}:${enemy.hitFlash > 0 ? 1 : 0}:${enemy.slowed ? 1 : 0}`;
  if (!enemySpriteCache.has(key)) {
    enemySpriteCache.set(key, buildEnemySprite(enemy.type, enemy.hitFlash > 0 || enemy.slowed));
  }
  return enemySpriteCache.get(key);
}

function drawEnemyMeters(enemy) {
  if (!enemy.elite && (enemy.maxShield || 0) <= 0) return;

  if (enemy.maxShield > 0 && (enemy.shield > 0 || enemy.shieldFlash > 0)) {
    const shieldRatio = clamp(enemy.shield / enemy.maxShield, 0, 1);
    ctx.save();
    ctx.strokeStyle = enemy.shieldFlash > 0 ? "#f3feff" : "rgba(138, 246, 255, 0.78)";
    ctx.lineWidth = enemy.elite ? 3 : 2;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.radius + (enemy.elite ? 10 : 7), -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * shieldRatio);
    ctx.stroke();
    ctx.restore();
  }

  if (!enemy.elite) return;

  const width = Math.max(44, enemy.radius * 2.1);
  const x = enemy.x - width / 2;
  const shieldY = enemy.y - enemy.radius - 16;
  const hullY = shieldY + 7;
  ctx.save();
  ctx.fillStyle = "rgba(5, 10, 18, 0.78)";
  ctx.fillRect(x, shieldY, width, 5);
  ctx.fillRect(x, hullY, width, 5);
  if (enemy.maxShield > 0) {
    ctx.fillStyle = "#8af6ff";
    ctx.fillRect(x + 1, shieldY + 1, (width - 2) * clamp(enemy.shield / enemy.maxShield, 0, 1), 3);
  }
  ctx.fillStyle = "#ff8f68";
  ctx.fillRect(x + 1, hullY + 1, (width - 2) * clamp(enemy.hp / enemy.maxHp, 0, 1), 3);
  ctx.restore();
}

function drawEnemyAura(enemy) {
  if ((enemy.empTimer || 0) > 0) {
    ctx.save();
    ctx.strokeStyle = "rgba(138, 246, 255, 0.42)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.radius + 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  if ((enemy.radiationTimer || 0) > 0) {
    ctx.save();
    ctx.strokeStyle = "rgba(184, 255, 111, 0.34)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.radius + 12, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  if ((enemy.hackTimer || 0) > 0) {
    ctx.save();
    ctx.strokeStyle = "rgba(141, 255, 181, 0.36)";
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.radius + 15, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  if (enemy.allyAuraRadius > 0) {
    ctx.save();
    ctx.strokeStyle = enemy.supportBuffed ? "rgba(185, 255, 174, 0.26)" : "rgba(139, 255, 150, 0.14)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.allyAuraRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  if (enemy.playerSlowRadius > 0) {
    ctx.save();
    ctx.strokeStyle = "rgba(116, 255, 201, 0.18)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.playerSlowRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  if (enemy.explodesOnProximity) {
    ctx.save();
    ctx.strokeStyle = "rgba(255, 142, 84, 0.2)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.detonationRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  if (enemy.type === "leviathan") {
    ctx.save();
    ctx.strokeStyle = "rgba(210, 189, 255, 0.18)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.radius + 18, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}

function drawEnemyShip(enemy) {
  const margin = 90;
  if (
    enemy.x < state.camera.x - margin ||
    enemy.y < state.camera.y - margin ||
    enemy.x > state.camera.x + WIDTH / CAMERA_ZOOM + margin ||
    enemy.y > state.camera.y + HEIGHT / CAMERA_ZOOM + margin
  ) {
    return;
  }
  const angle = Math.atan2(state.player.y - enemy.y, state.player.x - enemy.x) + Math.PI / 2;
  const sprite = enemySpriteFor(enemy);
  drawEnemyAura(enemy);
  ctx.save();
  ctx.translate(enemy.x, enemy.y);
  ctx.rotate(angle);
  ctx.drawImage(sprite, -32, -32);
  ctx.restore();
  drawEnemyMeters(enemy);
}

function drawEnemies() {
  for (const enemy of state.enemies) {
    drawEnemyShip(enemy);
  }
}

function drawProjectiles() {
  for (const shot of state.projectiles) {
    if (shot.kind === "plasma") {
      const angle = Math.atan2(shot.vy, shot.vx);
      const sprite = plasmaWaveSprite(shot.radius);
      ctx.save();
      ctx.translate(shot.x, shot.y);
      ctx.rotate(angle + Math.PI / 2);
      ctx.globalAlpha = shot.fadeAlpha !== undefined ? shot.fadeAlpha : 0.95;
      ctx.drawImage(sprite, -(sprite.anchorX || sprite.width / 2), -(sprite.anchorY || sprite.height * 0.56));
      ctx.restore();
      continue;
    }
    if (shot.kind === "leviathanMissile") {
      const angle = Math.atan2(shot.vy, shot.vx) + Math.PI / 2;
      ctx.save();
      ctx.translate(shot.x, shot.y);
      ctx.rotate(angle);
      ctx.fillStyle = "rgba(255, 212, 166, 0.24)";
      ctx.beginPath();
      ctx.arc(0, 0, shot.radius + 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ffd7a6";
      ctx.beginPath();
      ctx.moveTo(0, -shot.radius - 4);
      ctx.lineTo(shot.radius * 0.8, shot.radius + 4);
      ctx.lineTo(0, shot.radius * 0.45);
      ctx.lineTo(-shot.radius * 0.8, shot.radius + 4);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#6e3d18";
      ctx.fillRect(-2, -2, 4, shot.radius + 3);
      ctx.fillStyle = "#fff4de";
      ctx.fillRect(-1, -shot.radius - 1, 2, 6);
      ctx.restore();
      continue;
    }
    ctx.fillStyle = shot.hostile ? (shot.color || "#a58bff") : shot.color;
    ctx.beginPath();
    ctx.arc(shot.x, shot.y, shot.radius, 0, Math.PI * 2);
    ctx.fill();
    if (shot.kind === "siege") {
      ctx.strokeStyle = "rgba(255, 228, 166, 0.85)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(shot.x, shot.y, shot.radius + 3, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
}

function drawPhotonPhazerBeam() {
  const phazer = state.player?.weapons?.photonPhazer;
  const target = phazer?.target;
  const liveTarget = target && target.alive !== false;
  const hasAfterglow = (phazer?.afterglow || 0) > 0;
  if (!phazer || phazer.level <= 0 || (!liveTarget && !hasAfterglow) || (phazer.beamAlpha || 0) <= 0.02) {
    return;
  }

  const alpha = phazer.beamAlpha * (liveTarget ? 1 : clamp((phazer.afterglow || 0) / 0.12, 0, 1));
  const endX = liveTarget ? target.x : phazer.beamEndX;
  const endY = liveTarget ? target.y : phazer.beamEndY;
  const angle = Math.atan2(endY - state.player.y, endX - state.player.x);
  const startX = state.player.x + Math.cos(angle) * 24;
  const startY = state.player.y + Math.sin(angle) * 24;
  const pulse = 1 + Math.sin(phazer.beamPulse || 0) * 0.12;

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.lineCap = "round";

  ctx.strokeStyle = `rgba(76, 225, 255, ${(0.22 * alpha).toFixed(3)})`;
  ctx.lineWidth = 18 * pulse;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  ctx.strokeStyle = `rgba(96, 249, 255, ${(0.5 * alpha).toFixed(3)})`;
  ctx.lineWidth = 10 * pulse;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  ctx.strokeStyle = `rgba(236, 255, 255, ${(0.94 * alpha).toFixed(3)})`;
  ctx.lineWidth = 3.6;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  ctx.fillStyle = `rgba(122, 246, 255, ${(0.26 * alpha).toFixed(3)})`;
  ctx.beginPath();
  ctx.arc(endX, endY, 16 * pulse, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = `rgba(232, 255, 255, ${(0.9 * alpha).toFixed(3)})`;
  ctx.beginPath();
  ctx.arc(endX, endY, 5.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawLootCrates() {
  for (const crate of state.crates) {
    const bobY = Math.sin(crate.bob) * 4;
    const x = crate.x;
    const y = crate.y + bobY;
    const glowColor = `hsla(${crate.hue}, 95%, 68%, 0.3)`;
    const shellColor = `hsl(${crate.hue}, 58%, 42%)`;
    const accentColor = `hsl(${(crate.hue + 72) % 360}, 92%, 66%)`;
    const spriteSize = 52;
    const spriteRadius = spriteSize * 0.5;
    ctx.save();
    ctx.globalAlpha = 0.28;
    ctx.fillStyle = glowColor;
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();
    if (planetSpriteImage.complete && planetSpriteImage.naturalWidth > 0) {
      ctx.globalAlpha = 1;
      ctx.imageSmoothingEnabled = false;
      ctx.filter = `hue-rotate(${crate.hue}deg) saturate(${crate.saturation}) brightness(${crate.brightness})`;
      ctx.drawImage(planetSpriteImage, x - spriteRadius, y - spriteRadius, spriteSize, spriteSize);
    } else {
      ctx.globalAlpha = 1;
      ctx.fillStyle = shellColor;
      ctx.beginPath();
      ctx.arc(x, y, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = accentColor;
      ctx.beginPath();
      ctx.arc(x - 5, y - 6, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.35)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y, 14, -0.8, 1.9);
      ctx.stroke();
    }
    ctx.restore();
  }
}

function drawGems() {
  for (const gem of state.gems) {
    ctx.fillStyle = gem.color;
    ctx.beginPath();
    ctx.arc(gem.x, gem.y, gem.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawPulses() {
  for (const pulse of state.pulses) {
    ctx.strokeStyle = "rgba(138, 246, 255, 0.52)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawOrbitalStrikes() {
  for (const strike of state.orbitalStrikes) {
    ctx.save();
    ctx.globalAlpha = 0.26 + (0.8 - strike.delay) * 0.2;
    ctx.strokeStyle = strike.color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(strike.x, strike.y, strike.radius * 0.65, 0, Math.PI * 2);
    ctx.stroke();
    if (strike.delay < 0.28) {
      ctx.globalAlpha = 0.34;
      ctx.strokeStyle = "rgba(138, 246, 255, 0.8)";
      ctx.beginPath();
      ctx.moveTo(strike.x, strike.y - 280);
      ctx.lineTo(strike.x, strike.y);
      ctx.stroke();
    }
    ctx.restore();
  }
}

function drawVoyageZones() {
  for (const zone of state.voyageZones) {
    const def = VENTARI_ZONE_DEFS[zone.type];
    if (!def) continue;
    const lifeAlpha = clamp(zone.life / zone.maxLife, 0, 1);
    const currentRadius = ventariZoneRadius(zone);
    if (currentRadius <= 1) continue;
    const pulse = 0.82 + Math.sin(state.time * 2.6 + zone.phase) * 0.18;
    const outerRadius = currentRadius * (0.96 + pulse * 0.08);

    ctx.save();
    ctx.globalAlpha = 0.52 * lifeAlpha;
    const glow = ctx.createRadialGradient(zone.x, zone.y, currentRadius * 0.14, zone.x, zone.y, outerRadius);
    glow.addColorStop(0, "rgba(255,255,255,0.12)");
    glow.addColorStop(0.28, `${def.color}99`);
    glow.addColorStop(0.72, `${def.color}22`);
    glow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(zone.x, zone.y, outerRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 0.82 * lifeAlpha;
    ctx.strokeStyle = def.edge;
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.arc(zone.x, zone.y, currentRadius * (0.84 + pulse * 0.06), 0, Math.PI * 2);
    ctx.stroke();

    ctx.globalAlpha = 0.28 * lifeAlpha;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(zone.x, zone.y, currentRadius * 0.52, 0, Math.PI * 2);
    ctx.stroke();

    if (zone.type === "emp" || zone.type === "hack") {
      ctx.globalAlpha = 0.4 * lifeAlpha;
      ctx.beginPath();
      ctx.moveTo(zone.x - currentRadius * 0.55, zone.y);
      ctx.lineTo(zone.x + currentRadius * 0.55, zone.y);
      ctx.moveTo(zone.x, zone.y - currentRadius * 0.55);
      ctx.lineTo(zone.x, zone.y + currentRadius * 0.55);
      ctx.stroke();
    }

    const iconSize = Math.min(34, Math.max(14, currentRadius * 0.14));
    drawVentariZoneIcon(zone.type, zone.x, zone.y, iconSize, 0.92 * lifeAlpha);
    if (currentRadius > 64) {
      ctx.globalAlpha = 0.85 * lifeAlpha;
      ctx.fillStyle = def.edge;
      ctx.font = "700 10px 'Segoe UI', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(def.short || zone.type.toUpperCase(), zone.x, zone.y + iconSize + 14);
    }

    ctx.restore();
  }
}

function drawVentariZoneIcon(type, x, y, size, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.globalAlpha = alpha;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  if (type === "emp") {
    ctx.fillStyle = "rgba(214, 248, 255, 0.96)";
    ctx.beginPath();
    ctx.moveTo(-size * 0.16, -size * 0.56);
    ctx.lineTo(size * 0.04, -size * 0.1);
    ctx.lineTo(-size * 0.12, -size * 0.1);
    ctx.lineTo(size * 0.16, size * 0.56);
    ctx.lineTo(-size * 0.02, size * 0.08);
    ctx.lineTo(size * 0.1, size * 0.08);
    ctx.closePath();
    ctx.fill();
  } else if (type === "radiation") {
    ctx.fillStyle = "rgba(222, 255, 184, 0.94)";
    for (let i = 0; i < 3; i += 1) {
      ctx.save();
      ctx.rotate((Math.PI * 2 * i) / 3);
      ctx.beginPath();
      ctx.arc(0, -size * 0.36, size * 0.2, -1.25, 1.25);
      ctx.lineTo(0, -size * 0.06);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.12, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === "solar") {
    ctx.strokeStyle = "rgba(255, 239, 188, 0.96)";
    ctx.lineWidth = Math.max(1.8, size * 0.1);
    for (let i = 0; i < 8; i += 1) {
      const angle = (Math.PI * 2 * i) / 8;
      ctx.beginPath();
      ctx.moveTo(Math.cos(angle) * size * 0.45, Math.sin(angle) * size * 0.45);
      ctx.lineTo(Math.cos(angle) * size * 0.76, Math.sin(angle) * size * 0.76);
      ctx.stroke();
    }
    ctx.fillStyle = "rgba(255, 235, 184, 0.96)";
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.28, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === "hack") {
    ctx.strokeStyle = "rgba(246, 224, 255, 0.96)";
    ctx.lineWidth = Math.max(1.8, size * 0.1);
    ctx.beginPath();
    ctx.moveTo(-size * 0.56, -size * 0.36);
    ctx.lineTo(-size * 0.1, -size * 0.36);
    ctx.lineTo(-size * 0.1, -size * 0.62);
    ctx.moveTo(size * 0.56, size * 0.36);
    ctx.lineTo(size * 0.1, size * 0.36);
    ctx.lineTo(size * 0.1, size * 0.62);
    ctx.moveTo(-size * 0.22, size * 0.18);
    ctx.lineTo(size * 0.22, -size * 0.18);
    ctx.stroke();
  }

  ctx.restore();
}

function drawHazards() {
  for (const hazard of state.hazards) {
    if ((hazard.kind || "fragment") === "void") {
      const alpha = Math.max(0, hazard.life / (hazard.maxLife || 2.8));
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      ctx.globalAlpha = 0.78 * alpha;
      const outer = ctx.createRadialGradient(hazard.x, hazard.y, 4, hazard.x, hazard.y, hazard.radius);
      outer.addColorStop(0, "rgba(255,255,255,0.9)");
      outer.addColorStop(0.2, "rgba(188,150,255,0.95)");
      outer.addColorStop(0.58, "rgba(122,82,210,0.5)");
      outer.addColorStop(1, "rgba(122,82,210,0)");
      ctx.fillStyle = outer;
      ctx.beginPath();
      ctx.arc(hazard.x, hazard.y, hazard.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 0.65 * alpha;
      ctx.strokeStyle = "rgba(205, 188, 255, 0.9)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(hazard.x, hazard.y, hazard.radius * 0.72, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      continue;
    }

    ctx.save();
    ctx.globalAlpha = Math.max(0, hazard.life / (hazard.maxLife || 3.6));
    ctx.fillStyle = "#ffc980";
    for (let i = 0; i < 3; i += 1) {
      const angle = (Math.PI * 2 * i) / 3;
      ctx.beginPath();
      ctx.arc(
        hazard.x + Math.cos(angle) * 5,
        hazard.y + Math.sin(angle) * 5,
        hazard.radius * 0.34,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
    ctx.restore();
  }
}

function drawAsteroids() {
  const margin = 120;
  for (const asteroid of state.asteroids) {
    if (
      asteroid.x < state.camera.x - margin ||
      asteroid.y < state.camera.y - margin ||
      asteroid.x > state.camera.x + WIDTH / CAMERA_ZOOM + margin ||
      asteroid.y > state.camera.y + HEIGHT / CAMERA_ZOOM + margin
    ) {
      continue;
    }

    ctx.save();
    ctx.translate(asteroid.x, asteroid.y);
    ctx.rotate(asteroid.rotation);

    const glow = ctx.createRadialGradient(0, 0, asteroid.radius * 0.2, 0, 0, asteroid.radius * 1.4);
    glow.addColorStop(0, "rgba(255, 219, 150, 0.24)");
    glow.addColorStop(1, "rgba(255, 176, 92, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, asteroid.radius * 1.35, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#4a5767";
    ctx.beginPath();
    ctx.moveTo(-asteroid.radius * 0.88, -asteroid.radius * 0.28);
    ctx.lineTo(-asteroid.radius * 0.42, -asteroid.radius * 0.92);
    ctx.lineTo(asteroid.radius * 0.42, -asteroid.radius * 0.84);
    ctx.lineTo(asteroid.radius * 0.92, -asteroid.radius * 0.16);
    ctx.lineTo(asteroid.radius * 0.74, asteroid.radius * 0.62);
    ctx.lineTo(asteroid.radius * 0.06, asteroid.radius * 0.96);
    ctx.lineTo(-asteroid.radius * 0.66, asteroid.radius * 0.72);
    ctx.lineTo(-asteroid.radius * 0.98, asteroid.radius * 0.08);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#69788c";
    ctx.beginPath();
    ctx.moveTo(-asteroid.radius * 0.6, -asteroid.radius * 0.18);
    ctx.lineTo(-asteroid.radius * 0.18, -asteroid.radius * 0.6);
    ctx.lineTo(asteroid.radius * 0.34, -asteroid.radius * 0.5);
    ctx.lineTo(asteroid.radius * 0.58, -asteroid.radius * 0.02);
    ctx.lineTo(asteroid.radius * 0.32, asteroid.radius * 0.42);
    ctx.lineTo(-asteroid.radius * 0.28, asteroid.radius * 0.42);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "rgba(15, 21, 30, 0.55)";
    for (const crater of [
      [-0.28, -0.2, 0.18],
      [0.24, -0.08, 0.15],
      [0.08, 0.3, 0.13],
    ]) {
      ctx.beginPath();
      ctx.arc(
        asteroid.radius * crater[0],
        asteroid.radius * crater[1],
        asteroid.radius * crater[2],
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    ctx.strokeStyle = "rgba(255, 208, 143, 0.42)";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(0, 0, asteroid.radius * 1.05, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}

function drawExplosions() {
  for (const explosion of state.explosions) {
    const alpha = explosion.life / explosion.maxLife;
    ctx.save();
    ctx.globalAlpha = alpha * 0.24;
    ctx.fillStyle = explosion.color;
    ctx.beginPath();
    ctx.arc(explosion.x, explosion.y, explosion.radius * (1.08 - alpha * 0.24), 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = alpha * 0.7;
    ctx.strokeStyle = explosion.color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(explosion.x, explosion.y, explosion.radius * (0.62 + (1 - alpha) * 0.42), 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}

function drawEffects() {
  for (const particle of state.particles) {
    ctx.globalAlpha = Math.max(0, particle.life / 0.7);
    ctx.fillStyle = particle.color;
    ctx.fillRect(particle.x, particle.y, 3, 3);
  }
  ctx.globalAlpha = 1;

  ctx.textAlign = "center";
  for (const text of state.texts) {
    const scale = text.scale || 1;
    const fontSize = Math.round(18 * scale);
    const fontWeight = text.weight || 700;
    ctx.font = `${fontWeight} ${fontSize}px Trebuchet MS`;
    ctx.globalAlpha = text.life / text.maxLife;
    ctx.lineJoin = "round";
    ctx.shadowColor = text.shadowColor || "transparent";
    ctx.shadowBlur = text.shadowBlur || 0;
    ctx.fillStyle = text.color;
    if (text.strokeColor && text.strokeWidth > 0) {
      ctx.lineWidth = text.strokeWidth;
      ctx.strokeStyle = text.strokeColor;
      ctx.strokeText(text.text, text.x, text.y);
    }
    ctx.fillText(text.text, text.x, text.y);
  }
  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.globalAlpha = 1;
}

function drawDamageFlashOverlay() {
  const drawEdgeFlash = (r, g, b, intensity) => {
    if (intensity <= 0.01) return;
    const edgeSize = Math.max(132, Math.min(WIDTH, HEIGHT) * 0.248);
    const cornerSize = edgeSize * 1.32;
    const edgeColor = (alpha) => `rgba(${r}, ${g}, ${b}, ${alpha * intensity})`;

    ctx.save();
    ctx.globalCompositeOperation = "screen";

    const topGrad = ctx.createLinearGradient(0, 0, 0, edgeSize);
    topGrad.addColorStop(0, edgeColor(0.77));
    topGrad.addColorStop(0.24, edgeColor(0.46));
    topGrad.addColorStop(0.58, edgeColor(0.18));
    topGrad.addColorStop(1, edgeColor(0));
    ctx.fillStyle = topGrad;
    ctx.fillRect(0, 0, WIDTH, edgeSize);

    const bottomGrad = ctx.createLinearGradient(0, HEIGHT, 0, HEIGHT - edgeSize);
    bottomGrad.addColorStop(0, edgeColor(0.77));
    bottomGrad.addColorStop(0.24, edgeColor(0.46));
    bottomGrad.addColorStop(0.58, edgeColor(0.18));
    bottomGrad.addColorStop(1, edgeColor(0));
    ctx.fillStyle = bottomGrad;
    ctx.fillRect(0, HEIGHT - edgeSize, WIDTH, edgeSize);

    const leftGrad = ctx.createLinearGradient(0, 0, edgeSize, 0);
    leftGrad.addColorStop(0, edgeColor(0.7));
    leftGrad.addColorStop(0.24, edgeColor(0.38));
    leftGrad.addColorStop(0.58, edgeColor(0.14));
    leftGrad.addColorStop(1, edgeColor(0));
    ctx.fillStyle = leftGrad;
    ctx.fillRect(0, 0, edgeSize, HEIGHT);

    const rightGrad = ctx.createLinearGradient(WIDTH, 0, WIDTH - edgeSize, 0);
    rightGrad.addColorStop(0, edgeColor(0.7));
    rightGrad.addColorStop(0.24, edgeColor(0.38));
    rightGrad.addColorStop(0.58, edgeColor(0.14));
    rightGrad.addColorStop(1, edgeColor(0));
    ctx.fillStyle = rightGrad;
    ctx.fillRect(WIDTH - edgeSize, 0, edgeSize, HEIGHT);

    const corners = [
      [0, 0],
      [WIDTH, 0],
      [0, HEIGHT],
      [WIDTH, HEIGHT],
    ];
    for (const [x, y] of corners) {
      const cornerGrad = ctx.createRadialGradient(x, y, 0, x, y, cornerSize);
      cornerGrad.addColorStop(0, edgeColor(0.54));
      cornerGrad.addColorStop(0.34, edgeColor(0.22));
      cornerGrad.addColorStop(0.66, edgeColor(0.1));
      cornerGrad.addColorStop(1, edgeColor(0));
      ctx.fillStyle = cornerGrad;
      ctx.fillRect(
        x === 0 ? 0 : WIDTH - cornerSize,
        y === 0 ? 0 : HEIGHT - cornerSize,
        cornerSize,
        cornerSize
      );
    }

    ctx.strokeStyle = edgeColor(0.18);
    ctx.lineWidth = 14 + intensity * 21;
    ctx.strokeRect(0, 0, WIDTH, HEIGHT);
    ctx.strokeStyle = edgeColor(0.34);
    ctx.lineWidth = 6 + intensity * 14;
    ctx.strokeRect(0, 0, WIDTH, HEIGHT);
    ctx.restore();
  };

  drawEdgeFlash(116, 210, 255, state.shieldDamageFlash);
  drawEdgeFlash(255, 88, 116, state.hullDamageFlash);
}

function draw() {
  if (shell.classList.contains("scene-hidden")) {
    return;
  }
  const playerDestroyed = Boolean(state.player?.deathSequence?.active || state.player?.deathSequence?.hidden);
  drawBackground();
  ctx.save();
  ctx.scale(CAMERA_ZOOM, CAMERA_ZOOM);
  ctx.translate(-state.camera.x, -state.camera.y);
  drawOrbitalStrikes();
  drawPulses();
  drawExplosions();
  drawVoyageZones();
  drawHazards();
  drawAsteroids();
  drawLootCrates();
  drawGems();
  drawEnemies();
  drawProjectiles();
  if (!playerDestroyed) {
    drawPhotonPhazerBeam();
    drawOrbitBlades();
    drawSupportDrones();
  }
  drawNetworkPilots();
  drawPlayer();
  drawEffects();
  ctx.restore();
  drawDamageFlashOverlay();
}

function frame(ts) {
  const dt = Math.min(0.033, (ts - state.lastTime) / 1000 || 0);
  state.lastTime = ts;
  pollGamepad();
  updateMenuConfirmHold(dt);
  tickMusic(dt);
  tickMultiplayerClientInput(dt);
  update(dt);
  sendMultiplayerSnapshot(dt);
  draw();
  requestAnimationFrame(frame);
}

function setPointerFromEvent(event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;
  const len = Math.hypot(x, y);
  if (len < 12) {
    state.pointerVector.x = 0;
    state.pointerVector.y = 0;
    return;
  }
  state.pointerVector.x = x / len;
  state.pointerVector.y = y / len;
}

document.addEventListener("keydown", event => {
  unlockAudio();
  const key = event.key.toLowerCase();
  const code = event.code;
  if (code === "Tab") {
    event.preventDefault();
    if (event.repeat) return;
    if (state.mode === "playing") {
      openVoyageUpgradesMenu();
    } else if (state.mode === "voyageupgrades") {
      closeVoyageUpgradesMenu();
    }
    return;
  }
  if (modMenuActive() && key === "escape") {
    event.preventDefault();
    if (event.repeat) return;
    closeModMenu();
    return;
  }
  const isPauseKey = key === "escape";
  if (isPauseKey) {
    event.preventDefault();
    if (event.repeat) return;
    if (state.mode === "playing") {
      pauseVoyage();
      return;
    }
    if (state.mode === "voyageupgrades") {
      closeVoyageUpgradesMenu();
      return;
    }
    if (state.mode === "planet") {
      closePlanetDiscovery();
      return;
    }
    if (state.mode === "paused") {
      resumeVoyage();
      return;
    }
    if (state.mode === "menu") {
      if (!handleMenuBack()) {
        openHangarSettingsMenu();
      }
      return;
    }
    if (state.mode === "mainmenu") {
      if (!handleMenuBack()) {
        openMainMenuSettingsMenu();
      }
      return;
    }
  }
  if (code === "Enter" && state.mode !== "playing") {
    event.preventDefault();
    return;
  }
  if (code === "Space") {
    event.preventDefault();
    if (state.mode === "playing") {
      if (event.repeat) return;
      performDash();
    } else {
      if (event.repeat) return;
      state.menuConfirmKeyHeld = true;
      const target = keyboardMenuConfirmTarget();
      if (menuTargetUsesInstantConfirm(target)) {
        clearMenuConfirmHold();
        activateMenuTarget(target);
      } else {
        startMenuConfirmHold("keyboard");
      }
    }
    return;
  }
  if (code === "ShiftLeft") {
    state.keys.add("shiftleft");
  }
  if (/^Digit[1-9]$/.test(code)) {
    if (event.repeat) return;
    if (state.mode === "playing") {
      selectNormalWeaponSystemSlot(Number.parseInt(code.slice(5), 10) - 1);
    }
    return;
  }
  if (["j", "k", "l"].includes(key)) {
    state.keys.add(key);
    const comboActive = keyboardModComboActive();
    if (comboActive && !state.modKeyboardComboPressed) {
      openModMenu();
    }
    state.modKeyboardComboPressed = comboActive;
  }
  if (["w", "a", "s", "d", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(key)) {
    state.keys.add(key);
  }
}, true);

window.addEventListener("pointerdown", () => {
  unlockAudio();
}, { passive: true });

document.addEventListener("focusin", event => {
  const target = menuNavigationElement(event.target);
  if (!target || state.lastMenuNavigateTarget === target) return;
  state.lastMenuNavigateTarget = target;
  playMenuNavigateSfx();
}, true);

document.addEventListener("pointerover", event => {
  const target = menuNavigationElement(event.target);
  if (!target || state.lastMenuNavigateTarget === target) return;
  state.lastMenuNavigateTarget = target;
  playMenuNavigateSfx();
}, { passive: true });

if (runSummaryScroll) {
  runSummaryScroll.addEventListener("wheel", event => {
    event.stopPropagation();
  }, { passive: true });
}

window.addEventListener("keyup", event => {
  if (event.code === "Space") {
    state.menuConfirmKeyHeld = false;
    if (state.menuConfirm?.source === "keyboard") {
      clearMenuConfirmHold();
    }
  }
  if (event.code === "ShiftLeft") {
    state.keys.delete("shiftleft");
  }
  state.keys.delete(event.key.toLowerCase());
  if (!keyboardModComboActive()) {
    state.modKeyboardComboPressed = false;
  }
});

document.addEventListener("fullscreenchange", () => {
  syncEscapeFullscreenLock();
});

window.addEventListener("blur", () => {
  state.menuConfirmKeyHeld = false;
  state.lastMenuNavigateTarget = null;
  state.pointerActive = false;
  state.pointerVector.x = 0;
  state.pointerVector.y = 0;
  clearMenuConfirmHold();
});

canvas.addEventListener("pointerdown", event => {
  unlockAudio();
  if (event.button !== 0) return;
  state.pointerActive = true;
  setPointerFromEvent(event);
});

canvas.addEventListener("pointermove", event => {
  if (state.pointerActive) setPointerFromEvent(event);
});

canvas.addEventListener("contextmenu", event => {
  event.preventDefault();
});

canvas.addEventListener("pointerleave", () => {
  state.pointerActive = false;
  state.pointerVector.x = 0;
  state.pointerVector.y = 0;
});

window.addEventListener("pointerup", event => {
  if (event.button !== 0) return;
  state.pointerActive = false;
  state.pointerVector.x = 0;
  state.pointerVector.y = 0;
});

window.addEventListener("resize", () => {
  resizeGameViewport();
}, { passive: true });

overlayButton.addEventListener("click", () => {
  if (state.mode === "menu") {
    beginLaunchSequence();
  } else if (state.mode === "planet") {
    closePlanetDiscovery();
  } else if (state.mode === "paused") {
    resumeVoyage();
  } else if (state.mode === "gameover" || state.mode === "victory") {
    beginLaunchSequence();
  }
});

startButton.addEventListener("click", () => {
  if (state.mode === "menu" || state.mode === "gameover" || state.mode === "victory") {
    beginLaunchSequence();
  }
});

mainMenuSoloButton?.addEventListener("click", () => {
  switchMetaProfile("solo");
  showHangar("Begin your voyage when ready.");
});

mainMenuTeamButton?.addEventListener("click", () => {
  openTeamVoyageMenu();
});

mainMenuSettingsButton?.addEventListener("click", () => {
  openMainMenuSettingsMenu();
});

mainMenuLeaderboardsButton?.addEventListener("click", () => {
  notifyMainMenuLocked("Leaderboards", "Long-range ranking uplinks are still offline.");
});

mainMenuSettingsBack?.addEventListener("click", () => {
  closeMainMenuSettingsMenu();
});

teamVoyageBack?.addEventListener("click", () => {
  handleTeamVoyageBack();
});

teamVoyageHost?.addEventListener("click", () => {
  hostTeamVoyage();
});

teamVoyageJoin?.addEventListener("click", () => {
  joinTeamVoyage();
});

teamVoyageServerUrl?.addEventListener("input", event => {
  state.multiplayer.serverUrl = normalizeServerUrl(event.target.value);
  persistTeamVoyagePreferences();
});

teamVoyagePlayerName?.addEventListener("input", event => {
  state.multiplayer.playerName = String(event.target.value || "Pilot").trim().slice(0, 24) || "Pilot";
  persistTeamVoyagePreferences();
});

teamVoyageRoomInput?.addEventListener("input", event => {
  state.multiplayer.joinCode = String(event.target.value || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
  event.target.value = state.multiplayer.joinCode;
});

teamVoyageRoomInput?.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    joinTeamVoyage();
  }
});

teamVoyageCopyCode?.addEventListener("click", () => {
  copyTeamVoyageCode();
});

teamVoyageRefresh?.addEventListener("click", () => {
  refreshTeamVoyageLobby();
});

teamVoyageLeave?.addEventListener("click", () => {
  leaveTeamVoyageLobby("Lobby link closed.");
  syncTeamVoyageFormState();
  state.gamepad.menuIndex = 0;
  syncGamepadFocus();
});

teamVoyageRouteAsteroid?.addEventListener("click", () => {
  setTeamVoyageRoute("asteroidBelt");
});

teamVoyageRouteVentari?.addEventListener("click", () => {
  setTeamVoyageRoute("ventariSystem");
});

bindDiscretePress(teamVoyageTimeDown, () => {
  adjustTeamVoyageMinutes(-1);
});

bindDiscretePress(teamVoyageTimeUp, () => {
  adjustTeamVoyageMinutes(1);
});

bindDiscretePress(teamVoyageDifficultyDown, () => {
  adjustTeamVoyageDifficulty(-1);
});

bindDiscretePress(teamVoyageDifficultyUp, () => {
  adjustTeamVoyageDifficulty(1);
});

teamVoyageStart?.addEventListener("click", () => {
  startTeamVoyageLobby();
});

mainMenuFullscreen?.addEventListener("click", () => {
  toggleFullscreen();
});

mainMenuMusicVolume?.addEventListener("input", event => {
  state.settings.musicVolume = Number(event.target.value) / 100;
  applyAudioSettings();
  persistAudioSettings();
});

mainMenuSfxVolume?.addEventListener("input", event => {
  state.settings.gunSfxVolume = Number(event.target.value) / 100;
  applyAudioSettings();
  persistAudioSettings();
});

mainMenuOtherSfxVolume?.addEventListener("input", event => {
  state.settings.otherSfxVolume = Number(event.target.value) / 100;
  applyAudioSettings();
  persistAudioSettings();
});

hangarStartButton.addEventListener("click", () => {
  beginLaunchSequence();
});

if (hangarSettingsButton) {
  hangarSettingsButton.addEventListener("click", () => {
    openHangarSettingsMenu();
  });
}

hangarUpgradesButton.addEventListener("click", () => {
  openHangarUpgradesMenu();
});

hangarHostilesButton?.addEventListener("click", () => {
  openHangarHostilesMenu();
});

hangarRecordsButton?.addEventListener("click", () => {
  openHangarRecordsMenu();
});

hangarAugmentsButton.addEventListener("click", () => {
  openHangarAugmentsMenu();
});

hangarVoyageAsteroid?.addEventListener("click", () => {
  setVoyageRoute("asteroidBelt");
});

hangarVoyageVentari?.addEventListener("click", () => {
  setVoyageRoute("ventariSystem");
});

hangarSettingsBack.addEventListener("click", () => {
  closeHangarSettingsMenu();
});

hangarReturnMainMenu?.addEventListener("click", () => {
  returnToMainMenuFromHangar();
});

hangarResetProgress.addEventListener("click", () => {
  resetProgress();
});

hangarUpgradesBack.addEventListener("click", () => {
  closeHangarUpgradesMenu();
});

hangarUpgradesRespec?.addEventListener("click", () => {
  respecMetaUpgrades();
});

hangarHostilesBack?.addEventListener("click", () => {
  closeHangarHostilesMenu();
});

hangarRecordsBack?.addEventListener("click", () => {
  closeHangarRecordsMenu();
});

hangarAugmentsBack.addEventListener("click", () => {
  closeHangarAugmentsMenu();
});

modMenuClose?.addEventListener("click", () => {
  closeModMenu();
});

voyageUpgradesClose?.addEventListener("click", () => {
  closeVoyageUpgradesMenu();
});

modUnlockAugments?.addEventListener("click", () => {
  unlockAllAugmentsFromModMenu();
});

modMenu?.addEventListener("pointerdown", event => {
  if (event.target === modMenu) {
    closeModMenu();
  }
});

for (const button of modCreditButtons) {
  button.addEventListener("click", () => {
    grantModCredits(Number(button.dataset.modCredit || 0));
  });
}

bindDiscretePress(hangarTimeDown, () => {
  adjustRunTimeSteps(-1);
});

bindDiscretePress(hangarTimeUp, () => {
  adjustRunTimeSteps(1);
});

hangarDifficulty.addEventListener("input", event => {
  setRunDifficulty(Number(event.target.value));
});

hangarFullscreen.addEventListener("click", () => {
  toggleFullscreen();
});

hangarMusicVolume.addEventListener("input", event => {
  state.settings.musicVolume = Number(event.target.value) / 100;
  applyAudioSettings();
  persistAudioSettings();
});

hangarSfxVolume.addEventListener("input", event => {
  state.settings.gunSfxVolume = Number(event.target.value) / 100;
  applyAudioSettings();
  persistAudioSettings();
});

hangarOtherSfxVolume.addEventListener("input", event => {
  state.settings.otherSfxVolume = Number(event.target.value) / 100;
  applyAudioSettings();
  persistAudioSettings();
});

overlayFullscreen.addEventListener("click", () => {
  toggleFullscreen();
});

musicVolume.addEventListener("input", event => {
  state.settings.musicVolume = Number(event.target.value) / 100;
  applyAudioSettings();
  persistAudioSettings();
});

sfxVolume.addEventListener("input", event => {
  state.settings.gunSfxVolume = Number(event.target.value) / 100;
  applyAudioSettings();
  persistAudioSettings();
});

otherSfxVolume.addEventListener("input", event => {
  state.settings.otherSfxVolume = Number(event.target.value) / 100;
  applyAudioSettings();
  persistAudioSettings();
});

overlayEndVoyage.addEventListener("click", () => {
  endVoyage();
});

runSummaryClose.addEventListener("click", () => {
  closeRunSummary();
});

window.addEventListener("beforeunload", () => {
  if (state.multiplayer?.socket) {
    state.multiplayer.manualClose = true;
    try {
      state.multiplayer.socket.close();
    } catch {}
  }
});

state.meta = loadMetaProgression();
state.settings = {
  ...state.settings,
  ...(state.meta?.settings || {}),
};
readTeamVoyagePreferences();
setupMusicSystem();
setupSfxSystem();
renderMetaUpgrades();
syncTeamVoyageFormState();
renderTeamVoyageLobby();
resizeGameViewport();
resetGame();
showMainMenu("Select a command to continue.");
ensureMusicStarted();
requestAnimationFrame(frame);
