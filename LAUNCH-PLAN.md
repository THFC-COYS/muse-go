# Launch plan: from web proof to store beta (prepared 2026-10-28, for Greg's decisions)

## Status, 2026-10-28 (Greg: "Start the full build")
DONE in the web beta and shipped live: AMUSE rebrand + Core Coins rename; guided first hunt onboarding; continuous location watch with walking distance, buddy walking XP, teleport guard, and driving lockout with passenger attestation; University place category; K-12 schools excluded from Depots; Store Bridge payments (honest labeled sandbox on web, Apple/Google IAP interface for native) with the four designed coin packs and restore purchases; the unlabeled test mint is GONE; backup/restore save codes; privacy, terms, and support/location-removal pages published with the game; Capacitor native scaffold in /native with Greg's Mac build steps. NAME UPDATE later the same evening: Greg reopened the name and chose AMUSE (see The name, below); the rebrand to AMUSE shipped the same night. STILL GREG-ONLY: developer program enrollments, trademark search on AMUSE, RevenueCat account and store product creation, bank/tax for payouts. NEXT BUILD STEPS after enrollments: AMUSENative bridge plugin to RevenueCat, iOS/Android platform projects on Greg's Mac, TestFlight + Play closed track submission, then the LinkedIn beta announcement.

## The name

### DECIDED by Greg, 2026-10-28: AMUSE
Store title: **AMUSE: Collect AI Agents** (subtitle field: "Explore the real world. Collect agents that actually work for you.")
Greg asked for Muse in the name, the sneaky way. AMUSE is it: A-MUSE, with MUSE glowing inside an ordinary English word for delight that nobody can fence off. It backronyms the game: Agents, Mastery, Upgrades, Skills, Exploration. The logo renders the MUSE in amber so the wink is visible. Earlier that evening EDITH had recommended keeping Muse out entirely (Meta trademark; a title built directly on it invites a fight and implies an official product) and shipped "Agentia" as the working name; Greg reopened it, was offered AMUSE / MuSeum / Agentia-with-Muse-subtitle, and picked AMUSE. A formal trademark search is still required before store submission.

### Held in reserve
**MuSeum** (Muse + museum pun; collecting is curating; matches his MuSe SIM / Muse Exchange stylization) and **Agentia** (one invented word; collision checked clean on the stores, only an obscure itch.io poetry experiment).
Retired after collision checks: Pocket Agents (an AI dev-tool project and a delisted real-estate app already use it in adjacent space), Agent Atlas (ATLAS:EARTH is a heavyweight location collecting game, 113K ratings), Muse GO (direct trademark), Agentopia and Agent Trails (superseded backups).

Currency can keep their names under any title: Embers + Agent Coins (rename "Muse Coins" to **Core Coins** for the same trademark reason).

## Hard blockers before a store beta (nothing here is optional)

### Greg-only
1. Apple Developer Program enrollment ($99/yr, his identity and payment) and Google Play developer account ($25, identity verification can take days).
2. Final name pick + trademark search (attorney or LegalZoom-style search; EDITH's web checks are not a clearance).
3. Bank/tax details for store payouts; a support email and a domain that resolves for the privacy policy (aiccountable.io works, or the game's own domain).
4. RevenueCat account (free tier) if we use it for payments plumbing (recommended), created under his name.

### Buildable by EDITH (no Greg input needed beyond the above)
5. A shippable app shell. Two honest routes:
   - FAST BETA: wrap the current web game with Capacitor. Same code, real app on TestFlight and Play closed track in roughly 1 to 2 weeks of build. Foreground location only.
   - PROPER V1: the React Native + Expo rebuild from the design brief, 4 to 8 weeks, adds background geofences, push alerts, AR-ready structure.
   Recommendation: Capacitor beta now to learn from real players, RN v1 behind it.
6. Payments (the gap Greg spotted). Digital currency on iOS/Android MUST go through Apple/Google in-app purchase; Stripe is not allowed for in-game digital goods. Build: consumable coin packs at the designed prices ($0.99/100, $4.99/550, $9.99/1,200, $19.99/2,600, mapped to store price tiers), Season Pass $4.99 and Pro $7.99/mo as subscriptions, restore purchases, server-side receipt validation (RevenueCat), and REMOVE the test coin mint from store builds. Stores keep 15% under the small business programs.
7. Accounts + cloud save. Today a cleared browser erases a collection. Beta needs Sign in with Apple (mandatory if any social login exists) / Google sign-in + a backend (Supabase) syncing collection, currency, and receipts, plus server-checked spawn and purchase state (anti-cheat starts here).
8. Anti-spoof basics, because the location law is the brand: mock-location detection on Android, teleport/speed sanity checks, driving lockout above ~25 mph with a passenger attestation path, and Greg's rule enforced server-side in v1.
9. Safety and store policy pack: privacy policy and terms hosted at a live URL, App Store privacy labels / Play data safety form, age rating (target 9+/Everyone 10+), K-12 schools REMOVED from depot and spawn weighting in production (universities stay), a public "request removal of a location" page, support page.
10. Onboarding: a 90-second guided first hunt (fix location, first scan, first catch, first task). Beta retention dies without it.
11. Crash reporting + privacy-respecting analytics, and a beta feedback channel (TestFlight feedback + a simple form).

## Feature gaps: must / should / later

MUST for beta: continuous location updates while playing (the web proof takes one fix), walking/buddy distance credit, depot restock timers visible on the map, low-battery and offline tolerance messaging, push-free rare-spawn alerts while the app is open.
SHOULD for beta if time: family completion bonuses (finish the Care family, get a badge + Embers), regional/seasonal spawns, a "first Master" guaranteed Trial tutorial.
LATER (post-beta, do not block launch): friends, trading, team forts, AR encounters, sponsored depots, leaderboards, the RN background "a Legendary is near" push alerts, more species (wave 2: Lawyer? Accountant? Realtor? Greg's call).

## The LinkedIn announcement

Announce when TestFlight and Play closed track are LIVE and Greg has invites to give: "Beta is open, first 200 explorers" with a waitlist link beats announcing a web link. The post can honestly claim: first location-true collection game where the prizes are working AI agents; location-only anti-couch design; Master Trials; depots at real landmarks; built in the open by EDITH under Greg's direction. It must NOT claim: an official Meta/Muse product, real-money earnings, or background tracking.

## Sequence
Week 0: Greg picks the name, enrolls in both developer programs, creates RevenueCat. EDITH: Capacitor shell + IAP sandbox + Supabase sync + onboarding + policy pages. Week 1-2: internal testing, store submissions for beta review (Apple beta review is usually days), listing assets (icon from the 3D Muse, screenshots from the real game). Then the LinkedIn post, then learning, then the RN v1 decision with real data.
