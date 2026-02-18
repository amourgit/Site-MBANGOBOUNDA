// lib/theme/themeLoader.ts

import { Theme, ThemeStorage } from './types';

export class ThemeLoader {
  private static instance: ThemeLoader;
  private currentTheme: Theme | null = null;
  private availableThemes: Set<string> = new Set();

  private constructor() {
    // Pattern singleton pour avoir une instance unique
  }

  public static getInstance(): ThemeLoader {
    if (!ThemeLoader.instance) {
      ThemeLoader.instance = new ThemeLoader();
    }
    return ThemeLoader.instance;
  }

  /**
   * Charge un thème depuis /public/themes/
   */
  async loadTheme(themeName: string): Promise<Theme> {
    try {
      const response = await fetch(`/themes/${themeName}.json`);
      
      if (!response.ok) {
        throw new Error(`Failed to load theme: ${themeName}`);
      }

      const theme: Theme = await response.json();
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
   */
  applyTheme(theme: Theme, isDark: boolean = false): void {
    if (typeof window === 'undefined') return; // SSR check

    const root = document.documentElement;
    
    // Clear existing theme variables
    this.clearThemeVariables();
    
    // Apply colors
    this.applyColors(theme.colors, root, isDark);
    
    // Apply typography
    this.applyTypography(theme.typography, root);
    
    // Apply spacing
    this.applySpacing(theme.spacing, root);
    
    // Apply border radius
    this.applyBorderRadius(theme.borderRadius, root);
    
    // Apply shadows
    this.applyShadows(theme.shadows, root);
    
    // Apply animation
    this.applyAnimation(theme.animation, root);
    
    // Apply breakpoints
    this.applyBreakpoints(theme.breakpoints, root);
    
    // Apply z-index
    this.applyZIndex(theme.zIndex, root);

    // Apply component styles
    this.applyComponents(theme.components, root);

    this.currentTheme = theme;
  }

  /**
   * Applique les couleurs avec support du mode sombre
   */
  private applyColors(colors: Theme['colors'], root: HTMLElement, isDark: boolean): void {
    // Primary colors
    Object.entries(colors.primary).forEach(([shade, value]) => {
      root.style.setProperty(`--primary-${shade}`, value);
    });

    // Secondary colors
    Object.entries(colors.secondary).forEach(([shade, value]) => {
      root.style.setProperty(`--secondary-${shade}`, value);
    });

    // Neutral colors
    Object.entries(colors.neutral).forEach(([shade, value]) => {
      root.style.setProperty(`--neutral-${shade}`, value);
    });

    // Success colors
    Object.entries(colors.success).forEach(([shade, value]) => {
      root.style.setProperty(`--success-${shade}`, value);
    });

    // Warning colors
    Object.entries(colors.warning).forEach(([shade, value]) => {
      root.style.setProperty(`--warning-${shade}`, value);
    });

    // Error colors
    Object.entries(colors.error).forEach(([shade, value]) => {
      root.style.setProperty(`--error-${shade}`, value);
    });

    // Info colors
    Object.entries(colors.info).forEach(([shade, value]) => {
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
      Object.entries(colors.surface).forEach(([key, value]) => {
        root.style.setProperty(`--surface-${key}`, value);
      });
    }

    // Border colors
    Object.entries(colors.border).forEach(([key, value]) => {
      root.style.setProperty(`--border-${key}`, value);
    });
  }

  /**
   * Applique la typographie
   */
  private applyTypography(typography: Theme['typography'], root: HTMLElement): void {
    // Font families
    Object.entries(typography.fontFamily).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value.join(', '));
    });

    // Font sizes
    Object.entries(typography.fontSize).forEach(([key, value]) => {
      root.style.setProperty(`--font-size-${key}-size`, value.size);
      root.style.setProperty(`--font-size-${key}-line-height`, value.lineHeight);
    });

    // Font weights
    Object.entries(typography.fontWeight).forEach(([key, value]) => {
      root.style.setProperty(`--font-weight-${key}`, value);
    });

    // Letter spacing
    Object.entries(typography.letterSpacing).forEach(([key, value]) => {
      root.style.setProperty(`--letter-spacing-${key}`, value);
    });

    // Line heights
    Object.entries(typography.lineHeight).forEach(([key, value]) => {
      root.style.setProperty(`--line-height-${key}`, value);
    });
  }

  /**
   * Applique les espacements
   */
  private applySpacing(spacing: Theme['spacing'], root: HTMLElement): void {
    Object.entries(spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });
  }

  /**
   * Applique les border radius
   */
  private applyBorderRadius(borderRadius: Theme['borderRadius'], root: HTMLElement): void {
    Object.entries(borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--border-radius-${key}`, value);
    });
  }

  /**
   * Applique les ombres
   */
  private applyShadows(shadows: Theme['shadows'], root: HTMLElement): void {
    Object.entries(shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value);
    });
  }

  /**
   * Applique les animations
   */
  private applyAnimation(animation: Theme['animation'], root: HTMLElement): void {
    // Durations
    Object.entries(animation.duration).forEach(([key, value]) => {
      root.style.setProperty(`--duration-${key}`, value);
    });

    // Easings
    Object.entries(animation.easing).forEach(([key, value]) => {
      root.style.setProperty(`--easing-${key}`, value);
    });
  }

  /**
   * Applique les breakpoints
   */
  private applyBreakpoints(breakpoints: Theme['breakpoints'], root: HTMLElement): void {
    Object.entries(breakpoints).forEach(([key, value]) => {
      root.style.setProperty(`--breakpoint-${key}`, value);
    });
  }

  /**
   * Applique les z-index
   */
  private applyZIndex(zIndex: Theme['zIndex'], root: HTMLElement): void {
    Object.entries(zIndex).forEach(([key, value]) => {
      root.style.setProperty(`--z-index-${key}`, value);
    });
  }

  /**
   * Applique les styles de composants
   */
  private applyComponents(components: Theme['components'], root: HTMLElement): void {
    // On peut créer des classes CSS personnalisées ici
    // Ou simplement exposer les variables pour les utiliser dans les composants
    Object.entries(components).forEach(([componentName, variants]) => {
      Object.entries(variants).forEach(([variantName, styles]) => {
        Object.entries(styles).forEach(([property, value]) => {
          root.style.setProperty(`--${componentName}-${variantName}-${property}`, value);
        });
      });
    });
  }

  /**
   * Nettoie les variables CSS existantes
   */
  private clearThemeVariables(): void {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    const styles = getComputedStyle(root);
    
    // Remove all custom properties that start with our prefixes
    Array.from(styles).forEach(property => {
      if (property.startsWith('--primary-') ||
          property.startsWith('--secondary-') ||
          property.startsWith('--neutral-') ||
          property.startsWith('--success-') ||
          property.startsWith('--warning-') ||
          property.startsWith('--error-') ||
          property.startsWith('--info-') ||
          property.startsWith('--surface-') ||
          property.startsWith('--border-') ||
          property.startsWith('--font-') ||
          property.startsWith('--spacing-') ||
          property.startsWith('--border-radius-') ||
          property.startsWith('--shadow-') ||
          property.startsWith('--duration-') ||
          property.startsWith('--easing-') ||
          property.startsWith('--breakpoint-') ||
          property.startsWith('--z-index-')) {
        root.style.removeProperty(property);
      }
    });
  }

  /**
   * Valide la structure du thème
   */
  private validateTheme(theme: Theme): void {
    if (!theme.meta || !theme.colors || !theme.typography || !theme.spacing) {
      throw new Error('Invalid theme structure: missing required properties');
    }

    if (!theme.colors.primary || !theme.colors.surface) {
      throw new Error('Invalid theme structure: missing required color properties');
    }
  }

  /**
   * Sauvegarde les préférences dans localStorage
   */
  saveThemePreferences(themeName: string, isDark: boolean, customTheme?: Theme): void {
    if (typeof window === 'undefined') return;

    const preferences: ThemeStorage = {
      themeName,
      isDark,
      ...(customTheme && { customTheme })
    };

    try {
      localStorage.setItem('theme-preferences', JSON.stringify(preferences));
    } catch (error) {
      console.error('Failed to save theme preferences:', error);
    }
  }

  /**
   * Charge les préférences depuis localStorage
   */
  loadThemePreferences(): ThemeStorage | null {
    if (typeof window === 'undefined') return null;

    try {
      const stored = localStorage.getItem('theme-preferences');
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Failed to load theme preferences:', error);
      return null;
    }
  }

  /**
   * Découvre les thèmes disponibles
   */
  async discoverThemes(): Promise<string[]> {
    // Cette méthode peut être étendue pour découvrir dynamiquement les thèmes
    // Pour l'instant, on retourne les thèmes connus
    return Array.from(this.availableThemes);
  }

  /**
   * Exporte le thème courant
   */
  exportCurrentTheme(): Theme | null {
    return this.currentTheme;
  }

  /**
   * Importe un thème personnalisé
   */
  importTheme(theme: Theme): void {
    this.validateTheme(theme);
    this.currentTheme = theme;
  }
}