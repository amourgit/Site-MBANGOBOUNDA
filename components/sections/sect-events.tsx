"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";

// ─── Constante événements ─────────────────────────────────────────────────────
type Evenement = {
  id: number;
  type: "image" | "video";
  src: string;
  categorie: string;
  titre: string;
  date: string;
  lieu: string;
  description: string;
  taille: "grande" | "moyenne" | "petite";
};

type LayoutEvent = Evenement & {
  spanCols: number;
  spanRows: number;
};

const EVENEMENTS: Evenement[] = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85",
    categorie: "Mariage",
    titre: "Mariage de Rodrigue & Cynthia",
    date: "14 Février 2025",
    lieu: "Libreville",
    description: "Une union bénie sous le signe de l'amour et des traditions ancestrales. Le clan s'est rassemblé en force pour célébrer cette journée inoubliable.",
    taille: "grande", // grande | moyenne | petite
  },
  {
    id: 2,
    type: "video",
    src: "https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4",
    categorie: "Fête Traditionnelle",
    titre: "Grande Fête du Clan 2024",
    date: "31 Décembre 2024",
    lieu: "Port-Gentil",
    description: "Notre rassemblement annuel de fin d'année. Danses, chants et retrouvailles pour clore l'année en famille.",
    taille: "grande",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=85",
    categorie: "Remise de Prix",
    titre: "Cérémonie des Lauréats",
    date: "22 Juin 2024",
    lieu: "Franceville",
    description: "Honorer nos diplômés et les encourager sur la voie de l'excellence.",
    taille: "moyenne",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=85",
    categorie: "Solidarité",
    titre: "Caravane Médicale",
    date: "10 Mars 2025",
    lieu: "Oyem",
    description: "Soins gratuits pour les membres vulnérables et leurs familles.",
    taille: "moyenne",
  },
  {
    id: 5,
    type: "video",
    src: "https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4",
    categorie: "Projet",
    titre: "Pose de Première Pierre",
    date: "5 Janvier 2025",
    lieu: "Moanda",
    description: "Inauguration des travaux de notre premier bien immobilier collectif. Un pas historique pour le clan.",
    taille: "petite",
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=85",
    categorie: "Mémoire",
    titre: "Cérémonie de Deuil — Grand-Père Nguyen",
    date: "18 Août 2024",
    lieu: "Lambaréné",
    description: "En sa mémoire, nous nous sommes réunis pour honorer sa vie et perpétuer son héritage.",
    taille: "petite",
  },
  {
    id: 7,
    type: "image",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85",
    categorie: "Assemblée",
    titre: "Conseil Annuel du Clan",
    date: "2 Novembre 2024",
    lieu: "Libreville",
    description: "Bilan de l'année, élection des représentants et définition des grandes orientations pour 2025.",
    taille: "moyenne",
  },
  {
    id: 8,
    type: "video",
    src: "https://videos.pexels.com/video-files/3044706/3044706-uhd_2560_1440_25fps.mp4",
    categorie: "Baptême",
    titre: "Baptême des Petits du Clan",
    date: "20 Avril 2025",
    lieu: "Tchibanga",
    description: "Accueil des nouveaux membres dans la grande famille. Une journée de joie et de bénédictions.",
    taille: "petite",
  },
];

// Couleurs par catégorie
const CAT_COLORS: Record<string, string> = {
  "Mariage":            "var(--bn-green)",
  "Fête Traditionnelle": "var(--bn-green)",
  "Remise de Prix":     "var(--bn-green)",
  "Solidarité":         "var(--bn-green)",
  "Projet":             "var(--bn-green)",
  "Mémoire":            "var(--bn-green)",
  "Assemblée":          "var(--bn-green)",
  "Baptême":            "var(--bn-green)",
};

// ─── Hook IntersectionObserver ────────────────────────────────────────────────
function useInView(threshold = 0.15) {
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

// ─── Média (image ou vidéo autoplay) ─────────────────────────────────────────
function EventMedia({ evt, hovered }: { evt: Evenement; hovered: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Jouer quand hovered OU visible dans viewport
    if (hovered) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }, [hovered]);

  // Autoplay au scroll (via IntersectionObserver sur la vidéo)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { v.play().catch(() => {}); setPlaying(true); }
        else                  { v.pause(); setPlaying(false); }
      },
      { threshold: 0.4 }
    );
    obs.observe(v);
    return () => obs.disconnect();
  }, []);

  if (evt.type === "video") {
    return (
      <>
        <video
          ref={videoRef}
          src={evt.src}
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.06)" : "scale(1.01)",
            transition: "transform 0.9s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
        {/* Icône "vidéo" */}
        <div style={{
          position: "absolute",
          top: "14px",
          right: "14px",
          zIndex: 5,
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          background: "rgba(10,5,2,0.60)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.20)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: playing ? 0.7 : 1,
          transition: "opacity 0.3s",
        }}>
          {playing ? (
            // Pause icon
            <svg width="10" height="12" viewBox="0 0 10 12" fill="white">
              <rect x="0" y="0" width="3" height="12" rx="1"/>
              <rect x="7" y="0" width="3" height="12" rx="1"/>
            </svg>
          ) : (
            // Play icon
            <svg width="10" height="12" viewBox="0 0 10 12" fill="white">
              <path d="M0 0 L10 6 L0 12 Z"/>
            </svg>
          )}
        </div>
      </>
    );
  }

  return (
    <img
      src={evt.src}
      alt={evt.titre}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        transform: hovered ? "scale(1.07)" : "scale(1.01)",
        transition: "transform 0.9s cubic-bezier(0.4,0,0.2,1)",
      }}
    />
  );
}

// ─── Card événement ───────────────────────────────────────────────────────────
function EventCard({
  evt,
  index,
  spanCols = 1,
  spanRows = 1,
}: {
  evt: LayoutEvent;
  index: number;
  spanCols?: number;
  spanRows?: number;
}) {
  const [ref, inView] = useInView(0.12);
  const [hovered, setHovered] = useState(false);
  const delay = (index % 4) * 0.10;
  const accent = CAT_COLORS[evt.categorie] || "var(--bn-green)";

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: `span ${spanCols}`,
        gridRow:    `span ${spanRows}`,
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        minHeight: spanRows > 1 ? "520px" : "280px",

        // Apparition
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
        transition: `
          opacity   0.75s ${delay}s cubic-bezier(0.4,0,0.2,1),
          transform 0.75s ${delay}s cubic-bezier(0.34,1.1,0.64,1),
          box-shadow 0.45s ease
        `,

        boxShadow: hovered
          ? `0 32px 72px rgba(0,0,0,0.65), 0 0 0 1.5px ${accent}55`
          : "0 8px 28px rgba(0,0,0,0.50)",
      }}
    >
      {/* ── Médias ── */}
      <EventMedia evt={evt} hovered={hovered} />

      {/* ── Overlay dégradé bas → haut ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(
          to top,
          rgba(4, 2, 1, 0.95) 0%,
          rgba(4, 2, 1, 0.75) 30%,
          rgba(4, 2, 1, 0.20) 60%,
          transparent 100%
        )`,
        transition: "opacity 0.4s ease",
        opacity: hovered ? 0.95 : 1,
        zIndex: 2,
        pointerEvents: "none",
      }} />

      {/* ── Bord lumineux accent au hover ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        borderRadius: "16px",
        border: `1.5px solid ${accent}`,
        opacity: hovered ? 0.45 : 0,
        transition: "opacity 0.4s ease",
        zIndex: 4,
        pointerEvents: "none",
      }} />

      {/* ── Contenu texte bas ── */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "20px 22px 22px",
        zIndex: 3,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.45s cubic-bezier(0.34,1.1,0.64,1)",
      }}>
        {/* Catégorie */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "8px",
        }}>
          <span style={{
            width: "6px", height: "6px",
            borderRadius: "50%",
            background: accent,
            display: "inline-block",
            flexShrink: 0,
            boxShadow: `0 0 6px ${accent}`,
          }} />
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: accent,
          }}>
            {evt.categorie}
          </span>
        </div>

        {/* Titre */}
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: spanCols > 1 ? "clamp(1.15rem, 2vw, 1.50rem)" : "1.05rem",
          fontWeight: 700,
          color: "#ffffff",
          margin: "0 0 8px 0",
          lineHeight: 1.22,
          textShadow: "0 2px 10px rgba(0,0,0,0.7)",
        }}>
          {evt.titre}
        </h3>

        {/* Date + lieu */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: hovered ? "12px" : "0",
          transition: "margin 0.35s ease",
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.78)",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}>
            📅 {evt.date}
          </span>
          <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.25)", flexShrink: 0 }} />
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.78)",
          }}>
            📍 {evt.lieu}
          </span>
        </div>

        {/* Description — visible au hover */}
        <div style={{
          maxHeight: hovered ? "80px" : "0",
          overflow: "hidden",
          transition: "max-height 0.45s cubic-bezier(0.4,0,0.2,1)",
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.88rem",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.68)",
            margin: "0 0 0 0",
            paddingTop: "8px",
            borderTop: `1px solid rgba(255,255,255,0.08)`,
          }}>
            {evt.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Disposition grille intelligente ─────────────────────────────────────────
// Attribue les colonnes/lignes selon la taille déclarée
function buildLayout(events: Evenement[]): LayoutEvent[] {
  return events.map((evt) => {
    if (evt.taille === "grande")  return { ...evt, spanCols: 2, spanRows: 2 };
    if (evt.taille === "moyenne") return { ...evt, spanCols: 2, spanRows: 1 };
    return                              { ...evt, spanCols: 1, spanRows: 1 };
  });
}

// ─── Header section ───────────────────────────────────────────────────────────
function SectionHeader() {
  const [ref, inView] = useInView(0.2);
  return (
    <div ref={ref} style={{
      textAlign: "center",
      marginBottom: "60px",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(36px)",
      transition: "opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.1,0.64,1)",
    }}>
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
        La Vie du Clan
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
        Nos moments<br />
        <em style={{ color: "var(--bn-green)", fontStyle: "italic" }}>qui nous rassemblent</em>
      </h2>

      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(0.98rem, 1.4vw, 1.12rem)",
        color: "rgba(255,255,255,0.78)",
        maxWidth: "500px",
        margin: "0 auto",
        lineHeight: 1.8,
      }}>
        Mariages, fêtes, cérémonies, projets… la vie de notre clan se raconte
        à travers ces instants précieux que nous vivons ensemble.
      </p>
    </div>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CtaEvenements() {
  const [ref, inView] = useInView(0.2);
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={ref} style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "56px",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: "opacity 0.8s 0.2s ease, transform 0.8s 0.2s cubic-bezier(0.34,1.1,0.64,1)",
    }}>
      <Link
        href="/nos-evenements"
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
          position: "absolute", inset: 0,
          background: "var(--bn-green)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.42s cubic-bezier(0.4,0,0.2,1)",
          borderRadius: "4px",
        }} />
        <span style={{ position: "relative", zIndex: 1 }}>Voir tous nos événements</span>
        <span style={{
          position: "relative", zIndex: 1,
          transform: hovered ? "translateX(6px)" : "translateX(0)",
          transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        }}>→</span>
      </Link>
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────
export default function SectionEvenements() {
  const layout = useMemo<LayoutEvent[]>(() => buildLayout(EVENEMENTS), []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

        .evenements-root {
          position: relative;
          padding: 110px 24px 100px;
          overflow: hidden;
        }

        .evenements-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 40% at 20% 30%, rgba(var(--bn-green-rgb),0.05) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 70%, rgba(var(--bn-green-rgb),0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .evenements-inner {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          z-index: 1;
        }

        /* ── Grille principale ── */
        .events-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 280px;
          gap: 14px;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .events-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 260px;
          }
        }

        @media (max-width: 700px) {
          .events-grid {
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: 240px;
            gap: 10px;
          }
          /* Sur mobile, les grandes cards prennent 2 colonnes max */
          .events-grid > *[style*="span 2"] {
            grid-column: span 2 !important;
          }
          .evenements-root {
            padding: 80px 14px;
          }
        }

        @media (max-width: 480px) {
          .events-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 280px;
          }
          .events-grid > * {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>

      <section className="evenements-root">
        <div className="evenements-inner">
          <SectionHeader />

          <div className="events-grid">
            {layout.map((evt, i) => (
              <EventCard
                key={evt.id}
                evt={evt}
                index={i}
                spanCols={evt.spanCols}
                spanRows={evt.spanRows}
              />
            ))}
          </div>

          <CtaEvenements />
        </div>
      </section>
    </>
  );
}