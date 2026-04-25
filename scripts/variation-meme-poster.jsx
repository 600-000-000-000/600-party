/* global React, PARTY, MatrixRain, SacredStack, FallingHeadline, Marquee, PlayGlyph, ArrowGlyph, BoltGlyph */

// ============================================================
// VARIATION 3 — CYPHERPUNK POSTER
// Black/soot backdrop, matrix rain through it, faded orange grid,
// terminal-styled cards, sacred stone hero, chip-cloud lineup.
// Letters still fall in — they land glowing on black.
// ============================================================

function VariationMemePoster({ headline, introOn, introSpeed, matrixOn }) {
  const [introDone, setIntroDone] = React.useState(!introOn);

  React.useEffect(() => {
    setIntroDone(!introOn);
  }, [introOn, headline, introSpeed]);

  return (
    <div
      className="party-reset party-artboard"
      style={{
        width: "100%",
        background: "var(--c-soot)",
        color: "var(--c-bone)",
        minHeight: "100%",
        position: "relative",
        backgroundImage:
        "repeating-linear-gradient(0deg, rgba(247,147,26,0.07) 0 1px, transparent 1px 56px), repeating-linear-gradient(90deg, rgba(247,147,26,0.07) 0 1px, transparent 1px 56px)"
      }}>
      
      {matrixOn && <MatrixRain enabled={matrixOn} density={1} fontSize={18} />}

      {/* corner brackets */}
      <CornerBrackets />

      {/* TERMINAL CHROME */}
      <div
        style={{
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
        }}>
        
        <span>600B://party.exec — node PRG-01</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--c-orange)",
              animation: "blink 1.2s steps(1) infinite"
            }} />
          
          BROADCASTING · {PARTY.date}
        </span>
        <span>04:20 GMT · GM</span>
      </div>

      {/* TOP MARQUEE */}
      <div
        style={{
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
        }}>
        
        <Marquee
          items={[
          "GM",
          "STACK",
          "BUILD",
          "MEME",
          "REPEAT",
          "₿",
          PARTY.edition,
          "₿",
          "11 JUNE 2026",
          "FUCHS 2 · PRG"]
          }
          speed={28} />
        
      </div>

      {/* HERO ----------------------------------------- */}
      <header
        style={{
          position: "relative",
          zIndex: 2,
          padding: "60px 32px 40px",
          textAlign: "center"
        }}>
        
        <div
          style={{
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
          }}>
          
          ★ NO RUGS ★
        </div>
        <div
          style={{
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
          }}>
          
          ★ JUST HUGS ★
        </div>

        {/* sacred number — printed-stamp look on black */}
        <div
          style={{
            display: "inline-block",
            border: "3px solid var(--c-orange)",
            padding: "10px 22px",
            transform: "rotate(-2deg)",
            background: "rgba(247,147,26,0.08)",
            boxShadow: "0 0 32px rgba(247,147,26,0.25)"
          }}>
          
          <SacredStack
            size={1}
            color="var(--c-orange)"
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              lineHeight: 0.85,
              textShadow: "0 0 14px rgba(247,147,26,0.5)"
            }} />
          
        </div>

        {/* falling headline — glows on black */}
        <div
          style={{
            marginTop: 28,
            fontFamily: "var(--font-display)",
            fontSize: "clamp(96px, 18vw, 220px)",
            lineHeight: 0.86,
            letterSpacing: "0.02em",
            color: "var(--c-white)",
            textTransform: "uppercase"
          }}>
          
          {introOn ?
          <FallingHeadline
            text={headline}
            perChar={70}
            baseDelay={120}
            speed={introSpeed}
            charStyle={{
              textShadow:
              "0 0 24px rgba(247,147,26,0.55), 0 0 6px rgba(255,167,51,0.85)"
            }}
            onDone={() => setIntroDone(true)} /> :


          <span
            style={{
              textShadow:
              "0 0 24px rgba(247,147,26,0.55), 0 0 6px rgba(255,167,51,0.85)"
            }}>
            
              {headline}
            </span>
          }
        </div>

        <div
          style={{
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
          }}>
          
          {PARTY.edition} · {PARTY.date}
        </div>
      </header>

      {/* OPENING TRANSMISSION — lore box with the sacred stone hovering above it */}
      <section
        style={{
          position: "relative",
          zIndex: 2,
          padding: "70px 32px 50px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 760px)",
          justifyContent: "center"
        }}>
        
        {/* free-floating stone — no card, no caption, sits half-over the box */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 220,
            height: 220,
            zIndex: 3,
            pointerEvents: "none"
          }}>
          
          <span
            style={{
              position: "absolute",
              inset: -30,
              background:
              "radial-gradient(circle at 50% 50%, rgba(247,147,26,0.45), rgba(247,147,26,0) 65%)"
            }} />
          
          <img
            src="assets/sacred-stone.png"
            alt=""
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter:
              "drop-shadow(0 0 36px rgba(247,147,26,0.6)) drop-shadow(0 12px 22px rgba(0,0,0,0.8))",
              animation: "spin-slow 60s linear infinite"
            }} />
          
        </div>

        <article
          style={{
            position: "relative",
            border: "1px solid rgba(247,147,26,0.4)",
            background: "rgba(0,0,0,0.78)",
            padding: "140px 30px 28px",
            boxShadow: "0 0 32px rgba(247,147,26,0.18), 0 12px 32px rgba(0,0,0,0.6)"
          }}>
          
          {/* header strip */}
          <div
            style={{
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
            }}>
            
            <span>// transmission · 600B → PRG</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--c-orange)",
                  animation: "blink 1.2s steps(1) infinite"
                }} />
              
              UNSEALED
            </span>
            <span>{PARTY.date}</span>
          </div>

          {/* opening lines — single-line incantation cadence */}
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.6vw, 44px)",
              lineHeight: 1.05,
              letterSpacing: "0.04em",
              color: "var(--c-white)",
              textTransform: "uppercase",
              textShadow: "0 0 16px rgba(247,147,26,0.4)"
            }}>
            
            <p>THE SIGNAL TRAVELLED WEST.</p>
            <p>From a black volcano,</p>
            <p>across the Atlantic,</p>
            <p style={{ color: "var(--c-orange)" }}>down the Vltava.</p>
            <p style={{ marginTop: 12 }}>It made landfall in Prague.</p>
          </div>

          {/* body — Georgia, sincere-with-a-grin */}
          <div
            style={{
              marginTop: 22,
              fontFamily: "var(--font-serif)",
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--c-bone)"
            }}>
            
            <p>
              On the eleventh of June we open the door at <strong style={{ color: "var(--c-orange)" }}>Fuchs 2</strong> — an island
              between two banks, between two worlds, on water that has carried stranger things than us.
            </p>
            <p style={{ marginTop: 14 }}>
              Bring the stone. Bring the meme. Bring the friend who still doesn&rsquo;t get it.
              We stack. We build. We meme. We repeat. Tonight we add one more verb:
              <em style={{ color: "var(--c-orange)", fontStyle: "normal" }}> we dance</em>.
            </p>
          </div>

          {/* mantra footer */}
          <div
            style={{
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
            }}>
            
            OLDER THAN BITCOIN · HEAVIER THAN YOUR BAGS · IT REMEMBERS
          </div>
        </article>
      </section>

      {/* COLLAGE BAND — two terminal cards (tickets + venue) */}
      <section
        style={{
          position: "relative",
          zIndex: 2,
          padding: "20px 32px 60px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          alignItems: "stretch"
        }}>
        
        {/* CTA card */}
        <TermCard
          title="// TICKETS"
          accent="var(--c-orange)"
          rotate={-1.5}
          glow>
          
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.24em",
              opacity: 0.7,
              textTransform: "uppercase",
              color: "var(--c-bone)"
            }}>
            
            ⚡ LIGHTNING ONLY · LNBITS.600.WTF
          </div>
          <div
            style={{
              marginTop: 14,
              fontFamily: "var(--font-display)",
              fontSize: 60,
              letterSpacing: "0.04em",
              lineHeight: 0.9,
              color: "var(--c-white)",
              textTransform: "uppercase",
              textShadow: "0 0 18px rgba(247,147,26,0.35)"
            }}>
            
            PAY IN<br />SATS<br />SEE YOU<br />AT FUCHS 2
          </div>
          <a
            href={PARTY.ticketsUrl}
            target="_blank"
            rel="noopener"
            className="cta-button"
            style={{
              marginTop: 22,
              background: "var(--c-orange)",
              color: "var(--c-black)",
              padding: "18px 22px",
              fontSize: 22,
              border: "3px solid var(--c-orange)",
              alignSelf: "stretch",
              animation: "pulse-orange 2.4s var(--ease-pulse) infinite"
            }}>
            
            <BoltGlyph size={20} /> ./buy_ticket <ArrowGlyph size={16} />
          </a>
          <div
            style={{
              marginTop: 14,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.22em",
              color: "var(--c-bone)",
              opacity: 0.55,
              textTransform: "uppercase"
            }}>
            
            $ exit 0 — see you at the door
          </div>
        </TermCard>

        {/* Venue card */}
        <TermCard
          title="// VENUE"
          accent="var(--c-orange)"
          rotate={-2}>
          
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 56,
              letterSpacing: "0.04em",
              lineHeight: 0.9,
              textTransform: "uppercase",
              color: "var(--c-white)",
              textShadow: "0 0 18px rgba(247,147,26,0.3)"
            }}>
            
            FUCHS 2
          </div>
          <div
            style={{
              marginTop: 10,
              fontFamily: "var(--font-body)",
              fontSize: 14,
              lineHeight: 1.5,
              color: "var(--c-bone)",
              letterSpacing: "0.06em"
            }}>
            
            Ostrov Štvanice<br />Praha 7 · Holešovice
          </div>

          {/* doors / curfew strip */}
          <div
            style={{
              marginTop: 14,
              display: "flex",
              gap: 18,
              flexWrap: "wrap",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.22em",
              color: "var(--c-orange)",
              textTransform: "uppercase"
            }}>
            
            <span>▸ DOORS 20:00</span>
            <span style={{ color: "var(--c-bone)", opacity: 0.75 }}>▸ UNTIL 03:00</span>
          </div>

          {/* mini ascii map */}
          <pre
            style={{
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
            }}>
            
{`▾ VLTAVA ───────────────
   ░░░ ŠTVANICE ░░░░
   ░░ ▣ FUCHS 2 ░░░░
   ░░░░░░░░░░░░░░░░░
▴ HOLEŠOVICE ──────────`}
          </pre>

          <a
            href={PARTY.venueUrl}
            target="_blank"
            rel="noopener"
            style={{
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
            }}>
            
            ./open fuchs2.cz ↗
          </a>
        </TermCard>
      </section>

      {/* LINEUP — CHIP CLOUD on darker block */}
      <section
        style={{
          position: "relative",
          zIndex: 2,
          background: "rgba(0,0,0,0.78)",
          color: "var(--c-orange)",
          padding: "60px 32px 80px",
          borderTop: "1px solid rgba(247,147,26,0.25)",
          borderBottom: "1px solid rgba(247,147,26,0.25)"
        }}>
        
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 24,
            flexWrap: "wrap",
            gap: 12
          }}>
          
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 10vw, 96px)",
              letterSpacing: "0.06em",
              color: "var(--c-white)",
              textTransform: "uppercase",
              lineHeight: 0.95,
              textShadow: "0 0 22px rgba(247,147,26,0.35)"
            }}>
            
            THE <span style={{ color: "var(--c-orange)" }}>LINE</span>UP
          </h2>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.24em",
              color: "var(--c-bone)",
              textTransform: "uppercase"
            }}>
            
            // BANDS · SITES · DJS
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center"
          }}>
          
          {PARTY.bands.map((b, i) =>
          <ChipLink
            key={b.name}
            href={b.href}
            rotate={(i % 2 === 0 ? -1 : 1) * (1 + i % 3)}
            size="lg"
            variant="solid">
            
              {b.name}
            </ChipLink>
          )}
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              color: "var(--c-orange)",
              letterSpacing: "0.18em",
              padding: "0 8px",
              transform: "rotate(-2deg)",
              opacity: 0.7
            }}>
            
            // SITES
          </span>
          {PARTY.sites.map((b, i) =>
          <ChipLink
            key={b.name}
            href={b.href}
            rotate={i % 2 === 0 ? 2 : -2}
            size="md"
            variant="outline">
            
              {b.name}
            </ChipLink>
          )}
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              color: "var(--c-orange)",
              letterSpacing: "0.18em",
              padding: "0 8px",
              transform: "rotate(2deg)",
              opacity: 0.7
            }}>
            
            // DJS
          </span>
          {PARTY.djs.map((dj, i) =>
          <ChipLink
            key={dj}
            rotate={i % 2 === 0 ? -1.5 : 1.5}
            size="md"
            variant="dj">
            
              {dj}
            </ChipLink>
          )}
        </div>

        <div
          style={{
            marginTop: 32,
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            letterSpacing: "0.2em",
            color: "var(--c-bone)",
            textTransform: "uppercase",
            opacity: 0.8
          }}>
          
          $ djs --continuous --from 12:30 --to 03:00 · tap a name → listen · come back & stack
        </div>
      </section>

      {/* FOOTER — keep dark */}
      <footer
        style={{
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
        }}>
        
        <img
          src="assets/logo-600.png"
          alt="600"
          style={{
            width: 72,
            height: 72,
            objectFit: "contain",
            marginBottom: 12,
            filter: "drop-shadow(0 0 18px rgba(247,147,26,0.45))"
          }} />
        
        <div>
          <a href={PARTY.siteUrl} target="_blank" rel="noopener" style={{ color: "var(--c-orange)" }}>
            600.WTF
          </a>
          {" · "}
          <a href={PARTY.venueUrl} target="_blank" rel="noopener" style={{ color: "var(--c-orange)" }}>
            FUCHS2.CZ
          </a>
        </div>
        <div style={{ marginTop: 10, opacity: 0.6 }}>
          WE STACK · WE BUILD · WE MEME · WE REPEAT
        </div>
      </footer>
    </div>);

}

// Terminal card — black panel, orange header label, optional glow
function TermCard({ title, accent = "var(--c-orange)", rotate = 0, glow = false, children }) {
  return (
    <div
      style={{
        position: "relative",
        background: "rgba(0,0,0,0.85)",
        border: `1px solid ${accent}`,
        padding: "22px 22px 22px",
        transform: `rotate(${rotate}deg)`,
        boxShadow: glow ?
        "0 0 32px rgba(247,147,26,0.25), 0 12px 32px rgba(0,0,0,0.55)" :
        "0 12px 32px rgba(0,0,0,0.55)",
        display: "flex",
        flexDirection: "column",
        gap: 10
      }}>
      
      {/* header bar */}
      <div
        style={{
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
        }}>
        
        <span>{title}</span>
        <span style={{ display: "inline-flex", gap: 4 }}>
          <span style={{ width: 6, height: 6, background: accent, opacity: 0.9 }} />
          <span style={{ width: 6, height: 6, background: accent, opacity: 0.55 }} />
          <span style={{ width: 6, height: 6, background: accent, opacity: 0.25 }} />
        </span>
      </div>
      {children}
    </div>);

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
  return (
    <>
      <span style={{ ...common, top: 8, left: 8, borderTop: `2px solid ${stroke}`, borderLeft: `2px solid ${stroke}` }} />
      <span style={{ ...common, top: 8, right: 8, borderTop: `2px solid ${stroke}`, borderRight: `2px solid ${stroke}` }} />
      <span style={{ ...common, bottom: 8, left: 8, borderBottom: `2px solid ${stroke}`, borderLeft: `2px solid ${stroke}` }} />
      <span style={{ ...common, bottom: 8, right: 8, borderBottom: `2px solid ${stroke}`, borderRight: `2px solid ${stroke}` }} />
    </>);

}

function ChipLink({ children, href, rotate = 0, size = "md", variant = "solid" }) {
  const sizes = {
    sm: { fontSize: 16, padding: "8px 14px" },
    md: { fontSize: 22, padding: "10px 18px" },
    lg: { fontSize: 30, padding: "12px 22px" }
  };
  const variants = {
    solid: { background: "var(--c-orange)", color: "var(--c-black)", border: "3px solid var(--c-orange)", boxShadow: "0 0 18px rgba(247,147,26,0.35)" },
    outline: { background: "rgba(247,147,26,0.06)", color: "var(--c-orange)", border: "2px solid var(--c-orange)" },
    dj: { background: "rgba(255,247,236,0.06)", color: "var(--c-bone)", border: "2px dashed rgba(247,147,26,0.5)" }
  };
  const inner =
  <span
    style={{
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
    }}>
    
      {children}
      {href && <PlayGlyph size={14} />}
    </span>;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
        {inner}
      </a>);

  }
  return inner;
}

window.VariationMemePoster = VariationMemePoster;