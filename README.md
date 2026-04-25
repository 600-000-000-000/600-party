# 600 PARTY

Landing page for the **600 Billion Extravaganza** — 11 June 2026 · Fuchs 2 · Prague.
Lightning tickets via [lnbits.600.wtf](https://lnbits.600.wtf/events/FT5HhuhSWHdhswmxZXCvMD).

Static site, served by nginx in Docker. The page is a single React component (the
"cypherpunk poster" variation from Claude Design) compiled ahead-of-time to plain JS,
so the browser never runs a JSX transformer.

## Layout

```
index.html              # Entry — mounts <VariationMemePoster> into #root
styles/
  600b-tokens.css       # 600B design system: colors, type, spacing, motion
  party.css             # Shared variation styles + keyframes (matrix, falling letters, marquee, …)
scripts/                # Source JSX (edit here)
  party-shared.jsx      # PARTY data (bands/sites/DJs/links), MatrixRain canvas, helpers
  variation-meme-poster.jsx  # The page itself
dist/                   # Compiled JS (build artifact — committed for nginx-only deploy)
assets/                 # Logos, sacred stone, favicon
tests/smoke.spec.mjs    # Playwright smoke tests
build.mjs               # JSX → JS compiler (Babel)
Dockerfile              # nginx:alpine + this directory
Makefile                # install / compile / build / test / run / dev / clean
```

`bands.txt`, `location.txt`, `tickets.txt` are the source of truth for the line-up
and links — `scripts/party-shared.jsx` mirrors them. If you change a band link,
update both (or wire the JSX to read the txt files at build time — TODO).

## Develop

```bash
make install        # one-time: npm i (Babel + Playwright)
make compile        # JSX → dist/*.js after editing scripts/
make dev            # python -m http.server 6009 → http://localhost:6009
```

Editing flow: change `scripts/*.jsx` → `make compile` → reload browser.
The `dist/` artifact is committed so the Dockerfile stays nginx-only (no node
in the runtime image).

## Test

```bash
make test           # Playwright: boots a static server, runs tests/smoke.spec.mjs
```

Smoke covers: page mounts, sacred 600/000/000/000 stack visible, tickets link
points at the LNbits event, Fuchs 2 + address rendered, ≥8 YouTube band links
present, matrix-rain canvas attached, **no console errors**, and the page is
not running Babel-in-browser.

## Deploy

```bash
make build          # docker build (runs `make compile` first)
make run            # docker run -d -p 6009:80 (with --restart always)
```

The Dockerfile is `FROM nginx:alpine` + `COPY . /usr/share/nginx/html` plus a
small server block that whitelists `/.well-known/lnurlp` for LNURL-pay support.

## Design provenance

The visual design comes from a Claude Design handoff bundle (the cypherpunk
"meme poster" variation, picked after a 3-way comparison). The dev-only Tweaks
panel from the prototype is dropped here; defaults are hard-coded:

| prop          | value           |
| ------------- | --------------- |
| `headline`    | `PRAGUE PARTY`  |
| `introOn`     | `true`          |
| `introSpeed`  | `1`             |
| `matrixOn`    | `true`          |

To try alternate headlines (e.g. `BTC PRAGUE`, `GM PRAGUE`), edit the props at
the bottom of `index.html`.
