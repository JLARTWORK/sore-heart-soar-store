# SHS Official Site — Sore Heart Soar

The Sore Heart Soar main/official site: one project with two pages, the artist home and the merch store.

- `index.html`: home page with the music player, merch teaser, about, gallery, guestbook and links
- `store.html`: the merch store
- `assets/css/shs.css`: shared colors, fonts and the Scanline Softworks footer (change the palette here)
- `assets/js/tracks.js`: the one track list both players use (add songs here)

The store: a dark, cinematic design with a light theme, a filterable/searchable catalog, product details with size and quantity, a cart drawer with a free-shipping meter, and a built-in music player.

**Status: Offline** — Netlify site removed. Local copy only.

## Stack

- Static site (`index.html` + `assets/`)
- Client-side cart (localStorage)
- Placeholder checkout (real payments later)

## Themes

- **Dark** (default) and **Light**, toggled from the header. The choice is shared by both pages (`localStorage` key `shs-theme`).

Product links: `store.html#product-<id>` opens that product directly.

## Local

Open `index.html` in a browser, or:

```bash
npx serve .
```

## Deploy

Previously on Netlify (`sore-heart-soar-store.netlify.app`). That project has been deleted. To go live again, create a new Netlify project and deploy from this folder.
