// lib/theme/types.ts

export interface ColorScale {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  }
  
  export interface SurfaceColors {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
  }
  
  export interface BorderColors {
    default: string;
    input: string;
    ring: string;
  }
  
  export interface Colors {
    primary: ColorScale;
    secondary: ColorScale;
    neutral: ColorScale;
    success: ColorScale;
    warning: ColorScale;
    error: ColorScale;
    info: ColorScale;
    surface: SurfaceColors;
    border: BorderColors;
  }
  
  export interface FontSize {
    size: string;
    lineHeight: string;
  }
  
  export interface Typography {
    fontFamily: {
      sans: string[];
      serif: string[];
      mono: string[];
    };
    fontSize: {
      xs: FontSize;
      sm: FontSize;
      base: FontSize;
      lg: FontSize;
      xl: FontSize;
      '2xl': FontSize;
      '3xl': FontSize;
      '4xl': FontSize;
      '5xl': FontSize;
      '6xl': FontSize;
      '7xl': FontSize;
      '8xl': FontSize;
      '9xl': FontSize;
    };
    fontWeight: {
      thin: string;
      extralight: string;
      light: string;
      normal: string;
      medium: string;
      semibold: string;
      bold: string;
      extrabold: string;
      black: string;
    };
    letterSpacing: {
      tighter: string;
      tight: string;
      normal: string;
      wide: string;
      wider: string;
      widest: string;
    };
    lineHeight: {
      none: string;
      tight: string;
      snug: string;
      normal: string;
      relaxed: string;
      loose: string;
    };
  }
  
  export interface Spacing {
    0: string;
    px: string;
    '0.5': string;
    1: string;
    '1.5': string;
    2: string;
    '2.5': string;
    3: string;
    '3.5': string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    14: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    72: string;
    80: string;
    96: string;
  }
  
  export interface BorderRadius {
    none: string;
    sm: string;
    default: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    full: string;
  }
  
  export interface Shadows {
    sm: string;
    default: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    inner: string;
    none: string;
  }
  
  export interface Animation {
    duration: {
      75: string;
      100: string;
      150: string;
      200: string;
      300: string;
      500: string;
      700: string;
      1000: string;
    };
    easing: {
      linear: string;
      in: string;
      out: string;
      inOut: string;
    };
  }
  
  export interface Breakpoints {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  }
  
  export interface ZIndex {
    0: string;
    10: string;
    20: string;
    30: string;
    40: string;
    50: string;
    auto: string;
  }
  
  export interface ComponentStyle {
    [key: string]: string;
  }
  
  export interface Components {
    button: {
      primary: ComponentStyle;
      secondary: ComponentStyle;
    };
    input: {
      default: ComponentStyle;
    };
    card: {
      default: ComponentStyle;
    };
  }
  
  export interface ThemeMeta {
    name: string;
    version: string;
    author: string;
    description: string;
  }
  
  export interface Theme {
    meta: ThemeMeta;
    colors: Colors;
    typography: Typography;
    spacing: Spacing;
    borderRadius: BorderRadius;
    shadows: Shadows;
    animation: Animation;
    breakpoints: Breakpoints;
    zIndex: ZIndex;
    components: Components;
  }
  
  // Types pour le contexte et les hooks
  export interface ThemeContextType {
    theme: Theme;
    themeName: string;
    setTheme: (theme: Theme, name: string) => void;
    loadTheme: (themeName: string) => Promise<void>;
    availableThemes: string[];
    isDark: boolean;
    toggleDarkMode: () => void;
  }
  
  // Types pour les événements
  export type ThemeChangeEvent = {
    theme: Theme;
    themeName: string;
    previousTheme?: Theme;
  };
  
  // Types pour la persistance
  export interface ThemeStorage {
    themeName: string;
    isDark: boolean;
    customTheme?: Theme;
  }