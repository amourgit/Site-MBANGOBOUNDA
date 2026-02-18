"use client";

import { useState, useEffect, useRef, type ChangeEvent, type CSSProperties, type FormEvent } from "react";
import Image from "next/image";

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

// ─── Motifs décoratifs africains (SVG inline) ─────────────────────────────────
function AfricanPattern({ opacity = 0.04, color = "var(--bn-green)" }) {
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="afro-pat" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          {/* Losange central */}
          <polygon points="20,4 36,20 20,36 4,20" fill="none" stroke={color} strokeWidth="0.8" opacity={opacity * 10} />
          {/* Points aux coins */}
          <circle cx="0"  cy="0"  r="1.5" fill={color} opacity={opacity * 8} />
          <circle cx="40" cy="0"  r="1.5" fill={color} opacity={opacity * 8} />
          <circle cx="0"  cy="40" r="1.5" fill={color} opacity={opacity * 8} />
          <circle cx="40" cy="40" r="1.5" fill={color} opacity={opacity * 8} />
          {/* Centre */}
          <circle cx="20" cy="20" r="2" fill={color} opacity={opacity * 6} />
          {/* Lignes diagonales */}
          <line x1="0" y1="0"  x2="8"  y2="8"  stroke={color} strokeWidth="0.5" opacity={opacity * 5} />
          <line x1="40" y1="0" x2="32" y2="8"  stroke={color} strokeWidth="0.5" opacity={opacity * 5} />
          <line x1="0" y1="40" x2="8"  y2="32" stroke={color} strokeWidth="0.5" opacity={opacity * 5} />
          <line x1="40" y1="40" x2="32" y2="32" stroke={color} strokeWidth="0.5" opacity={opacity * 5} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#afro-pat)" />
    </svg>
  );
}

// ─── Champ de formulaire animé ────────────────────────────────────────────────
type FormData = {
  nom: string;
  prenom: string;
  email: string;
  motif: string;
};

type FormFieldProps = {
  label: string;
  type?: "text" | "email" | "textarea";
  name: keyof FormData;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  optional?: boolean;
};

function FormField({ label, type = "text", name, value, onChange, required = false, placeholder, rows, optional }: FormFieldProps) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e);
    setHasValue(e.target.value.length > 0);
  };

  const isActive = focused || hasValue;
  const isTextarea = type === "textarea";

  const sharedStyle: CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    outline: "none",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.05rem",
    color: "#ffffff",
    resize: "none" as const,
    lineHeight: 1.7,
    padding: isTextarea ? "28px 0 12px" : "24px 0 8px",
    display: "block",
    caretColor: "var(--bn-green)",
  };

  return (
    <div
      style={{
        position: "relative",
        marginBottom: "8px",
      }}
    >
      {/* Label flottant */}
      <label
        style={{
          position: "absolute",
          top: isActive ? "6px" : isTextarea ? "20px" : "18px",
          left: 0,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: isActive ? "0.68rem" : "0.98rem",
          letterSpacing: isActive ? "0.20em" : "0.04em",
          textTransform: isActive ? "uppercase" : "none",
          color: focused ? "var(--bn-green)" : isActive ? "rgba(var(--bn-green-rgb),0.78)" : "rgba(255,255,255,0.62)",
          transition: "all 0.35s cubic-bezier(0.34,1.1,0.64,1)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {label}
        {optional && (
          <span style={{ marginLeft: "8px", fontSize: "0.60rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            — facultatif
          </span>
        )}
      </label>

      {/* Input ou Textarea */}
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={rows || 5}
          required={required}
          placeholder=""
          style={sharedStyle}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          placeholder=""
          style={sharedStyle}
        />
      )}

      {/* Ligne bas animée */}
      <div style={{ position: "relative", height: "1px" }}>
        {/* Ligne de base */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.12)",
          borderRadius: "2px",
        }} />
        {/* Ligne active */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, var(--bn-green), var(--bn-white))",
          borderRadius: "2px",
          transform: focused ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
        }} />
      </div>
    </div>
  );
}

// ─── Particules flottantes ────────────────────────────────────────────────────
function FloatingParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x:    5 + ((i * 37) % 90),
    y:    5 + ((i * 53) % 90),
    size: 1.5 + (i % 4) * 0.8,
    dur:  6 + (i % 5) * 2.2,
    delay: (i % 7) * 0.9,
    driftX: ((i % 5) - 2) * 18,
    driftY: ((i % 4) - 2) * 22,
  }));

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      <style>{`
        ${particles.map(p => `
          @keyframes float-${p.id} {
            0%   { transform: translate(0px, 0px) scale(1);   opacity: 0.4; }
            33%  { transform: translate(${p.driftX * 0.5}px, ${p.driftY}px) scale(1.3); opacity: 0.8; }
            66%  { transform: translate(${p.driftX}px, ${p.driftY * 0.4}px) scale(0.8); opacity: 0.5; }
            100% { transform: translate(0px, 0px) scale(1);   opacity: 0.4; }
          }
        `).join("")}
      `}</style>
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top:  `${p.y}%`,
            width:  `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: p.id % 3 === 0 ? "var(--bn-green)" : p.id % 3 === 1 ? "var(--bn-white)" : "var(--bn-green)",
            animation: `float-${p.id} ${p.dur}s ${p.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────
export default function SectionContact() {
  const sectionRef  = useRef<HTMLElement | null>(null);
  const bgRef       = useRef<HTMLDivElement | null>(null);
  const orb1Ref     = useRef<HTMLDivElement | null>(null);
  const orb2Ref     = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData]   = useState<FormData>({ nom: "", prenom: "", email: "", motif: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending,   setSending]   = useState(false);
  const [errors,    setErrors]    = useState<Partial<Record<keyof FormData, string>>>({});

  const [headerRef, headerInView] = useInView(0.2);
  const [formRef,   formInView]   = useInView(0.1);
  const [infoRef,   infoInView]   = useInView(0.2);

  // ── Parallax au scroll ────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect   = section.getBoundingClientRect();
      const vh     = window.innerHeight;
      const prog   = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
      const offset = (prog - 0.5) * 120;

      if (bgRef.current)   bgRef.current.style.transform   = `translateY(${offset * 0.5}px)`;
      if (orb1Ref.current) orb1Ref.current.style.transform = `translate(${offset * 0.18}px, ${offset * 0.30}px)`;
      if (orb2Ref.current) orb2Ref.current.style.transform = `translate(${-offset * 0.22}px, ${offset * 0.15}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Gestion formulaire ────────────────────────────────────────────────────
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const key = name as keyof FormData;
    setFormData(p => ({ ...p, [key]: value }));
    if (errors[key]) setErrors(p => ({ ...p, [key]: "" }));
  };

  const validate = () => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!formData.email.trim())  errs.email  = "L'email est requis.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Email invalide.";
    if (!formData.motif.trim())  errs.motif  = "Veuillez décrire votre motif.";
    return errs;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSending(true);
    // Simulation envoi
    setTimeout(() => { setSending(false); setSubmitted(true); }, 1800);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

        .contact-root {
          position: relative;
          background: #040201;
          padding: 0;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* ── Bouton submit ── */
        .submit-btn {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 16px 44px;
          border-radius: 4px;
          border: 1.5px solid rgba(var(--bn-green-rgb),0.70);
          color: rgba(255,255,255,0.95);
          background: transparent;
          cursor: pointer;
          width: 100%;
          transition: color 0.35s ease, border-color 0.35s ease;
        }
        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--bn-green), var(--bn-white));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.45s cubic-bezier(0.4,0,0.2,1);
          border-radius: 3px;
        }
        .submit-btn:hover::before,
        .submit-btn.sending::before { transform: scaleX(1); }
        .submit-btn:hover,
        .submit-btn.sending { color: #0B0F0C; border-color: var(--bn-green); }
        .submit-btn span { position: relative; z-index: 1; }

        /* ── Spinner ── */
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(26,18,9,0.3);
          border-top-color: #1A1209;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          position: relative; z-index: 1;
        }

        /* ── Succès ── */
        @keyframes successPop {
          0%   { transform: scale(0.7); opacity: 0; }
          60%  { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .success-msg { animation: successPop 0.7s cubic-bezier(0.34,1.56,0.64,1) both; }

        /* ── Erreur champ ── */
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20%,60% { transform: translateX(-6px); }
          40%,80% { transform: translateX(6px); }
        }
        .field-error { animation: shake 0.4s ease; }

        /* ── Orbes ── */
        @keyframes orbPulse {
          0%,100% { opacity: 0.55; }
          50%      { opacity: 0.80; }
        }

        /* ── Layout grille ── */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 60px;
          position: relative;
          z-index: 5;
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; padding: 80px 28px; gap: 60px; }
        }
        @media (max-width: 480px) {
          .contact-grid { padding: 80px 20px; }
        }
      `}</style>

      <section ref={sectionRef} className="contact-root">

        {/* ── Fond parallax ── */}
        <div
          ref={bgRef}
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 30% 25%, rgba(var(--bn-green-rgb),0.10) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(var(--bn-green-rgb),0.06) 0%, transparent 45%), radial-gradient(circle at 50% 80%, rgba(var(--bn-green-rgb),0.05) 0%, transparent 55%)",
            zIndex: 0,
            willChange: "transform",
          }}
        />

        {/* ── Pattern africain ── */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <AfricanPattern opacity={0.025} color="var(--bn-green)" />
        </div>

        {/* ── Orbe 1 (gauche haut) ── */}
        <div
          ref={orb1Ref}
          style={{
            position: "absolute",
            top: "-120px",
            left: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(var(--bn-green-rgb),0.16) 0%, transparent 70%)",
            animation: "orbPulse 6s ease-in-out infinite",
            zIndex: 2,
            willChange: "transform",
            pointerEvents: "none",
          }}
        />

        {/* ── Orbe 2 (droite bas) ── */}
        <div
          ref={orb2Ref}
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-8%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,133,106,0.10) 0%, transparent 70%)",
            animation: "orbPulse 8s 2s ease-in-out infinite",
            zIndex: 2,
            willChange: "transform",
            pointerEvents: "none",
          }}
        />

        {/* ── Particules ── */}
        <div style={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none" }}>
          <FloatingParticles />
        </div>

        {/* ── Ligne diagonale décorative ── */}
        <div style={{
          position: "absolute",
          top: 0, bottom: 0,
          left: "50%",
          width: "1px",
          background: "linear-gradient(to bottom, transparent 0%, rgba(var(--bn-green-rgb),0.22) 20%, rgba(var(--bn-green-rgb),0.22) 80%, transparent 100%)",
          zIndex: 4,
          pointerEvents: "none",
        }} />

        {/* ── Contenu principal ── */}
        <div className="contact-grid">

          {/* ─── Colonne gauche : Info ─────────────────────────────────── */}
          <div
            ref={infoRef}
            style={{
              paddingRight: "60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRight: "1px solid rgba(var(--bn-green-rgb),0.16)",
              opacity: infoInView ? 1 : 0,
              transform: infoInView ? "translateX(0)" : "translateX(-50px)",
              transition: "opacity 1s ease, transform 1s cubic-bezier(0.34,1.1,0.64,1)",
            }}
          >
            {/* Étiquette */}
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.30em",
              textTransform: "uppercase",
              color: "var(--bn-green)",
              marginBottom: "28px",
            }}>
              <span style={{ width: "36px", height: "1px", background: "var(--bn-green)", display: "block" }} />
              Nous Joindre
            </span>

            {/* Titre */}
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 900,
              color: "#ffffff",
              margin: "0 0 24px 0",
              lineHeight: 1.10,
            }}>
              Parlez-nous,<br />
              <em style={{ color: "var(--bn-green)", fontStyle: "italic" }}>nous vous écoutons</em>
            </h2>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.08rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.78)",
              margin: "0 0 48px 0",
            }}>
              Vous souhaitez rejoindre le clan, signaler une situation d'urgence familiale,
              proposer un projet ou simplement nous saluer ? Notre porte est toujours ouverte.
            </p>

            {/* Infos contact */}
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 3h12a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="var(--bn-green)" strokeWidth="1.3"/>
                    <path d="M2 4l7 6 7-6" stroke="var(--bn-green)" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
                label: "Email",
                value: "contact@clan-nguyen.ga",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2C6.24 2 4 4.24 4 7c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="var(--bn-green)" strokeWidth="1.3"/>
                    <circle cx="9" cy="7" r="2" stroke="var(--bn-green)" strokeWidth="1.3"/>
                  </svg>
                ),
                label: "Siège social",
                value: "Libreville, Gabon",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="var(--bn-green)" strokeWidth="1.3"/>
                    <path d="M9 5v4l3 2" stroke="var(--bn-green)" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
                label: "Disponibilité",
                value: "Lun – Sam, 8h00 – 18h00",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  marginBottom: "22px",
                  opacity: infoInView ? 1 : 0,
                  transform: infoInView ? "translateX(0)" : "translateX(-30px)",
                  transition: `opacity 0.75s ${0.25 + i * 0.12}s ease, transform 0.75s ${0.25 + i * 0.12}s cubic-bezier(0.34,1.1,0.64,1)`,
                }}
              >
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(var(--bn-green-rgb),0.10)",
                  border: "1px solid rgba(var(--bn-green-rgb),0.28)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(var(--bn-green-rgb),0.80)",
                    marginBottom: "3px",
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.78)",
                  }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}

            {/* Devise */}
            <div style={{
              marginTop: "16px",
              paddingTop: "28px",
              borderTop: "1px solid rgba(var(--bn-green-rgb),0.18)",
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.6,
            }}>
              « Unité · Amour · Prospérité »
            </div>
          </div>

          {/* ─── Colonne droite : Formulaire ──────────────────────────── */}
          <div
            ref={formRef}
            style={{
              paddingLeft: "60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              opacity: formInView ? 1 : 0,
              transform: formInView ? "translateX(0)" : "translateX(50px)",
              transition: "opacity 1s 0.15s ease, transform 1s 0.15s cubic-bezier(0.34,1.1,0.64,1)",
            }}
          >
            {submitted ? (
              /* ── Message succès ── */
              <div className="success-msg" style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "rgba(200,169,110,0.12)",
                  border: "1.5px solid rgba(200,169,110,0.40)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  overflow: "hidden",
                }}>
                  <Image
                    src="/images/logo-BN.png"
                    alt="Logo BA NGOMBOUNDA"
                    width={72}
                    height={72}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: "0 0 14px 0",
                }}>
                  Message envoyé !
                </h3>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.75,
                  margin: "0 0 32px 0",
                }}>
                  Merci de nous avoir contactés. Un membre du clan vous répondra dans les meilleurs délais.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ nom: "", prenom: "", email: "", motif: "" }); }}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.82rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#C8A96E",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(200,169,110,0.35)",
                  }}
                >
                  Envoyer un autre message →
                </button>
              </div>
            ) : (
              /* ── Formulaire ── */
              <form onSubmit={handleSubmit} noValidate>
                {/* Titre formulaire */}
                <div style={{ marginBottom: "40px" }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.68rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "rgba(200,169,110,0.55)",
                    display: "block",
                    marginBottom: "10px",
                  }}>
                    Votre message
                  </span>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.55rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    margin: 0,
                    lineHeight: 1.2,
                  }}>
                    Écrivez-nous
                  </h3>
                </div>

                {/* Nom & Prénom */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "28px" }}>
                  <FormField
                    label="Nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    optional
                  />
                  <FormField
                    label="Prénom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    optional
                  />
                </div>

                {/* Email */}
                <div
                  className={errors.email ? "field-error" : ""}
                  style={{ marginBottom: "28px" }}
                >
                  <FormField
                    label="Adresse email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "0.78rem",
                      color: "#D4856A",
                      margin: "6px 0 0",
                      letterSpacing: "0.04em",
                    }}>
                      ⚠ {errors.email}
                    </p>
                  )}
                </div>

                {/* Motif */}
                <div
                  className={errors.motif ? "field-error" : ""}
                  style={{ marginBottom: "36px" }}
                >
                  <FormField
                    label="Motif de votre message"
                    type="textarea"
                    name="motif"
                    value={formData.motif}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                  {errors.motif && (
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "0.78rem",
                      color: "#D4856A",
                      margin: "6px 0 0",
                      letterSpacing: "0.04em",
                    }}>
                      ⚠ {errors.motif}
                    </p>
                  )}
                  {/* Compteur de caractères */}
                  <div style={{
                    textAlign: "right",
                    marginTop: "6px",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.70rem",
                    color: "rgba(255,255,255,0.22)",
                    letterSpacing: "0.08em",
                  }}>
                    {formData.motif.length} caractères
                  </div>
                </div>

                {/* Bouton */}
                <button
                  type="submit"
                  className={`submit-btn ${sending ? "sending" : ""}`}
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      <span>Envoi en cours</span>
                      <div className="spinner" />
                    </>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <span style={{ position: "relative", zIndex: 1, fontSize: "1.1rem" }}>✦</span>
                    </>
                  )}
                </button>

                {/* Note */}
                <p style={{
                  marginTop: "16px",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.22)",
                  textAlign: "center",
                  letterSpacing: "0.06em",
                  lineHeight: 1.6,
                }}>
                  Vos informations sont confidentielles et ne seront jamais partagées en dehors du clan.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}