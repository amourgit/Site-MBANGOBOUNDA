// lib/theme/index.ts

// Types
export type * from './types';

// Context et hooks
export { 
  ThemeProvider, 
  useTheme, 
  useThemeEvents, 
  useThemeVariables 
} from './themeContext';

// Composants
export { 
  ThemeSwitcher, 
  DarkModeToggle, 
  ThemeColorPreview 
} from './themeSwitcher';

// Service
export { ThemeLoader } from './themeLoader';

// Utilitaires
export const themeUtils = {
  /**
   * Convertit une couleur hex en RGB
   */
  hexToRgb: (hex: string): { r: number; g: number; b: number } | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },

  /**
   * Convertit RGB en hex
   */
  rgbToHex: (r: number, g: number, b: number): string => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  },

  /**
   * Calcule la luminance d'une couleur
   */
  getLuminance: (hex: string): number => {
    const rgb = themeUtils.hexToRgb(hex);
    if (!rgb) return 0;

    const { r, g, b } = rgb;
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  },

  /**
   * Calcule le ratio de contraste entre deux couleurs
   */
  getContrastRatio: (color1: string, color2: string): number => {
    const lum1 = themeUtils.getLuminance(color1);
    const lum2 = themeUtils.getLuminance(color2);
    const lighter = Math.max(lum1, lum2);
    const darker = Math.min(lum1, lum2);
    
    return (lighter + 0.05) / (darker + 0.05);
  },

  /**
   * Vérifie si une couleur est accessible (WCAG)
   */
  isAccessible: (foreground: string, background: string, level: 'AA' | 'AAA' = 'AA'): boolean => {
    const ratio = themeUtils.getContrastRatio(foreground, background);
    return level === 'AAA' ? ratio >= 7 : ratio >= 4.5;
  },

  /**
   * Génère une couleur plus claire
   */
  lighten: (hex: string, percent: number): string => {
    const rgb = themeUtils.hexToRgb(hex);
    if (!rgb) return hex;

    const { r, g, b } = rgb;
    const amount = percent / 100;
    
    return themeUtils.rgbToHex(
      Math.min(255, Math.floor(r + (255 - r) * amount)),
      Math.min(255, Math.floor(g + (255 - g) * amount)),
      Math.min(255, Math.floor(b + (255 - b) * amount))
    );
  },

  /**
   * Génère une couleur plus sombre
   */
  darken: (hex: string, percent: number): string => {
    const rgb = themeUtils.hexToRgb(hex);
    if (!rgb) return hex;

    const { r, g, b } = rgb;
    const amount = percent / 100;
    
    return themeUtils.rgbToHex(
      Math.max(0, Math.floor(r * (1 - amount))),
      Math.max(0, Math.floor(g * (1 - amount))),
      Math.max(0, Math.floor(b * (1 - amount)))
    );
  },

  /**
   * Génère une palette de couleurs à partir d'une couleur de base
   */
  generateColorScale: (baseColor: string) => {
    return {
      50: themeUtils.lighten(baseColor, 95),
      100: themeUtils.lighten(baseColor, 90),
      200: themeUtils.lighten(baseColor, 75),
      300: themeUtils.lighten(baseColor, 60),
      400: themeUtils.lighten(baseColor, 30),
      500: baseColor,
      600: themeUtils.darken(baseColor, 15),
      700: themeUtils.darken(baseColor, 30),
      800: themeUtils.darken(baseColor, 45),
      900: themeUtils.darken(baseColor, 60),
      950: themeUtils.darken(baseColor, 75)
    };
  }
};