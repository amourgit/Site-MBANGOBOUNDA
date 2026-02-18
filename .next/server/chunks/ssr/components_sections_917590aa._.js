module.exports=[80448,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246),e=a.i(50944),f=a.i(71987);let g=[{href:"/",label:"Accueil",icon:"🏠"},{href:"/notre-histoire",label:"Nos Racines",icon:"🌳"},{href:"/nos-evenements",label:"La Vie du Clan",icon:"🥁"},{href:"/nos-albums",label:"Nos Mémoires",icon:"📸"},{href:"/notre-vocation",label:"Notre Âme",icon:"🌍"},{href:"/nous-contacter",label:"Nous Joindre",icon:"✉️"}];function h(){let[a,h]=(0,c.useState)(!1),[i,j]=(0,c.useState)(!1),[k,l]=(0,c.useState)(!1),m=(0,e.usePathname)();return(0,c.useEffect)(()=>{let a=()=>l(window.innerWidth>=900);return a(),window.addEventListener("resize",a,{passive:!0}),()=>window.removeEventListener("resize",a)},[]),(0,c.useEffect)(()=>{let a=()=>h(window.scrollY>60);return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),(0,c.useEffect)(()=>{j(!1)},[m]),(0,c.useEffect)(()=>(document.body.style.overflow=!k&&i?"hidden":"",()=>{document.body.style.overflow=""}),[i,k]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsx)("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:50,display:"flex",justifyContent:"center",paddingTop:"16px",paddingLeft:"20px",paddingRight:"20px",pointerEvents:"none",fontFamily:"'Lato', sans-serif"},children:(0,b.jsxs)("nav",{className:`nav-pill w-full ${a?"nav-frosted":"nav-transparent"}`,style:{maxWidth:"1160px",pointerEvents:"auto"},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 20px"},children:[(0,b.jsxs)(d.default,{href:"/",className:"logo-anim",children:[(0,b.jsx)("div",{className:"logo-emblem",children:(0,b.jsx)(f.default,{src:"/images/logo-BN.png",alt:"Logo BA NGOMBOUNDA",width:42,height:42,style:{width:"100%",height:"100%",objectFit:"cover"}})}),(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,b.jsx)("span",{className:"logo-name",children:"BA NGOMBOUNDA"}),(0,b.jsx)("span",{className:"logo-sub",children:"Clan & Tradition"})]})]}),k&&(0,b.jsx)("ul",{style:{display:"flex",alignItems:"center",gap:"2px",listStyle:"none",margin:"0",padding:"0",flex:1,justifyContent:"center"},children:g.map((a,c)=>(0,b.jsx)("li",{className:"nav-link-item",style:{animationDelay:`${.08+.06*c}s`},children:(0,b.jsxs)(d.default,{href:a.href,className:`nav-link-inner ${m===a.href?"is-active":""}`,children:[a.label,(0,b.jsx)("span",{className:"nav-dot"}),(0,b.jsx)("span",{className:"link-bar"})]})},a.href))}),(0,b.jsx)("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexShrink:0},children:k?(0,b.jsx)(d.default,{href:"/nous-contacter",className:"cta-btn",children:(0,b.jsx)("span",{children:"Rejoindre"})}):(0,b.jsxs)("button",{className:"ham-btn",onClick:()=>j(!i),"aria-label":i?"Fermer le menu":"Ouvrir le menu","aria-expanded":i,children:[(0,b.jsx)("span",{className:"ham-line",style:{width:"24px",transform:i?"translateY(6.5px) rotate(45deg)":"none"}}),(0,b.jsx)("span",{className:"ham-line",style:{width:"17px",opacity:+!i}}),(0,b.jsx)("span",{className:"ham-line",style:{width:"24px",transform:i?"translateY(-6.5px) rotate(-45deg)":"none"}})]})})]}),!k&&i&&(0,b.jsx)("div",{className:"mobile-menu-inner",children:(0,b.jsxs)("ul",{style:{listStyle:"none",margin:0,padding:0},children:[g.map(a=>(0,b.jsx)("li",{children:(0,b.jsxs)(d.default,{href:a.href,className:`mob-link ${m===a.href?"is-active":""}`,children:[(0,b.jsx)("span",{style:{fontSize:"1.1rem"},children:a.icon}),a.label]})},a.href)),(0,b.jsx)("li",{children:(0,b.jsx)("div",{className:"mob-divider"})}),(0,b.jsx)("li",{children:(0,b.jsx)(d.default,{href:"/nous-contacter",className:"cta-btn",style:{width:"100%"},children:(0,b.jsx)("span",{children:"✨ Rejoindre le Clan"})})})]})})]})})]})}a.s(["default",()=>h])},21717,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246);let e=[{type:"image",src:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1800&q=90",tag:"Notre Clan",title:"Ensemble,\nnous sommes\nplus forts",description:"Depuis des générations, notre famille porte les valeurs de l'unité, du partage et de la dignité. Chaque membre est un maillon précieux de cette chaîne sacrée."},{type:"image",src:"https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1800&q=90",tag:"Les Anciens",title:"La sagesse\nde nos racines",description:"Nos aînés sont les gardiens de la mémoire. Leur sagesse guide nos pas et éclaire notre chemin vers l'avenir. Nous les honorons à chaque instant."},{type:"video",src:"https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4",tag:"La Vie du Clan",title:"Célébrons\nla vie ensemble",description:"Mariages, baptêmes, fêtes traditionnelles… chaque rassemblement est une occasion de renforcer nos liens et de perpétuer nos us et coutumes ancestraux."},{type:"image",src:"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1800&q=90",tag:"Notre Mission",title:"Prendre soin\ndes nôtres",description:"Veuves, personnes âgées, enfants vulnérables — personne n'est laissé pour compte. La solidarité familiale est notre engagement le plus profond."}];function f(){let[a,f]=(0,c.useState)(0),[g,h]=(0,c.useState)(null),[i,j]=(0,c.useState)(1),[k,l]=(0,c.useState)(!0),[m,n]=(0,c.useState)(0),o=(0,c.useRef)(null),p=(0,c.useRef)(null),q=(0,c.useRef)(0),r=(0,c.useRef)([]),s=(0,c.useCallback)((b,c=1)=>{b!==a&&(l(!1),h(a),j(c),n(0),setTimeout(()=>{f(b),setTimeout(()=>l(!0),120)},60))},[a]),t=(0,c.useCallback)(()=>s((a+1)%e.length,1),[a,s]),u=(0,c.useCallback)(()=>s((a-1+e.length)%e.length,-1),[a,s]);(0,c.useEffect)(()=>{n(0),q.current=performance.now();let a=b=>{let c=b-q.current;n(Math.min(c/6e3*100,100)),c<6e3&&(p.current=requestAnimationFrame(a))};return p.current=requestAnimationFrame(a),o.current=setTimeout(t,6e3),()=>{o.current&&clearTimeout(o.current),p.current&&cancelAnimationFrame(p.current)}},[a,t]),(0,c.useEffect)(()=>{r.current.forEach((b,c)=>{b&&(c===a?(b.currentTime=0,b.play().catch(()=>{})):b.pause())})},[a]);let v=e[a];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsxs)("section",{className:"hero-root",children:[e.map((c,d)=>{let e=d===a,f=d===g,h=e?i>0?"slide-enter-right":"slide-enter-left":f?"slide-exit":"";return"video"===c.type?(0,b.jsx)("video",{ref:a=>{r.current[d]=a},className:`slide-media ${h}`,src:c.src,muted:!0,loop:!0,playsInline:!0,style:{zIndex:e?1:f?0:-1,display:e||f?"block":"none"}},d):(0,b.jsx)("img",{className:`slide-media ${h}`,src:c.src,alt:c.title,style:{zIndex:e?1:f?0:-1,display:e||f?"block":"none"}},d)}),(0,b.jsx)("div",{className:"hero-overlay"}),(0,b.jsx)("div",{className:"text-panel",children:(0,b.jsxs)("div",{className:"text-inner",children:[(0,b.jsx)("span",{className:`text-tag ${k?"ready":""}`,children:v.tag},`tag-${a}`),(0,b.jsx)("h1",{className:`text-title ${k?"ready":""}`,children:v.title},`title-${a}`),(0,b.jsx)("div",{className:`text-divider ${k?"ready":""}`},`div-${a}`),(0,b.jsx)("p",{className:`text-desc ${k?"ready":""}`,children:v.description},`desc-${a}`),(0,b.jsxs)(d.default,{href:"/nos-evenements",className:`hero-cta ${k?"ready":""}`,children:[(0,b.jsx)("span",{children:"Tout savoir"}),(0,b.jsx)("span",{className:"cta-arrow",children:"→"})]},`cta-${a}`)]})}),(0,b.jsx)("button",{className:"nav-arrow left",onClick:u,"aria-label":"Slide précédent",children:"←"}),(0,b.jsx)("button",{className:"nav-arrow right",onClick:t,"aria-label":"Slide suivant",children:"→"}),(0,b.jsx)("div",{className:"dots-bar",children:e.map((c,d)=>(0,b.jsx)("div",{className:`dot-wrap ${d===a?"active":""}`,onClick:()=>s(d,d>a?1:-1),children:(0,b.jsx)("div",{className:"dot-fill",style:{width:d===a?`${m}%`:d<a?"100%":"0%"}})},d))}),(0,b.jsxs)("div",{className:"slide-counter",children:[(0,b.jsxs)("strong",{children:["0",a+1]})," / 0",e.length]}),(0,b.jsxs)("div",{className:"scroll-hint",children:[(0,b.jsx)("span",{children:"Défiler"}),(0,b.jsxs)("svg",{width:"14",height:"20",viewBox:"0 0 14 20",fill:"none",children:[(0,b.jsx)("rect",{x:"1",y:"1",width:"12",height:"18",rx:"6",stroke:"currentColor",strokeWidth:"1.2"}),(0,b.jsx)("circle",{cx:"7",cy:"6",r:"2",fill:"currentColor",opacity:"0.7"})]})]})]})]})}a.s(["default",()=>f])},55355,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246);let e=[{debut:"1920",fin:"1955",image:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=85",titre:"Les Temps des Fondateurs",description:"Au cœur de la savane, nos ancêtres posèrent les premières pierres de ce qui allait devenir notre grande famille. Portés par la foi et la terre, ils bâtirent des alliances solides, transmirent des rites sacrés et gravèrent dans la mémoire collective les valeurs qui nous animent encore aujourd'hui."},{debut:"1956",fin:"1985",image:"https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=900&q=85",titre:"L'Ère de l'Expansion",description:"Les enfants des fondateurs s'élancèrent vers de nouveaux horizons — les villes, les études, les opportunités — sans jamais couper le cordon avec la terre nourricière. Le clan s'agrandit, les unions se tissèrent entre familles alliées, et notre identité prit une nouvelle dimension, plus riche, plus diverse."},{debut:"1986",fin:"Aujourd'hui",image:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=85",titre:"La Génération du Renouveau",description:"Forts de notre héritage, nous entrons dans une ère nouvelle. Les jeunes du clan reprennent le flambeau avec fierté : préserver nos traditions tout en embrassant le monde moderne. Solidaires et connectés, nous bâtissons ensemble l'avenir de notre famille pour les générations à venir."}];function f(a=.25){let b=(0,c.useRef)(null),[d,e]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let c=b.current;if(!c)return;let d=new IntersectionObserver(([a])=>{a.isIntersecting&&(e(!0),d.disconnect())},{threshold:a});return d.observe(c),()=>d.disconnect()},[a]),[b,d]}function g({periode:a,index:d}){let e=d%2==0,[g,j]=f(.2),[k,l]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{let a=()=>l(window.innerWidth<=700);return a(),window.addEventListener("resize",a,{passive:!0}),()=>window.removeEventListener("resize",a)},[]),k)?(0,b.jsx)("div",{ref:g,style:{display:"flex",flexDirection:"column",alignItems:"stretch",gap:"14px",position:"relative",paddingLeft:"0",paddingRight:"0",opacity:+!!j,transform:j?"translateY(0)":"translateY(28px)",transition:"opacity 0.85s 0.1s cubic-bezier(0.4,0,0.2,1), transform 0.85s 0.1s cubic-bezier(0.34,1.1,0.64,1)"},children:(0,b.jsx)(i,{periode:a,align:"left",inView:j,delay:.1})}):(0,b.jsxs)("div",{ref:g,style:{display:"grid",gridTemplateColumns:"1fr 80px 1fr",alignItems:"center",minHeight:"420px",position:"relative",marginBottom:"0"},children:[(0,b.jsx)("div",{style:{gridColumn:"1",display:"flex",justifyContent:"flex-end",paddingRight:"52px",opacity:+!!j,transform:j?"translateX(0)":e?"translateX(-60px)":"translateX(60px)",transition:"opacity 0.85s 0.1s cubic-bezier(0.4,0,0.2,1), transform 0.85s 0.1s cubic-bezier(0.34,1.1,0.64,1)"},children:e?(0,b.jsx)(i,{periode:a,align:"right",inView:j,delay:.1}):(0,b.jsx)(h,{periode:a,align:"right"})}),(0,b.jsx)("div",{style:{gridColumn:"2",display:"flex",flexDirection:"column",alignItems:"center",position:"relative",zIndex:2},children:(0,b.jsx)("div",{style:{width:"18px",height:"18px",borderRadius:"50%",background:j?"linear-gradient(135deg, var(--bn-green), var(--bn-white))":"rgba(var(--bn-green-rgb),0.30)",border:"3px solid #1a0f05",boxShadow:j?"0 0 0 5px rgba(var(--bn-green-rgb),0.20), 0 0 24px rgba(var(--bn-green-rgb),0.35)":"none",transition:`all 0.6s ${.1+.2}s ease`,flexShrink:0}})}),(0,b.jsx)("div",{style:{gridColumn:"3",display:"flex",justifyContent:"flex-start",paddingLeft:"52px",opacity:+!!j,transform:j?"translateX(0)":e?"translateX(60px)":"translateX(-60px)",transition:"opacity 0.85s 0.2s cubic-bezier(0.4,0,0.2,1), transform 0.85s 0.2s cubic-bezier(0.34,1.1,0.64,1)"},children:e?(0,b.jsx)(h,{periode:a,align:"left"}):(0,b.jsx)(i,{periode:a,align:"left",inView:j,delay:.1})})]})}function h({periode:a,align:c}){return(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"right"===c?"flex-end":"flex-start",gap:"4px"},children:[(0,b.jsx)("span",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(2.2rem, 4vw, 3.5rem)",fontWeight:900,lineHeight:1,background:"linear-gradient(135deg, var(--bn-green) 30%, var(--bn-white) 70%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"-0.02em"},children:a.debut}),(0,b.jsxs)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.75rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(255,255,255,0.78)"},children:["— ",a.fin]})]})}function i({periode:a,align:d,inView:e,delay:f}){let[g,h]=(0,c.useState)(!1);return(0,b.jsxs)("div",{onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),style:{width:"100%",maxWidth:"460px",borderRadius:"16px",overflow:"hidden",position:"relative",boxShadow:g?"0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(var(--bn-green-rgb),0.30)":"0 16px 48px rgba(0,0,0,0.40), 0 0 0 1px rgba(var(--bn-green-rgb),0.12)",transform:g?"translateY(-6px) scale(1.012)":"translateY(0) scale(1)",transition:"box-shadow 0.45s ease, transform 0.45s cubic-bezier(0.34,1.1,0.64,1)",cursor:"default"},children:[(0,b.jsxs)("div",{style:{position:"relative",height:"240px",overflow:"hidden"},children:[(0,b.jsx)("img",{src:a.image,alt:a.titre,style:{width:"100%",height:"100%",objectFit:"cover",transform:g?"scale(1.07)":"scale(1.0)",transition:"transform 0.8s cubic-bezier(0.4,0,0.2,1)",display:"block"}}),(0,b.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(5,2,1,0.70) 100%)"}}),(0,b.jsxs)("div",{style:{position:"absolute",top:"16px",..."right"===d?{right:"16px"}:{left:"16px"},background:"rgba(10,5,2,0.65)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"1px solid rgba(var(--bn-green-rgb),0.30)",borderRadius:"8px",padding:"6px 14px",display:"flex",alignItems:"baseline",gap:"6px"},children:[(0,b.jsx)("span",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.1rem",fontWeight:700,color:"var(--bn-green)"},children:a.debut}),(0,b.jsxs)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.72rem",color:"rgba(255,255,255,0.78)",letterSpacing:"0.12em"},children:["— ",a.fin]})]})]}),(0,b.jsxs)("div",{style:{background:"linear-gradient(135deg, #0f0804 0%, #1a0f05 100%)",padding:"24px 28px 28px",borderTop:"1px solid rgba(var(--bn-green-rgb),0.18)"},children:[(0,b.jsx)("div",{style:{width:"32px",height:"2px",background:"linear-gradient(90deg, var(--bn-green), transparent)",borderRadius:"2px",marginBottom:"12px",transform:g?"scaleX(1.6)":"scaleX(1)",transformOrigin:"left",transition:"transform 0.4s ease"}}),(0,b.jsx)("h3",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.22rem",fontWeight:700,color:"#ffffff",margin:"0 0 12px 0",lineHeight:1.25},children:a.titre}),(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.02rem",lineHeight:1.75,color:"rgba(255,255,255,0.70)",margin:0},children:a.description})]})]})}function j(){let[a,c]=f(.3);return(0,b.jsxs)("div",{ref:a,style:{textAlign:"center",marginBottom:"80px",opacity:+!!c,transform:c?"translateY(0)":"translateY(40px)",transition:"opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,b.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"12px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.72rem",fontWeight:600,letterSpacing:"0.30em",textTransform:"uppercase",color:"var(--bn-green)",marginBottom:"20px"},children:[(0,b.jsx)("span",{style:{display:"block",width:"36px",height:"1px",background:"var(--bn-green)"}}),"Notre Histoire",(0,b.jsx)("span",{style:{display:"block",width:"36px",height:"1px",background:"var(--bn-green)"}})]}),(0,b.jsxs)("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(2.2rem, 5vw, 3.8rem)",fontWeight:900,lineHeight:1.08,color:"#ffffff",margin:"0 0 24px 0",textShadow:"0 4px 32px rgba(0,0,0,0.5)"},children:["Des racines profondes,",(0,b.jsx)("br",{}),(0,b.jsx)("em",{style:{color:"var(--bn-green)",fontStyle:"italic"},children:"un avenir lumineux"})]}),(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(1rem, 1.5vw, 1.18rem)",color:"rgba(255,255,255,0.78)",maxWidth:"540px",margin:"0 auto",lineHeight:1.75},children:"Chaque génération a posé une pierre. Voici l'histoire de ceux qui nous ont précédés et de ceux qui, aujourd'hui, portent fièrement leur héritage."})]})}function k(){let[a,e]=f(.3),[g,h]=(0,c.useState)(!1);return(0,b.jsx)("div",{ref:a,style:{display:"flex",justifyContent:"center",marginTop:"80px",opacity:+!!e,transform:e?"translateY(0)":"translateY(30px)",transition:"opacity 0.8s 0.2s ease, transform 0.8s 0.2s cubic-bezier(0.34,1.1,0.64,1)"},children:(0,b.jsxs)(d.default,{href:"/notre-histoire",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),style:{position:"relative",overflow:"hidden",display:"inline-flex",alignItems:"center",gap:"14px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.92rem",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",padding:"16px 40px",borderRadius:"6px",border:"1.5px solid rgba(var(--bn-green-rgb),0.70)",color:g?"#0B0F0C":"rgba(255,255,255,0.95)",background:"transparent",textDecoration:"none",cursor:"pointer",transition:"color 0.35s ease"},children:[(0,b.jsx)("span",{style:{position:"absolute",inset:0,background:"var(--bn-green)",transform:g?"scaleX(1)":"scaleX(0)",transformOrigin:"left",transition:"transform 0.42s cubic-bezier(0.4,0,0.2,1)",borderRadius:"4px"}}),(0,b.jsx)("span",{style:{position:"relative",zIndex:1},children:"Lire notre histoire complète"}),(0,b.jsx)("span",{style:{position:"relative",zIndex:1,display:"inline-block",transform:g?"translateX(6px)":"translateX(0)",transition:"transform 0.35s cubic-bezier(0.34,1.56,0.64,1)"},children:"→"})]})})}function l(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsx)("section",{className:"histoire-root",children:(0,b.jsxs)("div",{className:"histoire-inner",children:[(0,b.jsx)(j,{}),(0,b.jsxs)("div",{style:{position:"relative"},children:[(0,b.jsx)("div",{className:"timeline-line"}),(0,b.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"0"},children:e.map((a,c)=>(0,b.jsx)(g,{periode:a,index:c},c))})]}),(0,b.jsx)(k,{})]})})]})}a.s(["default",()=>l])},49426,a=>{"use strict";var b=a.i(87924),c=a.i(72131);let d=[{id:"unite",mot:"Unité",chiffre:"01",symbole:"⬡",couleur:"var(--bn-green)",couleurSombre:"rgba(var(--bn-green-rgb),0.08)",icon:(0,b.jsxs)("svg",{width:"52",height:"52",viewBox:"0 0 52 52",fill:"none",children:[(0,b.jsx)("circle",{cx:"26",cy:"18",r:"7",stroke:"var(--bn-green)",strokeWidth:"1.5"}),(0,b.jsx)("circle",{cx:"14",cy:"36",r:"7",stroke:"var(--bn-green)",strokeWidth:"1.5"}),(0,b.jsx)("circle",{cx:"38",cy:"36",r:"7",stroke:"var(--bn-green)",strokeWidth:"1.5"}),(0,b.jsx)("line",{x1:"26",y1:"25",x2:"20",y2:"30",stroke:"var(--bn-green)",strokeWidth:"1.2",strokeLinecap:"round"}),(0,b.jsx)("line",{x1:"26",y1:"25",x2:"32",y2:"30",stroke:"var(--bn-green)",strokeWidth:"1.2",strokeLinecap:"round"}),(0,b.jsx)("line",{x1:"14",y1:"29",x2:"38",y2:"29",stroke:"var(--bn-green)",strokeWidth:"1.2",strokeLinecap:"round",strokeDasharray:"2 3"})]}),titre:"Ensemble, nous sommes invincibles",description:"Notre force réside dans notre cohésion. Quand l'un tombe, les autres le relèvent. Quand l'un triomphe, tous célèbrent. L'unité n'est pas un mot, c'est notre mode de vie, transmis de génération en génération comme le bien le plus précieux.",citation:"« Seul on va plus vite, ensemble on va plus loin. »"},{id:"amour",mot:"Amour",chiffre:"02",symbole:"◇",couleur:"var(--bn-white)",couleurSombre:"rgba(255,255,255,0.06)",icon:(0,b.jsxs)("svg",{width:"52",height:"52",viewBox:"0 0 52 52",fill:"none",children:[(0,b.jsx)("path",{d:"M26 42 C26 42 8 30 8 19 C8 13.5 12.5 9 18 9 C21.5 9 24.5 10.8 26 13.5 C27.5 10.8 30.5 9 34 9 C39.5 9 44 13.5 44 19 C44 30 26 42 26 42Z",stroke:"var(--bn-white)",strokeWidth:"1.5",fill:"none"}),(0,b.jsx)("path",{d:"M20 22 C20 19.5 21.8 18 24 18",stroke:"var(--bn-white)",strokeWidth:"1.2",strokeLinecap:"round",opacity:"0.7"})]}),titre:"L'amour comme fondement",description:"Chaque décision, chaque geste, chaque sacrifice au sein de notre famille est guidé par l'amour. Amour des enfants, respect des aînés, tendresse entre époux, sollicitude pour les vulnérables — c'est le ciment invisible qui tient notre édifice debout.",citation:"« L'amour en famille est la première école de l'humanité. »"},{id:"prosperite",mot:"Prospérité",chiffre:"03",symbole:"✦",couleur:"var(--bn-green)",couleurSombre:"rgba(var(--bn-green-rgb),0.08)",icon:(0,b.jsxs)("svg",{width:"52",height:"52",viewBox:"0 0 52 52",fill:"none",children:[(0,b.jsx)("path",{d:"M26 8 L26 44",stroke:"var(--bn-green)",strokeWidth:"1.5",strokeLinecap:"round"}),(0,b.jsx)("path",{d:"M18 16 L26 8 L34 16",stroke:"var(--bn-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,b.jsx)("path",{d:"M12 28 L26 18 L40 28",stroke:"var(--bn-green)",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.7"}),(0,b.jsx)("path",{d:"M8 40 L26 30 L44 40",stroke:"var(--bn-green)",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.45"}),(0,b.jsx)("circle",{cx:"26",cy:"8",r:"2.5",fill:"var(--bn-green)"})]}),titre:"Bâtir un héritage durable",description:"La prospérité que nous cherchons n'est pas que matérielle. Elle est humaine, spirituelle, collective. Nous accompagnons chaque membre porteur de projets, nous investissons dans l'éducation, la santé et les terres — pour que nos enfants héritent d'un monde meilleur.",citation:"« Un arbre bien enraciné ne craint pas la tempête. »"}];function e(a=.2){let b=(0,c.useRef)(null),[d,f]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let c=b.current;if(!c)return;let d=new IntersectionObserver(([a])=>{a.isIntersecting&&(f(!0),d.disconnect())},{threshold:a});return d.observe(c),()=>d.disconnect()},[a]),[b,d]}function f({target:a,inView:b}){let[d,e]=(0,c.useState)(0);return(0,c.useEffect)(()=>{if(!b)return;let c=null,d=b=>{c||(c=b);let f=Math.min((b-c)/1200,1);e(Math.floor(f*a)),f<1&&requestAnimationFrame(d)};requestAnimationFrame(d)},[b,a]),d}function g({valeur:a,index:d}){let[f,g]=e(.2),[h,i]=(0,c.useState)(!1),j=.18*d;return(0,b.jsxs)("div",{ref:f,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),style:{position:"relative",borderRadius:"20px",overflow:"hidden",padding:"48px 40px 44px",background:h?"linear-gradient(145deg, #141008 0%, #1e1408 100%)":"linear-gradient(145deg, #0f0a05 0%, #171008 100%)",border:`1px solid ${h?"rgba(var(--bn-green-rgb),0.55)":"rgba(var(--bn-green-rgb),0.18)"}`,boxShadow:h?`0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px ${a.couleur}33, inset 0 1px 0 ${a.couleur}22`:"0 8px 32px rgba(0,0,0,0.35)",transform:g?h?"translateY(-8px)":"translateY(0)":"translateY(50px)",opacity:+!!g,transition:`
          opacity 0.8s ${j}s cubic-bezier(0.4,0,0.2,1),
          transform 0.8s ${j}s cubic-bezier(0.34,1.1,0.64,1),
          box-shadow 0.45s ease,
          border-color 0.45s ease,
          background 0.45s ease
        `,cursor:"default",display:"flex",flexDirection:"column",gap:"0",flex:1,minWidth:0},children:[(0,b.jsx)("div",{style:{position:"absolute",top:"-60px",right:"-60px",width:"200px",height:"200px",borderRadius:"50%",background:`radial-gradient(circle, ${a.couleur}18 0%, transparent 70%)`,opacity:+!!h,transition:"opacity 0.6s ease",pointerEvents:"none"}}),(0,b.jsx)("span",{style:{position:"absolute",top:"20px",right:"28px",fontFamily:"'Playfair Display', serif",fontSize:"5rem",fontWeight:900,color:a.couleur,opacity:.055,lineHeight:1,userSelect:"none",pointerEvents:"none",letterSpacing:"-0.04em"},children:a.chiffre}),(0,b.jsx)("div",{style:{width:"72px",height:"72px",borderRadius:"16px",background:a.couleurSombre,border:`1px solid ${a.couleur}30`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"28px",transform:h?"rotate(-4deg) scale(1.08)":"rotate(0deg) scale(1)",transition:"transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",flexShrink:0},children:a.icon}),(0,b.jsx)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.68rem",fontWeight:600,letterSpacing:"0.28em",textTransform:"uppercase",color:a.couleur,marginBottom:"10px",display:"block"},children:a.mot}),(0,b.jsx)("h3",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.35rem",fontWeight:900,color:"#ffffff",margin:"0 0 14px 0",lineHeight:1.18},children:a.titre}),(0,b.jsx)("div",{style:{width:h?"56px":"32px",height:"1.5px",background:`linear-gradient(90deg, ${a.couleur}, transparent)`,borderRadius:"2px",marginBottom:"20px",transition:"width 0.5s cubic-bezier(0.4,0,0.2,1)"}}),(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.05rem",lineHeight:1.8,color:"rgba(255,255,255,0.78)",margin:"0 0 28px 0",flex:1},children:a.description}),(0,b.jsx)("div",{style:{borderLeft:`2px solid ${a.couleur}60`,paddingLeft:"16px",marginTop:"auto"},children:(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.92rem",fontStyle:"italic",color:`${a.couleur}BB`,margin:0,lineHeight:1.6},children:a.citation})})]})}function h(){let[a,c]=e(.3),d=["Unité","Amour","Prospérité"],f=["var(--bn-green)","var(--bn-white)","var(--bn-green)"];return(0,b.jsxs)("div",{ref:a,style:{textAlign:"center",marginBottom:"80px",opacity:+!!c,transform:c?"translateY(0)":"translateY(40px)",transition:"opacity 1s ease, transform 1s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,b.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"14px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.70rem",fontWeight:600,letterSpacing:"0.32em",textTransform:"uppercase",color:"var(--bn-green)",marginBottom:"24px"},children:[(0,b.jsx)("span",{style:{display:"block",width:"40px",height:"1px",background:"linear-gradient(90deg, transparent, var(--bn-green))"}}),"Nos Valeurs",(0,b.jsx)("span",{style:{display:"block",width:"40px",height:"1px",background:"linear-gradient(90deg, var(--bn-green), transparent)"}})]}),(0,b.jsxs)("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(2rem, 5vw, 3.8rem)",fontWeight:900,lineHeight:1.08,color:"#ffffff",margin:"0 0 32px 0"},children:["Ce qui nous unit,",(0,b.jsx)("br",{}),(0,b.jsx)("em",{style:{color:"var(--bn-green)",fontStyle:"italic"},children:"ce qui nous définit"})]}),(0,b.jsx)("div",{style:{display:"inline-flex",alignItems:"center",gap:"0",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(var(--bn-green-rgb),0.22)",borderRadius:"50px",padding:"6px 8px",flexWrap:"wrap",justifyContent:"center"},children:d.map((a,c)=>(0,b.jsxs)("span",{style:{display:"inline-flex",alignItems:"center"},children:[(0,b.jsx)("span",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(0.85rem, 1.5vw, 1rem)",fontWeight:700,color:f[c],padding:"8px 20px",borderRadius:"50px",letterSpacing:"0.08em",transition:"background 0.3s"},children:a}),c<d.length-1&&(0,b.jsx)("span",{style:{width:"4px",height:"4px",borderRadius:"50%",background:"rgba(var(--bn-green-rgb),0.55)",display:"inline-block"}})]},a))}),(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(0.98rem, 1.4vw, 1.15rem)",color:"rgba(255,255,255,0.78)",maxWidth:"560px",margin:"28px auto 0",lineHeight:1.8},children:"Trois mots. Une âme. La boussole qui oriente chacun de nos actes, chacun de nos choix, depuis la nuit des temps jusqu'à aujourd'hui."})]})}function i(){let[a,c]=e(.2);return(0,b.jsxs)("div",{ref:a,style:{marginTop:"80px",borderRadius:"20px",background:"linear-gradient(135deg, #0f0a05 0%, #1a1008 50%, #0f0a05 100%)",border:"1px solid rgba(var(--bn-green-rgb),0.20)",padding:"52px 40px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"40px",textAlign:"center",position:"relative",overflow:"hidden",opacity:+!!c,transform:c?"translateY(0)":"translateY(40px)",transition:"opacity 0.9s 0.1s ease, transform 0.9s 0.1s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,b.jsx)("div",{style:{position:"absolute",inset:0,backgroundImage:"radial-gradient(ellipse 70% 70% at 50% 50%, rgba(var(--bn-green-rgb),0.06) 0%, transparent 70%)",pointerEvents:"none"}}),[{val:3,suffix:"+",label:"Générations",couleur:"var(--bn-green)"},{val:120,suffix:"+",label:"Membres actifs",couleur:"var(--bn-green)"},{val:60,suffix:" ans",label:"D'histoire commune",couleur:"var(--bn-green)"},{val:12,suffix:"",label:"Localités représentées",couleur:"var(--bn-green)"}].map((a,d)=>(0,b.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,b.jsxs)("div",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(2rem, 4vw, 3rem)",fontWeight:900,color:a.couleur,lineHeight:1,marginBottom:"8px"},children:[(0,b.jsx)(f,{target:a.val,inView:c}),a.suffix]}),(0,b.jsx)("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.82rem",letterSpacing:"0.16em",textTransform:"uppercase",color:"rgba(255,255,255,0.78)"},children:a.label}),(0,b.jsx)("div",{style:{width:"24px",height:"1px",background:a.couleur,opacity:.5,margin:"10px auto 0",borderRadius:"2px"}})]},d))]})}function j(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsx)("section",{className:"valeurs-root",children:(0,b.jsxs)("div",{className:"valeurs-inner",children:[(0,b.jsx)(h,{}),(0,b.jsx)("div",{className:"valeurs-grid",children:d.map((a,c)=>(0,b.jsx)(g,{valeur:a,index:c},a.id))}),(0,b.jsx)(i,{})]})})]})}a.s(["default",()=>j])},17590,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246);let e=[{src:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85",alt:"Réunion de famille",lieu:"Libreville"},{src:"https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=85",alt:"Fête du clan",lieu:"Lambaréné"},{src:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=85",alt:"Les anciens",lieu:"Port-Gentil"},{src:"https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=85",alt:"Cérémonie traditionnelle",lieu:"Franceville"},{src:"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=85",alt:"Solidarité familiale",lieu:"Oyem"},{src:"https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=85",alt:"Les jeunes du clan",lieu:"Libreville"},{src:"https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=85",alt:"Mariage traditionnel",lieu:"Moanda"},{src:"https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=800&q=85",alt:"Remise de diplôme",lieu:"Libreville"},{src:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=85",alt:"Projet communautaire",lieu:"Tchibanga"},{src:"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=85",alt:"Aide aux vulnérables",lieu:"Port-Gentil"},{src:"https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=85",alt:"Célébration",lieu:"Lambaréné"},{src:"https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=85",alt:"Repas de famille",lieu:"Makokou"}],f=[[{col:1,row:1,w:2,h:2},{col:3,row:1,w:1,h:1},{col:3,row:2,w:1,h:1}],[{col:1,row:1,w:1,h:1},{col:1,row:2,w:1,h:1},{col:2,row:1,w:2,h:2}],[{col:1,row:1,w:1,h:2},{col:2,row:1,w:2,h:1},{col:2,row:2,w:1,h:1},{col:3,row:2,w:1,h:1}],[{col:1,row:1,w:2,h:1},{col:3,row:1,w:1,h:2},{col:1,row:2,w:1,h:1},{col:2,row:2,w:1,h:1}]];function g(a=.1){let b=(0,c.useRef)(null),[d,e]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let c=b.current;if(!c)return;let d=new IntersectionObserver(([a])=>{a.isIntersecting&&(e(!0),d.disconnect())},{threshold:a});return d.observe(c),()=>d.disconnect()},[a]),[b,d]}function h({cell:a,globalDelay:d}){let[e,f]=(0,c.useState)(!1),[h,i]=g(.1),j=`drift-${Math.abs(Math.round(100*a.driftX))}-${Math.abs(Math.round(100*a.driftY))}`;a.w,a.w;let k=220*a.h+(a.h-1)*10;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
        @keyframes ${j} {
          0%   { transform: translate(0px, 0px) rotate(0deg); }
          33%  { transform: translate(${.6*a.driftX}px, ${a.driftY}px) rotate(${.5*a.rotIdle}deg); }
          66%  { transform: translate(${a.driftX}px, ${.4*a.driftY}px) rotate(${a.rotIdle}deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
      `}),(0,b.jsxs)("div",{ref:h,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),style:{gridColumn:`${a.col} / span ${a.w}`,gridRow:`${a.row} / span ${a.h}`,borderRadius:"14px",overflow:"hidden",position:"relative",cursor:"pointer",width:"100%",height:"100%",minHeight:`${k}px`,opacity:+!!i,transform:i&&!e?"translateY(0) scale(1)":i?void 0:"translateY(30px) scale(0.96)",transition:`
            opacity 0.75s ${d}s cubic-bezier(0.4,0,0.2,1),
            transform 0.75s ${d}s cubic-bezier(0.34,1.1,0.64,1),
            box-shadow 0.45s ease
          `,animation:i&&!e?`${j} ${a.driftDur}s ${a.driftDelay}s ease-in-out infinite`:"none",boxShadow:e?"0 28px 60px rgba(0,0,0,0.65), 0 0 0 2px rgba(var(--bn-green-rgb),0.45)":"0 8px 24px rgba(0,0,0,0.45)",zIndex:e?10:1},children:[(0,b.jsx)("img",{src:a.photo.src,alt:a.photo.alt,style:{width:"100%",height:"100%",objectFit:"cover",display:"block",transform:e?"scale(1.10)":"scale(1.02)",transition:"transform 0.75s cubic-bezier(0.4,0,0.2,1)",willChange:"transform"}}),(0,b.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(5,2,1,0.70) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",transition:"opacity 0.4s ease",opacity:e?1:.5}}),(0,b.jsx)("div",{style:{position:"absolute",inset:0,borderRadius:"14px",border:"1.5px solid rgba(var(--bn-green-rgb),0)",transition:"border-color 0.4s ease",...e?{borderColor:"rgba(var(--bn-green-rgb),0.55)"}:{},pointerEvents:"none"}}),(0,b.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"18px 18px 16px",transform:e?"translateY(0)":"translateY(12px)",opacity:+!!e,transition:"transform 0.45s cubic-bezier(0.34,1.1,0.64,1), opacity 0.4s ease"},children:[(0,b.jsx)("p",{style:{fontFamily:"'Playfair Display', serif",fontSize:a.w>=2?"1.05rem":"0.88rem",fontWeight:700,color:"#ffffff",margin:"0 0 4px 0",lineHeight:1.2,textShadow:"0 2px 8px rgba(0,0,0,0.8)"},children:a.photo.alt}),(0,b.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.70rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--bn-green)"},children:[(0,b.jsx)("span",{style:{width:"14px",height:"1px",background:"var(--bn-green)",display:"inline-block"}}),a.photo.lieu]})]}),(0,b.jsx)("div",{style:{position:"absolute",top:"14px",right:"14px",width:"34px",height:"34px",borderRadius:"50%",background:"rgba(10,5,2,0.60)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",opacity:+!!e,transform:e?"scale(1) rotate(0deg)":"scale(0.6) rotate(-20deg)",transition:"opacity 0.35s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",border:"1px solid rgba(var(--bn-green-rgb),0.55)"},children:(0,b.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:[(0,b.jsx)("circle",{cx:"6",cy:"6",r:"4.5",stroke:"var(--bn-white)",strokeWidth:"1.3"}),(0,b.jsx)("line",{x1:"9.5",y1:"9.5",x2:"13",y2:"13",stroke:"var(--bn-white)",strokeWidth:"1.3",strokeLinecap:"round"})]})})]})]})}function i({group:a,groupIndex:c}){return(0,b.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(2, 220px)",gap:"10px",width:"100%"},children:a.map((a,d)=>(0,b.jsx)(h,{cell:a,globalDelay:.15*c+.07*d},d))})}function j(){let[a,c]=g(.3);return(0,b.jsxs)("div",{ref:a,style:{textAlign:"center",marginBottom:"64px",opacity:+!!c,transform:c?"translateY(0)":"translateY(36px)",transition:"opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,b.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"14px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.70rem",fontWeight:600,letterSpacing:"0.32em",textTransform:"uppercase",color:"var(--bn-green)",marginBottom:"22px"},children:[(0,b.jsx)("span",{style:{width:"40px",height:"1px",background:"linear-gradient(90deg, transparent, var(--bn-green))",display:"block"}}),"Nos Mémoires",(0,b.jsx)("span",{style:{width:"40px",height:"1px",background:"linear-gradient(90deg, var(--bn-green), transparent)",display:"block"}})]}),(0,b.jsxs)("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(2rem, 5vw, 3.6rem)",fontWeight:900,color:"#ffffff",margin:"0 0 20px 0",lineHeight:1.08},children:["Les instants qui",(0,b.jsx)("br",{}),(0,b.jsx)("em",{style:{color:"var(--bn-green)",fontStyle:"italic"},children:"nous racontent"})]}),(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(0.98rem, 1.4vw, 1.15rem)",color:"rgba(255,255,255,0.78)",maxWidth:"500px",margin:"0 auto",lineHeight:1.8},children:"Chaque photo est une page de notre histoire collective. Des sourires, des larmes, des fêtes — la vie du clan capturée pour l'éternité."})]})}function k(){let[a,e]=g(.2),[f,h]=(0,c.useState)(!1);return(0,b.jsx)("div",{ref:a,style:{display:"flex",justifyContent:"center",marginTop:"60px",opacity:+!!e,transform:e?"translateY(0)":"translateY(24px)",transition:"opacity 0.8s 0.2s ease, transform 0.8s 0.2s cubic-bezier(0.34,1.1,0.64,1)"},children:(0,b.jsxs)(d.default,{href:"/nos-albums",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),style:{position:"relative",overflow:"hidden",display:"inline-flex",alignItems:"center",gap:"14px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.92rem",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",padding:"16px 40px",borderRadius:"6px",border:"1.5px solid rgba(var(--bn-green-rgb),0.70)",color:f?"#0B0F0C":"rgba(255,255,255,0.95)",background:"transparent",textDecoration:"none",transition:"color 0.35s ease"},children:[(0,b.jsx)("span",{style:{position:"absolute",inset:0,background:"var(--bn-green)",transform:f?"scaleX(1)":"scaleX(0)",transformOrigin:"left",transition:"transform 0.42s cubic-bezier(0.4,0,0.2,1)",borderRadius:"4px"}}),(0,b.jsx)("span",{style:{position:"relative",zIndex:1},children:"Voir tous nos albums"}),(0,b.jsx)("span",{style:{position:"relative",zIndex:1,transform:f?"translateX(6px)":"translateX(0)",transition:"transform 0.35s cubic-bezier(0.34,1.56,0.64,1)"},children:"→"})]})})}function l(){let a=(0,c.useMemo)(()=>(function(a){let b,c=(b=42,()=>((b=(16807*b+0)%0x7fffffff)-1)/0x7ffffffe),d=[],e=0,g=0;for(;e<a.length;){let b=f[g%f.length];g++;let h=b.length;if(e+h>a.length)break;let i=b.map((b,d)=>({...b,photo:a[e+d],driftX:(c()-.5)*6,driftY:(c()-.5)*6,driftDur:4+3*c(),driftDelay:2*c(),rotIdle:(c()-.5)*1.5}));d.push(i),e+=h}return d})(e),[]),[d,g]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let a=()=>g(window.innerWidth<=700);return a(),window.addEventListener("resize",a,{passive:!0}),()=>window.removeEventListener("resize",a)},[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsx)("section",{className:"galerie-root",children:(0,b.jsxs)("div",{className:"galerie-inner",children:[(0,b.jsx)(j,{}),d?(0,b.jsx)("div",{className:"galerie-mobile-grid",children:e.map((a,c)=>(0,b.jsxs)("div",{style:{borderRadius:"14px",overflow:"hidden",position:"relative",boxShadow:"0 8px 24px rgba(0,0,0,0.45)",minHeight:c%5==0?"260px":"200px"},children:[(0,b.jsx)("img",{src:a.src,alt:a.alt,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",display:"block"}}),(0,b.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(5,2,1,0.78) 0%, rgba(0,0,0,0.10) 55%, transparent 100%)"}}),(0,b.jsxs)("div",{style:{position:"absolute",left:0,right:0,bottom:0,padding:"14px 14px 12px"},children:[(0,b.jsx)("p",{style:{fontFamily:"'Playfair Display', serif",fontSize:"0.95rem",fontWeight:700,color:"#ffffff",margin:"0 0 4px 0",lineHeight:1.2,textShadow:"0 2px 8px rgba(0,0,0,0.8)"},children:a.alt}),(0,b.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"6px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.68rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--bn-green)"},children:[(0,b.jsx)("span",{style:{width:"14px",height:"1px",background:"var(--bn-green)",display:"inline-block"}}),a.lieu]})]})]},a.src+c))}):(0,b.jsx)("div",{className:"galerie-groups",children:a.map((a,c)=>(0,b.jsx)(i,{group:a,groupIndex:c},c))}),(0,b.jsx)(k,{})]})})]})}a.s(["default",()=>l])},1018,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246);let e=[{id:1,nom:"Jean-Baptiste Nguyen",role:"Chef de Famille",profession:"Magistrat",photo:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85",ville:"Libreville",bio:"Patriarche du clan, Jean-Baptiste veille sur l'unité de la famille depuis plus de 30 ans avec sagesse et autorité bienveillante."},{id:2,nom:"Marie-Claire Obame",role:"Gardienne des Traditions",profession:"Ethnologue",photo:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=85",ville:"Libreville",bio:"Dépositaire de la mémoire collective, elle documente nos rites et s'assure que nos enfants grandissent enracinés dans leur culture."},{id:3,nom:"Pierre Mba Nguyen",role:"Trésorier",profession:"Expert-Comptable",photo:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=85",ville:"Port-Gentil",bio:"Rigueur et transparence. Pierre gère les finances du clan avec intégrité, garantissant la bonne santé de nos projets communs."},{id:4,nom:"Élodie Mintsa",role:"Responsable Solidarité",profession:"Médecin",photo:"https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=85",ville:"Franceville",bio:"Au service des plus vulnérables, Élodie coordonne l'aide aux veuves, personnes âgées et enfants en difficulté au sein du clan."},{id:5,nom:"Samuel Ondo",role:"Responsable Projets",profession:"Ingénieur Civil",photo:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85",ville:"Oyem",bio:"Bâtisseur visionnaire, Samuel pilote les projets immobiliers et fonciers qui constituent notre patrimoine familial."},{id:6,nom:"Christelle Ella",role:"Secrétaire Générale",profession:"Juriste",photo:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=85",ville:"Libreville",bio:"Organisée et rigoureuse, Christelle veille au bon fonctionnement administratif et juridique de la communauté familiale."},{id:7,nom:"Hervé Nzamba",role:"Porte-Parole",profession:"Journaliste",photo:"https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=85",ville:"Lambaréné",bio:"Voix du clan, Hervé assure la communication interne et externe, et préserve l'image de notre famille auprès du monde."},{id:8,nom:"Nadège Bouanga",role:"Responsable Jeunesse",profession:"Enseignante",photo:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=85",ville:"Moanda",bio:"Passionnée d'éducation, Nadège encadre les jeunes membres du clan et les prépare à prendre la relève avec fierté."},{id:9,nom:"Aurélien Nkoghe",role:"Conseiller Économique",profession:"Entrepreneur",photo:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=85",ville:"Libreville",bio:"Entrepreneur accompli, Aurélien guide les porteurs de projets et connecte le clan aux opportunités économiques du pays."},{id:10,nom:"Rosalie Engonga",role:"Responsable Santé",profession:"Infirmière en Chef",photo:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=85",ville:"Tchibanga",bio:"Rosalie organise les caravanes médicales et s'assure que chaque membre du clan bénéficie des soins dont il a besoin."},{id:11,nom:"Patrick Zué",role:"Responsable Spirituel",profession:"Pasteur",photo:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=85",ville:"Makokou",bio:"Guide spirituel du clan, Patrick accompagne les familles dans les moments de joie comme dans les épreuves de la vie."},{id:12,nom:"Viviane Assoumou",role:"Responsable Culture",profession:"Artiste & Chorégraphe",photo:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=85",ville:"Port-Gentil",bio:"Âme créatrice du clan, Viviane perpétue nos danses, chants et rites traditionnels en les transmettant aux générations futures."}];function f(a=.1){let b=(0,c.useRef)(null),[d,e]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let c=b.current;if(!c)return;let d=new IntersectionObserver(([a])=>{a.isIntersecting&&(e(!0),d.disconnect())},{threshold:a});return d.observe(c),()=>d.disconnect()},[a]),[b,d]}function g({membre:a,isSelected:d,onSelect:e}){let[f,g]=(0,c.useState)(!1);return(0,b.jsxs)("div",{onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),onClick:()=>e(d?null:a.id),style:{borderRadius:"12px",overflow:"hidden",background:"linear-gradient(145deg, #0f0a05 0%, #171008 100%)",border:`1px solid ${d?"rgba(var(--bn-green-rgb),0.55)":"rgba(var(--bn-green-rgb),0.22)"}`,boxShadow:f||d?"0 22px 60px rgba(0,0,0,0.70), 0 0 0 1px rgba(var(--bn-green-rgb),0.22)":"0 10px 28px rgba(0,0,0,0.55)",transform:f?"translateY(-3px)":"translateY(0)",transition:"transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",cursor:"pointer",minWidth:0},children:[(0,b.jsxs)("div",{style:{position:"relative",height:"170px",overflow:"hidden"},children:[(0,b.jsx)("img",{src:a.photo,alt:a.nom,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center",transform:f?"scale(1.06)":"scale(1.02)",transition:"transform 0.7s cubic-bezier(0.4,0,0.2,1)",display:"block"}}),(0,b.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(10,5,2,0.90) 100%)"}}),(0,b.jsxs)("div",{style:{position:"absolute",left:12,right:12,bottom:12,textAlign:"left"},children:[(0,b.jsx)("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--bn-green)",marginBottom:"6px"},children:a.role}),(0,b.jsx)("div",{style:{fontFamily:"'Playfair Display', serif",fontSize:"0.98rem",fontWeight:700,color:"#ffffff",lineHeight:1.2,marginBottom:"3px"},children:a.nom}),(0,b.jsx)("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.82)",fontStyle:"italic"},children:a.profession})]})]}),(0,b.jsx)("div",{style:{padding:"12px 14px 14px"},children:(0,b.jsxs)("span",{style:{fontSize:"0.68rem",color:"rgba(255,255,255,0.78)",letterSpacing:"0.10em",fontFamily:"'Cormorant Garamond', serif",textTransform:"uppercase"},children:["📍 ",a.ville]})})]})}function h({membre:a,pos:d,index:e,isSelected:g,onSelect:h,anySelected:i}){let[j,k]=(0,c.useState)(!1),[l,m]=f(.05),n=e%6*.08,o=g?0:j?.3*d.rot:d.rot,p=g?1:j?1.05:d.scale,q=g?100:j?50:i?Math.max(d.zBase-5,1):d.zBase;return(0,b.jsxs)("div",{ref:l,style:{position:"absolute",left:`${d.baseX}%`,top:`${d.baseY}%`,width:"200px",transform:m?`translate(-50%, -50%) rotate(${o}deg) scale(${p})`:`translate(-50%, -50%) rotate(${d.rot}deg) scale(0.7)`,opacity:m?i&&!g?.35:1:0,zIndex:q,transition:`
          transform 0.55s ${g?"0s":`${n}s`} cubic-bezier(0.34,1.1,0.64,1),
          opacity   0.5s  ${n}s ease,
          z-index   0s
        `,cursor:"pointer"},onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),onClick:()=>h(g?null:a.id),children:[(0,b.jsx)("div",{style:{position:"absolute",inset:0,borderRadius:"4px",boxShadow:g?"0 40px 100px rgba(0,0,0,0.80), 0 0 0 2px rgba(var(--bn-green-rgb),0.60)":j?"0 20px 50px rgba(0,0,0,0.70), 0 0 0 1.5px rgba(var(--bn-green-rgb),0.35)":"4px 8px 24px rgba(0,0,0,0.60), 2px 3px 8px rgba(0,0,0,0.40)",transition:"box-shadow 0.45s ease"}}),(0,b.jsxs)("div",{style:{position:"relative",borderRadius:"4px",overflow:"hidden",background:"#0f0a05",border:`1px solid ${g?"rgba(var(--bn-green-rgb),0.55)":"rgba(var(--bn-green-rgb),0.20)"}`,transition:"border-color 0.4s ease"},children:[(0,b.jsx)("div",{style:{height:"4px",background:"linear-gradient(90deg, transparent, var(--bn-green), var(--bn-white), var(--bn-green), transparent)"}}),(0,b.jsxs)("div",{style:{position:"relative",height:"160px",overflow:"hidden"},children:[(0,b.jsx)("img",{src:a.photo,alt:a.nom,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center",display:"block",transform:j||g?"scale(1.08)":"scale(1.0)",transition:"transform 0.7s cubic-bezier(0.4,0,0.2,1)"}}),(0,b.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(10,5,2,0.90) 100%)"}}),(0,b.jsx)("div",{style:{position:"absolute",bottom:"10px",left:"10px",right:"10px",textAlign:"center"},children:(0,b.jsx)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.62rem",letterSpacing:"0.16em",textTransform:"uppercase",color:"var(--bn-green)",background:"rgba(10,5,2,0.75)",backdropFilter:"blur(8px)",padding:"3px 8px",borderRadius:"20px",border:"1px solid rgba(var(--bn-green-rgb),0.30)",display:"inline-block"},children:a.role})})]}),(0,b.jsxs)("div",{style:{padding:"14px 14px 16px"},children:[(0,b.jsx)("h3",{style:{fontFamily:"'Playfair Display', serif",fontSize:"0.88rem",fontWeight:700,color:"#ffffff",margin:"0 0 4px 0",lineHeight:1.2},children:a.nom}),(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.82)",margin:"0 0 8px 0",fontStyle:"italic"},children:a.profession}),(0,b.jsx)("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:(0,b.jsxs)("span",{style:{fontSize:"0.60rem",color:"rgba(255,255,255,0.72)",letterSpacing:"0.1em",fontFamily:"'Cormorant Garamond', serif",textTransform:"uppercase"},children:["📍 ",a.ville]})})]})]}),(0,b.jsx)("div",{style:{position:"absolute",top:"-10px",left:"50%",transform:"translateX(-50%)",width:"16px",height:"16px",borderRadius:"50%",background:g?"radial-gradient(circle at 35% 35%, var(--bn-white), var(--bn-green))":"radial-gradient(circle at 35% 35%, rgba(var(--bn-green-rgb),0.65), rgba(0,0,0,0.85))",boxShadow:g?"0 2px 8px rgba(var(--bn-green-rgb),0.55)":"0 2px 5px rgba(0,0,0,0.50)",border:"1.5px solid rgba(255,255,255,0.15)",zIndex:10,transition:"background 0.3s, box-shadow 0.3s"}})]})}function i({membre:a,onClose:d,isMobile:e}){let[f,g]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{setTimeout(()=>g(!0),20)},[]),a)?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{onClick:d,style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.0)",zIndex:200,cursor:"pointer"}}),(0,b.jsxs)("div",{style:{position:"fixed",right:e?"16px":f?"32px":"-420px",left:e?"16px":"auto",bottom:e?f?"16px":"-520px":"auto",top:e?"auto":"50%",transform:e?"none":"translateY(-50%)",width:e?"auto":"min(380px, calc(100vw - 48px))",maxHeight:e?"calc(100dvh - 32px)":"auto",zIndex:300,borderRadius:"16px",overflow:"hidden",background:"linear-gradient(145deg, #110c06 0%, #1c1208 100%)",border:"1px solid rgba(var(--bn-green-rgb),0.30)",boxShadow:"0 40px 120px rgba(0,0,0,0.80), 0 0 0 1px rgba(var(--bn-green-rgb),0.15)",transition:e?"bottom 0.55s cubic-bezier(0.34,1.1,0.64,1)":"right 0.55s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,b.jsx)("div",{style:{height:"3px",background:"linear-gradient(90deg, transparent, var(--bn-green), var(--bn-white), var(--bn-green), transparent)"}}),(0,b.jsx)("button",{onClick:d,style:{position:"absolute",top:"16px",right:"16px",width:"32px",height:"32px",borderRadius:"50%",background:"rgba(var(--bn-green-rgb),0.14)",border:"1px solid rgba(var(--bn-green-rgb),0.30)",color:"var(--bn-white)",fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,transition:"background 0.25s"},onMouseEnter:a=>a.currentTarget.style.background="rgba(var(--bn-green-rgb),0.28)",onMouseLeave:a=>a.currentTarget.style.background="rgba(var(--bn-green-rgb),0.14)",children:"✕"}),(0,b.jsxs)("div",{style:{position:"relative",height:"260px",overflow:"hidden"},children:[(0,b.jsx)("img",{src:a.photo,alt:a.nom,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center",display:"block",animation:"zoomIn 0.8s cubic-bezier(0.4,0,0.2,1) forwards"}}),(0,b.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(10,5,2,0.90) 100%)"}}),(0,b.jsxs)("div",{style:{position:"absolute",bottom:"20px",left:"24px",right:"24px"},children:[(0,b.jsx)("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.68rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--bn-green)",marginBottom:"6px"},children:a.role}),(0,b.jsx)("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.45rem",fontWeight:900,color:"#ffffff",margin:0,lineHeight:1.15,textShadow:"0 2px 12px rgba(0,0,0,0.8)"},children:a.nom})]})]}),(0,b.jsxs)("div",{style:{padding:"24px 28px 32px"},children:[(0,b.jsxs)("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap",marginBottom:"20px"},children:[(0,b.jsx)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.75rem",padding:"5px 14px",borderRadius:"20px",background:"rgba(var(--bn-green-rgb),0.12)",border:"1px solid rgba(var(--bn-green-rgb),0.32)",color:"rgba(255,255,255,0.92)",fontStyle:"italic"},children:a.profession}),(0,b.jsxs)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.65rem",padding:"5px 12px",borderRadius:"20px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.10)",color:"rgba(255,255,255,0.78)"},children:["📍 ",a.ville]})]}),(0,b.jsx)("div",{style:{width:"40px",height:"1.5px",background:"linear-gradient(90deg, var(--bn-green), transparent)",marginBottom:"16px",borderRadius:"2px"}}),(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.05rem",lineHeight:1.8,color:"rgba(255,255,255,0.68)",margin:0},children:a.bio})]})]})]}):null}function j(){let[a,c]=f(.2);return(0,b.jsxs)("div",{ref:a,style:{textAlign:"center",marginBottom:"20px",opacity:+!!c,transform:c?"translateY(0)":"translateY(36px)",transition:"opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,b.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"14px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.70rem",fontWeight:600,letterSpacing:"0.32em",textTransform:"uppercase",color:"var(--bn-green)",marginBottom:"22px"},children:[(0,b.jsx)("span",{style:{width:"40px",height:"1px",background:"linear-gradient(90deg, transparent, var(--bn-green))",display:"block"}}),"Le Clan",(0,b.jsx)("span",{style:{width:"40px",height:"1px",background:"linear-gradient(90deg, var(--bn-green), transparent)",display:"block"}})]}),(0,b.jsxs)("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(2rem, 5vw, 3.6rem)",fontWeight:900,color:"#ffffff",margin:"0 0 20px 0",lineHeight:1.08},children:["Ceux qui font",(0,b.jsx)("br",{}),(0,b.jsx)("em",{style:{color:"var(--bn-green)",fontStyle:"italic"},children:"vivre notre famille"})]}),(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(0.98rem, 1.4vw, 1.12rem)",color:"rgba(255,255,255,0.78)",maxWidth:"480px",margin:"0 auto",lineHeight:1.8},children:"Cliquez sur une carte pour découvrir chaque membre et le rôle qu'il joue au cœur de notre clan."})]})}function k(){let[a,f]=(0,c.useState)(null),[k,l]=(0,c.useState)(!1),m=(0,c.useMemo)(()=>(function(a){let b,c=(b=137,()=>((b=16807*b%0x7fffffff)-1)/0x7ffffffe),d=Math.ceil(a/4),e=[];for(let b=0;b<a;b++){let a=b%4/4*100,f=Math.floor(b/4)/d*100,g=(c()-.5)*14,h=(c()-.5)*14,i=(c()-.5)*16,j=.92+.12*c(),k=Math.floor(10*c())+1;e.push({baseX:a+g,baseY:f+h,rot:i,scale:j,zBase:k})}return e})(e.length),[]),n=e.find(b=>b.id===a)||null;(0,c.useEffect)(()=>{let a=()=>l(window.innerWidth<=900);return a(),window.addEventListener("resize",a,{passive:!0}),()=>window.removeEventListener("resize",a)},[]),(0,c.useEffect)(()=>{let a=a=>{"Escape"===a.key&&f(null)};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[]);let o=Math.ceil(e.length/4);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsxs)("section",{className:"membres-root",children:[(0,b.jsx)("div",{className:"membres-header",children:(0,b.jsx)(j,{})}),k?(0,b.jsx)("div",{className:"membres-grid",children:e.map(c=>(0,b.jsx)(g,{membre:c,isSelected:a===c.id,onSelect:f},c.id))}):(0,b.jsx)("div",{className:"table-surface",style:{height:`${220*o+100}px`},children:e.map((c,d)=>(0,b.jsx)(h,{membre:c,pos:m[d],index:d,isSelected:a===c.id,anySelected:null!==a,onSelect:f},c.id))}),(0,b.jsx)("div",{className:"membres-cta",children:(0,b.jsxs)(d.default,{href:"/nos-membres",style:{position:"relative",overflow:"hidden",display:"inline-flex",alignItems:"center",gap:"14px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.92rem",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",padding:"16px 40px",borderRadius:"6px",border:"1.5px solid rgba(var(--bn-green-rgb),0.70)",color:"rgba(255,255,255,0.95)",background:"transparent",textDecoration:"none"},onMouseEnter:a=>{let b=a.currentTarget.querySelector(".cta-fill");b&&(b.style.transform="scaleX(1)"),a.currentTarget.style.color="#0B0F0C"},onMouseLeave:a=>{let b=a.currentTarget.querySelector(".cta-fill");b&&(b.style.transform="scaleX(0)"),a.currentTarget.style.color="rgba(255,255,255,0.95)"},children:[(0,b.jsx)("span",{className:"cta-fill",style:{position:"absolute",inset:0,background:"var(--bn-green)",transform:"scaleX(0)",transformOrigin:"left",transition:"transform 0.42s cubic-bezier(0.4,0,0.2,1)",borderRadius:"4px"}}),(0,b.jsx)("span",{style:{position:"relative",zIndex:1},children:"Voir tous les membres"}),(0,b.jsx)("span",{style:{position:"relative",zIndex:1},children:"→"})]})})]}),(0,b.jsx)(i,{membre:n,onClose:()=>f(null),isMobile:k})]})}a.s(["default",()=>k])},65091,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246);let e=[{id:1,type:"image",src:"https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85",categorie:"Mariage",titre:"Mariage de Rodrigue & Cynthia",date:"14 Février 2025",lieu:"Libreville",description:"Une union bénie sous le signe de l'amour et des traditions ancestrales. Le clan s'est rassemblé en force pour célébrer cette journée inoubliable.",taille:"grande"},{id:2,type:"video",src:"https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4",categorie:"Fête Traditionnelle",titre:"Grande Fête du Clan 2024",date:"31 Décembre 2024",lieu:"Port-Gentil",description:"Notre rassemblement annuel de fin d'année. Danses, chants et retrouvailles pour clore l'année en famille.",taille:"grande"},{id:3,type:"image",src:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=85",categorie:"Remise de Prix",titre:"Cérémonie des Lauréats",date:"22 Juin 2024",lieu:"Franceville",description:"Honorer nos diplômés et les encourager sur la voie de l'excellence.",taille:"moyenne"},{id:4,type:"image",src:"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=85",categorie:"Solidarité",titre:"Caravane Médicale",date:"10 Mars 2025",lieu:"Oyem",description:"Soins gratuits pour les membres vulnérables et leurs familles.",taille:"moyenne"},{id:5,type:"video",src:"https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4",categorie:"Projet",titre:"Pose de Première Pierre",date:"5 Janvier 2025",lieu:"Moanda",description:"Inauguration des travaux de notre premier bien immobilier collectif. Un pas historique pour le clan.",taille:"petite"},{id:6,type:"image",src:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=85",categorie:"Mémoire",titre:"Cérémonie de Deuil — Grand-Père Nguyen",date:"18 Août 2024",lieu:"Lambaréné",description:"En sa mémoire, nous nous sommes réunis pour honorer sa vie et perpétuer son héritage.",taille:"petite"},{id:7,type:"image",src:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85",categorie:"Assemblée",titre:"Conseil Annuel du Clan",date:"2 Novembre 2024",lieu:"Libreville",description:"Bilan de l'année, élection des représentants et définition des grandes orientations pour 2025.",taille:"moyenne"},{id:8,type:"video",src:"https://videos.pexels.com/video-files/3044706/3044706-uhd_2560_1440_25fps.mp4",categorie:"Baptême",titre:"Baptême des Petits du Clan",date:"20 Avril 2025",lieu:"Tchibanga",description:"Accueil des nouveaux membres dans la grande famille. Une journée de joie et de bénédictions.",taille:"petite"}],f={Mariage:"var(--bn-green)","Fête Traditionnelle":"var(--bn-green)","Remise de Prix":"var(--bn-green)",Solidarité:"var(--bn-green)",Projet:"var(--bn-green)",Mémoire:"var(--bn-green)",Assemblée:"var(--bn-green)",Baptême:"var(--bn-green)"};function g(a=.15){let b=(0,c.useRef)(null),[d,e]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let c=b.current;if(!c)return;let d=new IntersectionObserver(([a])=>{a.isIntersecting&&(e(!0),d.disconnect())},{threshold:a});return d.observe(c),()=>d.disconnect()},[a]),[b,d]}function h({evt:a,hovered:d}){let e=(0,c.useRef)(null),[f,g]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{let a=e.current;a&&(d?(a.play().catch(()=>{}),g(!0)):(a.pause(),g(!1)))},[d]),(0,c.useEffect)(()=>{let a=e.current;if(!a)return;let b=new IntersectionObserver(([b])=>{b.isIntersecting?(a.play().catch(()=>{}),g(!0)):(a.pause(),g(!1))},{threshold:.4});return b.observe(a),()=>b.disconnect()},[]),"video"===a.type)?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("video",{ref:e,src:a.src,muted:!0,loop:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",transform:d?"scale(1.06)":"scale(1.01)",transition:"transform 0.9s cubic-bezier(0.4,0,0.2,1)"}}),(0,b.jsx)("div",{style:{position:"absolute",top:"14px",right:"14px",zIndex:5,width:"30px",height:"30px",borderRadius:"50%",background:"rgba(10,5,2,0.60)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.20)",display:"flex",alignItems:"center",justifyContent:"center",opacity:f?.7:1,transition:"opacity 0.3s"},children:f?(0,b.jsxs)("svg",{width:"10",height:"12",viewBox:"0 0 10 12",fill:"white",children:[(0,b.jsx)("rect",{x:"0",y:"0",width:"3",height:"12",rx:"1"}),(0,b.jsx)("rect",{x:"7",y:"0",width:"3",height:"12",rx:"1"})]}):(0,b.jsx)("svg",{width:"10",height:"12",viewBox:"0 0 10 12",fill:"white",children:(0,b.jsx)("path",{d:"M0 0 L10 6 L0 12 Z"})})})]}):(0,b.jsx)("img",{src:a.src,alt:a.titre,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",display:"block",transform:d?"scale(1.07)":"scale(1.01)",transition:"transform 0.9s cubic-bezier(0.4,0,0.2,1)"}})}function i({evt:a,index:d,spanCols:e=1,spanRows:i=1}){let[j,k]=g(.12),[l,m]=(0,c.useState)(!1),n=d%4*.1,o=f[a.categorie]||"var(--bn-green)";return(0,b.jsxs)("div",{ref:j,onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),style:{gridColumn:`span ${e}`,gridRow:`span ${i}`,position:"relative",borderRadius:"16px",overflow:"hidden",cursor:"pointer",minHeight:i>1?"520px":"280px",opacity:+!!k,transform:k?"translateY(0) scale(1)":"translateY(32px) scale(0.97)",transition:`
          opacity   0.75s ${n}s cubic-bezier(0.4,0,0.2,1),
          transform 0.75s ${n}s cubic-bezier(0.34,1.1,0.64,1),
          box-shadow 0.45s ease
        `,boxShadow:l?`0 32px 72px rgba(0,0,0,0.65), 0 0 0 1.5px ${o}55`:"0 8px 28px rgba(0,0,0,0.50)"},children:[(0,b.jsx)(h,{evt:a,hovered:l}),(0,b.jsx)("div",{style:{position:"absolute",inset:0,background:`linear-gradient(
          to top,
          rgba(4, 2, 1, 0.95) 0%,
          rgba(4, 2, 1, 0.75) 30%,
          rgba(4, 2, 1, 0.20) 60%,
          transparent 100%
        )`,transition:"opacity 0.4s ease",opacity:l?.95:1,zIndex:2,pointerEvents:"none"}}),(0,b.jsx)("div",{style:{position:"absolute",inset:0,borderRadius:"16px",border:`1.5px solid ${o}`,opacity:.45*!!l,transition:"opacity 0.4s ease",zIndex:4,pointerEvents:"none"}}),(0,b.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"20px 22px 22px",zIndex:3,transform:l?"translateY(-4px)":"translateY(0)",transition:"transform 0.45s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,b.jsxs)("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",marginBottom:"8px"},children:[(0,b.jsx)("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:o,display:"inline-block",flexShrink:0,boxShadow:`0 0 6px ${o}`}}),(0,b.jsx)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.22em",textTransform:"uppercase",color:o},children:a.categorie})]}),(0,b.jsx)("h3",{style:{fontFamily:"'Playfair Display', serif",fontSize:e>1?"clamp(1.15rem, 2vw, 1.50rem)":"1.05rem",fontWeight:700,color:"#ffffff",margin:"0 0 8px 0",lineHeight:1.22,textShadow:"0 2px 10px rgba(0,0,0,0.7)"},children:a.titre}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:l?"12px":"0",transition:"margin 0.35s ease"},children:[(0,b.jsxs)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.75rem",color:"rgba(255,255,255,0.78)",display:"flex",alignItems:"center",gap:"5px"},children:["📅 ",a.date]}),(0,b.jsx)("span",{style:{width:"3px",height:"3px",borderRadius:"50%",background:"rgba(255,255,255,0.25)",flexShrink:0}}),(0,b.jsxs)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.75rem",color:"rgba(255,255,255,0.78)"},children:["📍 ",a.lieu]})]}),(0,b.jsx)("div",{style:{maxHeight:l?"80px":"0",overflow:"hidden",transition:"max-height 0.45s cubic-bezier(0.4,0,0.2,1)"},children:(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.88rem",lineHeight:1.65,color:"rgba(255,255,255,0.68)",margin:"0 0 0 0",paddingTop:"8px",borderTop:"1px solid rgba(255,255,255,0.08)"},children:a.description})})]})]})}function j(){let[a,c]=g(.2);return(0,b.jsxs)("div",{ref:a,style:{textAlign:"center",marginBottom:"60px",opacity:+!!c,transform:c?"translateY(0)":"translateY(36px)",transition:"opacity 0.9s ease, transform 0.9s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,b.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"14px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.70rem",fontWeight:600,letterSpacing:"0.32em",textTransform:"uppercase",color:"var(--bn-green)",marginBottom:"22px"},children:[(0,b.jsx)("span",{style:{width:"40px",height:"1px",background:"linear-gradient(90deg, transparent, var(--bn-green))",display:"block"}}),"La Vie du Clan",(0,b.jsx)("span",{style:{width:"40px",height:"1px",background:"linear-gradient(90deg, var(--bn-green), transparent)",display:"block"}})]}),(0,b.jsxs)("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(2rem, 5vw, 3.6rem)",fontWeight:900,color:"#ffffff",margin:"0 0 20px 0",lineHeight:1.08},children:["Nos moments",(0,b.jsx)("br",{}),(0,b.jsx)("em",{style:{color:"var(--bn-green)",fontStyle:"italic"},children:"qui nous rassemblent"})]}),(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(0.98rem, 1.4vw, 1.12rem)",color:"rgba(255,255,255,0.78)",maxWidth:"500px",margin:"0 auto",lineHeight:1.8},children:"Mariages, fêtes, cérémonies, projets… la vie de notre clan se raconte à travers ces instants précieux que nous vivons ensemble."})]})}function k(){let[a,e]=g(.2),[f,h]=(0,c.useState)(!1);return(0,b.jsx)("div",{ref:a,style:{display:"flex",justifyContent:"center",marginTop:"56px",opacity:+!!e,transform:e?"translateY(0)":"translateY(24px)",transition:"opacity 0.8s 0.2s ease, transform 0.8s 0.2s cubic-bezier(0.34,1.1,0.64,1)"},children:(0,b.jsxs)(d.default,{href:"/nos-evenements",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),style:{position:"relative",overflow:"hidden",display:"inline-flex",alignItems:"center",gap:"14px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.92rem",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",padding:"16px 40px",borderRadius:"6px",border:"1.5px solid rgba(var(--bn-green-rgb),0.70)",color:f?"#0B0F0C":"rgba(255,255,255,0.95)",background:"transparent",textDecoration:"none",transition:"color 0.35s ease"},children:[(0,b.jsx)("span",{style:{position:"absolute",inset:0,background:"var(--bn-green)",transform:f?"scaleX(1)":"scaleX(0)",transformOrigin:"left",transition:"transform 0.42s cubic-bezier(0.4,0,0.2,1)",borderRadius:"4px"}}),(0,b.jsx)("span",{style:{position:"relative",zIndex:1},children:"Voir tous nos événements"}),(0,b.jsx)("span",{style:{position:"relative",zIndex:1,transform:f?"translateX(6px)":"translateX(0)",transition:"transform 0.35s cubic-bezier(0.34,1.56,0.64,1)"},children:"→"})]})})}function l(){let a=(0,c.useMemo)(()=>e.map(a=>"grande"===a.taille?{...a,spanCols:2,spanRows:2}:"moyenne"===a.taille?{...a,spanCols:2,spanRows:1}:{...a,spanCols:1,spanRows:1}),[]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsx)("section",{className:"evenements-root",children:(0,b.jsxs)("div",{className:"evenements-inner",children:[(0,b.jsx)(j,{}),(0,b.jsx)("div",{className:"events-grid",children:a.map((a,c)=>(0,b.jsx)(i,{evt:a,index:c,spanCols:a.spanCols,spanRows:a.spanRows},a.id))}),(0,b.jsx)(k,{})]})})]})}a.s(["default",()=>l])},5122,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(71987);function e(a=.15){let b=(0,c.useRef)(null),[d,f]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let c=b.current;if(!c)return;let d=new IntersectionObserver(([a])=>{a.isIntersecting&&(f(!0),d.disconnect())},{threshold:a});return d.observe(c),()=>d.disconnect()},[a]),[b,d]}function f({opacity:a=.04,color:c="var(--bn-green)"}){return(0,b.jsxs)("svg",{style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"},viewBox:"0 0 400 400",preserveAspectRatio:"xMidYMid slice",children:[(0,b.jsx)("defs",{children:(0,b.jsxs)("pattern",{id:"afro-pat",x:"0",y:"0",width:"40",height:"40",patternUnits:"userSpaceOnUse",children:[(0,b.jsx)("polygon",{points:"20,4 36,20 20,36 4,20",fill:"none",stroke:c,strokeWidth:"0.8",opacity:10*a}),(0,b.jsx)("circle",{cx:"0",cy:"0",r:"1.5",fill:c,opacity:8*a}),(0,b.jsx)("circle",{cx:"40",cy:"0",r:"1.5",fill:c,opacity:8*a}),(0,b.jsx)("circle",{cx:"0",cy:"40",r:"1.5",fill:c,opacity:8*a}),(0,b.jsx)("circle",{cx:"40",cy:"40",r:"1.5",fill:c,opacity:8*a}),(0,b.jsx)("circle",{cx:"20",cy:"20",r:"2",fill:c,opacity:6*a}),(0,b.jsx)("line",{x1:"0",y1:"0",x2:"8",y2:"8",stroke:c,strokeWidth:"0.5",opacity:5*a}),(0,b.jsx)("line",{x1:"40",y1:"0",x2:"32",y2:"8",stroke:c,strokeWidth:"0.5",opacity:5*a}),(0,b.jsx)("line",{x1:"0",y1:"40",x2:"8",y2:"32",stroke:c,strokeWidth:"0.5",opacity:5*a}),(0,b.jsx)("line",{x1:"40",y1:"40",x2:"32",y2:"32",stroke:c,strokeWidth:"0.5",opacity:5*a})]})}),(0,b.jsx)("rect",{width:"100%",height:"100%",fill:"url(#afro-pat)"})]})}function g({label:a,type:d="text",name:e,value:f,onChange:g,required:h=!1,placeholder:i,rows:j,optional:k}){let[l,m]=(0,c.useState)(!1),[n,o]=(0,c.useState)(!1),p=a=>{g(a),o(a.target.value.length>0)},q=l||n,r="textarea"===d,s={width:"100%",background:"transparent",border:"none",outline:"none",fontFamily:"'Cormorant Garamond', serif",fontSize:"1.05rem",color:"#ffffff",resize:"none",lineHeight:1.7,padding:r?"28px 0 12px":"24px 0 8px",display:"block",caretColor:"var(--bn-green)"};return(0,b.jsxs)("div",{style:{position:"relative",marginBottom:"8px"},children:[(0,b.jsxs)("label",{style:{position:"absolute",top:q?"6px":r?"20px":"18px",left:0,fontFamily:"'Cormorant Garamond', serif",fontSize:q?"0.68rem":"0.98rem",letterSpacing:q?"0.20em":"0.04em",textTransform:q?"uppercase":"none",color:l?"var(--bn-green)":q?"rgba(var(--bn-green-rgb),0.78)":"rgba(255,255,255,0.62)",transition:"all 0.35s cubic-bezier(0.34,1.1,0.64,1)",pointerEvents:"none",userSelect:"none"},children:[a,k&&(0,b.jsx)("span",{style:{marginLeft:"8px",fontSize:"0.60rem",color:"rgba(255,255,255,0.55)",letterSpacing:"0.12em",textTransform:"uppercase"},children:"— facultatif"})]}),r?(0,b.jsx)("textarea",{name:e,value:f,onChange:p,onFocus:()=>m(!0),onBlur:()=>m(!1),rows:j||5,required:h,placeholder:"",style:s}):(0,b.jsx)("input",{type:d,name:e,value:f,onChange:p,onFocus:()=>m(!0),onBlur:()=>m(!1),required:h,placeholder:"",style:s}),(0,b.jsxs)("div",{style:{position:"relative",height:"1px"},children:[(0,b.jsx)("div",{style:{position:"absolute",inset:0,background:"rgba(255,255,255,0.12)",borderRadius:"2px"}}),(0,b.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(90deg, var(--bn-green), var(--bn-white))",borderRadius:"2px",transform:l?"scaleX(1)":"scaleX(0)",transformOrigin:"left",transition:"transform 0.45s cubic-bezier(0.4,0,0.2,1)"}})]})]})}function h(){let a=Array.from({length:18},(a,b)=>({id:b,x:5+37*b%90,y:5+53*b%90,size:1.5+b%4*.8,dur:6+b%5*2.2,delay:b%7*.9,driftX:(b%5-2)*18,driftY:(b%4-2)*22}));return(0,b.jsxs)("div",{style:{position:"absolute",inset:0,pointerEvents:"none",overflow:"hidden"},children:[(0,b.jsx)("style",{children:`
        ${a.map(a=>`
          @keyframes float-${a.id} {
            0%   { transform: translate(0px, 0px) scale(1);   opacity: 0.4; }
            33%  { transform: translate(${.5*a.driftX}px, ${a.driftY}px) scale(1.3); opacity: 0.8; }
            66%  { transform: translate(${a.driftX}px, ${.4*a.driftY}px) scale(0.8); opacity: 0.5; }
            100% { transform: translate(0px, 0px) scale(1);   opacity: 0.4; }
          }
        `).join("")}
      `}),a.map(a=>(0,b.jsx)("div",{style:{position:"absolute",left:`${a.x}%`,top:`${a.y}%`,width:`${a.size}px`,height:`${a.size}px`,borderRadius:"50%",background:a.id%3==0?"var(--bn-green)":a.id%3==1?"var(--bn-white)":"var(--bn-green)",animation:`float-${a.id} ${a.dur}s ${a.delay}s ease-in-out infinite`}},a.id))]})}function i(){let a=(0,c.useRef)(null),i=(0,c.useRef)(null),j=(0,c.useRef)(null),k=(0,c.useRef)(null),[l,m]=(0,c.useState)({nom:"",prenom:"",email:"",motif:""}),[n,o]=(0,c.useState)(!1),[p,q]=(0,c.useState)(!1),[r,s]=(0,c.useState)({}),[t,u]=e(.2),[v,w]=e(.1),[x,y]=e(.2);(0,c.useEffect)(()=>{let b=()=>{let b=a.current;if(!b)return;let c=b.getBoundingClientRect(),d=window.innerHeight,e=(Math.max(0,Math.min(1,(d-c.top)/(d+c.height)))-.5)*120;i.current&&(i.current.style.transform=`translateY(${.5*e}px)`),j.current&&(j.current.style.transform=`translate(${.18*e}px, ${.3*e}px)`),k.current&&(k.current.style.transform=`translate(${-(.22*e)}px, ${.15*e}px)`)};return window.addEventListener("scroll",b,{passive:!0}),()=>window.removeEventListener("scroll",b)},[]);let z=a=>{let{name:b,value:c}=a.target;m(a=>({...a,[b]:c})),r[b]&&s(a=>({...a,[b]:""}))};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsxs)("section",{ref:a,className:"contact-root",children:[(0,b.jsx)("div",{ref:i,style:{position:"absolute",inset:0,background:"radial-gradient(circle at 30% 25%, rgba(var(--bn-green-rgb),0.10) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(var(--bn-green-rgb),0.06) 0%, transparent 45%), radial-gradient(circle at 50% 80%, rgba(var(--bn-green-rgb),0.05) 0%, transparent 55%)",zIndex:0,willChange:"transform"}}),(0,b.jsx)("div",{style:{position:"absolute",inset:0,zIndex:1},children:(0,b.jsx)(f,{opacity:.025,color:"var(--bn-green)"})}),(0,b.jsx)("div",{ref:j,style:{position:"absolute",top:"-120px",left:"-120px",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle, rgba(var(--bn-green-rgb),0.16) 0%, transparent 70%)",animation:"orbPulse 6s ease-in-out infinite",zIndex:2,willChange:"transform",pointerEvents:"none"}}),(0,b.jsx)("div",{ref:k,style:{position:"absolute",bottom:"-10%",right:"-8%",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle, rgba(212,133,106,0.10) 0%, transparent 70%)",animation:"orbPulse 8s 2s ease-in-out infinite",zIndex:2,willChange:"transform",pointerEvents:"none"}}),(0,b.jsx)("div",{style:{position:"absolute",inset:0,zIndex:3,pointerEvents:"none"},children:(0,b.jsx)(h,{})}),(0,b.jsx)("div",{style:{position:"absolute",top:0,bottom:0,left:"50%",width:"1px",background:"linear-gradient(to bottom, transparent 0%, rgba(var(--bn-green-rgb),0.22) 20%, rgba(var(--bn-green-rgb),0.22) 80%, transparent 100%)",zIndex:4,pointerEvents:"none"}}),(0,b.jsxs)("div",{className:"contact-grid",children:[(0,b.jsxs)("div",{ref:x,style:{paddingRight:"60px",display:"flex",flexDirection:"column",justifyContent:"center",borderRight:"1px solid rgba(var(--bn-green-rgb),0.16)",opacity:+!!y,transform:y?"translateX(0)":"translateX(-50px)",transition:"opacity 1s ease, transform 1s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,b.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"12px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.68rem",fontWeight:600,letterSpacing:"0.30em",textTransform:"uppercase",color:"var(--bn-green)",marginBottom:"28px"},children:[(0,b.jsx)("span",{style:{width:"36px",height:"1px",background:"var(--bn-green)",display:"block"}}),"Nous Joindre"]}),(0,b.jsxs)("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:"clamp(2rem, 4vw, 3.2rem)",fontWeight:900,color:"#ffffff",margin:"0 0 24px 0",lineHeight:1.1},children:["Parlez-nous,",(0,b.jsx)("br",{}),(0,b.jsx)("em",{style:{color:"var(--bn-green)",fontStyle:"italic"},children:"nous vous écoutons"})]}),(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.08rem",lineHeight:1.85,color:"rgba(255,255,255,0.78)",margin:"0 0 48px 0"},children:"Vous souhaitez rejoindre le clan, signaler une situation d'urgence familiale, proposer un projet ou simplement nous saluer ? Notre porte est toujours ouverte."}),[{icon:(0,b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[(0,b.jsx)("path",{d:"M3 3h12a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z",stroke:"var(--bn-green)",strokeWidth:"1.3"}),(0,b.jsx)("path",{d:"M2 4l7 6 7-6",stroke:"var(--bn-green)",strokeWidth:"1.3",strokeLinecap:"round"})]}),label:"Email",value:"contact@clan-nguyen.ga"},{icon:(0,b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[(0,b.jsx)("path",{d:"M9 2C6.24 2 4 4.24 4 7c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z",stroke:"var(--bn-green)",strokeWidth:"1.3"}),(0,b.jsx)("circle",{cx:"9",cy:"7",r:"2",stroke:"var(--bn-green)",strokeWidth:"1.3"})]}),label:"Siège social",value:"Libreville, Gabon"},{icon:(0,b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[(0,b.jsx)("circle",{cx:"9",cy:"9",r:"7",stroke:"var(--bn-green)",strokeWidth:"1.3"}),(0,b.jsx)("path",{d:"M9 5v4l3 2",stroke:"var(--bn-green)",strokeWidth:"1.3",strokeLinecap:"round"})]}),label:"Disponibilité",value:"Lun – Sam, 8h00 – 18h00"}].map((a,c)=>(0,b.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px",marginBottom:"22px",opacity:+!!y,transform:y?"translateX(0)":"translateX(-30px)",transition:`opacity 0.75s ${.25+.12*c}s ease, transform 0.75s ${.25+.12*c}s cubic-bezier(0.34,1.1,0.64,1)`},children:[(0,b.jsx)("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(var(--bn-green-rgb),0.10)",border:"1px solid rgba(var(--bn-green-rgb),0.28)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:a.icon}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.65rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(var(--bn-green-rgb),0.80)",marginBottom:"3px"},children:a.label}),(0,b.jsx)("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"1rem",color:"rgba(255,255,255,0.78)"},children:a.value})]})]},c)),(0,b.jsx)("div",{style:{marginTop:"16px",paddingTop:"28px",borderTop:"1px solid rgba(var(--bn-green-rgb),0.18)",fontFamily:"'Playfair Display', serif",fontStyle:"italic",fontSize:"1rem",color:"rgba(255,255,255,0.78)",lineHeight:1.6},children:"« Unité · Amour · Prospérité »"})]}),(0,b.jsx)("div",{ref:v,style:{paddingLeft:"60px",display:"flex",flexDirection:"column",justifyContent:"center",opacity:+!!w,transform:w?"translateX(0)":"translateX(50px)",transition:"opacity 1s 0.15s ease, transform 1s 0.15s cubic-bezier(0.34,1.1,0.64,1)"},children:n?(0,b.jsxs)("div",{className:"success-msg",style:{textAlign:"center",padding:"40px 20px"},children:[(0,b.jsx)("div",{style:{width:"72px",height:"72px",borderRadius:"50%",background:"rgba(200,169,110,0.12)",border:"1.5px solid rgba(200,169,110,0.40)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 24px",overflow:"hidden"},children:(0,b.jsx)(d.default,{src:"/images/logo-BN.png",alt:"Logo BA NGOMBOUNDA",width:72,height:72,style:{width:"100%",height:"100%",objectFit:"cover"}})}),(0,b.jsx)("h3",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.6rem",fontWeight:700,color:"#ffffff",margin:"0 0 14px 0"},children:"Message envoyé !"}),(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.05rem",color:"rgba(255,255,255,0.55)",lineHeight:1.75,margin:"0 0 32px 0"},children:"Merci de nous avoir contactés. Un membre du clan vous répondra dans les meilleurs délais."}),(0,b.jsx)("button",{onClick:()=>{o(!1),m({nom:"",prenom:"",email:"",motif:""})},style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.82rem",letterSpacing:"0.14em",textTransform:"uppercase",color:"#C8A96E",background:"none",border:"none",cursor:"pointer",padding:"8px 0",borderBottom:"1px solid rgba(200,169,110,0.35)"},children:"Envoyer un autre message →"})]}):(0,b.jsxs)("form",{onSubmit:a=>{let b;a.preventDefault();let c=(b={},l.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l.email)||(b.email="Email invalide."):b.email="L'email est requis.",l.motif.trim()||(b.motif="Veuillez décrire votre motif."),b);Object.keys(c).length>0?s(c):(q(!0),setTimeout(()=>{q(!1),o(!0)},1800))},noValidate:!0,children:[(0,b.jsxs)("div",{style:{marginBottom:"40px"},children:[(0,b.jsx)("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.68rem",letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(200,169,110,0.55)",display:"block",marginBottom:"10px"},children:"Votre message"}),(0,b.jsx)("h3",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.55rem",fontWeight:700,color:"#ffffff",margin:0,lineHeight:1.2},children:"Écrivez-nous"})]}),(0,b.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",marginBottom:"28px"},children:[(0,b.jsx)(g,{label:"Nom",name:"nom",value:l.nom,onChange:z,optional:!0}),(0,b.jsx)(g,{label:"Prénom",name:"prenom",value:l.prenom,onChange:z,optional:!0})]}),(0,b.jsxs)("div",{className:r.email?"field-error":"",style:{marginBottom:"28px"},children:[(0,b.jsx)(g,{label:"Adresse email",type:"email",name:"email",value:l.email,onChange:z,required:!0}),r.email&&(0,b.jsxs)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.78rem",color:"#D4856A",margin:"6px 0 0",letterSpacing:"0.04em"},children:["⚠ ",r.email]})]}),(0,b.jsxs)("div",{className:r.motif?"field-error":"",style:{marginBottom:"36px"},children:[(0,b.jsx)(g,{label:"Motif de votre message",type:"textarea",name:"motif",value:l.motif,onChange:z,required:!0,rows:5}),r.motif&&(0,b.jsxs)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.78rem",color:"#D4856A",margin:"6px 0 0",letterSpacing:"0.04em"},children:["⚠ ",r.motif]}),(0,b.jsxs)("div",{style:{textAlign:"right",marginTop:"6px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.70rem",color:"rgba(255,255,255,0.22)",letterSpacing:"0.08em"},children:[l.motif.length," caractères"]})]}),(0,b.jsx)("button",{type:"submit",className:`submit-btn ${p?"sending":""}`,disabled:p,children:p?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("span",{children:"Envoi en cours"}),(0,b.jsx)("div",{className:"spinner"})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("span",{children:"Envoyer le message"}),(0,b.jsx)("span",{style:{position:"relative",zIndex:1,fontSize:"1.1rem"},children:"✦"})]})}),(0,b.jsx)("p",{style:{marginTop:"16px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.72rem",color:"rgba(255,255,255,0.22)",textAlign:"center",letterSpacing:"0.06em",lineHeight:1.6},children:"Vos informations sont confidentielles et ne seront jamais partagées en dehors du clan."})]})})]})]})]})}a.s(["default",()=>i])},38251,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246),e=a.i(71987);let f=[{titre:"Navigation",liens:[{label:"Accueil",href:"/"},{label:"Nos Racines",href:"/notre-histoire"},{label:"La Vie du Clan",href:"/nos-evenements"},{label:"Nos Mémoires",href:"/nos-albums"},{label:"Notre Âme",href:"/notre-vocation"},{label:"Le Clan",href:"/nos-membres"},{label:"Nous Joindre",href:"/nous-contacter"}]},{titre:"Le Clan",liens:[{label:"Notre Histoire",href:"/notre-histoire"},{label:"Notre Vocation",href:"/notre-vocation"},{label:"Nos Valeurs",href:"/nos-valeurs"},{label:"Nos Projets",href:"/nos-projets"},{label:"Aide aux Membres",href:"/solidarite"}]},{titre:"Ressources",liens:[{label:"Rejoindre le clan",href:"/rejoindre"},{label:"Déposer un projet",href:"/projets/nouveau"},{label:"Demander une aide",href:"/solidarite/demande"},{label:"Espace membres",href:"/espace-membres"},{label:"Nous contacter",href:"/nous-contacter"}]}],g=[{label:"Facebook",href:"#",icon:(0,b.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})},{label:"WhatsApp",href:"#",icon:(0,b.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})})},{label:"YouTube",href:"#",icon:(0,b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("path",{d:"M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"}),(0,b.jsx)("polygon",{points:"9.75 15.02 15.5 12 9.75 8.98 9.75 15.02",stroke:"currentColor",fill:"none"})]})},{label:"Instagram",href:"#",icon:(0,b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),(0,b.jsx)("circle",{cx:"12",cy:"12",r:"4.5"}),(0,b.jsx)("circle",{cx:"17.5",cy:"6.5",r:"0.8",fill:"currentColor",stroke:"none"})]})}],h=["Unité","Amour","Prospérité"],i=["var(--bn-green)","var(--bn-white)","var(--bn-green)"];function j(a=.1){let b=(0,c.useRef)(null),[d,e]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let c=b.current;if(!c)return;let d=new IntersectionObserver(([a])=>{a.isIntersecting&&(e(!0),d.disconnect())},{threshold:a});return d.observe(c),()=>d.disconnect()},[a]),[b,d]}function k({href:a,label:e,delay:f=0,inView:g}){let[h,i]=(0,c.useState)(!1);return(0,b.jsx)("li",{style:{opacity:+!!g,transform:g?"translateX(0)":"translateX(-12px)",transition:`opacity 0.55s ${f}s ease, transform 0.55s ${f}s cubic-bezier(0.34,1.1,0.64,1)`},children:(0,b.jsxs)(d.default,{href:a,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),style:{display:"inline-flex",alignItems:"center",gap:"8px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.97rem",color:h?"var(--bn-white)":"rgba(255,255,255,0.78)",textDecoration:"none",transition:"color 0.28s ease",padding:"3px 0",letterSpacing:"0.02em"},children:[(0,b.jsx)("span",{style:{width:h?"16px":"0px",height:"1px",background:"var(--bn-green)",display:"inline-block",transition:"width 0.35s cubic-bezier(0.4,0,0.2,1)",flexShrink:0}}),e]})})}function l({item:a,delay:d,inView:e}){let[f,g]=(0,c.useState)(!1);return(0,b.jsx)("a",{href:a.href,"aria-label":a.label,onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),style:{width:"42px",height:"42px",borderRadius:"10px",border:`1px solid ${f?"rgba(var(--bn-green-rgb),0.65)":"rgba(var(--bn-green-rgb),0.24)"}`,background:f?"rgba(var(--bn-green-rgb),0.14)":"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"center",color:f?"var(--bn-white)":"rgba(255,255,255,0.70)",textDecoration:"none",transform:e?f?"translateY(-4px) scale(1.10)":"translateY(0) scale(1)":"translateY(12px) scale(0.9)",opacity:+!!e,transition:`
          color 0.28s ease,
          border-color 0.28s ease,
          background 0.28s ease,
          transform 0.38s ${d}s cubic-bezier(0.34,1.56,0.64,1),
          opacity 0.5s ${d}s ease
        `,boxShadow:f?"0 8px 24px rgba(0,0,0,0.35)":"none"},children:a.icon})}function m(){let[a,m]=j(.1),[n,o]=j(.1),[p,q]=j(.1),r=(0,c.useRef)(null),s=(0,c.useRef)(null),t=new Date().getFullYear();return(0,c.useEffect)(()=>{let a=r.current,b=s.current;if(!a||!b)return;let c=null,d=()=>{let c=a.getBoundingClientRect(),d=b.getBoundingClientRect(),e=Math.max(0,c.width-d.width),f=Math.max(0,c.height-d.height),g=Math.round(Math.random()*e),h=Math.round(Math.random()*f);b.style.transform=`translate3d(${g}px, ${h}px, 0)`},e=()=>{d(),c=setTimeout(e,5500+3500*Math.random())},f=requestAnimationFrame(()=>{d(),e()}),g=()=>d();return window.addEventListener("resize",g,{passive:!0}),()=>{cancelAnimationFrame(f),window.removeEventListener("resize",g),c&&clearTimeout(c)}},[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsxs)("footer",{ref:r,className:"footer-root",children:[(0,b.jsx)("div",{className:"footer-float-logo","aria-hidden":"true",children:(0,b.jsx)("div",{ref:s,children:(0,b.jsx)(e.default,{src:"/images/logo-BN-removebg.png",alt:"",fill:!0,priority:!1,sizes:"(max-width: 700px) 220px, 300px",style:{objectFit:"contain"}})})}),(0,b.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,b.jsx)("div",{className:"footer-sep"}),(0,b.jsx)("div",{className:"footer-top",children:(0,b.jsxs)("div",{ref:a,className:"footer-top-inner",children:[(0,b.jsxs)("div",{style:{opacity:+!!m,transform:m?"translateY(0)":"translateY(20px)",transition:"opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"18px"},children:[(0,b.jsx)("div",{style:{width:"48px",height:"48px",borderRadius:"50%",border:"1.5px solid rgba(200,169,110,0.45)",display:"flex",alignItems:"center",justifyContent:"center",background:"radial-gradient(circle at 35% 35%, rgba(200,169,110,0.12), rgba(0,0,0,0.4))",flexShrink:0,overflow:"hidden"},children:(0,b.jsx)(e.default,{src:"/images/logo-BN.png",alt:"Logo BA NGOMBOUNDA",width:48,height:48,style:{width:"100%",height:"100%",objectFit:"cover"}})}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{style:{fontFamily:"'Playfair Display', serif",fontSize:"1.3rem",fontWeight:700,background:"linear-gradient(135deg, #E8C97E 30%, #fff 70%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",lineHeight:1,letterSpacing:"0.02em"},children:"BA NGOMBOUNDA"}),(0,b.jsx)("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.60rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(200,169,110,0.55)",marginTop:"3px"},children:"Clan & Tradition"})]})]}),(0,b.jsx)("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:h.map((a,c)=>(0,b.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"10px"},children:[(0,b.jsx)("span",{style:{fontFamily:"'Playfair Display', serif",fontStyle:"italic",fontSize:"1.05rem",color:i[c],opacity:.85},children:a}),c<h.length-1&&(0,b.jsx)("span",{style:{width:"4px",height:"4px",borderRadius:"50%",background:"rgba(200,169,110,0.35)",display:"inline-block"}})]},a))})]}),(0,b.jsx)("div",{style:{width:"1px",alignSelf:"stretch",background:"linear-gradient(to bottom, transparent, rgba(200,169,110,0.20), transparent)",flexShrink:0,display:"none"},className:"vert-sep"}),(0,b.jsxs)("div",{style:{flex:1,minWidth:"280px",maxWidth:"420px",opacity:+!!m,transform:m?"translateX(0)":"translateX(30px)",transition:"opacity 0.8s 0.2s ease, transform 0.8s 0.2s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.72rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"#C8A96E",margin:"0 0 8px 0"},children:"Restez informés"}),(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.02rem",color:"rgba(255,255,255,0.50)",margin:"0 0 16px 0",lineHeight:1.6},children:"Recevez les actualités du clan directement dans votre boîte mail."}),(0,b.jsxs)("div",{style:{display:"flex"},children:[(0,b.jsx)("input",{type:"email",placeholder:"votre@email.com",className:"nl-input"}),(0,b.jsx)("button",{className:"nl-btn",children:"S'abonner"})]})]})]})}),(0,b.jsx)("div",{style:{margin:"0 40px"},children:(0,b.jsx)("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:(0,b.jsx)("div",{className:"footer-sep"})})}),(0,b.jsx)("div",{className:"footer-cols",style:{paddingTop:"48px"},children:(0,b.jsxs)("div",{ref:n,className:"footer-cols-inner",children:[(0,b.jsxs)("div",{style:{opacity:+!!o,transform:o?"translateY(0)":"translateY(24px)",transition:"opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.1,0.64,1)"},children:[(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.02rem",lineHeight:1.85,color:"rgba(255,255,255,0.42)",margin:"0 0 28px 0",maxWidth:"320px"},children:"Une communauté familiale unie par les valeurs de l'Afrique, dédiée à préserver nos traditions et bâtir un avenir prospère pour nos enfants et petits-enfants."}),(0,b.jsxs)("div",{style:{marginBottom:"28px"},children:[(0,b.jsx)("p",{className:"col-title",style:{marginBottom:"14px"},children:"Nous suivre"}),(0,b.jsx)("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:g.map((a,c)=>(0,b.jsx)(l,{item:a,delay:.1+.07*c,inView:o},a.label))})]}),(0,b.jsxs)("a",{href:"mailto:contact@clan-nguyen.ga",style:{display:"inline-flex",alignItems:"center",gap:"8px",fontFamily:"'Cormorant Garamond', serif",fontSize:"0.88rem",color:"rgba(200,169,110,0.65)",textDecoration:"none",transition:"color 0.25s ease"},onMouseEnter:a=>a.currentTarget.style.color="#E8C97E",onMouseLeave:a=>a.currentTarget.style.color="rgba(200,169,110,0.65)",children:[(0,b.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 18 18",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[(0,b.jsx)("path",{d:"M3 3h12a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z"}),(0,b.jsx)("path",{d:"M2 4l7 6 7-6",strokeLinecap:"round"})]}),"contact@clan-nguyen.ga"]})]}),f.map((a,c)=>(0,b.jsxs)("div",{style:{opacity:+!!o,transform:o?"translateY(0)":"translateY(24px)",transition:`opacity 0.8s ${.12+.1*c}s ease, transform 0.8s ${.12+.1*c}s cubic-bezier(0.34,1.1,0.64,1)`},children:[(0,b.jsx)("p",{className:"col-title",children:a.titre}),(0,b.jsx)("ul",{style:{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:"2px"},children:a.liens.map((a,d)=>(0,b.jsx)(k,{href:a.href,label:a.label,delay:.15+.08*c+.04*d,inView:o},a.href+a.label))})]},a.titre))]})}),(0,b.jsx)("div",{style:{margin:"0 40px"},children:(0,b.jsx)("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:(0,b.jsx)("div",{className:"footer-sep"})})}),(0,b.jsx)("div",{className:"footer-bottom",children:(0,b.jsxs)("div",{className:"footer-bottom-inner",children:[(0,b.jsxs)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.35)",margin:0,opacity:+!!q,transition:"opacity 0.8s ease"},children:["© ",t," BA NGOMBOUNDA — Clan & Tradition. Tous droits réservés."]}),(0,b.jsxs)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.80rem",fontWeight:600,color:"rgba(255,255,255,0.52)",margin:0,opacity:+!!q,transition:"opacity 0.8s 0.05s ease",whiteSpace:"nowrap"},children:["Developped by"," ",(0,b.jsx)("a",{href:"https://ioi-gab-alpha.vercel.app/",target:"_blank",rel:"noreferrer",style:{color:"var(--bn-white)",textDecoration:"none",borderBottom:"1px solid rgba(255,255,255,0.28)",paddingBottom:"1px"},children:"IOI"})," ","— Innovation Ouverture Intelligence"]}),(0,b.jsx)("div",{style:{display:"flex",alignItems:"center",fontFamily:"'Cormorant Garamond', serif",gap:"20px",flexWrap:"wrap",justifyContent:"center",opacity:+!!q,transition:"opacity 0.8s 0.15s ease"},children:["Mentions légales","Confidentialité","Accessibilité"].map((a,c)=>(0,b.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"20px"},children:[(0,b.jsx)(d.default,{href:"#",style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.28)",textDecoration:"none",transition:"color 0.25s ease",letterSpacing:"0.04em",whiteSpace:"nowrap"},onMouseEnter:a=>a.currentTarget.style.color="rgba(200,169,110,0.70)",onMouseLeave:a=>a.currentTarget.style.color="rgba(255,255,255,0.28)",children:a}),c<2&&(0,b.jsx)("span",{style:{width:"3px",height:"3px",borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"inline-block"}})]},a))}),(0,b.jsx)("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontSize:"0.78rem",color:"rgba(200,169,110,0.35)",margin:0,whiteSpace:"nowrap",opacity:+!!q,transition:"opacity 0.8s 0.25s ease"},children:"Fait avec ❤️ pour le clan"})]})})]})]})]})}a.s(["default",()=>m])}];

//# sourceMappingURL=components_sections_917590aa._.js.map