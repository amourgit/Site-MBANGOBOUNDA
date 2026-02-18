(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,64682,e=>{"use strict";var r=e.i(43476),t=e.i(71645),n=e.i(22016),i=e.i(18566),a=e.i(57688);let o=[{href:"/",label:"Accueil",icon:"🏠"},{href:"/notre-histoire",label:"Nos Racines",icon:"🌳"},{href:"/nos-evenements",label:"La Vie du Clan",icon:"🥁"},{href:"/nos-albums",label:"Nos Mémoires",icon:"📸"},{href:"/notre-vocation",label:"Notre Âme",icon:"🌍"},{href:"/nous-contacter",label:"Nous Joindre",icon:"✉️"}];function s(){let[e,s]=(0,t.useState)(!1),[l,d]=(0,t.useState)(!1),[p,c]=(0,t.useState)(!1),g=(0,i.usePathname)();return(0,t.useEffect)(()=>{let e=()=>c(window.innerWidth>=900);return e(),window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[]),(0,t.useEffect)(()=>{let e=()=>s(window.scrollY>60);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,t.useEffect)(()=>{d(!1)},[g]),(0,t.useEffect)(()=>(document.body.style.overflow=!p&&l?"hidden":"",()=>{document.body.style.overflow=""}),[l,p]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
        /* On r\xe9\xe9crit l'approche avec width, plus propre */
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

        /* Point dor\xe9 */
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
      `}),(0,r.jsx)("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:50,display:"flex",justifyContent:"center",paddingTop:"16px",paddingLeft:"20px",paddingRight:"20px",pointerEvents:"none",fontFamily:"'Lato', sans-serif"},children:(0,r.jsxs)("nav",{className:`nav-pill w-full ${e?"nav-frosted":"nav-transparent"}`,style:{maxWidth:"1160px",pointerEvents:"auto"},children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 20px"},children:[(0,r.jsxs)(n.default,{href:"/",className:"logo-anim",children:[(0,r.jsx)("div",{className:"logo-emblem",children:(0,r.jsx)(a.default,{src:"/images/logo-BN.png",alt:"Logo BA NGOMBOUNDA",width:42,height:42,style:{width:"100%",height:"100%",objectFit:"cover"}})}),(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,r.jsx)("span",{className:"logo-name",children:"BA NGOMBOUNDA"}),(0,r.jsx)("span",{className:"logo-sub",children:"Clan & Tradition"})]})]}),p&&(0,r.jsx)("ul",{style:{display:"flex",alignItems:"center",gap:"2px",listStyle:"none",margin:"0",padding:"0",flex:1,justifyContent:"center"},children:o.map((e,t)=>(0,r.jsx)("li",{className:"nav-link-item",style:{animationDelay:`${.08+.06*t}s`},children:(0,r.jsxs)(n.default,{href:e.href,className:`nav-link-inner ${g===e.href?"is-active":""}`,children:[e.label,(0,r.jsx)("span",{className:"nav-dot"}),(0,r.jsx)("span",{className:"link-bar"})]})},e.href))}),(0,r.jsx)("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexShrink:0},children:p?(0,r.jsx)(n.default,{href:"/nous-contacter",className:"cta-btn",children:(0,r.jsx)("span",{children:"Rejoindre"})}):(0,r.jsxs)("button",{className:"ham-btn",onClick:()=>d(!l),"aria-label":l?"Fermer le menu":"Ouvrir le menu","aria-expanded":l,children:[(0,r.jsx)("span",{className:"ham-line",style:{width:"24px",transform:l?"translateY(6.5px) rotate(45deg)":"none"}}),(0,r.jsx)("span",{className:"ham-line",style:{width:"17px",opacity:+!l}}),(0,r.jsx)("span",{className:"ham-line",style:{width:"24px",transform:l?"translateY(-6.5px) rotate(-45deg)":"none"}})]})})]}),!p&&l&&(0,r.jsx)("div",{className:"mobile-menu-inner",children:(0,r.jsxs)("ul",{style:{listStyle:"none",margin:0,padding:0},children:[o.map(e=>(0,r.jsx)("li",{children:(0,r.jsxs)(n.default,{href:e.href,className:`mob-link ${g===e.href?"is-active":""}`,children:[(0,r.jsx)("span",{style:{fontSize:"1.1rem"},children:e.icon}),e.label]})},e.href)),(0,r.jsx)("li",{children:(0,r.jsx)("div",{className:"mob-divider"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.default,{href:"/nous-contacter",className:"cta-btn",style:{width:"100%"},children:(0,r.jsx)("span",{children:"✨ Rejoindre le Clan"})})})]})})]})})]})}e.s(["default",()=>s])},98096,e=>{"use strict";var r=e.i(43476),t=e.i(71645),n=e.i(22016);let i=[{type:"image",src:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1800&q=90",tag:"Notre Clan",title:"Ensemble,\nnous sommes\nplus forts",description:"Depuis des générations, notre famille porte les valeurs de l'unité, du partage et de la dignité. Chaque membre est un maillon précieux de cette chaîne sacrée."},{type:"image",src:"https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1800&q=90",tag:"Les Anciens",title:"La sagesse\nde nos racines",description:"Nos aînés sont les gardiens de la mémoire. Leur sagesse guide nos pas et éclaire notre chemin vers l'avenir. Nous les honorons à chaque instant."},{type:"video",src:"https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4",tag:"La Vie du Clan",title:"Célébrons\nla vie ensemble",description:"Mariages, baptêmes, fêtes traditionnelles… chaque rassemblement est une occasion de renforcer nos liens et de perpétuer nos us et coutumes ancestraux."},{type:"image",src:"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1800&q=90",tag:"Notre Mission",title:"Prendre soin\ndes nôtres",description:"Veuves, personnes âgées, enfants vulnérables — personne n'est laissé pour compte. La solidarité familiale est notre engagement le plus profond."}];function a(){let[e,a]=(0,t.useState)(0),[o,s]=(0,t.useState)(null),[l,d]=(0,t.useState)(1),[p,c]=(0,t.useState)(!0),[g,m]=(0,t.useState)(0),x=(0,t.useRef)(null),f=(0,t.useRef)(null),b=(0,t.useRef)(0),u=(0,t.useRef)([]),h=(0,t.useCallback)((r,t=1)=>{r!==e&&(c(!1),s(e),d(t),m(0),setTimeout(()=>{a(r),setTimeout(()=>c(!0),120)},60))},[e]),y=(0,t.useCallback)(()=>h((e+1)%i.length,1),[e,h]),v=(0,t.useCallback)(()=>h((e-1+i.length)%i.length,-1),[e,h]);(0,t.useEffect)(()=>{m(0),b.current=performance.now();let e=r=>{let t=r-b.current;m(Math.min(t/6e3*100,100)),t<6e3&&(f.current=requestAnimationFrame(e))};return f.current=requestAnimationFrame(e),x.current=setTimeout(y,6e3),()=>{x.current&&clearTimeout(x.current),f.current&&cancelAnimationFrame(f.current)}},[e,y]),(0,t.useEffect)(()=>{u.current.forEach((r,t)=>{r&&(t===e?(r.currentTime=0,r.play().catch(()=>{})):r.pause())})},[e]);let j=i[e];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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

        /* ── M\xe9dias (image / vid\xe9o) ── */
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

        /* ── Overlay global sombre (lisibilit\xe9) ── */
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

        /* ── Navigation (fl\xe8ches) ── */
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

        /* ── Num\xe9ro slide ── */
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
      `}),(0,r.jsxs)("section",{className:"hero-root",children:[i.map((t,n)=>{let i=n===e,a=n===o,s=i?l>0?"slide-enter-right":"slide-enter-left":a?"slide-exit":"";return"video"===t.type?(0,r.jsx)("video",{ref:e=>{u.current[n]=e},className:`slide-media ${s}`,src:t.src,muted:!0,loop:!0,playsInline:!0,style:{zIndex:i?1:a?0:-1,display:i||a?"block":"none"}},n):(0,r.jsx)("img",{className:`slide-media ${s}`,src:t.src,alt:t.title,style:{zIndex:i?1:a?0:-1,display:i||a?"block":"none"}},n)}),(0,r.jsx)("div",{className:"hero-overlay"}),(0,r.jsx)("div",{className:"text-panel",children:(0,r.jsxs)("div",{className:"text-inner",children:[(0,r.jsx)("span",{className:`text-tag ${p?"ready":""}`,children:j.tag},`tag-${e}`),(0,r.jsx)("h1",{className:`text-title ${p?"ready":""}`,children:j.title},`title-${e}`),(0,r.jsx)("div",{className:`text-divider ${p?"ready":""}`},`div-${e}`),(0,r.jsx)("p",{className:`text-desc ${p?"ready":""}`,children:j.description},`desc-${e}`),(0,r.jsxs)(n.default,{href:"/nos-evenements",className:`hero-cta ${p?"ready":""}`,children:[(0,r.jsx)("span",{children:"Tout savoir"}),(0,r.jsx)("span",{className:"cta-arrow",children:"→"})]},`cta-${e}`)]})}),(0,r.jsx)("button",{className:"nav-arrow left",onClick:v,"aria-label":"Slide précédent",children:"←"}),(0,r.jsx)("button",{className:"nav-arrow right",onClick:y,"aria-label":"Slide suivant",children:"→"}),(0,r.jsx)("div",{className:"dots-bar",children:i.map((t,n)=>(0,r.jsx)("div",{className:`dot-wrap ${n===e?"active":""}`,onClick:()=>h(n,n>e?1:-1),children:(0,r.jsx)("div",{className:"dot-fill",style:{width:n===e?`${g}%`:n<e?"100%":"0%"}})},n))}),(0,r.jsxs)("div",{className:"slide-counter",children:[(0,r.jsxs)("strong",{children:["0",e+1]})," / 0",i.length]}),(0,r.jsxs)("div",{className:"scroll-hint",children:[(0,r.jsx)("span",{children:"Défiler"}),(0,r.jsxs)("svg",{width:"14",height:"20",viewBox:"0 0 14 20",fill:"none",children:[(0,r.jsx)("rect",{x:"1",y:"1",width:"12",height:"18",rx:"6",stroke:"currentColor",strokeWidth:"1.2"}),(0,r.jsx)("circle",{cx:"7",cy:"6",r:"2",fill:"currentColor",opacity:"0.7"})]})]})]})]})}e.s(["default",()=>a])},77409,e=>{"use strict";var r=e.i(43476),t=e.i(71645),n=e.i(22016);let i=[{debut:"1920",fin:"1955",image:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=85",titre:"Les Temps des Fondateurs",description:"Au cœur de la savane, nos ancêtres posèrent les premières pierres de ce qui allait devenir notre grande famille. Portés par la foi et la terre, ils bâtirent des alliances solides, transmirent des rites sacrés et gravèrent dans la mémoire collective les valeurs qui nous animent encore aujourd'hui."},{debut:"1956",fin:"1985",image:"https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=900&q=85",titre:"L'Ère de l'Expansion",description:"Les enfants des fondateurs s'élancèrent vers de nouveaux horizons — les villes, les études, les opportunités — sans jamais couper le cordon avec la terre nourricière. Le clan s'agrandit, les unions se tissèrent entre familles alliées, et notre identité prit une nouvelle dimension, plus riche, plus diverse."},{debut:"1986",fin:"Aujourd'hui",image:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=85",titre:"La Génération du Renouveau",description:"Forts de notre héritage, nous entrons dans une ère nouvelle. Les jeunes du clan reprennent le flambeau avec fierté : préserver nos traditions tout en embrassant le monde moderne. Solidaires et connectés, nous bâtissons ensemble l'avenir de notre famille pour les générations à venir."}];function a(e=.25){let r=(0,t.useRef)(null),[n,i]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let t=r.current;if(!t)return;let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(i(!0),n.disconnect())},{threshold:e});return n.observe(t),()=>n.disconnect()},[e]),[r,n]}function o({periode:e,index:n}){let i=n%2==0,[o,d]=a(.2),[p,c]=(0,t.useState)(!1);return((0,t.useEffect)(()=>{let e=()=>c(window.innerWidth<=700);return e(),window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[]),p)?(0,r.jsx)("div",{ref:o,style:{display:"flex",flexDirection:"column",alignItems:"stretch",gap:"14px",position:"relative",paddingLeft:"0",paddingRight:"0",opacity:+!!d,transform:d?"translateY(0)":"translateY(28px)",transition:"opacity 0.85s 0.1s cubic-bezier(0.4,0,0.2,1), transform 0.85s 0.1s cubic-bezier(0.34,1.1,0.64,1)"},children:(0,r.jsx)(l,{periode:e,align:"left",inView:d,delay:.1})}):(0,r.jsxs)("div",{ref:o,style:{display:"grid",gridTemplateColumns:"1fr 80px 1fr",alignItems:"center",minHeight:"420px",position:"relative",marginBottom:"0"},children:[(0,r.jsx)("div",{style:{gridColumn:"1",display:"flex",justifyContent:"flex-end",paddingRight:"52px",opacity:+!!d,transform:d?"translateX(0)":i?"translateX(-60px)":"translateX(60px)",transition:"opacity 0.85s 0.1s cubic-bezier(0.4,0,0.2,1), transform 0.85s 0.1s cubic-bezier(0.34,1.1,0.64,1)"},children:i?(0,r.jsx)(l,{periode:e,align:"right",inView:d,delay:.1}):(0,r.jsx)(s,{periode:e,align:"right"})}),(0,r.jsx)("div",{style:{gridColumn:"2",display:"flex",flexDirection:"column",alignItems:"center",position:"relative",zIndex:2},children:(0,r.jsx)("div",{style:{width:"18px",height:"18px",borderRadius:"50%",background:d?"linear-gradient(135deg, var(--bn-green), var(--bn-white))":"rgba(var(--bn-green-rgb),0.30)",border:"3px solid #1a0f05",boxShadow:d?"0 0 0 5px rgba(var(--bn-green-rgb),0.20), 0 0 24px rgba(var(--bn-green-rgb),0.35)":"none",transition:`all 0.6s ${.1+.2}s ease`,flexShrink:0}})}),(0,r.jsx)("div",{style:{gridColumn:"3",display:"flex",justifyContent:"flex-start",paddingLeft:"52px",opacity:+!!d,transform:d?"translateX(0)":i?"translateX(60px)":"translateX(-60px)",transition:"opacity 0.85s 0.2s cubic-bezier(0.4,0,0.2,1), transform 0.85s 0.2s cubic-bezier(0.34,1.1,0.64,1)"},children:i?(0,r.jsx)(s,{periode:e,align:"left"}):(0,r.jsx)(l,{periode:e,align:"left",inView:d,delay:.1})})]})}function s({periode:e,align:t}){return(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"right"===t?"flex-end":"flex-start",gap:"4px"},children:[(0,r.jsx)("span",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(2.2rem, 4vw, 3.5rem)",fontWeight:900,lineHeight:1,background:"linear-gradient(135deg, var(--bn-green) 30%, var(--bn-white) 70%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"-0.02em"},children:e.debut}),(0,r.jsxs)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.75rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(255,255,255,0.78)"},children:["— ",e.fin]})]})}function l({periode:e,align:n,inView:i,delay:a}){let[o,s]=(0,t.useState)(!1);return(0,r.jsxs)("div",{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),style:{width:"100%",maxWidth:"460px",borderRadius:"16px",overflow:"hidden",position:"relative",boxShadow:o?"0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(var(--bn-green-rgb),0.30)":"0 16px 48px rgba(0,0,0,0.40), 0 0 0 1px rgba(var(--bn-green-rgb),0.12)",transform:o?"translateY(-6px) scale(1.012)":"translateY(0) scale(1)",transition:"box-shadow 0.45s ease, transform 0.45s cubic-bezier(0.34,1.1,0.64,1)",cursor:"default"},children:[(0,r.jsxs)("div",{style:{position:"relative",height:"240px",overflow:"hidden"},children:[(0,r.jsx)("img",{src:e.image,alt:e.titre,style:{width:"100%",height:"100%",objectFit:"cover",transform:o?"scale(1.07)":"scale(1.0)",transition:"transform 0.8s cubic-bezier(0.4,0,0.2,1)",display:"block"}}),(0,r.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(5,2,1,0.70) 100%)"}}),(0,r.jsxs)("div",{style:{position:"absolute",top:"16px",..."right"===n?{right:"16px"}:{left:"16px"},background:"rgba(10,5,2,0.65)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"1px solid rgba(var(--bn-green-rgb),0.30)",borderRadius:"8px",padding:"6px 14px",display:"flex",alignItems:"baseline",gap:"6px"},children:[(0,r.jsx)("span",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.1rem",fontWeight:700,color:"var(--bn-green)"},children:e.debut}),(0,r.jsxs)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.72rem",color:"rgba(255,255,255,0.78)",letterSpacing:"0.12em"},children:["— ",e.fin]})]})]}),(0,r.jsxs)("div",{style:{background:"linear-gradient(135deg, #0f0804 0%, #1a0f05 100%)",padding:"24px 28px 28px",borderTop:"1px solid rgba(var(--bn-green-rgb),0.18)"},children:[(0,r.jsx)("div",{style:{width:"32px",height:"2px",background:"linear-gradient(90deg, var(--bn-green), transparent)",borderRadius:"2px",marginBottom:"12px",transform:o?"scaleX(1.6)":"scaleX(1)",transformOrigin:"left",transition:"transform 0.4s ease"}}),(0,r.jsx)("h3",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.22rem",fontWeight:700,color:"#ffffff",margin:"0 0 12px 0",lineHeight:1.25},children:e.titre}),(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.02rem",lineHeight:1.75,color:"rgba(255,255,255,0.70)",margin:0},children:e.description})]})]})}function d(){let[e,t]=a(.3);return(0,r.jsxs)("div",{ref:e,style:{textAlign:"center",marginBottom:"80px",opacity:+!!t,transform:t?"translateY(0)":"translateY(40px)",transition:"opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,r.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"12px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.30em",textTransform:"uppercase",color:"var(--bn-green)",marginBottom:"20px"},children:[(0,r.jsx)("span",{style:{display:"block",width:"36px",height:"1px",background:"var(--bn-green)"}}),"Notre Histoire",(0,r.jsx)("span",{style:{display:"block",width:"36px",height:"1px",background:"var(--bn-green)"}})]}),(0,r.jsxs)("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(2.2rem, 5vw, 3.8rem)",fontWeight:900,lineHeight:1.08,color:"#ffffff",margin:"0 0 24px 0",textShadow:"0 4px 32px rgba(0,0,0,0.5)"},children:["Des racines profondes,",(0,r.jsx)("br",{}),(0,r.jsx)("em",{style:{color:"var(--bn-green)",fontStyle:"italic"},children:"un avenir lumineux"})]}),(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(1rem, 1.5vw, 1.18rem)",color:"rgba(255,255,255,0.78)",maxWidth:"540px",margin:"0 auto",lineHeight:1.75},children:"Chaque génération a posé une pierre. Voici l'histoire de ceux qui nous ont précédés et de ceux qui, aujourd'hui, portent fièrement leur héritage."})]})}function p(){let[e,i]=a(.3),[o,s]=(0,t.useState)(!1);return(0,r.jsx)("div",{ref:e,style:{display:"flex",justifyContent:"center",marginTop:"80px",opacity:+!!i,transform:i?"translateY(0)":"translateY(30px)",transition:"opacity 0.8s 0.2s ease, transform 0.8s 0.2s cubic-bezier(0.34,1.1,0.64,1)"},children:(0,r.jsxs)(n.default,{href:"/notre-histoire",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),style:{position:"relative",overflow:"hidden",display:"inline-flex",alignItems:"center",gap:"14px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.92rem",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",padding:"16px 40px",borderRadius:"6px",border:"1.5px solid rgba(var(--bn-green-rgb),0.70)",color:o?"#0B0F0C":"rgba(255,255,255,0.95)",background:"transparent",textDecoration:"none",cursor:"pointer",transition:"color 0.35s ease"},children:[(0,r.jsx)("span",{style:{position:"absolute",inset:0,background:"var(--bn-green)",transform:o?"scaleX(1)":"scaleX(0)",transformOrigin:"left",transition:"transform 0.42s cubic-bezier(0.4,0,0.2,1)",borderRadius:"4px"}}),(0,r.jsx)("span",{style:{position:"relative",zIndex:1},children:"Lire notre histoire complète"}),(0,r.jsx)("span",{style:{position:"relative",zIndex:1,display:"inline-block",transform:o?"translateX(6px)":"translateX(0)",transition:"transform 0.35s cubic-bezier(0.34,1.56,0.64,1)"},children:"→"})]})})}function c(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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

        /* Lueur anim\xe9e sur la ligne */
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
      `}),(0,r.jsx)("section",{className:"histoire-root",children:(0,r.jsxs)("div",{className:"histoire-inner",children:[(0,r.jsx)(d,{}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("div",{className:"timeline-line"}),(0,r.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"0"},children:i.map((e,t)=>(0,r.jsx)(o,{periode:e,index:t},t))})]}),(0,r.jsx)(p,{})]})})]})}e.s(["default",()=>c])},34054,e=>{"use strict";var r=e.i(43476),t=e.i(71645);let n=[{id:"unite",mot:"Unité",chiffre:"01",symbole:"⬡",couleur:"var(--bn-green)",couleurSombre:"rgba(var(--bn-green-rgb),0.08)",icon:(0,r.jsxs)("svg",{width:"52",height:"52",viewBox:"0 0 52 52",fill:"none",children:[(0,r.jsx)("circle",{cx:"26",cy:"18",r:"7",stroke:"var(--bn-green)",strokeWidth:"1.5"}),(0,r.jsx)("circle",{cx:"14",cy:"36",r:"7",stroke:"var(--bn-green)",strokeWidth:"1.5"}),(0,r.jsx)("circle",{cx:"38",cy:"36",r:"7",stroke:"var(--bn-green)",strokeWidth:"1.5"}),(0,r.jsx)("line",{x1:"26",y1:"25",x2:"20",y2:"30",stroke:"var(--bn-green)",strokeWidth:"1.2",strokeLinecap:"round"}),(0,r.jsx)("line",{x1:"26",y1:"25",x2:"32",y2:"30",stroke:"var(--bn-green)",strokeWidth:"1.2",strokeLinecap:"round"}),(0,r.jsx)("line",{x1:"14",y1:"29",x2:"38",y2:"29",stroke:"var(--bn-green)",strokeWidth:"1.2",strokeLinecap:"round",strokeDasharray:"2 3"})]}),titre:"Ensemble, nous sommes invincibles",description:"Notre force réside dans notre cohésion. Quand l'un tombe, les autres le relèvent. Quand l'un triomphe, tous célèbrent. L'unité n'est pas un mot, c'est notre mode de vie, transmis de génération en génération comme le bien le plus précieux.",citation:"« Seul on va plus vite, ensemble on va plus loin. »"},{id:"amour",mot:"Amour",chiffre:"02",symbole:"◇",couleur:"var(--bn-white)",couleurSombre:"rgba(255,255,255,0.06)",icon:(0,r.jsxs)("svg",{width:"52",height:"52",viewBox:"0 0 52 52",fill:"none",children:[(0,r.jsx)("path",{d:"M26 42 C26 42 8 30 8 19 C8 13.5 12.5 9 18 9 C21.5 9 24.5 10.8 26 13.5 C27.5 10.8 30.5 9 34 9 C39.5 9 44 13.5 44 19 C44 30 26 42 26 42Z",stroke:"var(--bn-white)",strokeWidth:"1.5",fill:"none"}),(0,r.jsx)("path",{d:"M20 22 C20 19.5 21.8 18 24 18",stroke:"var(--bn-white)",strokeWidth:"1.2",strokeLinecap:"round",opacity:"0.7"})]}),titre:"L'amour comme fondement",description:"Chaque décision, chaque geste, chaque sacrifice au sein de notre famille est guidé par l'amour. Amour des enfants, respect des aînés, tendresse entre époux, sollicitude pour les vulnérables — c'est le ciment invisible qui tient notre édifice debout.",citation:"« L'amour en famille est la première école de l'humanité. »"},{id:"prosperite",mot:"Prospérité",chiffre:"03",symbole:"✦",couleur:"var(--bn-green)",couleurSombre:"rgba(var(--bn-green-rgb),0.08)",icon:(0,r.jsxs)("svg",{width:"52",height:"52",viewBox:"0 0 52 52",fill:"none",children:[(0,r.jsx)("path",{d:"M26 8 L26 44",stroke:"var(--bn-green)",strokeWidth:"1.5",strokeLinecap:"round"}),(0,r.jsx)("path",{d:"M18 16 L26 8 L34 16",stroke:"var(--bn-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M12 28 L26 18 L40 28",stroke:"var(--bn-green)",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.7"}),(0,r.jsx)("path",{d:"M8 40 L26 30 L44 40",stroke:"var(--bn-green)",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.45"}),(0,r.jsx)("circle",{cx:"26",cy:"8",r:"2.5",fill:"var(--bn-green)"})]}),titre:"Bâtir un héritage durable",description:"La prospérité que nous cherchons n'est pas que matérielle. Elle est humaine, spirituelle, collective. Nous accompagnons chaque membre porteur de projets, nous investissons dans l'éducation, la santé et les terres — pour que nos enfants héritent d'un monde meilleur.",citation:"« Un arbre bien enraciné ne craint pas la tempête. »"}];function i(e=.2){let r=(0,t.useRef)(null),[n,a]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let t=r.current;if(!t)return;let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(a(!0),n.disconnect())},{threshold:e});return n.observe(t),()=>n.disconnect()},[e]),[r,n]}function a({target:e,inView:r}){let[n,i]=(0,t.useState)(0);return(0,t.useEffect)(()=>{if(!r)return;let t=null,n=r=>{t||(t=r);let a=Math.min((r-t)/1200,1);i(Math.floor(a*e)),a<1&&requestAnimationFrame(n)};requestAnimationFrame(n)},[r,e]),n}function o({valeur:e,index:n}){let[a,o]=i(.2),[s,l]=(0,t.useState)(!1),d=.18*n;return(0,r.jsxs)("div",{ref:a,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),style:{position:"relative",borderRadius:"20px",overflow:"hidden",padding:"48px 40px 44px",background:s?"linear-gradient(145deg, #141008 0%, #1e1408 100%)":"linear-gradient(145deg, #0f0a05 0%, #171008 100%)",border:`1px solid ${s?"rgba(var(--bn-green-rgb),0.55)":"rgba(var(--bn-green-rgb),0.18)"}`,boxShadow:s?`0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px ${e.couleur}33, inset 0 1px 0 ${e.couleur}22`:"0 8px 32px rgba(0,0,0,0.35)",transform:o?s?"translateY(-8px)":"translateY(0)":"translateY(50px)",opacity:+!!o,transition:`
          opacity 0.8s ${d}s cubic-bezier(0.4,0,0.2,1),
          transform 0.8s ${d}s cubic-bezier(0.34,1.1,0.64,1),
          box-shadow 0.45s ease,
          border-color 0.45s ease,
          background 0.45s ease
        `,cursor:"default",display:"flex",flexDirection:"column",gap:"0",flex:1,minWidth:0},children:[(0,r.jsx)("div",{style:{position:"absolute",top:"-60px",right:"-60px",width:"200px",height:"200px",borderRadius:"50%",background:`radial-gradient(circle, ${e.couleur}18 0%, transparent 70%)`,opacity:+!!s,transition:"opacity 0.6s ease",pointerEvents:"none"}}),(0,r.jsx)("span",{style:{position:"absolute",top:"20px",right:"28px",fontFamily:"'Playfair Display', serif",fontSize:"5rem",fontWeight:900,color:e.couleur,opacity:.055,lineHeight:1,userSelect:"none",pointerEvents:"none",letterSpacing:"-0.04em"},children:e.chiffre}),(0,r.jsx)("div",{style:{width:"72px",height:"72px",borderRadius:"16px",background:e.couleurSombre,border:`1px solid ${e.couleur}30`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"28px",transform:s?"rotate(-4deg) scale(1.08)":"rotate(0deg) scale(1)",transition:"transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",flexShrink:0},children:e.icon}),(0,r.jsx)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.68rem",fontWeight:600,letterSpacing:"0.28em",textTransform:"uppercase",color:e.couleur,marginBottom:"10px",display:"block"},children:e.mot}),(0,r.jsx)("h3",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.35rem",fontWeight:900,color:"#ffffff",margin:"0 0 14px 0",lineHeight:1.18},children:e.titre}),(0,r.jsx)("div",{style:{width:s?"56px":"32px",height:"1.5px",background:`linear-gradient(90deg, ${e.couleur}, transparent)`,borderRadius:"2px",marginBottom:"20px",transition:"width 0.5s cubic-bezier(0.4,0,0.2,1)"}}),(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.05rem",lineHeight:1.8,color:"rgba(255,255,255,0.78)",margin:"0 0 28px 0",flex:1},children:e.description}),(0,r.jsx)("div",{style:{borderLeft:`2px solid ${e.couleur}60`,paddingLeft:"16px",marginTop:"auto"},children:(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.92rem",fontStyle:"italic",color:`${e.couleur}BB`,margin:0,lineHeight:1.6},children:e.citation})})]})}function s(){let[e,t]=i(.3),n=["Unité","Amour","Prospérité"],a=["var(--bn-green)","var(--bn-white)","var(--bn-green)"];return(0,r.jsxs)("div",{ref:e,style:{textAlign:"center",marginBottom:"80px",opacity:+!!t,transform:t?"translateY(0)":"translateY(40px)",transition:"opacity 1s ease, transform 1s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,r.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"14px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.70rem",fontWeight:600,letterSpacing:"0.32em",textTransform:"uppercase",color:"var(--bn-green)",marginBottom:"24px"},children:[(0,r.jsx)("span",{style:{display:"block",width:"40px",height:"1px",background:"linear-gradient(90deg, transparent, var(--bn-green))"}}),"Nos Valeurs",(0,r.jsx)("span",{style:{display:"block",width:"40px",height:"1px",background:"linear-gradient(90deg, var(--bn-green), transparent)"}})]}),(0,r.jsxs)("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(2rem, 5vw, 3.8rem)",fontWeight:900,lineHeight:1.08,color:"#ffffff",margin:"0 0 32px 0"},children:["Ce qui nous unit,",(0,r.jsx)("br",{}),(0,r.jsx)("em",{style:{color:"var(--bn-green)",fontStyle:"italic"},children:"ce qui nous définit"})]}),(0,r.jsx)("div",{style:{display:"inline-flex",alignItems:"center",gap:"0",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(var(--bn-green-rgb),0.22)",borderRadius:"50px",padding:"6px 8px",flexWrap:"wrap",justifyContent:"center"},children:n.map((e,t)=>(0,r.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[(0,r.jsx)("span",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(0.85rem, 1.5vw, 1rem)",fontWeight:700,color:a[t],padding:"8px 20px",borderRadius:"50px",letterSpacing:"0.08em",transition:"background 0.3s"},children:e}),t<n.length-1&&(0,r.jsx)("span",{style:{width:"4px",height:"4px",borderRadius:"50%",background:"rgba(var(--bn-green-rgb),0.55)",display:"inline-block"}})]},e))}),(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(0.98rem, 1.4vw, 1.15rem)",color:"rgba(255,255,255,0.78)",maxWidth:"560px",margin:"28px auto 0",lineHeight:1.8},children:"Trois mots. Une âme. La boussole qui oriente chacun de nos actes, chacun de nos choix, depuis la nuit des temps jusqu'à aujourd'hui."})]})}function l(){let[e,t]=i(.2);return(0,r.jsxs)("div",{ref:e,style:{marginTop:"80px",borderRadius:"20px",background:"linear-gradient(135deg, #0f0a05 0%, #1a1008 50%, #0f0a05 100%)",border:"1px solid rgba(var(--bn-green-rgb),0.20)",padding:"52px 40px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"40px",textAlign:"center",position:"relative",overflow:"hidden",opacity:+!!t,transform:t?"translateY(0)":"translateY(40px)",transition:"opacity 0.9s 0.1s ease, transform 0.9s 0.1s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,r.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:"radial-gradient(ellipse 70% 70% at 50% 50%, rgba(var(--bn-green-rgb),0.06) 0%, transparent 70%)",pointerEvents:"none"}}),[{val:3,suffix:"+",label:"Générations",couleur:"var(--bn-green)"},{val:120,suffix:"+",label:"Membres actifs",couleur:"var(--bn-green)"},{val:60,suffix:" ans",label:"D'histoire commune",couleur:"var(--bn-green)"},{val:12,suffix:"",label:"Localités représentées",couleur:"var(--bn-green)"}].map((e,n)=>(0,r.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,r.jsxs)("div",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(2rem, 4vw, 3rem)",fontWeight:900,color:e.couleur,lineHeight:1,marginBottom:"8px"},children:[(0,r.jsx)(a,{target:e.val,inView:t}),e.suffix]}),(0,r.jsx)("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.82rem",letterSpacing:"0.16em",textTransform:"uppercase",color:"rgba(255,255,255,0.78)"},children:e.label}),(0,r.jsx)("div",{style:{width:"24px",height:"1px",background:e.couleur,opacity:.5,margin:"10px auto 0",borderRadius:"2px"}})]},n))]})}function d(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;500;600&family=Lato:wght@300;400;700&display=swap');

        .valeurs-root {
          position: relative;
          padding: 120px 24px 100px;
          overflow: hidden;
        }

        /* Lignes d\xe9coratives en fond */
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
      `}),(0,r.jsx)("section",{className:"valeurs-root",children:(0,r.jsxs)("div",{className:"valeurs-inner",children:[(0,r.jsx)(s,{}),(0,r.jsx)("div",{className:"valeurs-grid",children:n.map((e,t)=>(0,r.jsx)(o,{valeur:e,index:t},e.id))}),(0,r.jsx)(l,{})]})})]})}e.s(["default",()=>d])},96428,e=>{"use strict";var r=e.i(43476),t=e.i(71645),n=e.i(22016);let i=[{src:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85",alt:"Réunion de famille",lieu:"Libreville"},{src:"https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=85",alt:"Fête du clan",lieu:"Lambaréné"},{src:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=85",alt:"Les anciens",lieu:"Port-Gentil"},{src:"https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=85",alt:"Cérémonie traditionnelle",lieu:"Franceville"},{src:"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=85",alt:"Solidarité familiale",lieu:"Oyem"},{src:"https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=85",alt:"Les jeunes du clan",lieu:"Libreville"},{src:"https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=85",alt:"Mariage traditionnel",lieu:"Moanda"},{src:"https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=800&q=85",alt:"Remise de diplôme",lieu:"Libreville"},{src:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=85",alt:"Projet communautaire",lieu:"Tchibanga"},{src:"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=85",alt:"Aide aux vulnérables",lieu:"Port-Gentil"},{src:"https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=85",alt:"Célébration",lieu:"Lambaréné"},{src:"https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=85",alt:"Repas de famille",lieu:"Makokou"}],a=[[{col:1,row:1,w:2,h:2},{col:3,row:1,w:1,h:1},{col:3,row:2,w:1,h:1}],[{col:1,row:1,w:1,h:1},{col:1,row:2,w:1,h:1},{col:2,row:1,w:2,h:2}],[{col:1,row:1,w:1,h:2},{col:2,row:1,w:2,h:1},{col:2,row:2,w:1,h:1},{col:3,row:2,w:1,h:1}],[{col:1,row:1,w:2,h:1},{col:3,row:1,w:1,h:2},{col:1,row:2,w:1,h:1},{col:2,row:2,w:1,h:1}]];function o(e=.1){let r=(0,t.useRef)(null),[n,i]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let t=r.current;if(!t)return;let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(i(!0),n.disconnect())},{threshold:e});return n.observe(t),()=>n.disconnect()},[e]),[r,n]}function s({cell:e,globalDelay:n}){let[i,a]=(0,t.useState)(!1),[s,l]=o(.1),d=`drift-${Math.abs(Math.round(100*e.driftX))}-${Math.abs(Math.round(100*e.driftY))}`;e.w,e.w;let p=220*e.h+(e.h-1)*10;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes ${d} {
          0%   { transform: translate(0px, 0px) rotate(0deg); }
          33%  { transform: translate(${.6*e.driftX}px, ${e.driftY}px) rotate(${.5*e.rotIdle}deg); }
          66%  { transform: translate(${e.driftX}px, ${.4*e.driftY}px) rotate(${e.rotIdle}deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
      `}),(0,r.jsxs)("div",{ref:s,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),style:{gridColumn:`${e.col} / span ${e.w}`,gridRow:`${e.row} / span ${e.h}`,borderRadius:"14px",overflow:"hidden",position:"relative",cursor:"pointer",width:"100%",height:"100%",minHeight:`${p}px`,opacity:+!!l,transform:l&&!i?"translateY(0) scale(1)":l?void 0:"translateY(30px) scale(0.96)",transition:`
            opacity 0.75s ${n}s cubic-bezier(0.4,0,0.2,1),
            transform 0.75s ${n}s cubic-bezier(0.34,1.1,0.64,1),
            box-shadow 0.45s ease
          `,animation:l&&!i?`${d} ${e.driftDur}s ${e.driftDelay}s ease-in-out infinite`:"none",boxShadow:i?"0 28px 60px rgba(0,0,0,0.65), 0 0 0 2px rgba(var(--bn-green-rgb),0.45)":"0 8px 24px rgba(0,0,0,0.45)",zIndex:i?10:1},children:[(0,r.jsx)("img",{src:e.photo.src,alt:e.photo.alt,style:{width:"100%",height:"100%",objectFit:"cover",display:"block",transform:i?"scale(1.10)":"scale(1.02)",transition:"transform 0.75s cubic-bezier(0.4,0,0.2,1)",willChange:"transform"}}),(0,r.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(5,2,1,0.70) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",transition:"opacity 0.4s ease",opacity:i?1:.5}}),(0,r.jsx)("div",{style:{position:"absolute",inset:0,borderRadius:"14px",border:"1.5px solid rgba(var(--bn-green-rgb),0)",transition:"border-color 0.4s ease",...i?{borderColor:"rgba(var(--bn-green-rgb),0.55)"}:{},pointerEvents:"none"}}),(0,r.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"18px 18px 16px",transform:i?"translateY(0)":"translateY(12px)",opacity:+!!i,transition:"transform 0.45s cubic-bezier(0.34,1.1,0.64,1), opacity 0.4s ease"},children:[(0,r.jsx)("p",{style:{fontFamily:"'Playfair Display', serif",fontSize:e.w>=2?"1.05rem":"0.88rem",fontWeight:700,color:"#ffffff",margin:"0 0 4px 0",lineHeight:1.2,textShadow:"0 2px 8px rgba(0,0,0,0.8)"},children:e.photo.alt}),(0,r.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.70rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--bn-green)"},children:[(0,r.jsx)("span",{style:{width:"14px",height:"1px",background:"var(--bn-green)",display:"inline-block"}}),e.photo.lieu]})]}),(0,r.jsx)("div",{style:{position:"absolute",top:"14px",right:"14px",width:"34px",height:"34px",borderRadius:"50%",background:"rgba(10,5,2,0.60)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",opacity:+!!i,transform:i?"scale(1) rotate(0deg)":"scale(0.6) rotate(-20deg)",transition:"opacity 0.35s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",border:"1px solid rgba(var(--bn-green-rgb),0.55)"},children:(0,r.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:[(0,r.jsx)("circle",{cx:"6",cy:"6",r:"4.5",stroke:"var(--bn-white)",strokeWidth:"1.3"}),(0,r.jsx)("line",{x1:"9.5",y1:"9.5",x2:"13",y2:"13",stroke:"var(--bn-white)",strokeWidth:"1.3",strokeLinecap:"round"})]})})]})]})}function l({group:e,groupIndex:t}){return(0,r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(2, 220px)",gap:"10px",width:"100%"},children:e.map((e,n)=>(0,r.jsx)(s,{cell:e,globalDelay:.15*t+.07*n},n))})}function d(){let[e,t]=o(.3);return(0,r.jsxs)("div",{ref:e,style:{textAlign:"center",marginBottom:"64px",opacity:+!!t,transform:t?"translateY(0)":"translateY(36px)",transition:"opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,r.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"14px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.70rem",fontWeight:600,letterSpacing:"0.32em",textTransform:"uppercase",color:"var(--bn-green)",marginBottom:"22px"},children:[(0,r.jsx)("span",{style:{width:"40px",height:"1px",background:"linear-gradient(90deg, transparent, var(--bn-green))",display:"block"}}),"Nos Mémoires",(0,r.jsx)("span",{style:{width:"40px",height:"1px",background:"linear-gradient(90deg, var(--bn-green), transparent)",display:"block"}})]}),(0,r.jsxs)("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(2rem, 5vw, 3.6rem)",fontWeight:900,color:"#ffffff",margin:"0 0 20px 0",lineHeight:1.08},children:["Les instants qui",(0,r.jsx)("br",{}),(0,r.jsx)("em",{style:{color:"var(--bn-green)",fontStyle:"italic"},children:"nous racontent"})]}),(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(0.98rem, 1.4vw, 1.15rem)",color:"rgba(255,255,255,0.78)",maxWidth:"500px",margin:"0 auto",lineHeight:1.8},children:"Chaque photo est une page de notre histoire collective. Des sourires, des larmes, des fêtes — la vie du clan capturée pour l'éternité."})]})}function p(){let[e,i]=o(.2),[a,s]=(0,t.useState)(!1);return(0,r.jsx)("div",{ref:e,style:{display:"flex",justifyContent:"center",marginTop:"60px",opacity:+!!i,transform:i?"translateY(0)":"translateY(24px)",transition:"opacity 0.8s 0.2s ease, transform 0.8s 0.2s cubic-bezier(0.34,1.1,0.64,1)"},children:(0,r.jsxs)(n.default,{href:"/nos-albums",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),style:{position:"relative",overflow:"hidden",display:"inline-flex",alignItems:"center",gap:"14px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.92rem",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",padding:"16px 40px",borderRadius:"6px",border:"1.5px solid rgba(var(--bn-green-rgb),0.70)",color:a?"#0B0F0C":"rgba(255,255,255,0.95)",background:"transparent",textDecoration:"none",transition:"color 0.35s ease"},children:[(0,r.jsx)("span",{style:{position:"absolute",inset:0,background:"var(--bn-green)",transform:a?"scaleX(1)":"scaleX(0)",transformOrigin:"left",transition:"transform 0.42s cubic-bezier(0.4,0,0.2,1)",borderRadius:"4px"}}),(0,r.jsx)("span",{style:{position:"relative",zIndex:1},children:"Voir tous nos albums"}),(0,r.jsx)("span",{style:{position:"relative",zIndex:1,transform:a?"translateX(6px)":"translateX(0)",transition:"transform 0.35s cubic-bezier(0.34,1.56,0.64,1)"},children:"→"})]})})}function c(){let e=(0,t.useMemo)(()=>(function(e){let r,t=(r=42,()=>((r=(16807*r+0)%0x7fffffff)-1)/0x7ffffffe),n=[],i=0,o=0;for(;i<e.length;){let r=a[o%a.length];o++;let s=r.length;if(i+s>e.length)break;let l=r.map((r,n)=>({...r,photo:e[i+n],driftX:(t()-.5)*6,driftY:(t()-.5)*6,driftDur:4+3*t(),driftDelay:2*t(),rotIdle:(t()-.5)*1.5}));n.push(l),i+=s}return n})(i),[]),[n,o]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let e=()=>o(window.innerWidth<=700);return e(),window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
          gap: 20px;
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
      `}),(0,r.jsx)("section",{className:"galerie-root",children:(0,r.jsxs)("div",{className:"galerie-inner",children:[(0,r.jsx)(d,{}),n?(0,r.jsx)("div",{className:"galerie-mobile-grid",children:i.map((e,t)=>(0,r.jsxs)("div",{style:{borderRadius:"14px",overflow:"hidden",position:"relative",boxShadow:"0 8px 24px rgba(0,0,0,0.45)",minHeight:t%5==0?"260px":"200px"},children:[(0,r.jsx)("img",{src:e.src,alt:e.alt,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",display:"block"}}),(0,r.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(5,2,1,0.78) 0%, rgba(0,0,0,0.10) 55%, transparent 100%)"}}),(0,r.jsxs)("div",{style:{position:"absolute",left:0,right:0,bottom:0,padding:"14px 14px 12px"},children:[(0,r.jsx)("p",{style:{fontFamily:"'Playfair Display', serif",fontSize:"0.95rem",fontWeight:700,color:"#ffffff",margin:"0 0 4px 0",lineHeight:1.2,textShadow:"0 2px 8px rgba(0,0,0,0.8)"},children:e.alt}),(0,r.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"6px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.68rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--bn-green)"},children:[(0,r.jsx)("span",{style:{width:"14px",height:"1px",background:"var(--bn-green)",display:"inline-block"}}),e.lieu]})]})]},e.src+t))}):(0,r.jsx)("div",{className:"galerie-groups",children:e.map((e,t)=>(0,r.jsx)(l,{group:e,groupIndex:t},t))}),(0,r.jsx)(p,{})]})})]})}e.s(["default",()=>c])},12789,e=>{"use strict";var r=e.i(43476),t=e.i(71645),n=e.i(22016);let i=[{id:1,nom:"Jean-Baptiste Nguyen",role:"Chef de Famille",profession:"Magistrat",photo:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85",ville:"Libreville",bio:"Patriarche du clan, Jean-Baptiste veille sur l'unité de la famille depuis plus de 30 ans avec sagesse et autorité bienveillante."},{id:2,nom:"Marie-Claire Obame",role:"Gardienne des Traditions",profession:"Ethnologue",photo:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=85",ville:"Libreville",bio:"Dépositaire de la mémoire collective, elle documente nos rites et s'assure que nos enfants grandissent enracinés dans leur culture."},{id:3,nom:"Pierre Mba Nguyen",role:"Trésorier",profession:"Expert-Comptable",photo:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=85",ville:"Port-Gentil",bio:"Rigueur et transparence. Pierre gère les finances du clan avec intégrité, garantissant la bonne santé de nos projets communs."},{id:4,nom:"Élodie Mintsa",role:"Responsable Solidarité",profession:"Médecin",photo:"https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=85",ville:"Franceville",bio:"Au service des plus vulnérables, Élodie coordonne l'aide aux veuves, personnes âgées et enfants en difficulté au sein du clan."},{id:5,nom:"Samuel Ondo",role:"Responsable Projets",profession:"Ingénieur Civil",photo:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85",ville:"Oyem",bio:"Bâtisseur visionnaire, Samuel pilote les projets immobiliers et fonciers qui constituent notre patrimoine familial."},{id:6,nom:"Christelle Ella",role:"Secrétaire Générale",profession:"Juriste",photo:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=85",ville:"Libreville",bio:"Organisée et rigoureuse, Christelle veille au bon fonctionnement administratif et juridique de la communauté familiale."},{id:7,nom:"Hervé Nzamba",role:"Porte-Parole",profession:"Journaliste",photo:"https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=85",ville:"Lambaréné",bio:"Voix du clan, Hervé assure la communication interne et externe, et préserve l'image de notre famille auprès du monde."},{id:8,nom:"Nadège Bouanga",role:"Responsable Jeunesse",profession:"Enseignante",photo:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=85",ville:"Moanda",bio:"Passionnée d'éducation, Nadège encadre les jeunes membres du clan et les prépare à prendre la relève avec fierté."},{id:9,nom:"Aurélien Nkoghe",role:"Conseiller Économique",profession:"Entrepreneur",photo:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=85",ville:"Libreville",bio:"Entrepreneur accompli, Aurélien guide les porteurs de projets et connecte le clan aux opportunités économiques du pays."},{id:10,nom:"Rosalie Engonga",role:"Responsable Santé",profession:"Infirmière en Chef",photo:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=85",ville:"Tchibanga",bio:"Rosalie organise les caravanes médicales et s'assure que chaque membre du clan bénéficie des soins dont il a besoin."},{id:11,nom:"Patrick Zué",role:"Responsable Spirituel",profession:"Pasteur",photo:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=85",ville:"Makokou",bio:"Guide spirituel du clan, Patrick accompagne les familles dans les moments de joie comme dans les épreuves de la vie."},{id:12,nom:"Viviane Assoumou",role:"Responsable Culture",profession:"Artiste & Chorégraphe",photo:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=85",ville:"Port-Gentil",bio:"Âme créatrice du clan, Viviane perpétue nos danses, chants et rites traditionnels en les transmettant aux générations futures."}];function a(e=.1){let r=(0,t.useRef)(null),[n,i]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let t=r.current;if(!t)return;let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(i(!0),n.disconnect())},{threshold:e});return n.observe(t),()=>n.disconnect()},[e]),[r,n]}function o({membre:e,isSelected:n,onSelect:i}){let[a,o]=(0,t.useState)(!1);return(0,r.jsxs)("div",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:()=>i(n?null:e.id),style:{borderRadius:"12px",overflow:"hidden",background:"linear-gradient(145deg, #0f0a05 0%, #171008 100%)",border:`1px solid ${n?"rgba(var(--bn-green-rgb),0.55)":"rgba(var(--bn-green-rgb),0.22)"}`,boxShadow:a||n?"0 22px 60px rgba(0,0,0,0.70), 0 0 0 1px rgba(var(--bn-green-rgb),0.22)":"0 10px 28px rgba(0,0,0,0.55)",transform:a?"translateY(-3px)":"translateY(0)",transition:"transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",cursor:"pointer",minWidth:0},children:[(0,r.jsxs)("div",{style:{position:"relative",height:"170px",overflow:"hidden"},children:[(0,r.jsx)("img",{src:e.photo,alt:e.nom,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center",transform:a?"scale(1.06)":"scale(1.02)",transition:"transform 0.7s cubic-bezier(0.4,0,0.2,1)",display:"block"}}),(0,r.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(10,5,2,0.90) 100%)"}}),(0,r.jsxs)("div",{style:{position:"absolute",left:12,right:12,bottom:12,textAlign:"left"},children:[(0,r.jsx)("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--bn-green)",marginBottom:"6px"},children:e.role}),(0,r.jsx)("div",{style:{fontFamily:"'Playfair Display', serif",fontSize:"0.98rem",fontWeight:700,color:"#ffffff",lineHeight:1.2,marginBottom:"3px"},children:e.nom}),(0,r.jsx)("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.82)",fontStyle:"italic"},children:e.profession})]})]}),(0,r.jsx)("div",{style:{padding:"12px 14px 14px"},children:(0,r.jsxs)("span",{style:{fontSize:"0.68rem",color:"rgba(255,255,255,0.78)",letterSpacing:"0.10em",fontFamily:"'Cormorant Garamond', serif",textTransform:"uppercase"},children:["📍 ",e.ville]})})]})}function s({membre:e,pos:n,index:i,isSelected:o,onSelect:s,anySelected:l}){let[d,p]=(0,t.useState)(!1),[c,g]=a(.05),m=i%6*.08,x=o?0:d?.3*n.rot:n.rot,f=o?1:d?1.05:n.scale,b=o?100:d?50:l?Math.max(n.zBase-5,1):n.zBase;return(0,r.jsxs)("div",{ref:c,style:{position:"absolute",left:`${n.baseX}%`,top:`${n.baseY}%`,width:"200px",transform:g?`translate(-50%, -50%) rotate(${x}deg) scale(${f})`:`translate(-50%, -50%) rotate(${n.rot}deg) scale(0.7)`,opacity:g?l&&!o?.35:1:0,zIndex:b,transition:`
          transform 0.55s ${o?"0s":`${m}s`} cubic-bezier(0.34,1.1,0.64,1),
          opacity   0.5s  ${m}s ease,
          z-index   0s
        `,cursor:"pointer"},onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),onClick:()=>s(o?null:e.id),children:[(0,r.jsx)("div",{style:{position:"absolute",inset:0,borderRadius:"4px",boxShadow:o?"0 40px 100px rgba(0,0,0,0.80), 0 0 0 2px rgba(var(--bn-green-rgb),0.60)":d?"0 20px 50px rgba(0,0,0,0.70), 0 0 0 1.5px rgba(var(--bn-green-rgb),0.35)":"4px 8px 24px rgba(0,0,0,0.60), 2px 3px 8px rgba(0,0,0,0.40)",transition:"box-shadow 0.45s ease"}}),(0,r.jsxs)("div",{style:{position:"relative",borderRadius:"4px",overflow:"hidden",background:"#0f0a05",border:`1px solid ${o?"rgba(var(--bn-green-rgb),0.55)":"rgba(var(--bn-green-rgb),0.20)"}`,transition:"border-color 0.4s ease"},children:[(0,r.jsx)("div",{style:{height:"4px",background:"linear-gradient(90deg, transparent, var(--bn-green), var(--bn-white), var(--bn-green), transparent)"}}),(0,r.jsxs)("div",{style:{position:"relative",height:"160px",overflow:"hidden"},children:[(0,r.jsx)("img",{src:e.photo,alt:e.nom,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center",display:"block",transform:d||o?"scale(1.08)":"scale(1.0)",transition:"transform 0.7s cubic-bezier(0.4,0,0.2,1)"}}),(0,r.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(10,5,2,0.90) 100%)"}}),(0,r.jsx)("div",{style:{position:"absolute",bottom:"10px",left:"10px",right:"10px",textAlign:"center"},children:(0,r.jsx)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.62rem",letterSpacing:"0.16em",textTransform:"uppercase",color:"var(--bn-green)",background:"rgba(10,5,2,0.75)",backdropFilter:"blur(8px)",padding:"3px 8px",borderRadius:"20px",border:"1px solid rgba(var(--bn-green-rgb),0.30)",display:"inline-block"},children:e.role})})]}),(0,r.jsxs)("div",{style:{padding:"14px 14px 16px"},children:[(0,r.jsx)("h3",{style:{fontFamily:"'Playfair Display', serif",fontSize:"0.88rem",fontWeight:700,color:"#ffffff",margin:"0 0 4px 0",lineHeight:1.2},children:e.nom}),(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.82)",margin:"0 0 8px 0",fontStyle:"italic"},children:e.profession}),(0,r.jsx)("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:(0,r.jsxs)("span",{style:{fontSize:"0.60rem",color:"rgba(255,255,255,0.72)",letterSpacing:"0.1em",fontFamily:"'Cormorant Garamond', serif",textTransform:"uppercase"},children:["📍 ",e.ville]})})]})]}),(0,r.jsx)("div",{style:{position:"absolute",top:"-10px",left:"50%",transform:"translateX(-50%)",width:"16px",height:"16px",borderRadius:"50%",background:o?"radial-gradient(circle at 35% 35%, var(--bn-white), var(--bn-green))":"radial-gradient(circle at 35% 35%, rgba(var(--bn-green-rgb),0.65), rgba(0,0,0,0.85))",boxShadow:o?"0 2px 8px rgba(var(--bn-green-rgb),0.55)":"0 2px 5px rgba(0,0,0,0.50)",border:"1.5px solid rgba(255,255,255,0.15)",zIndex:10,transition:"background 0.3s, box-shadow 0.3s"}})]})}function l({membre:e,onClose:n,isMobile:i}){let[a,o]=(0,t.useState)(!1);return((0,t.useEffect)(()=>{setTimeout(()=>o(!0),20)},[]),e)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{onClick:n,style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.0)",zIndex:200,cursor:"pointer"}}),(0,r.jsxs)("div",{style:{position:"fixed",right:i?"16px":a?"32px":"-420px",left:i?"16px":"auto",bottom:i?a?"16px":"-520px":"auto",top:i?"auto":"50%",transform:i?"none":"translateY(-50%)",width:i?"auto":"min(380px, calc(100vw - 48px))",maxHeight:i?"calc(100dvh - 32px)":"auto",zIndex:300,borderRadius:"16px",overflow:"hidden",background:"linear-gradient(145deg, #110c06 0%, #1c1208 100%)",border:"1px solid rgba(var(--bn-green-rgb),0.30)",boxShadow:"0 40px 120px rgba(0,0,0,0.80), 0 0 0 1px rgba(var(--bn-green-rgb),0.15)",transition:i?"bottom 0.55s cubic-bezier(0.34,1.1,0.64,1)":"right 0.55s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,r.jsx)("div",{style:{height:"3px",background:"linear-gradient(90deg, transparent, var(--bn-green), var(--bn-white), var(--bn-green), transparent)"}}),(0,r.jsx)("button",{onClick:n,style:{position:"absolute",top:"16px",right:"16px",width:"32px",height:"32px",borderRadius:"50%",background:"rgba(var(--bn-green-rgb),0.14)",border:"1px solid rgba(var(--bn-green-rgb),0.30)",color:"var(--bn-white)",fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,transition:"background 0.25s"},onMouseEnter:e=>e.currentTarget.style.background="rgba(var(--bn-green-rgb),0.28)",onMouseLeave:e=>e.currentTarget.style.background="rgba(var(--bn-green-rgb),0.14)",children:"✕"}),(0,r.jsxs)("div",{style:{position:"relative",height:"260px",overflow:"hidden"},children:[(0,r.jsx)("img",{src:e.photo,alt:e.nom,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center",display:"block",animation:"zoomIn 0.8s cubic-bezier(0.4,0,0.2,1) forwards"}}),(0,r.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(10,5,2,0.90) 100%)"}}),(0,r.jsxs)("div",{style:{position:"absolute",bottom:"20px",left:"24px",right:"24px"},children:[(0,r.jsx)("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.68rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--bn-green)",marginBottom:"6px"},children:e.role}),(0,r.jsx)("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.45rem",fontWeight:900,color:"#ffffff",margin:0,lineHeight:1.15,textShadow:"0 2px 12px rgba(0,0,0,0.8)"},children:e.nom})]})]}),(0,r.jsxs)("div",{style:{padding:"24px 28px 32px"},children:[(0,r.jsxs)("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap",marginBottom:"20px"},children:[(0,r.jsx)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.75rem",padding:"5px 14px",borderRadius:"20px",background:"rgba(var(--bn-green-rgb),0.12)",border:"1px solid rgba(var(--bn-green-rgb),0.32)",color:"rgba(255,255,255,0.92)",fontStyle:"italic"},children:e.profession}),(0,r.jsxs)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.65rem",padding:"5px 12px",borderRadius:"20px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.10)",color:"rgba(255,255,255,0.78)"},children:["📍 ",e.ville]})]}),(0,r.jsx)("div",{style:{width:"40px",height:"1.5px",background:"linear-gradient(90deg, var(--bn-green), transparent)",marginBottom:"16px",borderRadius:"2px"}}),(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.05rem",lineHeight:1.8,color:"rgba(255,255,255,0.68)",margin:0},children:e.bio})]})]})]}):null}function d(){let[e,t]=a(.2);return(0,r.jsxs)("div",{ref:e,style:{textAlign:"center",marginBottom:"20px",opacity:+!!t,transform:t?"translateY(0)":"translateY(36px)",transition:"opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,r.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"14px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.70rem",fontWeight:600,letterSpacing:"0.32em",textTransform:"uppercase",color:"var(--bn-green)",marginBottom:"22px"},children:[(0,r.jsx)("span",{style:{width:"40px",height:"1px",background:"linear-gradient(90deg, transparent, var(--bn-green))",display:"block"}}),"Le Clan",(0,r.jsx)("span",{style:{width:"40px",height:"1px",background:"linear-gradient(90deg, var(--bn-green), transparent)",display:"block"}})]}),(0,r.jsxs)("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(2rem, 5vw, 3.6rem)",fontWeight:900,color:"#ffffff",margin:"0 0 20px 0",lineHeight:1.08},children:["Ceux qui font",(0,r.jsx)("br",{}),(0,r.jsx)("em",{style:{color:"var(--bn-green)",fontStyle:"italic"},children:"vivre notre famille"})]}),(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(0.98rem, 1.4vw, 1.12rem)",color:"rgba(255,255,255,0.78)",maxWidth:"480px",margin:"0 auto",lineHeight:1.8},children:"Cliquez sur une carte pour découvrir chaque membre et le rôle qu'il joue au cœur de notre clan."})]})}function p(){let[e,a]=(0,t.useState)(null),[p,c]=(0,t.useState)(!1),g=(0,t.useMemo)(()=>(function(e){let r,t=(r=137,()=>((r=16807*r%0x7fffffff)-1)/0x7ffffffe),n=Math.ceil(e/4),i=[];for(let r=0;r<e;r++){let e=r%4/4*100,a=Math.floor(r/4)/n*100,o=(t()-.5)*14,s=(t()-.5)*14,l=(t()-.5)*16,d=.92+.12*t(),p=Math.floor(10*t())+1;i.push({baseX:e+o,baseY:a+s,rot:l,scale:d,zBase:p})}return i})(i.length),[]),m=i.find(r=>r.id===e)||null;(0,t.useEffect)(()=>{let e=()=>c(window.innerWidth<=900);return e(),window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[]),(0,t.useEffect)(()=>{let e=e=>{"Escape"===e.key&&a(null)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]);let x=Math.ceil(i.length/4);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("section",{className:"membres-root",children:[(0,r.jsx)("div",{className:"membres-header",children:(0,r.jsx)(d,{})}),p?(0,r.jsx)("div",{className:"membres-grid",children:i.map(t=>(0,r.jsx)(o,{membre:t,isSelected:e===t.id,onSelect:a},t.id))}):(0,r.jsx)("div",{className:"table-surface",style:{height:`${220*x+100}px`},children:i.map((t,n)=>(0,r.jsx)(s,{membre:t,pos:g[n],index:n,isSelected:e===t.id,anySelected:null!==e,onSelect:a},t.id))}),(0,r.jsx)("div",{className:"membres-cta",children:(0,r.jsxs)(n.default,{href:"/nos-membres",style:{position:"relative",overflow:"hidden",display:"inline-flex",alignItems:"center",gap:"14px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.92rem",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",padding:"16px 40px",borderRadius:"6px",border:"1.5px solid rgba(var(--bn-green-rgb),0.70)",color:"rgba(255,255,255,0.95)",background:"transparent",textDecoration:"none"},onMouseEnter:e=>{let r=e.currentTarget.querySelector(".cta-fill");r&&(r.style.transform="scaleX(1)"),e.currentTarget.style.color="#0B0F0C"},onMouseLeave:e=>{let r=e.currentTarget.querySelector(".cta-fill");r&&(r.style.transform="scaleX(0)"),e.currentTarget.style.color="rgba(255,255,255,0.95)"},children:[(0,r.jsx)("span",{className:"cta-fill",style:{position:"absolute",inset:0,background:"var(--bn-green)",transform:"scaleX(0)",transformOrigin:"left",transition:"transform 0.42s cubic-bezier(0.4,0,0.2,1)",borderRadius:"4px"}}),(0,r.jsx)("span",{style:{position:"relative",zIndex:1},children:"Voir tous les membres"}),(0,r.jsx)("span",{style:{position:"relative",zIndex:1},children:"→"})]})})]}),(0,r.jsx)(l,{membre:m,onClose:()=>a(null),isMobile:p})]})}e.s(["default",()=>p])},601,e=>{"use strict";var r=e.i(43476),t=e.i(71645),n=e.i(22016);let i=[{id:1,type:"image",src:"https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85",categorie:"Mariage",titre:"Mariage de Rodrigue & Cynthia",date:"14 Février 2025",lieu:"Libreville",description:"Une union bénie sous le signe de l'amour et des traditions ancestrales. Le clan s'est rassemblé en force pour célébrer cette journée inoubliable.",taille:"grande"},{id:2,type:"video",src:"https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4",categorie:"Fête Traditionnelle",titre:"Grande Fête du Clan 2024",date:"31 Décembre 2024",lieu:"Port-Gentil",description:"Notre rassemblement annuel de fin d'année. Danses, chants et retrouvailles pour clore l'année en famille.",taille:"grande"},{id:3,type:"image",src:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=85",categorie:"Remise de Prix",titre:"Cérémonie des Lauréats",date:"22 Juin 2024",lieu:"Franceville",description:"Honorer nos diplômés et les encourager sur la voie de l'excellence.",taille:"moyenne"},{id:4,type:"image",src:"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=85",categorie:"Solidarité",titre:"Caravane Médicale",date:"10 Mars 2025",lieu:"Oyem",description:"Soins gratuits pour les membres vulnérables et leurs familles.",taille:"moyenne"},{id:5,type:"video",src:"https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4",categorie:"Projet",titre:"Pose de Première Pierre",date:"5 Janvier 2025",lieu:"Moanda",description:"Inauguration des travaux de notre premier bien immobilier collectif. Un pas historique pour le clan.",taille:"petite"},{id:6,type:"image",src:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=85",categorie:"Mémoire",titre:"Cérémonie de Deuil — Grand-Père Nguyen",date:"18 Août 2024",lieu:"Lambaréné",description:"En sa mémoire, nous nous sommes réunis pour honorer sa vie et perpétuer son héritage.",taille:"petite"},{id:7,type:"image",src:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85",categorie:"Assemblée",titre:"Conseil Annuel du Clan",date:"2 Novembre 2024",lieu:"Libreville",description:"Bilan de l'année, élection des représentants et définition des grandes orientations pour 2025.",taille:"moyenne"},{id:8,type:"video",src:"https://videos.pexels.com/video-files/3044706/3044706-uhd_2560_1440_25fps.mp4",categorie:"Baptême",titre:"Baptême des Petits du Clan",date:"20 Avril 2025",lieu:"Tchibanga",description:"Accueil des nouveaux membres dans la grande famille. Une journée de joie et de bénédictions.",taille:"petite"}],a={Mariage:"var(--bn-green)","Fête Traditionnelle":"var(--bn-green)","Remise de Prix":"var(--bn-green)",Solidarité:"var(--bn-green)",Projet:"var(--bn-green)",Mémoire:"var(--bn-green)",Assemblée:"var(--bn-green)",Baptême:"var(--bn-green)"};function o(e=.15){let r=(0,t.useRef)(null),[n,i]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let t=r.current;if(!t)return;let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(i(!0),n.disconnect())},{threshold:e});return n.observe(t),()=>n.disconnect()},[e]),[r,n]}function s({evt:e,hovered:n}){let i=(0,t.useRef)(null),[a,o]=(0,t.useState)(!1);return((0,t.useEffect)(()=>{let e=i.current;e&&(n?(e.play().catch(()=>{}),o(!0)):(e.pause(),o(!1)))},[n]),(0,t.useEffect)(()=>{let e=i.current;if(!e)return;let r=new IntersectionObserver(([r])=>{r.isIntersecting?(e.play().catch(()=>{}),o(!0)):(e.pause(),o(!1))},{threshold:.4});return r.observe(e),()=>r.disconnect()},[]),"video"===e.type)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("video",{ref:i,src:e.src,muted:!0,loop:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",transform:n?"scale(1.06)":"scale(1.01)",transition:"transform 0.9s cubic-bezier(0.4,0,0.2,1)"}}),(0,r.jsx)("div",{style:{position:"absolute",top:"14px",right:"14px",zIndex:5,width:"30px",height:"30px",borderRadius:"50%",background:"rgba(10,5,2,0.60)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.20)",display:"flex",alignItems:"center",justifyContent:"center",opacity:a?.7:1,transition:"opacity 0.3s"},children:a?(0,r.jsxs)("svg",{width:"10",height:"12",viewBox:"0 0 10 12",fill:"white",children:[(0,r.jsx)("rect",{x:"0",y:"0",width:"3",height:"12",rx:"1"}),(0,r.jsx)("rect",{x:"7",y:"0",width:"3",height:"12",rx:"1"})]}):(0,r.jsx)("svg",{width:"10",height:"12",viewBox:"0 0 10 12",fill:"white",children:(0,r.jsx)("path",{d:"M0 0 L10 6 L0 12 Z"})})})]}):(0,r.jsx)("img",{src:e.src,alt:e.titre,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",display:"block",transform:n?"scale(1.07)":"scale(1.01)",transition:"transform 0.9s cubic-bezier(0.4,0,0.2,1)"}})}function l({evt:e,index:n,spanCols:i=1,spanRows:l=1}){let[d,p]=o(.12),[c,g]=(0,t.useState)(!1),m=n%4*.1,x=a[e.categorie]||"var(--bn-green)";return(0,r.jsxs)("div",{ref:d,onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),style:{gridColumn:`span ${i}`,gridRow:`span ${l}`,position:"relative",borderRadius:"16px",overflow:"hidden",cursor:"pointer",minHeight:l>1?"520px":"280px",opacity:+!!p,transform:p?"translateY(0) scale(1)":"translateY(32px) scale(0.97)",transition:`
          opacity   0.75s ${m}s cubic-bezier(0.4,0,0.2,1),
          transform 0.75s ${m}s cubic-bezier(0.34,1.1,0.64,1),
          box-shadow 0.45s ease
        `,boxShadow:c?`0 32px 72px rgba(0,0,0,0.65), 0 0 0 1.5px ${x}55`:"0 8px 28px rgba(0,0,0,0.50)"},children:[(0,r.jsx)(s,{evt:e,hovered:c}),(0,r.jsx)("div",{style:{position:"absolute",inset:0,background:`linear-gradient(
          to top,
          rgba(4, 2, 1, 0.95) 0%,
          rgba(4, 2, 1, 0.75) 30%,
          rgba(4, 2, 1, 0.20) 60%,
          transparent 100%
        )`,transition:"opacity 0.4s ease",opacity:c?.95:1,zIndex:2,pointerEvents:"none"}}),(0,r.jsx)("div",{style:{position:"absolute",inset:0,borderRadius:"16px",border:`1.5px solid ${x}`,opacity:.45*!!c,transition:"opacity 0.4s ease",zIndex:4,pointerEvents:"none"}}),(0,r.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"20px 22px 22px",zIndex:3,transform:c?"translateY(-4px)":"translateY(0)",transition:"transform 0.45s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,r.jsxs)("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",marginBottom:"8px"},children:[(0,r.jsx)("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:x,display:"inline-block",flexShrink:0,boxShadow:`0 0 6px ${x}`}}),(0,r.jsx)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.22em",textTransform:"uppercase",color:x},children:e.categorie})]}),(0,r.jsx)("h3",{style:{fontFamily:"'Playfair Display', serif",fontSize:i>1?"clamp(1.15rem, 2vw, 1.50rem)":"1.05rem",fontWeight:700,color:"#ffffff",margin:"0 0 8px 0",lineHeight:1.22,textShadow:"0 2px 10px rgba(0,0,0,0.7)"},children:e.titre}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:c?"12px":"0",transition:"margin 0.35s ease"},children:[(0,r.jsxs)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.75rem",color:"rgba(255,255,255,0.78)",display:"flex",alignItems:"center",gap:"5px"},children:["📅 ",e.date]}),(0,r.jsx)("span",{style:{width:"3px",height:"3px",borderRadius:"50%",background:"rgba(255,255,255,0.25)",flexShrink:0}}),(0,r.jsxs)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.75rem",color:"rgba(255,255,255,0.78)"},children:["📍 ",e.lieu]})]}),(0,r.jsx)("div",{style:{maxHeight:c?"80px":"0",overflow:"hidden",transition:"max-height 0.45s cubic-bezier(0.4,0,0.2,1)"},children:(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.88rem",lineHeight:1.65,color:"rgba(255,255,255,0.68)",margin:"0 0 0 0",paddingTop:"8px",borderTop:"1px solid rgba(255,255,255,0.08)"},children:e.description})})]})]})}function d(){let[e,t]=o(.2);return(0,r.jsxs)("div",{ref:e,style:{textAlign:"center",marginBottom:"60px",opacity:+!!t,transform:t?"translateY(0)":"translateY(36px)",transition:"opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,r.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"14px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.70rem",fontWeight:600,letterSpacing:"0.32em",textTransform:"uppercase",color:"var(--bn-green)",marginBottom:"22px"},children:[(0,r.jsx)("span",{style:{width:"40px",height:"1px",background:"linear-gradient(90deg, transparent, var(--bn-green))",display:"block"}}),"La Vie du Clan",(0,r.jsx)("span",{style:{width:"40px",height:"1px",background:"linear-gradient(90deg, var(--bn-green), transparent)",display:"block"}})]}),(0,r.jsxs)("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(2rem, 5vw, 3.6rem)",fontWeight:900,color:"#ffffff",margin:"0 0 20px 0",lineHeight:1.08},children:["Nos moments",(0,r.jsx)("br",{}),(0,r.jsx)("em",{style:{color:"var(--bn-green)",fontStyle:"italic"},children:"qui nous rassemblent"})]}),(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(0.98rem, 1.4vw, 1.12rem)",color:"rgba(255,255,255,0.78)",maxWidth:"500px",margin:"0 auto",lineHeight:1.8},children:"Mariages, fêtes, cérémonies, projets… la vie de notre clan se raconte à travers ces instants précieux que nous vivons ensemble."})]})}function p(){let[e,i]=o(.2),[a,s]=(0,t.useState)(!1);return(0,r.jsx)("div",{ref:e,style:{display:"flex",justifyContent:"center",marginTop:"56px",opacity:+!!i,transform:i?"translateY(0)":"translateY(24px)",transition:"opacity 0.8s 0.2s ease, transform 0.8s 0.2s cubic-bezier(0.34,1.1,0.64,1)"},children:(0,r.jsxs)(n.default,{href:"/nos-evenements",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),style:{position:"relative",overflow:"hidden",display:"inline-flex",alignItems:"center",gap:"14px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.92rem",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",padding:"16px 40px",borderRadius:"6px",border:"1.5px solid rgba(var(--bn-green-rgb),0.70)",color:a?"#0B0F0C":"rgba(255,255,255,0.95)",background:"transparent",textDecoration:"none",transition:"color 0.35s ease"},children:[(0,r.jsx)("span",{style:{position:"absolute",inset:0,background:"var(--bn-green)",transform:a?"scaleX(1)":"scaleX(0)",transformOrigin:"left",transition:"transform 0.42s cubic-bezier(0.4,0,0.2,1)",borderRadius:"4px"}}),(0,r.jsx)("span",{style:{position:"relative",zIndex:1},children:"Voir tous nos événements"}),(0,r.jsx)("span",{style:{position:"relative",zIndex:1,transform:a?"translateX(6px)":"translateX(0)",transition:"transform 0.35s cubic-bezier(0.34,1.56,0.64,1)"},children:"→"})]})})}function c(){let e=(0,t.useMemo)(()=>i.map(e=>"grande"===e.taille?{...e,spanCols:2,spanRows:2}:"moyenne"===e.taille?{...e,spanCols:2,spanRows:1}:{...e,spanCols:1,spanRows:1}),[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsx)("section",{className:"evenements-root",children:(0,r.jsxs)("div",{className:"evenements-inner",children:[(0,r.jsx)(d,{}),(0,r.jsx)("div",{className:"events-grid",children:e.map((e,t)=>(0,r.jsx)(l,{evt:e,index:t,spanCols:e.spanCols,spanRows:e.spanRows},e.id))}),(0,r.jsx)(p,{})]})})]})}e.s(["default",()=>c])},31257,e=>{"use strict";var r=e.i(43476),t=e.i(71645),n=e.i(57688);function i(e=.15){let r=(0,t.useRef)(null),[n,a]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let t=r.current;if(!t)return;let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(a(!0),n.disconnect())},{threshold:e});return n.observe(t),()=>n.disconnect()},[e]),[r,n]}function a({opacity:e=.04,color:t="var(--bn-green)"}){return(0,r.jsxs)("svg",{style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"},viewBox:"0 0 400 400",preserveAspectRatio:"xMidYMid slice",children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("pattern",{id:"afro-pat",x:"0",y:"0",width:"40",height:"40",patternUnits:"userSpaceOnUse",children:[(0,r.jsx)("polygon",{points:"20,4 36,20 20,36 4,20",fill:"none",stroke:t,strokeWidth:"0.8",opacity:10*e}),(0,r.jsx)("circle",{cx:"0",cy:"0",r:"1.5",fill:t,opacity:8*e}),(0,r.jsx)("circle",{cx:"40",cy:"0",r:"1.5",fill:t,opacity:8*e}),(0,r.jsx)("circle",{cx:"0",cy:"40",r:"1.5",fill:t,opacity:8*e}),(0,r.jsx)("circle",{cx:"40",cy:"40",r:"1.5",fill:t,opacity:8*e}),(0,r.jsx)("circle",{cx:"20",cy:"20",r:"2",fill:t,opacity:6*e}),(0,r.jsx)("line",{x1:"0",y1:"0",x2:"8",y2:"8",stroke:t,strokeWidth:"0.5",opacity:5*e}),(0,r.jsx)("line",{x1:"40",y1:"0",x2:"32",y2:"8",stroke:t,strokeWidth:"0.5",opacity:5*e}),(0,r.jsx)("line",{x1:"0",y1:"40",x2:"8",y2:"32",stroke:t,strokeWidth:"0.5",opacity:5*e}),(0,r.jsx)("line",{x1:"40",y1:"40",x2:"32",y2:"32",stroke:t,strokeWidth:"0.5",opacity:5*e})]})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#afro-pat)"})]})}function o({label:e,type:n="text",name:i,value:a,onChange:o,required:s=!1,placeholder:l,rows:d,optional:p}){let[c,g]=(0,t.useState)(!1),[m,x]=(0,t.useState)(!1),f=e=>{o(e),x(e.target.value.length>0)},b=c||m,u="textarea"===n,h={width:"100%",background:"transparent",border:"none",outline:"none",fontFamily:"'Cormorant Garamond', serif",fontSize:"1.05rem",color:"#ffffff",resize:"none",lineHeight:1.7,padding:u?"28px 0 12px":"24px 0 8px",display:"block",caretColor:"var(--bn-green)"};return(0,r.jsxs)("div",{style:{position:"relative",marginBottom:"8px"},children:[(0,r.jsxs)("label",{style:{position:"absolute",top:b?"6px":u?"20px":"18px",left:0,fontFamily:"'Cormorant Garamond', serif",fontSize:b?"0.68rem":"0.98rem",letterSpacing:b?"0.20em":"0.04em",textTransform:b?"uppercase":"none",color:c?"var(--bn-green)":b?"rgba(var(--bn-green-rgb),0.78)":"rgba(255,255,255,0.62)",transition:"all 0.35s cubic-bezier(0.34,1.1,0.64,1)",pointerEvents:"none",userSelect:"none"},children:[e,p&&(0,r.jsx)("span",{style:{marginLeft:"8px",fontSize:"0.60rem",color:"rgba(255,255,255,0.55)",letterSpacing:"0.12em",textTransform:"uppercase"},children:"— facultatif"})]}),u?(0,r.jsx)("textarea",{name:i,value:a,onChange:f,onFocus:()=>g(!0),onBlur:()=>g(!1),rows:d||5,required:s,placeholder:"",style:h}):(0,r.jsx)("input",{type:n,name:i,value:a,onChange:f,onFocus:()=>g(!0),onBlur:()=>g(!1),required:s,placeholder:"",style:h}),(0,r.jsxs)("div",{style:{position:"relative",height:"1px"},children:[(0,r.jsx)("div",{style:{position:"absolute",inset:0,background:"rgba(255,255,255,0.12)",borderRadius:"2px"}}),(0,r.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(90deg, var(--bn-green), var(--bn-white))",borderRadius:"2px",transform:c?"scaleX(1)":"scaleX(0)",transformOrigin:"left",transition:"transform 0.45s cubic-bezier(0.4,0,0.2,1)"}})]})]})}function s(){let e=Array.from({length:18},(e,r)=>({id:r,x:5+37*r%90,y:5+53*r%90,size:1.5+r%4*.8,dur:6+r%5*2.2,delay:r%7*.9,driftX:(r%5-2)*18,driftY:(r%4-2)*22}));return(0,r.jsxs)("div",{style:{position:"absolute",inset:0,pointerEvents:"none",overflow:"hidden"},children:[(0,r.jsx)("style",{children:`
        ${e.map(e=>`
          @keyframes float-${e.id} {
            0%   { transform: translate(0px, 0px) scale(1);   opacity: 0.4; }
            33%  { transform: translate(${.5*e.driftX}px, ${e.driftY}px) scale(1.3); opacity: 0.8; }
            66%  { transform: translate(${e.driftX}px, ${.4*e.driftY}px) scale(0.8); opacity: 0.5; }
            100% { transform: translate(0px, 0px) scale(1);   opacity: 0.4; }
          }
        `).join("")}
      `}),e.map(e=>(0,r.jsx)("div",{style:{position:"absolute",left:`${e.x}%`,top:`${e.y}%`,width:`${e.size}px`,height:`${e.size}px`,borderRadius:"50%",background:e.id%3==0?"var(--bn-green)":e.id%3==1?"var(--bn-white)":"var(--bn-green)",animation:`float-${e.id} ${e.dur}s ${e.delay}s ease-in-out infinite`}},e.id))]})}function l(){let e=(0,t.useRef)(null),l=(0,t.useRef)(null),d=(0,t.useRef)(null),p=(0,t.useRef)(null),[c,g]=(0,t.useState)({nom:"",prenom:"",email:"",motif:""}),[m,x]=(0,t.useState)(!1),[f,b]=(0,t.useState)(!1),[u,h]=(0,t.useState)({}),[y,v]=i(.2),[j,w]=i(.1),[k,z]=i(.2);(0,t.useEffect)(()=>{let r=()=>{let r=e.current;if(!r)return;let t=r.getBoundingClientRect(),n=window.innerHeight,i=(Math.max(0,Math.min(1,(n-t.top)/(n+t.height)))-.5)*120;l.current&&(l.current.style.transform=`translateY(${.5*i}px)`),d.current&&(d.current.style.transform=`translate(${.18*i}px, ${.3*i}px)`),p.current&&(p.current.style.transform=`translate(${-(.22*i)}px, ${.15*i}px)`)};return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]);let S=e=>{let{name:r,value:t}=e.target;g(e=>({...e,[r]:t})),u[r]&&h(e=>({...e,[r]:""}))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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

        /* ── Succ\xe8s ── */
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
      `}),(0,r.jsxs)("section",{ref:e,className:"contact-root",children:[(0,r.jsx)("div",{ref:l,style:{position:"absolute",inset:0,background:"radial-gradient(circle at 30% 25%, rgba(var(--bn-green-rgb),0.10) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(var(--bn-green-rgb),0.06) 0%, transparent 45%), radial-gradient(circle at 50% 80%, rgba(var(--bn-green-rgb),0.05) 0%, transparent 55%)",zIndex:0,willChange:"transform"}}),(0,r.jsx)("div",{style:{position:"absolute",inset:0,zIndex:1},children:(0,r.jsx)(a,{opacity:.025,color:"var(--bn-green)"})}),(0,r.jsx)("div",{ref:d,style:{position:"absolute",top:"-120px",left:"-120px",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle, rgba(var(--bn-green-rgb),0.16) 0%, transparent 70%)",animation:"orbPulse 6s ease-in-out infinite",zIndex:2,willChange:"transform",pointerEvents:"none"}}),(0,r.jsx)("div",{ref:p,style:{position:"absolute",bottom:"-10%",right:"-8%",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle, rgba(212,133,106,0.10) 0%, transparent 70%)",animation:"orbPulse 8s 2s ease-in-out infinite",zIndex:2,willChange:"transform",pointerEvents:"none"}}),(0,r.jsx)("div",{style:{position:"absolute",inset:0,zIndex:3,pointerEvents:"none"},children:(0,r.jsx)(s,{})}),(0,r.jsx)("div",{style:{position:"absolute",top:0,bottom:0,left:"50%",width:"1px",background:"linear-gradient(to bottom, transparent 0%, rgba(var(--bn-green-rgb),0.22) 20%, rgba(var(--bn-green-rgb),0.22) 80%, transparent 100%)",zIndex:4,pointerEvents:"none"}}),(0,r.jsxs)("div",{className:"contact-grid",children:[(0,r.jsxs)("div",{ref:k,style:{paddingRight:"60px",display:"flex",flexDirection:"column",justifyContent:"center",borderRight:"1px solid rgba(var(--bn-green-rgb),0.16)",opacity:+!!z,transform:z?"translateX(0)":"translateX(-50px)",transition:"opacity 1s ease, transform 1s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,r.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"12px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.68rem",fontWeight:600,letterSpacing:"0.30em",textTransform:"uppercase",color:"var(--bn-green)",marginBottom:"28px"},children:[(0,r.jsx)("span",{style:{width:"36px",height:"1px",background:"var(--bn-green)",display:"block"}}),"Nous Joindre"]}),(0,r.jsxs)("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(2rem, 4vw, 3.2rem)",fontWeight:900,color:"#ffffff",margin:"0 0 24px 0",lineHeight:1.1},children:["Parlez-nous,",(0,r.jsx)("br",{}),(0,r.jsx)("em",{style:{color:"var(--bn-green)",fontStyle:"italic"},children:"nous vous écoutons"})]}),(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.08rem",lineHeight:1.85,color:"rgba(255,255,255,0.78)",margin:"0 0 48px 0"},children:"Vous souhaitez rejoindre le clan, signaler une situation d'urgence familiale, proposer un projet ou simplement nous saluer ? Notre porte est toujours ouverte."}),[{icon:(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[(0,r.jsx)("path",{d:"M3 3h12a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z",stroke:"var(--bn-green)",strokeWidth:"1.3"}),(0,r.jsx)("path",{d:"M2 4l7 6 7-6",stroke:"var(--bn-green)",strokeWidth:"1.3",strokeLinecap:"round"})]}),label:"Email",value:"contact@clan-nguyen.ga"},{icon:(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[(0,r.jsx)("path",{d:"M9 2C6.24 2 4 4.24 4 7c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z",stroke:"var(--bn-green)",strokeWidth:"1.3"}),(0,r.jsx)("circle",{cx:"9",cy:"7",r:"2",stroke:"var(--bn-green)",strokeWidth:"1.3"})]}),label:"Siège social",value:"Libreville, Gabon"},{icon:(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[(0,r.jsx)("circle",{cx:"9",cy:"9",r:"7",stroke:"var(--bn-green)",strokeWidth:"1.3"}),(0,r.jsx)("path",{d:"M9 5v4l3 2",stroke:"var(--bn-green)",strokeWidth:"1.3",strokeLinecap:"round"})]}),label:"Disponibilité",value:"Lun – Sam, 8h00 – 18h00"}].map((e,t)=>(0,r.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px",marginBottom:"22px",opacity:+!!z,transform:z?"translateX(0)":"translateX(-30px)",transition:`opacity 0.75s ${.25+.12*t}s ease, transform 0.75s ${.25+.12*t}s cubic-bezier(0.34,1.1,0.64,1)`},children:[(0,r.jsx)("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(var(--bn-green-rgb),0.10)",border:"1px solid rgba(var(--bn-green-rgb),0.28)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.icon}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.65rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(var(--bn-green-rgb),0.80)",marginBottom:"3px"},children:e.label}),(0,r.jsx)("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"1rem",color:"rgba(255,255,255,0.78)"},children:e.value})]})]},t)),(0,r.jsx)("div",{style:{marginTop:"16px",paddingTop:"28px",borderTop:"1px solid rgba(var(--bn-green-rgb),0.18)",fontFamily:"'Playfair Display', serif",fontStyle:"italic",fontSize:"1rem",color:"rgba(255,255,255,0.78)",lineHeight:1.6},children:"« Unité · Amour · Prospérité »"})]}),(0,r.jsx)("div",{ref:j,style:{paddingLeft:"60px",display:"flex",flexDirection:"column",justifyContent:"center",opacity:+!!w,transform:w?"translateX(0)":"translateX(50px)",transition:"opacity 1s 0.15s ease, transform 1s 0.15s cubic-bezier(0.34,1.1,0.64,1)"},children:m?(0,r.jsxs)("div",{className:"success-msg",style:{textAlign:"center",padding:"40px 20px"},children:[(0,r.jsx)("div",{style:{width:"72px",height:"72px",borderRadius:"50%",background:"rgba(200,169,110,0.12)",border:"1.5px solid rgba(200,169,110,0.40)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 24px",overflow:"hidden"},children:(0,r.jsx)(n.default,{src:"/images/logo-BN.png",alt:"Logo BA NGOMBOUNDA",width:72,height:72,style:{width:"100%",height:"100%",objectFit:"cover"}})}),(0,r.jsx)("h3",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.6rem",fontWeight:700,color:"#ffffff",margin:"0 0 14px 0"},children:"Message envoyé !"}),(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.05rem",color:"rgba(255,255,255,0.55)",lineHeight:1.75,margin:"0 0 32px 0"},children:"Merci de nous avoir contactés. Un membre du clan vous répondra dans les meilleurs délais."}),(0,r.jsx)("button",{onClick:()=>{x(!1),g({nom:"",prenom:"",email:"",motif:""})},style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.82rem",letterSpacing:"0.14em",textTransform:"uppercase",color:"#C8A96E",background:"none",border:"none",cursor:"pointer",padding:"8px 0",borderBottom:"1px solid rgba(200,169,110,0.35)"},children:"Envoyer un autre message →"})]}):(0,r.jsxs)("form",{onSubmit:e=>{let r;e.preventDefault();let t=(r={},c.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)||(r.email="Email invalide."):r.email="L'email est requis.",c.motif.trim()||(r.motif="Veuillez décrire votre motif."),r);Object.keys(t).length>0?h(t):(b(!0),setTimeout(()=>{b(!1),x(!0)},1800))},noValidate:!0,children:[(0,r.jsxs)("div",{style:{marginBottom:"40px"},children:[(0,r.jsx)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.68rem",letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(200,169,110,0.55)",display:"block",marginBottom:"10px"},children:"Votre message"}),(0,r.jsx)("h3",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.55rem",fontWeight:700,color:"#ffffff",margin:0,lineHeight:1.2},children:"Écrivez-nous"})]}),(0,r.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",marginBottom:"28px"},children:[(0,r.jsx)(o,{label:"Nom",name:"nom",value:c.nom,onChange:S,optional:!0}),(0,r.jsx)(o,{label:"Prénom",name:"prenom",value:c.prenom,onChange:S,optional:!0})]}),(0,r.jsxs)("div",{className:u.email?"field-error":"",style:{marginBottom:"28px"},children:[(0,r.jsx)(o,{label:"Adresse email",type:"email",name:"email",value:c.email,onChange:S,required:!0}),u.email&&(0,r.jsxs)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.78rem",color:"#D4856A",margin:"6px 0 0",letterSpacing:"0.04em"},children:["⚠ ",u.email]})]}),(0,r.jsxs)("div",{className:u.motif?"field-error":"",style:{marginBottom:"36px"},children:[(0,r.jsx)(o,{label:"Motif de votre message",type:"textarea",name:"motif",value:c.motif,onChange:S,required:!0,rows:5}),u.motif&&(0,r.jsxs)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.78rem",color:"#D4856A",margin:"6px 0 0",letterSpacing:"0.04em"},children:["⚠ ",u.motif]}),(0,r.jsxs)("div",{style:{textAlign:"right",marginTop:"6px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.70rem",color:"rgba(255,255,255,0.22)",letterSpacing:"0.08em"},children:[c.motif.length," caractères"]})]}),(0,r.jsx)("button",{type:"submit",className:`submit-btn ${f?"sending":""}`,disabled:f,children:f?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:"Envoi en cours"}),(0,r.jsx)("div",{className:"spinner"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:"Envoyer le message"}),(0,r.jsx)("span",{style:{position:"relative",zIndex:1,fontSize:"1.1rem"},children:"✦"})]})}),(0,r.jsx)("p",{style:{marginTop:"16px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.72rem",color:"rgba(255,255,255,0.22)",textAlign:"center",letterSpacing:"0.06em",lineHeight:1.6},children:"Vos informations sont confidentielles et ne seront jamais partagées en dehors du clan."})]})})]})]})]})}e.s(["default",()=>l])},72820,e=>{"use strict";var r=e.i(43476),t=e.i(71645),n=e.i(22016),i=e.i(57688);let a=[{titre:"Navigation",liens:[{label:"Accueil",href:"/"},{label:"Nos Racines",href:"/notre-histoire"},{label:"La Vie du Clan",href:"/nos-evenements"},{label:"Nos Mémoires",href:"/nos-albums"},{label:"Notre Âme",href:"/notre-vocation"},{label:"Le Clan",href:"/nos-membres"},{label:"Nous Joindre",href:"/nous-contacter"}]},{titre:"Le Clan",liens:[{label:"Notre Histoire",href:"/notre-histoire"},{label:"Notre Vocation",href:"/notre-vocation"},{label:"Nos Valeurs",href:"/nos-valeurs"},{label:"Nos Projets",href:"/nos-projets"},{label:"Aide aux Membres",href:"/solidarite"}]},{titre:"Ressources",liens:[{label:"Rejoindre le clan",href:"/rejoindre"},{label:"Déposer un projet",href:"/projets/nouveau"},{label:"Demander une aide",href:"/solidarite/demande"},{label:"Espace membres",href:"/espace-membres"},{label:"Nous contacter",href:"/nous-contacter"}]}],o=[{label:"Facebook",href:"#",icon:(0,r.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})},{label:"WhatsApp",href:"#",icon:(0,r.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})})},{label:"YouTube",href:"#",icon:(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"}),(0,r.jsx)("polygon",{points:"9.75 15.02 15.5 12 9.75 8.98 9.75 15.02",stroke:"currentColor",fill:"none"})]})},{label:"Instagram",href:"#",icon:(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),(0,r.jsx)("circle",{cx:"12",cy:"12",r:"4.5"}),(0,r.jsx)("circle",{cx:"17.5",cy:"6.5",r:"0.8",fill:"currentColor",stroke:"none"})]})}],s=["Unité","Amour","Prospérité"],l=["var(--bn-green)","var(--bn-white)","var(--bn-green)"];function d(e=.1){let r=(0,t.useRef)(null),[n,i]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let t=r.current;if(!t)return;let n=new IntersectionObserver(([e])=>{e.isIntersecting&&(i(!0),n.disconnect())},{threshold:e});return n.observe(t),()=>n.disconnect()},[e]),[r,n]}function p({href:e,label:i,delay:a=0,inView:o}){let[s,l]=(0,t.useState)(!1);return(0,r.jsx)("li",{style:{opacity:+!!o,transform:o?"translateX(0)":"translateX(-12px)",transition:`opacity 0.55s ${a}s ease, transform 0.55s ${a}s cubic-bezier(0.34,1.1,0.64,1)`},children:(0,r.jsxs)(n.default,{href:e,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),style:{display:"inline-flex",alignItems:"center",gap:"8px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.97rem",color:s?"var(--bn-white)":"rgba(255,255,255,0.78)",textDecoration:"none",transition:"color 0.28s ease",padding:"3px 0",letterSpacing:"0.02em"},children:[(0,r.jsx)("span",{style:{width:s?"16px":"0px",height:"1px",background:"var(--bn-green)",display:"inline-block",transition:"width 0.35s cubic-bezier(0.4,0,0.2,1)",flexShrink:0}}),i]})})}function c({item:e,delay:n,inView:i}){let[a,o]=(0,t.useState)(!1);return(0,r.jsx)("a",{href:e.href,"aria-label":e.label,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{width:"42px",height:"42px",borderRadius:"10px",border:`1px solid ${a?"rgba(var(--bn-green-rgb),0.65)":"rgba(var(--bn-green-rgb),0.24)"}`,background:a?"rgba(var(--bn-green-rgb),0.14)":"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"center",color:a?"var(--bn-white)":"rgba(255,255,255,0.70)",textDecoration:"none",transform:i?a?"translateY(-4px) scale(1.10)":"translateY(0) scale(1)":"translateY(12px) scale(0.9)",opacity:+!!i,transition:`
          color 0.28s ease,
          border-color 0.28s ease,
          background 0.28s ease,
          transform 0.38s ${n}s cubic-bezier(0.34,1.56,0.64,1),
          opacity 0.5s ${n}s ease
        `,boxShadow:a?"0 8px 24px rgba(0,0,0,0.35)":"none"},children:e.icon})}function g(){let[e,g]=d(.1),[m,x]=d(.1),[f,b]=d(.1),u=(0,t.useRef)(null),h=(0,t.useRef)(null),y=new Date().getFullYear();return(0,t.useEffect)(()=>{let e=u.current,r=h.current;if(!e||!r)return;let t=null,n=()=>{let t=e.getBoundingClientRect(),n=r.getBoundingClientRect(),i=Math.max(0,t.width-n.width),a=Math.max(0,t.height-n.height),o=Math.round(Math.random()*i),s=Math.round(Math.random()*a);r.style.transform=`translate3d(${o}px, ${s}px, 0)`},i=()=>{n(),t=setTimeout(i,5500+3500*Math.random())},a=requestAnimationFrame(()=>{n(),i()}),o=()=>n();return window.addEventListener("resize",o,{passive:!0}),()=>{cancelAnimationFrame(a),window.removeEventListener("resize",o),t&&clearTimeout(t)}},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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

        /* Halo sup\xe9rieur */
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

        /* S\xe9parateur haut */
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
      `}),(0,r.jsxs)("footer",{ref:u,className:"footer-root",children:[(0,r.jsx)("div",{className:"footer-float-logo","aria-hidden":"true",children:(0,r.jsx)("div",{ref:h,children:(0,r.jsx)(i.default,{src:"/images/logo-BN-removebg.png",alt:"",fill:!0,priority:!1,sizes:"(max-width: 700px) 220px, 300px",style:{objectFit:"contain"}})})}),(0,r.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,r.jsx)("div",{className:"footer-sep"}),(0,r.jsx)("div",{className:"footer-top",children:(0,r.jsxs)("div",{ref:e,className:"footer-top-inner",children:[(0,r.jsxs)("div",{style:{opacity:+!!g,transform:g?"translateY(0)":"translateY(20px)",transition:"opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"18px"},children:[(0,r.jsx)("div",{style:{width:"48px",height:"48px",borderRadius:"50%",border:"1.5px solid rgba(200,169,110,0.45)",display:"flex",alignItems:"center",justifyContent:"center",background:"radial-gradient(circle at 35% 35%, rgba(200,169,110,0.12), rgba(0,0,0,0.4))",flexShrink:0,overflow:"hidden"},children:(0,r.jsx)(i.default,{src:"/images/logo-BN.png",alt:"Logo BA NGOMBOUNDA",width:48,height:48,style:{width:"100%",height:"100%",objectFit:"cover"}})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.3rem",fontWeight:700,background:"linear-gradient(135deg, #E8C97E 30%, #fff 70%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",lineHeight:1,letterSpacing:"0.02em"},children:"BA NGOMBOUNDA"}),(0,r.jsx)("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.60rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(200,169,110,0.55)",marginTop:"3px"},children:"Clan & Tradition"})]})]}),(0,r.jsx)("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:s.map((e,t)=>(0,r.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"10px"},children:[(0,r.jsx)("span",{style:{fontFamily:"'Playfair Display', serif",fontStyle:"italic",fontSize:"1.05rem",color:l[t],opacity:.85},children:e}),t<s.length-1&&(0,r.jsx)("span",{style:{width:"4px",height:"4px",borderRadius:"50%",background:"rgba(200,169,110,0.35)",display:"inline-block"}})]},e))})]}),(0,r.jsx)("div",{style:{width:"1px",alignSelf:"stretch",background:"linear-gradient(to bottom, transparent, rgba(200,169,110,0.20), transparent)",flexShrink:0,display:"none"},className:"vert-sep"}),(0,r.jsxs)("div",{style:{flex:1,minWidth:"280px",maxWidth:"420px",opacity:+!!g,transform:g?"translateX(0)":"translateX(30px)",transition:"opacity 0.8s 0.2s ease, transform 0.8s 0.2s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.72rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"#C8A96E",margin:"0 0 8px 0"},children:"Restez informés"}),(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.02rem",color:"rgba(255,255,255,0.50)",margin:"0 0 16px 0",lineHeight:1.6},children:"Recevez les actualités du clan directement dans votre boîte mail."}),(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("input",{type:"email",placeholder:"votre@email.com",className:"nl-input"}),(0,r.jsx)("button",{className:"nl-btn",children:"S'abonner"})]})]})]})}),(0,r.jsx)("div",{style:{margin:"0 40px"},children:(0,r.jsx)("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:(0,r.jsx)("div",{className:"footer-sep"})})}),(0,r.jsx)("div",{className:"footer-cols",style:{paddingTop:"48px"},children:(0,r.jsxs)("div",{ref:m,className:"footer-cols-inner",children:[(0,r.jsxs)("div",{style:{opacity:+!!x,transform:x?"translateY(0)":"translateY(24px)",transition:"opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.02rem",lineHeight:1.85,color:"rgba(255,255,255,0.42)",margin:"0 0 28px 0",maxWidth:"320px"},children:"Une communauté familiale unie par les valeurs de l'Afrique, dédiée à préserver nos traditions et bâtir un avenir prospère pour nos enfants et petits-enfants."}),(0,r.jsxs)("div",{style:{marginBottom:"28px"},children:[(0,r.jsx)("p",{className:"col-title",style:{marginBottom:"14px"},children:"Nous suivre"}),(0,r.jsx)("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:o.map((e,t)=>(0,r.jsx)(c,{item:e,delay:.1+.07*t,inView:x},e.label))})]}),(0,r.jsxs)("a",{href:"mailto:contact@clan-nguyen.ga",style:{display:"inline-flex",alignItems:"center",gap:"8px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.88rem",color:"rgba(200,169,110,0.65)",textDecoration:"none",transition:"color 0.25s ease"},onMouseEnter:e=>e.currentTarget.style.color="#E8C97E",onMouseLeave:e=>e.currentTarget.style.color="rgba(200,169,110,0.65)",children:[(0,r.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 18 18",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[(0,r.jsx)("path",{d:"M3 3h12a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z"}),(0,r.jsx)("path",{d:"M2 4l7 6 7-6",strokeLinecap:"round"})]}),"contact@clan-nguyen.ga"]})]}),a.map((e,t)=>(0,r.jsxs)("div",{style:{opacity:+!!x,transform:x?"translateY(0)":"translateY(24px)",transition:`opacity 0.8s ${.12+.1*t}s ease, transform 0.8s ${.12+.1*t}s cubic-bezier(0.34,1.1,0.64,1)`},children:[(0,r.jsx)("p",{className:"col-title",children:e.titre}),(0,r.jsx)("ul",{style:{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:"2px"},children:e.liens.map((e,n)=>(0,r.jsx)(p,{href:e.href,label:e.label,delay:.15+.08*t+.04*n,inView:x},e.href+e.label))})]},e.titre))]})}),(0,r.jsx)("div",{style:{margin:"0 40px"},children:(0,r.jsx)("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:(0,r.jsx)("div",{className:"footer-sep"})})}),(0,r.jsx)("div",{className:"footer-bottom",children:(0,r.jsxs)("div",{className:"footer-bottom-inner",children:[(0,r.jsxs)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.35)",margin:0,opacity:+!!b,transition:"opacity 0.8s ease"},children:["© ",y," BA NGOMBOUNDA — Clan & Tradition. Tous droits réservés."]}),(0,r.jsxs)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.80rem",fontWeight:600,color:"rgba(255,255,255,0.52)",margin:0,opacity:+!!b,transition:"opacity 0.8s 0.05s ease",whiteSpace:"nowrap"},children:["Developped by"," ",(0,r.jsx)("a",{href:"https://ioi-gab-alpha.vercel.app/",target:"_blank",rel:"noreferrer",style:{color:"var(--bn-white)",textDecoration:"none",borderBottom:"1px solid rgba(255,255,255,0.28)",paddingBottom:"1px"},children:"IOI"})," ","— Innovation Ouverture Intelligence"]}),(0,r.jsx)("div",{style:{display:"flex",alignItems:"center",fontFamily:"'Cormorant Garamond', serif",gap:"20px",flexWrap:"wrap",justifyContent:"center",opacity:+!!b,transition:"opacity 0.8s 0.15s ease"},children:["Mentions légales","Confidentialité","Accessibilité"].map((e,t)=>(0,r.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"20px"},children:[(0,r.jsx)(n.default,{href:"#",style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.28)",textDecoration:"none",transition:"color 0.25s ease",letterSpacing:"0.04em",whiteSpace:"nowrap"},onMouseEnter:e=>e.currentTarget.style.color="rgba(200,169,110,0.70)",onMouseLeave:e=>e.currentTarget.style.color="rgba(255,255,255,0.28)",children:e}),t<2&&(0,r.jsx)("span",{style:{width:"3px",height:"3px",borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"inline-block"}})]},e))}),(0,r.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontSize:"0.78rem",color:"rgba(200,169,110,0.35)",margin:0,whiteSpace:"nowrap",opacity:+!!b,transition:"opacity 0.8s 0.25s ease"},children:"Fait avec ❤️ pour le clan"})]})})]})]})]})}e.s(["default",()=>g])}]);