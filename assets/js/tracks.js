// Sore Heart Soar — one track list for both players (index.html and store.html).
// A track with no src shows as "Coming soon" on the home page and is skipped in the store.
// Players only play this many seconds of each song, then move to the next one.
window.SHS_PREVIEW_SECONDS = 20;

// Shuffle: returns a function that hands out track indexes in a random order,
// playing every track once before reshuffling (never the same song twice in a row).
window.SHS_makeShuffle = function (indexes) {
  let bag = [], last = -1;
  return function next() {
    if (!bag.length) {
      bag = indexes.slice();
      for (let i = bag.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [bag[i], bag[j]] = [bag[j], bag[i]]; }
      if (bag.length > 1 && bag[0] === last) bag.push(bag.shift());
    }
    last = bag.shift();
    return last;
  };
};

// Autoplay: start the player when the page opens. Browsers block sound until the
// visitor interacts, so if that happens the music starts on their first click or
// key press instead (unless it was on a player control, or they're typing).
// If the visitor paused, neither page auto-starts again for the rest of the session.
window.SHS_setUserPaused = function (paused) {
  try { sessionStorage.setItem('shs-paused', paused ? '1' : '0'); } catch (e) { /* storage off */ }
};
window.SHS_autoplay = function (audio, controls) {
  const pausedByUser = () => { try { return sessionStorage.getItem('shs-paused') === '1'; } catch (e) { return false; } };
  if (pausedByUser()) return;
  const events = ['pointerdown', 'keydown', 'touchend'];
  const off = () => events.forEach((t) => document.removeEventListener(t, go, true));
  function go(e) {
    const t = e.target.closest ? e.target : document.body;
    if (t.closest('input, textarea, select')) return;
    off();
    if (t.closest(controls)) return;
    if (audio.paused && !pausedByUser()) audio.play().catch(() => {});
  }
  audio.play().catch(() => events.forEach((t) => document.addEventListener(t, go, true)));
};

window.SHS_TRACKS = [
  { title: 'Useless Heroic', src: 'assets/music/useless-heroic.mp3', art: 'assets/vinyl-cover.jpg' },
  { title: 'Desperation', src: 'assets/music/desperation.mp3', art: 'assets/vinyl-cover.jpg' },
  { title: 'Entropy', src: 'assets/music/entropy.mp3', art: 'assets/hero-brand.jpg' },
  { title: 'Nocturnal Echoes of Silence', src: 'assets/music/nocturnal-echoes.mp3', art: 'assets/banner.jpg' },
  { title: 'Residual Pull', src: 'assets/music/residual-pull.mp3', art: 'assets/hero-brand.jpg' },
  { title: 'Shadowed Echoes', src: '', art: 'assets/hero-brand.jpg' },
  { title: 'Hold the Line', src: '', art: 'assets/vinyl-cover.jpg' }
];
