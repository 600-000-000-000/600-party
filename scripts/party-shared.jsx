/* global React */
// Shared data + helpers for 600 PARTY variations.

const PARTY = {
  number: ["600", "000", "000", "000"],
  edition: "600 BILLION EXTRAVAGANZA",
  date: "11 JUNE 2026",
  defaultHeadline: "PRAGUE PARTY",
  doorsTime: "DOORS 20:00",
  djWindow: "12:30 — 03:00",
  venue: "FUCHS 2",
  venueAddress: "Ostrov Štvanice · Praha 7, Holešovice",
  venueUrl: "https://www.fuchs2.cz/",
  ticketsUrl: "https://lnbits.600.wtf/events/FT5HhuhSWHdhswmxZXCvMD",
  siteUrl: "https://600.wtf",
  bands: [
    { name: "LONGY",            href: "https://www.youtube.com/watch?v=AR2-utayOwM" },
    { name: "THE GREENSANDS",   href: "https://www.youtube.com/watch?v=7_X7526XadM" },
    { name: "HORSE HEADS",      href: "https://www.youtube.com/watch?v=f7iMtvl8Zig" },
    { name: "JOE MARTIN",       href: "https://www.youtube.com/watch?v=1SSsM8f61PQ" },
    { name: "EDWIN WILLIAMSON", href: "https://www.youtube.com/watch?v=OMFGh-Ri9_M" },
    { name: "FABLE",            href: null },
    { name: "AIRKLIPZ",         href: "https://www.youtube.com/watch?v=F8WNIl1NA30" },
    { name: "ANDY PRINCZ",      href: "https://www.youtube.com/watch?v=F8WNIl1NA30" },
    { name: "G.O.L.D",          href: "https://www.youtube.com/watch?v=jEPKLsC0_Jc" },
  ],
  sites: [
    { name: "BLADE",     href: "https://www.youtube.com/watch?v=ys8tDaXPqoM" },
    { name: "ROGER9000", href: "https://www.youtube.com/watch?v=uzbmWhlzvj0" },
  ],
  djs: [
    "MAD MUNKY",
    "ANDY PRINCZ",
    "AKME",
    "DJ KULLA w/ RAS KALEB",
    "ROOTZALL",
  ],
};

// ---- Matrix rain canvas ----
// Static field of dim 0's. Periodically a 3×4 region of cells is "swept"
// upward — bottom row first, then row above, etc. Once the sweep reaches
// the top row, the block reads:
//
//   6 0 0
//   0 0 0
//   0 0 0
//   0 0 0
//
// All lit cells share ONE color (no leader/trail variation). The block
// holds briefly, then fades back to base; a new region starts elsewhere.
function MatrixRain({ enabled = true, colorA = "#f7931a", colorB = "#fff7ec", density = 1, fontSize = 18 }) {
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(0);

  React.useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Sacred 3×4 — top→bottom rows, left→right digits per row.
    const SIGNAL = [
      ["6", "0", "0"],
      ["0", "0", "0"],
      ["0", "0", "0"],
      ["0", "0", "0"],
    ];
    const SIGNAL_H = SIGNAL.length;     // 4 rows
    const SIGNAL_W = SIGNAL[0].length;  // 3 cols

    const COL_W = Math.round(fontSize * 1.2);
    const ROW_H = Math.round(fontSize * 1.2);

    // Timing per region (seconds)
    const SWEEP_PER_ROW = 0.18; // each row lights this long after the previous
    const HOLD = 0.9;           // full 600,000,000,000 stays lit this long
    const FADE = 0.6;           // then fades back to base

    let columns = 0;
    let rows = 0;
    let regions = [];
    let nextSpawnAt = 0;

    // ---- offscreen base layer (static dim 0-grid) ----
    const baseCanvas = document.createElement("canvas");
    const baseCtx = baseCanvas.getContext("2d", { alpha: false });

    const renderBase = (rect) => {
      baseCanvas.width = rect.width * dpr;
      baseCanvas.height = rect.height * dpr;
      baseCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      baseCtx.fillStyle = "#000";
      baseCtx.fillRect(0, 0, rect.width, rect.height);

      baseCtx.font = `300 ${fontSize}px "Trebuchet MS", "Helvetica Neue", Arial, sans-serif`;
      baseCtx.textBaseline = "top";
      baseCtx.fillStyle = colorA;
      baseCtx.globalAlpha = 0.16;
      for (let r = 0; r < rows; r++) {
        const y = r * ROW_H;
        for (let c = 0; c < columns; c++) {
          const x = c * COL_W + Math.round((COL_W - fontSize) / 2);
          baseCtx.fillText("0", x, y);
        }
      }
      baseCtx.globalAlpha = 1;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.ceil(rect.width / COL_W);
      rows = Math.ceil(rect.height / ROW_H) + 2;
      renderBase(rect);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const spawnRegion = (now) => {
      const maxCol = Math.max(0, columns - SIGNAL_W);
      const maxRow = Math.max(0, rows - SIGNAL_H - 2);
      regions.push({
        col: Math.floor(Math.random() * (maxCol + 1)),
        // top row of the 3×4 block, in grid coords
        row: Math.floor(Math.random() * (maxRow + 1)),
        bornAt: now,
      });
    };

    let prevDirty = [];

    let lastT = performance.now();
    const draw = (t) => {
      const rect = canvas.getBoundingClientRect();
      lastT = t;

      // erase last frame's painted region cells by blitting base
      if (prevDirty.length === 0) {
        ctx.drawImage(baseCanvas, 0, 0, rect.width, rect.height);
      } else {
        for (const d of prevDirty) {
          ctx.drawImage(
            baseCanvas,
            d.x * dpr, d.y * dpr, d.w * dpr, d.h * dpr,
            d.x, d.y, d.w, d.h,
          );
        }
      }
      prevDirty = [];

      // schedule spawns — keep a few going at once for visual life
      if (t / 1000 > nextSpawnAt) {
        spawnRegion(t / 1000);
        nextSpawnAt = t / 1000 + (0.4 + Math.random() * 0.9) / Math.max(0.2, density);
      }

      ctx.textBaseline = "top";
      ctx.font = `700 ${fontSize}px "Trebuchet MS", "Helvetica Neue", Arial, sans-serif`;
      ctx.fillStyle = colorA; // ALL lit cells share one color (orange)
      ctx.shadowColor = colorA;

      const SWEEP_DURATION = SIGNAL_H * SWEEP_PER_ROW;
      const TOTAL = SWEEP_DURATION + HOLD + FADE;

      regions = regions.filter((g) => {
        const age = t / 1000 - g.bornAt;
        if (age >= TOTAL) return false;

        // For each of the 4 rows, compute the row's own per-row alpha:
        //  - sweep phase: row i lights up at t = (SIGNAL_H-1-i)*SWEEP_PER_ROW
        //    (bottom row first, top row last)
        //  - hold phase: full
        //  - fade phase: linear back to 0
        for (let i = 0; i < SIGNAL_H; i++) {
          // bottom row is i = SIGNAL_H-1, top row is i = 0
          const rowSweepIdx = SIGNAL_H - 1 - i;       // 0=bottom first, 3=top last
          const rowLightAt = rowSweepIdx * SWEEP_PER_ROW;
          let rowAlpha;
          if (age < rowLightAt) {
            rowAlpha = 0;
          } else if (age < SWEEP_DURATION + HOLD) {
            // ramp in over a beat then hold
            const ramp = Math.min(1, (age - rowLightAt) / SWEEP_PER_ROW);
            rowAlpha = ramp;
          } else {
            // fading out
            const f = (age - (SWEEP_DURATION + HOLD)) / FADE;
            rowAlpha = Math.max(0, 1 - f);
          }
          if (rowAlpha <= 0) continue;

          const row = g.row + i;
          const y = row * ROW_H;
          if (y < -ROW_H || y > rect.height) continue;

          const xStart = g.col * COL_W;
          const w = SIGNAL_W * COL_W;

          // knock back to base under this row, then paint over
          ctx.drawImage(
            baseCanvas,
            xStart * dpr, Math.max(0, y) * dpr,
            w * dpr, Math.min(ROW_H, rect.height - y) * dpr,
            xStart, Math.max(0, y),
            w, Math.min(ROW_H, rect.height - y),
          );

          ctx.globalAlpha = rowAlpha;
          ctx.shadowBlur = 10 * rowAlpha;
          const lineDigits = SIGNAL[i];
          for (let j = 0; j < SIGNAL_W; j++) {
            const c = g.col + j;
            if (c < 0 || c >= columns) continue;
            const x = c * COL_W + Math.round((COL_W - fontSize) / 2);
            ctx.fillText(lineDigits[j], x, y);
          }

          prevDirty.push({ x: xStart, y, w, h: ROW_H });
        }
        return true;
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [enabled, colorA, colorB, density, fontSize]);

  if (!enabled) return null;
  return <canvas ref={canvasRef} className="matrix-canvas" />;
}

// ---- Sacred 4-line number stack ----
function SacredStack({ size = 1, color = "currentColor", style = {} }) {
  return (
    <div
      className="sacred-stack"
      style={{
        fontSize: `${size}em`,
        color,
        ...style,
      }}
    >
      {PARTY.number.map((n, i) => (
        <span key={i}>{n}</span>
      ))}
    </div>
  );
}

// ---- "600 PARTY" falling-letters intro ----
// Each character drops in sequence with slight wobble, then settles.
function FallingHeadline({ text, baseDelay = 0, perChar = 90, speed = 1, style = {}, charStyle = {}, onDone }) {
  const chars = text.split("");
  const totalDuration = (baseDelay + chars.length * perChar + 900) / speed;

  React.useEffect(() => {
    if (!onDone) return;
    const t = setTimeout(onDone, totalDuration);
    return () => clearTimeout(t);
  }, [totalDuration, onDone]);

  return (
    <span style={{ display: "inline-flex", whiteSpace: "pre", ...style }}>
      {chars.map((c, i) => {
        const delay = (baseDelay + i * perChar) / speed;
        const rot = (i % 2 === 0 ? -1 : 1) * (4 + (i % 5));
        return (
          <span
            key={`${c}-${i}`}
            style={{
              display: "inline-block",
              animation: `fall-in ${1100 / speed}ms cubic-bezier(0.2, 0.9, 0.25, 1.1) ${delay}ms both`,
              "--rot": `${rot}deg`,
              ...charStyle,
            }}
          >
            {c === " " ? "\u00A0" : c}
          </span>
        );
      })}
    </span>
  );
}

// ---- Marquee strip (used in v1 + v3) ----
function Marquee({ items, separator = "·", speed = 30, style = {}, color = "currentColor" }) {
  const list = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", color, ...style }}>
      <div
        style={{
          display: "inline-flex",
          gap: 24,
          paddingRight: 24,
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {list.map((it, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 24 }}>
            <span>{it}</span>
            <span style={{ opacity: 0.5 }}>{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// YouTube play glyph
const PlayGlyph = ({ size = 14 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden style={{ flexShrink: 0 }}>
    <path
      fill="currentColor"
      d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"
    />
  </svg>
);

const ArrowGlyph = ({ size = 14 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden style={{ flexShrink: 0 }}>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="square"
      d="M5 19 L19 5 M9 5 H19 V15"
    />
  </svg>
);

// Lightning bolt
const BoltGlyph = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden>
    <path fill="currentColor" d="M13 2 L3 14 H10 L8 22 L21 9 H13 L15 2 Z" />
  </svg>
);

Object.assign(window, {
  PARTY,
  MatrixRain,
  SacredStack,
  FallingHeadline,
  Marquee,
  PlayGlyph,
  ArrowGlyph,
  BoltGlyph,
});
