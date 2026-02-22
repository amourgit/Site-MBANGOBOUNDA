"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Periode = {
  debut: string;
  fin: string;
  image: string;
  titre: string;
  description: string;
};

type Align = "left" | "right";

const periodes: Periode[] = [
  {
    debut: "1920",
    fin: "1955",
    image: "famille/photoRacine2.png",
    titre: "Les Temps des Fondateurs",
    description:
      "Au cœur de la savane, nos ancêtres posèrent les premières pierres de ce qui allait devenir notre grande famille. Portés par la foi et la terre, ils bâtirent des alliances solides, transmirent des rites sacrés et gravèrent dans la mémoire collective les valeurs qui nous animent encore aujourd'hui.",
  },
  {
    debut: "1956",
    fin: "1985",
    image: "famille/photoRacine1.png",
    titre: "L'Ère de l'Expansion",
    description:
      "Les enfants des fondateurs s'élancèrent vers de nouveaux horizons — les villes, les études, les opportunités — sans jamais couper le cordon avec la terre nourricière. Le clan s'agrandit, les unions se tissèrent entre familles alliées, et notre identité prit une nouvelle dimension, plus riche, plus diverse.",
  },
  {
    debut: "1986",
    fin: "Aujourd'hui",
    image: "famille/photo16.png",
    titre: "La Génération du Renouveau",
    description:
      "Forts de notre héritage, nous entrons dans une ère nouvelle. Les jeunes du clan reprennent le flambeau avec fierté : préserver nos traditions tout en embrassant le monde moderne. Solidaires et connectés, nous bâtissons ensemble l'avenir de notre famille pour les générations à venir.",
  },
];

function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

function PeriodeCard({ periode, index }: { periode: Periode; index: number }) {
  const isLeft = index % 2 === 0;
  const [ref, inView] = useInView(0.2);
  const delay = 0.1;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 700);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <div
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: "14px",
          position: "relative",
          paddingLeft: "0",
          paddingRight: "0",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(28px)",
          transition: `opacity 0.85s ${delay}s cubic-bezier(0.4,0,0.2,1), transform 0.85s ${delay}s cubic-bezier(0.34,1.1,0.64,1)`,
        }}
      >
        <CardContent periode={periode} align="left" inView={inView} delay={delay} />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 80px 1fr",
        alignItems: "center",
        minHeight: "420px",
        position: "relative",
        marginBottom: "0",
      }}
    >
      {/* ── Colonne gauche ── */}
      <div
        style={{
          gridColumn: "1",
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "52px",
          opacity: inView ? 1 : 0,
          transform: inView
            ? "translateX(0)"
            : isLeft ? "translateX(-60px)" : "translateX(60px)",
          transition: `opacity 0.85s ${delay}s cubic-bezier(0.4,0,0.2,1), transform 0.85s ${delay}s cubic-bezier(0.34,1.1,0.64,1)`,
        }}
      >
        {isLeft ? <CardContent periode={periode} align="right" inView={inView} delay={delay} /> : <DateBadge periode={periode} align="right" />}
      </div>

      {/* ── Nœud central ── */}
      <div
        style={{
          gridColumn: "2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            background: inView ? "linear-gradient(135deg, var(--bn-green), var(--bn-white))" : "rgba(var(--bn-green-rgb),0.30)",
            border: "3px solid #1a0f05",
            boxShadow: inView ? "0 0 0 5px rgba(var(--bn-green-rgb),0.20), 0 0 24px rgba(var(--bn-green-rgb),0.35)" : "none",
            transition: `all 0.6s ${delay + 0.2}s ease`,
            flexShrink: 0,
          }}
        />
      </div>

      {/* ── Colonne droite ── */}
      <div
        style={{
          gridColumn: "3",
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "52px",
          opacity: inView ? 1 : 0,
          transform: inView
            ? "translateX(0)"
            : isLeft ? "translateX(60px)" : "translateX(-60px)",
          transition: `opacity 0.85s ${delay + 0.1}s cubic-bezier(0.4,0,0.2,1), transform 0.85s ${delay + 0.1}s cubic-bezier(0.34,1.1,0.64,1)`,
        }}
      >
        {!isLeft ? <CardContent periode={periode} align="left" inView={inView} delay={delay} /> : <DateBadge periode={periode} align="left" />}
      </div>
    </div>
  );
}

function DateBadge({ periode, align }: { periode: Periode; align: Align }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: align === "right" ? "flex-end" : "flex-start",
      gap: "4px",
    }}>
      <span style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
        fontWeight: 900,
        lineHeight: 1,
        background: "linear-gradient(135deg, var(--bn-green) 30%, var(--bn-white) 70%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        letterSpacing: "-0.02em",
      }}>
        {periode.debut}
      </span>
      <span style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "0.75rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.78)",
      }}>
        — {periode.fin}
      </span>
    </div>
  );
}

function CardContent({
  periode,
  align,
  inView,
  delay,
}: {
  periode: Periode;
  align: Align;
  inView: boolean;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        maxWidth: "460px",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        boxShadow: hovered
          ? "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(var(--bn-green-rgb),0.30)"
          : "0 16px 48px rgba(0,0,0,0.40), 0 0 0 1px rgba(var(--bn-green-rgb),0.12)",
        transform: hovered ? "translateY(-6px) scale(1.012)" : "translateY(0) scale(1)",
        transition: "box-shadow 0.45s ease, transform 0.45s cubic-bezier(0.34,1.1,0.64,1)",
        cursor: "default",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
        <img
          src={periode.image}
          alt={periode.titre}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.07)" : "scale(1.0)",
            transition: "transform 0.8s cubic-bezier(0.4,0,0.2,1)",
            display: "block",
          }}
        />
        {/* Overlay image */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(5,2,1,0.70) 100%)",
        }} />

        {/* Date flottante sur l'image */}
        <div style={{
          position: "absolute",
          top: "16px",
          ...(align === "right" ? { right: "16px" } : { left: "16px" }),
          background: "rgba(10,5,2,0.65)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(var(--bn-green-rgb),0.30)",
          borderRadius: "8px",
          padding: "6px 14px",
          display: "flex",
          alignItems: "baseline",
          gap: "6px",
        }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "var(--bn-green)",
          }}>{periode.debut}</span>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.72rem",
            color: "rgba(255,255,255,0.78)",
            letterSpacing: "0.12em",
          }}>— {periode.fin}</span>
        </div>
      </div>

      {/* Texte */}
      <div style={{
        background: "linear-gradient(135deg, #0f0804 0%, #1a0f05 100%)",
        padding: "24px 28px 28px",
        borderTop: "1px solid rgba(var(--bn-green-rgb),0.18)",
      }}>
        {/* Trait décoratif */}
        <div style={{
          width: "32px",
          height: "2px",
          background: "linear-gradient(90deg, var(--bn-green), transparent)",
          borderRadius: "2px",
          marginBottom: "12px",
          transform: hovered ? "scaleX(1.6)" : "scaleX(1)",
          transformOrigin: "left",
          transition: "transform 0.4s ease",
        }} />

        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.22rem",
          fontWeight: 700,
          color: "#ffffff",
          margin: "0 0 12px 0",
          lineHeight: 1.25,
        }}>
          {periode.titre}
        </h3>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.02rem",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.70)",
          margin: 0,
        }}>
          {periode.description}
        </p>
      </div>
    </div>
  );
}

function SectionHeader() {
  const [ref, inView] = useInView(0.3);
  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        marginBottom: "80px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.1,0.64,1)",
      }}
    >
      <span style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "0.72rem",
        fontWeight: 600,
        letterSpacing: "0.30em",
        textTransform: "uppercase",
        color: "var(--bn-green)",
        marginBottom: "20px",
      }}>
        <span style={{ display: "block", width: "36px", height: "1px", background: "var(--bn-green)" }} />
        Notre Histoire
        <span style={{ display: "block", width: "36px", height: "1px", background: "var(--bn-green)" }} />
      </span>

      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
        fontWeight: 900,
        lineHeight: 1.08,
        color: "#ffffff",
        margin: "0 0 24px 0",
        textShadow: "0 4px 32px rgba(0,0,0,0.5)",
      }}>
        Des racines profondes,<br />
        <em style={{ color: "var(--bn-green)", fontStyle: "italic" }}>un avenir lumineux</em>
      </h2>

      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(1rem, 1.5vw, 1.18rem)",
        color: "rgba(255,255,255,0.78)",
        maxWidth: "540px",
        margin: "0 auto",
        lineHeight: 1.75,
      }}>
        Chaque génération a posé une pierre. Voici l'histoire de ceux qui nous ont précédés
        et de ceux qui, aujourd'hui, portent fièrement leur héritage.
      </p>
    </div>
  );
}

function CtaButton() {
  const [ref, inView] = useInView(0.3);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "80px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s 0.2s ease, transform 0.8s 0.2s cubic-bezier(0.34,1.1,0.64,1)",
      }}
    >
      <Link
        href="/notre-histoire"
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
          cursor: "pointer",
          transition: "color 0.35s ease",
        }}
      >
        {/* Remplissage hover */}
        <span style={{
          position: "absolute",
          inset: 0,
          background: "var(--bn-green)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.42s cubic-bezier(0.4,0,0.2,1)",
          borderRadius: "4px",
        }} />
        <span style={{ position: "relative", zIndex: 1 }}>Lire notre histoire complète</span>
        <span style={{
          position: "relative",
          zIndex: 1,
          display: "inline-block",
          transform: hovered ? "translateX(6px)" : "translateX(0)",
          transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        }}>→</span>
      </Link>
    </div>
  );
}

export default function SectionHistoire() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;500;600&family=Lato:wght@300;400;700&display=swap');

        .histoire-root {
          position: relative;
          padding: 120px 24px 100px;
          overflow: hidden;
        }

        /* Texture de fond subtile */
        .histoire-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(ellipse 80% 60% at 20% 20%, rgba(var(--bn-green-rgb),0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 80%, rgba(92,58,30,0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        .histoire-inner {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── Ligne verticale centrale ── */
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          transform: translateX(-50%);
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(var(--bn-green-rgb),0.40) 8%,
            rgba(var(--bn-green-rgb),0.40) 92%,
            transparent 100%
          );
          pointer-events: none;
        }

        /* Lueur animée sur la ligne */
        .timeline-line::after {
          content: '';
          position: absolute;
          left: -2px;
          width: 5px;
          height: 80px;
          background: linear-gradient(to bottom, transparent, rgba(var(--bn-green-rgb),0.75), transparent);
          border-radius: 3px;
          animation: lineGlow 4s ease-in-out infinite;
        }
        @keyframes lineGlow {
          0%   { top: 0%; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: calc(100% - 80px); opacity: 0; }
        }

        /* ── Responsive : colonne unique sous 700px ── */
        @media (max-width: 700px) {
          .histoire-root { padding: 80px 16px 80px; }
          .timeline-line { display: none; }
        }
      `}</style>

      <section className="histoire-root">
        <div className="histoire-inner">
          <SectionHeader />

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Ligne centrale */}
            <div className="timeline-line" />

            {/* Périodes */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {periodes.map((p, i) => (
                <PeriodeCard key={i} periode={p} index={i} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <CtaButton />
        </div>
      </section>
    </>
  );
}