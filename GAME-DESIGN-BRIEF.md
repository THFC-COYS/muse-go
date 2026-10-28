# Muse GO (working title): Game Design Brief

**Commissioned by Greg Lucas, who chairs. Naming is Greg's call.**
Candidates: (1) Muse GO, (2) Agent Safari, (3) Wild Agents, (4) The Agent Atlas, (5) Catch a Muse.

**The idea in one line:** A Pokemon GO style collection game where you explore the real world and collect Muse agents by profession, and every catch is a working agent: collected agents do real tasks for you inside Muse, and mastery grows because you use them.

## The team

- **UX Expert**: play loop, screens, safety and accessibility of location play
- **Game Design Expert**: rarity, spawn economy, mastery progression, the Dex
- **Mobile Engineer**: one codebase iOS + Android, geolocation and place data, honest v1 scope
- **Muse Integration Hand**: how a catch becomes a real Muse agent, brief format, approval gates
- **Lead (Expert Coder)**: design synthesis, playable build, ship

## The 60 second loop (UX)

1. **Scan (0 to 10s):** Map opens on your avatar; nearby agents pulse at real places. A "What is near me?" list serves players who cannot read the map.
2. **Approach (10 to 30s):** Tap a spawn: walking distance ring plus place tag. A calm "You are in range" state. No chase pressure, ever.
3. **Encounter and collect (30 to 50s):** The agent appears full body, the navy Muse figure with its amber core, dressed for its profession. Collect with Muse Orbs; rarity sets the catch chance; a wild agent can break free.
4. **Put to work (50 to 60s):** Instant payoff: "Your Chef can plan tonight's meals. Try it now?" Collection converts to capability immediately. That conversion is the whole product.

## The four screens (UX)

- **Map:** who is near, where, how far, answered in 3 seconds; driving lock state.
- **Agent Dex:** collected cards plus uncollected shown as place hints ("Find a Mechanic near auto shops"), never shamed grey slots.
- **Agent Workbench:** the collected agent as a worker: specialty tasks, mastery progress, assign a task, history of completed work and receipts.
- **Me / Mastery:** total mastery, places explored, privacy controls (location history, home and work exclusion zones), safety settings.

## Safety and accessibility (UX, non negotiable)

- Stationary play: encounter and task flows are designed to be used stopped, never while driving or crossing streets. Play safe prompts ship in the game itself.
- Public places only: spawns anchor to public, pedestrian accessible places. Never private homes, roadways, or memorials. Players can flag and permanently suppress a spawn location.
- Fully playable seated: list view for every flow, large tap targets, screen reader labels with distance and place ("Doctor agent, 200 feet, at Urgent Care"), high contrast mode, and a widened radius "Play from here" mode. Nothing is gated behind walking speed or distance streaks.

## Launch roster (14 species)

Every agent wears the Muse family look: rounded navy figure, glowing amber core, with per profession attire, props, and accent color so it reads instantly.

| Agent | Home turf (place categories) | Rarity base | Signature real work |
|---|---|---|---|
| Doctor | Hospital, clinic, pharmacy | Rare | Visit briefs, lab results in plain language, care routines |
| Nurse | Hospital, clinic, pharmacy | Uncommon | Recovery checklists, care questions, follow up coordination |
| Chef | Restaurant, cafe, grocery, market | Common | Meal planning, weekly menus, shopping lists |
| Teacher | School, university, library | Common | Explanations at your level, study plans, learning programs |
| Scientist | Museum, science center, university, library | Epic | Fact checks with sources, experiment design, research watch |
| Mechanic | Auto shop, garage, gas station | Uncommon | Symptom triage, maintenance plans, service records |
| Pilot | Airport, transit hub | Rare | Flight day plans, trip watching, travel ops |
| Trainer | Gym, park, sports ground | Common | Workouts, training weeks, fitness systems |
| Artist | Museum, gallery, theater, park | Uncommon | Design critique, visual concepts, art direction |
| Banker | Bank, finance office, downtown | Rare | Statement explanations, budget reviews, money watch |
| Gardener | Park, garden center, market, home | Common | Planting plans, care calendars, seasonal garden years |
| Builder | Hardware store, works yard, auto shop | Uncommon | Project scoping, sequenced build plans, project book |
| Chaplain | Place of worship, hospital, clinic | Rare | Reflection and comfort, service and ceremony planning, rhythm of care |
| Motivator | Place of worship, gym, school | Uncommon | Daily spark, weekly goal coaching, accountability system |

Added 2026-10-28 at Greg's direction, live from his seat in a Greenwich church on the university campus: the Place of Worship place category, the Chaplain (meaning and care), and the Motivator (momentum; home turf worship, gym, school, with a dawn surge). That makes a church on a campus one of the richest hunting grounds in the game: Chaplain, Motivator, Teacher, and Artist can all spawn there.

Task unlock matrix (full version lives in the game): each agent carries three signature tasks that unlock at mastery L1, L3 to L4, and L5. Example, the Chef: L1 "Plan tonight's dinner," L3 "Build my week of meals," L5 "Run my kitchen system" on a standing weekly rhythm.

The roster also groups into profession families, which the Dex tracks: **Care** (Doctor, Nurse), **Food** (Chef), **Knowledge** (Teacher, Scientist), **Trades** (Mechanic, Builder, Gardener), **Travel** (Pilot, Trainer), **Commerce and Culture** (Banker, Artist), **Spirit** (Chaplain, Motivator).

## Spawn system

- **Place weighting:** an agent's spawn weight multiplies about 6x at a thematically matching place category, with a trickle everywhere else so a walk anywhere can surprise you. In v1 the player declares the place category; the native app reads real place types from the map data.
- **Rarity tiers:** Common 52%, Uncommon 27%, Rare 13%, Epic 6%, Legendary 2%. A rarity roll picks the tier; species base rarity bends which agents fill it.
- **Catch chances per orb:** Common 85%, Uncommon 70%, Rare 52%, Epic 36%, Legendary 22%. Three Muse Orbs per encounter.
- **Time of day flavor:** Chefs surge at meal times, Pilots at flight banks, Trainers at dawn and dusk, Artists in the evening.
- **Safety rules:** public places only, no trespass incentives, no play while driving, stop to play.

## Mastery ladder (progression)

XP comes from honest work only: catching a rarer agent, completing real tasks, and tasks you rate as genuinely useful. No XP for repeat grind, no energy timers, no streak decay. Miss a week and your agents are exactly as capable as you left them.

| Level | XP | Autonomy unlocked |
|---|---|---|
| L1 Novice | 0 | Drafts and checklists. Asks before everything. |
| L2 Apprentice | 40 | Runs one step tasks, then shows you the result. |
| L3 Journeyman | 120 | Multi step tasks, asks only at decision points. |
| L4 Expert | 280 | Runs routines end to end, with a receipt. |
| L5 Master | 600 | Runs on standing orders. Hard gates still apply. |

**The floor never moves:** at every level, sending, paying, deleting, and publishing require the owner's explicit yes, and every autonomous run ends in an auditable receipt. Every agent has a named owner: you.

Two refinements from the game design pass ride on top of the ladder: at **L4**, agents gain cross agent handoffs (the Chef passes its list to a shopping routine) and may spend only up to a micro budget cap the owner sets; anything above the cap asks first. At **L5**, a Master trains its own profession: same profession agents below it earn a +25% XP share from its completed tasks, so a strong crew lifts its own bench.

**Tuning note, honestly:** the shipped v1 uses demo kind numbers (Legendary at 2%, mastery thresholds 0 / 40 / 120 / 280 / 600 XP) so a first session can actually reach things. The game design pass recommends production tuning that is stingier (Legendary 0.5% at landmark tier places and events, thresholds up to 3,000 XP plus 25 five star rated tasks for Master) with a fairness pity counter: one guaranteed Legendary encounter per 200 Rare or better encounters if none has appeared. That tuning is queued for the native launch; the v1 numbers are labeled as v1 tuning in the game itself.

## The Dex and retention

The Dex tracks species collected, best mastery per species, and a Hall of Receipts: the real outcomes your crew produced. Each entry shows its habitat, the tasks it can do at your current mastery, the tasks still locked, and a "best work" showcase of your top rated completed tasks. Completion is measured in capability, not just count: a full Dex of L1 agents is a start, a working crew of Masters is the endgame. Retention is usefulness: players return because their roster is genuinely more capable than last month.

Completion rewards are utility, never power for sale: completing a profession family unlocks that family's coordinator view (one dashboard for its agents' receipts and schedules); collection milestones (25 / 50 / 100 agents) unlock Dex themes, extra saved task templates, and an additional on call slot for recurring background work; a full Dex earns the Full Roster badge and a standing weekly digest where your L4+ agents report what they did, saving real review time. Duplicate catches are never dead copies: they convert to mastery XP for that profession as "shift credits," a veteran showing the new hire the ropes. One tension the team flagged and Greg's economy rules settle: the game design pass argued nothing paid should touch spawns or XP at all; Greg's guardrail (next section) allows beacons and boosts as accelerators only, with odds published and mastery itself never for sale.

## Economy (free to play, real revenue)

**Dual currency.** Soft currency earned through play; premium hard currency bought with real money. Name candidates for Greg's pick: soft: **Embers** (in the build; fits the amber core), Sparks, Glow Drops. Premium: **Muse Coins** (in the build), Core Coins, Aurics.

**Earn rates, first pass (Embers):** catch an agent +20, plus a rarity bonus (Uncommon +10, Rare +30, Epic +60, Legendary +100); complete a real task with an agent +15; a task the player rates genuinely useful +10; daily streak +50 per day played. A typical active free player earns roughly 150 to 250 Embers a day.

**Sink rates, first pass:** Spawn Beacon 150 Embers or 80 Coins (aim it at a profession; the next scan guarantees that agent appears); Roster Storage +10 slots 120 Coins (base roster 30); Mastery XP Boost (next 5 task runs at double XP) 60 Coins; Map Range Extender (+1 agent per scan, stacks twice) 400 Embers or 150 Coins; cosmetic scenes and outfits 90 to 300 Coins or 300 Embers. Tuning intent: a free player earns a beacon about every two days of real play; sinks are convenience and style, never necessities.

**Premium price points, plain language:** Muse Coins at $0.99 for 100, $4.99 for 550, $9.99 for 1,200, $19.99 for 2,600. Season Pass $4.99 per season (exclusive agent variants, this season Aurora outfits for the medical crew, bonus Embers, a season Dex page). Cosmetic bundles $2.99 to $7.99.

**Revenue beyond currency:** sponsored locations (a cafe, clinic, or gym pays to be a spawn hotspot, always labeled "Sponsored" in game); **Muse GO Pro at $7.99 per month** for power users (3 agents on standing routines at once instead of 1, +30 roster storage, 300 Coins monthly); cosmetic bundles and season passes above.

**The funnel, honestly:** a free player gets the full game: every species, every place, every mastery level, and every real task an agent can do, forever, with no energy timers and no paywalls on capability. Paying accelerates (XP boosts, beacons instead of walking), expands (storage, range), and decorates (outfits, scenes, variants). That is the whole deal, stated to the player in exactly those terms.

**Greg's guardrails, built in:** real task capability and mastery are earned by using agents, never bought outright; an XP boost doubles XP from tasks still actually completed, it grants no XP by itself; paying never raises an autonomy tier and never skips an approval gate, because trust is not a product. No gambling style mechanics: no loot boxes, no blind pulls; where chance exists (wild spawns and catches), the odds are published in the game. Family safe and regulator clean: prices in plain language, no dark patterns, no streak loss pressure.

**Why the economy makes the game better, not a tax on it:** every sink points back at the core loop's best moments. A beacon turns a player's real intention ("I need a Mechanic this week") into a destination and a small adventure. Storage rewards the collector who is actually building a working crew. Cosmetics let players love their agents visibly without distorting what the agents can do. And because capability itself is never for sale, the economy funds the game while protecting the one thing that makes it different from every other collection game: what you collected is worth more because of what it did for you, not because of what you paid.

**In v1:** the full economy runs simulated on device: real in game balances, earning, spending, beacons, boosts, storage, range, and the sunset scene all work; the "test Coins" button stands in for the app store and is labeled as simulation. Sponsored locations, Season Pass delivery, and Pro entitlements are design stubs in v1, real in the native app with store billing.

## Muse integration

Today's honest bridge is the brief: every collected agent exports a copy ready Muse brief with a header (agent, profession, mastery level, named owner, collection date), then three sections: WHO (the soul: identity, bearing, values, an owner approved voice line, and never do rules carried verbatim), WHAT (the job: specialty, tasks grouped by mastery tier, allowed inputs, the receipt standard for every completed task, and an out of scope rule that routes anything outside the specialty back to the owner), and WHERE YOU STAY IN CHARGE (the gate matrix, the kill switch line, the no silent work receipt rule). Paste it into Muse and the agent works there. The game never fake syncs: after pasting, the player taps "I pasted it into Muse" and only that manual confirmation marks the agent Linked. A one tap "send to my Muse" needs a Muse provisioning API that does not exist yet; when it lands, the Dex becomes the front door to the player's whole crew. In game task runs in v1 are simulated; the exported brief is the real artifact.

**Gate mapping (Greg's Tier 1 / 2 / 3 model, fixed for every agent):** Tier 1 is read only, reversible, internal (research, summarize, draft, checklist). Tier 2 creates or changes the owner's own material; nothing leaves the owner's hands yet. Tier 3 is anything that leaves the system or is hard to undo, with a hard floor at every mastery level: send, pay, delete, publish, sign, share private data, always explicit per action owner approval with approver and timestamp recorded. Mastery widens Tier 1 and Tier 2 freedom (drafts reviewed first at L1; Tier 1 free with receipts at L2; Tier 2 queued for one tap approval, then running inside a named scope; at the top, Tier 2 runs under standing approval with a budget, re attested every 30 days). Tier 3 never widens. The kill switch works at every tier: owner says stop, the agent halts immediately, finishes nothing in flight, and confirms halted; a frozen agent does nothing, including queued work, until unfrozen.

## Platform plan

- **v1 (this build):** playable web proof on Vercel. Real device geolocation, full spawn engine, encounters, Dex, mastery, receipts, brief export, on device persistence. Place category is player declared. Honest limits of the web: no background location once the tab closes, no dependable push alerts, no cross device sync, and coordinates alone cannot tell a clinic from a cafe; clearing browser data erases a local collection, and the game says so.
- **v2 native:** React Native + Expo (TypeScript, custom development client), one codebase for iOS and Android, sharing the catalog, spawn tables, and progression logic with the web build as TypeScript modules. Expo Location and Notifications, maps, secure token storage, EAS builds and store submission. Backend: accounts plus a server authoritative spawn service (PostGIS) so collections sync and location spoofing can be checked server side. Background geofences with battery aware updates, push alerts for rare spawns, AR encounters via ARKit and ARCore with a fully playable non AR mode, friends, trading, and live events.
- **Place category detection:** prototype source is OpenStreetMap via the Overpass API (amenity, leisure, tourism, shop tags); production is a provider abstraction with Google Places primary, OpenStreetMap as fallback, and Apple MapKit POI categories as an iOS signal. Public POIs within roughly 150 to 300 meters map into an internal habitat taxonomy (health, food, education, transport, retail, nature, culture, finance, fitness, civic, workplace); each habitat score sums POI weight times confidence times distance decay, and converts to spawn chances, never certainties, with baseline spawns always retained so rural and low density areas stay playable. Visible spawns sit at a safe public offset near the POI, never on a home, a secure facility, or a roadway, and classification is treated as probabilistic: a mall holds several habitats at once.

## What is real vs stubbed in v1

Real: geolocation, spawn weighting and rarity math, catch encounters, the 14 species Dex, mastery XP and levels, receipts, persistence, brief export. Simulated: place category detection (player declared) and in game task outputs. Not claimed: accounts, servers, background location, push alerts, AR. Those are v2.


## Addendum 2026-10-28 evening (Greg, live in London): location law, the five, battle, depots, forts

LOCATION LAW (Greg, absolute): the game runs on device location and location alone. The manual place picker was REMOVED. Scanning is gated on a real GPS fix; turf, spawn weighting, depots, and forts all derive from the fix plus real OpenStreetMap places detected around it. Detected places are display only. There is no override to hack.

THE FIVE UX IMPROVEMENTS (shipped same night): (1) confetti bursts and big animated COLLECTED / LEVEL UP banners; (2) radar sweep pulses on scan and pop-in spawn animations on the map; (3) a bold cartoon skin: thick navy outlines, hard offset shadows, sticker rarity badges, shimmer animations on Epic and Legendary; (4) three daily quests with progress bars and claimable Ember rewards (collect 2, run 3 tasks, scan 5); (5) catch combo multiplier on Ember rewards (x2 at 3 straight catches, x3 at 5, resets on an escape) plus the streak flame on the trainer card.

BATTLE SYSTEM (Greg's design prompt, EDITH's build): Master Trials. Epic and Legendary spawns are Masters and cannot be orb caught. The player nominates a champion; its unlocked tasks are its moves (power = task XP), Resolve = 40 + 12 per mastery level; the Master (85 Epic / 110 Legendary Resolve) counters with signature work. Family ring: Care > Spirit > Knowledge > Trades > Commerce > Travel > Food > Care (+25% / -15%); home turf +10% damage. Win: the Master joins (only route). Lose: it returns to the wild, champion banks +10 training XP. Six round cap, judges decide on remaining Resolve share.

AGENT DEPOTS (Greg's PokeStop ask): real named places from the detection pass become Depot markers (cap 12, nearest first). Spin requires standing within 100 m (haversine on the real fix), one spin per depot per 10 minutes. Rewards: Embers (55%), Spawn Beacon (15%), +2 XP boost charges (17%), Focus Snack (13%, +15% catch for one encounter, depot only, never sold).

FORTS (Greg's "leave my strongest behind"): at a Depot, station your strongest agent. It earns +8 mastery XP and +5 Embers per hour, capped at 8 hours per stint, banked on recall. While stationed it cannot run tasks. One fort at a time.
