(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/sections/sect-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const navLinks = [
    {
        href: "/",
        label: "Accueil",
        icon: "🏠"
    },
    {
        href: "/notre-histoire",
        label: "Nos Racines",
        icon: "🌳"
    },
    {
        href: "/nos-evenements",
        label: "La Vie du Clan",
        icon: "🥁"
    },
    {
        href: "/nos-albums",
        label: "Nos Mémoires",
        icon: "📸"
    },
    {
        href: "/notre-vocation",
        label: "Notre Âme",
        icon: "🌍"
    },
    {
        href: "/nous-contacter",
        label: "Nous Joindre",
        icon: "✉️"
    }
];
// Breakpoint à partir duquel on bascule en menu desktop
const DESKTOP_BP = 900;
function Header() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDesktop, setIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // SSR-safe : false par défaut
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    /* ── Détection viewport ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const check = {
                "Header.useEffect.check": ()=>setIsDesktop(window.innerWidth >= DESKTOP_BP)
            }["Header.useEffect.check"];
            check();
            window.addEventListener("resize", check, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener("resize", check)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    /* ── Scroll ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const onScroll = {
                "Header.useEffect.onScroll": ()=>setScrolled(window.scrollY > 60)
            }["Header.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    /* ── Fermer menu sur navigation ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            setMenuOpen(false);
        }
    }["Header.useEffect"], [
        pathname
    ]);
    /* ── Bloquer le scroll body quand menu mobile ouvert ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            document.body.style.overflow = !isDesktop && menuOpen ? "hidden" : "";
            return ({
                "Header.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        menuOpen,
        isDesktop
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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

        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 60;
          background: rgba(0,0,0,0);
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          pointer-events: none;
          transition: background 0.28s ease;
        }
        .mobile-overlay.open {
          background: rgba(0,0,0,0.46);
          backdrop-filter: blur(10px) saturate(140%);
          -webkit-backdrop-filter: blur(10px) saturate(140%);
          pointer-events: auto;
        }

        .mobile-panel {
          width: min(100%, 1160px);
          margin: 0 auto;
          max-height: 70vh;
          overflow: auto;
          border-radius: 0 0 18px 18px;
          background: rgba(18, 10, 4, 0.88);
          backdrop-filter: blur(22px) saturate(170%);
          -webkit-backdrop-filter: blur(22px) saturate(170%);
          border: 1px solid rgba(var(--bn-green-rgb),0.24);
          border-top: none;
          box-shadow: 0 18px 70px rgba(0,0,0,0.55);
          transform: translateY(-110%);
          will-change: transform;
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .mobile-panel.open {
          transform: translateY(0);
        }

        .mobile-panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-bottom: 1px solid rgba(var(--bn-green-rgb),0.18);
        }
        .mobile-panel-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.78rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: rgba(250,243,232,0.70);
        }
        .mobile-close {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(var(--bn-green-rgb),0.10);
          border: 1px solid rgba(var(--bn-green-rgb),0.20);
          color: rgba(250,243,232,0.92);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .mobile-close:hover {
          background: rgba(var(--bn-green-rgb),0.16);
          transform: scale(1.03);
        }

        .mobile-list {
          list-style: none;
          margin: 0;
          padding: 10px 12px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .mob-link {
          border: 1px solid transparent;
        }
        .mob-link:hover,
        .mob-link.is-active {
          border-color: rgba(var(--bn-green-rgb),0.22);
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-header.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
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
                    fontFamily: "'Lato', sans-serif"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: `nav-pill w-full ${scrolled ? "nav-frosted" : "nav-transparent"}`,
                    style: {
                        maxWidth: "1160px",
                        pointerEvents: "auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "10px 20px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "logo-anim",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "logo-emblem",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/logo-BN.png",
                                                alt: "Logo BA NGOMBOUNDA",
                                                width: 42,
                                                height: 42,
                                                style: {
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/sect-header.tsx",
                                                lineNumber: 431,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/sect-header.tsx",
                                            lineNumber: 430,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "logo-name",
                                                    children: "BA NGOMBOUNDA"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-header.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "logo-sub",
                                                    children: "Clan & Tradition"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-header.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/sect-header.tsx",
                                            lineNumber: 439,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/sect-header.tsx",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this),
                                isDesktop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "2px",
                                        listStyle: "none",
                                        margin: "0",
                                        padding: "0",
                                        flex: 1,
                                        justifyContent: "center"
                                    },
                                    children: navLinks.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "nav-link-item",
                                            style: {
                                                animationDelay: `${0.08 + i * 0.06}s`
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: `nav-link-inner ${pathname === link.href ? "is-active" : ""}`,
                                                children: [
                                                    link.label,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "nav-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/sect-header.tsx",
                                                        lineNumber: 468,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "link-bar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/sect-header.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/sect-header.tsx",
                                                lineNumber: 463,
                                                columnNumber: 21
                                            }, this)
                                        }, link.href, false, {
                                            fileName: "[project]/components/sections/sect-header.tsx",
                                            lineNumber: 458,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/sect-header.tsx",
                                    lineNumber: 447,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        flexShrink: 0
                                    },
                                    children: isDesktop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/nous-contacter",
                                        className: "cta-btn",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Rejoindre"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/sect-header.tsx",
                                            lineNumber: 480,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/sect-header.tsx",
                                        lineNumber: 479,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "ham-btn",
                                        onClick: ()=>setMenuOpen(!menuOpen),
                                        "aria-label": menuOpen ? "Fermer le menu" : "Ouvrir le menu",
                                        "aria-expanded": menuOpen,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ham-line",
                                                style: {
                                                    width: "24px",
                                                    transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/sect-header.tsx",
                                                lineNumber: 489,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ham-line",
                                                style: {
                                                    width: "17px",
                                                    opacity: menuOpen ? 0 : 1
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/sect-header.tsx",
                                                lineNumber: 493,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ham-line",
                                                style: {
                                                    width: "24px",
                                                    transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/sect-header.tsx",
                                                lineNumber: 497,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/sect-header.tsx",
                                        lineNumber: 483,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/sect-header.tsx",
                                    lineNumber: 477,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/sect-header.tsx",
                            lineNumber: 421,
                            columnNumber: 11
                        }, this),
                        !isDesktop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mobile-overlay ${menuOpen ? "open" : ""}`,
                            onClick: ()=>setMenuOpen(false),
                            "aria-hidden": !menuOpen,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mobile-panel ${menuOpen ? "open" : ""}`,
                                onClick: (e)=>e.stopPropagation(),
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Menu de navigation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mobile-panel-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mobile-panel-title",
                                                children: "Navigation"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/sect-header.tsx",
                                                lineNumber: 520,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "mobile-close",
                                                onClick: ()=>setMenuOpen(false),
                                                "aria-label": "Fermer le menu",
                                                children: "✕"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/sect-header.tsx",
                                                lineNumber: 521,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/sect-header.tsx",
                                        lineNumber: 519,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mobile-list",
                                        children: [
                                            navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: link.href,
                                                        className: `mob-link ${pathname === link.href ? "is-active" : ""}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: "1.1rem"
                                                                },
                                                                children: link.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/sect-header.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    gap: "2px"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            lineHeight: 1.1
                                                                        },
                                                                        children: link.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/sections/sect-header.tsx",
                                                                        lineNumber: 540,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: "0.70rem",
                                                                            letterSpacing: "0.20em",
                                                                            textTransform: "uppercase",
                                                                            color: "rgba(250,243,232,0.52)",
                                                                            lineHeight: 1.1
                                                                        },
                                                                        children: "Découvrir"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/sections/sect-header.tsx",
                                                                        lineNumber: 541,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/sections/sect-header.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/sect-header.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 23
                                                    }, this)
                                                }, link.href, false, {
                                                    fileName: "[project]/components/sections/sect-header.tsx",
                                                    lineNumber: 533,
                                                    columnNumber: 21
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mob-divider"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-header.tsx",
                                                    lineNumber: 555,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/sect-header.tsx",
                                                lineNumber: 555,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/nous-contacter",
                                                    className: "cta-btn",
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Rejoindre le Clan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/sect-header.tsx",
                                                        lineNumber: 558,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-header.tsx",
                                                    lineNumber: 557,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/sect-header.tsx",
                                                lineNumber: 556,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/sect-header.tsx",
                                        lineNumber: 531,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/sect-header.tsx",
                                lineNumber: 512,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-header.tsx",
                            lineNumber: 507,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/sect-header.tsx",
                    lineNumber: 415,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-header.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Header, "QkXCWNdUErvfpeWaSJed7SNMD+E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/sect-carrousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const slides = [
    {
        type: "image",
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1800&q=90",
        tag: "Notre Clan",
        title: "Ensemble,\nnous sommes\nplus forts",
        description: "Depuis des générations, notre famille porte les valeurs de l'unité, du partage et de la dignité. Chaque membre est un maillon précieux de cette chaîne sacrée."
    },
    {
        type: "image",
        src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1800&q=90",
        tag: "Les Anciens",
        title: "La sagesse\nde nos racines",
        description: "Nos aînés sont les gardiens de la mémoire. Leur sagesse guide nos pas et éclaire notre chemin vers l'avenir. Nous les honorons à chaque instant."
    },
    {
        type: "video",
        src: "https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4",
        tag: "La Vie du Clan",
        title: "Célébrons\nla vie ensemble",
        description: "Mariages, baptêmes, fêtes traditionnelles… chaque rassemblement est une occasion de renforcer nos liens et de perpétuer nos us et coutumes ancestraux."
    },
    {
        type: "image",
        src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1800&q=90",
        tag: "Notre Mission",
        title: "Prendre soin\ndes nôtres",
        description: "Veuves, personnes âgées, enfants vulnérables — personne n'est laissé pour compte. La solidarité familiale est notre engagement le plus profond."
    }
];
const AUTOPLAY_DELAY = 6000;
function HeroCarousel() {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [prev, setPrev] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1); // 1=next, -1=prev
    const [textReady, setTextReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const videoRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // ── Aller à un slide ────────────────────────────────────────────────────
    const goTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroCarousel.useCallback[goTo]": (index, dir = 1)=>{
            if (index === current) return;
            setTextReady(false);
            setPrev(current);
            setDirection(dir);
            setProgress(0);
            setTimeout({
                "HeroCarousel.useCallback[goTo]": ()=>{
                    setCurrent(index);
                    setTimeout({
                        "HeroCarousel.useCallback[goTo]": ()=>setTextReady(true)
                    }["HeroCarousel.useCallback[goTo]"], 120);
                }
            }["HeroCarousel.useCallback[goTo]"], 60);
        }
    }["HeroCarousel.useCallback[goTo]"], [
        current
    ]);
    const goNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroCarousel.useCallback[goNext]": ()=>goTo((current + 1) % slides.length, 1)
    }["HeroCarousel.useCallback[goNext]"], [
        current,
        goTo
    ]);
    const goPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroCarousel.useCallback[goPrev]": ()=>goTo((current - 1 + slides.length) % slides.length, -1)
    }["HeroCarousel.useCallback[goPrev]"], [
        current,
        goTo
    ]);
    // ── Autoplay + barre de progression ────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroCarousel.useEffect": ()=>{
            setProgress(0);
            startRef.current = performance.now();
            const tick = {
                "HeroCarousel.useEffect.tick": (now)=>{
                    const elapsed = now - startRef.current;
                    setProgress(Math.min(elapsed / AUTOPLAY_DELAY * 100, 100));
                    if (elapsed < AUTOPLAY_DELAY) {
                        progressRef.current = requestAnimationFrame(tick);
                    }
                }
            }["HeroCarousel.useEffect.tick"];
            progressRef.current = requestAnimationFrame(tick);
            timerRef.current = setTimeout(goNext, AUTOPLAY_DELAY);
            return ({
                "HeroCarousel.useEffect": ()=>{
                    if (timerRef.current) clearTimeout(timerRef.current);
                    if (progressRef.current) cancelAnimationFrame(progressRef.current);
                }
            })["HeroCarousel.useEffect"];
        }
    }["HeroCarousel.useEffect"], [
        current,
        goNext
    ]);
    // ── Lecture vidéo auto ──────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroCarousel.useEffect": ()=>{
            videoRefs.current.forEach({
                "HeroCarousel.useEffect": (v, i)=>{
                    if (!v) return;
                    if (i === current) {
                        v.currentTime = 0;
                        v.play().catch({
                            "HeroCarousel.useEffect": ()=>{}
                        }["HeroCarousel.useEffect"]);
                    } else v.pause();
                }
            }["HeroCarousel.useEffect"]);
        }
    }["HeroCarousel.useEffect"], [
        current
    ]);
    const slide = slides[current];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-carrousel.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero-root",
                children: [
                    slides.map((s, i)=>{
                        const isActive = i === current;
                        const isPrev = i === prev;
                        const animClass = isActive ? direction > 0 ? "slide-enter-right" : "slide-enter-left" : isPrev ? "slide-exit" : "";
                        return s.type === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            ref: (el)=>{
                                videoRefs.current[i] = el;
                            },
                            className: `slide-media ${animClass}`,
                            src: s.src,
                            muted: true,
                            loop: true,
                            playsInline: true,
                            style: {
                                zIndex: isActive ? 1 : isPrev ? 0 : -1,
                                display: isActive || isPrev ? "block" : "none"
                            }
                        }, i, false, {
                            fileName: "[project]/components/sections/sect-carrousel.tsx",
                            lineNumber: 461,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: `slide-media ${animClass}`,
                            src: s.src,
                            alt: s.title,
                            style: {
                                zIndex: isActive ? 1 : isPrev ? 0 : -1,
                                display: isActive || isPrev ? "block" : "none"
                            }
                        }, i, false, {
                            fileName: "[project]/components/sections/sect-carrousel.tsx",
                            lineNumber: 475,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-overlay"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-carrousel.tsx",
                        lineNumber: 489,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-panel",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-tag ${textReady ? "ready" : ""}`,
                                    children: slide.tag
                                }, `tag-${current}`, false, {
                                    fileName: "[project]/components/sections/sect-carrousel.tsx",
                                    lineNumber: 494,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: `text-title ${textReady ? "ready" : ""}`,
                                    children: slide.title
                                }, `title-${current}`, false, {
                                    fileName: "[project]/components/sections/sect-carrousel.tsx",
                                    lineNumber: 498,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `text-divider ${textReady ? "ready" : ""}`
                                }, `div-${current}`, false, {
                                    fileName: "[project]/components/sections/sect-carrousel.tsx",
                                    lineNumber: 502,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-desc ${textReady ? "ready" : ""}`,
                                    children: slide.description
                                }, `desc-${current}`, false, {
                                    fileName: "[project]/components/sections/sect-carrousel.tsx",
                                    lineNumber: 504,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/nos-evenements",
                                    className: `hero-cta ${textReady ? "ready" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Tout savoir"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/sect-carrousel.tsx",
                                            lineNumber: 513,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "cta-arrow",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/sect-carrousel.tsx",
                                            lineNumber: 514,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, `cta-${current}`, true, {
                                    fileName: "[project]/components/sections/sect-carrousel.tsx",
                                    lineNumber: 508,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/sect-carrousel.tsx",
                            lineNumber: 493,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-carrousel.tsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-arrow left",
                        onClick: goPrev,
                        "aria-label": "Slide précédent",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-carrousel.tsx",
                        lineNumber: 520,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-arrow right",
                        onClick: goNext,
                        "aria-label": "Slide suivant",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-carrousel.tsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dots-bar",
                        children: slides.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `dot-wrap ${i === current ? "active" : ""}`,
                                onClick: ()=>goTo(i, i > current ? 1 : -1),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "dot-fill",
                                    style: {
                                        width: i === current ? `${progress}%` : i < current ? "100%" : "0%"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/sect-carrousel.tsx",
                                    lineNumber: 535,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/sections/sect-carrousel.tsx",
                                lineNumber: 530,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-carrousel.tsx",
                        lineNumber: 528,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "slide-counter",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    "0",
                                    current + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/sect-carrousel.tsx",
                                lineNumber: 545,
                                columnNumber: 11
                            }, this),
                            " / 0",
                            slides.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/sect-carrousel.tsx",
                        lineNumber: 544,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scroll-hint",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Défiler"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-carrousel.tsx",
                                lineNumber: 550,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "14",
                                height: "20",
                                viewBox: "0 0 14 20",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "1",
                                        y: "1",
                                        width: "12",
                                        height: "18",
                                        rx: "6",
                                        stroke: "currentColor",
                                        strokeWidth: "1.2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/sect-carrousel.tsx",
                                        lineNumber: 552,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "7",
                                        cy: "6",
                                        r: "2",
                                        fill: "currentColor",
                                        opacity: "0.7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/sect-carrousel.tsx",
                                        lineNumber: 553,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/sect-carrousel.tsx",
                                lineNumber: 551,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/sect-carrousel.tsx",
                        lineNumber: 549,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-carrousel.tsx",
                lineNumber: 450,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(HeroCarousel, "Rp1RGrNiy0Vp1vScZNqSjMF3ph0=");
_c = HeroCarousel;
var _c;
__turbopack_context__.k.register(_c, "HeroCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/sect-histoire.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHistoire
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
const periodes = [
    {
        debut: "1920",
        fin: "1955",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=85",
        titre: "Les Temps des Fondateurs",
        description: "Au cœur de la savane, nos ancêtres posèrent les premières pierres de ce qui allait devenir notre grande famille. Portés par la foi et la terre, ils bâtirent des alliances solides, transmirent des rites sacrés et gravèrent dans la mémoire collective les valeurs qui nous animent encore aujourd'hui."
    },
    {
        debut: "1956",
        fin: "1985",
        image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=900&q=85",
        titre: "L'Ère de l'Expansion",
        description: "Les enfants des fondateurs s'élancèrent vers de nouveaux horizons — les villes, les études, les opportunités — sans jamais couper le cordon avec la terre nourricière. Le clan s'agrandit, les unions se tissèrent entre familles alliées, et notre identité prit une nouvelle dimension, plus riche, plus diverse."
    },
    {
        debut: "1986",
        fin: "Aujourd'hui",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=85",
        titre: "La Génération du Renouveau",
        description: "Forts de notre héritage, nous entrons dans une ère nouvelle. Les jeunes du clan reprennent le flambeau avec fierté : préserver nos traditions tout en embrassant le monde moderne. Solidaires et connectés, nous bâtissons ensemble l'avenir de notre famille pour les générations à venir."
    }
];
function useInView(threshold = 0.25) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setInView(true);
                        obs.disconnect();
                    }
                }
            }["useInView.useEffect"], {
                threshold
            });
            obs.observe(el);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return [
        ref,
        inView
    ];
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
function PeriodeCard({ periode, index }) {
    _s1();
    const isLeft = index % 2 === 0;
    const [ref, inView] = useInView(0.2);
    const delay = 0.1;
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PeriodeCard.useEffect": ()=>{
            const check = {
                "PeriodeCard.useEffect.check": ()=>setIsMobile(window.innerWidth <= 700)
            }["PeriodeCard.useEffect.check"];
            check();
            window.addEventListener("resize", check, {
                passive: true
            });
            return ({
                "PeriodeCard.useEffect": ()=>window.removeEventListener("resize", check)
            })["PeriodeCard.useEffect"];
        }
    }["PeriodeCard.useEffect"], []);
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                gap: "14px",
                position: "relative",
                paddingLeft: "0",
                paddingRight: "0",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.85s ${delay}s cubic-bezier(0.4,0,0.2,1), transform 0.85s ${delay}s cubic-bezier(0.34,1.1,0.64,1)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardContent, {
                periode: periode,
                align: "left",
                inView: inView,
                delay: delay
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-histoire.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/sect-histoire.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            display: "grid",
            gridTemplateColumns: "1fr 80px 1fr",
            alignItems: "center",
            minHeight: "420px",
            position: "relative",
            marginBottom: "0"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    gridColumn: "1",
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingRight: "52px",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : isLeft ? "translateX(-60px)" : "translateX(60px)",
                    transition: `opacity 0.85s ${delay}s cubic-bezier(0.4,0,0.2,1), transform 0.85s ${delay}s cubic-bezier(0.34,1.1,0.64,1)`
                },
                children: isLeft ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardContent, {
                    periode: periode,
                    align: "right",
                    inView: inView,
                    delay: delay
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-histoire.tsx",
                    lineNumber: 120,
                    columnNumber: 19
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DateBadge, {
                    periode: periode,
                    align: "right"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-histoire.tsx",
                    lineNumber: 120,
                    columnNumber: 99
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-histoire.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    gridColumn: "2",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    zIndex: 2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: inView ? "linear-gradient(135deg, var(--bn-green), var(--bn-white))" : "rgba(var(--bn-green-rgb),0.30)",
                        border: "3px solid #1a0f05",
                        boxShadow: inView ? "0 0 0 5px rgba(var(--bn-green-rgb),0.20), 0 0 24px rgba(var(--bn-green-rgb),0.35)" : "none",
                        transition: `all 0.6s ${delay + 0.2}s ease`,
                        flexShrink: 0
                    }
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-histoire.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-histoire.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    gridColumn: "3",
                    display: "flex",
                    justifyContent: "flex-start",
                    paddingLeft: "52px",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : isLeft ? "translateX(60px)" : "translateX(-60px)",
                    transition: `opacity 0.85s ${delay + 0.1}s cubic-bezier(0.4,0,0.2,1), transform 0.85s ${delay + 0.1}s cubic-bezier(0.34,1.1,0.64,1)`
                },
                children: !isLeft ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardContent, {
                    periode: periode,
                    align: "left",
                    inView: inView,
                    delay: delay
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-histoire.tsx",
                    lineNumber: 162,
                    columnNumber: 20
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DateBadge, {
                    periode: periode,
                    align: "left"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-histoire.tsx",
                    lineNumber: 162,
                    columnNumber: 99
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-histoire.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/sect-histoire.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s1(PeriodeCard, "nWGA22NfGpyTS148C9dunwsaXr8=", false, function() {
    return [
        useInView
    ];
});
_c = PeriodeCard;
function DateBadge({ periode, align }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: align === "right" ? "flex-end" : "flex-start",
            gap: "4px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                    fontWeight: 900,
                    lineHeight: 1,
                    background: "linear-gradient(135deg, var(--bn-green) 30%, var(--bn-white) 70%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em"
                },
                children: periode.debut
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-histoire.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.78)"
                },
                children: [
                    "— ",
                    periode.fin
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-histoire.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/sect-histoire.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
_c1 = DateBadge;
function CardContent({ periode, align, inView, delay }) {
    _s2();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            width: "100%",
            maxWidth: "460px",
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
            boxShadow: hovered ? "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(var(--bn-green-rgb),0.30)" : "0 16px 48px rgba(0,0,0,0.40), 0 0 0 1px rgba(var(--bn-green-rgb),0.12)",
            transform: hovered ? "translateY(-6px) scale(1.012)" : "translateY(0) scale(1)",
            transition: "box-shadow 0.45s ease, transform 0.45s cubic-bezier(0.34,1.1,0.64,1)",
            cursor: "default"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    height: "240px",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: periode.image,
                        alt: periode.titre,
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transform: hovered ? "scale(1.07)" : "scale(1.0)",
                            transition: "transform 0.8s cubic-bezier(0.4,0,0.2,1)",
                            display: "block"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-histoire.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(5,2,1,0.70) 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-histoire.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: "16px",
                            ...align === "right" ? {
                                right: "16px"
                            } : {
                                left: "16px"
                            },
                            background: "rgba(10,5,2,0.65)",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                            border: "1px solid rgba(var(--bn-green-rgb),0.30)",
                            borderRadius: "8px",
                            padding: "6px 14px",
                            display: "flex",
                            alignItems: "baseline",
                            gap: "6px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    color: "var(--bn-green)"
                                },
                                children: periode.debut
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-histoire.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "0.72rem",
                                    color: "rgba(255,255,255,0.78)",
                                    letterSpacing: "0.12em"
                                },
                                children: [
                                    "— ",
                                    periode.fin
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/sect-histoire.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/sect-histoire.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-histoire.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "linear-gradient(135deg, #0f0804 0%, #1a0f05 100%)",
                    padding: "24px 28px 28px",
                    borderTop: "1px solid rgba(var(--bn-green-rgb),0.18)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "32px",
                            height: "2px",
                            background: "linear-gradient(90deg, var(--bn-green), transparent)",
                            borderRadius: "2px",
                            marginBottom: "12px",
                            transform: hovered ? "scaleX(1.6)" : "scaleX(1)",
                            transformOrigin: "left",
                            transition: "transform 0.4s ease"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-histoire.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.22rem",
                            fontWeight: 700,
                            color: "#ffffff",
                            margin: "0 0 12px 0",
                            lineHeight: 1.25
                        },
                        children: periode.titre
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-histoire.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "1.02rem",
                            lineHeight: 1.75,
                            color: "rgba(255,255,255,0.70)",
                            margin: 0
                        },
                        children: periode.description
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-histoire.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-histoire.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/sect-histoire.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
_s2(CardContent, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c2 = CardContent;
function SectionHeader() {
    _s3();
    const [ref, inView] = useInView(0.3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            textAlign: "center",
            marginBottom: "80px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.1,0.64,1)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.30em",
                    textTransform: "uppercase",
                    color: "var(--bn-green)",
                    marginBottom: "20px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: "block",
                            width: "36px",
                            height: "1px",
                            background: "var(--bn-green)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-histoire.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this),
                    "Notre Histoire",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: "block",
                            width: "36px",
                            height: "1px",
                            background: "var(--bn-green)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-histoire.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-histoire.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                    fontWeight: 900,
                    lineHeight: 1.08,
                    color: "#ffffff",
                    margin: "0 0 24px 0",
                    textShadow: "0 4px 32px rgba(0,0,0,0.5)"
                },
                children: [
                    "Des racines profondes,",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/sections/sect-histoire.tsx",
                        lineNumber: 366,
                        columnNumber: 31
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        style: {
                            color: "var(--bn-green)",
                            fontStyle: "italic"
                        },
                        children: "un avenir lumineux"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-histoire.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-histoire.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1rem, 1.5vw, 1.18rem)",
                    color: "rgba(255,255,255,0.78)",
                    maxWidth: "540px",
                    margin: "0 auto",
                    lineHeight: 1.75
                },
                children: "Chaque génération a posé une pierre. Voici l'histoire de ceux qui nous ont précédés et de ceux qui, aujourd'hui, portent fièrement leur héritage."
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-histoire.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/sect-histoire.tsx",
        lineNumber: 330,
        columnNumber: 5
    }, this);
}
_s3(SectionHeader, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        useInView
    ];
});
_c3 = SectionHeader;
function CtaButton() {
    _s4();
    const [ref, inView] = useInView(0.3);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            display: "flex",
            justifyContent: "center",
            marginTop: "80px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s 0.2s ease, transform 0.8s 0.2s cubic-bezier(0.34,1.1,0.64,1)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/notre-histoire",
            onMouseEnter: ()=>setHovered(true),
            onMouseLeave: ()=>setHovered(false),
            style: {
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
                transition: "color 0.35s ease"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: "absolute",
                        inset: 0,
                        background: "var(--bn-green)",
                        transform: hovered ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform 0.42s cubic-bezier(0.4,0,0.2,1)",
                        borderRadius: "4px"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-histoire.tsx",
                    lineNumber: 426,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: "relative",
                        zIndex: 1
                    },
                    children: "Lire notre histoire complète"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-histoire.tsx",
                    lineNumber: 435,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: "relative",
                        zIndex: 1,
                        display: "inline-block",
                        transform: hovered ? "translateX(6px)" : "translateX(0)",
                        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)"
                    },
                    children: "→"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-histoire.tsx",
                    lineNumber: 436,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/sect-histoire.tsx",
            lineNumber: 400,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/sect-histoire.tsx",
        lineNumber: 389,
        columnNumber: 5
    }, this);
}
_s4(CtaButton, "9vNB4BBt1xNHowFZjc882ppyxkM=", false, function() {
    return [
        useInView
    ];
});
_c4 = CtaButton;
function SectionHistoire() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-histoire.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "histoire-root",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "histoire-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {}, void 0, false, {
                            fileName: "[project]/components/sections/sect-histoire.tsx",
                            lineNumber: 522,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "relative"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "timeline-line"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/sect-histoire.tsx",
                                    lineNumber: 527,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0"
                                    },
                                    children: periodes.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PeriodeCard, {
                                            periode: p,
                                            index: i
                                        }, i, false, {
                                            fileName: "[project]/components/sections/sect-histoire.tsx",
                                            lineNumber: 532,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/sect-histoire.tsx",
                                    lineNumber: 530,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/sect-histoire.tsx",
                            lineNumber: 525,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CtaButton, {}, void 0, false, {
                            fileName: "[project]/components/sections/sect-histoire.tsx",
                            lineNumber: 538,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/sect-histoire.tsx",
                    lineNumber: 521,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-histoire.tsx",
                lineNumber: 520,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c5 = SectionHistoire;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "PeriodeCard");
__turbopack_context__.k.register(_c1, "DateBadge");
__turbopack_context__.k.register(_c2, "CardContent");
__turbopack_context__.k.register(_c3, "SectionHeader");
__turbopack_context__.k.register(_c4, "CtaButton");
__turbopack_context__.k.register(_c5, "SectionHistoire");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/sect-valeur.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionValeurs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
const valeurs = [
    {
        id: "unite",
        mot: "Unité",
        chiffre: "01",
        symbole: "⬡",
        couleur: "var(--bn-green)",
        couleurSombre: "rgba(var(--bn-green-rgb),0.08)",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "52",
            height: "52",
            viewBox: "0 0 52 52",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "26",
                    cy: "18",
                    r: "7",
                    stroke: "var(--bn-green)",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-valeur.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "14",
                    cy: "36",
                    r: "7",
                    stroke: "var(--bn-green)",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-valeur.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "38",
                    cy: "36",
                    r: "7",
                    stroke: "var(--bn-green)",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-valeur.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "26",
                    y1: "25",
                    x2: "20",
                    y2: "30",
                    stroke: "var(--bn-green)",
                    strokeWidth: "1.2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-valeur.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "26",
                    y1: "25",
                    x2: "32",
                    y2: "30",
                    stroke: "var(--bn-green)",
                    strokeWidth: "1.2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-valeur.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "14",
                    y1: "29",
                    x2: "38",
                    y2: "29",
                    stroke: "var(--bn-green)",
                    strokeWidth: "1.2",
                    strokeLinecap: "round",
                    strokeDasharray: "2 3"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-valeur.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/sect-valeur.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        titre: "Ensemble, nous sommes invincibles",
        description: "Notre force réside dans notre cohésion. Quand l'un tombe, les autres le relèvent. Quand l'un triomphe, tous célèbrent. L'unité n'est pas un mot, c'est notre mode de vie, transmis de génération en génération comme le bien le plus précieux.",
        citation: "« Seul on va plus vite, ensemble on va plus loin. »"
    },
    {
        id: "amour",
        mot: "Amour",
        chiffre: "02",
        symbole: "◇",
        couleur: "var(--bn-white)",
        couleurSombre: "rgba(255,255,255,0.06)",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "52",
            height: "52",
            viewBox: "0 0 52 52",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M26 42 C26 42 8 30 8 19 C8 13.5 12.5 9 18 9 C21.5 9 24.5 10.8 26 13.5 C27.5 10.8 30.5 9 34 9 C39.5 9 44 13.5 44 19 C44 30 26 42 26 42Z",
                    stroke: "var(--bn-white)",
                    strokeWidth: "1.5",
                    fill: "none"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-valeur.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 22 C20 19.5 21.8 18 24 18",
                    stroke: "var(--bn-white)",
                    strokeWidth: "1.2",
                    strokeLinecap: "round",
                    opacity: "0.7"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-valeur.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/sect-valeur.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        titre: "L'amour comme fondement",
        description: "Chaque décision, chaque geste, chaque sacrifice au sein de notre famille est guidé par l'amour. Amour des enfants, respect des aînés, tendresse entre époux, sollicitude pour les vulnérables — c'est le ciment invisible qui tient notre édifice debout.",
        citation: "« L'amour en famille est la première école de l'humanité. »"
    },
    {
        id: "prosperite",
        mot: "Prospérité",
        chiffre: "03",
        symbole: "✦",
        couleur: "var(--bn-green)",
        couleurSombre: "rgba(var(--bn-green-rgb),0.08)",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "52",
            height: "52",
            viewBox: "0 0 52 52",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M26 8 L26 44",
                    stroke: "var(--bn-green)",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-valeur.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18 16 L26 8 L34 16",
                    stroke: "var(--bn-green)",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-valeur.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 28 L26 18 L40 28",
                    stroke: "var(--bn-green)",
                    strokeWidth: "1.2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    opacity: "0.7"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-valeur.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8 40 L26 30 L44 40",
                    stroke: "var(--bn-green)",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    opacity: "0.45"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-valeur.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "26",
                    cy: "8",
                    r: "2.5",
                    fill: "var(--bn-green)"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-valeur.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/sect-valeur.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        titre: "Bâtir un héritage durable",
        description: "La prospérité que nous cherchons n'est pas que matérielle. Elle est humaine, spirituelle, collective. Nous accompagnons chaque membre porteur de projets, nous investissons dans l'éducation, la santé et les terres — pour que nos enfants héritent d'un monde meilleur.",
        citation: "« Un arbre bien enraciné ne craint pas la tempête. »"
    }
];
function useInView(threshold = 0.2) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        setInView(true);
                        obs.disconnect();
                    }
                }
            }["useInView.useEffect"], {
                threshold
            });
            obs.observe(el);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return [
        ref,
        inView
    ];
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
/* ── Compteur animé ── */ function Counter({ target, inView }) {
    _s1();
    const [val, setVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Counter.useEffect": ()=>{
            if (!inView) return;
            let start = null;
            const duration = 1200;
            const step = {
                "Counter.useEffect.step": (ts)=>{
                    if (!start) start = ts;
                    const p = Math.min((ts - start) / duration, 1);
                    setVal(Math.floor(p * target));
                    if (p < 1) requestAnimationFrame(step);
                }
            }["Counter.useEffect.step"];
            requestAnimationFrame(step);
        }
    }["Counter.useEffect"], [
        inView,
        target
    ]);
    return val;
}
_s1(Counter, "J9W7PNt/cWQtiNkcKYTpkMkMUx4=");
_c = Counter;
/* ── Carte valeur ── */ function ValeurCard({ valeur, index }) {
    _s2();
    const [ref, inView] = useInView(0.2);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const delay = index * 0.18;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            padding: "48px 40px 44px",
            background: hovered ? `linear-gradient(145deg, #141008 0%, #1e1408 100%)` : `linear-gradient(145deg, #0f0a05 0%, #171008 100%)`,
            border: `1px solid ${hovered ? "rgba(var(--bn-green-rgb),0.55)" : "rgba(var(--bn-green-rgb),0.18)"}`,
            boxShadow: hovered ? `0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px ${valeur.couleur}33, inset 0 1px 0 ${valeur.couleur}22` : "0 8px 32px rgba(0,0,0,0.35)",
            transform: inView ? hovered ? "translateY(-8px)" : "translateY(0)" : "translateY(50px)",
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
            minWidth: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "-60px",
                    right: "-60px",
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${valeur.couleur}18 0%, transparent 70%)`,
                    opacity: hovered ? 1 : 0,
                    transition: "opacity 0.6s ease",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-valeur.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
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
                    letterSpacing: "-0.04em"
                },
                children: valeur.chiffre
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-valeur.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
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
                    flexShrink: 0
                },
                children: valeur.icon
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-valeur.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: valeur.couleur,
                    marginBottom: "10px",
                    display: "block"
                },
                children: valeur.mot
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-valeur.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.35rem",
                    fontWeight: 900,
                    color: "#ffffff",
                    margin: "0 0 14px 0",
                    lineHeight: 1.18
                },
                children: valeur.titre
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-valeur.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: hovered ? "56px" : "32px",
                    height: "1.5px",
                    background: `linear-gradient(90deg, ${valeur.couleur}, transparent)`,
                    borderRadius: "2px",
                    marginBottom: "20px",
                    transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-valeur.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.78)",
                    margin: "0 0 28px 0",
                    flex: 1
                },
                children: valeur.description
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-valeur.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderLeft: `2px solid ${valeur.couleur}60`,
                    paddingLeft: "16px",
                    marginTop: "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "0.92rem",
                        fontStyle: "italic",
                        color: `${valeur.couleur}BB`,
                        margin: 0,
                        lineHeight: 1.6
                    },
                    children: valeur.citation
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-valeur.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-valeur.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/sect-valeur.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s2(ValeurCard, "9vNB4BBt1xNHowFZjc882ppyxkM=", false, function() {
    return [
        useInView
    ];
});
_c1 = ValeurCard;
/* ── Devise centrale animée ── */ function Devise() {
    _s3();
    const [ref, inView] = useInView(0.3);
    const mots = [
        "Unité",
        "Amour",
        "Prospérité"
    ];
    const couleurs = [
        "var(--bn-green)",
        "var(--bn-white)",
        "var(--bn-green)"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            textAlign: "center",
            marginBottom: "80px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 1s ease, transform 1s cubic-bezier(0.34,1.1,0.64,1)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "14px",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.70rem",
                    fontWeight: 600,
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: "var(--bn-green)",
                    marginBottom: "24px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: "block",
                            width: "40px",
                            height: "1px",
                            background: "linear-gradient(90deg, transparent, var(--bn-green))"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-valeur.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    "Nos Valeurs",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: "block",
                            width: "40px",
                            height: "1px",
                            background: "linear-gradient(90deg, var(--bn-green), transparent)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-valeur.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-valeur.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 5vw, 3.8rem)",
                    fontWeight: 900,
                    lineHeight: 1.08,
                    color: "#ffffff",
                    margin: "0 0 32px 0"
                },
                children: [
                    "Ce qui nous unit,",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/sections/sect-valeur.tsx",
                        lineNumber: 327,
                        columnNumber: 26
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        style: {
                            color: "var(--bn-green)",
                            fontStyle: "italic"
                        },
                        children: "ce qui nous définit"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-valeur.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-valeur.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(var(--bn-green-rgb),0.22)",
                    borderRadius: "50px",
                    padding: "6px 8px",
                    flexWrap: "wrap",
                    justifyContent: "center"
                },
                children: mots.map((mot, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: "inline-flex",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                                    fontWeight: 700,
                                    color: couleurs[i],
                                    padding: "8px 20px",
                                    borderRadius: "50px",
                                    letterSpacing: "0.08em",
                                    transition: "background 0.3s"
                                },
                                children: mot
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-valeur.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this),
                            i < mots.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: "4px",
                                    height: "4px",
                                    borderRadius: "50%",
                                    background: "rgba(var(--bn-green-rgb),0.55)",
                                    display: "inline-block"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-valeur.tsx",
                                lineNumber: 358,
                                columnNumber: 15
                            }, this)
                        ]
                    }, mot, true, {
                        fileName: "[project]/components/sections/sect-valeur.tsx",
                        lineNumber: 344,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-valeur.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(0.98rem, 1.4vw, 1.15rem)",
                    color: "rgba(255,255,255,0.78)",
                    maxWidth: "560px",
                    margin: "28px auto 0",
                    lineHeight: 1.8
                },
                children: "Trois mots. Une âme. La boussole qui oriente chacun de nos actes, chacun de nos choix, depuis la nuit des temps jusqu'à aujourd'hui."
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-valeur.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/sect-valeur.tsx",
        lineNumber: 290,
        columnNumber: 5
    }, this);
}
_s3(Devise, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        useInView
    ];
});
_c2 = Devise;
/* ── Bandeau décoratif bas ── */ function BottomBandeau() {
    _s4();
    const [ref, inView] = useInView(0.2);
    const stats = [
        {
            val: 3,
            suffix: "+",
            label: "Générations",
            couleur: "var(--bn-green)"
        },
        {
            val: 120,
            suffix: "+",
            label: "Membres actifs",
            couleur: "var(--bn-green)"
        },
        {
            val: 60,
            suffix: " ans",
            label: "D'histoire commune",
            couleur: "var(--bn-green)"
        },
        {
            val: 12,
            suffix: "",
            label: "Localités représentées",
            couleur: "var(--bn-green)"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
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
            transition: "opacity 0.9s 0.1s ease, transform 0.9s 0.1s cubic-bezier(0.34,1.1,0.64,1)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(var(--bn-green-rgb),0.06) 0%, transparent 70%)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-valeur.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, this),
            stats.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "relative",
                        zIndex: 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(2rem, 4vw, 3rem)",
                                fontWeight: 900,
                                color: s.couleur,
                                lineHeight: 1,
                                marginBottom: "8px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Counter, {
                                    target: s.val,
                                    inView: inView
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/sect-valeur.tsx",
                                    lineNumber: 434,
                                    columnNumber: 13
                                }, this),
                                s.suffix
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/sect-valeur.tsx",
                            lineNumber: 426,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "0.82rem",
                                letterSpacing: "0.16em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.78)"
                            },
                            children: s.label
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-valeur.tsx",
                            lineNumber: 436,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "24px",
                                height: "1px",
                                background: s.couleur,
                                opacity: 0.5,
                                margin: "10px auto 0",
                                borderRadius: "2px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-valeur.tsx",
                            lineNumber: 446,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/sections/sect-valeur.tsx",
                    lineNumber: 425,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/sect-valeur.tsx",
        lineNumber: 397,
        columnNumber: 5
    }, this);
}
_s4(BottomBandeau, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        useInView
    ];
});
_c3 = BottomBandeau;
function SectionValeurs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;500;600&family=Lato:wght@300;400;700&display=swap');

        .valeurs-root {
          position: relative;
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
      `
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-valeur.tsx",
                lineNumber: 464,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "valeurs-root",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "valeurs-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Devise, {}, void 0, false, {
                            fileName: "[project]/components/sections/sect-valeur.tsx",
                            lineNumber: 521,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "valeurs-grid",
                            children: valeurs.map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValeurCard, {
                                    valeur: v,
                                    index: i
                                }, v.id, false, {
                                    fileName: "[project]/components/sections/sect-valeur.tsx",
                                    lineNumber: 526,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-valeur.tsx",
                            lineNumber: 524,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BottomBandeau, {}, void 0, false, {
                            fileName: "[project]/components/sections/sect-valeur.tsx",
                            lineNumber: 531,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/sect-valeur.tsx",
                    lineNumber: 520,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-valeur.tsx",
                lineNumber: 519,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c4 = SectionValeurs;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Counter");
__turbopack_context__.k.register(_c1, "ValeurCard");
__turbopack_context__.k.register(_c2, "Devise");
__turbopack_context__.k.register(_c3, "BottomBandeau");
__turbopack_context__.k.register(_c4, "SectionValeurs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/sect-gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionGalerie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
const PHOTOS = [
    {
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85",
        alt: "Réunion de famille",
        lieu: "Libreville"
    },
    {
        src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=85",
        alt: "Fête du clan",
        lieu: "Lambaréné"
    },
    {
        src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=85",
        alt: "Les anciens",
        lieu: "Port-Gentil"
    },
    {
        src: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=85",
        alt: "Cérémonie traditionnelle",
        lieu: "Franceville"
    },
    {
        src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=85",
        alt: "Solidarité familiale",
        lieu: "Oyem"
    },
    {
        src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=85",
        alt: "Les jeunes du clan",
        lieu: "Libreville"
    },
    {
        src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=85",
        alt: "Mariage traditionnel",
        lieu: "Moanda"
    },
    {
        src: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=800&q=85",
        alt: "Remise de diplôme",
        lieu: "Libreville"
    },
    {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=85",
        alt: "Projet communautaire",
        lieu: "Tchibanga"
    },
    {
        src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=85",
        alt: "Aide aux vulnérables",
        lieu: "Port-Gentil"
    },
    {
        src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=85",
        alt: "Célébration",
        lieu: "Lambaréné"
    },
    {
        src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=85",
        alt: "Repas de famille",
        lieu: "Makokou"
    }
];
// ─── Gabarits de grille (patterns qui se répètent) ───────────────────────────
// Chaque cellule : { col, row, w, h } en unités de grille
// On a des patterns de N photos qui couvrent la grille proprement
const GRID_PATTERNS = [
    // Pattern A — 3 photos
    [
        {
            col: 1,
            row: 1,
            w: 2,
            h: 2
        },
        {
            col: 3,
            row: 1,
            w: 1,
            h: 1
        },
        {
            col: 3,
            row: 2,
            w: 1,
            h: 1
        }
    ],
    // Pattern B — 3 photos
    [
        {
            col: 1,
            row: 1,
            w: 1,
            h: 1
        },
        {
            col: 1,
            row: 2,
            w: 1,
            h: 1
        },
        {
            col: 2,
            row: 1,
            w: 2,
            h: 2
        }
    ],
    // Pattern C — 4 photos
    [
        {
            col: 1,
            row: 1,
            w: 1,
            h: 2
        },
        {
            col: 2,
            row: 1,
            w: 2,
            h: 1
        },
        {
            col: 2,
            row: 2,
            w: 1,
            h: 1
        },
        {
            col: 3,
            row: 2,
            w: 1,
            h: 1
        }
    ],
    // Pattern D — 4 photos
    [
        {
            col: 1,
            row: 1,
            w: 2,
            h: 1
        },
        {
            col: 3,
            row: 1,
            w: 1,
            h: 2
        },
        {
            col: 1,
            row: 2,
            w: 1,
            h: 1
        },
        {
            col: 2,
            row: 2,
            w: 1,
            h: 1
        }
    ]
];
const CELL = 220; // taille de base d'une cellule en px
const GAP = 10;
function useInView(threshold = 0.1) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        setInView(true);
                        obs.disconnect();
                    }
                }
            }["useInView.useEffect"], {
                threshold
            });
            obs.observe(el);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return [
        ref,
        inView
    ];
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
/* ── Seed pseudo-random déterministe ── */ function seededRandom(seed) {
    let s = seed;
    return ()=>{
        s = (s * 16807 + 0) % 2147483647;
        return (s - 1) / 2147483646;
    };
}
/* ── Calcule les blocs à afficher depuis la liste de photos ── */ function buildBlocks(photos) {
    const rng = seededRandom(42);
    const blocks = [];
    let photoIdx = 0;
    let patternIdx = 0;
    while(photoIdx < photos.length){
        const pattern = GRID_PATTERNS[patternIdx % GRID_PATTERNS.length];
        patternIdx++;
        const needed = pattern.length;
        if (photoIdx + needed > photos.length) break;
        // Drift aléatoire léger par photo (pour l'animation idle)
        const group = pattern.map((cell, i)=>({
                ...cell,
                photo: photos[photoIdx + i],
                driftX: (rng() - 0.5) * 6,
                driftY: (rng() - 0.5) * 6,
                driftDur: 4 + rng() * 3,
                driftDelay: rng() * 2,
                rotIdle: (rng() - 0.5) * 1.5
            }));
        blocks.push(group);
        photoIdx += needed;
    }
    return blocks;
}
/* ── Carte photo individuelle ── */ function PhotoCard({ cell, globalDelay }) {
    _s1();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ref, inView] = useInView(0.1);
    const animName = `drift-${Math.abs(Math.round(cell.driftX * 100))}-${Math.abs(Math.round(cell.driftY * 100))}`;
    const w = cell.w * CELL + (cell.w - 1) * GAP;
    const h = cell.h * CELL + (cell.h - 1) * GAP;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes ${animName} {
          0%   { transform: translate(0px, 0px) rotate(0deg); }
          33%  { transform: translate(${cell.driftX * 0.6}px, ${cell.driftY}px) rotate(${cell.rotIdle * 0.5}deg); }
          66%  { transform: translate(${cell.driftX}px, ${cell.driftY * 0.4}px) rotate(${cell.rotIdle}deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-gallery.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                onMouseEnter: ()=>setHovered(true),
                onMouseLeave: ()=>setHovered(false),
                style: {
                    gridColumn: `${cell.col} / span ${cell.w}`,
                    gridRow: `${cell.row} / span ${cell.h}`,
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
                    animation: inView && !hovered ? `${animName} ${cell.driftDur}s ${cell.driftDelay}s ease-in-out infinite` : "none",
                    boxShadow: hovered ? "0 28px 60px rgba(0,0,0,0.65), 0 0 0 2px rgba(var(--bn-green-rgb),0.45)" : "0 8px 24px rgba(0,0,0,0.45)",
                    zIndex: hovered ? 10 : 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: cell.photo.src,
                        alt: cell.photo.alt,
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                            transform: hovered ? "scale(1.10)" : "scale(1.02)",
                            transition: "transform 0.75s cubic-bezier(0.4,0,0.2,1)",
                            willChange: "transform"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-gallery.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to top, rgba(5,2,1,0.70) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
                            transition: "opacity 0.4s ease",
                            opacity: hovered ? 1 : 0.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-gallery.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            borderRadius: "14px",
                            border: "1.5px solid rgba(var(--bn-green-rgb),0)",
                            transition: "border-color 0.4s ease",
                            ...hovered ? {
                                borderColor: "rgba(var(--bn-green-rgb),0.55)"
                            } : {},
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-gallery.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: "18px 18px 16px",
                            transform: hovered ? "translateY(0)" : "translateY(12px)",
                            opacity: hovered ? 1 : 0,
                            transition: "transform 0.45s cubic-bezier(0.34,1.1,0.64,1), opacity 0.4s ease"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: cell.w >= 2 ? "1.05rem" : "0.88rem",
                                    fontWeight: 700,
                                    color: "#ffffff",
                                    margin: "0 0 4px 0",
                                    lineHeight: 1.2,
                                    textShadow: "0 2px 8px rgba(0,0,0,0.8)"
                                },
                                children: cell.photo.alt
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-gallery.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "0.70rem",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: "var(--bn-green)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "14px",
                                            height: "1px",
                                            background: "var(--bn-green)",
                                            display: "inline-block"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/sect-gallery.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    cell.photo.lieu
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/sect-gallery.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/sect-gallery.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
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
                            border: "1px solid rgba(var(--bn-green-rgb),0.55)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 14 14",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "6",
                                    cy: "6",
                                    r: "4.5",
                                    stroke: "var(--bn-white)",
                                    strokeWidth: "1.3"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/sect-gallery.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "9.5",
                                    y1: "9.5",
                                    x2: "13",
                                    y2: "13",
                                    stroke: "var(--bn-white)",
                                    strokeWidth: "1.3",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/sect-gallery.tsx",
                                    lineNumber: 278,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/sect-gallery.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-gallery.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-gallery.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(PhotoCard, "k4QjvKw6fARuBrNjr413H5KlV9M=", false, function() {
    return [
        useInView
    ];
});
_c = PhotoCard;
/* ── Groupe (un pattern complet) ── */ function PatternGroup({ group, groupIndex }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "grid",
            gridTemplateColumns: `repeat(3, 1fr)`,
            gridTemplateRows: `repeat(2, ${CELL}px)`,
            gap: `${GAP}px`,
            width: "100%"
        },
        children: group.map((cell, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhotoCard, {
                cell: cell,
                globalDelay: groupIndex * 0.15 + i * 0.07
            }, i, false, {
                fileName: "[project]/components/sections/sect-gallery.tsx",
                lineNumber: 299,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/sections/sect-gallery.tsx",
        lineNumber: 289,
        columnNumber: 5
    }, this);
}
_c1 = PatternGroup;
/* ── Header section ── */ function SectionHeader() {
    _s2();
    const [ref, inView] = useInView(0.3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            textAlign: "center",
            marginBottom: "64px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.1,0.64,1)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "14px",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.70rem",
                    fontWeight: 600,
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: "var(--bn-green)",
                    marginBottom: "22px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: "40px",
                            height: "1px",
                            background: "linear-gradient(90deg, transparent, var(--bn-green))",
                            display: "block"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-gallery.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    "Nos Mémoires",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: "40px",
                            height: "1px",
                            background: "linear-gradient(90deg, var(--bn-green), transparent)",
                            display: "block"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-gallery.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-gallery.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 5vw, 3.6rem)",
                    fontWeight: 900,
                    color: "#ffffff",
                    margin: "0 0 20px 0",
                    lineHeight: 1.08
                },
                children: [
                    "Les instants qui",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/sections/sect-gallery.tsx",
                        lineNumber: 348,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        style: {
                            color: "var(--bn-green)",
                            fontStyle: "italic"
                        },
                        children: "nous racontent"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-gallery.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-gallery.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(0.98rem, 1.4vw, 1.15rem)",
                    color: "rgba(255,255,255,0.78)",
                    maxWidth: "500px",
                    margin: "0 auto",
                    lineHeight: 1.8
                },
                children: "Chaque photo est une page de notre histoire collective. Des sourires, des larmes, des fêtes — la vie du clan capturée pour l'éternité."
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-gallery.tsx",
                lineNumber: 352,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/sect-gallery.tsx",
        lineNumber: 313,
        columnNumber: 5
    }, this);
}
_s2(SectionHeader, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        useInView
    ];
});
_c2 = SectionHeader;
/* ── CTA ── */ function CtaGalerie() {
    _s3();
    const [ref, inView] = useInView(0.2);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s 0.2s ease, transform 0.8s 0.2s cubic-bezier(0.34,1.1,0.64,1)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/nos-albums",
            onMouseEnter: ()=>setHovered(true),
            onMouseLeave: ()=>setHovered(false),
            style: {
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
                transition: "color 0.35s ease"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: "absolute",
                        inset: 0,
                        background: "var(--bn-green)",
                        transform: hovered ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform 0.42s cubic-bezier(0.4,0,0.2,1)",
                        borderRadius: "4px"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-gallery.tsx",
                    lineNumber: 407,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: "relative",
                        zIndex: 1
                    },
                    children: "Voir tous nos albums"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-gallery.tsx",
                    lineNumber: 416,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: "relative",
                        zIndex: 1,
                        transform: hovered ? "translateX(6px)" : "translateX(0)",
                        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)"
                    },
                    children: "→"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-gallery.tsx",
                    lineNumber: 417,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/sect-gallery.tsx",
            lineNumber: 383,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/sect-gallery.tsx",
        lineNumber: 372,
        columnNumber: 5
    }, this);
}
_s3(CtaGalerie, "9vNB4BBt1xNHowFZjc882ppyxkM=", false, function() {
    return [
        useInView
    ];
});
_c3 = CtaGalerie;
function SectionGalerie() {
    _s4();
    const blocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SectionGalerie.useMemo[blocks]": ()=>buildBlocks(PHOTOS)
    }["SectionGalerie.useMemo[blocks]"], []);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SectionGalerie.useEffect": ()=>{
            const check = {
                "SectionGalerie.useEffect.check": ()=>setIsMobile(window.innerWidth <= 700)
            }["SectionGalerie.useEffect.check"];
            check();
            window.addEventListener("resize", check, {
                passive: true
            });
            return ({
                "SectionGalerie.useEffect": ()=>window.removeEventListener("resize", check)
            })["SectionGalerie.useEffect"];
        }
    }["SectionGalerie.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-gallery.tsx",
                lineNumber: 442,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "galerie-root",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "galerie-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {}, void 0, false, {
                            fileName: "[project]/components/sections/sect-gallery.tsx",
                            lineNumber: 496,
                            columnNumber: 11
                        }, this),
                        isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "galerie-mobile-grid",
                            children: PHOTOS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        borderRadius: "14px",
                                        overflow: "hidden",
                                        position: "relative",
                                        boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
                                        minHeight: i % 5 === 0 ? "260px" : "200px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: p.src,
                                            alt: p.alt,
                                            style: {
                                                position: "absolute",
                                                inset: 0,
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                display: "block"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/sect-gallery.tsx",
                                            lineNumber: 511,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                inset: 0,
                                                background: "linear-gradient(to top, rgba(5,2,1,0.78) 0%, rgba(0,0,0,0.10) 55%, transparent 100%)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/sect-gallery.tsx",
                                            lineNumber: 523,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                padding: "14px 14px 12px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'Playfair Display', serif",
                                                        fontSize: "0.95rem",
                                                        fontWeight: 700,
                                                        color: "#ffffff",
                                                        margin: "0 0 4px 0",
                                                        lineHeight: 1.2,
                                                        textShadow: "0 2px 8px rgba(0,0,0,0.8)"
                                                    },
                                                    children: p.alt
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-gallery.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        gap: "6px",
                                                        fontFamily: "'Cormorant Garamond', serif",
                                                        fontSize: "0.68rem",
                                                        letterSpacing: "0.18em",
                                                        textTransform: "uppercase",
                                                        color: "var(--bn-green)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: "14px",
                                                                height: "1px",
                                                                background: "var(--bn-green)",
                                                                display: "inline-block"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/sect-gallery.tsx",
                                                            lineNumber: 565,
                                                            columnNumber: 23
                                                        }, this),
                                                        p.lieu
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/sect-gallery.tsx",
                                                    lineNumber: 553,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/sect-gallery.tsx",
                                            lineNumber: 531,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, p.src + i, true, {
                                    fileName: "[project]/components/sections/sect-gallery.tsx",
                                    lineNumber: 501,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-gallery.tsx",
                            lineNumber: 499,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "galerie-groups",
                            children: blocks.map((group, gi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PatternGroup, {
                                    group: group,
                                    groupIndex: gi
                                }, gi, false, {
                                    fileName: "[project]/components/sections/sect-gallery.tsx",
                                    lineNumber: 582,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-gallery.tsx",
                            lineNumber: 580,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CtaGalerie, {}, void 0, false, {
                            fileName: "[project]/components/sections/sect-gallery.tsx",
                            lineNumber: 587,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/sect-gallery.tsx",
                    lineNumber: 495,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-gallery.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s4(SectionGalerie, "nr+OAkKQ7bTlyCT6HjJnRwW5FnY=");
_c4 = SectionGalerie;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "PhotoCard");
__turbopack_context__.k.register(_c1, "PatternGroup");
__turbopack_context__.k.register(_c2, "SectionHeader");
__turbopack_context__.k.register(_c3, "CtaGalerie");
__turbopack_context__.k.register(_c4, "SectionGalerie");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/sect-membre.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionMembres
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
const MEMBRES = [
    {
        id: 1,
        nom: "Jean-Baptiste Nguyen",
        role: "Chef de Famille",
        profession: "Magistrat",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85",
        ville: "Libreville",
        bio: "Patriarche du clan, Jean-Baptiste veille sur l'unité de la famille depuis plus de 30 ans avec sagesse et autorité bienveillante."
    },
    {
        id: 2,
        nom: "Marie-Claire Obame",
        role: "Gardienne des Traditions",
        profession: "Ethnologue",
        photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=85",
        ville: "Libreville",
        bio: "Dépositaire de la mémoire collective, elle documente nos rites et s'assure que nos enfants grandissent enracinés dans leur culture."
    },
    {
        id: 3,
        nom: "Pierre Mba Nguyen",
        role: "Trésorier",
        profession: "Expert-Comptable",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=85",
        ville: "Port-Gentil",
        bio: "Rigueur et transparence. Pierre gère les finances du clan avec intégrité, garantissant la bonne santé de nos projets communs."
    },
    {
        id: 4,
        nom: "Élodie Mintsa",
        role: "Responsable Solidarité",
        profession: "Médecin",
        photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=85",
        ville: "Franceville",
        bio: "Au service des plus vulnérables, Élodie coordonne l'aide aux veuves, personnes âgées et enfants en difficulté au sein du clan."
    },
    {
        id: 5,
        nom: "Samuel Ondo",
        role: "Responsable Projets",
        profession: "Ingénieur Civil",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85",
        ville: "Oyem",
        bio: "Bâtisseur visionnaire, Samuel pilote les projets immobiliers et fonciers qui constituent notre patrimoine familial."
    },
    {
        id: 6,
        nom: "Christelle Ella",
        role: "Secrétaire Générale",
        profession: "Juriste",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=85",
        ville: "Libreville",
        bio: "Organisée et rigoureuse, Christelle veille au bon fonctionnement administratif et juridique de la communauté familiale."
    },
    {
        id: 7,
        nom: "Hervé Nzamba",
        role: "Porte-Parole",
        profession: "Journaliste",
        photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=85",
        ville: "Lambaréné",
        bio: "Voix du clan, Hervé assure la communication interne et externe, et préserve l'image de notre famille auprès du monde."
    },
    {
        id: 8,
        nom: "Nadège Bouanga",
        role: "Responsable Jeunesse",
        profession: "Enseignante",
        photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=85",
        ville: "Moanda",
        bio: "Passionnée d'éducation, Nadège encadre les jeunes membres du clan et les prépare à prendre la relève avec fierté."
    },
    {
        id: 9,
        nom: "Aurélien Nkoghe",
        role: "Conseiller Économique",
        profession: "Entrepreneur",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=85",
        ville: "Libreville",
        bio: "Entrepreneur accompli, Aurélien guide les porteurs de projets et connecte le clan aux opportunités économiques du pays."
    },
    {
        id: 10,
        nom: "Rosalie Engonga",
        role: "Responsable Santé",
        profession: "Infirmière en Chef",
        photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=85",
        ville: "Tchibanga",
        bio: "Rosalie organise les caravanes médicales et s'assure que chaque membre du clan bénéficie des soins dont il a besoin."
    },
    {
        id: 11,
        nom: "Patrick Zué",
        role: "Responsable Spirituel",
        profession: "Pasteur",
        photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=85",
        ville: "Makokou",
        bio: "Guide spirituel du clan, Patrick accompagne les familles dans les moments de joie comme dans les épreuves de la vie."
    },
    {
        id: 12,
        nom: "Viviane Assoumou",
        role: "Responsable Culture",
        profession: "Artiste & Chorégraphe",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=85",
        ville: "Port-Gentil",
        bio: "Âme créatrice du clan, Viviane perpétue nos danses, chants et rites traditionnels en les transmettant aux générations futures."
    }
];
// ─── Seed pseudo-random ───────────────────────────────────────────────────────
function seededRand(seed) {
    let s = seed;
    return ()=>{
        s = s * 16807 % 2147483647;
        return (s - 1) / 2147483646;
    };
}
// ─── Générer les positions "sur la table" ─────────────────────────────────────
function generatePositions(count) {
    const rng = seededRand(137);
    const cols = 4;
    const rows = Math.ceil(count / cols);
    const positions = [];
    for(let i = 0; i < count; i++){
        const col = i % cols;
        const row = Math.floor(i / cols);
        // Base en %
        const baseX = col / cols * 100;
        const baseY = row / rows * 100;
        // Offset aléatoire
        const offX = (rng() - 0.5) * 14;
        const offY = (rng() - 0.5) * 14;
        const rot = (rng() - 0.5) * 16;
        const scale = 0.92 + rng() * 0.12;
        const zBase = Math.floor(rng() * 10) + 1;
        positions.push({
            baseX: baseX + offX,
            baseY: baseY + offY,
            rot,
            scale,
            zBase
        });
    }
    return positions;
}
function useInView(threshold = 0.1) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        setInView(true);
                        obs.disconnect();
                    }
                }
            }["useInView.useEffect"], {
                threshold
            });
            obs.observe(el);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return [
        ref,
        inView
    ];
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
function MembreGridCard({ membre, isSelected, onSelect }) {
    _s1();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        onClick: ()=>onSelect(isSelected ? null : membre.id),
        style: {
            borderRadius: "12px",
            overflow: "hidden",
            background: "linear-gradient(145deg, #0f0a05 0%, #171008 100%)",
            border: `1px solid ${isSelected ? "rgba(var(--bn-green-rgb),0.55)" : "rgba(var(--bn-green-rgb),0.22)"}`,
            boxShadow: hovered || isSelected ? "0 22px 60px rgba(0,0,0,0.70), 0 0 0 1px rgba(var(--bn-green-rgb),0.22)" : "0 10px 28px rgba(0,0,0,0.55)",
            transform: hovered ? "translateY(-3px)" : "translateY(0)",
            transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
            cursor: "pointer",
            minWidth: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    height: "170px",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: membre.photo,
                        alt: membre.nom,
                        style: {
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top center",
                            transform: hovered ? "scale(1.06)" : "scale(1.02)",
                            transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                            display: "block"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(10,5,2,0.90) 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            left: 12,
                            right: 12,
                            bottom: 12,
                            textAlign: "left"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "0.62rem",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: "var(--bn-green)",
                                    marginBottom: "6px"
                                },
                                children: membre.role
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "0.98rem",
                                    fontWeight: 700,
                                    color: "#ffffff",
                                    lineHeight: 1.2,
                                    marginBottom: "3px"
                                },
                                children: membre.nom
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "0.78rem",
                                    color: "rgba(255,255,255,0.82)",
                                    fontStyle: "italic"
                                },
                                children: membre.profession
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-membre.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "12px 14px 14px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: "0.68rem",
                        color: "rgba(255,255,255,0.78)",
                        letterSpacing: "0.10em",
                        fontFamily: "'Cormorant Garamond', serif",
                        textTransform: "uppercase"
                    },
                    children: [
                        "📍 ",
                        membre.ville
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/sect-membre.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-membre.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/sect-membre.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s1(MembreGridCard, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c = MembreGridCard;
// ─── Carte membre ─────────────────────────────────────────────────────────────
function MembreCard({ membre, pos, index, isSelected, onSelect, anySelected }) {
    _s2();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ref, inView] = useInView(0.05);
    const delay = index % 6 * 0.08;
    const rot = isSelected ? 0 : hovered ? pos.rot * 0.3 : pos.rot;
    const sc = isSelected ? 1.0 : hovered ? 1.05 : pos.scale;
    const zi = isSelected ? 100 : hovered ? 50 : anySelected ? Math.max(pos.zBase - 5, 1) : pos.zBase;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            position: "absolute",
            left: `${pos.baseX}%`,
            top: `${pos.baseY}%`,
            width: "200px",
            transform: inView ? `translate(-50%, -50%) rotate(${rot}deg) scale(${sc})` : `translate(-50%, -50%) rotate(${pos.rot}deg) scale(0.7)`,
            opacity: inView ? anySelected && !isSelected ? 0.35 : 1 : 0,
            zIndex: zi,
            transition: `
          transform 0.55s ${isSelected ? "0s" : `${delay}s`} cubic-bezier(0.34,1.1,0.64,1),
          opacity   0.5s  ${delay}s ease,
          z-index   0s
        `,
            cursor: "pointer"
        },
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        onClick: ()=>onSelect(isSelected ? null : membre.id),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "4px",
                    boxShadow: isSelected ? "0 40px 100px rgba(0,0,0,0.80), 0 0 0 2px rgba(var(--bn-green-rgb),0.60)" : hovered ? "0 20px 50px rgba(0,0,0,0.70), 0 0 0 1.5px rgba(var(--bn-green-rgb),0.35)" : "4px 8px 24px rgba(0,0,0,0.60), 2px 3px 8px rgba(0,0,0,0.40)",
                    transition: "box-shadow 0.45s ease"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-membre.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    borderRadius: "4px",
                    overflow: "hidden",
                    background: "#0f0a05",
                    border: `1px solid ${isSelected ? "rgba(var(--bn-green-rgb),0.55)" : "rgba(var(--bn-green-rgb),0.20)"}`,
                    transition: "border-color 0.4s ease"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: "4px",
                            background: "linear-gradient(90deg, transparent, var(--bn-green), var(--bn-white), var(--bn-green), transparent)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            height: "160px",
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: membre.photo,
                                alt: membre.nom,
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "top center",
                                    display: "block",
                                    transform: hovered || isSelected ? "scale(1.08)" : "scale(1.0)",
                                    transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(10,5,2,0.90) 100%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    bottom: "10px",
                                    left: "10px",
                                    right: "10px",
                                    textAlign: "center"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
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
                                        display: "inline-block"
                                    },
                                    children: membre.role
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/sect-membre.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "14px 14px 16px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "0.88rem",
                                    fontWeight: 700,
                                    color: "#ffffff",
                                    margin: "0 0 4px 0",
                                    lineHeight: 1.2
                                },
                                children: membre.nom
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "0.78rem",
                                    color: "rgba(255,255,255,0.82)",
                                    margin: "0 0 8px 0",
                                    fontStyle: "italic"
                                },
                                children: membre.profession
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "0.60rem",
                                        color: "rgba(255,255,255,0.72)",
                                        letterSpacing: "0.1em",
                                        fontFamily: "'Cormorant Garamond', serif",
                                        textTransform: "uppercase"
                                    },
                                    children: [
                                        "📍 ",
                                        membre.ville
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/sect-membre.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-membre.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "-10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: isSelected ? "radial-gradient(circle at 35% 35%, var(--bn-white), var(--bn-green))" : "radial-gradient(circle at 35% 35%, rgba(var(--bn-green-rgb),0.65), rgba(0,0,0,0.85))",
                    boxShadow: isSelected ? "0 2px 8px rgba(var(--bn-green-rgb),0.55)" : "0 2px 5px rgba(0,0,0,0.50)",
                    border: "1.5px solid rgba(255,255,255,0.15)",
                    zIndex: 10,
                    transition: "background 0.3s, box-shadow 0.3s"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-membre.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/sect-membre.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
_s2(MembreCard, "k4QjvKw6fARuBrNjr413H5KlV9M=", false, function() {
    return [
        useInView
    ];
});
_c1 = MembreCard;
// ─── Panneau détail (focus) ───────────────────────────────────────────────────
function DetailPanel({ membre, onClose, isMobile }) {
    _s3();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetailPanel.useEffect": ()=>{
            setTimeout({
                "DetailPanel.useEffect": ()=>setMounted(true)
            }["DetailPanel.useEffect"], 20);
        }
    }["DetailPanel.useEffect"], []);
    if (!membre) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.0)",
                    zIndex: 200,
                    cursor: "pointer"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-membre.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    right: isMobile ? "16px" : mounted ? "32px" : "-420px",
                    left: isMobile ? "16px" : "auto",
                    bottom: isMobile ? mounted ? "16px" : "-520px" : "auto",
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
                    transition: isMobile ? "bottom 0.55s cubic-bezier(0.34,1.1,0.64,1)" : "right 0.55s cubic-bezier(0.34,1.1,0.64,1)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: "3px",
                            background: "linear-gradient(90deg, transparent, var(--bn-green), var(--bn-white), var(--bn-green), transparent)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        style: {
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
                            transition: "background 0.25s"
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.background = "rgba(var(--bn-green-rgb),0.28)",
                        onMouseLeave: (e)=>e.currentTarget.style.background = "rgba(var(--bn-green-rgb),0.14)",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            height: "260px",
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: membre.photo,
                                alt: membre.nom,
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "top center",
                                    display: "block",
                                    animation: "zoomIn 0.8s cubic-bezier(0.4,0,0.2,1) forwards"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(10,5,2,0.90) 100%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 444,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    bottom: "20px",
                                    left: "24px",
                                    right: "24px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Cormorant Garamond', serif",
                                            fontSize: "0.68rem",
                                            letterSpacing: "0.22em",
                                            textTransform: "uppercase",
                                            color: "var(--bn-green)",
                                            marginBottom: "6px"
                                        },
                                        children: membre.role
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/sect-membre.tsx",
                                        lineNumber: 456,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: "1.45rem",
                                            fontWeight: 900,
                                            color: "#ffffff",
                                            margin: 0,
                                            lineHeight: 1.15,
                                            textShadow: "0 2px 12px rgba(0,0,0,0.8)"
                                        },
                                        children: membre.nom
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/sect-membre.tsx",
                                        lineNumber: 466,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 431,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "24px 28px 32px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "10px",
                                    flexWrap: "wrap",
                                    marginBottom: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "'Cormorant Garamond', serif",
                                            fontSize: "0.75rem",
                                            padding: "5px 14px",
                                            borderRadius: "20px",
                                            background: "rgba(var(--bn-green-rgb),0.12)",
                                            border: "1px solid rgba(var(--bn-green-rgb),0.32)",
                                            color: "rgba(255,255,255,0.92)",
                                            fontStyle: "italic"
                                        },
                                        children: membre.profession
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/sect-membre.tsx",
                                        lineNumber: 484,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "'Cormorant Garamond', serif",
                                            fontSize: "0.65rem",
                                            padding: "5px 12px",
                                            borderRadius: "20px",
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.10)",
                                            color: "rgba(255,255,255,0.78)"
                                        },
                                        children: [
                                            "📍 ",
                                            membre.ville
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/sect-membre.tsx",
                                        lineNumber: 496,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 483,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "40px",
                                    height: "1.5px",
                                    background: "linear-gradient(90deg, var(--bn-green), transparent)",
                                    marginBottom: "16px",
                                    borderRadius: "2px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 510,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "1.05rem",
                                    lineHeight: 1.80,
                                    color: "rgba(255,255,255,0.68)",
                                    margin: 0
                                },
                                children: membre.bio
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 513,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 481,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-membre.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s3(DetailPanel, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c2 = DetailPanel;
// ─── Header section ───────────────────────────────────────────────────────────
function SectionHeader() {
    _s4();
    const [ref, inView] = useInView(0.2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            textAlign: "center",
            marginBottom: "20px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.1,0.64,1)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "14px",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.70rem",
                    fontWeight: 600,
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: "var(--bn-green)",
                    marginBottom: "22px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: "40px",
                            height: "1px",
                            background: "linear-gradient(90deg, transparent, var(--bn-green))",
                            display: "block"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 551,
                        columnNumber: 9
                    }, this),
                    "Le Clan",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: "40px",
                            height: "1px",
                            background: "linear-gradient(90deg, var(--bn-green), transparent)",
                            display: "block"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 553,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-membre.tsx",
                lineNumber: 539,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 5vw, 3.6rem)",
                    fontWeight: 900,
                    color: "#ffffff",
                    margin: "0 0 20px 0",
                    lineHeight: 1.08
                },
                children: [
                    "Ceux qui font",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 564,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        style: {
                            color: "var(--bn-green)",
                            fontStyle: "italic"
                        },
                        children: "vivre notre famille"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 565,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-membre.tsx",
                lineNumber: 556,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(0.98rem, 1.4vw, 1.12rem)",
                    color: "rgba(255,255,255,0.78)",
                    maxWidth: "480px",
                    margin: "0 auto",
                    lineHeight: 1.8
                },
                children: "Cliquez sur une carte pour découvrir chaque membre et le rôle qu'il joue au cœur de notre clan."
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-membre.tsx",
                lineNumber: 568,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/sect-membre.tsx",
        lineNumber: 532,
        columnNumber: 5
    }, this);
}
_s4(SectionHeader, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        useInView
    ];
});
_c3 = SectionHeader;
function SectionMembres() {
    _s5();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SectionMembres.useMemo[positions]": ()=>generatePositions(MEMBRES.length)
    }["SectionMembres.useMemo[positions]"], []);
    const selectedMembre = MEMBRES.find((m)=>m.id === selected) || null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SectionMembres.useEffect": ()=>{
            const check = {
                "SectionMembres.useEffect.check": ()=>setIsMobile(window.innerWidth <= 900)
            }["SectionMembres.useEffect.check"];
            check();
            window.addEventListener("resize", check, {
                passive: true
            });
            return ({
                "SectionMembres.useEffect": ()=>window.removeEventListener("resize", check)
            })["SectionMembres.useEffect"];
        }
    }["SectionMembres.useEffect"], []);
    // Fermer avec Escape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SectionMembres.useEffect": ()=>{
            const fn = {
                "SectionMembres.useEffect.fn": (e)=>{
                    if (e.key === "Escape") setSelected(null);
                }
            }["SectionMembres.useEffect.fn"];
            window.addEventListener("keydown", fn);
            return ({
                "SectionMembres.useEffect": ()=>window.removeEventListener("keydown", fn)
            })["SectionMembres.useEffect"];
        }
    }["SectionMembres.useEffect"], []);
    // Hauteur de la table selon nb de membres
    const rows = Math.ceil(MEMBRES.length / 4);
    const tableHeight = rows * 220 + 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-membre.tsx",
                lineNumber: 609,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "membres-root",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "membres-header",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {}, void 0, false, {
                            fileName: "[project]/components/sections/sect-membre.tsx",
                            lineNumber: 704,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 703,
                        columnNumber: 9
                    }, this),
                    isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "membres-grid",
                        children: MEMBRES.map((membre)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MembreGridCard, {
                                membre: membre,
                                isSelected: selected === membre.id,
                                onSelect: setSelected
                            }, membre.id, false, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 710,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 708,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-surface",
                        style: {
                            height: `${tableHeight}px`
                        },
                        children: MEMBRES.map((membre, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MembreCard, {
                                membre: membre,
                                pos: positions[i],
                                index: i,
                                isSelected: selected === membre.id,
                                anySelected: selected !== null,
                                onSelect: setSelected
                            }, membre.id, false, {
                                fileName: "[project]/components/sections/sect-membre.tsx",
                                lineNumber: 721,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 719,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "membres-cta",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/nos-membres",
                            style: {
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
                                textDecoration: "none"
                            },
                            onMouseEnter: (e)=>{
                                const fill = e.currentTarget.querySelector(".cta-fill");
                                if (fill) fill.style.transform = "scaleX(1)";
                                e.currentTarget.style.color = "#0B0F0C";
                            },
                            onMouseLeave: (e)=>{
                                const fill = e.currentTarget.querySelector(".cta-fill");
                                if (fill) fill.style.transform = "scaleX(0)";
                                e.currentTarget.style.color = "rgba(255,255,255,0.95)";
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "cta-fill",
                                    style: {
                                        position: "absolute",
                                        inset: 0,
                                        background: "var(--bn-green)",
                                        transform: "scaleX(0)",
                                        transformOrigin: "left",
                                        transition: "transform 0.42s cubic-bezier(0.4,0,0.2,1)",
                                        borderRadius: "4px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/sect-membre.tsx",
                                    lineNumber: 767,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        position: "relative",
                                        zIndex: 1
                                    },
                                    children: "Voir tous les membres"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/sect-membre.tsx",
                                    lineNumber: 776,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        position: "relative",
                                        zIndex: 1
                                    },
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/sect-membre.tsx",
                                    lineNumber: 777,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/sect-membre.tsx",
                            lineNumber: 736,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-membre.tsx",
                        lineNumber: 735,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-membre.tsx",
                lineNumber: 701,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailPanel, {
                membre: selectedMembre,
                onClose: ()=>setSelected(null),
                isMobile: isMobile
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-membre.tsx",
                lineNumber: 783,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s5(SectionMembres, "dXsLmP04rDOdQxUGEmqLMPcfPt0=");
_c4 = SectionMembres;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "MembreGridCard");
__turbopack_context__.k.register(_c1, "MembreCard");
__turbopack_context__.k.register(_c2, "DetailPanel");
__turbopack_context__.k.register(_c3, "SectionHeader");
__turbopack_context__.k.register(_c4, "SectionMembres");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/sect-events.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionEvenements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
const EVENEMENTS = [
    {
        id: 1,
        type: "image",
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85",
        categorie: "Mariage",
        titre: "Mariage de Rodrigue & Cynthia",
        date: "14 Février 2025",
        lieu: "Libreville",
        description: "Une union bénie sous le signe de l'amour et des traditions ancestrales. Le clan s'est rassemblé en force pour célébrer cette journée inoubliable.",
        taille: "grande"
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
        taille: "grande"
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
        taille: "moyenne"
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
        taille: "moyenne"
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
        taille: "petite"
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
        taille: "petite"
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
        taille: "moyenne"
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
        taille: "petite"
    }
];
// Couleurs par catégorie
const CAT_COLORS = {
    "Mariage": "var(--bn-green)",
    "Fête Traditionnelle": "var(--bn-green)",
    "Remise de Prix": "var(--bn-green)",
    "Solidarité": "var(--bn-green)",
    "Projet": "var(--bn-green)",
    "Mémoire": "var(--bn-green)",
    "Assemblée": "var(--bn-green)",
    "Baptême": "var(--bn-green)"
};
// ─── Hook IntersectionObserver ────────────────────────────────────────────────
function useInView(threshold = 0.15) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        setInView(true);
                        obs.disconnect();
                    }
                }
            }["useInView.useEffect"], {
                threshold
            });
            obs.observe(el);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return [
        ref,
        inView
    ];
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
// ─── Média (image ou vidéo autoplay) ─────────────────────────────────────────
function EventMedia({ evt, hovered }) {
    _s1();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventMedia.useEffect": ()=>{
            const v = videoRef.current;
            if (!v) return;
            // Jouer quand hovered OU visible dans viewport
            if (hovered) {
                v.play().catch({
                    "EventMedia.useEffect": ()=>{}
                }["EventMedia.useEffect"]);
                setPlaying(true);
            } else {
                v.pause();
                setPlaying(false);
            }
        }
    }["EventMedia.useEffect"], [
        hovered
    ]);
    // Autoplay au scroll (via IntersectionObserver sur la vidéo)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventMedia.useEffect": ()=>{
            const v = videoRef.current;
            if (!v) return;
            const obs = new IntersectionObserver({
                "EventMedia.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        v.play().catch({
                            "EventMedia.useEffect": ()=>{}
                        }["EventMedia.useEffect"]);
                        setPlaying(true);
                    } else {
                        v.pause();
                        setPlaying(false);
                    }
                }
            }["EventMedia.useEffect"], {
                threshold: 0.4
            });
            obs.observe(v);
            return ({
                "EventMedia.useEffect": ()=>obs.disconnect()
            })["EventMedia.useEffect"];
        }
    }["EventMedia.useEffect"], []);
    if (evt.type === "video") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    ref: videoRef,
                    src: evt.src,
                    muted: true,
                    loop: true,
                    playsInline: true,
                    style: {
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transform: hovered ? "scale(1.06)" : "scale(1.01)",
                        transition: "transform 0.9s cubic-bezier(0.4,0,0.2,1)"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-events.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
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
                        transition: "opacity 0.3s"
                    },
                    children: playing ? // Pause icon
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "10",
                        height: "12",
                        viewBox: "0 0 10 12",
                        fill: "white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "0",
                                y: "0",
                                width: "3",
                                height: "12",
                                rx: "1"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-events.tsx",
                                lineNumber: 217,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "7",
                                y: "0",
                                width: "3",
                                height: "12",
                                rx: "1"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-events.tsx",
                                lineNumber: 218,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/sect-events.tsx",
                        lineNumber: 216,
                        columnNumber: 13
                    }, this) : // Play icon
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "10",
                        height: "12",
                        viewBox: "0 0 10 12",
                        fill: "white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0 0 L10 6 L0 12 Z"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-events.tsx",
                            lineNumber: 223,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-events.tsx",
                        lineNumber: 222,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-events.tsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: evt.src,
        alt: evt.titre,
        style: {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transform: hovered ? "scale(1.07)" : "scale(1.01)",
            transition: "transform 0.9s cubic-bezier(0.4,0,0.2,1)"
        }
    }, void 0, false, {
        fileName: "[project]/components/sections/sect-events.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
_s1(EventMedia, "mhzKv0vjp0gngRDKFjUHYvQWUPM=");
_c = EventMedia;
// ─── Card événement ───────────────────────────────────────────────────────────
function EventCard({ evt, index, spanCols = 1, spanRows = 1 }) {
    _s2();
    const [ref, inView] = useInView(0.12);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const delay = index % 4 * 0.10;
    const accent = CAT_COLORS[evt.categorie] || "var(--bn-green)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            gridColumn: `span ${spanCols}`,
            gridRow: `span ${spanRows}`,
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
            boxShadow: hovered ? `0 32px 72px rgba(0,0,0,0.65), 0 0 0 1.5px ${accent}55` : "0 8px 28px rgba(0,0,0,0.50)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EventMedia, {
                evt: evt,
                hovered: hovered
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-events.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
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
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-events.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "16px",
                    border: `1.5px solid ${accent}`,
                    opacity: hovered ? 0.45 : 0,
                    transition: "opacity 0.4s ease",
                    zIndex: 4,
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-events.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "20px 22px 22px",
                    zIndex: 3,
                    transform: hovered ? "translateY(-4px)" : "translateY(0)",
                    transition: "transform 0.45s cubic-bezier(0.34,1.1,0.64,1)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            marginBottom: "8px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: "6px",
                                    height: "6px",
                                    borderRadius: "50%",
                                    background: accent,
                                    display: "inline-block",
                                    flexShrink: 0,
                                    boxShadow: `0 0 6px ${accent}`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-events.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "0.65rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.22em",
                                    textTransform: "uppercase",
                                    color: accent
                                },
                                children: evt.categorie
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-events.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/sect-events.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontFamily: "'Playfair Display', serif",
                            fontSize: spanCols > 1 ? "clamp(1.15rem, 2vw, 1.50rem)" : "1.05rem",
                            fontWeight: 700,
                            color: "#ffffff",
                            margin: "0 0 8px 0",
                            lineHeight: 1.22,
                            textShadow: "0 2px 10px rgba(0,0,0,0.7)"
                        },
                        children: evt.titre
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-events.tsx",
                        lineNumber: 365,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: hovered ? "12px" : "0",
                            transition: "margin 0.35s ease"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "0.75rem",
                                    color: "rgba(255,255,255,0.78)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px"
                                },
                                children: [
                                    "📅 ",
                                    evt.date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/sect-events.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: "3px",
                                    height: "3px",
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,0.25)",
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-events.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: "0.75rem",
                                    color: "rgba(255,255,255,0.78)"
                                },
                                children: [
                                    "📍 ",
                                    evt.lieu
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/sect-events.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/sect-events.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxHeight: hovered ? "80px" : "0",
                            overflow: "hidden",
                            transition: "max-height 0.45s cubic-bezier(0.4,0,0.2,1)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "0.88rem",
                                lineHeight: 1.65,
                                color: "rgba(255,255,255,0.68)",
                                margin: "0 0 0 0",
                                paddingTop: "8px",
                                borderTop: `1px solid rgba(255,255,255,0.08)`
                            },
                            children: evt.description
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-events.tsx",
                            lineNumber: 411,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-events.tsx",
                        lineNumber: 406,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-events.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/sect-events.tsx",
        lineNumber: 267,
        columnNumber: 5
    }, this);
}
_s2(EventCard, "9vNB4BBt1xNHowFZjc882ppyxkM=", false, function() {
    return [
        useInView
    ];
});
_c1 = EventCard;
// ─── Disposition grille intelligente ─────────────────────────────────────────
// Attribue les colonnes/lignes selon la taille déclarée
function buildLayout(events) {
    return events.map((evt)=>{
        if (evt.taille === "grande") return {
            ...evt,
            spanCols: 2,
            spanRows: 2
        };
        if (evt.taille === "moyenne") return {
            ...evt,
            spanCols: 2,
            spanRows: 1
        };
        return {
            ...evt,
            spanCols: 1,
            spanRows: 1
        };
    });
}
// ─── Header section ───────────────────────────────────────────────────────────
function SectionHeader() {
    _s3();
    const [ref, inView] = useInView(0.2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            textAlign: "center",
            marginBottom: "60px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(36px)",
            transition: "opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.1,0.64,1)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "14px",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.70rem",
                    fontWeight: 600,
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    color: "var(--bn-green)",
                    marginBottom: "22px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: "40px",
                            height: "1px",
                            background: "linear-gradient(90deg, transparent, var(--bn-green))",
                            display: "block"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-events.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    "La Vie du Clan",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: "40px",
                            height: "1px",
                            background: "linear-gradient(90deg, var(--bn-green), transparent)",
                            display: "block"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-events.tsx",
                        lineNumber: 463,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-events.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 5vw, 3.6rem)",
                    fontWeight: 900,
                    color: "#ffffff",
                    margin: "0 0 20px 0",
                    lineHeight: 1.08
                },
                children: [
                    "Nos moments",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/sections/sect-events.tsx",
                        lineNumber: 474,
                        columnNumber: 20
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        style: {
                            color: "var(--bn-green)",
                            fontStyle: "italic"
                        },
                        children: "qui nous rassemblent"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-events.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-events.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(0.98rem, 1.4vw, 1.12rem)",
                    color: "rgba(255,255,255,0.78)",
                    maxWidth: "500px",
                    margin: "0 auto",
                    lineHeight: 1.8
                },
                children: "Mariages, fêtes, cérémonies, projets… la vie de notre clan se raconte à travers ces instants précieux que nous vivons ensemble."
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-events.tsx",
                lineNumber: 478,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/sect-events.tsx",
        lineNumber: 442,
        columnNumber: 5
    }, this);
}
_s3(SectionHeader, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        useInView
    ];
});
_c2 = SectionHeader;
// ─── CTA ─────────────────────────────────────────────────────────────────────
function CtaEvenements() {
    _s4();
    const [ref, inView] = useInView(0.2);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            display: "flex",
            justifyContent: "center",
            marginTop: "56px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s 0.2s ease, transform 0.8s 0.2s cubic-bezier(0.34,1.1,0.64,1)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/nos-evenements",
            onMouseEnter: ()=>setHovered(true),
            onMouseLeave: ()=>setHovered(false),
            style: {
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
                transition: "color 0.35s ease"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: "absolute",
                        inset: 0,
                        background: "var(--bn-green)",
                        transform: hovered ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform 0.42s cubic-bezier(0.4,0,0.2,1)",
                        borderRadius: "4px"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-events.tsx",
                    lineNumber: 530,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: "relative",
                        zIndex: 1
                    },
                    children: "Voir tous nos événements"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-events.tsx",
                    lineNumber: 538,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: "relative",
                        zIndex: 1,
                        transform: hovered ? "translateX(6px)" : "translateX(0)",
                        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)"
                    },
                    children: "→"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-events.tsx",
                    lineNumber: 539,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/sect-events.tsx",
            lineNumber: 506,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/sect-events.tsx",
        lineNumber: 498,
        columnNumber: 5
    }, this);
}
_s4(CtaEvenements, "9vNB4BBt1xNHowFZjc882ppyxkM=", false, function() {
    return [
        useInView
    ];
});
_c3 = CtaEvenements;
function SectionEvenements() {
    _s5();
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SectionEvenements.useMemo[layout]": ()=>buildLayout(EVENEMENTS)
    }["SectionEvenements.useMemo[layout]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-events.tsx",
                lineNumber: 555,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "evenements-root",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "evenements-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {}, void 0, false, {
                            fileName: "[project]/components/sections/sect-events.tsx",
                            lineNumber: 626,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "events-grid",
                            children: layout.map((evt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EventCard, {
                                    evt: evt,
                                    index: i,
                                    spanCols: evt.spanCols,
                                    spanRows: evt.spanRows
                                }, evt.id, false, {
                                    fileName: "[project]/components/sections/sect-events.tsx",
                                    lineNumber: 630,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-events.tsx",
                            lineNumber: 628,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CtaEvenements, {}, void 0, false, {
                            fileName: "[project]/components/sections/sect-events.tsx",
                            lineNumber: 640,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/sect-events.tsx",
                    lineNumber: 625,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-events.tsx",
                lineNumber: 624,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s5(SectionEvenements, "+2d9UzJKyVI8Oz6qM0bBqRGtqrQ=");
_c4 = SectionEvenements;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "EventMedia");
__turbopack_context__.k.register(_c1, "EventCard");
__turbopack_context__.k.register(_c2, "SectionHeader");
__turbopack_context__.k.register(_c3, "CtaEvenements");
__turbopack_context__.k.register(_c4, "SectionEvenements");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/sect-contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
// ─── Hook IntersectionObserver ────────────────────────────────────────────────
function useInView(threshold = 0.15) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        setInView(true);
                        obs.disconnect();
                    }
                }
            }["useInView.useEffect"], {
                threshold
            });
            obs.observe(el);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return [
        ref,
        inView
    ];
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
// ─── Motifs décoratifs africains (SVG inline) ─────────────────────────────────
function AfricanPattern({ opacity = 0.04, color = "var(--bn-green)" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        style: {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none"
        },
        viewBox: "0 0 400 400",
        preserveAspectRatio: "xMidYMid slice",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                    id: "afro-pat",
                    x: "0",
                    y: "0",
                    width: "40",
                    height: "40",
                    patternUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "20,4 36,20 20,36 4,20",
                            fill: "none",
                            stroke: color,
                            strokeWidth: "0.8",
                            opacity: opacity * 10
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-contact.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "0",
                            cy: "0",
                            r: "1.5",
                            fill: color,
                            opacity: opacity * 8
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-contact.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "40",
                            cy: "0",
                            r: "1.5",
                            fill: color,
                            opacity: opacity * 8
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-contact.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "0",
                            cy: "40",
                            r: "1.5",
                            fill: color,
                            opacity: opacity * 8
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-contact.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "40",
                            cy: "40",
                            r: "1.5",
                            fill: color,
                            opacity: opacity * 8
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-contact.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "20",
                            cy: "20",
                            r: "2",
                            fill: color,
                            opacity: opacity * 6
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-contact.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "0",
                            x2: "8",
                            y2: "8",
                            stroke: color,
                            strokeWidth: "0.5",
                            opacity: opacity * 5
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-contact.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "40",
                            y1: "0",
                            x2: "32",
                            y2: "8",
                            stroke: color,
                            strokeWidth: "0.5",
                            opacity: opacity * 5
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-contact.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "40",
                            x2: "8",
                            y2: "32",
                            stroke: color,
                            strokeWidth: "0.5",
                            opacity: opacity * 5
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-contact.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "40",
                            y1: "40",
                            x2: "32",
                            y2: "32",
                            stroke: color,
                            strokeWidth: "0.5",
                            opacity: opacity * 5
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-contact.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/sect-contact.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-contact.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "100%",
                height: "100%",
                fill: "url(#afro-pat)"
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-contact.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/sect-contact.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = AfricanPattern;
function FormField({ label, type = "text", name, value, onChange, required = false, placeholder, rows, optional }) {
    _s1();
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasValue, setHasValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (e)=>{
        onChange(e);
        setHasValue(e.target.value.length > 0);
    };
    const isActive = focused || hasValue;
    const isTextarea = type === "textarea";
    const sharedStyle = {
        width: "100%",
        background: "transparent",
        border: "none",
        outline: "none",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.05rem",
        color: "#ffffff",
        resize: "none",
        lineHeight: 1.7,
        padding: isTextarea ? "28px 0 12px" : "24px 0 8px",
        display: "block",
        caretColor: "var(--bn-green)"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            marginBottom: "8px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
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
                    userSelect: "none"
                },
                children: [
                    label,
                    optional && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            marginLeft: "8px",
                            fontSize: "0.60rem",
                            color: "rgba(255,255,255,0.55)",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase"
                        },
                        children: "— facultatif"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-contact.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-contact.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            isTextarea ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                name: name,
                value: value,
                onChange: handleChange,
                onFocus: ()=>setFocused(true),
                onBlur: ()=>setFocused(false),
                rows: rows || 5,
                required: required,
                placeholder: "",
                style: sharedStyle
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-contact.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                name: name,
                value: value,
                onChange: handleChange,
                onFocus: ()=>setFocused(true),
                onBlur: ()=>setFocused(false),
                required: required,
                placeholder: "",
                style: sharedStyle
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-contact.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    height: "1px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            background: "rgba(255,255,255,0.12)",
                            borderRadius: "2px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-contact.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(90deg, var(--bn-green), var(--bn-white))",
                            borderRadius: "2px",
                            transform: focused ? "scaleX(1)" : "scaleX(0)",
                            transformOrigin: "left",
                            transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-contact.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-contact.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/sect-contact.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s1(FormField, "ky48i9IJHabV6FqJk/+nQBck+cI=");
_c1 = FormField;
// ─── Particules flottantes ────────────────────────────────────────────────────
function FloatingParticles() {
    const particles = Array.from({
        length: 18
    }, (_, i)=>({
            id: i,
            x: 5 + i * 37 % 90,
            y: 5 + i * 53 % 90,
            size: 1.5 + i % 4 * 0.8,
            dur: 6 + i % 5 * 2.2,
            delay: i % 7 * 0.9,
            driftX: (i % 5 - 2) * 18,
            driftY: (i % 4 - 2) * 22
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        ${particles.map((p)=>`
          @keyframes float-${p.id} {
            0%   { transform: translate(0px, 0px) scale(1);   opacity: 0.4; }
            33%  { transform: translate(${p.driftX * 0.5}px, ${p.driftY}px) scale(1.3); opacity: 0.8; }
            66%  { transform: translate(${p.driftX}px, ${p.driftY * 0.4}px) scale(0.8); opacity: 0.5; }
            100% { transform: translate(0px, 0px) scale(1);   opacity: 0.4; }
          }
        `).join("")}
      `
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-contact.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            particles.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        borderRadius: "50%",
                        background: p.id % 3 === 0 ? "var(--bn-green)" : p.id % 3 === 1 ? "var(--bn-white)" : "var(--bn-green)",
                        animation: `float-${p.id} ${p.dur}s ${p.delay}s ease-in-out infinite`
                    }
                }, p.id, false, {
                    fileName: "[project]/components/sections/sect-contact.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/sect-contact.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
_c2 = FloatingParticles;
function SectionContact() {
    _s2();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const orb1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const orb2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nom: "",
        prenom: "",
        email: "",
        motif: ""
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [headerRef, headerInView] = useInView(0.2);
    const [formRef, formInView] = useInView(0.1);
    const [infoRef, infoInView] = useInView(0.2);
    // ── Parallax au scroll ────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SectionContact.useEffect": ()=>{
            const onScroll = {
                "SectionContact.useEffect.onScroll": ()=>{
                    const section = sectionRef.current;
                    if (!section) return;
                    const rect = section.getBoundingClientRect();
                    const vh = window.innerHeight;
                    const prog = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
                    const offset = (prog - 0.5) * 120;
                    if (bgRef.current) bgRef.current.style.transform = `translateY(${offset * 0.5}px)`;
                    if (orb1Ref.current) orb1Ref.current.style.transform = `translate(${offset * 0.18}px, ${offset * 0.30}px)`;
                    if (orb2Ref.current) orb2Ref.current.style.transform = `translate(${-offset * 0.22}px, ${offset * 0.15}px)`;
                }
            }["SectionContact.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "SectionContact.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["SectionContact.useEffect"];
        }
    }["SectionContact.useEffect"], []);
    // ── Gestion formulaire ────────────────────────────────────────────────────
    const handleChange = (e)=>{
        const { name, value } = e.target;
        const key = name;
        setFormData((p)=>({
                ...p,
                [key]: value
            }));
        if (errors[key]) setErrors((p)=>({
                ...p,
                [key]: ""
            }));
    };
    const validate = ()=>{
        const errs = {};
        if (!formData.email.trim()) errs.email = "L'email est requis.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Email invalide.";
        if (!formData.motif.trim()) errs.motif = "Veuillez décrire votre motif.";
        return errs;
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setSending(true);
        // Simulation envoi
        setTimeout(()=>{
            setSending(false);
            setSubmitted(true);
        }, 1800);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-contact.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                className: "contact-root",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: bgRef,
                        style: {
                            position: "absolute",
                            inset: 0,
                            background: "radial-gradient(circle at 30% 25%, rgba(var(--bn-green-rgb),0.10) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(var(--bn-green-rgb),0.06) 0%, transparent 45%), radial-gradient(circle at 50% 80%, rgba(var(--bn-green-rgb),0.05) 0%, transparent 55%)",
                            zIndex: 0,
                            willChange: "transform"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-contact.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            zIndex: 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AfricanPattern, {
                            opacity: 0.025,
                            color: "var(--bn-green)"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-contact.tsx",
                            lineNumber: 408,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-contact.tsx",
                        lineNumber: 407,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: orb1Ref,
                        style: {
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
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-contact.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: orb2Ref,
                        style: {
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
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-contact.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            zIndex: 3,
                            pointerEvents: "none"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingParticles, {}, void 0, false, {
                            fileName: "[project]/components/sections/sect-contact.tsx",
                            lineNumber: 449,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-contact.tsx",
                        lineNumber: 448,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: "50%",
                            width: "1px",
                            background: "linear-gradient(to bottom, transparent 0%, rgba(var(--bn-green-rgb),0.22) 20%, rgba(var(--bn-green-rgb),0.22) 80%, transparent 100%)",
                            zIndex: 4,
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-contact.tsx",
                        lineNumber: 453,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: infoRef,
                                style: {
                                    paddingRight: "60px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    borderRight: "1px solid rgba(var(--bn-green-rgb),0.16)",
                                    opacity: infoInView ? 1 : 0,
                                    transform: infoInView ? "translateX(0)" : "translateX(-50px)",
                                    transition: "opacity 1s ease, transform 1s cubic-bezier(0.34,1.1,0.64,1)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "12px",
                                            fontFamily: "'Cormorant Garamond', serif",
                                            fontSize: "0.68rem",
                                            fontWeight: 600,
                                            letterSpacing: "0.30em",
                                            textTransform: "uppercase",
                                            color: "var(--bn-green)",
                                            marginBottom: "28px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    width: "36px",
                                                    height: "1px",
                                                    background: "var(--bn-green)",
                                                    display: "block"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/sect-contact.tsx",
                                                lineNumber: 493,
                                                columnNumber: 15
                                            }, this),
                                            "Nous Joindre"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/sect-contact.tsx",
                                        lineNumber: 481,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: "clamp(2rem, 4vw, 3.2rem)",
                                            fontWeight: 900,
                                            color: "#ffffff",
                                            margin: "0 0 24px 0",
                                            lineHeight: 1.10
                                        },
                                        children: [
                                            "Parlez-nous,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/sections/sect-contact.tsx",
                                                lineNumber: 506,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                style: {
                                                    color: "var(--bn-green)",
                                                    fontStyle: "italic"
                                                },
                                                children: "nous vous écoutons"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/sect-contact.tsx",
                                                lineNumber: 507,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/sect-contact.tsx",
                                        lineNumber: 498,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "'Cormorant Garamond', serif",
                                            fontSize: "1.08rem",
                                            lineHeight: 1.85,
                                            color: "rgba(255,255,255,0.78)",
                                            margin: "0 0 48px 0"
                                        },
                                        children: "Vous souhaitez rejoindre le clan, signaler une situation d'urgence familiale, proposer un projet ou simplement nous saluer ? Notre porte est toujours ouverte."
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/sect-contact.tsx",
                                        lineNumber: 510,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 18 18",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 3h12a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z",
                                                        stroke: "var(--bn-green)",
                                                        strokeWidth: "1.3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/sect-contact.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M2 4l7 6 7-6",
                                                        stroke: "var(--bn-green)",
                                                        strokeWidth: "1.3",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/sect-contact.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/sect-contact.tsx",
                                                lineNumber: 525,
                                                columnNumber: 19
                                            }, this),
                                            label: "Email",
                                            value: "contact@clan-nguyen.ga"
                                        },
                                        {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 18 18",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M9 2C6.24 2 4 4.24 4 7c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z",
                                                        stroke: "var(--bn-green)",
                                                        strokeWidth: "1.3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/sect-contact.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "9",
                                                        cy: "7",
                                                        r: "2",
                                                        stroke: "var(--bn-green)",
                                                        strokeWidth: "1.3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/sect-contact.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/sect-contact.tsx",
                                                lineNumber: 535,
                                                columnNumber: 19
                                            }, this),
                                            label: "Siège social",
                                            value: "Libreville, Gabon"
                                        },
                                        {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 18 18",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "9",
                                                        cy: "9",
                                                        r: "7",
                                                        stroke: "var(--bn-green)",
                                                        strokeWidth: "1.3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/sect-contact.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M9 5v4l3 2",
                                                        stroke: "var(--bn-green)",
                                                        strokeWidth: "1.3",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/sect-contact.tsx",
                                                        lineNumber: 547,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/sect-contact.tsx",
                                                lineNumber: 545,
                                                columnNumber: 19
                                            }, this),
                                            label: "Disponibilité",
                                            value: "Lun – Sam, 8h00 – 18h00"
                                        }
                                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: "16px",
                                                marginBottom: "22px",
                                                opacity: infoInView ? 1 : 0,
                                                transform: infoInView ? "translateX(0)" : "translateX(-30px)",
                                                transition: `opacity 0.75s ${0.25 + i * 0.12}s ease, transform 0.75s ${0.25 + i * 0.12}s cubic-bezier(0.34,1.1,0.64,1)`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: "40px",
                                                        height: "40px",
                                                        borderRadius: "10px",
                                                        background: "rgba(var(--bn-green-rgb),0.10)",
                                                        border: "1px solid rgba(var(--bn-green-rgb),0.28)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        flexShrink: 0
                                                    },
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-contact.tsx",
                                                    lineNumber: 566,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'Cormorant Garamond', serif",
                                                                fontSize: "0.65rem",
                                                                letterSpacing: "0.18em",
                                                                textTransform: "uppercase",
                                                                color: "rgba(var(--bn-green-rgb),0.80)",
                                                                marginBottom: "3px"
                                                            },
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/sect-contact.tsx",
                                                            lineNumber: 580,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'Cormorant Garamond', serif",
                                                                fontSize: "1rem",
                                                                color: "rgba(255,255,255,0.78)"
                                                            },
                                                            children: item.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/sect-contact.tsx",
                                                            lineNumber: 590,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/sect-contact.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/sections/sect-contact.tsx",
                                            lineNumber: 554,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: "16px",
                                            paddingTop: "28px",
                                            borderTop: "1px solid rgba(var(--bn-green-rgb),0.18)",
                                            fontFamily: "'Playfair Display', serif",
                                            fontStyle: "italic",
                                            fontSize: "1rem",
                                            color: "rgba(255,255,255,0.78)",
                                            lineHeight: 1.6
                                        },
                                        children: "« Unité · Amour · Prospérité »"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/sect-contact.tsx",
                                        lineNumber: 602,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/sect-contact.tsx",
                                lineNumber: 467,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: formRef,
                                style: {
                                    paddingLeft: "60px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    opacity: formInView ? 1 : 0,
                                    transform: formInView ? "translateX(0)" : "translateX(50px)",
                                    transition: "opacity 1s 0.15s ease, transform 1s 0.15s cubic-bezier(0.34,1.1,0.64,1)"
                                },
                                children: submitted ? /* ── Message succès ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "success-msg",
                                    style: {
                                        textAlign: "center",
                                        padding: "40px 20px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "72px",
                                                height: "72px",
                                                borderRadius: "50%",
                                                background: "rgba(200,169,110,0.12)",
                                                border: "1.5px solid rgba(200,169,110,0.40)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                margin: "0 auto 24px",
                                                overflow: "hidden"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/logo-BN.png",
                                                alt: "Logo BA NGOMBOUNDA",
                                                width: 72,
                                                height: 72,
                                                style: {
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/sect-contact.tsx",
                                                lineNumber: 644,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/sect-contact.tsx",
                                            lineNumber: 632,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontFamily: "'Playfair Display', serif",
                                                fontSize: "1.6rem",
                                                fontWeight: 700,
                                                color: "#ffffff",
                                                margin: "0 0 14px 0"
                                            },
                                            children: "Message envoyé !"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/sect-contact.tsx",
                                            lineNumber: 652,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'Cormorant Garamond', serif",
                                                fontSize: "1.05rem",
                                                color: "rgba(255,255,255,0.55)",
                                                lineHeight: 1.75,
                                                margin: "0 0 32px 0"
                                            },
                                            children: "Merci de nous avoir contactés. Un membre du clan vous répondra dans les meilleurs délais."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/sect-contact.tsx",
                                            lineNumber: 661,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSubmitted(false);
                                                setFormData({
                                                    nom: "",
                                                    prenom: "",
                                                    email: "",
                                                    motif: ""
                                                });
                                            },
                                            style: {
                                                fontFamily: "'Cormorant Garamond', serif",
                                                fontSize: "0.82rem",
                                                letterSpacing: "0.14em",
                                                textTransform: "uppercase",
                                                color: "#C8A96E",
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                                padding: "8px 0",
                                                borderBottom: "1px solid rgba(200,169,110,0.35)"
                                            },
                                            children: "Envoyer un autre message →"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/sect-contact.tsx",
                                            lineNumber: 670,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/sect-contact.tsx",
                                    lineNumber: 631,
                                    columnNumber: 15
                                }, this) : /* ── Formulaire ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    noValidate: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: "40px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "'Cormorant Garamond', serif",
                                                        fontSize: "0.68rem",
                                                        letterSpacing: "0.28em",
                                                        textTransform: "uppercase",
                                                        color: "rgba(200,169,110,0.55)",
                                                        display: "block",
                                                        marginBottom: "10px"
                                                    },
                                                    children: "Votre message"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-contact.tsx",
                                                    lineNumber: 693,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontFamily: "'Playfair Display', serif",
                                                        fontSize: "1.55rem",
                                                        fontWeight: 700,
                                                        color: "#ffffff",
                                                        margin: 0,
                                                        lineHeight: 1.2
                                                    },
                                                    children: "Écrivez-nous"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-contact.tsx",
                                                    lineNumber: 704,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/sect-contact.tsx",
                                            lineNumber: 692,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "grid",
                                                gridTemplateColumns: "1fr 1fr",
                                                gap: "20px",
                                                marginBottom: "28px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                                    label: "Nom",
                                                    name: "nom",
                                                    value: formData.nom,
                                                    onChange: handleChange,
                                                    optional: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-contact.tsx",
                                                    lineNumber: 718,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                                    label: "Prénom",
                                                    name: "prenom",
                                                    value: formData.prenom,
                                                    onChange: handleChange,
                                                    optional: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-contact.tsx",
                                                    lineNumber: 725,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/sect-contact.tsx",
                                            lineNumber: 717,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: errors.email ? "field-error" : "",
                                            style: {
                                                marginBottom: "28px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                                    label: "Adresse email",
                                                    type: "email",
                                                    name: "email",
                                                    value: formData.email,
                                                    onChange: handleChange,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-contact.tsx",
                                                    lineNumber: 739,
                                                    columnNumber: 19
                                                }, this),
                                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'Cormorant Garamond', serif",
                                                        fontSize: "0.78rem",
                                                        color: "#D4856A",
                                                        margin: "6px 0 0",
                                                        letterSpacing: "0.04em"
                                                    },
                                                    children: [
                                                        "⚠ ",
                                                        errors.email
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/sect-contact.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/sect-contact.tsx",
                                            lineNumber: 735,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: errors.motif ? "field-error" : "",
                                            style: {
                                                marginBottom: "36px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                                    label: "Motif de votre message",
                                                    type: "textarea",
                                                    name: "motif",
                                                    value: formData.motif,
                                                    onChange: handleChange,
                                                    required: true,
                                                    rows: 5
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-contact.tsx",
                                                    lineNumber: 765,
                                                    columnNumber: 19
                                                }, this),
                                                errors.motif && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'Cormorant Garamond', serif",
                                                        fontSize: "0.78rem",
                                                        color: "#D4856A",
                                                        margin: "6px 0 0",
                                                        letterSpacing: "0.04em"
                                                    },
                                                    children: [
                                                        "⚠ ",
                                                        errors.motif
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/sect-contact.tsx",
                                                    lineNumber: 775,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        textAlign: "right",
                                                        marginTop: "6px",
                                                        fontFamily: "'Cormorant Garamond', serif",
                                                        fontSize: "0.70rem",
                                                        color: "rgba(255,255,255,0.22)",
                                                        letterSpacing: "0.08em"
                                                    },
                                                    children: [
                                                        formData.motif.length,
                                                        " caractères"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/sect-contact.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/sect-contact.tsx",
                                            lineNumber: 761,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: `submit-btn ${sending ? "sending" : ""}`,
                                            disabled: sending,
                                            children: sending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Envoi en cours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/sect-contact.tsx",
                                                        lineNumber: 806,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "spinner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/sect-contact.tsx",
                                                        lineNumber: 807,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Envoyer le message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/sect-contact.tsx",
                                                        lineNumber: 811,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            position: "relative",
                                                            zIndex: 1,
                                                            fontSize: "1.1rem"
                                                        },
                                                        children: "✦"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/sect-contact.tsx",
                                                        lineNumber: 812,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/sect-contact.tsx",
                                            lineNumber: 799,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                marginTop: "16px",
                                                fontFamily: "'Cormorant Garamond', serif",
                                                fontSize: "0.72rem",
                                                color: "rgba(255,255,255,0.22)",
                                                textAlign: "center",
                                                letterSpacing: "0.06em",
                                                lineHeight: 1.6
                                            },
                                            children: "Vos informations sont confidentielles et ne seront jamais partagées en dehors du clan."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/sect-contact.tsx",
                                            lineNumber: 818,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/sect-contact.tsx",
                                    lineNumber: 690,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-contact.tsx",
                                lineNumber: 617,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/sect-contact.tsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-contact.tsx",
                lineNumber: 392,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(SectionContact, "l+j2X5QpDlv7QtDYZBxPsFNcAZ4=", false, function() {
    return [
        useInView,
        useInView,
        useInView
    ];
});
_c3 = SectionContact;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "AfricanPattern");
__turbopack_context__.k.register(_c1, "FormField");
__turbopack_context__.k.register(_c2, "FloatingParticles");
__turbopack_context__.k.register(_c3, "SectionContact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/sect-footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
// ─── Données ──────────────────────────────────────────────────────────────────
const NAV_SECTIONS = [
    {
        titre: "Navigation",
        liens: [
            {
                label: "Accueil",
                href: "/"
            },
            {
                label: "Nos Racines",
                href: "/notre-histoire"
            },
            {
                label: "La Vie du Clan",
                href: "/nos-evenements"
            },
            {
                label: "Nos Mémoires",
                href: "/nos-albums"
            },
            {
                label: "Notre Âme",
                href: "/notre-vocation"
            },
            {
                label: "Le Clan",
                href: "/nos-membres"
            },
            {
                label: "Nous Joindre",
                href: "/nous-contacter"
            }
        ]
    },
    {
        titre: "Le Clan",
        liens: [
            {
                label: "Notre Histoire",
                href: "/notre-histoire"
            },
            {
                label: "Notre Vocation",
                href: "/notre-vocation"
            },
            {
                label: "Nos Valeurs",
                href: "/nos-valeurs"
            },
            {
                label: "Nos Projets",
                href: "/nos-projets"
            },
            {
                label: "Aide aux Membres",
                href: "/solidarite"
            }
        ]
    },
    {
        titre: "Ressources",
        liens: [
            {
                label: "Rejoindre le clan",
                href: "/rejoindre"
            },
            {
                label: "Déposer un projet",
                href: "/projets/nouveau"
            },
            {
                label: "Demander une aide",
                href: "/solidarite/demande"
            },
            {
                label: "Espace membres",
                href: "/espace-membres"
            },
            {
                label: "Nous contacter",
                href: "/nous-contacter"
            }
        ]
    }
];
const SOCIALS = [
    {
        label: "Facebook",
        href: "#",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-footer.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/sections/sect-footer.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "WhatsApp",
        href: "#",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-footer.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/sections/sect-footer.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "YouTube",
        href: "#",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-footer.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "9.75 15.02 15.5 12 9.75 8.98 9.75 15.02",
                    stroke: "currentColor",
                    fill: "none"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-footer.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/sect-footer.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Instagram",
        href: "#",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "2",
                    width: "20",
                    height: "20",
                    rx: "5",
                    ry: "5"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-footer.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "4.5"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-footer.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "17.5",
                    cy: "6.5",
                    r: "0.8",
                    fill: "currentColor",
                    stroke: "none"
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-footer.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/sect-footer.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const DEVISE = [
    "Unité",
    "Amour",
    "Prospérité"
];
const DEVISE_COLORS = [
    "var(--bn-green)",
    "var(--bn-white)",
    "var(--bn-green)"
];
// ─── Hook IntersectionObserver ────────────────────────────────────────────────
function useInView(threshold = 0.1) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        setInView(true);
                        obs.disconnect();
                    }
                }
            }["useInView.useEffect"], {
                threshold
            });
            obs.observe(el);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return [
        ref,
        inView
    ];
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
// ─── Lien footer avec hover animé ────────────────────────────────────────────
function FooterLink({ href, label, delay = 0, inView }) {
    _s1();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        style: {
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-12px)",
            transition: `opacity 0.55s ${delay}s ease, transform 0.55s ${delay}s cubic-bezier(0.34,1.1,0.64,1)`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            onMouseEnter: ()=>setHovered(true),
            onMouseLeave: ()=>setHovered(false),
            style: {
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.97rem",
                color: hovered ? "var(--bn-white)" : "rgba(255,255,255,0.78)",
                textDecoration: "none",
                transition: "color 0.28s ease",
                padding: "3px 0",
                letterSpacing: "0.02em"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        width: hovered ? "16px" : "0px",
                        height: "1px",
                        background: "var(--bn-green)",
                        display: "inline-block",
                        transition: "width 0.35s cubic-bezier(0.4,0,0.2,1)",
                        flexShrink: 0
                    }
                }, void 0, false, {
                    fileName: "[project]/components/sections/sect-footer.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                label
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/sect-footer.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/sect-footer.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s1(FooterLink, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c = FooterLink;
// ─── Bouton réseau social ─────────────────────────────────────────────────────
function SocialBtn({ item, delay, inView }) {
    _s2();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: item.href,
        "aria-label": item.label,
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
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
            transform: inView ? hovered ? "translateY(-4px) scale(1.10)" : "translateY(0) scale(1)" : "translateY(12px) scale(0.9)",
            opacity: inView ? 1 : 0,
            transition: `
          color 0.28s ease,
          border-color 0.28s ease,
          background 0.28s ease,
          transform 0.38s ${delay}s cubic-bezier(0.34,1.56,0.64,1),
          opacity 0.5s ${delay}s ease
        `,
            boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.35)" : "none"
        },
        children: item.icon
    }, void 0, false, {
        fileName: "[project]/components/sections/sect-footer.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
_s2(SocialBtn, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c1 = SocialBtn;
function Footer() {
    _s3();
    const [topRef, topInView] = useInView(0.1);
    const [colsRef, colsInView] = useInView(0.1);
    const [bottomRef, bottomInView] = useInView(0.1);
    const footerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const floatLogoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const year = new Date().getFullYear();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            const footerEl = footerRef.current;
            const logoEl = floatLogoRef.current;
            if (!footerEl || !logoEl) return;
            let timer = null;
            const place = {
                "Footer.useEffect.place": ()=>{
                    const footerRect = footerEl.getBoundingClientRect();
                    const logoRect = logoEl.getBoundingClientRect();
                    const maxX = Math.max(0, footerRect.width - logoRect.width);
                    const maxY = Math.max(0, footerRect.height - logoRect.height);
                    const x = Math.round(Math.random() * maxX);
                    const y = Math.round(Math.random() * maxY);
                    logoEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                }
            }["Footer.useEffect.place"];
            const loop = {
                "Footer.useEffect.loop": ()=>{
                    place();
                    const next = 5500 + Math.random() * 3500;
                    timer = setTimeout(loop, next);
                }
            }["Footer.useEffect.loop"];
            // Position initiale après layout
            const raf = requestAnimationFrame({
                "Footer.useEffect.raf": ()=>{
                    place();
                    loop();
                }
            }["Footer.useEffect.raf"]);
            const onResize = {
                "Footer.useEffect.onResize": ()=>place()
            }["Footer.useEffect.onResize"];
            window.addEventListener("resize", onResize, {
                passive: true
            });
            return ({
                "Footer.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    window.removeEventListener("resize", onResize);
                    if (timer) clearTimeout(timer);
                }
            })["Footer.useEffect"];
        }
    }["Footer.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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

        .footer-float-logo {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .footer-float-logo > div {
          position: absolute;
          left: 0;
          top: 0;
          width: min(300px, 55vw);
          height: min(300px, 55vw);
          opacity: 0.14;
          filter: saturate(1.05) contrast(1.06);
          transition: transform 6.5s cubic-bezier(0.34, 1.1, 0.64, 1);
          will-change: transform;
        }

        @media (max-width: 700px) {
          .footer-float-logo > div {
            width: 220px;
            height: 220px;
            opacity: 0.12;
          }
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
      `
            }, void 0, false, {
                fileName: "[project]/components/sections/sect-footer.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                ref: footerRef,
                className: "footer-root",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer-float-logo",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: floatLogoRef,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/logo-BN-removebg.png",
                                alt: "",
                                fill: true,
                                priority: false,
                                sizes: "(max-width: 700px) 220px, 300px",
                                style: {
                                    objectFit: "contain"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-footer.tsx",
                                lineNumber: 449,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/sect-footer.tsx",
                            lineNumber: 448,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/sect-footer.tsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            zIndex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-sep"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-footer.tsx",
                                lineNumber: 461,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-top",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: topRef,
                                    className: "footer-top-inner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                opacity: topInView ? 1 : 0,
                                                transform: topInView ? "translateY(0)" : "translateY(20px)",
                                                transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.1,0.64,1)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "14px",
                                                        marginBottom: "18px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: "48px",
                                                                height: "48px",
                                                                borderRadius: "50%",
                                                                border: "1.5px solid rgba(200,169,110,0.45)",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                background: "radial-gradient(circle at 35% 35%, rgba(200,169,110,0.12), rgba(0,0,0,0.4))",
                                                                flexShrink: 0,
                                                                overflow: "hidden"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/images/logo-BN.png",
                                                                alt: "Logo BA NGOMBOUNDA",
                                                                width: 48,
                                                                height: 48,
                                                                style: {
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit: "cover"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/sect-footer.tsx",
                                                                lineNumber: 489,
                                                                columnNumber: 19
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                                            lineNumber: 477,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontFamily: "'Playfair Display', serif",
                                                                        fontSize: "1.3rem",
                                                                        fontWeight: 700,
                                                                        background: "linear-gradient(135deg, #E8C97E 30%, #fff 70%)",
                                                                        WebkitBackgroundClip: "text",
                                                                        WebkitTextFillColor: "transparent",
                                                                        backgroundClip: "text",
                                                                        lineHeight: 1,
                                                                        letterSpacing: "0.02em"
                                                                    },
                                                                    children: "BA NGOMBOUNDA"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                                    lineNumber: 498,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontFamily: "'Cormorant Garamond', serif",
                                                                        fontSize: "0.60rem",
                                                                        letterSpacing: "0.22em",
                                                                        textTransform: "uppercase",
                                                                        color: "rgba(200,169,110,0.55)",
                                                                        marginTop: "3px"
                                                                    },
                                                                    children: "Clan & Tradition"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "10px",
                                                        flexWrap: "wrap"
                                                    },
                                                    children: DEVISE.map((mot, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                display: "inline-flex",
                                                                alignItems: "center",
                                                                gap: "10px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontFamily: "'Playfair Display', serif",
                                                                        fontStyle: "italic",
                                                                        fontSize: "1.05rem",
                                                                        color: DEVISE_COLORS[i],
                                                                        opacity: 0.85
                                                                    },
                                                                    children: mot
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                                    lineNumber: 528,
                                                                    columnNumber: 21
                                                                }, this),
                                                                i < DEVISE.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        width: "4px",
                                                                        height: "4px",
                                                                        borderRadius: "50%",
                                                                        background: "rgba(200,169,110,0.35)",
                                                                        display: "inline-block"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                                    lineNumber: 538,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, mot, true, {
                                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                                            lineNumber: 527,
                                                            columnNumber: 19
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                            lineNumber: 470,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "1px",
                                                alignSelf: "stretch",
                                                background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.20), transparent)",
                                                flexShrink: 0,
                                                display: "none"
                                            },
                                            className: "vert-sep"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                            lineNumber: 551,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                minWidth: "280px",
                                                maxWidth: "420px",
                                                opacity: topInView ? 1 : 0,
                                                transform: topInView ? "translateX(0)" : "translateX(30px)",
                                                transition: "opacity 0.8s 0.2s ease, transform 0.8s 0.2s cubic-bezier(0.34,1.1,0.64,1)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'Cormorant Garamond', serif",
                                                        fontSize: "0.72rem",
                                                        letterSpacing: "0.22em",
                                                        textTransform: "uppercase",
                                                        color: "#C8A96E",
                                                        margin: "0 0 8px 0"
                                                    },
                                                    children: "Restez informés"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'Cormorant Garamond', serif",
                                                        fontSize: "1.02rem",
                                                        color: "rgba(255,255,255,0.50)",
                                                        margin: "0 0 16px 0",
                                                        lineHeight: 1.6
                                                    },
                                                    children: "Recevez les actualités du clan directement dans votre boîte mail."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                    lineNumber: 578,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "email",
                                                            placeholder: "votre@email.com",
                                                            className: "nl-input"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                                            lineNumber: 588,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "nl-btn",
                                                            children: "S'abonner"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                                            lineNumber: 593,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                            lineNumber: 560,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                    lineNumber: 467,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-footer.tsx",
                                lineNumber: 466,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    margin: "0 40px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        maxWidth: "1200px",
                                        margin: "0 auto"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-sep"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/sect-footer.tsx",
                                        lineNumber: 603,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                    lineNumber: 602,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-footer.tsx",
                                lineNumber: 601,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer-cols",
                                style: {
                                    paddingTop: "48px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: colsRef,
                                    className: "footer-cols-inner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                opacity: colsInView ? 1 : 0,
                                                transform: colsInView ? "translateY(0)" : "translateY(24px)",
                                                transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.1,0.64,1)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'Cormorant Garamond', serif",
                                                        fontSize: "1.02rem",
                                                        lineHeight: 1.85,
                                                        color: "rgba(255,255,255,0.42)",
                                                        margin: "0 0 28px 0",
                                                        maxWidth: "320px"
                                                    },
                                                    children: "Une communauté familiale unie par les valeurs de l'Afrique, dédiée à préserver nos traditions et bâtir un avenir prospère pour nos enfants et petits-enfants."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                    lineNumber: 619,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginBottom: "28px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "col-title",
                                                            style: {
                                                                marginBottom: "14px"
                                                            },
                                                            children: "Nous suivre"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                                            lineNumber: 634,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                gap: "10px",
                                                                flexWrap: "wrap"
                                                            },
                                                            children: SOCIALS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialBtn, {
                                                                    item: s,
                                                                    delay: 0.1 + i * 0.07,
                                                                    inView: colsInView
                                                                }, s.label, false, {
                                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                                    lineNumber: 639,
                                                                    columnNumber: 21
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                                            lineNumber: 637,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:contact@clan-nguyen.ga",
                                                    style: {
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        gap: "8px",
                                                        fontFamily: "'Cormorant Garamond', serif",
                                                        fontSize: "0.88rem",
                                                        color: "rgba(200,169,110,0.65)",
                                                        textDecoration: "none",
                                                        transition: "color 0.25s ease"
                                                    },
                                                    onMouseEnter: (e)=>e.currentTarget.style.color = "#E8C97E",
                                                    onMouseLeave: (e)=>e.currentTarget.style.color = "rgba(200,169,110,0.65)",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 18 18",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M3 3h12a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                                    lineNumber: 666,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M2 4l7 6 7-6",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                                    lineNumber: 667,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                                            lineNumber: 665,
                                                            columnNumber: 17
                                                        }, this),
                                                        "contact@clan-nguyen.ga"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                            lineNumber: 614,
                                            columnNumber: 13
                                        }, this),
                                        NAV_SECTIONS.map((section, si)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    opacity: colsInView ? 1 : 0,
                                                    transform: colsInView ? "translateY(0)" : "translateY(24px)",
                                                    transition: `opacity 0.8s ${0.12 + si * 0.10}s ease, transform 0.8s ${0.12 + si * 0.10}s cubic-bezier(0.34,1.1,0.64,1)`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "col-title",
                                                        children: section.titre
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/sect-footer.tsx",
                                                        lineNumber: 680,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        style: {
                                                            listStyle: "none",
                                                            margin: 0,
                                                            padding: 0,
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: "2px"
                                                        },
                                                        children: section.liens.map((lien, li)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterLink, {
                                                                href: lien.href,
                                                                label: lien.label,
                                                                delay: 0.15 + si * 0.08 + li * 0.04,
                                                                inView: colsInView
                                                            }, lien.href + lien.label, false, {
                                                                fileName: "[project]/components/sections/sect-footer.tsx",
                                                                lineNumber: 683,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/sect-footer.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, section.titre, true, {
                                                fileName: "[project]/components/sections/sect-footer.tsx",
                                                lineNumber: 675,
                                                columnNumber: 15
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                    lineNumber: 611,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-footer.tsx",
                                lineNumber: 610,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    margin: "0 40px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        maxWidth: "1200px",
                                        margin: "0 auto"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "footer-sep"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/sect-footer.tsx",
                                        lineNumber: 701,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                    lineNumber: 700,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-footer.tsx",
                                lineNumber: 699,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: bottomRef,
                                className: "footer-bottom",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "footer-bottom-inner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'Cormorant Garamond', serif",
                                                fontSize: "0.78rem",
                                                color: "rgba(255,255,255,0.35)",
                                                margin: 0,
                                                opacity: bottomInView ? 1 : 0,
                                                transition: "opacity 0.8s ease"
                                            },
                                            children: [
                                                "© ",
                                                year,
                                                " BA NGOMBOUNDA — Clan & Tradition. Tous droits réservés."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                            lineNumber: 710,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'Cormorant Garamond', serif",
                                                fontSize: "0.84rem",
                                                fontWeight: 600,
                                                color: "rgba(255,255,255,0.68)",
                                                margin: 0,
                                                opacity: bottomInView ? 1 : 0,
                                                transition: "opacity 0.8s 0.05s ease",
                                                whiteSpace: "normal",
                                                flex: "1 1 100%",
                                                textAlign: "center",
                                                lineHeight: 1.4
                                            },
                                            children: [
                                                "Developped by",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://ioi-gab-alpha.vercel.app/",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    style: {
                                                        color: "var(--bn-white)",
                                                        textDecoration: "none",
                                                        borderBottom: "1px solid rgba(255,255,255,0.28)",
                                                        paddingBottom: "1px"
                                                    },
                                                    children: "IOI"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                    lineNumber: 735,
                                                    columnNumber: 15
                                                }, this),
                                                " ",
                                                "— Innovation Ouverture Intelligence"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                            lineNumber: 721,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                fontFamily: "'Cormorant Garamond', serif",
                                                gap: "20px",
                                                flexWrap: "wrap",
                                                justifyContent: "center",
                                                opacity: bottomInView ? 1 : 0,
                                                transition: "opacity 0.8s 0.15s ease"
                                            },
                                            children: [
                                                "Mentions légales",
                                                "Confidentialité",
                                                "Accessibilité"
                                            ].map((lbl, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        gap: "20px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "#",
                                                            style: {
                                                                fontFamily: "'Cormorant Garamond', serif",
                                                                fontSize: "0.78rem",
                                                                color: "rgba(255,255,255,0.28)",
                                                                textDecoration: "none",
                                                                transition: "color 0.25s ease",
                                                                letterSpacing: "0.04em",
                                                                whiteSpace: "nowrap"
                                                            },
                                                            onMouseEnter: (e)=>e.currentTarget.style.color = "rgba(200,169,110,0.70)",
                                                            onMouseLeave: (e)=>e.currentTarget.style.color = "rgba(255,255,255,0.28)",
                                                            children: lbl
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                                            lineNumber: 764,
                                                            columnNumber: 19
                                                        }, this),
                                                        i < 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: "3px",
                                                                height: "3px",
                                                                borderRadius: "50%",
                                                                background: "rgba(255,255,255,0.15)",
                                                                display: "inline-block"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                                            lineNumber: 781,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, lbl, true, {
                                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                                    lineNumber: 763,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                            lineNumber: 752,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'Cormorant Garamond', serif",
                                                fontStyle: "italic",
                                                fontSize: "0.78rem",
                                                color: "rgba(200,169,110,0.35)",
                                                margin: 0,
                                                whiteSpace: "nowrap",
                                                opacity: bottomInView ? 1 : 0,
                                                transition: "opacity 0.8s 0.25s ease"
                                            },
                                            children: "Fait avec ❤️ pour le clan"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/sect-footer.tsx",
                                            lineNumber: 788,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/sect-footer.tsx",
                                    lineNumber: 709,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/sect-footer.tsx",
                                lineNumber: 708,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/sect-footer.tsx",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/sect-footer.tsx",
                lineNumber: 446,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s3(Footer, "ZWe/LWslyO4mgAqVVOKlfQcOxNQ=", false, function() {
    return [
        useInView,
        useInView,
        useInView
    ];
});
_c2 = Footer;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FooterLink");
__turbopack_context__.k.register(_c1, "SocialBtn");
__turbopack_context__.k.register(_c2, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_sections_e1ff52da._.js.map