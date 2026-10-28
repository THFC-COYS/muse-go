# Agentia native beta (Capacitor shell)

This folder wraps the live web game (`../index.html`) as a native app for TestFlight and Google Play closed testing. The web build remains the single source of truth for the game itself; this shell adds native geolocation permissions, the app identity, and the payments bridge target.

## What is already wired in the game for native

- **Store Bridge** (`StoreBridge` in index.html): on the web it runs an honestly labeled sandbox. In a Capacitor build it looks for `window.AgentiaNative.purchase(productId, cb)` and `window.AgentiaNative.restore(cb)`. The remaining native task is a thin bridge plugin that forwards those calls to RevenueCat (`@revenuecat/purchases-capacitor`, already in package.json) with the product IDs `coins_100`, `coins_550`, `coins_1200`, `coins_2600`.
- **Geolocation**: Capacitor's geolocation plugin is a dependency; the game falls back to the web Geolocation API, which Capacitor serves natively once `NSLocationWhenInUseUsageDescription` (iOS) and the Android location permissions are set.
- **Policies**: privacy.html, terms.html, support.html sync into the app and are the exact pages to submit as the store policy URLs (host them at the live site).

## Greg's Mac build steps (first build)

Prereqs: Xcode (App Store), Android Studio, Node 20+, an Apple Developer Program membership and a Google Play developer account (both in Greg's name).

```
cd native
npm install
npx cap add ios
npx cap add android
npm run cap:sync
npm run cap:ios       # opens Xcode: set Signing team, archive, upload to TestFlight
npm run cap:android   # opens Android Studio: Build > Generate Signed App Bundle for Play internal/closed testing
```

iOS permission strings to add in Xcode (Info.plist):
- NSLocationWhenInUseUsageDescription: "Agentia uses your location to place you on the map and find the real places where agents, Depots, and Forts live. Location is the game."
- Do NOT request Always/background location in the beta. Foreground only is a feature: no background tracking, and reviewers like it.

## Store checklist before submission

1. Final name decision + trademark search (Agentia is the working name). If the name changes, update `appName`, the game title, and the policy pages; the appId (`io.aiccountable.agentia`) can stay.
2. RevenueCat project with the four coin products created in App Store Connect and Play Console first, keys in the bridge plugin config (never in the web game).
3. Screenshots from the real build on a real device (the map with wild agents standing on it is the hero shot), app icon exported from the 3D Muse figure.
4. App Store privacy labels and Play data safety: location (approximate + precise, app functionality, not linked to identity in beta, no tracking), purchases.
5. Age rating questionnaire: target 9+ / Everyone 10+. K-12 schools never host Depots (already enforced in the game code).
6. Support URL and privacy URL pointing at the hosted support.html and privacy.html.
