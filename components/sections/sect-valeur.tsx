"use client";

import { useEffect, useRef, useState } from "react";

type Valeur = {
  id: string;
  mot: string;
  chiffre: string;
  symbole: string;
  couleur: string;
  couleurSombre: string;
  icon: JSX.Element;
  titre: string;
  description: string;
  citation: string;
};

const valeurs: Valeur[] = [
  {
    id: "unite",
    mot: "Unité",
    chiffre: "01",
    symbole: "⬡",
    couleur: "var(--bn-green)",
    couleurSombre: "rgba(var(--bn-green-rgb),0.08)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="18" r="7" stroke="var(--bn-green)" strokeWidth="1.5"/>
        <circle cx="14" cy="36" r="7" stroke="var(--bn-green)" strokeWidth="1.5"/>
        <circle cx="38" cy="36" r="7" stroke="var(--bn-green)" strokeWidth="1.5"/>
        <line x1="26" y1="25" x2="20" y2="30" stroke="var(--bn-green)" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="26" y1="25" x2="32" y2="30" stroke="var(--bn-green)" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="14" y1="29" x2="38" y2="29" stroke="var(--bn-green)" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 3"/>
      </svg>
    ),
    titre: "Ensemble, nous sommes invincibles",
    description:
      "Notre force réside dans notre cohésion. Quand l'un tombe, les autres le relèvent. Quand l'un triomphe, tous célèbrent. L'unité n'est pas un mot, c'est notre mode de vie, transmis de génération en génération comme le bien le plus précieux.",
    citation: "« Seul on va plus vite, ensemble on va plus loin. »",
  },
  {
    id: "amour",
    mot: "Amour",
    chiffre: "02",
    symbole: "◇",
    couleur: "var(--bn-white)",
    couleurSombre: "rgba(255,255,255,0.06)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <path
          d="M26 42 C26 42 8 30 8 19 C8 13.5 12.5 9 18 9 C21.5 9 24.5 10.8 26 13.5 C27.5 10.8 30.5 9 34 9 C39.5 9 44 13.5 44 19 C44 30 26 42 26 42Z"
          stroke="var(--bn-white)" strokeWidth="1.5" fill="none"
        />
        <path
          d="M20 22 C20 19.5 21.8 18 24 18"
          stroke="var(--bn-white)" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"
        />
      </svg>
    ),
    titre: "L'amour comme fondement",
    description:
      "Chaque décision, chaque geste, chaque sacrifice au sein de notre famille est guidé par l'amour. Amour des enfants, respect des aînés, tendresse entre époux, sollicitude pour les vulnérables — c'est le ciment invisible qui tient notre édifice debout.",
    citation: "« L'amour en famille est la première école de l'humanité. »",
  },
  {
    id: "prosperite",
    mot: "Prospérité",
    chiffre: "03",
    symbole: "✦",
    couleur: "var(--bn-green)",
    couleurSombre: "rgba(var(--bn-green-rgb),0.08)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <path d="M26 8 L26 44" stroke="var(--bn-green)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 16 L26 8 L34 16" stroke="var(--bn-green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 28 L26 18 L40 28" stroke="var(--bn-green)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
        <path d="M8 40 L26 30 L44 40" stroke="var(--bn-green)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.45"/>
        <circle cx="26" cy="8" r="2.5" fill="var(--bn-green)"/>
      </svg>
    ),
    titre: "Bâtir un héritage durable",
    description:
      "La prospérité que nous cherchons n'est pas que matérielle. Elle est humaine, spirituelle, collective. Nous accompagnons chaque membre porteur de projets, nous investissons dans l'éducation, la santé et les terres — pour que nos enfants héritent d'un monde meilleur.",
    citation: "« Un arbre bien enraciné ne craint pas la tempête. »",
  },
];

function useInView(threshold = 0.2) {
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

/* ── Compteur animé ── */
function Counter({ target, inView }: { target: number; inView: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const duration = 1200;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return val;
}

/* ── Carte valeur ── */
function ValeurCard({ valeur, index }: { valeur: Valeur; index: number }) {
  const [ref, inView] = useInView(0.2);
  const [hovered, setHovered] = useState(false);
  const delay = index * 0.18;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        padding: "48px 40px 44px",
        background: hovered
          ? `linear-gradient(145deg, #141008 0%, #1e1408 100%)`
          : `linear-gradient(145deg, #0f0a05 0%, #171008 100%)`,
        border: `1px solid ${hovered ? "rgba(var(--bn-green-rgb),0.55)" : "rgba(var(--bn-green-rgb),0.18)"}`,
        boxShadow: hovered
          ? `0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px ${valeur.couleur}33, inset 0 1px 0 ${valeur.couleur}22`
          : "0 8px 32px rgba(0,0,0,0.35)",
        transform: inView
          ? hovered ? "translateY(-8px)" : "translateY(0)"
          : "translateY(50px)",
        opacity: inView ? 1 : 0,
        transition: `
          opacity 0.8s ${delay}s cubic-bezier(0.4,0,0.2,1),
          transform 0.8s ${delay}s cubic-bezier(0.34,1.1,0.64,1),
          box-shadow 0.45s ease,
          border-color 0.45s ease,
          background 0.45s ease
        `,
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        flex: 1,
        minWidth: 0,
      }}
    >
      {/* Fond lumineux en hover */}
      <div style={{
        position: "absolute",
        top: "-60px",
        right: "-60px",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${valeur.couleur}18 0%, transparent 70%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.6s ease",
        pointerEvents: "none",
      }} />

      {/* Numéro en filigrane */}
      <span style={{
        position: "absolute",
        top: "20px",
        right: "28px",
        fontFamily: "'Playfair Display', serif",
        fontSize: "5rem",
        fontWeight: 900,
        color: valeur.couleur,
        opacity: 0.055,
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
        letterSpacing: "-0.04em",
      }}>
        {valeur.chiffre}
      </span>

      {/* Icône */}
      <div style={{
        width: "72px",
        height: "72px",
        borderRadius: "16px",
        background: valeur.couleurSombre,
        border: `1px solid ${valeur.couleur}30`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "28px",
        transform: hovered ? "rotate(-4deg) scale(1.08)" : "rotate(0deg) scale(1)",
        transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",
        flexShrink: 0,
      }}>
        {valeur.icon}
      </div>

      {/* Mot-clé */}
      <span style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "0.68rem",
        fontWeight: 600,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: valeur.couleur,
        marginBottom: "10px",
        display: "block",
      }}>
        {valeur.mot}
      </span>

      {/* Titre */}
      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.35rem",
        fontWeight: 900,
        color: "#ffffff",
        margin: "0 0 14px 0",
        lineHeight: 1.18,
      }}>
        {valeur.titre}
      </h3>

      {/* Trait */}
      <div style={{
        width: hovered ? "56px" : "32px",
        height: "1.5px",
        background: `linear-gradient(90deg, ${valeur.couleur}, transparent)`,
        borderRadius: "2px",
        marginBottom: "20px",
        transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
      }} />

      {/* Description */}
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.05rem",
        lineHeight: 1.8,
        color: "rgba(255,255,255,0.78)",
        margin: "0 0 28px 0",
        flex: 1,
      }}>
        {valeur.description}
      </p>

      {/* Citation */}
      <div style={{
        borderLeft: `2px solid ${valeur.couleur}60`,
        paddingLeft: "16px",
        marginTop: "auto",
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "0.92rem",
          fontStyle: "italic",
          color: `${valeur.couleur}BB`,
          margin: 0,
          lineHeight: 1.6,
        }}>
          {valeur.citation}
        </p>
      </div>
    </div>
  );
}

/* ── Devise centrale animée ── */
function Devise() {
  const [ref, inView] = useInView(0.3);
  const mots = ["Unité", "Amour", "Prospérité"];
  const couleurs = ["var(--bn-green)", "var(--bn-white)", "var(--bn-green)"];

  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        marginBottom: "80px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 1s ease, transform 1s cubic-bezier(0.34,1.1,0.64,1)",
      }}
    >
      {/* Étiquette */}
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
        marginBottom: "24px",
      }}>
        <span style={{ display: "block", width: "40px", height: "1px", background: "linear-gradient(90deg, transparent, var(--bn-green))" }} />
        Nos Valeurs
        <span style={{ display: "block", width: "40px", height: "1px", background: "linear-gradient(90deg, var(--bn-green), transparent)" }} />
      </span>

      {/* Titre principal */}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2rem, 5vw, 3.8rem)",
        fontWeight: 900,
        lineHeight: 1.08,
        color: "#ffffff",
        margin: "0 0 32px 0",
      }}>
        Ce qui nous unit,<br />
        <em style={{ color: "var(--bn-green)", fontStyle: "italic" }}>ce qui nous définit</em>
      </h2>

      {/* Devise en pilules */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(var(--bn-green-rgb),0.22)",
        borderRadius: "50px",
        padding: "6px 8px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}>
        {mots.map((mot, i) => (
          <span key={mot} style={{ display: "inline-flex", alignItems: "center" }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              fontWeight: 700,
              color: couleurs[i],
              padding: "8px 20px",
              borderRadius: "50px",
              letterSpacing: "0.08em",
              transition: "background 0.3s",
            }}>
              {mot}
            </span>
            {i < mots.length - 1 && (
              <span style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "rgba(var(--bn-green-rgb),0.55)",
                display: "inline-block",
              }} />
            )}
          </span>
        ))}
      </div>

      {/* Sous-titre */}
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(0.98rem, 1.4vw, 1.15rem)",
        color: "rgba(255,255,255,0.78)",
        maxWidth: "560px",
        margin: "28px auto 0",
        lineHeight: 1.8,
      }}>
        Trois mots. Une âme. La boussole qui oriente chacun de nos actes,
        chacun de nos choix, depuis la nuit des temps jusqu'à aujourd'hui.
      </p>
    </div>
  );
}

/* ── Bandeau décoratif bas ── */
function BottomBandeau() {
  const [ref, inView] = useInView(0.2);
  const stats = [
    { val: 3, suffix: "+", label: "Générations", couleur: "var(--bn-green)" },
    { val: 120, suffix: "+", label: "Membres actifs", couleur: "var(--bn-green)" },
    { val: 60, suffix: " ans", label: "D'histoire commune", couleur: "var(--bn-green)" },
    { val: 12, suffix: "", label: "Localités représentées", couleur: "var(--bn-green)" },
  ];

  return (
    <div
      ref={ref}
      style={{
        marginTop: "80px",
        borderRadius: "20px",
        background: "linear-gradient(135deg, #0f0a05 0%, #1a1008 50%, #0f0a05 100%)",
        border: "1px solid rgba(var(--bn-green-rgb),0.20)",
        padding: "52px 40px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.9s 0.1s ease, transform 0.9s 0.1s cubic-bezier(0.34,1.1,0.64,1)",
      }}
    >
      {/* Décor arrière-plan */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(var(--bn-green-rgb),0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {stats.map((s, i) => (
        <div key={i} style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900,
            color: s.couleur,
            lineHeight: 1,
            marginBottom: "8px",
          }}>
            <Counter target={s.val} inView={inView} />{s.suffix}
          </div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.82rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.78)",
          }}>
            {s.label}
          </div>
          {/* Trait sous stat */}
          <div style={{
            width: "24px",
            height: "1px",
            background: s.couleur,
            opacity: 0.5,
            margin: "10px auto 0",
            borderRadius: "2px",
          }} />
        </div>
      ))}
    </div>
  );
}

/* ── Composant principal ── */
export default function SectionValeurs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;500;600&family=Lato:wght@300;400;700&display=swap');

        .valeurs-root {
          position: relative;
          background: #080502;
          padding: 120px 24px 100px;
          overflow: hidden;
        }

        /* Lignes décoratives en fond */
        .valeurs-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(ellipse 90% 50% at 10% 50%, rgba(var(--bn-green-rgb),0.04) 0%, transparent 55%),
            radial-gradient(ellipse 60% 80% at 90% 20%, rgba(var(--bn-green-rgb),0.03) 0%, transparent 55%),
            radial-gradient(ellipse 70% 50% at 50% 90%, rgba(var(--bn-green-rgb),0.03) 0%, transparent 55%);
          pointer-events: none;
        }

        /* Grille de points en filigrane */
        .valeurs-root::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(var(--bn-green-rgb),0.08) 1px, transparent 1px);
          background-size: 36px 36px;
          opacity: 0.4;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%);
        }

        .valeurs-inner {
          position: relative;
          max-width: 1160px;
          margin: 0 auto;
          z-index: 1;
        }

        .valeurs-grid {
          display: flex;
          gap: 24px;
          align-items: stretch;
        }

        @media (max-width: 900px) {
          .valeurs-grid {
            flex-direction: column;
          }
          .valeurs-root { padding: 80px 16px; }
        }
      `}</style>

      <section className="valeurs-root">
        <div className="valeurs-inner">
          <Devise />

          {/* Grille des 3 valeurs */}
          <div className="valeurs-grid">
            {valeurs.map((v, i) => (
              <ValeurCard key={v.id} valeur={v} index={i} />
            ))}
          </div>

          {/* Stats */}
          <BottomBandeau />
        </div>
      </section>
    </>
  );
}