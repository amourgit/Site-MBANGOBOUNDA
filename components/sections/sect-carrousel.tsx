"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

// ─── Données du carrousel ───────────────────────────────────────────────────
// Remplace src par tes vraies images/vidéos
type Slide = {
  type: "image" | "video";
  src: string;
  tag: string;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    type: "image",
    src: "famille/photo15.png",
    tag: "Notre Clan",
    title: "Ensemble,\nnous sommes\nplus forts",
    description:
      "Depuis des générations, notre famille porte les valeurs de l'unité, du partage et de la dignité. Chaque membre est un maillon précieux de cette chaîne sacrée.",
  },
  {
    type: "image",
    src: "famille/photo16.png",
    tag: "Les Anciens",
    title: "La sagesse\nde nos racines",
    description:
      "Nos aînés sont les gardiens de la mémoire. Leur sagesse guide nos pas et éclaire notre chemin vers l'avenir. Nous les honorons à chaque instant.",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4",
    tag: "La Vie du Clan",
    title: "Célébrons\nla vie ensemble",
    description:
      "Mariages, baptêmes, fêtes traditionnelles… chaque rassemblement est une occasion de renforcer nos liens et de perpétuer nos us et coutumes ancestraux.",
  },
  {
    type: "image",
    src: "famille/photo14.png",
    tag: "Notre Mission",
    title: "Prendre soin\ndes nôtres",
    description:
      "Veuves, personnes âgées, enfants vulnérables — personne n'est laissé pour compte. La solidarité familiale est notre engagement le plus profond.",
  },
];

const AUTOPLAY_DELAY = 6000;

export default function HeroCarousel() {
  const [current,   setCurrent]   = useState<number>(0);
  const [prev,      setPrev]      = useState<number | null>(null);
  const [direction, setDirection] = useState(1); // 1=next, -1=prev
  const [textReady, setTextReady] = useState(true);
  const [progress,  setProgress]  = useState(0);
  const timerRef    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<number | null>(null);
  const startRef    = useRef<number>(0);
  const videoRefs   = useRef<(HTMLVideoElement | null)[]>([]);

  // ── Aller à un slide ────────────────────────────────────────────────────
  const goTo = useCallback((index: number, dir: 1 | -1 = 1) => {
    if (index === current) return;
    setTextReady(false);
    setPrev(current);
    setDirection(dir);
    setProgress(0);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => setTextReady(true), 120);
    }, 60);
  }, [current]);

  const goNext = useCallback(() => goTo((current + 1) % slides.length, 1),  [current, goTo]);
  const goPrev = useCallback(() => goTo((current - 1 + slides.length) % slides.length, -1), [current, goTo]);

  // ── Autoplay + barre de progression ────────────────────────────────────
  useEffect(() => {
    setProgress(0);
    startRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      setProgress(Math.min((elapsed / AUTOPLAY_DELAY) * 100, 100));
      if (elapsed < AUTOPLAY_DELAY) {
        progressRef.current = requestAnimationFrame(tick);
      }
    };
    progressRef.current = requestAnimationFrame(tick);
    timerRef.current = setTimeout(goNext, AUTOPLAY_DELAY);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, [current, goNext]);

  // ── Lecture vidéo auto ──────────────────────────────────────────────────
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) { v.currentTime = 0; v.play().catch(() => {}); }
      else v.pause();
    });
  }, [current]);

  const slide = slides[current];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;500;600&family=Lato:wght@300;400;700&display=swap');

        /* ── Reset ── */
        .hero-root *, .hero-root *::before, .hero-root *::after { box-sizing: border-box; }

        /* ── Conteneur ── */
        .hero-root {
          position: relative;
          width: 100vw;
          height: 100dvh;
          overflow: hidden;
          background: #0a0603;
          font-family: 'Lato', sans-serif;
        }

        /* ── Médias (image / vidéo) ── */
        .slide-media {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          will-change: transform, opacity;
        }

        /* Slide entrant */
        @keyframes slideEnterRight {
          from { opacity: 0; transform: scale(1.06) translateX(3%); }
          to   { opacity: 1; transform: scale(1)    translateX(0);   }
        }
        @keyframes slideEnterLeft {
          from { opacity: 0; transform: scale(1.06) translateX(-3%); }
          to   { opacity: 1; transform: scale(1)    translateX(0);    }
        }
        @keyframes slideExit {
          from { opacity: 1; transform: scale(1);    }
          to   { opacity: 0; transform: scale(0.97); }
        }

        .slide-enter-right { animation: slideEnterRight 1.1s cubic-bezier(0.4,0,0.2,1) forwards; }
        .slide-enter-left  { animation: slideEnterLeft  1.1s cubic-bezier(0.4,0,0.2,1) forwards; }
        .slide-exit        { animation: slideExit       0.7s cubic-bezier(0.4,0,0.2,1) forwards; }

        /* ── Overlay global sombre (lisibilité) ── */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to right,
              rgba(0,0,0,0.55) 0%,
              rgba(0,0,0,0.10) 40%,
              rgba(0,0,0,0.02) 60%,
              rgba(0,0,0,0.70) 100%
            ),
            linear-gradient(to bottom,
              rgba(0,0,0,0.30) 0%,
              transparent 30%,
              transparent 60%,
              rgba(0,0,0,0.50) 100%
            );
          pointer-events: none;
          z-index: 2;
        }

        /* ── Panneau texte droite ── */
        .text-panel {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: 5;
          display: flex;
          align-items: center;
          width: min(480px, 42vw);
          padding: 0 52px 0 40px;
          background: linear-gradient(
            to left,
            rgba(5, 2, 1, 0.82) 0%,
            rgba(8, 4, 2, 0.72) 55%,
            rgba(10, 5, 2, 0.30) 80%,
            transparent 100%
          );
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
        }

        /* Responsive : panneau plein bas sur mobile */
        @media (max-width: 700px) {
          .text-panel {
            width: 100%;
            top: auto;
            right: 0;
            left: 0;
            bottom: 0;
            padding: 32px 28px 100px;
            align-items: flex-end;
            background: linear-gradient(
              to top,
              rgba(5, 2, 1, 0.92) 0%,
              rgba(8, 4, 2, 0.72) 60%,
              transparent 100%
            );
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
          }
        }

        .text-inner {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        /* ── Animations texte ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .text-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--bn-green);
          opacity: 0;
        }
        .text-tag.ready { animation: fadeIn 0.6s 0.15s ease forwards; }
        .text-tag::before {
          content: '';
          display: block;
          width: 28px;
          height: 1.5px;
          background: var(--bn-green);
          flex-shrink: 0;
        }

        .text-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.5vw, 3.2rem);
          font-weight: 900;
          line-height: 1.08;
          color: #ffffff;
          white-space: pre-line;
          opacity: 0;
          margin: 0;
          text-shadow: 0 4px 24px rgba(0,0,0,0.6);
        }
        .text-title.ready { animation: fadeUp 0.75s 0.30s cubic-bezier(0.34,1.1,0.64,1) forwards; }

        .text-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(0.95rem, 1.3vw, 1.12rem);
          font-weight: 400;
          line-height: 1.7;
          color: rgba(255,255,255,0.78);
          opacity: 0;
        }
        .text-desc.ready { animation: fadeUp 0.75s 0.48s cubic-bezier(0.34,1.1,0.64,1) forwards; }

        .text-divider {
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--bn-green), transparent);
        }
        .text-divider.ready { animation: dividerGrow 0.8s 0.55s cubic-bezier(0.4,0,0.2,1) forwards; }
        @keyframes dividerGrow {
          to { width: 100%; }
        }

        /* ── Bouton CTA ── */
        .hero-cta {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 14px 28px;
          border-radius: 4px;
          border: 1.5px solid rgba(var(--bn-green-rgb),0.75);
          color: rgba(255,255,255,0.95);
          background: rgba(var(--bn-green-rgb),0.10);
          text-decoration: none;
          cursor: pointer;
          opacity: 0;
          align-self: flex-start;
          transition: color 0.32s ease, border-color 0.32s ease;
        }
        .hero-cta.ready { animation: fadeUp 0.7s 0.68s cubic-bezier(0.34,1.1,0.64,1) forwards; }
        .hero-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--bn-green);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.42s cubic-bezier(0.4,0,0.2,1);
        }
        .hero-cta:hover::before { transform: scaleX(1); }
        .hero-cta:hover { color: #0B0F0C; border-color: var(--bn-green); }
        .hero-cta span { position: relative; z-index: 1; }
        .cta-arrow {
          position: relative;
          z-index: 1;
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .hero-cta:hover .cta-arrow { transform: translateX(5px); }

        /* ── Navigation (flèches) ── */
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 48px; height: 48px;
          border-radius: 50%;
          border: 1.5px solid rgba(var(--bn-green-rgb),0.45);
          background: rgba(10,6,3,0.40);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: rgba(255,255,255,0.80);
          transition:
            background    0.28s ease,
            border-color  0.28s ease,
            transform     0.35s cubic-bezier(0.34,1.56,0.64,1);
          font-size: 1.1rem;
        }
        .nav-arrow:hover {
          background: rgba(var(--bn-green-rgb),0.22);
          border-color: rgba(var(--bn-green-rgb),0.85);
          transform: translateY(-50%) scale(1.10);
        }
        .nav-arrow.left  { left: 28px; }
        .nav-arrow.right { right: 28px; }

        @media (max-width: 700px) {
          .nav-arrow { width: 38px; height: 38px; font-size: 0.9rem; }
          .nav-arrow.left  { left: 14px; }
          .nav-arrow.right { right: 14px; }
        }

        /* ── Bullets + barre de progression ── */
        .dots-bar {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .dot-wrap {
          position: relative;
          cursor: pointer;
          width: 36px;
          height: 3px;
          background: rgba(255,255,255,0.40);
          border-radius: 2px;
          overflow: hidden;
          transition: width 0.3s ease;
        }
        .dot-wrap.active { width: 60px; }
        .dot-fill {
          position: absolute;
          top: 0; left: 0;
          height: 100%;
          background: var(--bn-green);
          border-radius: 2px;
          transition: width 0.1s linear;
        }

        /* ── Numéro slide ── */
        .slide-counter {
          position: absolute;
          bottom: 36px;
          right: 52px;
          z-index: 10;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.78);
        }
        .slide-counter strong {
          color: var(--bn-green);
          font-size: 1rem;
          font-weight: 600;
        }

        @media (max-width: 700px) {
          .slide-counter { display: none; }
          .dots-bar { bottom: 60px; }
        }

        /* ── Scroll hint ── */
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(7px); }
        }
        .scroll-hint {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.75);
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          animation: bounce 2.2s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>

      <section className="hero-root">

        {/* ── Médias : tous rendus, seul le courant visible ── */}
        {slides.map((s, i) => {
          const isActive = i === current;
          const isPrev   = i === prev;
          const animClass = isActive
            ? (direction > 0 ? "slide-enter-right" : "slide-enter-left")
            : isPrev ? "slide-exit" : "";

          return s.type === "video" ? (
            <video
              key={i}
              ref={(el) => { videoRefs.current[i] = el; }}
              className={`slide-media ${animClass}`}
              src={s.src}
              muted
              loop
              playsInline
              style={{
                zIndex: isActive ? 1 : isPrev ? 0 : -1,
                display: isActive || isPrev ? "block" : "none",
              }}
            />
          ) : (
            <img
              key={i}
              className={`slide-media ${animClass}`}
              src={s.src}
              alt={s.title}
              style={{
                zIndex: isActive ? 1 : isPrev ? 0 : -1,
                display: isActive || isPrev ? "block" : "none",
              }}
            />
          );
        })}

        {/* ── Overlay ── */}
        <div className="hero-overlay" />

        {/* ── Panneau texte ── */}
        <div className="text-panel">
          <div className="text-inner">
            <span className={`text-tag ${textReady ? "ready" : ""}`} key={`tag-${current}`}>
              {slide.tag}
            </span>

            <h1 className={`text-title ${textReady ? "ready" : ""}`} key={`title-${current}`}>
              {slide.title}
            </h1>

            <div className={`text-divider ${textReady ? "ready" : ""}`} key={`div-${current}`} />

            <p className={`text-desc ${textReady ? "ready" : ""}`} key={`desc-${current}`}>
              {slide.description}
            </p>

            <Link
              href="/nos-evenements"
              className={`hero-cta ${textReady ? "ready" : ""}`}
              key={`cta-${current}`}
            >
              <span>Tout savoir</span>
              <span className="cta-arrow">→</span>
            </Link>
          </div>
        </div>

        {/* ── Flèches navigation ── */}
        <button className="nav-arrow left" onClick={goPrev} aria-label="Slide précédent">
          ←
        </button>
        <button className="nav-arrow right" onClick={goNext} aria-label="Slide suivant">
          →
        </button>

        {/* ── Bullets / barre de progression ── */}
        <div className="dots-bar">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`dot-wrap ${i === current ? "active" : ""}`}
              onClick={() => goTo(i, i > current ? 1 : -1)}
            >
              <div
                className="dot-fill"
                style={{ width: i === current ? `${progress}%` : i < current ? "100%" : "0%" }}
              />
            </div>
          ))}
        </div>

        {/* ── Compteur ── */}
        <div className="slide-counter">
          <strong>0{current + 1}</strong> / 0{slides.length}
        </div>

        {/* ── Scroll hint ── */}
        <div className="scroll-hint">
          <span>Défiler</span>
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
            <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.2"/>
            <circle cx="7" cy="6" r="2" fill="currentColor" opacity="0.7"/>
          </svg>
        </div>

      </section>
    </>
  );
}