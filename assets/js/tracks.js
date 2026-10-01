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

window.SHS_TRACKS = [
  { title: 'Useless Heroic', src: 'assets/music/useless-heroic.mp3', art: 'assets/vinyl-cover.jpg' },
  { title: 'Desperation', src: 'assets/music/desperation.mp3', art: 'assets/vinyl-cover.jpg' },
  { title: 'Entropy', src: 'assets/music/entropy.mp3', art: 'assets/hero-brand.jpg' },
  { title: 'Nocturnal Echoes of Silence', src: 'assets/music/nocturnal-echoes.mp3', art: 'assets/banner.jpg' },
  { title: 'Residual Pull', src: 'assets/music/residual-pull.mp3', art: 'assets/hero-brand.jpg' },
  { title: 'Shadowed Echoes', src: '', art: 'assets/hero-brand.jpg' },
  { title: 'Hold the Line', src: '', art: 'assets/vinyl-cover.jpg' }
];
