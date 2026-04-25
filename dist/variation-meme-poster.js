/* global React, PARTY, MatrixRain, SacredStack, FallingHeadline, Marquee, PlayGlyph, ArrowGlyph, BoltGlyph */

// ============================================================
// VARIATION 3 — CYPHERPUNK POSTER
// Black/soot backdrop, matrix rain through it, faded orange grid,
// terminal-styled cards, sacred stone hero, chip-cloud lineup.
// Letters still fall in — they land glowing on black.
// ============================================================

function VariationMemePoster({
  headline,
  introOn,
  introSpeed,
  matrixOn
}) {
  const [introDone, setIntroDone] = React.useState(!introOn);
  React.useEffect(() => {
    setIntroDone(!introOn);
  }, [introOn, headline, introSpeed]);
  return /*#__PURE__*/React.createElement("div", {
    className: "party-reset party-artboard",
    style: {
      width: "100%",
      background: "var(--c-soot)",
      color: "var(--c-bone)",
      minHeight: "100%",
      position: "relative",
      backgroundImage: "repeating-linear-gradient(0deg, rgba(247,147,26,0.07) 0 1px, transparent 1px 56px), repeating-linear-gradient(90deg, rgba(247,147,26,0.07) 0 1px, transparent 1px 56px)"
    }
  }, matrixOn && /*#__PURE__*/React.createElement(MatrixRain, {
    enabled: matrixOn,
    density: 1,
    fontSize: 18
  }), /*#__PURE__*/React.createElement(CornerBrackets, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      padding: "14px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "var(--c-orange)",
      textTransform: "uppercase",
      borderBottom: "1px solid rgba(247,147,26,0.35)",
      background: "rgba(0,0,0,0.55)",
      backdropFilter: "blur(2px)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "600B://party.exec \u2014 node PRG-01"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--c-orange)",
      animation: "blink 1.2s steps(1) infinite"
    }
  }), "BROADCASTING \xB7 ", PARTY.date), /*#__PURE__*/React.createElement("span", null, "04:20 GMT \xB7 GM")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      background: "rgba(0,0,0,0.7)",
      color: "var(--c-orange)",
      padding: "10px 0",
      fontFamily: "var(--font-display)",
      fontSize: 22,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      borderBottom: "1px solid rgba(247,147,26,0.25)"
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    items: ["GM", "STACK", "BUILD", "MEME", "REPEAT", "₿", PARTY.edition, "₿", "11 JUNE 2026", "FUCHS 2 · PRG"],
    speed: 28
  })), /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      zIndex: 2,
      padding: "60px 32px 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 50,
      left: 40,
      transform: "rotate(-4deg)",
      fontFamily: "var(--font-display)",
      fontSize: 14,
      letterSpacing: "0.24em",
      background: "var(--c-orange)",
      color: "var(--c-black)",
      padding: "6px 14px"
    }
  }, "\u2605 NO RUGS \u2605"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 50,
      right: 40,
      transform: "rotate(4deg)",
      fontFamily: "var(--font-display)",
      fontSize: 14,
      letterSpacing: "0.24em",
      background: "var(--c-orange)",
      color: "var(--c-black)",
      padding: "6px 14px"
    }
  }, "\u2605 JUST HUGS \u2605"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block",
      border: "3px solid var(--c-orange)",
      padding: "10px 22px",
      transform: "rotate(-2deg)",
      background: "rgba(247,147,26,0.08)",
      boxShadow: "0 0 32px rgba(247,147,26,0.25)"
    }
  }, /*#__PURE__*/React.createElement(SacredStack, {
    size: 1,
    color: "var(--c-orange)",
    style: {
      fontSize: "clamp(36px, 6vw, 64px)",
      lineHeight: 0.85,
      textShadow: "0 0 14px rgba(247,147,26,0.5)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      fontFamily: "var(--font-display)",
      fontSize: "clamp(96px, 18vw, 220px)",
      lineHeight: 0.86,
      letterSpacing: "0.02em",
      color: "var(--c-white)",
      textTransform: "uppercase"
    }
  }, introOn ? /*#__PURE__*/React.createElement(FallingHeadline, {
    text: headline,
    perChar: 70,
    baseDelay: 120,
    speed: introSpeed,
    charStyle: {
      textShadow: "0 0 24px rgba(247,147,26,0.55), 0 0 6px rgba(255,167,51,0.85)"
    },
    onDone: () => setIntroDone(true)
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      textShadow: "0 0 24px rgba(247,147,26,0.55), 0 0 6px rgba(255,167,51,0.85)"
    }
  }, headline)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontFamily: "var(--font-display)",
      fontSize: 22,
      letterSpacing: "0.18em",
      background: "var(--c-orange)",
      color: "var(--c-black)",
      display: "inline-block",
      padding: "8px 20px",
      transform: "rotate(-1deg)",
      boxShadow: "0 0 24px rgba(247,147,26,0.25)"
    }
  }, PARTY.edition, " \xB7 ", PARTY.date)), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      zIndex: 2,
      padding: "70px 32px 50px",
      display: "grid",
      gridTemplateColumns: "minmax(0, 760px)",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: -10,
      left: "50%",
      transform: "translateX(-50%)",
      width: 220,
      height: 220,
      zIndex: 3,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: -30,
      background: "radial-gradient(circle at 50% 50%, rgba(247,147,26,0.45), rgba(247,147,26,0) 65%)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/sacred-stone.png",
    alt: "",
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      objectFit: "contain",
      filter: "drop-shadow(0 0 36px rgba(247,147,26,0.6)) drop-shadow(0 12px 22px rgba(0,0,0,0.8))",
      animation: "spin-slow 60s linear infinite"
    }
  })), /*#__PURE__*/React.createElement("article", {
    style: {
      position: "relative",
      border: "1px solid rgba(247,147,26,0.4)",
      background: "rgba(0,0,0,0.78)",
      padding: "140px 30px 28px",
      boxShadow: "0 0 32px rgba(247,147,26,0.18), 0 12px 32px rgba(0,0,0,0.6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.24em",
      color: "var(--c-orange)",
      textTransform: "uppercase",
      paddingBottom: 10,
      borderBottom: "1px dashed rgba(247,147,26,0.4)",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", null, "// transmission \xB7 600B \u2192 PRG"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--c-orange)",
      animation: "blink 1.2s steps(1) infinite"
    }
  }), "UNSEALED"), /*#__PURE__*/React.createElement("span", null, PARTY.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(28px, 3.6vw, 44px)",
      lineHeight: 1.05,
      letterSpacing: "0.04em",
      color: "var(--c-white)",
      textTransform: "uppercase",
      textShadow: "0 0 16px rgba(247,147,26,0.4)"
    }
  }, /*#__PURE__*/React.createElement("p", null, "THE SIGNAL TRAVELLED WEST."), /*#__PURE__*/React.createElement("p", null, "From a black volcano,"), /*#__PURE__*/React.createElement("p", null, "across the Atlantic,"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--c-orange)"
    }
  }, "down the Vltava."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12
    }
  }, "It made landfall in Prague.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      fontFamily: "var(--font-serif)",
      fontSize: 17,
      lineHeight: 1.7,
      color: "var(--c-bone)"
    }
  }, /*#__PURE__*/React.createElement("p", null, "On the eleventh of June we open the door at ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--c-orange)"
    }
  }, "Fuchs 2"), " \u2014 an island between two banks, between two worlds, on water that has carried stranger things than us."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14
    }
  }, "Bring the stone. Bring the meme. Bring the friend who still doesn\u2019t get it. We stack. We build. We meme. We repeat. Tonight we add one more verb:", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--c-orange)",
      fontStyle: "normal"
    }
  }, " we dance"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      paddingTop: 16,
      borderTop: "1px dashed rgba(247,147,26,0.4)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.22em",
      color: "var(--c-bone)",
      opacity: 0.75,
      textAlign: "center",
      textTransform: "uppercase"
    }
  }, "OLDER THAN BITCOIN \xB7 HEAVIER THAN YOUR BAGS \xB7 IT REMEMBERS"))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      zIndex: 2,
      padding: "20px 32px 60px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(TermCard, {
    title: "// TICKETS",
    accent: "var(--c-orange)",
    rotate: -1.5,
    glow: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.24em",
      opacity: 0.7,
      textTransform: "uppercase",
      color: "var(--c-bone)"
    }
  }, "\u26A1 LIGHTNING ONLY \xB7 LNBITS.600.WTF"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-display)",
      fontSize: 60,
      letterSpacing: "0.04em",
      lineHeight: 0.9,
      color: "var(--c-white)",
      textTransform: "uppercase",
      textShadow: "0 0 18px rgba(247,147,26,0.35)"
    }
  }, "PAY IN", /*#__PURE__*/React.createElement("br", null), "SATS", /*#__PURE__*/React.createElement("br", null), "SEE YOU", /*#__PURE__*/React.createElement("br", null), "AT FUCHS 2"), /*#__PURE__*/React.createElement("a", {
    href: PARTY.ticketsUrl,
    target: "_blank",
    rel: "noopener",
    className: "cta-button",
    style: {
      marginTop: 22,
      background: "var(--c-orange)",
      color: "var(--c-black)",
      padding: "18px 22px",
      fontSize: 22,
      border: "3px solid var(--c-orange)",
      alignSelf: "stretch",
      animation: "pulse-orange 2.4s var(--ease-pulse) infinite"
    }
  }, /*#__PURE__*/React.createElement(BoltGlyph, {
    size: 20
  }), " ./buy_ticket ", /*#__PURE__*/React.createElement(ArrowGlyph, {
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.22em",
      color: "var(--c-bone)",
      opacity: 0.55,
      textTransform: "uppercase"
    }
  }, "$ exit 0 \u2014 see you at the door")), /*#__PURE__*/React.createElement(TermCard, {
    title: "// VENUE",
    accent: "var(--c-orange)",
    rotate: -2
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 56,
      letterSpacing: "0.04em",
      lineHeight: 0.9,
      textTransform: "uppercase",
      color: "var(--c-white)",
      textShadow: "0 0 18px rgba(247,147,26,0.3)"
    }
  }, "FUCHS 2"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--c-bone)",
      letterSpacing: "0.06em"
    }
  }, "Ostrov \u0160tvanice", /*#__PURE__*/React.createElement("br", null), "Praha 7 \xB7 Hole\u0161ovice"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: "flex",
      gap: 18,
      flexWrap: "wrap",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.22em",
      color: "var(--c-orange)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u25B8 DOORS 20:00"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--c-bone)",
      opacity: 0.75
    }
  }, "\u25B8 UNTIL 03:00")), /*#__PURE__*/React.createElement("pre", {
    style: {
      marginTop: 18,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      lineHeight: 1.3,
      color: "var(--c-orange)",
      opacity: 0.7,
      padding: 12,
      border: "1px dashed rgba(247,147,26,0.35)",
      background: "rgba(247,147,26,0.04)",
      whiteSpace: "pre",
      overflow: "hidden"
    }
  }, `▾ VLTAVA ───────────────
   ░░░ ŠTVANICE ░░░░
   ░░ ▣ FUCHS 2 ░░░░
   ░░░░░░░░░░░░░░░░░
▴ HOLEŠOVICE ──────────`), /*#__PURE__*/React.createElement("a", {
    href: PARTY.venueUrl,
    target: "_blank",
    rel: "noopener",
    style: {
      marginTop: "auto",
      alignSelf: "flex-start",
      fontFamily: "var(--font-display)",
      fontSize: 14,
      letterSpacing: "0.2em",
      color: "var(--c-orange)",
      textDecoration: "none",
      borderBottom: "1px solid rgba(247,147,26,0.5)",
      paddingBottom: 2,
      marginTop: 16
    }
  }, "./open fuchs2.cz \u2197"))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      zIndex: 2,
      background: "rgba(0,0,0,0.78)",
      color: "var(--c-orange)",
      padding: "60px 32px 80px",
      borderTop: "1px solid rgba(247,147,26,0.25)",
      borderBottom: "1px solid rgba(247,147,26,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 24,
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(56px, 10vw, 96px)",
      letterSpacing: "0.06em",
      color: "var(--c-white)",
      textTransform: "uppercase",
      lineHeight: 0.95,
      textShadow: "0 0 22px rgba(247,147,26,0.35)"
    }
  }, "THE ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--c-orange)"
    }
  }, "LINE"), "UP"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.24em",
      color: "var(--c-bone)",
      textTransform: "uppercase"
    }
  }, "// BANDS \xB7 SITES \xB7 DJS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      alignItems: "center"
    }
  }, PARTY.bands.map((b, i) => /*#__PURE__*/React.createElement(ChipLink, {
    key: b.name,
    href: b.href,
    rotate: (i % 2 === 0 ? -1 : 1) * (1 + i % 3),
    size: "lg",
    variant: "solid"
  }, b.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--c-orange)",
      letterSpacing: "0.18em",
      padding: "0 8px",
      transform: "rotate(-2deg)",
      opacity: 0.7
    }
  }, "// SITES"), PARTY.sites.map((b, i) => /*#__PURE__*/React.createElement(ChipLink, {
    key: b.name,
    href: b.href,
    rotate: i % 2 === 0 ? 2 : -2,
    size: "md",
    variant: "outline"
  }, b.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--c-orange)",
      letterSpacing: "0.18em",
      padding: "0 8px",
      transform: "rotate(2deg)",
      opacity: 0.7
    }
  }, "// DJS"), PARTY.djs.map((dj, i) => /*#__PURE__*/React.createElement(ChipLink, {
    key: dj,
    rotate: i % 2 === 0 ? -1.5 : 1.5,
    size: "md",
    variant: "dj"
  }, dj))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      letterSpacing: "0.2em",
      color: "var(--c-bone)",
      textTransform: "uppercase",
      opacity: 0.8
    }
  }, "$ djs --continuous --from 12:30 --to 03:00 \xB7 tap a name \u2192 listen \xB7 come back & stack")), /*#__PURE__*/React.createElement("footer", {
    style: {
      position: "relative",
      zIndex: 2,
      background: "var(--c-black)",
      color: "var(--c-bone)",
      padding: "32px 24px",
      textAlign: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      borderTop: "1px solid rgba(247,147,26,0.2)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-600.png",
    alt: "600",
    style: {
      width: 72,
      height: 72,
      objectFit: "contain",
      marginBottom: 12,
      filter: "drop-shadow(0 0 18px rgba(247,147,26,0.45))"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: PARTY.siteUrl,
    target: "_blank",
    rel: "noopener",
    style: {
      color: "var(--c-orange)"
    }
  }, "600.WTF"), " · ", /*#__PURE__*/React.createElement("a", {
    href: PARTY.venueUrl,
    target: "_blank",
    rel: "noopener",
    style: {
      color: "var(--c-orange)"
    }
  }, "FUCHS2.CZ")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      opacity: 0.6
    }
  }, "WE STACK \xB7 WE BUILD \xB7 WE MEME \xB7 WE REPEAT")));
}

// Terminal card — black panel, orange header label, optional glow
function TermCard({
  title,
  accent = "var(--c-orange)",
  rotate = 0,
  glow = false,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "rgba(0,0,0,0.85)",
      border: `1px solid ${accent}`,
      padding: "22px 22px 22px",
      transform: `rotate(${rotate}deg)`,
      boxShadow: glow ? "0 0 32px rgba(247,147,26,0.25), 0 12px 32px rgba(0,0,0,0.55)" : "0 12px 32px rgba(0,0,0,0.55)",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.24em",
      color: accent,
      textTransform: "uppercase",
      paddingBottom: 8,
      borderBottom: `1px dashed ${accent}`,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: accent,
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: accent,
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: accent,
      opacity: 0.25
    }
  }))), children);
}

// Decorative corner brackets — adds terminal-screen feel
function CornerBrackets() {
  const arm = 24;
  const stroke = "rgba(247,147,26,0.55)";
  const common = {
    position: "absolute",
    width: arm,
    height: arm,
    pointerEvents: "none",
    zIndex: 3
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      ...common,
      top: 8,
      left: 8,
      borderTop: `2px solid ${stroke}`,
      borderLeft: `2px solid ${stroke}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...common,
      top: 8,
      right: 8,
      borderTop: `2px solid ${stroke}`,
      borderRight: `2px solid ${stroke}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...common,
      bottom: 8,
      left: 8,
      borderBottom: `2px solid ${stroke}`,
      borderLeft: `2px solid ${stroke}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...common,
      bottom: 8,
      right: 8,
      borderBottom: `2px solid ${stroke}`,
      borderRight: `2px solid ${stroke}`
    }
  }));
}
function ChipLink({
  children,
  href,
  rotate = 0,
  size = "md",
  variant = "solid"
}) {
  const sizes = {
    sm: {
      fontSize: 16,
      padding: "8px 14px"
    },
    md: {
      fontSize: 22,
      padding: "10px 18px"
    },
    lg: {
      fontSize: 30,
      padding: "12px 22px"
    }
  };
  const variants = {
    solid: {
      background: "var(--c-orange)",
      color: "var(--c-black)",
      border: "3px solid var(--c-orange)",
      boxShadow: "0 0 18px rgba(247,147,26,0.35)"
    },
    outline: {
      background: "rgba(247,147,26,0.06)",
      color: "var(--c-orange)",
      border: "2px solid var(--c-orange)"
    },
    dj: {
      background: "rgba(255,247,236,0.06)",
      color: "var(--c-bone)",
      border: "2px dashed rgba(247,147,26,0.5)"
    }
  };
  const inner = /*#__PURE__*/React.createElement("span", {
    style: {
      ...sizes[size],
      ...variants[variant],
      fontFamily: "var(--font-display)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      transform: `rotate(${rotate}deg)`,
      transition: "transform 120ms var(--ease-standard)",
      cursor: href ? "pointer" : "default"
    }
  }, children, href && /*#__PURE__*/React.createElement(PlayGlyph, {
    size: 14
  }));
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      target: "_blank",
      rel: "noopener",
      style: {
        textDecoration: "none"
      }
    }, inner);
  }
  return inner;
}
window.VariationMemePoster = VariationMemePoster;