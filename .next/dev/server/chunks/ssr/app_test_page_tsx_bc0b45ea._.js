module.exports = [
"[project]/app/test/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// ═══════════════════════════════════════════════════════════════════════════════
//  BACK OFFICE COMPLET — NGUYEN FAMILY CLAN
//  Point d'entrée : importer ce fichier dans app/admin/page.jsx
//  Dépendances : next/link, react — aucune lib externe requise
// ═══════════════════════════════════════════════════════════════════════════════
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
// ─────────────────────────────────────────────────────────────────────────────
//  NAVIGATION CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const NAV_GROUPS = [
    {
        groupe: "Contenu",
        items: [
            {
                id: "dashboard",
                label: "Tableau de bord",
                icon: "⊞",
                badge: null
            },
            {
                id: "membres",
                label: "Membres",
                icon: "👥",
                badge: {
                    val: 12,
                    color: "#C8A96E"
                }
            },
            {
                id: "evenements",
                label: "Événements",
                icon: "📅",
                badge: {
                    val: 3,
                    color: "#D4856A"
                }
            },
            {
                id: "albums",
                label: "Albums & Photos",
                icon: "📸",
                badge: null
            },
            {
                id: "histoire",
                label: "Notre Histoire",
                icon: "📖",
                badge: null
            },
            {
                id: "valeurs",
                label: "Valeurs & Vocation",
                icon: "💛",
                badge: null
            }
        ]
    },
    {
        groupe: "Organisation",
        items: [
            {
                id: "projets",
                label: "Projets",
                icon: "🏗️",
                badge: {
                    val: 2,
                    color: "#7EAD8C"
                }
            },
            {
                id: "solidarite",
                label: "Solidarité",
                icon: "🤝",
                badge: {
                    val: 5,
                    color: "#8AADCA"
                }
            },
            {
                id: "immobilier",
                label: "Immobilier & Foncier",
                icon: "🏠",
                badge: null
            },
            {
                id: "messages",
                label: "Messages",
                icon: "✉️",
                badge: {
                    val: 8,
                    color: "#D4856A"
                }
            }
        ]
    },
    {
        groupe: "Admin",
        items: [
            {
                id: "utilisateurs",
                label: "Utilisateurs Admin",
                icon: "🔐",
                badge: null
            },
            {
                id: "parametres",
                label: "Paramètres",
                icon: "⚙️",
                badge: null
            }
        ]
    }
];
// ─────────────────────────────────────────────────────────────────────────────
//  SIDEBAR
// ─────────────────────────────────────────────────────────────────────────────
function Sidebar({ collapsed, onToggle, currentPage, onNavigate }) {
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100%",
            background: "#111113",
            borderRight: "1px solid rgba(200,169,110,0.10)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: collapsed ? "18px 0" : "18px 16px",
                    borderBottom: "1px solid rgba(200,169,110,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: collapsed ? "center" : "space-between",
                    minHeight: "68px",
                    gap: "10px",
                    flexShrink: 0,
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            overflow: "hidden",
                            flexShrink: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "34px",
                                    height: "34px",
                                    flexShrink: 0,
                                    borderRadius: "9px",
                                    background: "linear-gradient(135deg, rgba(200,169,110,0.28),rgba(200,169,110,0.07))",
                                    border: "1px solid rgba(200,169,110,0.28)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1rem"
                                },
                                children: "🌍"
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    overflow: "hidden"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Playfair Display',serif",
                                            fontSize: "0.92rem",
                                            fontWeight: 700,
                                            color: "#fff",
                                            whiteSpace: "nowrap"
                                        },
                                        children: "Nguyen Family"
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "0.58rem",
                                            letterSpacing: "0.18em",
                                            textTransform: "uppercase",
                                            color: "rgba(200,169,110,0.50)",
                                            whiteSpace: "nowrap"
                                        },
                                        children: "Admin Panel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onToggle,
                        style: {
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "6px",
                            width: "26px",
                            height: "26px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            color: "rgba(255,255,255,0.35)",
                            flexShrink: 0,
                            transition: "all 0.2s"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.background = "rgba(200,169,110,0.12)";
                            e.currentTarget.style.color = "#C8A96E";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                            e.currentTarget.style.color = "rgba(255,255,255,0.35)";
                        },
                        title: collapsed ? "Étendre" : "Réduire",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: "0.75rem",
                                transform: collapsed ? "scaleX(-1)" : "none",
                                display: "inline-block"
                            },
                            children: "‹"
                        }, void 0, false, {
                            fileName: "[project]/app/test/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    flex: 1,
                    overflowY: "auto",
                    overflowX: "hidden",
                    padding: "10px 0"
                },
                children: NAV_GROUPS.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "4px"
                        },
                        children: [
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "10px 18px 4px",
                                    fontSize: "0.57rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.22em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.20)"
                                },
                                children: group.groupe
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this),
                            collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: "10px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 106,
                                columnNumber: 27
                            }, this),
                            group.items.map((item)=>{
                                const active = currentPage === item.id;
                                const isHov = hovered === item.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>onNavigate(item.id),
                                    onMouseEnter: ()=>setHovered(item.id),
                                    onMouseLeave: ()=>setHovered(null),
                                    title: collapsed ? item.label : "",
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "9px",
                                        padding: collapsed ? "9px 0" : "8px 14px",
                                        margin: "1px 7px",
                                        borderRadius: "9px",
                                        cursor: "pointer",
                                        justifyContent: collapsed ? "center" : "flex-start",
                                        background: active ? "linear-gradient(135deg,rgba(200,169,110,0.17),rgba(200,169,110,0.06))" : isHov ? "rgba(255,255,255,0.05)" : "transparent",
                                        border: active ? "1px solid rgba(200,169,110,0.24)" : "1px solid transparent",
                                        color: active ? "#E8C97E" : isHov ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.42)",
                                        transition: "all 0.20s ease",
                                        position: "relative"
                                    },
                                    children: [
                                        active && !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                left: 0,
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                width: "3px",
                                                height: "18px",
                                                background: "linear-gradient(to bottom,#C8A96E,#E8C97E)",
                                                borderRadius: "0 3px 3px 0"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "0.95rem",
                                                flexShrink: 0
                                            },
                                            children: item.icon
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 19
                                        }, this),
                                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "0.85rem",
                                                        fontWeight: active ? 600 : 400,
                                                        flex: 1,
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden"
                                                    },
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 23
                                                }, this),
                                                item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        padding: "2px 7px",
                                                        borderRadius: "20px",
                                                        fontSize: "0.63rem",
                                                        fontWeight: 600,
                                                        background: `${item.badge.color}22`,
                                                        color: item.badge.color,
                                                        border: `1px solid ${item.badge.color}40`,
                                                        flexShrink: 0
                                                    },
                                                    children: item.badge.val
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        collapsed && item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                top: "5px",
                                                right: "5px",
                                                width: "7px",
                                                height: "7px",
                                                borderRadius: "50%",
                                                background: item.badge.color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, group.groupe, true, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: collapsed ? "12px 0" : "10px 10px",
                    borderTop: "1px solid rgba(200,169,110,0.08)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: collapsed ? "center" : "flex-start",
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "34px",
                            height: "34px",
                            flexShrink: 0,
                            borderRadius: "9px",
                            background: "linear-gradient(135deg,#C8A96E,#8B6914)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.80rem",
                            fontWeight: 700,
                            color: "#1A1209"
                        },
                        children: "AD"
                    }, void 0, false, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflow: "hidden"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "0.80rem",
                                            fontWeight: 600,
                                            color: "#fff",
                                            whiteSpace: "nowrap"
                                        },
                                        children: "Administrateur"
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "0.66rem",
                                            color: "rgba(255,255,255,0.32)",
                                            whiteSpace: "nowrap"
                                        },
                                        children: "Super Admin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    color: "rgba(255,255,255,0.28)",
                                    padding: "4px",
                                    fontSize: "0.85rem",
                                    transition: "color 0.2s"
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.color = "#D4856A",
                                onMouseLeave: (e)=>e.currentTarget.style.color = "rgba(255,255,255,0.28)",
                                title: "Déconnexion",
                                children: "⎋"
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/test/page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
// ─────────────────────────────────────────────────────────────────────────────
//  DONNÉES MEMBRES
// ─────────────────────────────────────────────────────────────────────────────
const MEMBRES_INIT = [
    {
        id: 1,
        statut: "actif",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
        nom: "Nguyen",
        prenom: "Jean-Baptiste",
        genre: "M",
        dateNaissance: "1955-03-12",
        lieuNaissance: "Libreville",
        nationalite: "Gabonaise",
        telephone: "+241 07 12 34 56",
        email: "jb.nguyen@email.com",
        adresse: "Quartier Louis, Libreville",
        profession: "Magistrat",
        employeur: "Cour Suprême du Gabon",
        role: "Chef de Famille",
        localite: "Libreville",
        situationFamiliale: "Marié",
        nbEnfants: 5,
        dateAdhesion: "1990-01-01",
        cotisationJour: true,
        note: "Patriarche du clan. Référent principal."
    },
    {
        id: 2,
        statut: "actif",
        photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
        nom: "Obame",
        prenom: "Marie-Claire",
        genre: "F",
        dateNaissance: "1962-07-28",
        lieuNaissance: "Port-Gentil",
        nationalite: "Gabonaise",
        telephone: "+241 06 98 76 54",
        email: "mc.obame@email.com",
        adresse: "Akanda, Libreville",
        profession: "Ethnologue",
        employeur: "Université Omar Bongo",
        role: "Gardienne Traditions",
        localite: "Libreville",
        situationFamiliale: "Veuve",
        nbEnfants: 3,
        dateAdhesion: "1992-06-15",
        cotisationJour: true,
        note: "Dépositaire de la mémoire culturelle."
    },
    {
        id: 3,
        statut: "actif",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
        nom: "Mba Nguyen",
        prenom: "Pierre",
        genre: "M",
        dateNaissance: "1978-11-05",
        lieuNaissance: "Franceville",
        nationalite: "Gabonaise",
        telephone: "+241 07 45 67 89",
        email: "pierre.mba@email.com",
        adresse: "Owendo, Libreville",
        profession: "Expert-Comptable",
        employeur: "Cabinet PMN Conseils",
        role: "Trésorier",
        localite: "Port-Gentil",
        situationFamiliale: "Marié",
        nbEnfants: 2,
        dateAdhesion: "2005-03-20",
        cotisationJour: true,
        note: "Gestion rigoureuse des finances."
    },
    {
        id: 4,
        statut: "actif",
        photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80",
        nom: "Mintsa",
        prenom: "Élodie",
        genre: "F",
        dateNaissance: "1985-02-14",
        lieuNaissance: "Oyem",
        nationalite: "Gabonaise",
        telephone: "+241 06 11 22 33",
        email: "elodie.mintsa@email.com",
        adresse: "Franceville",
        profession: "Médecin",
        employeur: "CHU de Franceville",
        role: "Resp. Solidarité",
        localite: "Franceville",
        situationFamiliale: "Célibataire",
        nbEnfants: 0,
        dateAdhesion: "2010-09-01",
        cotisationJour: false,
        note: "Coordonne les actions médicales."
    },
    {
        id: 5,
        statut: "inactif",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
        nom: "Ondo",
        prenom: "Samuel",
        genre: "M",
        dateNaissance: "1980-08-22",
        lieuNaissance: "Libreville",
        nationalite: "Gabonaise",
        telephone: "+241 07 55 44 33",
        email: "samuel.ondo@email.com",
        adresse: "Oyem",
        profession: "Ingénieur Civil",
        employeur: "BTP Gabon SA",
        role: "Resp. Projets",
        localite: "Oyem",
        situationFamiliale: "Marié",
        nbEnfants: 4,
        dateAdhesion: "2008-01-10",
        cotisationJour: false,
        note: "En déplacement au Cameroun."
    },
    {
        id: 6,
        statut: "actif",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
        nom: "Ella",
        prenom: "Christelle",
        genre: "F",
        dateNaissance: "1990-04-30",
        lieuNaissance: "Libreville",
        nationalite: "Gabonaise",
        telephone: "+241 06 77 88 99",
        email: "christelle.ella@email.com",
        adresse: "Quartier Glass, Libreville",
        profession: "Juriste",
        employeur: "Cabinet Ella & Associés",
        role: "Secrétaire Générale",
        localite: "Libreville",
        situationFamiliale: "Mariée",
        nbEnfants: 1,
        dateAdhesion: "2015-07-01",
        cotisationJour: true,
        note: "Gestion administrative et juridique."
    },
    {
        id: 7,
        statut: "actif",
        photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80",
        nom: "Nzamba",
        prenom: "Hervé",
        genre: "M",
        dateNaissance: "1975-09-15",
        lieuNaissance: "Lambaréné",
        nationalite: "Gabonaise",
        telephone: "+241 07 33 22 11",
        email: "herve.nzamba@email.com",
        adresse: "Lambaréné",
        profession: "Journaliste",
        employeur: "Gabon Télévision",
        role: "Porte-Parole",
        localite: "Lambaréné",
        situationFamiliale: "Marié",
        nbEnfants: 3,
        dateAdhesion: "2003-05-12",
        cotisationJour: true,
        note: "Assure la communication du clan."
    },
    {
        id: 8,
        statut: "actif",
        photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
        nom: "Bouanga",
        prenom: "Nadège",
        genre: "F",
        dateNaissance: "1992-12-03",
        lieuNaissance: "Moanda",
        nationalite: "Gabonaise",
        telephone: "+241 06 44 55 66",
        email: "nadege.bouanga@email.com",
        adresse: "Moanda",
        profession: "Enseignante",
        employeur: "Lycée National de Moanda",
        role: "Resp. Jeunesse",
        localite: "Moanda",
        situationFamiliale: "Célibataire",
        nbEnfants: 0,
        dateAdhesion: "2018-01-15",
        cotisationJour: true,
        note: "Encadrement des jeunes membres."
    }
];
const VILLES = [
    "Libreville",
    "Port-Gentil",
    "Franceville",
    "Oyem",
    "Lambaréné",
    "Moanda",
    "Tchibanga",
    "Makokou",
    "Koulamoutou"
];
const ROLES_LIST = [
    "Chef de Famille",
    "Gardienne Traditions",
    "Trésorier",
    "Resp. Solidarité",
    "Resp. Projets",
    "Secrétaire Générale",
    "Porte-Parole",
    "Resp. Jeunesse",
    "Conseiller Économique",
    "Resp. Santé",
    "Resp. Spirituel",
    "Resp. Culture",
    "Membre"
];
const PROFESSIONS = [
    "Magistrat",
    "Ethnologue",
    "Expert-Comptable",
    "Médecin",
    "Ingénieur Civil",
    "Juriste",
    "Journaliste",
    "Enseignante",
    "Entrepreneur",
    "Infirmière",
    "Pasteur",
    "Artiste",
    "Autre"
];
const SITUATIONS = [
    "Célibataire",
    "Marié(e)",
    "Veuf/Veuve",
    "Divorcé(e)",
    "Union libre"
];
function calcAge(d) {
    if (!d) return "—";
    return Math.floor((Date.now() - new Date(d)) / (1000 * 60 * 60 * 24 * 365.25));
}
function StatutBadge({ s }) {
    const c = s === "actif" ? {
        color: "#7EAD8C",
        bg: "rgba(126,173,140,0.12)",
        label: "Actif"
    } : {
        color: "#D4856A",
        bg: "rgba(212,133,106,0.12)",
        label: "Inactif"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "3px 10px",
            borderRadius: "20px",
            background: c.bg,
            color: c.color,
            fontSize: "0.68rem",
            fontWeight: 600,
            border: `1px solid ${c.color}33`,
            whiteSpace: "nowrap"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: c.color
                }
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 210,
                columnNumber: 235
            }, this),
            c.label
        ]
    }, void 0, true, {
        fileName: "[project]/app/test/page.tsx",
        lineNumber: 210,
        columnNumber: 10
    }, this);
}
// ─────────────────────────────────────────────────────────────────────────────
//  FORM HELPERS
// ─────────────────────────────────────────────────────────────────────────────
const baseInput = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "0.87rem",
    color: "#ffffff",
    outline: "none",
    width: "100%",
    fontFamily: "inherit",
    transition: "border-color 0.22s, background 0.22s"
};
function FInput({ value, onChange, type = "text", placeholder, required }) {
    const [f, setF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        value: value || "",
        onChange: onChange,
        placeholder: placeholder,
        required: required,
        onFocus: ()=>setF(true),
        onBlur: ()=>setF(false),
        style: {
            ...baseInput,
            borderColor: f ? "rgba(200,169,110,0.50)" : "rgba(255,255,255,0.10)",
            background: f ? "rgba(200,169,110,0.05)" : "rgba(255,255,255,0.04)"
        }
    }, void 0, false, {
        fileName: "[project]/app/test/page.tsx",
        lineNumber: 220,
        columnNumber: 10
    }, this);
}
function FSelect({ value, onChange, children }) {
    const [f, setF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
        value: value || "",
        onChange: onChange,
        onFocus: ()=>setF(true),
        onBlur: ()=>setF(false),
        style: {
            ...baseInput,
            borderColor: f ? "rgba(200,169,110,0.50)" : "rgba(255,255,255,0.10)",
            background: f ? "rgba(200,169,110,0.05)" : "rgba(255,255,255,0.06)",
            cursor: "pointer",
            appearance: "none",
            WebkitAppearance: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath d='M2 3l3 3 3-3' stroke='rgba(200,169,110,0.6)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
            paddingRight: "34px"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/test/page.tsx",
        lineNumber: 224,
        columnNumber: 10
    }, this);
}
function FLabel({ label, required, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "6px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    fontSize: "0.70rem",
                    fontWeight: 600,
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.36)"
                },
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#D4856A",
                            marginLeft: "3px"
                        },
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 227,
                        columnNumber: 226
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 227,
                columnNumber: 75
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/test/page.tsx",
        lineNumber: 227,
        columnNumber: 10
    }, this);
}
// ─────────────────────────────────────────────────────────────────────────────
//  MODAL MEMBRE
// ─────────────────────────────────────────────────────────────────────────────
function ModalMembre({ membre, onClose, onSave }) {
    const isEdit = !!membre?.id;
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(membre || {
        statut: "actif",
        genre: "M",
        nbEnfants: 0,
        cotisationJour: true,
        localite: "Libreville",
        situationFamiliale: "Célibataire"
    });
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(membre?.photo || null);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("identite");
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const up = (k, v)=>setForm((p)=>({
                ...p,
                [k]: v
            }));
    const TABS = [
        {
            id: "identite",
            label: "Identité"
        },
        {
            id: "contact",
            label: "Contact"
        },
        {
            id: "role",
            label: "Rôle & Famille"
        },
        {
            id: "pro",
            label: "Professionnel"
        },
        {
            id: "notes",
            label: "Notes"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.80)",
            backdropFilter: "blur(8px)",
            zIndex: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px"
        },
        onClick: (e)=>e.target === e.currentTarget && onClose(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes mIn{from{opacity:0;transform:scale(0.96) translateY(12px)}to{opacity:1;transform:scale(1) translateY(0)}}.m2{animation:mIn 0.32s cubic-bezier(0.34,1.1,0.64,1)}.fgrid2{display:grid;grid-template-columns:1fr 1fr;gap:14px}.fgrid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px}@media(max-width:580px){.fgrid2,.fgrid3{grid-template-columns:1fr}}`
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "m2",
                style: {
                    width: "100%",
                    maxWidth: "760px",
                    maxHeight: "92vh",
                    background: "#17171A",
                    border: "1px solid rgba(200,169,110,0.18)",
                    borderRadius: "18px",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "20px 26px 16px",
                            borderBottom: "1px solid rgba(255,255,255,0.07)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Playfair Display',serif",
                                            fontSize: "1.2rem",
                                            fontWeight: 700,
                                            color: "#fff",
                                            margin: 0
                                        },
                                        children: isEdit ? "Modifier le membre" : "Ajouter un membre"
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "0.75rem",
                                            color: "rgba(255,255,255,0.35)",
                                            margin: "4px 0 0"
                                        },
                                        children: isEdit ? `${form.prenom || ""} ${form.nom || ""}` : "Nouveau membre du clan Nguyen"
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    background: "rgba(255,255,255,0.06)",
                                    border: "1px solid rgba(255,255,255,0.10)",
                                    borderRadius: "8px",
                                    width: "32px",
                                    height: "32px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    color: "rgba(255,255,255,0.50)",
                                    fontSize: "0.9rem",
                                    transition: "all 0.2s"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = "rgba(212,133,106,0.15)";
                                    e.currentTarget.style.color = "#D4856A";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                                    e.currentTarget.style.color = "rgba(255,255,255,0.50)";
                                },
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "2px",
                            padding: "10px 26px 0",
                            borderBottom: "1px solid rgba(255,255,255,0.07)",
                            flexShrink: 0,
                            overflowX: "auto"
                        },
                        children: TABS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTab(t.id),
                                style: {
                                    padding: "8px 14px",
                                    borderRadius: "7px 7px 0 0",
                                    border: "none",
                                    background: "none",
                                    cursor: "pointer",
                                    fontSize: "0.80rem",
                                    fontWeight: tab === t.id ? 600 : 400,
                                    color: tab === t.id ? "#E8C97E" : "rgba(255,255,255,0.36)",
                                    borderBottom: tab === t.id ? "2px solid #C8A96E" : "2px solid transparent",
                                    whiteSpace: "nowrap",
                                    transition: "all 0.2s",
                                    fontFamily: "inherit"
                                },
                                children: t.label
                            }, t.id, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: (e)=>{
                            e.preventDefault();
                            onSave({
                                ...form,
                                id: isEdit ? form.id : Date.now(),
                                dateAdhesion: form.dateAdhesion || new Date().toISOString().slice(0, 10)
                            });
                            onClose();
                        },
                        style: {
                            overflowY: "auto",
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "22px 26px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "16px"
                                },
                                children: [
                                    tab === "identite" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: "22px",
                                                    alignItems: "flex-start",
                                                    flexWrap: "wrap"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            alignItems: "center",
                                                            gap: "10px",
                                                            flexShrink: 0
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                onClick: ()=>fileRef.current?.click(),
                                                                style: {
                                                                    width: "100px",
                                                                    height: "122px",
                                                                    borderRadius: "10px",
                                                                    border: "2px dashed rgba(200,169,110,0.32)",
                                                                    overflow: "hidden",
                                                                    cursor: "pointer",
                                                                    background: preview ? "transparent" : "rgba(200,169,110,0.03)",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    position: "relative",
                                                                    transition: "border-color 0.25s"
                                                                },
                                                                onMouseEnter: (e)=>e.currentTarget.style.borderColor = "rgba(200,169,110,0.65)",
                                                                onMouseLeave: (e)=>e.currentTarget.style.borderColor = "rgba(200,169,110,0.32)",
                                                                children: preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: preview,
                                                                    style: {
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        objectFit: "cover"
                                                                    },
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/test/page.tsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 34
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        textAlign: "center",
                                                                        padding: "8px"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: "1.6rem",
                                                                                opacity: 0.35
                                                                            },
                                                                            children: "📷"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/test/page.tsx",
                                                                            lineNumber: 291,
                                                                            columnNumber: 171
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: "0.62rem",
                                                                                color: "rgba(200,169,110,0.50)",
                                                                                lineHeight: 1.4
                                                                            },
                                                                            children: "Photo ID"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/test/page.tsx",
                                                                            lineNumber: 291,
                                                                            columnNumber: 227
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/test/page.tsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 121
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/test/page.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                ref: fileRef,
                                                                type: "file",
                                                                accept: "image/*",
                                                                style: {
                                                                    display: "none"
                                                                },
                                                                onChange: (e)=>{
                                                                    const f = e.target.files[0];
                                                                    if (f) {
                                                                        const u = URL.createObjectURL(f);
                                                                        setPreview(u);
                                                                        up("photo", u);
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/test/page.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>fileRef.current?.click(),
                                                                style: {
                                                                    background: "rgba(200,169,110,0.10)",
                                                                    border: "1px solid rgba(200,169,110,0.25)",
                                                                    borderRadius: "6px",
                                                                    padding: "4px 12px",
                                                                    fontSize: "0.68rem",
                                                                    color: "#C8A96E",
                                                                    cursor: "pointer",
                                                                    fontFamily: "inherit"
                                                                },
                                                                children: preview ? "Changer" : "Ajouter"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/test/page.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/test/page.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1,
                                                            minWidth: "220px",
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: "14px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "fgrid2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                                        label: "Nom",
                                                                        required: true,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FInput, {
                                                                            value: form.nom,
                                                                            onChange: (e)=>up("nom", e.target.value),
                                                                            placeholder: "Nom",
                                                                            required: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/test/page.tsx",
                                                                            lineNumber: 301,
                                                                            columnNumber: 52
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/test/page.tsx",
                                                                        lineNumber: 301,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                                        label: "Prénom",
                                                                        required: true,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FInput, {
                                                                            value: form.prenom,
                                                                            onChange: (e)=>up("prenom", e.target.value),
                                                                            placeholder: "Prénom",
                                                                            required: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/test/page.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 55
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/test/page.tsx",
                                                                        lineNumber: 302,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/test/page.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "fgrid3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                                        label: "Genre",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FSelect, {
                                                                            value: form.genre,
                                                                            onChange: (e)=>up("genre", e.target.value),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "M",
                                                                                    children: "Masculin"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/test/page.tsx",
                                                                                    lineNumber: 305,
                                                                                    columnNumber: 114
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "F",
                                                                                    children: "Féminin"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/test/page.tsx",
                                                                                    lineNumber: 305,
                                                                                    columnNumber: 149
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/test/page.tsx",
                                                                            lineNumber: 305,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/test/page.tsx",
                                                                        lineNumber: 305,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                                        label: "Naissance",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FInput, {
                                                                            type: "date",
                                                                            value: form.dateNaissance,
                                                                            onChange: (e)=>up("dateNaissance", e.target.value)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/test/page.tsx",
                                                                            lineNumber: 306,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/test/page.tsx",
                                                                        lineNumber: 306,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                                        label: "Nationalité",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FInput, {
                                                                            value: form.nationalite,
                                                                            onChange: (e)=>up("nationalite", e.target.value),
                                                                            placeholder: "Gabonaise"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/test/page.tsx",
                                                                            lineNumber: 307,
                                                                            columnNumber: 51
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/test/page.tsx",
                                                                        lineNumber: 307,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/test/page.tsx",
                                                                lineNumber: 304,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                                label: "Lieu de naissance",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FInput, {
                                                                    value: form.lieuNaissance,
                                                                    onChange: (e)=>up("lieuNaissance", e.target.value),
                                                                    placeholder: "Ville"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/test/page.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 55
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/test/page.tsx",
                                                                lineNumber: 309,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/test/page.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fgrid2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                        label: "Statut",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FSelect, {
                                                            value: form.statut,
                                                            onChange: (e)=>up("statut", e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "actif",
                                                                    children: "Actif"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/test/page.tsx",
                                                                    lineNumber: 313,
                                                                    columnNumber: 113
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "inactif",
                                                                    children: "Inactif"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/test/page.tsx",
                                                                    lineNumber: 313,
                                                                    columnNumber: 149
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 42
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/test/page.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                        label: "Date d'adhésion",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FInput, {
                                                            type: "date",
                                                            value: form.dateAdhesion,
                                                            onChange: (e)=>up("dateAdhesion", e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 51
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/test/page.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    tab === "contact" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fgrid2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                        label: "Téléphone",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FInput, {
                                                            value: form.telephone,
                                                            onChange: (e)=>up("telephone", e.target.value),
                                                            placeholder: "+241 07 XX XX XX"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/test/page.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                        label: "Email",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FInput, {
                                                            type: "email",
                                                            value: form.email,
                                                            onChange: (e)=>up("email", e.target.value),
                                                            placeholder: "email@exemple.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/test/page.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                label: "Adresse",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FInput, {
                                                    value: form.adresse,
                                                    onChange: (e)=>up("adresse", e.target.value),
                                                    placeholder: "Quartier, Ville"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/page.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                label: "Localité principale",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FSelect, {
                                                    value: form.localite,
                                                    onChange: (e)=>up("localite", e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Choisir une ville"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 128
                                                        }, this),
                                                        VILLES.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: v,
                                                                children: v
                                                            }, v, false, {
                                                                fileName: "[project]/app/test/page.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 186
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/test/page.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 53
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    tab === "role" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fgrid2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                        label: "Rôle dans le clan",
                                                        required: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FSelect, {
                                                            value: form.role,
                                                            onChange: (e)=>up("role", e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Choisir"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/test/page.tsx",
                                                                    lineNumber: 335,
                                                                    columnNumber: 129
                                                                }, this),
                                                                ROLES_LIST.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: r,
                                                                        children: r
                                                                    }, r, false, {
                                                                        fileName: "[project]/app/test/page.tsx",
                                                                        lineNumber: 335,
                                                                        columnNumber: 181
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 62
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/test/page.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                        label: "Situation familiale",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FSelect, {
                                                            value: form.situationFamiliale,
                                                            onChange: (e)=>up("situationFamiliale", e.target.value),
                                                            children: SITUATIONS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: s,
                                                                    children: s
                                                                }, s, false, {
                                                                    fileName: "[project]/app/test/page.tsx",
                                                                    lineNumber: 336,
                                                                    columnNumber: 169
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 55
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/test/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 334,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fgrid2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                        label: "Nombre d'enfants",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FInput, {
                                                            type: "number",
                                                            value: form.nbEnfants,
                                                            onChange: (e)=>up("nbEnfants", parseInt(e.target.value) || 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 52
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/test/page.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                        label: "Cotisation à jour",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                gap: "16px",
                                                                paddingTop: "6px"
                                                            },
                                                            children: [
                                                                {
                                                                    v: true,
                                                                    l: "Oui"
                                                                },
                                                                {
                                                                    v: false,
                                                                    l: "Non"
                                                                }
                                                            ].map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    style: {
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        gap: "8px",
                                                                        cursor: "pointer",
                                                                        fontSize: "0.87rem",
                                                                        color: form.cotisationJour === o.v ? "#E8C97E" : "rgba(255,255,255,0.45)"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "radio",
                                                                            checked: form.cotisationJour === o.v,
                                                                            onChange: ()=>up("cotisationJour", o.v),
                                                                            style: {
                                                                                accentColor: "#C8A96E",
                                                                                width: "15px",
                                                                                height: "15px",
                                                                                cursor: "pointer"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/test/page.tsx",
                                                                            lineNumber: 344,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        o.l
                                                                    ]
                                                                }, String(o.v), true, {
                                                                    fileName: "[project]/app/test/page.tsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/test/page.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    tab === "pro" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fgrid2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                label: "Profession",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FSelect, {
                                                    value: form.profession,
                                                    onChange: (e)=>up("profession", e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Choisir"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 123
                                                        }, this),
                                                        PROFESSIONS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: p,
                                                                children: p
                                                            }, p, false, {
                                                                fileName: "[project]/app/test/page.tsx",
                                                                lineNumber: 356,
                                                                columnNumber: 176
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/test/page.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 44
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 356,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                                label: "Employeur",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FInput, {
                                                    value: form.employeur,
                                                    onChange: (e)=>up("employeur", e.target.value),
                                                    placeholder: "Nom structure"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/page.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 43
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this),
                                    tab === "notes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FLabel, {
                                        label: "Notes internes",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: form.note || "",
                                            onChange: (e)=>up("note", e.target.value),
                                            placeholder: "Observations, informations complémentaires…",
                                            rows: 7,
                                            style: {
                                                background: "rgba(255,255,255,0.04)",
                                                border: "1px solid rgba(255,255,255,0.10)",
                                                borderRadius: "8px",
                                                padding: "10px 14px",
                                                fontSize: "0.87rem",
                                                color: "#fff",
                                                outline: "none",
                                                width: "100%",
                                                fontFamily: "inherit",
                                                resize: "vertical",
                                                minHeight: "130px"
                                            },
                                            onFocus: (e)=>{
                                                e.target.style.borderColor = "rgba(200,169,110,0.50)";
                                            },
                                            onBlur: (e)=>{
                                                e.target.style.borderColor = "rgba(255,255,255,0.10)";
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/page.tsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "14px 26px 20px",
                                    borderTop: "1px solid rgba(255,255,255,0.07)",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    gap: "10px",
                                    flexShrink: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        style: {
                                            padding: "10px 22px",
                                            borderRadius: "8px",
                                            border: "1px solid rgba(255,255,255,0.12)",
                                            background: "transparent",
                                            color: "rgba(255,255,255,0.52)",
                                            fontSize: "0.84rem",
                                            cursor: "pointer",
                                            fontFamily: "inherit"
                                        },
                                        children: "Annuler"
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        style: {
                                            padding: "10px 28px",
                                            borderRadius: "8px",
                                            background: "linear-gradient(135deg,#C8A96E,#E8C97E)",
                                            border: "none",
                                            color: "#1A1209",
                                            fontSize: "0.84rem",
                                            fontWeight: 700,
                                            cursor: "pointer",
                                            fontFamily: "inherit",
                                            transition: "opacity 0.2s,transform 0.2s"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.opacity = "0.88";
                                            e.currentTarget.style.transform = "scale(1.02)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.opacity = "1";
                                            e.currentTarget.style.transform = "scale(1)";
                                        },
                                        children: isEdit ? "Enregistrer" : "Ajouter le membre"
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 378,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/test/page.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
// ─────────────────────────────────────────────────────────────────────────────
//  PAGE MEMBRES
// ─────────────────────────────────────────────────────────────────────────────
function PageMembres() {
    const [membres, setMembres] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(MEMBRES_INIT);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [fStatut, setFStatut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("tous");
    const [fVille, setFVille] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("toutes");
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toDelete, setToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewM, setViewM] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("nom");
    const [sortDir, setSortDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selIds, setSelIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const filtered = membres.filter((m)=>{
        const q = search.toLowerCase();
        return (!q || `${m.prenom} ${m.nom} ${m.role || ""} ${m.profession || ""} ${m.localite || ""}`.toLowerCase().includes(q)) && (fStatut === "tous" || m.statut === fStatut) && (fVille === "toutes" || m.localite === fVille);
    }).sort((a, b)=>{
        const av = a[sortBy] || "", bv = b[sortBy] || "";
        return av < bv ? -sortDir : av > bv ? sortDir : 0;
    });
    const toggleSort = (col)=>{
        if (sortBy === col) setSortDir((d)=>-d);
        else {
            setSortBy(col);
            setSortDir(1);
        }
    };
    const SortIco = ({ col })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                marginLeft: "3px",
                color: sortBy === col ? "#C8A96E" : "rgba(255,255,255,0.18)",
                fontSize: "0.75rem"
            },
            children: sortBy === col ? sortDir === 1 ? "↑" : "↓" : "⇅"
        }, void 0, false, {
            fileName: "[project]/app/test/page.tsx",
            lineNumber: 412,
            columnNumber: 30
        }, this);
    const handleSave = (data)=>setMembres((p)=>{
            const e = p.find((m)=>m.id === data.id);
            return e ? p.map((m)=>m.id === data.id ? data : m) : [
                ...p,
                data
            ];
        });
    const doDelete = ()=>{
        if (selIds.length > 0) {
            setMembres((p)=>p.filter((m)=>!selIds.includes(m.id)));
            setSelIds([]);
        } else if (toDelete) {
            setMembres((p)=>p.filter((m)=>m.id !== toDelete.id));
        }
        setToDelete(null);
    };
    const COL = "30px 50px 1fr 120px 120px 95px 88px 82px 88px";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "28px 32px",
            background: "#0D0D0F",
            minHeight: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .tr:hover{background:rgba(255,255,255,0.025)!important}
        .ab{background:none;border:none;cursor:pointer;padding:5px;border-radius:6px;color:rgba(255,255,255,0.32);display:flex;align-items:center;transition:all 0.18s}
        .ab:hover{background:rgba(255,255,255,0.08);color:#fff}
        .ab.ed:hover{background:rgba(200,169,110,0.14);color:#C8A96E}
        .ab.dl:hover{background:rgba(212,133,106,0.14);color:#D4856A}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        .fadeUp{animation:fadeUp 0.45s ease both}
      `
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fadeUp",
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "24px",
                    flexWrap: "wrap",
                    gap: "14px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: "'Playfair Display',serif",
                                    fontSize: "1.65rem",
                                    fontWeight: 900,
                                    color: "#fff",
                                    margin: 0
                                },
                                children: "Gestion des Membres"
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 438,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "0.80rem",
                                    color: "rgba(255,255,255,0.36)",
                                    margin: "5px 0 0"
                                },
                                children: [
                                    membres.length,
                                    " membres · ",
                                    membres.filter((m)=>m.statut === "actif").length,
                                    " actifs · ",
                                    membres.filter((m)=>m.cotisationJour).length,
                                    " cotisations à jour"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 439,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setModal({
                                type: "add"
                            }),
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "11px 22px",
                            borderRadius: "10px",
                            background: "linear-gradient(135deg,#C8A96E,#E8C97E)",
                            border: "none",
                            color: "#1A1209",
                            fontSize: "0.84rem",
                            fontWeight: 700,
                            cursor: "pointer",
                            fontFamily: "inherit",
                            boxShadow: "0 4px 20px rgba(200,169,110,0.28)",
                            flexShrink: 0,
                            transition: "opacity 0.2s,transform 0.2s"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.opacity = "0.88";
                            e.currentTarget.style.transform = "translateY(-1px)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.opacity = "1";
                            e.currentTarget.style.transform = "translateY(0)";
                        },
                        children: "+ Ajouter un membre"
                    }, void 0, false, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 443,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fadeUp",
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
                    gap: "12px",
                    marginBottom: "20px",
                    animationDelay: "0.05s"
                },
                children: [
                    {
                        l: "Total",
                        v: membres.length,
                        c: "#C8A96E"
                    },
                    {
                        l: "Actifs",
                        v: membres.filter((m)=>m.statut === "actif").length,
                        c: "#7EAD8C"
                    },
                    {
                        l: "Cotisations OK",
                        v: membres.filter((m)=>m.cotisationJour).length,
                        c: "#8AADCA"
                    },
                    {
                        l: "Inactifs",
                        v: membres.filter((m)=>m.statut === "inactif").length,
                        c: "#D4856A"
                    }
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "#141416",
                            border: "1px solid rgba(255,255,255,0.07)",
                            borderRadius: "11px",
                            padding: "15px 18px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Playfair Display',serif",
                                    fontSize: "1.55rem",
                                    fontWeight: 700,
                                    color: s.c,
                                    lineHeight: 1
                                },
                                children: s.v
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "0.70rem",
                                    color: "rgba(255,255,255,0.35)",
                                    marginTop: "4px"
                                },
                                children: s.l
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 460,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.l, true, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 458,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fadeUp",
                style: {
                    background: "#141416",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "11px",
                    padding: "12px 16px",
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginBottom: "14px",
                    animationDelay: "0.10s"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            flex: 1,
                            minWidth: "180px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    position: "absolute",
                                    left: "11px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    color: "rgba(255,255,255,0.25)",
                                    fontSize: "0.85rem"
                                },
                                children: "🔍"
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 468,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                placeholder: "Rechercher…",
                                style: {
                                    ...baseInput,
                                    paddingLeft: "34px",
                                    borderColor: "rgba(255,255,255,0.08)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 469,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    [
                        {
                            val: fStatut,
                            set: setFStatut,
                            opts: [
                                {
                                    v: "tous",
                                    l: "Tous statuts"
                                },
                                {
                                    v: "actif",
                                    l: "Actifs"
                                },
                                {
                                    v: "inactif",
                                    l: "Inactifs"
                                }
                            ]
                        },
                        {
                            val: fVille,
                            set: setFVille,
                            opts: [
                                {
                                    v: "toutes",
                                    l: "Toutes villes"
                                },
                                ...VILLES.map((v)=>({
                                        v,
                                        l: v
                                    }))
                            ]
                        }
                    ].map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: f.val,
                            onChange: (e)=>f.set(e.target.value),
                            style: {
                                ...baseInput,
                                width: "auto",
                                borderColor: "rgba(255,255,255,0.08)",
                                appearance: "none",
                                WebkitAppearance: "none",
                                cursor: "pointer",
                                paddingRight: "30px",
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath d='M2 3l3 3 3-3' stroke='rgba(255,255,255,0.3)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right 10px center",
                                color: "rgba(255,255,255,0.65)",
                                fontSize: "0.82rem"
                            },
                            children: f.opts.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: o.v,
                                    children: o.l
                                }, o.v, false, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 28
                                }, this))
                        }, i, false, {
                            fileName: "[project]/app/test/page.tsx",
                            lineNumber: 475,
                            columnNumber: 11
                        }, this)),
                    selIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setToDelete({
                                multi: true
                            }),
                        style: {
                            marginLeft: "auto",
                            padding: "7px 14px",
                            borderRadius: "7px",
                            background: "rgba(212,133,106,0.12)",
                            border: "1px solid rgba(212,133,106,0.25)",
                            color: "#D4856A",
                            fontSize: "0.78rem",
                            cursor: "pointer",
                            fontFamily: "inherit"
                        },
                        children: [
                            "Supprimer (",
                            selIds.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 479,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fadeUp",
                style: {
                    background: "#141416",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "13px",
                    overflow: "hidden",
                    animationDelay: "0.15s"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: COL,
                            padding: "0 14px",
                            borderBottom: "1px solid rgba(255,255,255,0.07)",
                            background: "rgba(255,255,255,0.015)",
                            alignItems: "center",
                            gap: "10px",
                            minWidth: "860px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "13px 0"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: selIds.length === filtered.length && filtered.length > 0,
                                    onChange: ()=>setSelIds((p)=>p.length === filtered.length ? [] : filtered.map((m)=>m.id)),
                                    style: {
                                        accentColor: "#C8A96E",
                                        width: "14px",
                                        height: "14px",
                                        cursor: "pointer"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 487,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 486,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 489,
                                columnNumber: 11
                            }, this),
                            [
                                {
                                    c: "nom",
                                    l: "Nom & Prénom"
                                },
                                {
                                    c: "role",
                                    l: "Rôle"
                                },
                                {
                                    c: "profession",
                                    l: "Profession"
                                },
                                {
                                    c: "localite",
                                    l: "Ville"
                                },
                                {
                                    c: "statut",
                                    l: "Statut"
                                },
                                {
                                    c: "cotisationJour",
                                    l: "Cotis."
                                }
                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleSort(h.c),
                                    style: {
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        fontFamily: "inherit",
                                        color: "rgba(255,255,255,0.40)",
                                        fontSize: "0.68rem",
                                        fontWeight: 600,
                                        letterSpacing: "0.10em",
                                        textTransform: "uppercase",
                                        padding: "13px 0",
                                        display: "flex",
                                        alignItems: "center",
                                        textAlign: "left"
                                    },
                                    children: [
                                        h.l,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SortIco, {
                                            col: h.c
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/page.tsx",
                                            lineNumber: 492,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, h.c, true, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 491,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "0.68rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.10em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.22)",
                                    padding: "13px 0"
                                },
                                children: "Actions"
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 495,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 485,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            overflowX: "auto"
                        },
                        children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: "center",
                                padding: "50px 20px",
                                color: "rgba(255,255,255,0.22)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: "1.8rem",
                                        marginBottom: "10px",
                                        opacity: 0.4
                                    },
                                    children: "🔍"
                                }, void 0, false, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 502,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: "0.86rem"
                                    },
                                    children: "Aucun membre trouvé"
                                }, void 0, false, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 503,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/test/page.tsx",
                            lineNumber: 501,
                            columnNumber: 13
                        }, this) : filtered.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tr",
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: COL,
                                    padding: "0 14px",
                                    borderBottom: i < filtered.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                                    alignItems: "center",
                                    gap: "10px",
                                    minWidth: "860px",
                                    background: selIds.includes(m.id) ? "rgba(200,169,110,0.04)" : "transparent",
                                    transition: "background 0.18s"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: selIds.includes(m.id),
                                            onChange: ()=>setSelIds((p)=>p.includes(m.id) ? p.filter((i)=>i !== m.id) : [
                                                        ...p,
                                                        m.id
                                                    ]),
                                            style: {
                                                accentColor: "#C8A96E",
                                                width: "14px",
                                                height: "14px",
                                                cursor: "pointer"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/page.tsx",
                                            lineNumber: 507,
                                            columnNumber: 20
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 507,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "9px 0"
                                        },
                                        children: m.photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: m.photo,
                                            alt: "",
                                            style: {
                                                width: "36px",
                                                height: "36px",
                                                borderRadius: "8px",
                                                objectFit: "cover",
                                                objectPosition: "top",
                                                border: "1px solid rgba(200,169,110,0.18)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/page.tsx",
                                            lineNumber: 511,
                                            columnNumber: 28
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "36px",
                                                height: "36px",
                                                borderRadius: "8px",
                                                background: "linear-gradient(135deg,rgba(200,169,110,0.22),rgba(200,169,110,0.07))",
                                                border: "1px solid rgba(200,169,110,0.18)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "0.80rem",
                                                color: "#C8A96E",
                                                fontWeight: 700
                                            },
                                            children: [
                                                (m.prenom || "?")[0],
                                                (m.nom || "?")[0]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "9px 0"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "0.86rem",
                                                    fontWeight: 600,
                                                    color: "#fff",
                                                    marginBottom: "2px"
                                                },
                                                children: [
                                                    m.prenom,
                                                    " ",
                                                    m.nom
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "0.70rem",
                                                    color: "rgba(255,255,255,0.32)"
                                                },
                                                children: [
                                                    calcAge(m.dateNaissance),
                                                    " ans · ",
                                                    m.genre === "M" ? "H" : "F"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 521,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 519,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "0.75rem",
                                            color: "rgba(200,169,110,0.78)",
                                            lineHeight: 1.3
                                        },
                                        children: m.role || "—"
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 524,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "0.75rem",
                                            color: "rgba(255,255,255,0.45)"
                                        },
                                        children: m.profession || "—"
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 525,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "0.75rem",
                                            color: "rgba(255,255,255,0.40)"
                                        },
                                        children: [
                                            "📍 ",
                                            m.localite
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 526,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatutBadge, {
                                            s: m.statut
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/page.tsx",
                                            lineNumber: 527,
                                            columnNumber: 20
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 527,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "0.68rem",
                                            fontWeight: 600,
                                            color: m.cotisationJour ? "#7EAD8C" : "#D4856A"
                                        },
                                        children: m.cotisationJour ? "✓ À jour" : "✗ Retard"
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 528,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "3px",
                                            padding: "9px 0"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "ab",
                                                title: "Voir",
                                                onClick: ()=>setViewM(m),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "13",
                                                    height: "13",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 533,
                                                            columnNumber: 139
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 533,
                                                            columnNumber: 195
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/test/page.tsx",
                                                    lineNumber: 533,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 532,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "ab ed",
                                                title: "Modifier",
                                                onClick: ()=>setModal({
                                                        type: "edit",
                                                        membre: m
                                                    }),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "13",
                                                    height: "13",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 536,
                                                            columnNumber: 139
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 536,
                                                            columnNumber: 204
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/test/page.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 535,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "ab dl",
                                                title: "Supprimer",
                                                onClick: ()=>setToDelete(m),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "13",
                                                    height: "13",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "3 6 5 6 21 6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 539,
                                                            columnNumber: 139
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 539,
                                                            columnNumber: 172
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M10 11v6M14 11v6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 539,
                                                            columnNumber: 227
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/page.tsx",
                                                            lineNumber: 539,
                                                            columnNumber: 255
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/test/page.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 538,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 531,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, m.id, true, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 506,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 499,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "10px 18px",
                            borderTop: "1px solid rgba(255,255,255,0.05)",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "0.72rem",
                                    color: "rgba(255,255,255,0.26)"
                                },
                                children: [
                                    filtered.length,
                                    " résultat",
                                    filtered.length > 1 ? "s" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 548,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "0.68rem",
                                    color: "rgba(200,169,110,0.35)"
                                },
                                children: [
                                    "Clan Nguyen · ",
                                    new Date().getFullYear()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 549,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 547,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 483,
                columnNumber: 7
            }, this),
            viewM && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.75)",
                    backdropFilter: "blur(7px)",
                    zIndex: 300,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px"
                },
                onClick: (e)=>e.target === e.currentTarget && setViewM(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "100%",
                        maxWidth: "520px",
                        background: "#17171A",
                        border: "1px solid rgba(200,169,110,0.18)",
                        borderRadius: "18px",
                        overflow: "hidden",
                        animation: "mIn 0.32s cubic-bezier(0.34,1.1,0.64,1)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "linear-gradient(135deg,#1A1208,#0f0a05)",
                                padding: "24px 24px 20px",
                                borderBottom: "1px solid rgba(200,169,110,0.10)",
                                display: "flex",
                                gap: "18px",
                                alignItems: "flex-start"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flexShrink: 0
                                    },
                                    children: viewM.photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: viewM.photo,
                                        alt: "",
                                        style: {
                                            width: "76px",
                                            height: "90px",
                                            borderRadius: "10px",
                                            objectFit: "cover",
                                            objectPosition: "top",
                                            border: "2px solid rgba(200,169,110,0.28)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 561,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "76px",
                                            height: "90px",
                                            borderRadius: "10px",
                                            background: "rgba(200,169,110,0.10)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "1.6rem",
                                            color: "#C8A96E",
                                            border: "2px solid rgba(200,169,110,0.22)"
                                        },
                                        children: [
                                            (viewM.prenom || "?")[0],
                                            (viewM.nom || "?")[0]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 562,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 559,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontFamily: "'Playfair Display',serif",
                                                fontSize: "1.22rem",
                                                color: "#fff",
                                                margin: "0 0 5px"
                                            },
                                            children: [
                                                viewM.prenom,
                                                " ",
                                                viewM.nom
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/page.tsx",
                                            lineNumber: 566,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "0.78rem",
                                                color: "#C8A96E",
                                                marginBottom: "10px"
                                            },
                                            children: viewM.role
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/page.tsx",
                                            lineNumber: 567,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "8px",
                                                flexWrap: "wrap"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatutBadge, {
                                                    s: viewM.statut
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/page.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        padding: "3px 10px",
                                                        borderRadius: "20px",
                                                        fontSize: "0.68rem",
                                                        background: viewM.cotisationJour ? "rgba(126,173,140,0.12)" : "rgba(212,133,106,0.12)",
                                                        color: viewM.cotisationJour ? "#7EAD8C" : "#D4856A",
                                                        border: `1px solid ${viewM.cotisationJour ? "#7EAD8C33" : "#D4856A33"}`
                                                    },
                                                    children: [
                                                        "Cotisation ",
                                                        viewM.cotisationJour ? "à jour" : "en retard"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/test/page.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/page.tsx",
                                            lineNumber: 568,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 565,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setViewM(null),
                                    style: {
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.10)",
                                        borderRadius: "8px",
                                        width: "30px",
                                        height: "30px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        color: "rgba(255,255,255,0.45)",
                                        fontSize: "0.85rem",
                                        flexShrink: 0
                                    },
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 575,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/test/page.tsx",
                            lineNumber: 558,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "20px 24px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px"
                            },
                            children: [
                                [
                                    {
                                        ico: "📅",
                                        l: "Naissance",
                                        v: `${viewM.dateNaissance ? new Date(viewM.dateNaissance).toLocaleDateString("fr-FR") : "—"} · ${calcAge(viewM.dateNaissance)} ans`
                                    },
                                    {
                                        ico: "📍",
                                        l: "Localisation",
                                        v: `${viewM.lieuNaissance || "—"} · ${viewM.adresse || "—"}`
                                    },
                                    {
                                        ico: "💼",
                                        l: "Profession",
                                        v: `${viewM.profession || "—"}${viewM.employeur ? ` — ${viewM.employeur}` : ""}`
                                    },
                                    {
                                        ico: "💑",
                                        l: "Famille",
                                        v: `${viewM.situationFamiliale || "—"} · ${viewM.nbEnfants || 0} enfant(s)`
                                    },
                                    {
                                        ico: "📞",
                                        l: "Contact",
                                        v: `${viewM.telephone || "—"} · ${viewM.email || "—"}`
                                    },
                                    {
                                        ico: "🗓️",
                                        l: "Adhésion",
                                        v: viewM.dateAdhesion ? new Date(viewM.dateAdhesion).toLocaleDateString("fr-FR") : "—"
                                    }
                                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "12px",
                                            alignItems: "flex-start"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "0.88rem",
                                                    flexShrink: 0,
                                                    width: "22px",
                                                    textAlign: "center"
                                                },
                                                children: r.ico
                                            }, void 0, false, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 587,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.62rem",
                                                            letterSpacing: "0.14em",
                                                            textTransform: "uppercase",
                                                            color: "rgba(255,255,255,0.26)",
                                                            marginBottom: "2px"
                                                        },
                                                        children: r.l
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/test/page.tsx",
                                                        lineNumber: 589,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.83rem",
                                                            color: "rgba(255,255,255,0.68)"
                                                        },
                                                        children: r.v
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/test/page.tsx",
                                                        lineNumber: 590,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 588,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, r.l, true, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 586,
                                        columnNumber: 17
                                    }, this)),
                                viewM.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "12px 14px",
                                        borderRadius: "9px",
                                        background: "rgba(255,255,255,0.03)",
                                        border: "1px solid rgba(255,255,255,0.07)",
                                        marginTop: "4px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "0.62rem",
                                                letterSpacing: "0.14em",
                                                textTransform: "uppercase",
                                                color: "rgba(255,255,255,0.26)",
                                                marginBottom: "6px"
                                            },
                                            children: "Notes"
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/page.tsx",
                                            lineNumber: 595,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "0.83rem",
                                                color: "rgba(255,255,255,0.52)",
                                                margin: 0,
                                                lineHeight: 1.7
                                            },
                                            children: viewM.note
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/page.tsx",
                                            lineNumber: 596,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 594,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/test/page.tsx",
                            lineNumber: 577,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "14px 24px 20px",
                                borderTop: "1px solid rgba(255,255,255,0.06)",
                                display: "flex",
                                gap: "10px",
                                justifyContent: "flex-end"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setViewM(null);
                                        setModal({
                                            type: "edit",
                                            membre: viewM
                                        });
                                    },
                                    style: {
                                        padding: "9px 18px",
                                        borderRadius: "8px",
                                        background: "rgba(200,169,110,0.12)",
                                        border: "1px solid rgba(200,169,110,0.25)",
                                        color: "#C8A96E",
                                        fontSize: "0.80rem",
                                        cursor: "pointer",
                                        fontFamily: "inherit"
                                    },
                                    children: "✏️ Modifier"
                                }, void 0, false, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 600,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setViewM(null),
                                    style: {
                                        padding: "9px 18px",
                                        borderRadius: "8px",
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.10)",
                                        color: "rgba(255,255,255,0.52)",
                                        fontSize: "0.80rem",
                                        cursor: "pointer",
                                        fontFamily: "inherit"
                                    },
                                    children: "Fermer"
                                }, void 0, false, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 601,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/test/page.tsx",
                            lineNumber: 599,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/test/page.tsx",
                    lineNumber: 557,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 555,
                columnNumber: 9
            }, this),
            modal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalMembre, {
                membre: modal.type === "edit" ? modal.membre : null,
                onClose: ()=>setModal(null),
                onSave: handleSave
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 607,
                columnNumber: 15
            }, this),
            toDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.82)",
                    backdropFilter: "blur(8px)",
                    zIndex: 400,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "#17171A",
                        border: "1px solid rgba(212,133,106,0.28)",
                        borderRadius: "16px",
                        padding: "32px",
                        maxWidth: "380px",
                        width: "100%",
                        textAlign: "center",
                        animation: "mIn 0.28s cubic-bezier(0.34,1.1,0.64,1)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: "2.2rem",
                                marginBottom: "14px"
                            },
                            children: "⚠️"
                        }, void 0, false, {
                            fileName: "[project]/app/test/page.tsx",
                            lineNumber: 612,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontFamily: "'Playfair Display',serif",
                                fontSize: "1.15rem",
                                color: "#fff",
                                margin: "0 0 10px"
                            },
                            children: "Supprimer ?"
                        }, void 0, false, {
                            fileName: "[project]/app/test/page.tsx",
                            lineNumber: 613,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "0.86rem",
                                color: "rgba(255,255,255,0.45)",
                                lineHeight: 1.65,
                                margin: "0 0 24px"
                            },
                            children: [
                                selIds.length > 0 ? `Supprimer ${selIds.length} membre(s) sélectionné(s) ?` : `Supprimer ${toDelete.prenom} ${toDelete.nom} ?`,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 615,
                                    columnNumber: 137
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "rgba(212,133,106,0.70)",
                                        fontSize: "0.78rem"
                                    },
                                    children: "Cette action est irréversible."
                                }, void 0, false, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 616,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/test/page.tsx",
                            lineNumber: 614,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "10px",
                                justifyContent: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setToDelete(null),
                                    style: {
                                        padding: "9px 20px",
                                        borderRadius: "8px",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        background: "transparent",
                                        color: "rgba(255,255,255,0.50)",
                                        fontSize: "0.83rem",
                                        cursor: "pointer",
                                        fontFamily: "inherit"
                                    },
                                    children: "Annuler"
                                }, void 0, false, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 619,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: doDelete,
                                    style: {
                                        padding: "9px 20px",
                                        borderRadius: "8px",
                                        background: "linear-gradient(135deg,#c0392b,#e74c3c)",
                                        border: "none",
                                        color: "#fff",
                                        fontSize: "0.83rem",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        fontFamily: "inherit"
                                    },
                                    children: "Supprimer"
                                }, void 0, false, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 620,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/test/page.tsx",
                            lineNumber: 618,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/test/page.tsx",
                    lineNumber: 611,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 610,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/test/page.tsx",
        lineNumber: 424,
        columnNumber: 5
    }, this);
}
// ─────────────────────────────────────────────────────────────────────────────
//  DASHBOARD
// ─────────────────────────────────────────────────────────────────────────────
function PageDashboard({ onNavigate }) {
    const STATS = [
        {
            l: "Membres actifs",
            v: 10,
            c: "#7EAD8C",
            i: "👥",
            t: "+2 ce mois"
        },
        {
            l: "Événements à venir",
            v: 3,
            c: "#C8A96E",
            i: "📅",
            t: "Prochain: 14 Fév"
        },
        {
            l: "Albums & Photos",
            v: 24,
            c: "#8AADCA",
            i: "📸",
            t: "180 photos"
        },
        {
            l: "Messages reçus",
            v: 8,
            c: "#D4856A",
            i: "✉️",
            t: "3 non lus"
        },
        {
            l: "Projets en cours",
            v: 2,
            c: "#B8956A",
            i: "🏗️",
            t: "2 terminés"
        },
        {
            l: "Demandes solidarité",
            v: 5,
            c: "#9B8EA0",
            i: "🤝",
            t: "2 urgentes"
        }
    ];
    const ACTS = [
        {
            text: "Élodie Mintsa ajoutée au clan",
            time: "Il y a 2h",
            c: "#7EAD8C"
        },
        {
            text: "Mariage Rodrigue & Cynthia — 14 Fév",
            time: "Il y a 5h",
            c: "#C8A96E"
        },
        {
            text: "Nouveau message de Christelle Ella",
            time: "Il y a 1 jour",
            c: "#D4856A"
        },
        {
            text: "Demande aide médicale — Famille Nkoghe",
            time: "Il y a 2 jours",
            c: "#8AADCA"
        },
        {
            text: "Album 'Fête du Clan 2024' publié",
            time: "Il y a 3 jours",
            c: "#B8956A"
        },
        {
            text: "Pose 1ère pierre Moanda validée",
            time: "Il y a 4 jours",
            c: "#7EAD8C"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "28px 32px",
            background: "#0D0D0F",
            minHeight: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}.fu{animation:fadeUp 0.4s ease both}`
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 652,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fu",
                style: {
                    marginBottom: "28px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontFamily: "'Playfair Display',serif",
                            fontSize: "1.65rem",
                            fontWeight: 900,
                            color: "#fff",
                            margin: 0
                        },
                        children: "Tableau de bord"
                    }, void 0, false, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 654,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "0.78rem",
                            color: "rgba(255,255,255,0.35)",
                            margin: "5px 0 0"
                        },
                        children: [
                            "Bonjour, Administrateur · ",
                            new Date().toLocaleDateString("fr-FR", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 655,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 653,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fu",
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                    gap: "12px",
                    marginBottom: "24px",
                    animationDelay: "0.05s"
                },
                children: STATS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "#141416",
                            border: "1px solid rgba(255,255,255,0.07)",
                            borderRadius: "13px",
                            padding: "18px",
                            position: "relative",
                            overflow: "hidden",
                            transition: "border-color 0.25s,box-shadow 0.25s",
                            cursor: "default",
                            animationDelay: `${i * 0.04}s`
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.borderColor = `${s.c}40`;
                            e.currentTarget.style.boxShadow = `0 0 0 1px ${s.c}18`;
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                            e.currentTarget.style.boxShadow = "none";
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: "-15px",
                                    right: "-15px",
                                    width: "70px",
                                    height: "70px",
                                    borderRadius: "50%",
                                    background: `radial-gradient(circle,${s.c}18,transparent 70%)`,
                                    pointerEvents: "none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 665,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: "12px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "1.2rem"
                                        },
                                        children: s.i
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 667,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "0.62rem",
                                            color: s.c,
                                            background: `${s.c}18`,
                                            border: `1px solid ${s.c}30`,
                                            padding: "2px 8px",
                                            borderRadius: "20px"
                                        },
                                        children: s.t
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 668,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 666,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Playfair Display',serif",
                                    fontSize: "1.8rem",
                                    fontWeight: 700,
                                    color: s.c,
                                    lineHeight: 1,
                                    marginBottom: "4px"
                                },
                                children: s.v
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 670,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "0.72rem",
                                    color: "rgba(255,255,255,0.36)"
                                },
                                children: s.l
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 671,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.l, true, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 662,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 660,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fu",
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1.4fr",
                    gap: "14px",
                    alignItems: "start",
                    animationDelay: "0.12s"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "#141416",
                            border: "1px solid rgba(255,255,255,0.07)",
                            borderRadius: "13px",
                            padding: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: "'Playfair Display',serif",
                                    fontSize: "0.98rem",
                                    color: "#fff",
                                    margin: "0 0 16px"
                                },
                                children: "Actions rapides"
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 678,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "7px"
                                },
                                children: [
                                    {
                                        l: "Ajouter un membre",
                                        i: "👤",
                                        p: "membres",
                                        c: "#C8A96E"
                                    },
                                    {
                                        l: "Créer un événement",
                                        i: "📅",
                                        p: "evenements",
                                        c: "#7EAD8C"
                                    },
                                    {
                                        l: "Ajouter des photos",
                                        i: "📸",
                                        p: "albums",
                                        c: "#8AADCA"
                                    },
                                    {
                                        l: "Voir les messages",
                                        i: "✉️",
                                        p: "messages",
                                        c: "#D4856A"
                                    },
                                    {
                                        l: "Demandes solidarité",
                                        i: "🤝",
                                        p: "solidarite",
                                        c: "#9B8EA0"
                                    }
                                ].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNavigate(a.p),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "11px",
                                            padding: "10px 12px",
                                            borderRadius: "9px",
                                            background: "rgba(255,255,255,0.03)",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            cursor: "pointer",
                                            textAlign: "left",
                                            width: "100%",
                                            fontFamily: "inherit",
                                            color: "rgba(255,255,255,0.60)",
                                            fontSize: "0.83rem",
                                            transition: "all 0.22s"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.background = "rgba(200,169,110,0.10)";
                                            e.currentTarget.style.borderColor = "rgba(200,169,110,0.30)";
                                            e.currentTarget.style.transform = "translateY(-1px)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                                            e.currentTarget.style.transform = "translateY(0)";
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    width: "30px",
                                                    height: "30px",
                                                    borderRadius: "8px",
                                                    background: `${a.c}18`,
                                                    border: `1px solid ${a.c}30`,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "0.85rem",
                                                    flexShrink: 0
                                                },
                                                children: a.i
                                            }, void 0, false, {
                                                fileName: "[project]/app/test/page.tsx",
                                                lineNumber: 690,
                                                columnNumber: 17
                                            }, this),
                                            a.l
                                        ]
                                    }, a.l, true, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 687,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 679,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 677,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "#141416",
                            border: "1px solid rgba(255,255,255,0.07)",
                            borderRadius: "13px",
                            padding: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: "'Playfair Display',serif",
                                    fontSize: "0.98rem",
                                    color: "#fff",
                                    margin: "0 0 16px"
                                },
                                children: "Activité récente"
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 698,
                                columnNumber: 11
                            }, this),
                            ACTS.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "12px",
                                        alignItems: "flex-start",
                                        padding: "11px 0",
                                        borderBottom: i < ACTS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "7px",
                                                height: "7px",
                                                borderRadius: "50%",
                                                background: a.c,
                                                flexShrink: 0,
                                                marginTop: "5px",
                                                boxShadow: `0 0 5px ${a.c}50`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/page.tsx",
                                            lineNumber: 701,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "0.82rem",
                                                        color: "rgba(255,255,255,0.62)",
                                                        margin: 0,
                                                        lineHeight: 1.4
                                                    },
                                                    children: a.text
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/page.tsx",
                                                    lineNumber: 703,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "0.66rem",
                                                        color: "rgba(255,255,255,0.26)",
                                                        marginTop: "3px",
                                                        display: "block"
                                                    },
                                                    children: a.time
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/page.tsx",
                                                    lineNumber: 704,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/page.tsx",
                                            lineNumber: 702,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/test/page.tsx",
                                    lineNumber: 700,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 697,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 676,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/test/page.tsx",
        lineNumber: 651,
        columnNumber: 5
    }, this);
}
// ─────────────────────────────────────────────────────────────────────────────
//  PAGE PLACEHOLDER
// ─────────────────────────────────────────────────────────────────────────────
function PagePlaceholder({ titre, icon, onNavigate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "28px 32px",
            background: "#0D0D0F",
            minHeight: "100%",
            display: "flex",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: "24px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontFamily: "'Playfair Display',serif",
                            fontSize: "1.65rem",
                            fontWeight: 900,
                            color: "#fff",
                            margin: 0
                        },
                        children: titre
                    }, void 0, false, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 721,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "0.78rem",
                            color: "rgba(255,255,255,0.35)",
                            margin: "5px 0 0"
                        },
                        children: "Gestion du contenu"
                    }, void 0, false, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 722,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 720,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        background: "#141416",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: "18px",
                        padding: "52px 44px",
                        maxWidth: "380px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: "3rem",
                                marginBottom: "18px",
                                opacity: 0.5
                            },
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/app/test/page.tsx",
                            lineNumber: 726,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "'Playfair Display',serif",
                                fontSize: "1.2rem",
                                color: "#fff",
                                margin: "0 0 10px"
                            },
                            children: "Section en développement"
                        }, void 0, false, {
                            fileName: "[project]/app/test/page.tsx",
                            lineNumber: 727,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "0.86rem",
                                color: "rgba(255,255,255,0.36)",
                                lineHeight: 1.7,
                                margin: "0 0 24px"
                            },
                            children: "Cette page sera construite sur le même modèle que la gestion des membres."
                        }, void 0, false, {
                            fileName: "[project]/app/test/page.tsx",
                            lineNumber: 728,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onNavigate("dashboard"),
                            style: {
                                padding: "10px 24px",
                                borderRadius: "8px",
                                background: "linear-gradient(135deg,#C8A96E,#E8C97E)",
                                border: "none",
                                color: "#1A1209",
                                fontSize: "0.83rem",
                                fontWeight: 600,
                                cursor: "pointer",
                                fontFamily: "inherit"
                            },
                            children: "← Tableau de bord"
                        }, void 0, false, {
                            fileName: "[project]/app/test/page.tsx",
                            lineNumber: 729,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/test/page.tsx",
                    lineNumber: 725,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 724,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/test/page.tsx",
        lineNumber: 719,
        columnNumber: 5
    }, this);
}
// ─────────────────────────────────────────────────────────────────────────────
//  APP PRINCIPALE
// ─────────────────────────────────────────────────────────────────────────────
const PAGE_META = {
    dashboard: {
        titre: "Tableau de bord",
        icon: "⊞"
    },
    membres: {
        titre: "Membres",
        icon: "👥"
    },
    evenements: {
        titre: "Événements",
        icon: "📅"
    },
    albums: {
        titre: "Albums & Photos",
        icon: "📸"
    },
    histoire: {
        titre: "Notre Histoire",
        icon: "📖"
    },
    valeurs: {
        titre: "Valeurs & Vocation",
        icon: "💛"
    },
    projets: {
        titre: "Projets",
        icon: "🏗️"
    },
    solidarite: {
        titre: "Solidarité",
        icon: "🤝"
    },
    immobilier: {
        titre: "Immobilier & Foncier",
        icon: "🏠"
    },
    messages: {
        titre: "Messages",
        icon: "✉️"
    },
    utilisateurs: {
        titre: "Utilisateurs Admin",
        icon: "🔐"
    },
    parametres: {
        titre: "Paramètres",
        icon: "⚙️"
    }
};
function AdminApp() {
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const check = ()=>{
            const m = window.innerWidth < 900;
            setIsMobile(m);
            if (m) setCollapsed(false);
        };
        check();
        window.addEventListener("resize", check, {
            passive: true
        });
        return ()=>window.removeEventListener("resize", check);
    }, []);
    const navigate = (page)=>{
        setCurrentPage(page);
        if (isMobile) setMobileOpen(false);
    };
    const renderPage = ()=>{
        if (currentPage === "dashboard") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageDashboard, {
            onNavigate: navigate
        }, void 0, false, {
            fileName: "[project]/app/test/page.tsx",
            lineNumber: 772,
            columnNumber: 45
        }, this);
        if (currentPage === "membres") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageMembres, {}, void 0, false, {
            fileName: "[project]/app/test/page.tsx",
            lineNumber: 773,
            columnNumber: 45
        }, this);
        const meta = PAGE_META[currentPage] || {
            titre: currentPage,
            icon: "📄"
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PagePlaceholder, {
            titre: meta.titre,
            icon: meta.icon,
            onNavigate: navigate
        }, void 0, false, {
            fileName: "[project]/app/test/page.tsx",
            lineNumber: 775,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            height: "100vh",
            background: "#0D0D0F",
            overflow: "hidden",
            fontFamily: "'DM Sans','Segoe UI',sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@700;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px;height:4px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:rgba(200,169,110,0.22);border-radius:4px}
        ::-webkit-scrollbar-thumb:hover{background:rgba(200,169,110,0.42)}
        @keyframes mIn{from{opacity:0;transform:scale(0.96) translateY(12px)}to{opacity:1;transform:scale(1) translateY(0)}}
      `
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 780,
                columnNumber: 7
            }, this),
            isMobile && mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setMobileOpen(false),
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.60)",
                    zIndex: 40,
                    backdropFilter: "blur(4px)"
                }
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 792,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: isMobile ? "fixed" : "relative",
                    left: isMobile ? mobileOpen ? "0" : "-270px" : 0,
                    top: 0,
                    bottom: 0,
                    zIndex: 50,
                    width: collapsed && !isMobile ? "68px" : "256px",
                    flexShrink: 0,
                    transition: "left 0.32s cubic-bezier(0.4,0,0.2,1),width 0.32s cubic-bezier(0.4,0,0.2,1)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Sidebar, {
                    collapsed: collapsed && !isMobile,
                    onToggle: ()=>setCollapsed((p)=>!p),
                    currentPage: currentPage,
                    onNavigate: navigate
                }, void 0, false, {
                    fileName: "[project]/app/test/page.tsx",
                    lineNumber: 804,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 796,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    minWidth: 0
                },
                children: [
                    isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: "52px",
                            background: "#141416",
                            borderBottom: "1px solid rgba(200,169,110,0.10)",
                            display: "flex",
                            alignItems: "center",
                            padding: "0 14px",
                            gap: "12px",
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileOpen((p)=>!p),
                                style: {
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "4px",
                                    padding: "4px"
                                },
                                children: [
                                    0,
                                    1,
                                    2
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "block",
                                            width: "18px",
                                            height: "1.5px",
                                            background: "#C8A96E",
                                            borderRadius: "2px"
                                        }
                                    }, i, false, {
                                        fileName: "[project]/app/test/page.tsx",
                                        lineNumber: 813,
                                        columnNumber: 31
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 812,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Playfair Display',serif",
                                    fontSize: "0.95rem",
                                    color: "#fff",
                                    fontWeight: 700
                                },
                                children: "Admin — Nguyen Family"
                            }, void 0, false, {
                                fileName: "[project]/app/test/page.tsx",
                                lineNumber: 815,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 811,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            overflowY: "auto"
                        },
                        children: renderPage()
                    }, void 0, false, {
                        fileName: "[project]/app/test/page.tsx",
                        lineNumber: 818,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/test/page.tsx",
                lineNumber: 808,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/test/page.tsx",
        lineNumber: 779,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_test_page_tsx_bc0b45ea._.js.map