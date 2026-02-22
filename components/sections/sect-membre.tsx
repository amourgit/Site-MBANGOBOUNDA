"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";

// ─── Constante membres ────────────────────────────────────────────────────────
type Membre = {
  id: number;
  nom: string;
  role: string;
  profession: string;
  photo: string;
  ville: string;
  bio: string;
};

type Position = {
  baseX: number;
  baseY: number;
  rot: number;
  scale: number;
  zBase: number;
};

const MEMBRES = [
  { id: 1,  nom: "YOUKAT Blanche",  role: "Tante du Gaz",        profession: "Aucun",             photo: "famille/photo1.png", ville: "Libreville",  bio: "Patriarche du clan, Jean-Baptiste veille sur l'unité de la famille depuis plus de 30 ans avec sagesse et autorité bienveillante." },
  { id: 2,  nom: "YOUKAT Lucie",    role: "Mere",profession: "Entrepreneur",            photo: "famille/photo22.png", ville: "Libreville",  bio: "Dépositaire de la mémoire collective, elle documente nos rites et s'assure que nos enfants grandissent enracinés dans leur culture." },
  { id: 3,  nom: "YOUKAT Brejnev",     role: "Frere",               profession: "Expert-Comptable",      photo: "famille/photo2.png", ville: "Port-Gentil", bio: "Rigueur et transparence. Pierre gère les finances du clan avec intégrité, garantissant la bonne santé de nos projets communs." },
  { id: 4,  nom: "Arald MULDINARD",         role: "Pere",  profession: "Retraité",               photo: "famille/photo13.png", ville: "Franceville", bio: "Au service des plus vulnérables, Élodie coordonne l'aide aux veuves, personnes âgées et enfants en difficulté au sein du clan." },
  { id: 5,  nom: "Samuel NZILA",           role: "Frere",     profession: "Ingénieur Reseau Informatique",       photo: "famille/photo24.png", ville: "Oyem",        bio: "Bâtisseur visionnaire, Samuel pilote les projets immobiliers et fonciers qui constituent notre patrimoine familial." },
  { id: 6,  nom: "Christelle Ella",       role: "Secrétaire Générale",     profession: "Juriste",               photo: "famille/photo15.png", ville: "Libreville",  bio: "Organisée et rigoureuse, Christelle veille au bon fonctionnement administratif et juridique de la communauté familiale." },
  { id: 7,  nom: "Hervé Nzamba",          role: "Porte-Parole",            profession: "Journaliste",           photo: "famille/photo16.png", ville: "Lambaréné",   bio: "Voix du clan, Hervé assure la communication interne et externe, et préserve l'image de notre famille auprès du monde." },
  { id: 8,  nom: "Nadège Bouanga",        role: "Responsable Jeunesse",    profession: "Enseignante",           photo: "famille/photo17.png", ville: "Moanda",      bio: "Passionnée d'éducation, Nadège encadre les jeunes membres du clan et les prépare à prendre la relève avec fierté." },
  { id: 9,  nom: "Aurélien Nkoghe",       role: "Conseiller Économique",   profession: "Entrepreneur",          photo: "famille/photo18.png", ville: "Libreville",  bio: "Entrepreneur accompli, Aurélien guide les porteurs de projets et connecte le clan aux opportunités économiques du pays." },
];

// ─── Seed pseudo-random ───────────────────────────────────────────────────────
function seededRand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// ─── Générer les positions "sur la table" ─────────────────────────────────────
function generatePositions(count: number): Position[] {
  const rng = seededRand(137);
  const cols = 4;
  const rows = Math.ceil(count / cols);
  const positions: Position[] = [];

  for (let i = 0; i < count; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    // Base en %
    const baseX = (col / cols) * 100;
    const baseY = (row / rows) * 100;
    // Offset aléatoire
    const offX  = (rng() - 0.5) * 14;
    const offY  = (rng() - 0.5) * 14;
    const rot   = (rng() - 0.5) * 16;
    const scale = 0.92 + rng() * 0.12;
    const zBase = Math.floor(rng() * 10) + 1;

    positions.push({ baseX: baseX + offX, baseY: baseY + offY, rot, scale, zBase });
  }
  return positions;
}

function useInView(threshold = 0.1) {
  const ref  = useRef<HTMLDivElement | null>(null);
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

function MembreGridCard({
  membre,
  isSelected,
  onSelect,
}: {
  membre: Membre;
  isSelected: boolean;
  onSelect: (id: number | null) => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(isSelected ? null : membre.id)}
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        background: "linear-gradient(145deg, #0f0a05 0%, #171008 100%)",
        border: `1px solid ${isSelected ? "rgba(var(--bn-green-rgb),0.55)" : "rgba(var(--bn-green-rgb),0.22)"}`,
        boxShadow: hovered || isSelected
          ? "0 22px 60px rgba(0,0,0,0.70), 0 0 0 1px rgba(var(--bn-green-rgb),0.22)"
          : "0 10px 28px rgba(0,0,0,0.55)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
        cursor: "pointer",
        minWidth: 0,
      }}
    >
      <div style={{ position: "relative", height: "170px", overflow: "hidden" }}>
        <img
          src={membre.photo}
          alt={membre.nom}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            transform: hovered ? "scale(1.06)" : "scale(1.02)",
            transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
            display: "block",
          }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(10,5,2,0.90) 100%)",
        }} />
        <div style={{ position: "absolute", left: 12, right: 12, bottom: 12, textAlign: "left" }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.62rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--bn-green)",
            marginBottom: "6px",
          }}>
            {membre.role}
          </div>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.98rem",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: "3px",
          }}>
            {membre.nom}
          </div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.82)",
            fontStyle: "italic",
          }}>
            {membre.profession}
          </div>
        </div>
      </div>

      <div style={{ padding: "12px 14px 14px" }}>
        <span style={{
          fontSize: "0.68rem",
          color: "rgba(255,255,255,0.78)",
          letterSpacing: "0.10em",
          fontFamily: "'Cormorant Garamond', serif",
          textTransform: "uppercase",
        }}>
          📍 {membre.ville}
        </span>
      </div>
    </div>
  );
}

// ─── Carte membre ─────────────────────────────────────────────────────────────
function MembreCard({
  membre,
  pos,
  index,
  isSelected,
  onSelect,
  anySelected,
}: {
  membre: Membre;
  pos: Position;
  index: number;
  isSelected: boolean;
  anySelected: boolean;
  onSelect: (id: number | null) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView(0.05);
  const delay = (index % 6) * 0.08;

  const rot = isSelected ? 0 : hovered ? pos.rot * 0.3 : pos.rot;
  const sc  = isSelected ? 1.0 : hovered ? 1.05 : pos.scale;
  const zi  = isSelected ? 100 : hovered ? 50 : anySelected ? Math.max(pos.zBase - 5, 1) : pos.zBase;

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left:   `${pos.baseX}%`,
        top:    `${pos.baseY}%`,
        width:  "200px",
        transform: inView
          ? `translate(-50%, -50%) rotate(${rot}deg) scale(${sc})`
          : `translate(-50%, -50%) rotate(${pos.rot}deg) scale(0.7)`,
        opacity: inView ? (anySelected && !isSelected ? 0.35 : 1) : 0,
        zIndex: zi,
        transition: `
          transform 0.55s ${isSelected ? "0s" : `${delay}s`} cubic-bezier(0.34,1.1,0.64,1),
          opacity   0.5s  ${delay}s ease,
          z-index   0s
        `,
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(isSelected ? null : membre.id)}
    >
      {/* Ombre portée façon papier */}
      <div style={{
        position: "absolute",
        inset: 0,
        borderRadius: "4px",
        boxShadow: isSelected
          ? "0 40px 100px rgba(0,0,0,0.80), 0 0 0 2px rgba(var(--bn-green-rgb),0.60)"
          : hovered
          ? "0 20px 50px rgba(0,0,0,0.70), 0 0 0 1.5px rgba(var(--bn-green-rgb),0.35)"
          : "4px 8px 24px rgba(0,0,0,0.60), 2px 3px 8px rgba(0,0,0,0.40)",
        transition: "box-shadow 0.45s ease",
      }} />

      {/* Carte elle-même */}
      <div style={{
        position: "relative",
        borderRadius: "4px",
        overflow: "hidden",
        background: "#0f0a05",
        border: `1px solid ${isSelected ? "rgba(var(--bn-green-rgb),0.55)" : "rgba(var(--bn-green-rgb),0.20)"}`,
        transition: "border-color 0.4s ease",
      }}>
        {/* Bande couleur en haut */}
        <div style={{ height: "4px", background: "linear-gradient(90deg, transparent, var(--bn-green), var(--bn-white), var(--bn-green), transparent)" }} />

        {/* Photo */}
        <div style={{ position: "relative", height: "160px", overflow: "hidden" }}>
          <img
            src={membre.photo}
            alt={membre.nom}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
              transform: hovered || isSelected ? "scale(1.08)" : "scale(1.0)",
              transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(10,5,2,0.90) 100%)",
          }} />
          {/* Pastille role */}
          <div style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            right: "10px",
            textAlign: "center",
          }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.62rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--bn-green)",
              background: "rgba(10,5,2,0.75)",
              backdropFilter: "blur(8px)",
              padding: "3px 8px",
              borderRadius: "20px",
              border: "1px solid rgba(var(--bn-green-rgb),0.30)",
              display: "inline-block",
            }}>
              {membre.role}
            </span>
          </div>
        </div>

        {/* Infos */}
        <div style={{ padding: "14px 14px 16px" }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.88rem",
            fontWeight: 700,
            color: "#ffffff",
            margin: "0 0 4px 0",
            lineHeight: 1.2,
          }}>
            {membre.nom}
          </h3>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.82)",
            margin: "0 0 8px 0",
            fontStyle: "italic",
          }}>
            {membre.profession}
          </p>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}>
            <span style={{ fontSize: "0.60rem", color: "rgba(255,255,255,0.72)", letterSpacing: "0.1em", fontFamily: "'Cormorant Garamond', serif", textTransform: "uppercase" }}>
              📍 {membre.ville}
            </span>
          </div>
        </div>
      </div>

      {/* Épingle décorative */}
      <div style={{
        position: "absolute",
        top: "-10px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        background: isSelected
          ? "radial-gradient(circle at 35% 35%, var(--bn-white), var(--bn-green))"
          : "radial-gradient(circle at 35% 35%, rgba(var(--bn-green-rgb),0.65), rgba(0,0,0,0.85))",
        boxShadow: isSelected ? "0 2px 8px rgba(var(--bn-green-rgb),0.55)" : "0 2px 5px rgba(0,0,0,0.50)",
        border: "1.5px solid rgba(255,255,255,0.15)",
        zIndex: 10,
        transition: "background 0.3s, box-shadow 0.3s",
      }} />
    </div>
  );
}

// ─── Panneau détail (focus) ───────────────────────────────────────────────────
function DetailPanel({ membre, onClose, isMobile }: { membre: Membre | null; onClose: () => void; isMobile: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 20); }, []);

  if (!membre) return null;
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.0)",
          zIndex: 200,
          cursor: "pointer",
        }}
      />

      {/* Panel */}
      <div style={{
        position: "fixed",
        right: isMobile ? "16px" : mounted ? "32px" : "-420px",
        left: isMobile ? "16px" : "auto",
        bottom: isMobile ? (mounted ? "16px" : "-520px") : "auto",
        top: isMobile ? "auto" : "50%",
        transform: isMobile ? "none" : "translateY(-50%)",
        width: isMobile ? "auto" : "min(380px, calc(100vw - 48px))",
        maxHeight: isMobile ? "calc(100dvh - 32px)" : "auto",
        zIndex: 300,
        borderRadius: "16px",
        overflow: "hidden",
        background: "linear-gradient(145deg, #110c06 0%, #1c1208 100%)",
        border: "1px solid rgba(var(--bn-green-rgb),0.30)",
        boxShadow: "0 40px 120px rgba(0,0,0,0.80), 0 0 0 1px rgba(var(--bn-green-rgb),0.15)",
        transition: isMobile
          ? "bottom 0.55s cubic-bezier(0.34,1.1,0.64,1)"
          : "right 0.55s cubic-bezier(0.34,1.1,0.64,1)",
      }}>
        {/* Bande top */}
        <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, var(--bn-green), var(--bn-white), var(--bn-green), transparent)" }} />

        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "rgba(var(--bn-green-rgb),0.14)",
            border: "1px solid rgba(var(--bn-green-rgb),0.30)",
            color: "var(--bn-white)",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            transition: "background 0.25s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(var(--bn-green-rgb),0.28)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(var(--bn-green-rgb),0.14)"}
        >
          ✕
        </button>

        {/* Photo grande */}
        <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <img
            src={membre.photo}
            alt={membre.nom}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
              animation: "zoomIn 0.8s cubic-bezier(0.4,0,0.2,1) forwards",
            }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(10,5,2,0.90) 100%)",
          }} />
          {/* Nom sur photo */}
          <div style={{
            position: "absolute",
            bottom: "20px",
            left: "24px",
            right: "24px",
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--bn-green)",
              marginBottom: "6px",
            }}>
              {membre.role}
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.45rem",
              fontWeight: 900,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.15,
              textShadow: "0 2px 12px rgba(0,0,0,0.8)",
            }}>
              {membre.nom}
            </h2>
          </div>
        </div>

        {/* Corps */}
        <div style={{ padding: "24px 28px 32px" }}>
          {/* Badges */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.75rem",
              padding: "5px 14px",
              borderRadius: "20px",
              background: "rgba(var(--bn-green-rgb),0.12)",
              border: "1px solid rgba(var(--bn-green-rgb),0.32)",
              color: "rgba(255,255,255,0.92)",
              fontStyle: "italic",
            }}>
              {membre.profession}
            </span>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.65rem",
              padding: "5px 12px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
              color: "rgba(255,255,255,0.78)",
            }}>
              📍 {membre.ville}
            </span>
          </div>

          {/* Trait */}
          <div style={{ width: "40px", height: "1.5px", background: "linear-gradient(90deg, var(--bn-green), transparent)", marginBottom: "16px", borderRadius: "2px" }} />

          {/* Bio */}
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.05rem",
            lineHeight: 1.80,
            color: "rgba(255,255,255,0.68)",
            margin: 0,
          }}>
            {membre.bio}
          </p>
        </div>
      </div>
    </>
  );
}

// ─── Header section ───────────────────────────────────────────────────────────
function SectionHeader() {
  const [ref, inView] = useInView(0.2);
  return (
    <div ref={ref} style={{
      textAlign: "center",
      marginBottom: "20px",
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
        Le Clan
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
        Ceux qui font<br />
        <em style={{ color: "var(--bn-green)", fontStyle: "italic" }}>vivre notre famille</em>
      </h2>

      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(0.98rem, 1.4vw, 1.12rem)",
        color: "rgba(255,255,255,0.78)",
        maxWidth: "480px",
        margin: "0 auto",
        lineHeight: 1.8,
      }}>
        Cliquez sur une carte pour découvrir chaque membre et le rôle qu'il joue au cœur de notre clan.
      </p>
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────
export default function SectionMembres() {
  const [selected, setSelected] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const positions  = useMemo(() => generatePositions(MEMBRES.length), []);
  const selectedMembre = (MEMBRES as Membre[]).find(m => m.id === selected) || null;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 900);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  // Fermer avec Escape
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  // Hauteur de la table selon nb de membres
  const rows = Math.ceil(MEMBRES.length / 4);
  const tableHeight = rows * 220 + 100;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes zoomIn {
          from { transform: scale(1.08); }
          to   { transform: scale(1.0);  }
        }

        .membres-root {
          position: relative;
          background: #070503;
          padding: 110px 0 80px;
          overflow: hidden;
        }

        .membres-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
          position: relative;
          z-index: 6;
        }

        @media (max-width: 480px) {
          .membres-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 900px) {
          .membres-root {
            padding: 90px 0 70px;
          }
        }

        /* Texture bois/feutre de table */
        .membres-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(var(--bn-green-rgb),0.012) 2px,
              rgba(var(--bn-green-rgb),0.012) 4px
            ),
            radial-gradient(ellipse 100% 60% at 50% 50%, rgba(30,18,8,0.0) 0%, rgba(0,0,0,0.50) 100%);
          pointer-events: none;
        }

        /* Vignette bords */
        .membres-root::after {
          content: '';
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 120px rgba(0,0,0,0.70);
          pointer-events: none;
          z-index: 5;
        }

        .membres-header {
          position: relative;
          z-index: 10;
          padding: 0 24px;
        }

        .table-surface {
          position: relative;
          width: 100%;
          margin: 0 auto;
          max-width: 1200px;
          z-index: 6;
        }

        .membres-cta {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: center;
          padding: 40px 24px 0;
        }
      `}</style>

      <section className="membres-root">
        {/* Header */}
        <div className="membres-header">
          <SectionHeader />
        </div>

        {isMobile ? (
          <div className="membres-grid">
            {MEMBRES.map((membre) => (
              <MembreGridCard
                key={membre.id}
                membre={membre}
                isSelected={selected === membre.id}
                onSelect={setSelected}
              />
            ))}
          </div>
        ) : (
          <div className="table-surface" style={{ height: `${tableHeight}px` }}>
            {MEMBRES.map((membre, i) => (
              <MembreCard
                key={membre.id}
                membre={membre}
                pos={positions[i]}
                index={i}
                isSelected={selected === membre.id}
                anySelected={selected !== null}
                onSelect={setSelected}
              />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="membres-cta">
          <Link
            href="/nos-membres"
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
              color: "rgba(255,255,255,0.95)",
              background: "transparent",
              textDecoration: "none",
            }}
            onMouseEnter={e => {
              const fill = e.currentTarget.querySelector(".cta-fill") as HTMLElement | null;
              if (fill) fill.style.transform = "scaleX(1)";
              e.currentTarget.style.color = "#0B0F0C";
            }}
            onMouseLeave={e => {
              const fill = e.currentTarget.querySelector(".cta-fill") as HTMLElement | null;
              if (fill) fill.style.transform = "scaleX(0)";
              e.currentTarget.style.color = "rgba(255,255,255,0.95)";
            }}
          >
            <span className="cta-fill" style={{
              position: "absolute",
              inset: 0,
              background: "var(--bn-green)",
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.42s cubic-bezier(0.4,0,0.2,1)",
              borderRadius: "4px",
            }} />
            <span style={{ position: "relative", zIndex: 1 }}>Voir tous les membres</span>
            <span style={{ position: "relative", zIndex: 1 }}>→</span>
          </Link>
        </div>
      </section>

      {/* Panel focus */}
      <DetailPanel membre={selectedMembre} onClose={() => setSelected(null)} isMobile={isMobile} />
    </>
  );
}