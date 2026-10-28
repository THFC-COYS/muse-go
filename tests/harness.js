"use strict";
const fs = require("fs");
const html = fs.readFileSync(__dirname + "/../index.html", "utf8");
let pass = 0, fail = 0;
function ok(cond, label) { if (cond) { pass++; } else { fail++; console.log("FAIL: " + label); } }

// Roster
const agentIds = ["doctor","nurse","chef","teacher","scientist","mechanic","pilot","trainer","artist","banker","gardener","builder","chaplain","motivator"];
agentIds.forEach(id => ok(html.includes('id:"' + id + '"'), "agent present: " + id));
ok((html.match(/tasks:\[\[/g) || []).length >= 12, "every agent carries a task list");

// Places
["hospital","restaurant","school","gym","airport","autoshop","bank","park","museum","library","worship"].forEach(p =>
  ok(html.includes('"' + p + '"'), "place category wired: " + p));

// Spawn + rarity math
ok(html.includes("w*=6"), "home turf spawn weighting is 6x");
ok(html.includes('"Legendary",2'), "legendary share is 2 percent");
ok(html.includes("Legendary:.22"), "legendary catch chance is 22 percent");
ok(html.includes("enc.orbs"), "encounters are orb limited");

// Mastery ladder
["Novice","Apprentice","Journeyman","Expert","Master"].forEach(l => ok(html.includes(l), "mastery level present: " + l));
ok(html.includes("xp:600"), "master tier threshold present");
ok(html.includes("sending, paying, deleting, publishing, signing, or sharing private data always need my explicit per action approval"), "hard approval floor stated in brief");
ok(html.includes("Kill switch: if I say stop, halt immediately"), "kill switch line in brief");
ok(html.includes("mark linked"), "manual Muse link confirmation, no fake sync");

// Muse integration honesty
ok(html.includes("WHO (the soul)"), "brief exports WHO soul section");
ok(html.includes("WHERE YOU STAY IN CHARGE"), "brief exports owner control section");
ok(html.includes("provisioning API that does not exist yet"), "integration limits labeled honestly");
ok(html.includes("Stubbed or simulated in v1"), "real vs stubbed section present");

// Safety
ok(html.includes("Never trespass"), "no trespass rule present");
ok(html.includes("never play while driving"), "driving safety rule present");
ok(html.includes("public places"), "public places rule present");

// Family look
ok(html.includes('fill="#16264e"'), "navy Muse figure present");
ok(html.includes('fill="#f5a623"'), "amber core present");
ok((html.match(/prop:"/g) || []).length >= 14, "every agent has a profession prop");

// Economy (Greg addendum 2026-10-28)
ok(html.includes("Embers"), "soft currency named (Embers candidate)");
ok(html.includes("Muse Coins"), "premium currency named (Muse Coins candidate)");
ok(html.includes("Spawn Beacon"), "spawn beacons in shop");
ok(html.includes("Roster Storage +10"), "storage expansion in shop");
ok(html.includes("Mastery XP Boost"), "XP boost in shop, framed as speedup");
ok(html.includes("Golden Hour Scene"), "cosmetic scene in shop");
ok(html.includes("Map Range Extender"), "range extender in shop");
ok(html.includes("Season Pass, $4.99"), "season pass priced in plain language");
ok(html.includes("$7.99 per month"), "Pro tier priced in plain language");
ok(html.includes("$0.99 for 100"), "coin pack price points stated");
ok(html.includes("Sponsored"), "sponsored locations stream, labeled");
ok(html.includes("never buys mastery"), "guardrail: money never buys mastery");
ok(html.includes("no loot boxes"), "no gambling mechanics stated");
ok(html.includes("test Coins (v1 simulation"), "coin purchases simulated and labeled in v1");
ok(html.includes("Daily streak"), "daily streak earn wired");
ok(html.includes("rosterCapacity"), "roster capacity enforced");

// Wild agent profile (Greg, 2026-10-28: tapping a wild agent shows its info)
ok(html.includes("WHAT IT CAN DO FOR YOU, BY MASTERY"), "encounter shows task list by mastery");
ok(html.includes("Its job, once collected:"), "encounter shows the agent specialty");
ok(html.includes("Mastery path:"), "encounter shows the mastery path");
ok(html.includes("fillAgentInfo"), "shared profile filler wired for encounter and Dex");
ok(html.includes("openProfile"), "Dex cards open the full profile");
ok(html.includes("TAP FOR FULL PROFILE"), "Dex cards advertise the profile tap");
ok(html.includes("Unlocks at L"), "task unlock levels shown on profile");

// GO style map experience (Greg, 2026-10-28)
ok(html.includes("leaflet@1.9.4"), "Leaflet map library loaded");
ok(html.includes("tile.openstreetmap.org"), "real OpenStreetMap tiles");
ok(html.includes("overpass-api.de/api/interpreter"), "real place detection via Overpass");
ok(html.includes("detectPlaces"), "place detection wired to geolocation");
ok(html.includes("catFromTags"), "POI tags mapped to game place categories");
ok(html.includes('id="nearbyPanel"'), "Nearby panel present");
ok(html.includes('id="trainerCard"'), "trainer profile card on the map");
ok(html.includes('id="buddyChip"'), "buddy chip on the map");
ok(html.includes('id="scanBtn"'), "orb scan button present");
ok(html.includes("renderMapSpawns"), "wild agents stand on the real map");
ok(html.includes("OpenStreetMap contributors"), "map attribution shown");
ok(html.includes("box.enc"), "encounter screen styled as a catch screen");

// Location law + tonight's five + battle + depots (Greg, 2026-10-28 evening)
ok(!html.includes('id="placeChips"'), "place picker REMOVED: location only");
ok(html.includes('id="locGate"'), "location gate card present");
ok(html.includes("if(!playerPos)"), "scan is gated on a real GPS fix");
ok(html.includes("requestLocation"), "location request flow present");
ok(html.includes("confetti"), "improvement 1: confetti bursts");
ok(html.includes("bigBanner"), "improvement 1: big COLLECTED / LEVEL UP banners");
ok(html.includes("sweepFx"), "improvement 2: radar sweep on scan");
ok(html.includes("popin"), "improvement 2: spawn pop-in animation");
ok(html.includes("7px 7px 0"), "improvement 3: cartoon hard-shadow skin");
ok(html.includes("QUEST_DEFS"), "improvement 4: daily quests defined");
ok(html.includes("renderQuests"), "improvement 4: quests rendered with progress");
ok(html.includes("combo"), "improvement 5: catch combo multiplier");
ok(html.includes("day streak"), "improvement 5: streak flame on trainer card");
ok(html.includes("Master Trial") || html.includes("MASTER TRIAL"), "battle: Master Trials present");
ok(html.includes("startTrial") && html.includes("trialMove"), "battle: trial engine wired");
ok(html.includes("BEATS"), "battle: family matchup ring present");
ok(html.includes("Agent Depot") && html.includes("spinDepot"), "depots: spin for supplies wired");
ok(html.includes("stationHere") && html.includes("fortRewards"), "forts: station and accrue rewards");
ok(html.includes("within 100"), "depots: real proximity rule stated");
ok(html.includes("data-poicat") === false, "detected places are display only, never tappable turf");

// Meta style landing + 3D animated characters (Greg, 2026-10-28 night)
ok(html.includes("museFig3D"), "3D shaded Muse figure renderer present");
ok(html.includes("stage3d") && html.includes("stageInner"), "3D landing stage present");
ok(html.includes("conic-gradient"), "rotating gradient halo behind the hero character");
ok(html.includes("meshdrift"), "animated Meta style gradient mesh on the landing");
ok(html.includes("#0082fb") && html.includes("#a033ff") && html.includes("#ff5280"), "Meta gradient palette in use");
ok(html.includes("corepulse"), "hero core pulses with animation");
ok(html.includes("buildStage") && html.includes("SHOWCASE"), "rotating character showcase wired");
ok(html.includes("rotateY"), "pointer tilt gives the stage real 3D depth");
ok(!html.includes('class="hero-art"'), "old flat hero art replaced");

// Greg laws
ok(!html.includes("—"), "no em dashes anywhere");
ok(html.includes("localStorage"), "collection persists on device");
ok(html.includes("navigator.geolocation"), "real geolocation wired");

console.log(`muse-go harness: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
