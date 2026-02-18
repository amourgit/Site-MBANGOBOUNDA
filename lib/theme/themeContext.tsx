// lib/theme/themeContext.tsx

'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { Theme, ThemeContextType, ThemeChangeEvent } from './types';
import { ThemeLoader } from './themeLoader';

// Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le thème
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Props du provider
interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: string;
  enableDarkMode?: boolean;
  onThemeChange?: (event: ThemeChangeEvent) => void;
}

// Provider principal
export const ThemeProvider = ({ 
  children, 
  defaultTheme = 'default',
  enableDarkMode = true,
  onThemeChange 
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme | null>(null);
  const [themeName, setThemeNameState] = useState<string>(defaultTheme);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [availableThemes, setAvailableThemes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const themeLoader = ThemeLoader.getInstance();

  // Initialisation du thème
  useEffect(() => {
    const initializeTheme = async () => {
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
        
      } finally {
        setIsLoading(false);
      }
    };

    initializeTheme();
  }, [defaultTheme, enableDarkMode]);

  // Écouter les changements de préférence système pour le mode sombre
  useEffect(() => {
    if (!enableDarkMode) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (!themeLoader.loadThemePreferences()) {
        // Seulement si l'utilisateur n'a pas de préférence sauvegardée
        setIsDark(e.matches);
        if (theme) {
          themeLoader.applyTheme(theme, e.matches);
        }
      }
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [enableDarkMode, theme]);

  // Fonction pour changer de thème
  const setTheme = useCallback(async (newTheme: Theme, name: string) => {
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
  }, [theme, isDark, onThemeChange]);

  // Fonction pour charger un thème par nom
  const loadTheme = useCallback(async (name: string) => {
    try {
      setIsLoading(true);
      const loadedTheme = await themeLoader.loadTheme(name);
      await setTheme(loadedTheme, name);
    } catch (error) {
      console.error(`Failed to load theme ${name}:`, error);
    } finally {
      setIsLoading(false);
    }
  }, [setTheme]);

  // Fonction pour basculer le mode sombre
  const toggleDarkMode = useCallback(() => {
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
  }, [enableDarkMode, theme, isDark, themeName, onThemeChange]);

  // Si le thème n'est pas encore chargé, on peut afficher un loader ou rien
  if (isLoading || !theme) {
    return (
      <div className="theme-loading">
        {children}
      </div>
    );
  }

  const contextValue: ThemeContextType = {
    theme,
    themeName,
    setTheme,
    loadTheme,
    availableThemes,
    isDark,
    toggleDarkMode
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Thème de fallback minimal
const createFallbackTheme = (): Theme => ({
  meta: {
    name: "Fallback Theme",
    version: "1.0.0",
    author: "System",
    description: "Fallback theme when loading fails"
  },
  colors: {
    primary: {
      50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa",
      500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554"
    },
    secondary: {
      50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6",
      500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724"
    },
    neutral: {
      50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3",
      500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a"
    },
    success: {
      50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80",
      500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16"
    },
    warning: {
      50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24",
      500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03"
    },
    error: {
      50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171",
      500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a"
    },
    info: {
      50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee",
      500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344"
    },
    surface: {
      background: "#ffffff", foreground: "#0a0a0a", card: "#ffffff", cardForeground: "#0a0a0a",
      popover: "#ffffff", popoverForeground: "#0a0a0a", muted: "#f5f5f5", mutedForeground: "#737373",
      accent: "#f5f5f5", accentForeground: "#0a0a0a", destructive: "#ef4444", destructiveForeground: "#fafafa"
    },
    border: { default: "#e5e5e5", input: "#e5e5e5", ring: "#3b82f6" }
  },
  typography: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
      mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"]
    },
    fontSize: {
      xs: { size: "0.75rem", lineHeight: "1rem" },
      sm: { size: "0.875rem", lineHeight: "1.25rem" },
      base: { size: "1rem", lineHeight: "1.5rem" },
      lg: { size: "1.125rem", lineHeight: "1.75rem" },
      xl: { size: "1.25rem", lineHeight: "1.75rem" },
      '2xl': { size: "1.5rem", lineHeight: "2rem" },
      '3xl': { size: "1.875rem", lineHeight: "2.25rem" },
      '4xl': { size: "2.25rem", lineHeight: "2.5rem" },
      '5xl': { size: "3rem", lineHeight: "1" },
      '6xl': { size: "3.75rem", lineHeight: "1" },
      '7xl': { size: "4.5rem", lineHeight: "1" },
      '8xl': { size: "6rem", lineHeight: "1" },
      '9xl': { size: "8rem", lineHeight: "1" }
    },
    fontWeight: {
      thin: "100", extralight: "200", light: "300", normal: "400", medium: "500",
      semibold: "600", bold: "700", extrabold: "800", black: "900"
    },
    letterSpacing: {
      tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em"
    },
    lineHeight: {
      none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2"
    }
  },
  spacing: {
    0: "0px", px: "1px", '0.5': "0.125rem", 1: "0.25rem", '1.5': "0.375rem", 2: "0.5rem",
    '2.5': "0.625rem", 3: "0.75rem", '3.5': "0.875rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem",
    7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem", 11: "2.75rem", 12: "3rem", 14: "3.5rem",
    16: "4rem", 20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem",
    44: "11rem", 48: "12rem", 52: "13rem", 56: "14rem", 60: "15rem", 64: "16rem", 72: "18rem",
    80: "20rem", 96: "24rem"
  },
  borderRadius: {
    none: "0px", sm: "0.125rem", default: "0.25rem", md: "0.375rem", lg: "0.5rem",
    xl: "0.75rem", '2xl': "1rem", '3xl': "1.5rem", full: "9999px"
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
      75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms",
      300: "300ms", 500: "500ms", 700: "700ms", 1000: "1000ms"
    },
    easing: {
      linear: "linear", in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)", inOut: "cubic-bezier(0.4, 0, 0.2, 1)"
    }
  },
  breakpoints: {
    sm: "640px", md: "768px", lg: "1024px", xl: "1280px", '2xl': "1536px"
  },
  zIndex: {
    0: "0", 10: "10", 20: "20", 30: "30", 40: "40", 50: "50", auto: "auto"
  },
  components: {
    button: {
      primary: {
        background: "var(--primary-600)", backgroundHover: "var(--primary-700)",
        color: "var(--surface-background)", padding: "var(--spacing-2) var(--spacing-4)",
        borderRadius: "var(--border-radius-md)", fontSize: "var(--font-size-sm-size)",
        fontWeight: "var(--font-weight-medium)", boxShadow: "var(--shadow-sm)"
      },
      secondary: {
        background: "var(--surface-accent)", backgroundHover: "var(--neutral-200)",
        color: "var(--surface-accentForeground)", padding: "var(--spacing-2) var(--spacing-4)",
        borderRadius: "var(--border-radius-md)", fontSize: "var(--font-size-sm-size)",
        fontWeight: "var(--font-weight-medium)"
      }
    },
    input: {
      default: {
        background: "var(--surface-background)", border: "1px solid var(--border-input)",
        borderRadius: "var(--border-radius-md)", padding: "var(--spacing-2) var(--spacing-3)",
        fontSize: "var(--font-size-sm-size)", color: "var(--surface-foreground)"
      }
    },
    card: {
      default: {
        background: "var(--surface-card)", color: "var(--surface-cardForeground)",
        borderRadius: "var(--border-radius-lg)", boxShadow: "var(--shadow-sm)",
        border: "1px solid var(--border-default)", padding: "var(--spacing-6)"
      }
    }
  }
});

// Hook pour les événements de thème
export const useThemeEvents = () => {
  const { theme, themeName } = useTheme();

  useEffect(() => {
    // Émettre un événement personnalisé quand le thème change
    const event = new CustomEvent('theme-changed', {
      detail: { theme, themeName }
    });
    
    window.dispatchEvent(event);
  }, [theme, themeName]);
};

// Hook pour obtenir des variables CSS spécifiques
export const useThemeVariables = () => {
  const { theme } = useTheme();

  const getColorVariable = useCallback((colorPath: string): string => {
    return `var(--${colorPath.replace('.', '-')})`;
  }, []);

  const getSpacingVariable = useCallback((spacing: keyof Theme['spacing']): string => {
    return `var(--spacing-${spacing})`;
  }, []);

  const getBorderRadiusVariable = useCallback((radius: keyof Theme['borderRadius']): string => {
    return `var(--border-radius-${radius})`;
  }, []);

  return {
    theme,
    getColorVariable,
    getSpacingVariable,
    getBorderRadiusVariable
  };
};