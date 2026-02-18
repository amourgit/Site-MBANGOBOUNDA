module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/theme/themeLoader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/theme/themeLoader.ts
__turbopack_context__.s([
    "ThemeLoader",
    ()=>ThemeLoader
]);
class ThemeLoader {
    static instance;
    currentTheme = null;
    availableThemes = new Set();
    constructor(){
    // Pattern singleton pour avoir une instance unique
    }
    static getInstance() {
        if (!ThemeLoader.instance) {
            ThemeLoader.instance = new ThemeLoader();
        }
        return ThemeLoader.instance;
    }
    /**
   * Charge un thème depuis /public/themes/
   */ async loadTheme(themeName) {
        try {
            const response = await fetch(`/themes/${themeName}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load theme: ${themeName}`);
            }
            const theme = await response.json();
            this.validateTheme(theme);
            this.currentTheme = theme;
            this.availableThemes.add(themeName);
            return theme;
        } catch (error) {
            console.error(`Error loading theme ${themeName}:`, error);
            throw error;
        }
    }
    /**
   * Applique un thème en injectant les variables CSS
   */ applyTheme(theme, isDark = false) {
        if ("TURBOPACK compile-time truthy", 1) return; // SSR check
        //TURBOPACK unreachable
        ;
        const root = undefined;
    }
    /**
   * Applique les couleurs avec support du mode sombre
   */ applyColors(colors, root, isDark) {
        // Primary colors
        Object.entries(colors.primary).forEach(([shade, value])=>{
            root.style.setProperty(`--primary-${shade}`, value);
        });
        // Secondary colors
        Object.entries(colors.secondary).forEach(([shade, value])=>{
            root.style.setProperty(`--secondary-${shade}`, value);
        });
        // Neutral colors
        Object.entries(colors.neutral).forEach(([shade, value])=>{
            root.style.setProperty(`--neutral-${shade}`, value);
        });
        // Success colors
        Object.entries(colors.success).forEach(([shade, value])=>{
            root.style.setProperty(`--success-${shade}`, value);
        });
        // Warning colors
        Object.entries(colors.warning).forEach(([shade, value])=>{
            root.style.setProperty(`--warning-${shade}`, value);
        });
        // Error colors
        Object.entries(colors.error).forEach(([shade, value])=>{
            root.style.setProperty(`--error-${shade}`, value);
        });
        // Info colors
        Object.entries(colors.info).forEach(([shade, value])=>{
            root.style.setProperty(`--info-${shade}`, value);
        });
        // Surface colors (with dark mode support)
        if (isDark) {
            // Invert surface colors for dark mode
            root.style.setProperty('--surface-background', colors.surface.foreground);
            root.style.setProperty('--surface-foreground', colors.surface.background);
            root.style.setProperty('--surface-card', colors.neutral[900]);
            root.style.setProperty('--surface-cardForeground', colors.neutral[100]);
            root.style.setProperty('--surface-muted', colors.neutral[800]);
            root.style.setProperty('--surface-mutedForeground', colors.neutral[400]);
        } else {
            Object.entries(colors.surface).forEach(([key, value])=>{
                root.style.setProperty(`--surface-${key}`, value);
            });
        }
        // Border colors
        Object.entries(colors.border).forEach(([key, value])=>{
            root.style.setProperty(`--border-${key}`, value);
        });
    }
    /**
   * Applique la typographie
   */ applyTypography(typography, root) {
        // Font families
        Object.entries(typography.fontFamily).forEach(([key, value])=>{
            root.style.setProperty(`--font-${key}`, value.join(', '));
        });
        // Font sizes
        Object.entries(typography.fontSize).forEach(([key, value])=>{
            root.style.setProperty(`--font-size-${key}-size`, value.size);
            root.style.setProperty(`--font-size-${key}-line-height`, value.lineHeight);
        });
        // Font weights
        Object.entries(typography.fontWeight).forEach(([key, value])=>{
            root.style.setProperty(`--font-weight-${key}`, value);
        });
        // Letter spacing
        Object.entries(typography.letterSpacing).forEach(([key, value])=>{
            root.style.setProperty(`--letter-spacing-${key}`, value);
        });
        // Line heights
        Object.entries(typography.lineHeight).forEach(([key, value])=>{
            root.style.setProperty(`--line-height-${key}`, value);
        });
    }
    /**
   * Applique les espacements
   */ applySpacing(spacing, root) {
        Object.entries(spacing).forEach(([key, value])=>{
            root.style.setProperty(`--spacing-${key}`, value);
        });
    }
    /**
   * Applique les border radius
   */ applyBorderRadius(borderRadius, root) {
        Object.entries(borderRadius).forEach(([key, value])=>{
            root.style.setProperty(`--border-radius-${key}`, value);
        });
    }
    /**
   * Applique les ombres
   */ applyShadows(shadows, root) {
        Object.entries(shadows).forEach(([key, value])=>{
            root.style.setProperty(`--shadow-${key}`, value);
        });
    }
    /**
   * Applique les animations
   */ applyAnimation(animation, root) {
        // Durations
        Object.entries(animation.duration).forEach(([key, value])=>{
            root.style.setProperty(`--duration-${key}`, value);
        });
        // Easings
        Object.entries(animation.easing).forEach(([key, value])=>{
            root.style.setProperty(`--easing-${key}`, value);
        });
    }
    /**
   * Applique les breakpoints
   */ applyBreakpoints(breakpoints, root) {
        Object.entries(breakpoints).forEach(([key, value])=>{
            root.style.setProperty(`--breakpoint-${key}`, value);
        });
    }
    /**
   * Applique les z-index
   */ applyZIndex(zIndex, root) {
        Object.entries(zIndex).forEach(([key, value])=>{
            root.style.setProperty(`--z-index-${key}`, value);
        });
    }
    /**
   * Applique les styles de composants
   */ applyComponents(components, root) {
        // On peut créer des classes CSS personnalisées ici
        // Ou simplement exposer les variables pour les utiliser dans les composants
        Object.entries(components).forEach(([componentName, variants])=>{
            Object.entries(variants).forEach(([variantName, styles])=>{
                Object.entries(styles).forEach(([property, value])=>{
                    root.style.setProperty(`--${componentName}-${variantName}-${property}`, value);
                });
            });
        });
    }
    /**
   * Nettoie les variables CSS existantes
   */ clearThemeVariables() {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const root = undefined;
        const styles = undefined;
    }
    /**
   * Valide la structure du thème
   */ validateTheme(theme) {
        if (!theme.meta || !theme.colors || !theme.typography || !theme.spacing) {
            throw new Error('Invalid theme structure: missing required properties');
        }
        if (!theme.colors.primary || !theme.colors.surface) {
            throw new Error('Invalid theme structure: missing required color properties');
        }
    }
    /**
   * Sauvegarde les préférences dans localStorage
   */ saveThemePreferences(themeName, isDark, customTheme) {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const preferences = undefined;
    }
    /**
   * Charge les préférences depuis localStorage
   */ loadThemePreferences() {
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
    }
    /**
   * Découvre les thèmes disponibles
   */ async discoverThemes() {
        // Cette méthode peut être étendue pour découvrir dynamiquement les thèmes
        // Pour l'instant, on retourne les thèmes connus
        return Array.from(this.availableThemes);
    }
    /**
   * Exporte le thème courant
   */ exportCurrentTheme() {
        return this.currentTheme;
    }
    /**
   * Importe un thème personnalisé
   */ importTheme(theme) {
        this.validateTheme(theme);
        this.currentTheme = theme;
    }
}
}),
"[project]/lib/theme/themeContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme,
    "useThemeEvents",
    ()=>useThemeEvents,
    "useThemeVariables",
    ()=>useThemeVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2f$themeLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme/themeLoader.tsx [app-ssr] (ecmascript)");
// lib/theme/themeContext.tsx
'use client';
;
;
;
// Context
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useTheme = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
const ThemeProvider = ({ children, defaultTheme = 'default', enableDarkMode = true, onThemeChange })=>{
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [themeName, setThemeNameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultTheme);
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [availableThemes, setAvailableThemes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const themeLoader = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2f$themeLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeLoader"].getInstance();
    // Initialisation du thème
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initializeTheme = async ()=>{
            try {
                setIsLoading(true);
                // Charger les préférences sauvegardées
                const savedPreferences = themeLoader.loadThemePreferences();
                let themeToLoad = defaultTheme;
                let darkMode = false;
                if (savedPreferences) {
                    themeToLoad = savedPreferences.themeName;
                    darkMode = savedPreferences.isDark;
                    // Si un thème personnalisé était sauvegardé
                    if (savedPreferences.customTheme) {
                        setThemeState(savedPreferences.customTheme);
                        themeLoader.applyTheme(savedPreferences.customTheme, darkMode);
                        setIsDark(darkMode);
                        setThemeNameState('custom');
                        setIsLoading(false);
                        return;
                    }
                } else if (enableDarkMode) {
                    // Détecter la préférence système pour le mode sombre
                    darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                }
                // Charger le thème depuis le fichier JSON
                const loadedTheme = await themeLoader.loadTheme(themeToLoad);
                setThemeState(loadedTheme);
                setThemeNameState(themeToLoad);
                setIsDark(darkMode);
                // Appliquer le thème
                themeLoader.applyTheme(loadedTheme, darkMode);
                // Découvrir les thèmes disponibles
                const themes = await themeLoader.discoverThemes();
                setAvailableThemes(themes);
            } catch (error) {
                console.error('Failed to initialize theme:', error);
                // Fallback vers un thème minimal si le chargement échoue
                const fallbackTheme = createFallbackTheme();
                setThemeState(fallbackTheme);
                themeLoader.applyTheme(fallbackTheme, isDark);
            } finally{
                setIsLoading(false);
            }
        };
        initializeTheme();
    }, [
        defaultTheme,
        enableDarkMode
    ]);
    // Écouter les changements de préférence système pour le mode sombre
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!enableDarkMode) return;
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e)=>{
            if (!themeLoader.loadThemePreferences()) {
                // Seulement si l'utilisateur n'a pas de préférence sauvegardée
                setIsDark(e.matches);
                if (theme) {
                    themeLoader.applyTheme(theme, e.matches);
                }
            }
        };
        mediaQuery.addListener(handleChange);
        return ()=>mediaQuery.removeListener(handleChange);
    }, [
        enableDarkMode,
        theme
    ]);
    // Fonction pour changer de thème
    const setTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (newTheme, name)=>{
        if (!newTheme) return;
        const previousTheme = theme;
        try {
            setThemeState(newTheme);
            setThemeNameState(name);
            // Appliquer le nouveau thème
            themeLoader.applyTheme(newTheme, isDark);
            // Sauvegarder les préférences
            if (name === 'custom') {
                themeLoader.saveThemePreferences(name, isDark, newTheme);
            } else {
                themeLoader.saveThemePreferences(name, isDark);
            }
            // Déclencher l'événement de changement
            onThemeChange?.({
                theme: newTheme,
                themeName: name,
                previousTheme: previousTheme || undefined
            });
        } catch (error) {
            console.error('Failed to apply theme:', error);
            // Revenir au thème précédent en cas d'erreur
            if (previousTheme) {
                setThemeState(previousTheme);
                themeLoader.applyTheme(previousTheme, isDark);
            }
        }
    }, [
        theme,
        isDark,
        onThemeChange
    ]);
    // Fonction pour charger un thème par nom
    const loadTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (name)=>{
        try {
            setIsLoading(true);
            const loadedTheme = await themeLoader.loadTheme(name);
            await setTheme(loadedTheme, name);
        } catch (error) {
            console.error(`Failed to load theme ${name}:`, error);
        } finally{
            setIsLoading(false);
        }
    }, [
        setTheme
    ]);
    // Fonction pour basculer le mode sombre
    const toggleDarkMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!enableDarkMode || !theme) return;
        const newDarkMode = !isDark;
        setIsDark(newDarkMode);
        // Appliquer le thème avec le nouveau mode
        themeLoader.applyTheme(theme, newDarkMode);
        // Sauvegarder les préférences
        themeLoader.saveThemePreferences(themeName, newDarkMode);
        // Déclencher l'événement de changement
        onThemeChange?.({
            theme,
            themeName,
            previousTheme: theme
        });
    }, [
        enableDarkMode,
        theme,
        isDark,
        themeName,
        onThemeChange
    ]);
    // Si le thème n'est pas encore chargé, on peut afficher un loader ou rien
    if (isLoading || !theme) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "theme-loading",
            children: children
        }, void 0, false, {
            fileName: "[project]/lib/theme/themeContext.tsx",
            lineNumber: 198,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const contextValue = {
        theme,
        themeName,
        setTheme,
        loadTheme,
        availableThemes,
        isDark,
        toggleDarkMode
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/theme/themeContext.tsx",
        lineNumber: 215,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// Thème de fallback minimal
const createFallbackTheme = ()=>({
        meta: {
            name: "Fallback Theme",
            version: "1.0.0",
            author: "System",
            description: "Fallback theme when loading fails"
        },
        colors: {
            primary: {
                50: "#eff6ff",
                100: "#dbeafe",
                200: "#bfdbfe",
                300: "#93c5fd",
                400: "#60a5fa",
                500: "#3b82f6",
                600: "#2563eb",
                700: "#1d4ed8",
                800: "#1e40af",
                900: "#1e3a8a",
                950: "#172554"
            },
            secondary: {
                50: "#fdf2f8",
                100: "#fce7f3",
                200: "#fbcfe8",
                300: "#f9a8d4",
                400: "#f472b6",
                500: "#ec4899",
                600: "#db2777",
                700: "#be185d",
                800: "#9d174d",
                900: "#831843",
                950: "#500724"
            },
            neutral: {
                50: "#fafafa",
                100: "#f5f5f5",
                200: "#e5e5e5",
                300: "#d4d4d4",
                400: "#a3a3a3",
                500: "#737373",
                600: "#525252",
                700: "#404040",
                800: "#262626",
                900: "#171717",
                950: "#0a0a0a"
            },
            success: {
                50: "#f0fdf4",
                100: "#dcfce7",
                200: "#bbf7d0",
                300: "#86efac",
                400: "#4ade80",
                500: "#22c55e",
                600: "#16a34a",
                700: "#15803d",
                800: "#166534",
                900: "#14532d",
                950: "#052e16"
            },
            warning: {
                50: "#fffbeb",
                100: "#fef3c7",
                200: "#fde68a",
                300: "#fcd34d",
                400: "#fbbf24",
                500: "#f59e0b",
                600: "#d97706",
                700: "#b45309",
                800: "#92400e",
                900: "#78350f",
                950: "#451a03"
            },
            error: {
                50: "#fef2f2",
                100: "#fee2e2",
                200: "#fecaca",
                300: "#fca5a5",
                400: "#f87171",
                500: "#ef4444",
                600: "#dc2626",
                700: "#b91c1c",
                800: "#991b1b",
                900: "#7f1d1d",
                950: "#450a0a"
            },
            info: {
                50: "#ecfeff",
                100: "#cffafe",
                200: "#a5f3fc",
                300: "#67e8f9",
                400: "#22d3ee",
                500: "#06b6d4",
                600: "#0891b2",
                700: "#0e7490",
                800: "#155e75",
                900: "#164e63",
                950: "#083344"
            },
            surface: {
                background: "#ffffff",
                foreground: "#0a0a0a",
                card: "#ffffff",
                cardForeground: "#0a0a0a",
                popover: "#ffffff",
                popoverForeground: "#0a0a0a",
                muted: "#f5f5f5",
                mutedForeground: "#737373",
                accent: "#f5f5f5",
                accentForeground: "#0a0a0a",
                destructive: "#ef4444",
                destructiveForeground: "#fafafa"
            },
            border: {
                default: "#e5e5e5",
                input: "#e5e5e5",
                ring: "#3b82f6"
            }
        },
        typography: {
            fontFamily: {
                sans: [
                    "Inter",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "sans-serif"
                ],
                serif: [
                    "ui-serif",
                    "Georgia",
                    "Cambria",
                    "Times New Roman",
                    "serif"
                ],
                mono: [
                    "ui-monospace",
                    "SFMono-Regular",
                    "Menlo",
                    "Monaco",
                    "Consolas",
                    "monospace"
                ]
            },
            fontSize: {
                xs: {
                    size: "0.75rem",
                    lineHeight: "1rem"
                },
                sm: {
                    size: "0.875rem",
                    lineHeight: "1.25rem"
                },
                base: {
                    size: "1rem",
                    lineHeight: "1.5rem"
                },
                lg: {
                    size: "1.125rem",
                    lineHeight: "1.75rem"
                },
                xl: {
                    size: "1.25rem",
                    lineHeight: "1.75rem"
                },
                '2xl': {
                    size: "1.5rem",
                    lineHeight: "2rem"
                },
                '3xl': {
                    size: "1.875rem",
                    lineHeight: "2.25rem"
                },
                '4xl': {
                    size: "2.25rem",
                    lineHeight: "2.5rem"
                },
                '5xl': {
                    size: "3rem",
                    lineHeight: "1"
                },
                '6xl': {
                    size: "3.75rem",
                    lineHeight: "1"
                },
                '7xl': {
                    size: "4.5rem",
                    lineHeight: "1"
                },
                '8xl': {
                    size: "6rem",
                    lineHeight: "1"
                },
                '9xl': {
                    size: "8rem",
                    lineHeight: "1"
                }
            },
            fontWeight: {
                thin: "100",
                extralight: "200",
                light: "300",
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
                extrabold: "800",
                black: "900"
            },
            letterSpacing: {
                tighter: "-0.05em",
                tight: "-0.025em",
                normal: "0em",
                wide: "0.025em",
                wider: "0.05em",
                widest: "0.1em"
            },
            lineHeight: {
                none: "1",
                tight: "1.25",
                snug: "1.375",
                normal: "1.5",
                relaxed: "1.625",
                loose: "2"
            }
        },
        spacing: {
            0: "0px",
            px: "1px",
            '0.5': "0.125rem",
            1: "0.25rem",
            '1.5': "0.375rem",
            2: "0.5rem",
            '2.5': "0.625rem",
            3: "0.75rem",
            '3.5': "0.875rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
            11: "2.75rem",
            12: "3rem",
            14: "3.5rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            28: "7rem",
            32: "8rem",
            36: "9rem",
            40: "10rem",
            44: "11rem",
            48: "12rem",
            52: "13rem",
            56: "14rem",
            60: "15rem",
            64: "16rem",
            72: "18rem",
            80: "20rem",
            96: "24rem"
        },
        borderRadius: {
            none: "0px",
            sm: "0.125rem",
            default: "0.25rem",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "0.75rem",
            '2xl': "1rem",
            '3xl': "1.5rem",
            full: "9999px"
        },
        shadows: {
            sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            default: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            '2xl': "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
            none: "0 0 #0000"
        },
        animation: {
            duration: {
                75: "75ms",
                100: "100ms",
                150: "150ms",
                200: "200ms",
                300: "300ms",
                500: "500ms",
                700: "700ms",
                1000: "1000ms"
            },
            easing: {
                linear: "linear",
                in: "cubic-bezier(0.4, 0, 1, 1)",
                out: "cubic-bezier(0, 0, 0.2, 1)",
                inOut: "cubic-bezier(0.4, 0, 0.2, 1)"
            }
        },
        breakpoints: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            '2xl': "1536px"
        },
        zIndex: {
            0: "0",
            10: "10",
            20: "20",
            30: "30",
            40: "40",
            50: "50",
            auto: "auto"
        },
        components: {
            button: {
                primary: {
                    background: "var(--primary-600)",
                    backgroundHover: "var(--primary-700)",
                    color: "var(--surface-background)",
                    padding: "var(--spacing-2) var(--spacing-4)",
                    borderRadius: "var(--border-radius-md)",
                    fontSize: "var(--font-size-sm-size)",
                    fontWeight: "var(--font-weight-medium)",
                    boxShadow: "var(--shadow-sm)"
                },
                secondary: {
                    background: "var(--surface-accent)",
                    backgroundHover: "var(--neutral-200)",
                    color: "var(--surface-accentForeground)",
                    padding: "var(--spacing-2) var(--spacing-4)",
                    borderRadius: "var(--border-radius-md)",
                    fontSize: "var(--font-size-sm-size)",
                    fontWeight: "var(--font-weight-medium)"
                }
            },
            input: {
                default: {
                    background: "var(--surface-background)",
                    border: "1px solid var(--border-input)",
                    borderRadius: "var(--border-radius-md)",
                    padding: "var(--spacing-2) var(--spacing-3)",
                    fontSize: "var(--font-size-sm-size)",
                    color: "var(--surface-foreground)"
                }
            },
            card: {
                default: {
                    background: "var(--surface-card)",
                    color: "var(--surface-cardForeground)",
                    borderRadius: "var(--border-radius-lg)",
                    boxShadow: "var(--shadow-sm)",
                    border: "1px solid var(--border-default)",
                    padding: "var(--spacing-6)"
                }
            }
        }
    });
const useThemeEvents = ()=>{
    const { theme, themeName } = useTheme();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Émettre un événement personnalisé quand le thème change
        const event = new CustomEvent('theme-changed', {
            detail: {
                theme,
                themeName
            }
        });
        window.dispatchEvent(event);
    }, [
        theme,
        themeName
    ]);
};
const useThemeVariables = ()=>{
    const { theme } = useTheme();
    const getColorVariable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((colorPath)=>{
        return `var(--${colorPath.replace('.', '-')})`;
    }, []);
    const getSpacingVariable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((spacing)=>{
        return `var(--spacing-${spacing})`;
    }, []);
    const getBorderRadiusVariable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((radius)=>{
        return `var(--border-radius-${radius})`;
    }, []);
    return {
        theme,
        getColorVariable,
        getSpacingVariable,
        getBorderRadiusVariable
    };
};
}),
"[project]/lib/theme/themeSwitcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DarkModeToggle",
    ()=>DarkModeToggle,
    "ThemeColorPreview",
    ()=>ThemeColorPreview,
    "ThemeSwitcher",
    ()=>ThemeSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2f$themeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme/themeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
// lib/theme/ThemeSwitcher.tsx
'use client';
;
;
;
;
const ThemeSwitcher = ({ className = '', showDarkModeToggle = true, showThemeSelector = true, showImportExport = true, position = 'dropdown' })=>{
    const { theme, themeName, isDark, toggleDarkMode, loadTheme, availableThemes, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2f$themeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Gestion de l'export du thème
    const handleExportTheme = ()=>{
        if (!theme) return;
        const dataStr = JSON.stringify(theme, null, 2);
        const dataBlob = new Blob([
            dataStr
        ], {
            type: 'application/json'
        });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${themeName || 'theme'}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    // Gestion de l'import du thème
    const handleImportTheme = (event)=>{
        const file = event.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = async (e)=>{
            try {
                setIsLoading(true);
                const themeData = JSON.parse(e.target?.result);
                // Valider le thème importé
                if (!themeData.meta || !themeData.colors || !themeData.typography) {
                    throw new Error('Invalid theme file structure');
                }
                await setTheme(themeData, 'custom');
            } catch (error) {
                console.error('Failed to import theme:', error);
                alert('Erreur lors de l\'import du thème. Vérifiez que le fichier est valide.');
            } finally{
                setIsLoading(false);
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            }
        };
        reader.readAsText(file);
    };
    // Changement de thème prédéfini
    const handleThemeChange = async (newThemeName)=>{
        if (newThemeName === themeName) return;
        try {
            setIsLoading(true);
            await loadTheme(newThemeName);
        } catch (error) {
            console.error('Failed to load theme:', error);
        } finally{
            setIsLoading(false);
        }
    };
    if (position === 'inline') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `theme-switcher-inline flex items-center gap-2 ${className}`,
            children: [
                showDarkModeToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleDarkMode,
                    className: "p-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                    title: isDark ? "Mode clair" : "Mode sombre",
                    children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/lib/theme/themeSwitcher.tsx",
                        lineNumber: 111,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/lib/theme/themeSwitcher.tsx",
                        lineNumber: 111,
                        columnNumber: 43
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/lib/theme/themeSwitcher.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                showThemeSelector && availableThemes.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: themeName,
                    onChange: (e)=>handleThemeChange(e.target.value),
                    className: "px-3 py-2 rounded-md border bg-white dark:bg-gray-800 text-sm",
                    disabled: isLoading,
                    children: availableThemes.map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: name,
                            children: name.charAt(0).toUpperCase() + name.slice(1)
                        }, name, false, {
                            fileName: "[project]/lib/theme/themeSwitcher.tsx",
                            lineNumber: 123,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/lib/theme/themeSwitcher.tsx",
                    lineNumber: 116,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                showImportExport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleExportTheme,
                            className: "p-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                            title: "Exporter le thème",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/lib/theme/themeSwitcher.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: fileInputRef,
                            type: "file",
                            accept: ".json",
                            onChange: handleImportTheme,
                            className: "hidden"
                        }, void 0, false, {
                            fileName: "[project]/lib/theme/themeSwitcher.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>fileInputRef.current?.click(),
                            className: "p-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                            title: "Importer un thème",
                            disabled: isLoading,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/lib/theme/themeSwitcher.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/lib/theme/themeSwitcher.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/lib/theme/themeSwitcher.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Mode dropdown
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `theme-switcher-dropdown relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/lib/theme/themeSwitcher.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: "Thème"
                    }, void 0, false, {
                        fileName: "[project]/lib/theme/themeSwitcher.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 14,
                        className: `transition-transform ${isOpen ? 'rotate-180' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/lib/theme/themeSwitcher.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/lib/theme/themeSwitcher.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-10",
                        onClick: ()=>setIsOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/lib/theme/themeSwitcher.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border rounded-lg shadow-lg z-20 py-2",
                        children: [
                            showDarkModeToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-2 border-b",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleDarkMode,
                                    className: "flex items-center justify-between w-full text-sm hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 31
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 51
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: isDark ? "Mode clair" : "Mode sombre"
                                                }, void 0, false, {
                                                    fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isDark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                            lineNumber: 199,
                                            columnNumber: 30
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                    lineNumber: 191,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                lineNumber: 190,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            showThemeSelector && availableThemes.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-2 border-b",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mb-2 px-2",
                                        children: "Thèmes disponibles"
                                    }, void 0, false, {
                                        fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                        lineNumber: 207,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    availableThemes.map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                handleThemeChange(name);
                                                setIsOpen(false);
                                            },
                                            className: "flex items-center justify-between w-full text-sm hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded",
                                            disabled: isLoading,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: name.charAt(0).toUpperCase() + name.slice(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                themeName === name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 44
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, name, true, {
                                            fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                            lineNumber: 211,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                lineNumber: 206,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            showImportExport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mb-2 px-2",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleExportTheme,
                                        className: "flex items-center gap-2 w-full text-sm hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                                lineNumber: 238,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Exporter le thème"
                                            }, void 0, false, {
                                                fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                                lineNumber: 239,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: fileInputRef,
                                        type: "file",
                                        accept: ".json",
                                        onChange: handleImportTheme,
                                        className: "hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            fileInputRef.current?.click();
                                            setIsOpen(false);
                                        },
                                        className: "flex items-center gap-2 w-full text-sm hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded",
                                        disabled: isLoading,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                                lineNumber: 258,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Importer un thème"
                                            }, void 0, false, {
                                                fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                                lineNumber: 259,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                lineNumber: 229,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-2 border-t",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-spin w-3 h-3 border border-gray-300 border-t-transparent rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                            lineNumber: 268,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Chargement..."
                                        }, void 0, false, {
                                            fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                            lineNumber: 269,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                    lineNumber: 267,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                lineNumber: 266,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            theme && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-2 border-t text-xs text-gray-500 dark:text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "Thème: ",
                                            theme.meta.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                        lineNumber: 277,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "Version: ",
                                            theme.meta.version
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/lib/theme/themeSwitcher.tsx",
                                lineNumber: 276,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/lib/theme/themeSwitcher.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/lib/theme/themeSwitcher.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const DarkModeToggle = ({ className = '' })=>{
    const { isDark, toggleDarkMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2f$themeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleDarkMode,
        className: `p-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`,
        title: isDark ? "Passer en mode clair" : "Passer en mode sombre",
        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/lib/theme/themeSwitcher.tsx",
            lineNumber: 298,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/lib/theme/themeSwitcher.tsx",
            lineNumber: 298,
            columnNumber: 37
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/lib/theme/themeSwitcher.tsx",
        lineNumber: 293,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ThemeColorPreview = ({ className = '' })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2f$themeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    if (!theme) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `theme-color-preview grid grid-cols-8 gap-1 ${className}`,
        children: Object.entries(theme.colors.primary).map(([shade, color])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 rounded border",
                style: {
                    backgroundColor: color
                },
                title: `Primary ${shade}: ${color}`
            }, `primary-${shade}`, false, {
                fileName: "[project]/lib/theme/themeSwitcher.tsx",
                lineNumber: 313,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/lib/theme/themeSwitcher.tsx",
        lineNumber: 310,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/ui/toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastContainer",
    ()=>ToastContainer,
    "ToastProvider",
    ()=>ToastProvider,
    "default",
    ()=>__TURBOPACK__default__export__,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
class ToastManager {
    toasts = [];
    listeners = new Set();
    subscribe(listener) {
        this.listeners.add(listener);
        return ()=>this.listeners.delete(listener);
    }
    notify() {
        this.listeners.forEach((listener)=>listener([
                ...this.toasts
            ]));
    }
    add(props) {
        const id = props.id || Math.random().toString(36).substr(2, 9);
        const existingIndex = this.toasts.findIndex((toast)=>toast.id === id);
        if (existingIndex !== -1) {
            this.toasts[existingIndex] = {
                ...this.toasts[existingIndex],
                ...props,
                id
            };
            this.notify();
            return id;
        }
        const newToast = {
            ...props,
            id,
            timestamp: Date.now()
        };
        this.toasts = [
            newToast,
            ...this.toasts
        ];
        if (this.toasts.length > 10) {
            this.toasts = this.toasts.slice(0, 10);
        }
        this.notify();
        return id;
    }
    update(id, props) {
        const index = this.toasts.findIndex((toast)=>toast.id === id);
        if (index !== -1) {
            this.toasts[index] = {
                ...this.toasts[index],
                ...props
            };
            this.notify();
        }
    }
    remove(id) {
        this.toasts = this.toasts.filter((toast)=>toast.id !== id);
        this.notify();
    }
    clear() {
        this.toasts = [];
        this.notify();
    }
    getToasts() {
        return [
            ...this.toasts
        ];
    }
}
const toastManager = new ToastManager();
function toast(messageOrOptions, options) {
    let toastProps;
    if (typeof messageOrOptions === "string") {
        toastProps = {
            title: messageOrOptions,
            ...options
        };
    } else {
        toastProps = messageOrOptions;
    }
    return toastManager.add(toastProps);
}
toast.success = (message, options)=>toast({
        title: message,
        variant: "success",
        ...options
    });
toast.error = (message, options)=>toast({
        title: message,
        variant: "destructive",
        ...options
    });
toast.warning = (message, options)=>toast({
        title: message,
        variant: "warning",
        ...options
    });
toast.info = (message, options)=>toast({
        title: message,
        variant: "info",
        ...options
    });
toast.loading = (message, options)=>toast({
        title: message,
        variant: "loading",
        duration: Infinity,
        ...options
    });
toast.promise = (promise, options)=>{
    const id = toast.loading(options.loading);
    promise.then(()=>{
        toastManager.update(id, {
            title: options.success,
            variant: "success",
            duration: 5000
        });
    }).catch(()=>{
        toastManager.update(id, {
            title: options.error,
            variant: "destructive",
            duration: 5000
        });
    });
    return promise;
};
toast.dismiss = (id)=>{
    if (id) {
        toastManager.remove(id);
    } else {
        toastManager.clear();
    }
};
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("toast-base fixed z-[100] pointer-events-auto flex w-[calc(100%-2rem)] max-w-sm h-20 items-center justify-between space-x-4 rounded-lg p-4 pr-8 shadow-lg", {
    variants: {
        variant: {
            default: "bg-background text-foreground border border-border",
            success: "bg-green-100 text-green-900 border-green-200 dark:bg-green-950 dark:text-green-50 dark:border-green-800",
            destructive: "bg-red-100 text-red-900 border-red-200 dark:bg-red-950 dark:text-red-50 dark:border-red-800",
            warning: "bg-yellow-100 text-yellow-900 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-50 dark:border-yellow-800",
            info: "bg-blue-100 text-blue-900 border-blue-200 dark:bg-blue-950 dark:text-blue-50 dark:border-blue-800",
            loading: "bg-blue-100 text-blue-900 border-blue-200 dark:bg-blue-950 dark:text-blue-50 dark:border-blue-800"
        },
        position: {
            "top-right": "top-4 right-4",
            "top-left": "top-4 left-4",
            "bottom-right": "bottom-4 right-4",
            "bottom-left": "bottom-4 left-4"
        }
    },
    defaultVariants: {
        variant: "default",
        position: "top-right"
    }
});
const ToastIcons = {
    success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
        className: "w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0"
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    destructive: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
        className: "w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0"
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
        className: "w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0"
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
        className: "w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0"
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    loading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-5 h-5 flex-shrink-0 relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0 bg-blue-600 dark:bg-blue-400 shadow-[0_0_4px_rgba(59,130,246,0.6)] dark:shadow-[0_0_4px_rgba(96,165,250,0.6)]",
            animate: {
                rotateX: [
                    0,
                    180,
                    0
                ],
                rotateY: [
                    0,
                    180,
                    0
                ]
            },
            transition: {
                repeat: Infinity,
                duration: 1.1,
                ease: "linear"
            }
        }, void 0, false, {
            fileName: "[project]/components/ui/toast.tsx",
            lineNumber: 251,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 250,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
const ToastComponent = ({ id, title, description, variant = "default", position = "top-right", duration = 5000, onClose, action, cancel, stackIndex = 0, isVisible = true, isStacked = false, isHovered = false, stackDirection = "down", isExiting = false, totalCount = 1 })=>{
    const [translateX, setTranslateX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const toastRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isTouchAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        onClose?.();
    }, [
        onClose
    ]);
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.target instanceof Element) {
            if (closeButtonRef.current?.contains(e.target) || e.target.closest('button[role="button"]')) {
                isTouchAction.current = true;
                return;
            }
        }
        e.stopPropagation();
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        startX.current = clientX;
        isDragging.current = true;
    }, []);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (isTouchAction.current || !isDragging.current || !toastRef.current) return;
        e.stopPropagation();
        e.preventDefault();
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const diff = clientX - startX.current;
        if (isMobile) {
            setTranslateX(diff);
        } else {
            if (position.includes("right") && diff > 0) {
                setTranslateX(diff);
            } else if (position.includes("left") && diff < 0) {
                setTranslateX(diff);
            }
        }
    }, [
        position,
        isMobile
    ]);
    const handleTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (isTouchAction.current) {
            isTouchAction.current = false;
            return;
        }
        if (!isDragging.current || !toastRef.current) return;
        e.stopPropagation();
        const toastWidth = toastRef.current.offsetWidth;
        const swipeThreshold = toastWidth * 0.3;
        if (Math.abs(translateX) >= swipeThreshold) {
            handleClose();
        } else {
            setTranslateX(0);
        }
        isDragging.current = false;
    }, [
        translateX,
        handleClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let timer;
        if (!isHovered && duration !== Infinity && duration > 0 && !isExiting) {
            timer = setTimeout(()=>{
                handleClose();
            }, duration);
        }
        return ()=>{
            if (timer) clearTimeout(timer);
        };
    }, [
        duration,
        isHovered,
        handleClose,
        isExiting
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const currentRef = toastRef.current;
        if (currentRef) {
            const touchStartOptions = {
                passive: false
            };
            currentRef.addEventListener("touchstart", handleTouchStart, touchStartOptions);
            window.addEventListener("touchmove", handleTouchMove, {
                passive: false
            });
            window.addEventListener("touchend", handleTouchEnd);
            currentRef.addEventListener("mousedown", handleTouchStart);
            window.addEventListener("mousemove", handleTouchMove);
            window.addEventListener("mouseup", handleTouchEnd);
        }
        return ()=>{
            if (currentRef) {
                currentRef.removeEventListener("touchstart", handleTouchStart);
                window.removeEventListener("touchmove", handleTouchMove);
                window.removeEventListener("touchend", handleTouchEnd);
                currentRef.removeEventListener("mousedown", handleTouchStart);
                window.removeEventListener("mousemove", handleTouchMove);
                window.removeEventListener("mouseup", handleTouchEnd);
            }
        };
    }, [
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd
    ]);
    if (!isVisible) return null;
    const getTransform = ()=>{
        if (isStacked && stackIndex > 0) {
            const offset = stackIndex * 8;
            const scale = Math.max(0.85, 1 - stackIndex * 0.05);
            if (stackDirection === "up") {
                return `translateX(${translateX}px) translateY(-${offset}px) scale(${scale})`;
            } else {
                return `translateX(${translateX}px) translateY(${offset}px) scale(${scale})`;
            }
        } else if (!isStacked && stackIndex > 0) {
            const expandedOffset = stackIndex * 88;
            if (stackDirection === "up") {
                return `translateX(${translateX}px) translateY(-${expandedOffset}px)`;
            } else {
                return `translateX(${translateX}px) translateY(${expandedOffset}px)`;
            }
        }
        return `translateX(${translateX}px)`;
    };
    const getOpacity = ()=>{
        if (translateX !== 0) {
            return Math.max(0.3, 1 - Math.abs(translateX) / (toastRef.current?.offsetWidth || 320));
        }
        if (isStacked && stackIndex >= 3) {
            return 0.4;
        }
        return 1;
    };
    const getZIndex = ()=>{
        return 1100 - stackIndex;
    };
    const renderAction = ()=>{
        if (!action) return null;
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(action)) {
            const actionElement = action;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-2 flex-shrink-0",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(actionElement, {
                    onClick: (e)=>{
                        e.stopPropagation();
                        if (actionElement.props.onClick) {
                            actionElement.props.onClick(e);
                        }
                        handleClose();
                    }
                })
            }, void 0, false, {
                fileName: "[project]/components/ui/toast.tsx",
                lineNumber: 509,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        if (typeof action === "object" && action !== null && "label" in action && "onClick" in action) {
            const actionObj = action;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-2 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        actionObj.onClick();
                        handleClose();
                    },
                    className: "text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1 rounded transition-colors",
                    children: actionObj.label
                }, void 0, false, {
                    fileName: "[project]/components/ui/toast.tsx",
                    lineNumber: 532,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/toast.tsx",
                lineNumber: 531,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        return null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: toastRef,
        role: "alert",
        "aria-live": "polite",
        className: toastVariants({
            variant,
            position
        }),
        initial: {
            x: position.includes("right") ? 400 : -400,
            y: position.includes("top") ? -100 : 100,
            opacity: 0,
            scale: 0.9
        },
        animate: {
            x: 0,
            y: 0,
            opacity: getOpacity(),
            scale: isStacked && stackIndex > 0 ? Math.max(0.85, 1 - stackIndex * 0.05) : 1,
            transform: getTransform()
        },
        exit: {
            x: position.includes("right") ? 400 : -400,
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        },
        transition: {
            type: "spring",
            damping: 30,
            stiffness: 400,
            duration: 0.3
        },
        style: {
            zIndex: getZIndex(),
            pointerEvents: "auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-3 w-full min-w-0",
                children: [
                    variant !== "default" && ToastIcons[variant],
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold text-sm truncate",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/ui/toast.tsx",
                                lineNumber: 593,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs opacity-70 truncate mt-1",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/components/ui/toast.tsx",
                                lineNumber: 596,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/toast.tsx",
                        lineNumber: 591,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/toast.tsx",
                lineNumber: 588,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isStacked && stackIndex === 0 && totalCount > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute -top-1 -right-1 bg-muted-foreground text-muted rounded-full w-5 h-5 flex items-center justify-center font-medium text-xs z-20",
                initial: {
                    scale: 0
                },
                animate: {
                    scale: 1
                },
                transition: {
                    delay: 0.2
                },
                children: [
                    "+",
                    totalCount - 3
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/toast.tsx",
                lineNumber: 604,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            renderAction(),
            cancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-2 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        cancel.onClick();
                        handleClose();
                    },
                    className: "text-xs font-medium bg-muted text-muted-foreground hover:bg-muted/80 px-3 py-1 rounded transition-colors",
                    children: cancel.label
                }, void 0, false, {
                    fileName: "[project]/components/ui/toast.tsx",
                    lineNumber: 618,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/toast.tsx",
                lineNumber: 617,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: closeButtonRef,
                onClick: handleClose,
                className: "absolute top-2 right-2 hover:opacity-75 transition-opacity z-10 p-1 rounded-full hover:bg-black hover:bg-opacity-10",
                "aria-label": "Close",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/components/ui/toast.tsx",
                    lineNumber: 637,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/toast.tsx",
                lineNumber: 631,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 550,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ToastStack = ({ toasts, position, onRemoveToast })=>{
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTapped, setIsTapped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const hoverTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>{
            window.removeEventListener("resize", checkMobile);
        };
    }, []);
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isMobile) return;
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        setIsHovered(true);
    }, [
        isMobile
    ]);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (isMobile) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const { clientX, clientY } = e;
        if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
            return;
        }
        hoverTimeoutRef.current = setTimeout(()=>{
            setIsHovered(false);
            hoverTimeoutRef.current = null;
        }, 150);
    }, [
        isMobile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
        };
    }, []);
    const handleRemoveToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        const toastToRemove = toasts.find((t)=>t.id === id);
        if (toastToRemove && toasts.filter((t)=>t.position === toastToRemove.position).length === 1) {
            setIsHovered(false);
            setIsTapped(false);
        }
        onRemoveToast(id);
    }, [
        toasts,
        onRemoveToast
    ]);
    const handleStackInteraction = ()=>{
        if (isMobile) {
            setIsTapped(!isTapped);
        }
    };
    const getVisibleToasts = ()=>{
        const maxVisible = 3;
        const shouldStack = toasts.length > 1;
        const isExpanded = isMobile ? isTapped : isHovered;
        if (shouldStack && !isExpanded) {
            return toasts.slice(0, maxVisible);
        }
        return toasts.slice(0, maxVisible);
    };
    const visibleToasts = getVisibleToasts();
    const getStackDirection = (pos)=>{
        return pos.includes("bottom") ? "up" : "down";
    };
    const stackDirection = getStackDirection(position);
    const shouldStack = toasts.length > 1;
    const isExpanded = isMobile ? isTapped : isHovered;
    if (toasts.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed pointer-events-none z-[100]",
        style: {
            [position.includes("top") ? "top" : "bottom"]: "1rem",
            [position.includes("right") ? "right" : "left"]: "1rem"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-auto",
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            onClick: handleStackInteraction,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "popLayout",
                children: visibleToasts.map((toastProps, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastComponent, {
                        ...toastProps,
                        stackIndex: index,
                        isVisible: true,
                        isStacked: shouldStack && !isExpanded,
                        isHovered: isHovered || isTapped,
                        stackDirection: stackDirection,
                        totalCount: toasts.length,
                        onClose: ()=>handleRemoveToast(toastProps.id)
                    }, toastProps.id, false, {
                        fileName: "[project]/components/ui/toast.tsx",
                        lineNumber: 777,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/ui/toast.tsx",
                lineNumber: 775,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ui/toast.tsx",
            lineNumber: 769,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/toast.tsx",
        lineNumber: 762,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function ToastContainer() {
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(toastManager.getToasts());
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = toastManager.subscribe(setToasts);
        return ()=>{
            unsubscribe();
        };
    }, []);
    const handleRemoveToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        toastManager.remove(id);
    }, []);
    const processedToasts = toasts.map((toast)=>{
        if (isMobile && toast.variant !== "info") {
            return {
                ...toast,
                position: "top-right"
            };
        }
        return toast;
    });
    const toastsByPosition = processedToasts.reduce((acc, toast)=>{
        const position = toast.position || "top-right";
        if (!acc[position]) {
            acc[position] = [];
        }
        acc[position].push(toast);
        return acc;
    }, {});
    if (toasts.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: Object.entries(toastsByPosition).map(([position, positionToasts])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastStack, {
                toasts: positionToasts,
                position: position,
                onRemoveToast: handleRemoveToast
            }, position, false, {
                fileName: "[project]/components/ui/toast.tsx",
                lineNumber: 841,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
const useToast = ()=>{
    return {
        toast
    };
};
const ToastProvider = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContainer, {}, void 0, false, {
                fileName: "[project]/components/ui/toast.tsx",
                lineNumber: 860,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = ToastComponent;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__532aa06d._.js.map