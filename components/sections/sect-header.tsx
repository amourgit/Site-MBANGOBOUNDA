"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/",                label: "Accueil",         icon: "🏠" },
  { href: "/notre-histoire",  label: "Nos Racines",     icon: "🌳" },
  { href: "/nos-evenements",  label: "La Vie du Clan",  icon: "🥁" },
  { href: "/nos-albums",      label: "Nos Mémoires",    icon: "📸" },
  { href: "/notre-vocation",  label: "Notre Âme",       icon: "🌍" },
  { href: "/nous-contacter",  label: "Nous Joindre",    icon: "✉️" },
];

// Breakpoint à partir duquel on bascule en menu desktop
const DESKTOP_BP = 900;

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [isDesktop, setIsDesktop] = useState(false); // SSR-safe : false par défaut
  const pathname = usePathname();

  /* ── Détection viewport ── */
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= DESKTOP_BP);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── Scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Fermer menu sur navigation ── */
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  /* ── Bloquer le scroll body quand menu mobile ouvert ── */
  useEffect(() => {
    document.body.style.overflow = (!isDesktop && menuOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, isDesktop]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Cormorant+Garamond:wght@300;400;500;600&family=Lato:wght@300;400;700&display=swap');

        :root {
          --gold:       var(--bn-green);
          --gold-light: var(--bn-white);
          --deep:       #1A1209;
          --cream:      #FAF3E8;
        }

        /* ── Pill ── */
        .nav-pill {
          transition:
            background       0.55s cubic-bezier(0.4, 0, 0.2, 1),
            backdrop-filter  0.55s cubic-bezier(0.4, 0, 0.2, 1),
            -webkit-backdrop-filter 0.55s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow       0.55s cubic-bezier(0.4, 0, 0.2, 1),
            border-color     0.55s cubic-bezier(0.4, 0, 0.2, 1);
          border-width: 1px;
          border-style: solid;
          border-radius: 18px;
        }
        .nav-transparent {
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow: none;
          border-color: transparent;
        }
        .nav-frosted {
          background: rgba(18, 10, 4, 0.60);
          backdrop-filter: blur(28px) saturate(180%);
          -webkit-backdrop-filter: blur(28px) saturate(180%);
          box-shadow: 0 8px 48px rgba(0,0,0,0.40), inset 0 1px 0 rgba(var(--bn-green-rgb),0.18);
          border-color: rgba(var(--bn-green-rgb),0.26);
        }

        /* ── Logo ── */
        @keyframes logoPulse {
          0%   { transform: scale(0.82); opacity: 0; }
          60%  { transform: scale(1.07); opacity: 1; }
          100% { transform: scale(1);    opacity: 1; }
        }
        .logo-anim {
          animation: logoPulse 0.8s cubic-bezier(0.34,1.56,0.64,1) both;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .logo-emblem {
          width: 42px; height: 42px;
          border-radius: 50%;
          border: 1.5px solid rgba(var(--bn-green-rgb),0.60);
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 35% 35%, rgba(var(--bn-green-rgb),0.16), rgba(0,0,0,0.40));
          flex-shrink: 0;
          overflow: hidden;
          transition: transform 0.38s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s;
        }
        .logo-emblem:hover { transform: rotate(12deg) scale(1.10); border-color: var(--gold); }
        .logo-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1;
          background: linear-gradient(135deg, var(--gold-light) 30%, #fff 70%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }
        .logo-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.60rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(var(--bn-green-rgb),0.78);
          margin-top: 2px;
          white-space: nowrap;
        }

        /* ── Liens desktop ── */
        @keyframes slideDown {
          from { transform: translateY(-14px); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
        .nav-link-item { animation: slideDown 0.5s cubic-bezier(0.34,1.2,0.64,1) both; }

        .nav-link-inner {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 10px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.97rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: rgba(250,243,232,0.80);
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.28s ease;
        }
        .nav-link-inner::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10px;
          right: 10px;
          width: auto;
          height: 0%;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          border-radius: 2px;
          transition: height 0.30s cubic-bezier(0.4, 0, 0.2, 1);
        }
        /* On réécrit l'approche avec width, plus propre */
        .nav-link-inner .link-bar {
          position: absolute;
          bottom: 0;
          left: 10px;
          height: 1.5px;
          width: 0%;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          border-radius: 2px;
          transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link-inner:hover,
        .nav-link-inner.is-active {
          color: var(--gold-light);
        }
        .nav-link-inner:hover .link-bar,
        .nav-link-inner.is-active .link-bar {
          width: calc(100% - 20px);
        }

        /* Point doré */
        .nav-dot {
          display: inline-block;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--gold);
          opacity: 0;
          transform: scale(0);
          transition: opacity 0.25s, transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
          flex-shrink: 0;
        }
        .nav-link-inner:hover .nav-dot,
        .nav-link-inner.is-active .nav-dot {
          opacity: 1;
          transform: scale(1);
        }

        /* ── Bouton CTA ── */
        .cta-btn {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          padding: 8px 20px;
          border-radius: 50px;
          border: 1.5px solid var(--gold);
          color: var(--gold-light);
          background: transparent;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.32s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.38s cubic-bezier(0.4,0,0.2,1);
          border-radius: 50px;
        }
        .cta-btn:hover::before { transform: scaleX(1); }
        .cta-btn:hover { color: var(--deep); }
        .cta-btn > span { position: relative; z-index: 1; }

        /* ── Hamburger ── */
        .ham-btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          cursor: pointer;
          padding: 0;
          transition: background 0.2s;
        }
        .ham-btn:hover { background: rgba(var(--bn-green-rgb),0.12); }
        .ham-line {
          display: block;
          height: 1.5px;
          background: var(--bn-green);
          border-radius: 2px;
          transition:
            transform 0.35s cubic-bezier(0.4,0,0.2,1),
            opacity   0.25s ease;
        }

        /* ── Menu mobile dropdown ── */
        @keyframes menuSlide {
          from { opacity: 0; transform: translateY(-8px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        .mobile-menu-inner {
          animation: menuSlide 0.32s cubic-bezier(0.34,1.2,0.64,1) both;
          border-top: 1px solid rgba(var(--bn-green-rgb),0.18);
          padding: 10px 12px 16px;
        }
        .mob-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 14px;
          border-radius: 10px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.08rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: rgba(250,243,232,0.82);
          text-decoration: none;
          transition:
            background 0.22s ease,
            color      0.22s ease,
            transform  0.22s cubic-bezier(0.34,1.56,0.64,1);
        }
        .mob-link:hover,
        .mob-link.is-active {
          background: rgba(var(--bn-green-rgb),0.14);
          color: var(--gold-light);
          transform: translateX(6px);
        }
        .mob-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(var(--bn-green-rgb),0.30), transparent);
          margin: 8px 14px;
        }
      `}</style>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          paddingTop: "16px",
          paddingLeft: "20px",
          paddingRight: "20px",
          pointerEvents: "none",
          fontFamily: "'Lato', sans-serif",
        }}
      >
        <nav
          className={`nav-pill w-full ${scrolled ? "nav-frosted" : "nav-transparent"}`}
          style={{ maxWidth: "1160px", pointerEvents: "auto" }}
        >

          {/* ── Barre principale ── */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
          }}>

            {/* Logo */}
            <Link href="/" className="logo-anim">
              <div className="logo-emblem">
                <Image
                  src="/images/logo-BN.png"
                  alt="Logo BA NGOMBOUNDA"
                  width={42}
                  height={42}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="logo-name">BA NGOMBOUNDA</span>
                <span className="logo-sub">Clan &amp; Tradition</span>
              </div>
            </Link>

            {/* Liens desktop — rendus seulement si isDesktop */}
            {isDesktop && (
              <ul style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                listStyle: "none",
                margin: "0",
                padding: "0",
                flex: 1,
                justifyContent: "center",
              }}>
                {navLinks.map((link, i) => (
                  <li
                    key={link.href}
                    className="nav-link-item"
                    style={{ animationDelay: `${0.08 + i * 0.06}s` }}
                  >
                    <Link
                      href={link.href}
                      className={`nav-link-inner ${pathname === link.href ? "is-active" : ""}`}
                    >
                      {link.label}
                      <span className="nav-dot" />
                      <span className="link-bar" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {/* Droite : CTA (desktop) ou Hamburger (mobile) */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
              {isDesktop ? (
                <Link href="/nous-contacter" className="cta-btn">
                  <span>Rejoindre</span>
                </Link>
              ) : (
                <button
                  className="ham-btn"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                  aria-expanded={menuOpen}
                >
                  <span className="ham-line" style={{
                    width: "24px",
                    transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
                  }} />
                  <span className="ham-line" style={{
                    width: "17px",
                    opacity: menuOpen ? 0 : 1,
                  }} />
                  <span className="ham-line" style={{
                    width: "24px",
                    transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
                  }} />
                </button>
              )}
            </div>
          </div>

          {/* ── Dropdown mobile ── */}
          {!isDesktop && menuOpen && (
            <div className="mobile-menu-inner">
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`mob-link ${pathname === link.href ? "is-active" : ""}`}
                    >
                      <span style={{ fontSize: "1.1rem" }}>{link.icon}</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li><div className="mob-divider" /></li>
                <li>
                  <Link href="/nous-contacter" className="cta-btn" style={{ width: "100%" }}>
                    <span>✨ Rejoindre le Clan</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}

        </nav>
      </header>
    </>
  );
}