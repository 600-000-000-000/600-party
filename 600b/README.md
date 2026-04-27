# /600b/ — animated alternative landing

A drop-in alternative to the root `index.html`. Same content, same lineup,
same ticket links — plus three motion add-ons:

1. **Falling intro** — the `600 / 000 / 000 / 000` stack drops in line by
   line, then `PRAGUE PARTY` + the date + tagline slide up un-blurring.
2. **Transmission band** — a small dark slab between TICKETS and LOCATION
   with a slowly rotating sacred stone, lit by an ember halo.
3. **Matrix rain backdrop** — a single fixed-position `<canvas>` paints a
   dim 0-grid across the whole page; bright `600 / 000 / 000 / 000`
   blocks sweep upward at random and fade out. Bleeds through every dark
   section; orange sections are tinted 50% so they sit in front but still
   shimmer.

All animations respect `prefers-reduced-motion`.

## Layout

```
600b/
├── index.html         self-contained — only this file + sacred-stone.webp are new
├── sacred-stone.webp  the rotating stone (91 KB, re-encoded from the 6.4 MB original)
└── preview-*.jpg      static previews used in the PR description
```

Shared assets (fonts, logos, sponsor SVGs) come from `../assets/`.

## How to preview

The Dockerfile already serves the whole repo via nginx, so the new path
is live as soon as the file lands:

- `http://localhost:6009/`        → root (unchanged, dni's design)
- `http://localhost:6009/600b/`   → animated alternative

Or just open `600b/index.html` in any local server pointed at the repo root
(`python -m http.server 6009` is fine).
