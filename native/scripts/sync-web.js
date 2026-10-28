// Copies the web game and its policy pages into native/www (Capacitor's webDir).
// The web build stays the single source of truth: edit ../index.html, then re-sync.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', '..');
const www = path.join(__dirname, '..', 'www');
const files = ['index.html', 'privacy.html', 'terms.html', 'support.html'];

fs.mkdirSync(www, { recursive: true });
for (const f of files) {
  fs.copyFileSync(path.join(root, f), path.join(www, f));
  console.log('synced', f);
}
console.log('www ready at', www);
