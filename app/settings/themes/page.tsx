"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Palette, Type, Layout, Settings, Save, Download, Upload, Eye, Code, Undo2, Redo2, Monitor, Smartphone, Moon, Sun, Plus, Edit, Trash2, Copy, Share2, Heart, Star, Search, Filter, ChevronDown, ChevronRight, Zap, Sparkles, Play, Pause, RotateCcw, Check, X, AlertCircle, Info } from 'lucide-react';

// Types
interface Theme {
  id: string;
  name: string;
  slug: string;
  description: string;
  isPublished: boolean;
  createdBy: string;
  category: 'light' | 'dark' | 'colorful' | 'minimal' | 'custom';
  tags: string[];
  tokens: {
    colors: Record<string, string>;
    typography: Record<string, string>;
    spacing: Record<string, string>;
    radii: Record<string, string>;
    shadows: Record<string, string>;
    animations: Record<string, string>;
    components: {
      card: Record<string, string>;
      text: Record<string, string>;
      button: Record<string, string>;
    };
  };
  version: number;
  isFavorite?: boolean;
}

// Polices prédéfinies avec preview et métadonnées
const predefinedFonts = [
  { name: "Inter", value: "Inter, system-ui, sans-serif", category: "Sans-serif", description: "Moderne et lisible", popularity: 95 },
  { name: "Roboto", value: "Roboto, system-ui, sans-serif", category: "Sans-serif", description: "Google Material Design", popularity: 90 },
  { name: "Open Sans", value: "Open Sans, system-ui, sans-serif", category: "Sans-serif", description: "Très polyvalente", popularity: 85 },
  { name: "Poppins", value: "Poppins, system-ui, sans-serif", category: "Sans-serif", description: "Géométrique et moderne", popularity: 88 },
  { name: "Lato", value: "Lato, system-ui, sans-serif", category: "Sans-serif", description: "Humaniste et chaleureuse", popularity: 75 },
  { name: "Montserrat", value: "Montserrat, system-ui, sans-serif", category: "Sans-serif", description: "Inspiration Art Déco", popularity: 82 },
  { name: "Source Sans Pro", value: "Source Sans Pro, system-ui, sans-serif", category: "Sans-serif", description: "Adobe, très technique", popularity: 70 },
  { name: "Playfair Display", value: "Playfair Display, Georgia, serif", category: "Serif", description: "Élégante et contrastée", popularity: 65 },
  { name: "Merriweather", value: "Merriweather, Georgia, serif", category: "Serif", description: "Optimisée pour l'écran", popularity: 60 },
  { name: "Lora", value: "Lora, Georgia, serif", category: "Serif", description: "Calligraphique moderne", popularity: 58 },
  { name: "PT Serif", value: "PT Serif, Georgia, serif", category: "Serif", description: "Traditionnelle russe", popularity: 45 },
  { name: "Crimson Text", value: "Crimson Text, Georgia, serif", category: "Serif", description: "Inspirée de l'ancien", popularity: 42 },
  { name: "Fira Code", value: "Fira Code, Consolas, monospace", category: "Monospace", description: "Ligatures pour le code", popularity: 80 },
  { name: "JetBrains Mono", value: "JetBrains Mono, Consolas, monospace", category: "Monospace", description: "Développée pour les IDE", popularity: 85 },
  { name: "Source Code Pro", value: "Source Code Pro, Consolas, monospace", category: "Monospace", description: "Adobe, très claire", popularity: 75 },
  { name: "Inconsolata", value: "Inconsolata, Consolas, monospace", category: "Monospace", description: "Humaniste monospace", popularity: 65 },
  { name: "System UI", value: "system-ui, -apple-system, sans-serif", category: "System", description: "Police native du système", popularity: 100 },
  { name: "Personnalisé", value: "custom", category: "Custom", description: "Votre propre police", popularity: 0 }
];

// Thèmes prédéfinis enrichis
const predefinedThemes: Theme[] = [
  {
    id: "1",
    name: "Corporate Blue",
    slug: "corporate-blue",
    description: "Thème professionnel avec des bleus corporates",
    category: "light",
    tags: ["professionnel", "corporate", "bleu"],
    isPublished: true,
    createdBy: "system",
    version: 1,
    isFavorite: false,
    tokens: {
      colors: {
        primary: "#0f62fe",
        "primary-foreground": "#ffffff",
        "primary-hover": "#0043ce",
        secondary: "#6f7a8a",
        "secondary-hover": "#5a6570",
        background: "#ffffff",
        "background-secondary": "#f8f9fb",
        surface: "#ffffff",
        "surface-hover": "#f8f9fb",
        text: "#0b1726",
        "text-secondary": "#4b5563",
        "text-muted": "#6b7280",
        success: "#16a34a",
        "success-hover": "#15803d",
        warning: "#ea580c",
        danger: "#ef4444",
        "danger-hover": "#dc2626",
        border: "#e5e7eb",
        "border-hover": "#d1d5db"
      },
      typography: {
        "font-family-base": "Inter, system-ui, sans-serif",
        "font-family-heading": "Inter, system-ui, sans-serif",
        "font-size-xs": "12px",
        "font-size-sm": "14px",
        "font-size-base": "16px",
        "font-size-lg": "18px",
        "font-size-xl": "20px",
        "font-size-2xl": "24px",
        "font-size-3xl": "30px",
        "line-height-tight": "1.25",
        "line-height-base": "1.5",
        "line-height-relaxed": "1.75",
        "font-weight-normal": "400",
        "font-weight-medium": "500",
        "font-weight-semibold": "600",
        "font-weight-bold": "700"
      },
      spacing: {
        "space-0": "0px",
        "space-1": "4px",
        "space-2": "8px",
        "space-3": "12px",
        "space-4": "16px",
        "space-5": "20px",
        "space-6": "24px",
        "space-8": "32px",
        "space-10": "40px",
        "space-12": "48px",
        "space-16": "64px",
        "space-20": "80px"
      },
      radii: {
        "radius-none": "0px",
        "radius-sm": "4px",
        "radius-md": "8px",
        "radius-lg": "12px",
        "radius-xl": "16px",
        "radius-2xl": "24px",
        "radius-full": "9999px"
      },
      shadows: {
        "shadow-none": "none",
        "shadow-sm": "0 1px 2px rgba(0, 0, 0, 0.05)",
        "shadow-md": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        "shadow-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        "shadow-xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        "shadow-inner": "inset 0 2px 4px rgba(0, 0, 0, 0.06)"
      },
      animations: {
        "transition-fast": "150ms",
        "transition-base": "250ms",
        "transition-slow": "350ms",
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
        "ease-in": "cubic-bezier(0.4, 0, 1, 1)"
      },
      components: {
        card: {
          background: "var(--color-surface)",
          padding: "var(--space-6)",
          "border-radius": "var(--radius-lg)",
          "box-shadow": "var(--shadow-md)",
          border: "1px solid var(--color-border)"
        },
        text: {
          color: "var(--color-text)",
          "font-size": "var(--font-size-base)",
          "line-height": "var(--line-height-base)",
          "font-family": "var(--font-family-base)"
        },
        button: {
          padding: "var(--space-3) var(--space-6)",
          "border-radius": "var(--radius-md)",
          "font-weight": "var(--font-weight-medium)",
          transition: "all var(--transition-base) var(--ease-in-out)"
        }
      }
    }
  },
  {
    id: "2",
    name: "Dark Elegance",
    slug: "dark-elegance",
    description: "Thème sombre élégant avec des accents dorés",
    category: "dark",
    tags: ["sombre", "élégant", "premium"],
    isPublished: true,
    createdBy: "system",
    version: 1,
    isFavorite: true,
    tokens: {
      colors: {
        primary: "#f59e0b",
        "primary-foreground": "#1f2937",
        "primary-hover": "#d97706",
        secondary: "#64748b",
        "secondary-hover": "#475569",
        background: "#0f172a",
        "background-secondary": "#1e293b",
        surface: "#1e293b",
        "surface-hover": "#334155",
        text: "#f1f5f9",
        "text-secondary": "#cbd5e1",
        "text-muted": "#94a3b8",
        success: "#22c55e",
        "success-hover": "#16a34a",
        warning: "#f59e0b",
        danger: "#ef4444",
        "danger-hover": "#dc2626",
        border: "#334155",
        "border-hover": "#475569"
      },
      typography: {
        "font-family-base": "Inter, system-ui, sans-serif",
        "font-family-heading": "Playfair Display, Georgia, serif",
        "font-size-xs": "12px",
        "font-size-sm": "14px",
        "font-size-base": "16px",
        "font-size-lg": "18px",
        "font-size-xl": "20px",
        "font-size-2xl": "24px",
        "font-size-3xl": "30px",
        "line-height-tight": "1.25",
        "line-height-base": "1.5",
        "line-height-relaxed": "1.75",
        "font-weight-normal": "400",
        "font-weight-medium": "500",
        "font-weight-semibold": "600",
        "font-weight-bold": "700"
      },
      spacing: {
        "space-0": "0px",
        "space-1": "4px",
        "space-2": "8px",
        "space-3": "12px",
        "space-4": "16px",
        "space-5": "20px",
        "space-6": "24px",
        "space-8": "32px",
        "space-10": "40px",
        "space-12": "48px",
        "space-16": "64px",
        "space-20": "80px"
      },
      radii: {
        "radius-none": "0px",
        "radius-sm": "4px",
        "radius-md": "8px",
        "radius-lg": "12px",
        "radius-xl": "16px",
        "radius-2xl": "24px",
        "radius-full": "9999px"
      },
      shadows: {
        "shadow-none": "none",
        "shadow-sm": "0 1px 2px rgba(0, 0, 0, 0.3)",
        "shadow-md": "0 4px 6px -1px rgba(0, 0, 0, 0.4)",
        "shadow-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
        "shadow-xl": "0 20px 25px -5px rgba(0, 0, 0, 0.6)",
        "shadow-inner": "inset 0 2px 4px rgba(0, 0, 0, 0.3)"
      },
      animations: {
        "transition-fast": "150ms",
        "transition-base": "250ms",
        "transition-slow": "350ms",
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
        "ease-in": "cubic-bezier(0.4, 0, 1, 1)"
      },
      components: {
        card: {
          background: "var(--color-surface)",
          padding: "var(--space-6)",
          "border-radius": "var(--radius-lg)",
          "box-shadow": "var(--shadow-lg)",
          border: "1px solid var(--color-border)"
        },
        text: {
          color: "var(--color-text)",
          "font-size": "var(--font-size-base)",
          "line-height": "var(--line-height-base)",
          "font-family": "var(--font-family-base)"
        },
        button: {
          padding: "var(--space-3) var(--space-6)",
          "border-radius": "var(--radius-md)",
          "font-weight": "var(--font-weight-medium)",
          transition: "all var(--transition-base) var(--ease-in-out)"
        }
      }
    }
  },
  {
    id: "3",
    name: "Vibrant Creative",
    slug: "vibrant-creative",
    description: "Thème coloré et créatif pour les projets artistiques",
    category: "colorful",
    tags: ["coloré", "créatif", "artistique"],
    isPublished: true,
    createdBy: "system",
    version: 1,
    isFavorite: false,
    tokens: {
      colors: {
        primary: "#8b5cf6",
        "primary-foreground": "#ffffff",
        "primary-hover": "#7c3aed",
        secondary: "#06b6d4",
        "secondary-hover": "#0891b2",
        background: "#fefefe",
        "background-secondary": "#faf5ff",
        surface: "#ffffff",
        "surface-hover": "#f3e8ff",
        text: "#1f2937",
        "text-secondary": "#4b5563",
        "text-muted": "#6b7280",
        success: "#10b981",
        "success-hover": "#059669",
        warning: "#f59e0b",
        danger: "#ef4444",
        "danger-hover": "#dc2626",
        border: "#e5e7eb",
        "border-hover": "#d1d5db"
      },
      typography: {
        "font-family-base": "Poppins, system-ui, sans-serif",
        "font-family-heading": "Montserrat, system-ui, sans-serif",
        "font-size-xs": "12px",
        "font-size-sm": "14px",
        "font-size-base": "16px",
        "font-size-lg": "18px",
        "font-size-xl": "20px",
        "font-size-2xl": "24px",
        "font-size-3xl": "30px",
        "line-height-tight": "1.25",
        "line-height-base": "1.5",
        "line-height-relaxed": "1.75",
        "font-weight-normal": "400",
        "font-weight-medium": "500",
        "font-weight-semibold": "600",
        "font-weight-bold": "700"
      },
      spacing: {
        "space-0": "0px",
        "space-1": "4px",
        "space-2": "8px",
        "space-3": "12px",
        "space-4": "16px",
        "space-5": "20px",
        "space-6": "24px",
        "space-8": "32px",
        "space-10": "40px",
        "space-12": "48px",
        "space-16": "64px",
        "space-20": "80px"
      },
      radii: {
        "radius-none": "0px",
        "radius-sm": "6px",
        "radius-md": "12px",
        "radius-lg": "18px",
        "radius-xl": "24px",
        "radius-2xl": "32px",
        "radius-full": "9999px"
      },
      shadows: {
        "shadow-none": "none",
        "shadow-sm": "0 2px 4px rgba(139, 92, 246, 0.1)",
        "shadow-md": "0 8px 16px rgba(139, 92, 246, 0.15)",
        "shadow-lg": "0 16px 32px rgba(139, 92, 246, 0.2)",
        "shadow-xl": "0 24px 48px rgba(139, 92, 246, 0.25)",
        "shadow-inner": "inset 0 2px 4px rgba(139, 92, 246, 0.1)"
      },
      animations: {
        "transition-fast": "150ms",
        "transition-base": "250ms",
        "transition-slow": "350ms",
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
        "ease-in": "cubic-bezier(0.4, 0, 1, 1)"
      },
      components: {
        card: {
          background: "var(--color-surface)",
          padding: "var(--space-6)",
          "border-radius": "var(--radius-xl)",
          "box-shadow": "var(--shadow-md)",
          border: "2px solid var(--color-border)"
        },
        text: {
          color: "var(--color-text)",
          "font-size": "var(--font-size-base)",
          "line-height": "var(--line-height-base)",
          "font-family": "var(--font-family-base)"
        },
        button: {
          padding: "var(--space-4) var(--space-8)",
          "border-radius": "var(--radius-lg)",
          "font-weight": "var(--font-weight-semibold)",
          transition: "all var(--transition-base) var(--ease-in-out)"
        }
      }
    }
  }
];

// Composant Enhanced Card avec interactions
const TestCard = ({ 
  theme, 
  title = "Exemple de Card", 
  subtitle = "Sous-titre interactif", 
  content = "Cette carte démontre les interactions et les styles appliqués par le thème sélectionné.",
  showInteractions = true,
  variant = "default"
}: { 
  theme: Theme; 
  title?: string; 
  subtitle?: string; 
  content?: string;
  showInteractions?: boolean;
  variant?: "default" | "elevated" | "outlined";
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 50));

  const getCardStyles = () => {
    const base = {
      backgroundColor: theme.tokens.colors.surface,
      padding: theme.tokens.spacing['space-6'],
      borderRadius: theme.tokens.radii['radius-lg'],
      boxShadow: theme.tokens.shadows['shadow-md'],
      fontFamily: theme.tokens.typography['font-family-base'],
      border: `1px solid ${theme.tokens.colors.border}`,
      transition: `all ${theme.tokens.animations['transition-base']} ${theme.tokens.animations['ease-in-out']}`,
      transform: isHovered ? 'translateY(-2px)' : 'translateY(0px)',
      cursor: showInteractions ? 'pointer' : 'default'
    };

    if (isHovered && showInteractions) {
      return {
        ...base,
        backgroundColor: theme.tokens.colors['surface-hover'] || theme.tokens.colors.surface,
        boxShadow: theme.tokens.shadows['shadow-lg'],
        borderColor: theme.tokens.colors['border-hover'] || theme.tokens.colors.border
      };
    }

    if (variant === 'elevated') {
      return { ...base, boxShadow: theme.tokens.shadows['shadow-xl'] };
    }

    if (variant === 'outlined') {
      return { ...base, boxShadow: 'none', border: `2px solid ${theme.tokens.colors.border}` };
    }

    return base;
  };

  return (
    <div 
      style={getCardStyles()} 
      className="mb-4 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      {showInteractions && (
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setLikes(prev => prev + 1);
            }}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            style={{ backgroundColor: isHovered ? theme.tokens.colors['background-secondary'] : 'transparent' }}
          >
            <Heart className="w-4 h-4" style={{ color: theme.tokens.colors['text-muted'] }} />
          </button>
          <button 
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            style={{ backgroundColor: isHovered ? theme.tokens.colors['background-secondary'] : 'transparent' }}
          >
            <Share2 className="w-4 h-4" style={{ color: theme.tokens.colors['text-muted'] }} />
          </button>
        </div>
      )}

      <h3 style={{ 
        color: theme.tokens.colors.text, 
        fontSize: theme.tokens.typography['font-size-xl'], 
        fontWeight: theme.tokens.typography['font-weight-semibold'],
        fontFamily: theme.tokens.typography['font-family-heading'] || theme.tokens.typography['font-family-base'],
        margin: '0 0 8px 0' 
      }}>
        {title}
      </h3>
      
      <p style={{ 
        color: theme.tokens.colors['text-secondary'], 
        fontSize: theme.tokens.typography['font-size-sm'], 
        margin: '0 0 12px 0',
        fontWeight: theme.tokens.typography['font-weight-medium']
      }}>
        {subtitle}
      </p>
      
      <p style={{ 
        color: theme.tokens.colors.text, 
        fontSize: theme.tokens.typography['font-size-base'], 
        lineHeight: theme.tokens.typography['line-height-base'], 
        margin: '0 0 16px 0' 
      }}>
        {content}
      </p>

      {showInteractions && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span style={{ 
              color: theme.tokens.colors['text-muted'], 
              fontSize: theme.tokens.typography['font-size-sm'] 
            }}>
              {likes} j'aime
            </span>
          </div>
          <div className="flex gap-2">
            <button
              style={{
                backgroundColor: theme.tokens.colors.primary,
                color: theme.tokens.colors['primary-foreground'],
                padding: theme.tokens.components.button.padding,
                borderRadius: theme.tokens.components.button['border-radius'] || theme.tokens.radii['radius-md'],
                fontWeight: theme.tokens.components.button['font-weight'],
                fontSize: theme.tokens.typography['font-size-sm'],
                border: 'none',
                cursor: 'pointer',
                transition: theme.tokens.components.button.transition
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.tokens.colors['primary-hover'] || theme.tokens.colors.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.tokens.colors.primary;
              }}
            >
              Action
            </button>
            <button
              style={{
                backgroundColor: 'transparent',
                color: theme.tokens.colors.text,
                padding: theme.tokens.components.button.padding,
                borderRadius: theme.tokens.components.button['border-radius'] || theme.tokens.radii['radius-md'],
                fontWeight: theme.tokens.components.button['font-weight'],
                fontSize: theme.tokens.typography['font-size-sm'],
                border: `1px solid ${theme.tokens.colors.border}`,
                cursor: 'pointer',
                transition: theme.tokens.components.button.transition
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.tokens.colors['background-secondary'];
                e.currentTarget.style.borderColor = theme.tokens.colors['border-hover'] || theme.tokens.colors.border;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = theme.tokens.colors.border;
              }}
            >
              Détails
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Composant Enhanced Text avec variantes
const TestText = ({ 
  theme, 
  variant = "body", 
  children = "Exemple de texte",
  interactive = false 
}: { 
  theme: Theme; 
  variant?: string; 
  children?: string;
  interactive?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTextStyles = () => {
    const base = {
      fontFamily: theme.tokens.typography['font-family-base'],
      lineHeight: theme.tokens.typography['line-height-base'],
      transition: interactive ? `all ${theme.tokens.animations['transition-fast']} ${theme.tokens.animations['ease-out']}` : undefined,
      cursor: interactive ? 'pointer' : 'default'
    };

    let styles = { ...base };

    switch (variant) {
      case 'h1':
        styles = { 
          ...base, 
          fontSize: theme.tokens.typography['font-size-3xl'], 
          fontWeight: theme.tokens.typography['font-weight-bold'],
          fontFamily: theme.tokens.typography['font-family-heading'] || theme.tokens.typography['font-family-base'],
          color: theme.tokens.colors.text,
          lineHeight: theme.tokens.typography['line-height-tight']
        };
        break;
      case 'h2':
        styles = { 
          ...base, 
          fontSize: theme.tokens.typography['font-size-2xl'], 
          fontWeight: theme.tokens.typography['font-weight-semibold'],
          fontFamily: theme.tokens.typography['font-family-heading'] || theme.tokens.typography['font-family-base'],
          color: theme.tokens.colors.text,
          lineHeight: theme.tokens.typography['line-height-tight']
        };
        break;
      case 'h3':
        styles = { 
          ...base, 
          fontSize: theme.tokens.typography['font-size-xl'], 
          fontWeight: theme.tokens.typography['font-weight-semibold'],
          color: theme.tokens.colors.text
        };
        break;
      case 'large':
        styles = { 
          ...base, 
          fontSize: theme.tokens.typography['font-size-lg'], 
          color: theme.tokens.colors.text
        };
        break;
      case 'small':
        styles = { 
          ...base, 
          fontSize: theme.tokens.typography['font-size-sm'], 
          color: theme.tokens.colors['text-secondary']
        };
        break;
      case 'muted':
        styles = { 
          ...base, 
          fontSize: theme.tokens.typography['font-size-sm'], 
          color: theme.tokens.colors['text-muted']
        };
        break;
      case 'body':
      default:
        styles = { 
          ...base, 
          fontSize: theme.tokens.typography['font-size-base'], 
          color: theme.tokens.colors.text
        };
        break;
    }

    if (interactive && isHovered) {
      styles.color = theme.tokens.colors.primary;
    }

    return styles;
  };

  return (
    <div 
      style={getTextStyles()}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      {children}
    </div>
  );
};

// Composant Enhanced Font Picker avec recherche et preview
const FontPicker = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [customValue, setCustomValue] = useState(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer le dropdown quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Vérifier si la valeur actuelle est dans les prédéfinies
  const predefinedFont = predefinedFonts.find(font => font.value === value && font.value !== "custom");
  
  // Filtrer les polices selon la recherche
  const filteredFonts = predefinedFonts.filter(font => 
    font.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    font.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    font.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectFont = (selectedValue: string) => {
    if (selectedValue === "custom") {
      setIsCustom(true);
      setCustomValue(value);
    } else {
      setIsCustom(false);
      onChange(selectedValue);
    }
    setIsOpen(false);
  };

  const handleCustomChange = (customVal: string) => {
    setCustomValue(customVal);
    onChange(customVal);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Sélecteur principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Type className="w-4 h-4 text-gray-500" />
          <div className="text-left">
            <div className="font-medium text-gray-900">
              {predefinedFont?.name || "Police personnalisée"}
            </div>
            <div className="text-sm text-gray-500">
              {predefinedFont?.description || "Votre police personnalisée"}
            </div>
          </div>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-hidden">
          {/* Barre de recherche */}
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher une police..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Liste des polices */}
          <div className="max-h-64 overflow-y-auto">
            {Object.entries(
              filteredFonts.reduce((acc, font) => {
                if (!acc[font.category]) acc[font.category] = [];
                acc[font.category].push(font);
                return acc;
              }, {} as Record<string, typeof predefinedFonts>)
            ).map(([category, fonts]) => (
              <div key={category}>
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">
                  {category}
                </div>
                {fonts.map(font => (
                  <button
                    key={font.value}
                    onClick={() => handleSelectFont(font.value)}
                    className="w-full px-3 py-3 text-left hover:bg-gray-50 border-b border-gray-50 last:border-b-0 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div 
                          className="font-medium text-gray-900 mb-1"
                          style={{ fontFamily: font.value !== "custom" ? font.value : undefined }}
                        >
                          {font.name}
                        </div>
                        <div className="text-sm text-gray-500">{font.description}</div>
                        <div 
                          className="text-sm text-gray-600 mt-1"
                          style={{ fontFamily: font.value !== "custom" ? font.value : undefined }}
                        >
                          The quick brown fox jumps
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {font.popularity > 0 && (
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-500">{font.popularity}%</span>
                          </div>
                        )}
                        {font.value === value && (
                          <Check className="w-4 h-4 text-blue-500" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Input personnalisé */}
      {(isCustom || !predefinedFont) && (
        <div className="mt-4 space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Font-family personnalisé :
          </label>
          <input
            type="text"
            value={customValue}
            onChange={(e) => handleCustomChange(e.target.value)}
            placeholder="ex: 'Custom Font', Arial, sans-serif"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-start gap-2 text-xs text-gray-500">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <div>
              Incluez les polices de fallback (ex: Arial, sans-serif). Pour les Google Fonts, 
              ajoutez d'abord la police via &lt;link&gt; ou @import dans votre CSS.
            </div>
          </div>
        </div>
      )}

      {/* Preview de la police */}
      <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100">
        <div className="text-sm font-medium text-gray-700 mb-3">Aperçu de la police :</div>
        <div className="space-y-2">
          <p 
            style={{ fontFamily: customValue || value }} 
            className="text-2xl font-bold text-gray-900"
          >
            Design System
          </p>
          <p 
            style={{ fontFamily: customValue || value }} 
            className="text-lg text-gray-700"
          >
            The quick brown fox jumps over the lazy dog
          </p>
          <p 
            style={{ fontFamily: customValue || value }} 
            className="text-sm text-gray-600"
          >
            Aa Bb Cc Dd Ee Ff • 0123456789 • !@#$%^&*()
          </p>
          <div className="text-xs text-gray-500 font-mono">
            {customValue || value}
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant Enhanced Color Picker avec palette et harmonies
const ColorPicker = ({ 
  label, 
  value, 
  onChange,
  showHarmonies = false 
}: { 
  label: string; 
  value: string; 
  onChange: (value: string) => void;
  showHarmonies?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [recentColors, setRecentColors] = useState<string[]>([]);
  
  // Palettes de couleurs populaires
  const colorPalettes = {
    grays: ["#f9fafb", "#f3f4f6", "#e5e7eb", "#d1d5db", "#9ca3af", "#6b7280", "#4b5563", "#374151", "#1f2937", "#111827"],
    blues: ["#eff6ff", "#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a"],
    greens: ["#f0fdf4", "#dcfce7", "#bbf7d0", "#86efac", "#4ade80", "#22c55e", "#16a34a", "#15803d", "#166534", "#14532d"],
    reds: ["#fef2f2", "#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d", "#450a0a"],
    purples: ["#faf5ff", "#f3e8ff", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f6", "#9333ea", "#7c3aed", "#6d28d9", "#5b21b6"],
    yellows: ["#fffbeb", "#fef3c7", "#fde68a", "#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f"]
  };

  const handleColorChange = (newColor: string) => {
    onChange(newColor);
    if (!recentColors.includes(newColor)) {
      setRecentColors(prev => [newColor, ...prev.slice(0, 9)]);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
        <div className="relative">
          <input
            type="color"
            value={value}
            onChange={(e) => handleColorChange(e.target.value)}
            className="w-10 h-10 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-gray-300 transition-colors"
          />
          <div 
            className="absolute inset-1 rounded-md"
            style={{ backgroundColor: value }}
          />
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-gray-900">{label}</div>
          <div className="text-xs text-gray-500 uppercase">{value}</div>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => handleColorChange(e.target.value)}
          className="w-24 px-3 py-2 text-sm border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <Palette className="w-4 h-4" />
        </button>
      </div>

      {/* Palette étendue */}
      {isOpen && (
        <div className="absolute z-50 mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-lg w-80">
          <div className="space-y-4">
            {/* Couleurs récentes */}
            {recentColors.length > 0 && (
              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Couleurs récentes</div>
                <div className="flex gap-1 flex-wrap">
                  {recentColors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorChange(color)}
                      className="w-8 h-8 rounded border-2 border-gray-200 hover:border-gray-400 transition-colors"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Palettes de couleurs */}
            {Object.entries(colorPalettes).map(([name, colors]) => (
              <div key={name}>
                <div className="text-sm font-medium text-gray-700 mb-2 capitalize">{name}</div>
                <div className="flex gap-1">
                  {colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorChange(color)}
                      className="w-6 h-6 rounded border border-gray-200 hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
            >
              Fermer la palette
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function ThemeSystemDemo() {
  const [themes, setThemes] = useState<Theme[]>(predefinedThemes);
  const [selectedThemeId, setSelectedThemeId] = useState<string>("1");
  const [activeTab, setActiveTab] = useState<string>("preview");
  const [editingTheme, setEditingTheme] = useState<Theme | null>(null);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [showAnimations, setShowAnimations] = useState(true);
  const [undoStack, setUndoStack] = useState<Theme[]>([]);
  const [redoStack, setRedoStack] = useState<Theme[]>([]);

  const selectedTheme = themes.find(t => t.id === selectedThemeId) || themes[0];
  const currentTheme = editingTheme || selectedTheme;

  // Filtrer les thèmes
  const filteredThemes = themes.filter(theme => {
    const matchesSearch = theme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         theme.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         theme.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = filterCategory === "all" || theme.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  // Fonction pour mettre à jour un token avec undo/redo
  const updateToken = (category: string, key: string, value: string) => {
    if (!editingTheme) return;
    
    // Sauvegarder l'état actuel pour undo
    setUndoStack(prev => [...prev, { ...editingTheme }]);
    setRedoStack([]); // Vider redo stack
    
    setEditingTheme({
      ...editingTheme,
      tokens: {
        ...editingTheme.tokens,
        [category]: {
          ...editingTheme.tokens[category as keyof typeof editingTheme.tokens],
          [key]: value
        }
      }
    });
  };

  // Undo/Redo
  const undo = () => {
    if (undoStack.length === 0 || !editingTheme) return;
    
    const previousState = undoStack[undoStack.length - 1];
    setRedoStack(prev => [...prev, { ...editingTheme }]);
    setUndoStack(prev => prev.slice(0, -1));
    setEditingTheme(previousState);
  };

  const redo = () => {
    if (redoStack.length === 0 || !editingTheme) return;
    
    const nextState = redoStack[redoStack.length - 1];
    setUndoStack(prev => [...prev, { ...editingTheme }]);
    setRedoStack(prev => prev.slice(0, -1));
    setEditingTheme(nextState);
  };

  // Commencer l'édition d'un thème
  const startEditing = (theme: Theme) => {
    setEditingTheme({ ...theme });
    setUndoStack([]);
    setRedoStack([]);
    setActiveTab("colors");
  };

  // Sauvegarder les modifications
  const saveTheme = () => {
    if (!editingTheme) return;
    
    const updatedThemes = themes.map(t => 
      t.id === editingTheme.id 
        ? { ...editingTheme, version: editingTheme.version + 1 }
        : t
    );
    
    setThemes(updatedThemes);
    setEditingTheme(null);
    setUndoStack([]);
    setRedoStack([]);
    setActiveTab("preview");
  };

  // Annuler les modifications
  const cancelEditing = () => {
    setEditingTheme(null);
    setUndoStack([]);
    setRedoStack([]);
    setActiveTab("preview");
  };

  // Toggle favori
  const toggleFavorite = (themeId: string) => {
    setThemes(prev => prev.map(theme => 
      theme.id === themeId 
        ? { ...theme, isFavorite: !theme.isFavorite }
        : theme
    ));
  };

  // Créer un nouveau thème
  const createNewTheme = () => {
    const newTheme: Theme = {
      id: Date.now().toString(),
      name: "Nouveau Thème",
      slug: "nouveau-theme",
      description: "Thème personnalisé créé par l'utilisateur",
      category: "custom",
      tags: ["personnalisé", "nouveau"],
      isPublished: false,
      createdBy: "user",
      version: 1,
      isFavorite: false,
      tokens: { ...selectedTheme.tokens }
    };
    
    setThemes([...themes, newTheme]);
    setSelectedThemeId(newTheme.id);
    startEditing(newTheme);
  };

  // Dupliquer un thème
  const duplicateTheme = (theme: Theme) => {
    const duplicatedTheme: Theme = {
      ...theme,
      id: Date.now().toString(),
      name: `${theme.name} (Copie)`,
      slug: `${theme.slug}-copy`,
      version: 1,
      createdBy: "user",
      isPublished: false,
      isFavorite: false
    };
    
    setThemes([...themes, duplicatedTheme]);
    setSelectedThemeId(duplicatedTheme.id);
  };

  // Export/Import
  const exportTheme = () => {
    const dataStr = JSON.stringify(selectedTheme, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `${selectedTheme.slug}-theme.json`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const tabs = [
    { id: "preview", label: "Aperçu", icon: Eye, description: "Voir le rendu final" },
    { id: "colors", label: "Couleurs", icon: Palette, description: "Palette de couleurs" },
    { id: "typography", label: "Typographie", icon: Type, description: "Polices et tailles" },
    { id: "spacing", label: "Espacement", icon: Layout, description: "Marges et paddings" },
    { id: "effects", label: "Effets", icon: Sparkles, description: "Ombres et animations" },
    { id: "components", label: "Composants", icon: Settings, description: "Styles des composants" },
    { id: "advanced", label: "Avancé", icon: Code, description: "Éditeur JSON" }
  ];

  const getPreviewWidth = () => {
    switch (previewDevice) {
      case "mobile": return "375px";
      case "tablet": return "768px";
      case "desktop": return "100%";
      default: return "100%";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header premium */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 px-6 py-4 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Éditeur de Thèmes Premium
              </h1>
              <p className="text-gray-600">Système de thématisation Next.js/TypeScript avancé</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {editingTheme && (
              <div className="flex items-center gap-2 mr-4">
                <button
                  onClick={undo}
                  disabled={undoStack.length === 0}
                  className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 rounded-lg transition-colors"
                  title="Annuler (Ctrl+Z)"
                >
                  <Undo2 className="w-4 h-4" />
                </button>
                <button
                  onClick={redo}
                  disabled={redoStack.length === 0}
                  className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 rounded-lg transition-colors"
                  title="Refaire (Ctrl+Y)"
                >
                  <Redo2 className="w-4 h-4" />
                </button>
              </div>
            )}
            
            <button
              onClick={exportTheme}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Exporter
            </button>
            <button
              onClick={createNewTheme}
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Plus className="w-4 h-4" />
              Nouveau Thème
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-screen">
        {/* Sidebar améliorée - Liste des thèmes */}
        <div className="w-96 bg-white/80 backdrop-blur-sm border-r border-gray-200/50 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-200/50">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900">Bibliothèque de Thèmes</h2>
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
              </button>
            </div>
            
            {/* Recherche et filtres */}
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un thème..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                />
              </div>
              
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
              >
                <option value="all">Toutes catégories</option>
                <option value="light">Clair</option>
                <option value="dark">Sombre</option>
                <option value="colorful">Coloré</option>
                <option value="minimal">Minimal</option>
                <option value="custom">Personnalisé</option>
              </select>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {filteredThemes.map((theme) => (
              <div
                key={theme.id}
                className={`group relative p-4 rounded-xl border transition-all cursor-pointer hover:shadow-lg ${
                  selectedThemeId === theme.id
                    ? 'border-blue-500 bg-blue-50/50 shadow-md ring-2 ring-blue-500/20'
                    : 'border-gray-200 bg-white/60 hover:border-gray-300 hover:bg-white'
                }`}
                onClick={() => setSelectedThemeId(theme.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900 truncate">{theme.name}</h3>
                      {theme.isFavorite && (
                        <Heart className="w-4 h-4 text-red-500 fill-current flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{theme.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {theme.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Statut et version */}
                    <div className="flex items-center gap-2 text-xs">
                      <span className={`px-2 py-1 rounded-full ${
                        theme.isPublished 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {theme.isPublished ? 'Publié' : 'Brouillon'}
                      </span>
                      <span className="text-gray-500">v{theme.version}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 capitalize">{theme.category}</span>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-col gap-1 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(theme.id);
                      }}
                      className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                      title="Ajouter aux favoris"
                    >
                      <Heart className={`w-4 h-4 ${theme.isFavorite ? 'fill-current text-red-500' : ''}`} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        startEditing(theme);
                      }}
                      className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                      title="Modifier"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        duplicateTheme(theme);
                      }}
                      className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
                      title="Dupliquer"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Preview couleurs avec animation */}
                <div className="flex gap-1 mt-4">
                  {Object.entries(theme.tokens.colors).slice(0, 8).map(([key, value], index) => (
                    <div
                      key={key}
                      className="w-5 h-5 rounded-md border-2 border-white shadow-sm transition-all duration-200 hover:scale-125 hover:shadow-md hover:z-10 relative"
                      style={{ 
                        backgroundColor: value,
                        animationDelay: showAnimations ? `${index * 50}ms` : '0ms'
                      }}
                      title={`${key}: ${value}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Zone principale */}
        <div className="flex-1 flex flex-col">
          {/* Tabs améliorées */}
          <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`group relative flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-white text-blue-700 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                      }`}
                      title={tab.description}
                    >
                      <Icon className={`w-4 h-4 transition-transform ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-105'}`} />
                      {tab.label}
                      {activeTab === tab.id && (
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Actions d'édition */}
              <div className="flex items-center gap-4">
                {/* Contrôles de preview */}
                {activeTab === "preview" && (
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setPreviewDevice("desktop")}
                      className={`p-2 rounded-md transition-colors ${previewDevice === "desktop" ? 'bg-white shadow-sm text-blue-700' : 'text-gray-600 hover:text-gray-900'}`}
                      title="Vue desktop"
                    >
                      <Monitor className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setPreviewDevice("tablet")}
                      className={`p-2 rounded-md transition-colors ${previewDevice === "tablet" ? 'bg-white shadow-sm text-blue-700' : 'text-gray-600 hover:text-gray-900'}`}
                      title="Vue tablette"
                    >
                      <div className="w-4 h-4 border-2 border-current rounded-sm" />
                    </button>
                    <button
                      onClick={() => setPreviewDevice("mobile")}
                      className={`p-2 rounded-md transition-colors ${previewDevice === "mobile" ? 'bg-white shadow-sm text-blue-700' : 'text-gray-600 hover:text-gray-900'}`}
                      title="Vue mobile"
                    >
                      <Smartphone className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {editingTheme && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={cancelEditing}
                      className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4 mr-2 inline" />
                      Annuler
                    </button>
                    <button
                      onClick={saveTheme}
                      className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg text-sm font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <Save className="w-4 h-4" />
                      Sauvegarder
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="flex-1 overflow-hidden">
            {activeTab === "preview" && (
              <div className="h-full p-6 overflow-auto">
                <div className="max-w-6xl mx-auto">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Aperçu : {currentTheme.name}
                      </h2>
                      <p className="text-gray-600">{currentTheme.description}</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Animations</span>
                        <button
                          onClick={() => setShowAnimations(!showAnimations)}
                          className={`relative w-11 h-6 rounded-full transition-colors ${
                            showAnimations ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            showAnimations ? 'transform translate-x-6' : 'transform translate-x-1'
                          }`} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="transition-all duration-500" style={{ maxWidth: getPreviewWidth(), margin: previewDevice !== "desktop" ? "0 auto" : "0" }}>
                    <div 
                      className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200/50"
                      style={{ 
                        backgroundColor: currentTheme.tokens.colors.background,
                        fontFamily: currentTheme.tokens.typography['font-family-base']
                      }}
                    >
                      {/* Section Typographie */}
                      <div className="mb-12">
                        <TestText theme={currentTheme} variant="h1" interactive>
                          Design System Premium
                        </TestText>
                        <div className="mb-4" />
                        
                        <TestText theme={currentTheme} variant="h2" interactive>
                          Composants & Interactions
                        </TestText>
                        <div className="mb-6" />
                        
                        <TestText theme={currentTheme} variant="large">
                          Cette démo présente un système complet de thématisation avec des interactions 
                          avancées et une expérience utilisateur moderne.
                        </TestText>
                        <div className="mb-4" />

                        <TestText theme={currentTheme} variant="muted">
                          Survolez les éléments pour voir les effets de transition et les états interactifs.
                        </TestText>
                      </div>

                      {/* Section Cards */}
                      <div className="grid gap-6 mb-12">
                        <TestCard
                          theme={currentTheme}
                          title="Card Interactive Premium"
                          subtitle="Avec animations et micro-interactions"
                          content="Cette carte démontre les capacités d'interaction avancées : hover effects, animations fluides, boutons avec états, et système de likes intégré."
                          showInteractions={true}
                          variant="default"
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                          <TestCard
                            theme={currentTheme}
                            title="Card Élevée"
                            subtitle="Variant avec ombre prononcée"
                            content="Exemple de variant de carte avec une élévation plus importante pour attirer l'attention."
                            showInteractions={true}
                            variant="elevated"
                          />
                          
                          <TestCard
                            theme={currentTheme}
                            title="Card Outline"
                            subtitle="Style minimaliste"
                            content="Variant avec bordure sans ombre, parfait pour un design plus épuré et minimaliste."
                            showInteractions={true}
                            variant="outlined"
                          />
                        </div>
                      </div>

                      {/* Section Boutons et États */}
                      <div className="mb-12">
                        <TestText theme={currentTheme} variant="h3">
                          Boutons & États Interactifs
                        </TestText>
                        <div className="mb-6" />

                        <div className="flex flex-wrap gap-4 mb-6">
                          <button
                            className="px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                            style={{
                              backgroundColor: currentTheme.tokens.colors.primary,
                              color: currentTheme.tokens.colors['primary-foreground'],
                              focusRingColor: currentTheme.tokens.colors.primary
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = currentTheme.tokens.colors['primary-hover'] || currentTheme.tokens.colors.primary;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = currentTheme.tokens.colors.primary;
                            }}
                          >
                            Bouton Primaire
                          </button>

                          <button
                            className="px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 border"
                            style={{
                              backgroundColor: 'transparent',
                              color: currentTheme.tokens.colors.text,
                              borderColor: currentTheme.tokens.colors.border
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = currentTheme.tokens.colors['background-secondary'];
                              e.currentTarget.style.borderColor = currentTheme.tokens.colors['border-hover'] || currentTheme.tokens.colors.border;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.borderColor = currentTheme.tokens.colors.border;
                            }}
                          >
                            Bouton Secondaire
                          </button>

                          <button
                            className="px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                            style={{
                              backgroundColor: currentTheme.tokens.colors.success,
                              color: currentTheme.tokens.colors['primary-foreground']
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = currentTheme.tokens.colors['success-hover'] || currentTheme.tokens.colors.success;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = currentTheme.tokens.colors.success;
                            }}
                          >
                            Succès
                          </button>

                          <button
                            className="px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                            style={{
                              backgroundColor: currentTheme.tokens.colors.danger,
                              color: currentTheme.tokens.colors['primary-foreground']
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = currentTheme.tokens.colors['danger-hover'] || currentTheme.tokens.colors.danger;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = currentTheme.tokens.colors.danger;
                            }}
                          >
                            Danger
                          </button>
                        </div>
                      </div>

                      {/* Section Formulaire */}
                      <div className="mb-12">
                        <TestText theme={currentTheme} variant="h3">
                          Formulaires & Inputs
                        </TestText>
                        <div className="mb-6" />

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label 
                              className="block text-sm font-medium mb-2"
                              style={{ color: currentTheme.tokens.colors.text }}
                            >
                              Nom complet
                            </label>
                            <input
                              type="text"
                              placeholder="Entrez votre nom"
                              className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1"
                              style={{
                                borderColor: currentTheme.tokens.colors.border,
                                backgroundColor: currentTheme.tokens.colors.surface,
                                color: currentTheme.tokens.colors.text
                              }}
                              onFocus={(e) => {
                                e.currentTarget.style.borderColor = currentTheme.tokens.colors.primary;
                                e.currentTarget.style.boxShadow = `0 0 0 2px ${currentTheme.tokens.colors.primary}20`;
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.borderColor = currentTheme.tokens.colors.border;
                                e.currentTarget.style.boxShadow = 'none';
                              }}
                            />
                          </div>

                          <div>
                            <label 
                              className="block text-sm font-medium mb-2"
                              style={{ color: currentTheme.tokens.colors.text }}
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              placeholder="votre@email.com"
                              className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1"
                              style={{
                                borderColor: currentTheme.tokens.colors.border,
                                backgroundColor: currentTheme.tokens.colors.surface,
                                color: currentTheme.tokens.colors.text
                              }}
                              onFocus={(e) => {
                                e.currentTarget.style.borderColor = currentTheme.tokens.colors.primary;
                                e.currentTarget.style.boxShadow = `0 0 0 2px ${currentTheme.tokens.colors.primary}20`;
                              }}
                              onBlur={(e) => {
                                e.currentTarget.style.borderColor = currentTheme.tokens.colors.border;
                                e.currentTarget.style.boxShadow = 'none';
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Section Alertes */}
                      <div className="space-y-4">
                        <div 
                          className="p-4 rounded-lg border-l-4 flex items-start gap-3"
                          style={{
                            backgroundColor: `${currentTheme.tokens.colors.success}10`,
                            borderColor: currentTheme.tokens.colors.success
                          }}
                        >
                          <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: currentTheme.tokens.colors.success }} />
                          <div>
                            <div className="font-medium" style={{ color: currentTheme.tokens.colors.success }}>
                              Succès !
                            </div>
                            <div className="text-sm" style={{ color: currentTheme.tokens.colors.text }}>
                              Votre thème a été appliqué avec succès.
                            </div>
                          </div>
                        </div>

                        <div 
                          className="p-4 rounded-lg border-l-4 flex items-start gap-3"
                          style={{
                            backgroundColor: `${currentTheme.tokens.colors.warning}10`,
                            borderColor: currentTheme.tokens.colors.warning
                          }}
                        >
                          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: currentTheme.tokens.colors.warning }} />
                          <div>
                            <div className="font-medium" style={{ color: currentTheme.tokens.colors.warning }}>
                              Attention
                            </div>
                            <div className="text-sm" style={{ color: currentTheme.tokens.colors.text }}>
                              Certaines modifications nécessitent une sauvegarde.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "colors" && editingTheme && (
              <div className="p-6 overflow-auto">
                <div className="max-w-6xl mx-auto">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Palette de Couleurs</h2>
                    <p className="text-gray-600">Personnalisez les couleurs de votre thème avec des outils avancés</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Couleurs Principales</h3>
                        <div className="space-y-4">
                          {Object.entries(editingTheme.tokens.colors)
                            .filter(([key]) => ['primary', 'secondary', 'success', 'warning', 'danger'].includes(key))
                            .map(([key, value]) => (
                              <ColorPicker
                                key={key}
                                label={key.charAt(0).toUpperCase() + key.slice(1)}
                                value={value}
                                onChange={(newValue) => updateToken('colors', key, newValue)}
                                showHarmonies={true}
                              />
                            ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Arrière-plans & Surfaces</h3>
                        <div className="space-y-4">
                          {Object.entries(editingTheme.tokens.colors)
                            .filter(([key]) => key.includes('background') || key.includes('surface'))
                            .map(([key, value]) => (
                              <ColorPicker
                                key={key}
                                label={key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                value={value}
                                onChange={(newValue) => updateToken('colors', key, newValue)}
                              />
                            ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Texte & Bordures</h3>
                        <div className="space-y-4">
                          {Object.entries(editingTheme.tokens.colors)
                            .filter(([key]) => key.includes('text') || key.includes('border'))
                            .map(([key, value]) => (
                              <ColorPicker
                                key={key}
                                label={key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                value={value}
                                onChange={(newValue) => updateToken('colors', key, newValue)}
                              />
                            ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">États Hover</h3>
                        <div className="space-y-4">
                          {Object.entries(editingTheme.tokens.colors)
                            .filter(([key]) => key.includes('hover'))
                            .map(([key, value]) => (
                              <ColorPicker
                                key={key}
                                label={key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                value={value}
                                onChange={(newValue) => updateToken('colors', key, newValue)}
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "typography" && editingTheme && (
              <div className="p-6 overflow-auto">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Typographie</h2>
                    <p className="text-gray-600">Configurez les polices, tailles et espacements de votre thème</p>
                  </div>

                  <div className="space-y-8">
                    {/* Police de base */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Type className="w-5 h-5" />
                        Police de Base
                      </h3>
                      <FontPicker
                        value={editingTheme.tokens.typography['font-family-base']}
                        onChange={(newValue) => updateToken('typography', 'font-family-base', newValue)}
                      />
                    </div>

                    {/* Police des titres */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Type className="w-5 h-5" />
                        Police des Titres
                      </h3>
                      <FontPicker
                        value={editingTheme.tokens.typography['font-family-heading']}
                        onChange={(newValue) => updateToken('typography', 'font-family-heading', newValue)}
                      />
                    </div>

                    {/* Tailles de police */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">Tailles de Police</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {Object.entries(editingTheme.tokens.typography)
                          .filter(([key]) => key.includes('font-size'))
                          .map(([key, value]) => (
                            <div key={key} className="space-y-3">
                              <label className="block text-sm font-medium text-gray-700">
                                {key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                              </label>
                              <div className="flex items-center gap-3">
                                <input
                                  type="range"
                                  min="10"
                                  max="48"
                                  step="1"
                                  value={parseFloat(value.replace(/[^\d.]/g, '')) || 16}
                                  onChange={(e) => {
                                    const unit = value.includes('rem') ? 'rem' : 'px';
                                    updateToken('typography', key, `${e.target.value}${unit}`);
                                  }}
                                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <input
                                  type="text"
                                  value={value}
                                  onChange={(e) => updateToken('typography', key, e.target.value)}
                                  className="w-20 px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-mono"
                                />
                              </div>
                              <div className="p-3 bg-gray-50 rounded border">
                                <p 
                                  style={{ 
                                    fontSize: value, 
                                    fontFamily: editingTheme.tokens.typography['font-family-base']
                                  }}
                                  className="text-gray-900 truncate"
                                >
                                  Aperçu {value}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Autres propriétés */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">Autres Propriétés</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {Object.entries(editingTheme.tokens.typography)
                          .filter(([key]) => !key.includes('font-size') && !key.includes('font-family'))
                          .map(([key, value]) => (
                            <div key={key} className="space-y-3">
                              <label className="block text-sm font-medium text-gray-700">
                                {key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                              </label>
                              <input
                                type="text"
                                value={value}
                                onChange={(e) => updateToken('typography', key, e.target.value)}
                                className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder={key.includes('weight') ? '400, 500, 600...' : key.includes('height') ? '1.5' : 'Valeur'}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Autres tabs... */}
            {activeTab === "spacing" && editingTheme && (
              <div className="p-6 overflow-auto">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Espacement</h2>
                    <p className="text-gray-600">Définissez les marges, paddings et espacements de votre système</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="grid md:grid-cols-3 gap-6">
                      {Object.entries(editingTheme.tokens.spacing).map(([key, value]) => (
                        <div key={key} className="space-y-3">
                          <label className="block text-sm font-medium text-gray-700">
                            {key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </label>
                          <div className="flex items-center gap-3">
                            <input
                              type="range"
                              min="0"
                              max="80"
                              step="4"
                              value={parseInt(value.replace('px', '')) || 0}
                              onChange={(e) => updateToken('spacing', key, `${e.target.value}px`)}
                              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <input
                              type="text"
                              value={value}
                              onChange={(e) => updateToken('spacing', key, e.target.value)}
                              className="w-16 px-2 py-1 text-sm border border-gray-200 rounded font-mono"
                            />
                          </div>
                          <div 
                            className="bg-blue-100 h-6 rounded"
                            style={{ width: value }}
                            title={`${key}: ${value}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "advanced" && (
              <div className="p-6 overflow-auto">
                <div className="max-w-6xl mx-auto">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Éditeur Avancé</h2>
                    <p className="text-gray-600">Modifiez directement la structure JSON du thème</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <div className="bg-gray-900 text-gray-100 rounded-xl overflow-hidden shadow-lg">
                        <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-300">theme-tokens.json</span>
                          <button className="text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-500 transition-colors">
                            Formatter
                          </button>
                        </div>
                        <div className="p-4 overflow-auto max-h-96 text-sm">
                          <pre className="language-json">
                            <code>{JSON.stringify(currentTheme.tokens, null, 2)}</code>
                          </pre>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-start gap-2">
                          <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div className="text-sm text-blue-800">
                            <strong>Conseil :</strong> Vous pouvez modifier directement le JSON ci-dessus. 
                            Les changements seront reflétés en temps réel dans l'aperçu.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Métadonnées du Thème</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Nom du thème</label>
                            <input
                              type="text"
                              value={editingTheme?.name || currentTheme.name}
                              onChange={(e) => editingTheme && setEditingTheme({...editingTheme, name: e.target.value})}
                              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                              disabled={!editingTheme}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea
                              value={editingTheme?.description || currentTheme.description}
                              onChange={(e) => editingTheme && setEditingTheme({...editingTheme, description: e.target.value})}
                              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-20 resize-none"
                              disabled={!editingTheme}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie</label>
                            <select
                              value={editingTheme?.category || currentTheme.category}
                              onChange={(e) => editingTheme && setEditingTheme({...editingTheme, category: e.target.value as any})}
                              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                              disabled={!editingTheme}
                            >
                              <option value="light">Clair</option>
                              <option value="dark">Sombre</option>
                              <option value="colorful">Coloré</option>
                              <option value="minimal">Minimal</option>
                              <option value="custom">Personnalisé</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistiques</h3>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                            <div className="text-2xl font-bold text-blue-600">
                              {Object.keys(currentTheme.tokens.colors).length}
                            </div>
                            <div className="text-sm text-blue-800">Couleurs</div>
                          </div>
                          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                            <div className="text-2xl font-bold text-green-600">
                              {Object.keys(currentTheme.tokens.spacing).length}
                            </div>
                            <div className="text-sm text-green-800">Espacements</div>
                          </div>
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                            <div className="text-2xl font-bold text-purple-600">
                              {Object.keys(currentTheme.tokens.typography).length}
                            </div>
                            <div className="text-sm text-purple-800">Typographie</div>
                          </div>
                          <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-100">
                            <div className="text-2xl font-bold text-yellow-600">v{currentTheme.version}</div>
                            <div className="text-sm text-yellow-800">Version</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions Rapides</h3>
                        <div className="space-y-3">
                          <button
                            onClick={exportTheme}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                          >
                            <Download className="w-4 h-4" />
                            Exporter en JSON
                          </button>
                          <button
                            onClick={() => duplicateTheme(currentTheme)}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors"
                          >
                            <Copy className="w-4 h-4" />
                            Dupliquer le thème
                          </button>
                          <button
                            onClick={() => navigator.clipboard.writeText(JSON.stringify(currentTheme.tokens, null, 2))}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors"
                          >
                            <Share2 className="w-4 h-4" />
                            Copier les tokens
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "effects" && editingTheme && (
              <div className="p-6 overflow-auto">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Effets & Animations</h2>
                    <p className="text-gray-600">Configurez les ombres, bordures et animations de votre thème</p>
                  </div>

                  <div className="space-y-8">
                    {/* Rayons de bordure */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-gray-400 rounded" />
                        Rayons de Bordure
                      </h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        {Object.entries(editingTheme.tokens.radii).map(([key, value]) => (
                          <div key={key} className="space-y-3">
                            <label className="block text-sm font-medium text-gray-700">
                              {key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </label>
                            <div className="flex items-center gap-3">
                              <input
                                type="range"
                                min="0"
                                max="32"
                                step="2"
                                value={key === 'radius-full' ? 32 : parseInt(value.replace('px', '')) || 0}
                                onChange={(e) => {
                                  const newValue = key === 'radius-full' ? '9999px' : `${e.target.value}px`;
                                  updateToken('radii', key, newValue);
                                }}
                                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                              />
                              <input
                                type="text"
                                value={value}
                                onChange={(e) => updateToken('radii', key, e.target.value)}
                                className="w-20 px-2 py-1 text-sm border border-gray-200 rounded font-mono"
                              />
                            </div>
                            <div 
                              className="w-full h-12 bg-gradient-to-r from-blue-100 to-purple-100 border border-gray-200"
                              style={{ borderRadius: value }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ombres */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                        <div className="w-5 h-5 bg-gray-300 rounded shadow-md" />
                        Ombres
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {Object.entries(editingTheme.tokens.shadows).map(([key, value]) => (
                          <div key={key} className="space-y-3">
                            <label className="block text-sm font-medium text-gray-700">
                              {key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </label>
                            <input
                              type="text"
                              value={value}
                              onChange={(e) => updateToken('shadows', key, e.target.value)}
                              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                              placeholder="0 4px 6px rgba(0, 0, 0, 0.1)"
                            />
                            <div className="p-8 bg-gray-50 rounded-lg flex items-center justify-center">
                              <div 
                                className="w-20 h-20 bg-white rounded-lg"
                                style={{ boxShadow: value }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Animations */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        Animations
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {Object.entries(editingTheme.tokens.animations).map(([key, value]) => (
                          <div key={key} className="space-y-3">
                            <label className="block text-sm font-medium text-gray-700">
                              {key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </label>
                            <input
                              type="text"
                              value={value}
                              onChange={(e) => updateToken('animations', key, e.target.value)}
                              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                              placeholder={key.includes('transition') ? '250ms' : 'cubic-bezier(0.4, 0, 0.2, 1)'}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "components" && editingTheme && (
              <div className="p-6 overflow-auto">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Styles des Composants</h2>
                    <p className="text-gray-600">Personnalisez l'apparence de chaque composant individuellement</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {Object.entries(editingTheme.tokens.components).map(([componentName, componentStyles]) => (
                      <div key={componentName} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize flex items-center gap-2">
                          <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded" />
                          Composant {componentName}
                        </h3>
                        
                        <div className="space-y-4 mb-6">
                          {Object.entries(componentStyles).map(([property, value]) => (
                            <div key={property}>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                {property.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                              </label>
                              <input
                                type="text"
                                value={value}
                                onChange={(e) => {
                                  const updatedComponents = {
                                    ...editingTheme.tokens.components,
                                    [componentName]: {
                                      ...editingTheme.tokens.components[componentName as keyof typeof editingTheme.tokens.components],
                                      [property]: e.target.value
                                    }
                                  };
                                  setEditingTheme({
                                    ...editingTheme,
                                    tokens: {
                                      ...editingTheme.tokens,
                                      components: updatedComponents
                                    }
                                  });
                                }}
                                className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Aperçu du composant */}
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="text-sm font-medium text-gray-700 mb-2">Aperçu :</div>
                          {componentName === 'card' && (
                            <TestCard
                              theme={editingTheme}
                              title="Aperçu Card"
                              subtitle="Style personnalisé"
                              content="Ceci est un aperçu du composant Card avec vos modifications."
                              showInteractions={false}
                            />
                          )}
                          {componentName === 'text' && (
                            <TestText theme={editingTheme}>
                              Aperçu du composant Text avec le style personnalisé appliqué.
                            </TestText>
                          )}
                          {componentName === 'button' && (
                            <button
                              style={{
                                backgroundColor: editingTheme.tokens.colors.primary,
                                color: editingTheme.tokens.colors['primary-foreground'],
                                ...Object.fromEntries(
                                  Object.entries(componentStyles).map(([key, value]) => [
                                    key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()),
                                    value
                                  ])
                                ),
                                border: 'none',
                                cursor: 'pointer'
                              }}
                            >
                              Bouton d'aperçu
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}