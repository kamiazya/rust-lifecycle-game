import('./lifegame')
  .then(mod => mod.run())
  .catch(e => console.error("Error importing `lifegame.js`:", e));
