"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";

// ─── Constante photos ─────────────────────────────────────────────────────────
type Photo = {
  src: string;
  alt: string;
  lieu: string;
};

type GridCell = {
  col: number;
  row: number;
  w: number;
  h: number;
  photo: Photo;
  driftX: number;
  driftY: number;
  driftDur: number;
  driftDelay: number;
  rotIdle: number;
};

const PHOTOS: Photo[] = [
  { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85", alt: "Réunion de famille", lieu: "Libreville" },
  { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=85", alt: "Fête du clan", lieu: "Lambaréné" },
  { src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=85", alt: "Les anciens", lieu: "Port-Gentil" },
  { src: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=85", alt: "Cérémonie traditionnelle", lieu: "Franceville" },
  { src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=85", alt: "Solidarité familiale", lieu: "Oyem" },
  { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=85", alt: "Les jeunes du clan", lieu: "Libreville" },
  { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=85", alt: "Mariage traditionnel", lieu: "Moanda" },
  { src: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=800&q=85", alt: "Remise de diplôme", lieu: "Libreville" },
  { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=85", alt: "Projet communautaire", lieu: "Tchibanga" },
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=85", alt: "Aide aux vulnérables", lieu: "Port-Gentil" },
  { src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=85", alt: "Célébration", lieu: "Lambaréné" },
  { src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=85", alt: "Repas de famille", lieu: "Makokou" },
];

// ─── Gabarits de grille (patterns qui se répètent) ───────────────────────────
// Chaque cellule : { col, row, w, h } en unités de grille
// On a des patterns de N photos qui couvrent la grille proprement
const GRID_PATTERNS = [
  // Pattern A — 3 photos
  [
    { col: 1, row: 1, w: 2, h: 2 }, // grande gauche
    { col: 3, row: 1, w: 1, h: 1 }, // petite haut-droite
    { col: 3, row: 2, w: 1, h: 1 }, // petite bas-droite
  ],
  // Pattern B — 3 photos
  [
    { col: 1, row: 1, w: 1, h: 1 }, // petite haut-gauche
    { col: 1, row: 2, w: 1, h: 1 }, // petite bas-gauche
    { col: 2, row: 1, w: 2, h: 2 }, // grande droite
  ],
  // Pattern C — 4 photos
  [
    { col: 1, row: 1, w: 1, h: 2 }, // haute verticale gauche
    { col: 2, row: 1, w: 2, h: 1 }, // large haut
    { col: 2, row: 2, w: 1, h: 1 }, // carré centre-bas
    { col: 3, row: 2, w: 1, h: 1 }, // carré droite-bas
  ],
  // Pattern D — 4 photos
  [
    { col: 1, row: 1, w: 2, h: 1 }, // large haut-gauche
    { col: 3, row: 1, w: 1, h: 2 }, // haute verticale droite
    { col: 1, row: 2, w: 1, h: 1 }, // carré bas-gauche
    { col: 2, row: 2, w: 1, h: 1 }, // carré bas-centre
  ],
];

const CELL = 220; // taille de base d'une cellule en px
const GAP  = 10;

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

/* ── Seed pseudo-random déterministe ── */
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/* ── Calcule les blocs à afficher depuis la liste de photos ── */
function buildBlocks(photos: Photo[]): GridCell[][] {
  const rng = seededRandom(42);
  const blocks: GridCell[][] = [];
  let photoIdx = 0;
  let patternIdx = 0;

  while (photoIdx < photos.length) {
    const pattern = GRID_PATTERNS[patternIdx % GRID_PATTERNS.length];
    patternIdx++;
    const needed = pattern.length;
    if (photoIdx + needed > photos.length) break;

    // Drift aléatoire léger par photo (pour l'animation idle)
    const group = pattern.map((cell, i) => ({
      ...cell,
      photo: photos[photoIdx + i],
      driftX:  (rng() - 0.5) * 6,
      driftY:  (rng() - 0.5) * 6,
      driftDur: 4 + rng() * 3,
      driftDelay: rng() * 2,
      rotIdle: (rng() - 0.5) * 1.5,
    }));
    blocks.push(group);
    photoIdx += needed;
  }
  return blocks;
}

/* ── Carte photo individuelle ── */
function PhotoCard({ cell, globalDelay }: { cell: GridCell; globalDelay: number }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView(0.1);
  const animName = `drift-${Math.abs(Math.round(cell.driftX * 100))}-${Math.abs(Math.round(cell.driftY * 100))}`;

  const w = cell.w * CELL + (cell.w - 1) * GAP;
  const h = cell.h * CELL + (cell.h - 1) * GAP;

  return (
    <>
      <style>{`
        @keyframes ${animName} {
          0%   { transform: translate(0px, 0px) rotate(0deg); }
          33%  { transform: translate(${cell.driftX * 0.6}px, ${cell.driftY}px) rotate(${cell.rotIdle * 0.5}deg); }
          66%  { transform: translate(${cell.driftX}px, ${cell.driftY * 0.4}px) rotate(${cell.rotIdle}deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
      `}</style>

      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          gridColumn: `${cell.col} / span ${cell.w}`,
          gridRow:    `${cell.row} / span ${cell.h}`,
          borderRadius: "14px",
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
          width: "100%",
          height: "100%",
          minHeight: `${h}px`,

          // Apparition au scroll
          opacity: inView ? 1 : 0,
          transform: inView && !hovered ? "translateY(0) scale(1)" : !inView ? "translateY(30px) scale(0.96)" : undefined,
          transition: `
            opacity 0.75s ${globalDelay}s cubic-bezier(0.4,0,0.2,1),
            transform 0.75s ${globalDelay}s cubic-bezier(0.34,1.1,0.64,1),
            box-shadow 0.45s ease
          `,

          // Drift idle (seulement quand visible et pas hovered)
          animation: inView && !hovered
            ? `${animName} ${cell.driftDur}s ${cell.driftDelay}s ease-in-out infinite`
            : "none",

          boxShadow: hovered
            ? "0 28px 60px rgba(0,0,0,0.65), 0 0 0 2px rgba(var(--bn-green-rgb),0.45)"
            : "0 8px 24px rgba(0,0,0,0.45)",

          zIndex: hovered ? 10 : 1,
        }}
      >
        {/* Image */}
        <img
          src={cell.photo.src}
          alt={cell.photo.alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transform: hovered ? "scale(1.10)" : "scale(1.02)",
            transition: "transform 0.75s cubic-bezier(0.4,0,0.2,1)",
            willChange: "transform",
          }}
        />

        {/* Overlay permanent subtil */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(5,2,1,0.70) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
          transition: "opacity 0.4s ease",
          opacity: hovered ? 1 : 0.5,
        }} />

        {/* Cadre doré au hover */}
        <div style={{
          position: "absolute",
          inset: 0,
          borderRadius: "14px",
          border: "1.5px solid rgba(var(--bn-green-rgb),0)",
          transition: "border-color 0.4s ease",
          ...(hovered ? { borderColor: "rgba(var(--bn-green-rgb),0.55)" } : {}),
          pointerEvents: "none",
        }} />

        {/* Contenu texte au hover */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "18px 18px 16px",
          transform: hovered ? "translateY(0)" : "translateY(12px)",
          opacity: hovered ? 1 : 0,
          transition: "transform 0.45s cubic-bezier(0.34,1.1,0.64,1), opacity 0.4s ease",
        }}>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: cell.w >= 2 ? "1.05rem" : "0.88rem",
            fontWeight: 700,
            color: "#ffffff",
            margin: "0 0 4px 0",
            lineHeight: 1.2,
            textShadow: "0 2px 8px rgba(0,0,0,0.8)",
          }}>
            {cell.photo.alt}
          </p>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.70rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--bn-green)",
          }}>
            <span style={{ width: "14px", height: "1px", background: "var(--bn-green)", display: "inline-block" }} />
            {cell.photo.lieu}
          </span>
        </div>

        {/* Icône loupe */}
        <div style={{
          position: "absolute",
          top: "14px",
          right: "14px",
          width: "34px",
          height: "34px",
          borderRadius: "50%",
          background: "rgba(10,5,2,0.60)",
          backdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1) rotate(0deg)" : "scale(0.6) rotate(-20deg)",
          transition: "opacity 0.35s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",
          border: "1px solid rgba(var(--bn-green-rgb),0.55)",
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="6" cy="6" r="4.5" stroke="var(--bn-white)" strokeWidth="1.3"/>
            <line x1="9.5" y1="9.5" x2="13" y2="13" stroke="var(--bn-white)" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </>
  );
}

/* ── Groupe (un pattern complet) ── */
function PatternGroup({ group, groupIndex }: { group: GridCell[]; groupIndex: number }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(3, 1fr)`,
        gridTemplateRows:    `repeat(2, ${CELL}px)`,
        gap: `${GAP}px`,
        width: "100%",
      }}
    >
      {group.map((cell, i) => (
        <PhotoCard
          key={i}
          cell={cell}
          globalDelay={groupIndex * 0.15 + i * 0.07}
        />
      ))}
    </div>
  );
}

/* ── Header section ── */
function SectionHeader() {
  const [ref, inView] = useInView(0.3);
  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        marginBottom: "64px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.1,0.64,1)",
      }}
    >
      <span style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "14px",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "0.70rem",
        fontWeight: 600,
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color: "var(--bn-green)",
        marginBottom: "22px",
      }}>
        <span style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, transparent, var(--bn-green))", display: "block" }} />
        Nos Mémoires
        <span style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, var(--bn-green), transparent)", display: "block" }} />
      </span>

      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2rem, 5vw, 3.6rem)",
        fontWeight: 900,
        color: "#ffffff",
        margin: "0 0 20px 0",
        lineHeight: 1.08,
      }}>
        Les instants qui<br />
        <em style={{ color: "var(--bn-green)", fontStyle: "italic" }}>nous racontent</em>
      </h2>

      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(0.98rem, 1.4vw, 1.15rem)",
        color: "rgba(255,255,255,0.78)",
        maxWidth: "500px",
        margin: "0 auto",
        lineHeight: 1.8,
      }}>
        Chaque photo est une page de notre histoire collective. Des sourires, des larmes,
        des fêtes — la vie du clan capturée pour l'éternité.
      </p>
    </div>
  );
}

/* ── CTA ── */
function CtaGalerie() {
  const [ref, inView] = useInView(0.2);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "60px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.8s 0.2s ease, transform 0.8s 0.2s cubic-bezier(0.34,1.1,0.64,1)",
      }}
    >
      <Link
        href="/nos-albums"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          overflow: "hidden",
          display: "inline-flex",
          alignItems: "center",
          gap: "14px",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "0.92rem",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          padding: "16px 40px",
          borderRadius: "6px",
          border: "1.5px solid rgba(var(--bn-green-rgb),0.70)",
          color: hovered ? "#0B0F0C" : "rgba(255,255,255,0.95)",
          background: "transparent",
          textDecoration: "none",
          transition: "color 0.35s ease",
        }}
      >
        <span style={{
          position: "absolute",
          inset: 0,
          background: "var(--bn-green)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.42s cubic-bezier(0.4,0,0.2,1)",
          borderRadius: "4px",
        }} />
        <span style={{ position: "relative", zIndex: 1 }}>Voir tous nos albums</span>
        <span style={{
          position: "relative",
          zIndex: 1,
          transform: hovered ? "translateX(6px)" : "translateX(0)",
          transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        }}>→</span>
      </Link>
    </div>
  );
}

/* ── Composant principal ── */
export default function SectionGalerie() {
  const blocks = useMemo<GridCell[][]>(() => buildBlocks(PHOTOS), []);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 700);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

        .galerie-root {
          position: relative;
          background: #060402;
          padding: 110px 24px 100px;
          overflow: hidden;
        }

        .galerie-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 40% at 50% 0%,   rgba(var(--bn-green-rgb),0.05) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 50% 100%, rgba(var(--bn-green-rgb),0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .galerie-inner {
          position: relative;
          max-width: 1160px;
          margin: 0 auto;
          z-index: 1;
        }

        .galerie-groups {
          display: flex;
          flex-direction: column;
          gap: ${GAP * 2}px;
        }

        .galerie-mobile-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        @media (max-width: 700px) {
          .galerie-root { padding: 80px 12px; }
          .galerie-groups { gap: 8px; }
          .galerie-mobile-grid { gap: 10px; }
        }

        @media (max-width: 480px) {
          .galerie-mobile-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="galerie-root">
        <div className="galerie-inner">
          <SectionHeader />

          {isMobile ? (
            <div className="galerie-mobile-grid">
              {PHOTOS.map((p, i) => (
                <div
                  key={p.src + i}
                  style={{
                    borderRadius: "14px",
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
                    minHeight: i % 5 === 0 ? "260px" : "200px",
                  }}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(5,2,1,0.78) 0%, rgba(0,0,0,0.10) 55%, transparent 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      padding: "14px 14px 12px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        margin: "0 0 4px 0",
                        lineHeight: 1.2,
                        textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                      }}
                    >
                      {p.alt}
                    </p>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "0.68rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--bn-green)",
                      }}
                    >
                      <span
                        style={{
                          width: "14px",
                          height: "1px",
                          background: "var(--bn-green)",
                          display: "inline-block",
                        }}
                      />
                      {p.lieu}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="galerie-groups">
              {blocks.map((group, gi) => (
                <PatternGroup key={gi} group={group} groupIndex={gi} />
              ))}
            </div>
          )}

          <CtaGalerie />
        </div>
      </section>
    </>
  );
}