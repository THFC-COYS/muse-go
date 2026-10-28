# Muse GO (working title)

A Pokemon GO style collection game for Muse agents. Explore the real world, collect profession agents where they live (a Doctor near the hospital, a Chef by the restaurant, a Pilot at the airport), and put them to work: every collected agent exports a copy ready Muse brief (WHO the soul / WHAT the job / WHERE YOU STAY IN CHARGE) and earns mastery XP by completing tasks, unlocking more autonomous work behind Greg's governance floor: send, pay, delete, and publish always need the owner's yes.

## Play the v1

Live: https://muse-go.vercel.app

v1 is a playable web proof: real device geolocation, the full place weighted spawn engine (6x home turf weighting), rarity tiers (Common 52 / Uncommon 27 / Rare 13 / Epic 6 / Legendary 2), orb based encounters, a 14 species Agent Dex, mastery levels L1 Novice to L5 Master, task runs with receipts, localStorage persistence, and per agent Muse brief export.

The economy runs in v1 too, fully simulated on device: Embers earned by catching, tasks, and a daily streak; Muse Coins via a clearly labeled test mint; a working shop (spawn beacons, roster storage, XP boosts, range extenders, a cosmetic scene) under Greg's guardrail that money accelerates but never buys mastery or trust. No loot boxes; spawn and catch odds are published in the game.

Honest labels: in v1 the player declares the place category and task outputs are simulated in game. The native v2 (React Native, one codebase for iOS and Android) reads real place types from the Places API, adds spawn alerts and vetted public spawn points, and wires real store billing, sponsored locations, the Season Pass, and the Pro tier.

## Run the checks

```
node tests/harness.js
```

## Design brief

See GAME-DESIGN-BRIEF.md for the one page design: team roster, launch roster, spawn rules, mastery ladder, and task unlock matrix.

Concept build. Not an official Meta product; no partnership implied. Play safe: public places only, never trespass, never play while driving.
