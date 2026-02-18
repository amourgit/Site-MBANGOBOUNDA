"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Données ──────────────────────────────────────────────────────────────────
const NAV_SECTIONS = [
  {
    titre: "Navigation",
    liens: [
      { label: "Accueil",        href: "/" },
      { label: "Nos Racines",    href: "/notre-histoire" },
      { label: "La Vie du Clan", href: "/nos-evenements" },
      { label: "Nos Mémoires",   href: "/nos-albums" },
      { label: "Notre Âme",      href: "/notre-vocation" },
      { label: "Le Clan",        href: "/nos-membres" },
      { label: "Nous Joindre",   href: "/nous-contacter" },
    ],
  },
  {
    titre: "Le Clan",
    liens: [
      { label: "Notre Histoire",    href: "/notre-histoire" },
      { label: "Notre Vocation",    href: "/notre-vocation" },
      { label: "Nos Valeurs",       href: "/nos-valeurs" },
      { label: "Nos Projets",       href: "/nos-projets" },
      { label: "Aide aux Membres",  href: "/solidarite" },
    ],
  },
  {
    titre: "Ressources",
    liens: [
      { label: "Rejoindre le clan",   href: "/rejoindre" },
      { label: "Déposer un projet",   href: "/projets/nouveau" },
      { label: "Demander une aide",   href: "/solidarite/demande" },
      { label: "Espace membres",      href: "/espace-membres" },
      { label: "Nous contacter",      href: "/nous-contacter" },
    ],
  },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke="currentColor" fill="none"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4.5"/>
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
];

const DEVISE = ["Unité", "Amour", "Prospérité"];
const DEVISE_COLORS = ["var(--bn-green)", "var(--bn-white)", "var(--bn-green)"];

// ─── Hook IntersectionObserver ────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
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
  return [ref, inView];
}

// ─── Lien footer avec hover animé ────────────────────────────────────────────
function FooterLink({ href, label, delay = 0, inView }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-12px)",
        transition: `opacity 0.55s ${delay}s ease, transform 0.55s ${delay}s cubic-bezier(0.34,1.1,0.64,1)`,
      }}
    >
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "0.97rem",
          color: hovered ? "var(--bn-white)" : "rgba(255,255,255,0.78)",
          textDecoration: "none",
          transition: "color 0.28s ease",
          padding: "3px 0",
          letterSpacing: "0.02em",
        }}
      >
        <span style={{
          width: hovered ? "16px" : "0px",
          height: "1px",
          background: "var(--bn-green)",
          display: "inline-block",
          transition: "width 0.35s cubic-bezier(0.4,0,0.2,1)",
          flexShrink: 0,
        }} />
        {label}
      </Link>
    </li>
  );
}

// ─── Bouton réseau social ─────────────────────────────────────────────────────
function SocialBtn({ item, delay, inView }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={item.href}
      aria-label={item.label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "10px",
        border: `1px solid ${hovered ? "rgba(var(--bn-green-rgb),0.65)" : "rgba(var(--bn-green-rgb),0.24)"}`,
        background: hovered ? "rgba(var(--bn-green-rgb),0.14)" : "rgba(255,255,255,0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: hovered ? "var(--bn-white)" : "rgba(255,255,255,0.70)",
        textDecoration: "none",
        transform: inView
          ? hovered ? "translateY(-4px) scale(1.10)" : "translateY(0) scale(1)"
          : "translateY(12px) scale(0.9)",
        opacity: inView ? 1 : 0,
        transition: `
          color 0.28s ease,
          border-color 0.28s ease,
          background 0.28s ease,
          transform 0.38s ${delay}s cubic-bezier(0.34,1.56,0.64,1),
          opacity 0.5s ${delay}s ease
        `,
        boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.35)" : "none",
      }}
    >
      {item.icon}
    </a>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────
export default function Footer() {
  const [topRef,    topInView]    = useInView(0.1);
  const [colsRef,   colsInView]   = useInView(0.1);
  const [bottomRef, bottomInView] = useInView(0.1);
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

        :root {
          --gold: var(--bn-green);
          --gold-light: var(--bn-white);
        }

        .footer-root {
          position: relative;
          background: #030201;
          overflow: hidden;
          font-family: 'Lato', sans-serif;
        }

        /* Pattern wax en fond */
        .footer-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle, rgba(var(--bn-green-rgb),0.07) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
          pointer-events: none;
        }

        /* Halo supérieur */
        .footer-root::after {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 300px;
          background: radial-gradient(ellipse at top, rgba(var(--bn-green-rgb),0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Séparateur haut */
        .footer-sep {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(var(--bn-green-rgb),0.18) 20%,
            rgba(var(--bn-green-rgb),0.55) 50%,
            rgba(var(--bn-green-rgb),0.18) 80%,
            transparent 100%
          );
        }

        /* ── Newsletter input ── */
        .nl-input {
          flex: 1;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(var(--bn-green-rgb),0.28);
          border-radius: 6px 0 0 6px;
          padding: 12px 18px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.98rem;
          color: rgba(255,255,255,0.90);
          outline: none;
          transition: border-color 0.3s ease, background 0.3s ease;
          min-width: 0;
        }
        .nl-input::placeholder { color: rgba(255,255,255,0.62); }
        .nl-input:focus {
          border-color: rgba(var(--bn-green-rgb),0.70);
          background: rgba(var(--bn-green-rgb),0.08);
        }
        .nl-btn {
          padding: 12px 20px;
          background: linear-gradient(135deg, var(--bn-green), var(--bn-white));
          border: none;
          border-radius: 0 6px 6px 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.84rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #0B0F0C;
          cursor: pointer;
          transition: transform 0.2s, filter 0.2s;
        }
          transition: opacity 0.25s ease, transform 0.25s ease;
          flex-shrink: 0;
        }
        .nl-btn:hover { opacity: 0.88; transform: scale(1.02); }

        /* ── Responsive ── */
        .footer-top    { padding: 56px 40px 48px; }
        .footer-cols   { padding: 0 40px 56px; }
        .footer-bottom { padding: 22px 40px; }

        .footer-top-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }

        .footer-cols-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.8fr repeat(3, 1fr);
          gap: 48px;
        }

        .footer-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .footer-cols-inner {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
        }

        @media (max-width: 700px) {
          .footer-top    { padding: 44px 20px 36px; }
          .footer-cols   { padding: 0 20px 44px; }
          .footer-bottom { padding: 20px; }

          .footer-cols-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-top-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 28px;
          }
          .footer-bottom-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 14px;
          }
        }

        /* ── Titre colonne ── */
        .col-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--bn-green);
          margin: 0 0 18px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .col-title::after {
          content: '';
          display: block;
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(var(--bn-green-rgb),0.55), transparent);
        }

        @keyframes shimmerDevise {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-sep" />

        {/* ═══════════════════════════════════════════════════════
            HAUT : Logo + Devise + Newsletter
        ═══════════════════════════════════════════════════════ */}
        <div className="footer-top">
          <div ref={topRef} className="footer-top-inner">

            {/* Logo + devise */}
            <div style={{
              opacity: topInView ? 1 : 0,
              transform: topInView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.1,0.64,1)",
            }}>
              {/* Logo */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "18px" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(200,169,110,0.45)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "radial-gradient(circle at 35% 35%, rgba(200,169,110,0.12), rgba(0,0,0,0.4))",
                  flexShrink: 0,
                  overflow: "hidden",
                }}>
                  <Image
                    src="/images/logo-BN.png"
                    alt="Logo BA NGOMBOUNDA"
                    width={48}
                    height={48}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #E8C97E 30%, #fff 70%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                  }}>
                    BA NGOMBOUNDA
                  </div>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.60rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(200,169,110,0.55)",
                    marginTop: "3px",
                  }}>
                    Clan & Tradition
                  </div>
                </div>
              </div>

              {/* Devise animée */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                {DEVISE.map((mot, i) => (
                  <span key={mot} style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "1.05rem",
                      color: DEVISE_COLORS[i],
                      opacity: 0.85,
                    }}>
                      {mot}
                    </span>
                    {i < DEVISE.length - 1 && (
                      <span style={{
                        width: "4px", height: "4px",
                        borderRadius: "50%",
                        background: "rgba(200,169,110,0.35)",
                        display: "inline-block",
                      }} />
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Séparateur vertical (desktop) */}
            <div style={{
              width: "1px",
              alignSelf: "stretch",
              background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.20), transparent)",
              flexShrink: 0,
              display: "none", // géré via CSS ci-dessous
            }} className="vert-sep" />

            {/* Newsletter */}
            <div style={{
              flex: 1,
              minWidth: "280px",
              maxWidth: "420px",
              opacity: topInView ? 1 : 0,
              transform: topInView ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.8s 0.2s ease, transform 0.8s 0.2s cubic-bezier(0.34,1.1,0.64,1)",
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C8A96E",
                margin: "0 0 8px 0",
              }}>
                Restez informés
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.02rem",
                color: "rgba(255,255,255,0.50)",
                margin: "0 0 16px 0",
                lineHeight: 1.6,
              }}>
                Recevez les actualités du clan directement dans votre boîte mail.
              </p>
              <div style={{ display: "flex" }}>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="nl-input"
                />
                <button className="nl-btn">S'abonner</button>
              </div>
            </div>

          </div>
        </div>

        {/* Séparateur interne */}
        <div style={{ margin: "0 40px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="footer-sep" />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            COLONNES : Col description + 3 colonnes liens
        ═══════════════════════════════════════════════════════ */}
        <div className="footer-cols" style={{ paddingTop: "48px" }}>
          <div ref={colsRef} className="footer-cols-inner">

            {/* ── Col 1 : Description & Réseaux ── */}
            <div style={{
              opacity: colsInView ? 1 : 0,
              transform: colsInView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.1,0.64,1)",
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.02rem",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.42)",
                margin: "0 0 28px 0",
                maxWidth: "320px",
              }}>
                Une communauté familiale unie par les valeurs de l'Afrique, 
                dédiée à préserver nos traditions et bâtir un avenir prospère 
                pour nos enfants et petits-enfants.
              </p>

              {/* Réseaux sociaux */}
              <div style={{ marginBottom: "28px" }}>
                <p className="col-title" style={{ marginBottom: "14px" }}>
                  Nous suivre
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {SOCIALS.map((s, i) => (
                    <SocialBtn
                      key={s.label}
                      item={s}
                      delay={0.1 + i * 0.07}
                      inView={colsInView}
                    />
                  ))}
                </div>
              </div>

              {/* Contact rapide */}
              <a
                href="mailto:contact@clan-nguyen.ga"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.88rem",
                  color: "rgba(200,169,110,0.65)",
                  textDecoration: "none",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#E8C97E"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(200,169,110,0.65)"}
              >
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3h12a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z"/>
                  <path d="M2 4l7 6 7-6" strokeLinecap="round"/>
                </svg>
                contact@clan-nguyen.ga
              </a>
            </div>

            {/* ── Colonnes liens ── */}
            {NAV_SECTIONS.map((section, si) => (
              <div key={section.titre} style={{
                opacity: colsInView ? 1 : 0,
                transform: colsInView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.8s ${0.12 + si * 0.10}s ease, transform 0.8s ${0.12 + si * 0.10}s cubic-bezier(0.34,1.1,0.64,1)`,
              }}>
                <p className="col-title">{section.titre}</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
                  {section.liens.map((lien, li) => (
                    <FooterLink
                      key={lien.href + lien.label}
                      href={lien.href}
                      label={lien.label}
                      delay={0.15 + si * 0.08 + li * 0.04}
                      inView={colsInView}
                    />
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>

        {/* Séparateur bas */}
        <div style={{ margin: "0 40px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="footer-sep" />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            BAS : Copyright + Mentions légales
        ═══════════════════════════════════════════════════════ */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.35)",
              margin: 0,
              opacity: bottomInView ? 1 : 0,
              transition: "opacity 0.8s ease",
            }}>
              © {year} BA NGOMBOUNDA — Clan & Tradition. Tous droits réservés.
            </p>

            {/* Liens légaux */}
            <div style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "'Cormorant Garamond', serif",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
              opacity: bottomInView ? 1 : 0,
              transition: "opacity 0.8s 0.15s ease",
            }}>
              {["Mentions légales", "Confidentialité", "Accessibilité"].map((lbl, i) => (
                <span key={lbl} style={{ display: "inline-flex", alignItems: "center", gap: "20px" }}>
                  <Link
                    href="#"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "0.78rem",
                      color: "rgba(255,255,255,0.28)",
                      textDecoration: "none",
                      transition: "color 0.25s ease",
                      letterSpacing: "0.04em",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "rgba(200,169,110,0.70)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.28)")}
                  >
                    {lbl}
                  </Link>
                  {i < 2 && (
                    <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "inline-block" }} />
                  )}
                </span>
              ))}
            </div>

            {/* Fait avec amour */}
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "0.78rem",
              color: "rgba(200,169,110,0.35)",
              margin: 0,
              whiteSpace: "nowrap",
              opacity: bottomInView ? 1 : 0,
              transition: "opacity 0.8s 0.25s ease",
            }}>
              Fait avec ❤️ pour le clan
            </p>
          </div>
        </div>

      </footer>
    </>
  );
}