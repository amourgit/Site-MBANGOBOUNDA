"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  BarChart3,
  DollarSign,
  TrendingDown,
  FileText,
  Users,
  Truck,
  Database,
  Receipt,
  ArrowUp,
  Settings
} from "lucide-react";
import Link from "next/link";

interface NavItem {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
  href: string;
  active?: boolean;
}

interface NavGroup {
  id: string;
  label: string;
  items: NavItem[];
}

interface ShortcutItem {
  id: string;
  label: string;
  href: string;
  color: string;
}

export const CompactNavBar = () => {
  const [currentPath, setCurrentPath] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Détection du chemin actuel
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navGroups: NavGroup[] = [
    {
      id: "accueil",
      label: "Accueil",
      items: [
        {
          id: "accueil",
          icon: Home,
          label: "Accueil",
          href: "/accueil",
        }
      ]
    },
    {
      id: "comptabilite",
      label: "Statistique - Comptabilité",
      items: [
        {
          id: "dashboard",
          icon: BarChart3,
          label: "Dashboard",
          href: "/dashboard",
        },
        {
          id: "ventes",
          icon: DollarSign,
          label: "Ventes",
          href: "/comptabilite/ventes",
        },
        {
          id: "depenses",
          icon: TrendingDown,
          label: "Dépenses",
          href: "/comptabilite/depenses",
        },
        {
          id: "rapports",
          icon: FileText,
          label: "Rapports",
          href: "/comptabilite/rapports",
        }
      ]
    },
    {
      id: "gestion",
      label: "Gestion des produits",
      items: [
        {
          id: "client",
          icon: Users,
          label: "Client",
          href: "/client",
        },
        {
          id: "fournisseurs",
          icon: Truck,
          label: "Fournisseurs",
          href: "/fournisseurs",
        },
        {
          id: "stock",
          icon: Database,
          label: "Gestion des stocks",
          href: "/stock",
        }
      ]
    },
    {
      id: "gestion-mouvement",
      label: "Gestion de Mouvement",
      items: [
        {
          id: "sortie",
          icon: Receipt,
          label: "Sortie",
          href: "/caisse/sortie",
        },
        {
          id: "entree",
          icon: ArrowUp,
          label: "Entrée",
          href: "/caisse/entree",
        },
        {
          id: "mon-rapports",
          icon: FileText,
          label: "Mon Rapports",
          href: "/caisse/mon_rapport",
        }
      ]
    },
    {
      id: "parametres",
      label: "Paramètres",
      items: [
        {
          id: "settings",
          icon: Settings,
          label: "Paramètres",
          href: "/settings",
        }
      ]
    }
  ];

  const shortcuts: ShortcutItem[] = [
    {
      id: "new-transaction",
      label: "Nouvelle transaction",
      href: "/caisse/nouvelle",
      color: "bg-emerald-400",
    },
    {
      id: "quick-report",
      label: "Rapport rapide",
      href: "/rapports/rapide",
      color: "bg-blue-400",
    },
    {
      id: "stock-alert",
      label: "Alertes stock",
      href: "/stock/alertes",
      color: "bg-red-400",
    },
    {
      id: "backup",
      label: "Sauvegarde",
      href: "/system/backup",
      color: "bg-purple-400",
    }
  ];

  // Aplatir tous les éléments pour le carrousel
  const allNavItems = navGroups.flatMap(group => group.items);
  const allItems = [...allNavItems, ...shortcuts];

  // Trouver l'index de l'item actif
  useEffect(() => {
    const activeItemIndex = allItems.findIndex(item => item.href === currentPath);
    if (activeItemIndex !== -1) {
      setActiveIndex(activeItemIndex);
    }
  }, [currentPath]);

  /**
   * Fonction pour vérifier si l'utilisateur a accès à un élément
   */
  const hasAccess = (item: NavItem | ShortcutItem) => {
    return true;
  };

  const handleNavigation = (href: string, index: number) => {
    window.location.href = href;
    setCurrentPath(href);
    setActiveIndex(index);

    // Centrer l'élément actif dans le carrousel
    if (carouselRef.current) {
      const containerHeight = carouselRef.current.clientHeight;
      const itemHeight = 60; // Hauteur approximative d'un élément
      const scrollTop = index * itemHeight - containerHeight / 2 + itemHeight / 2;
      carouselRef.current.scrollTo({
        top: Math.max(0, scrollTop),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed top-20 right-0 z-40 w-12 h-[calc(100vh-5rem)] overflow-hidden">
      {/* Carrousel infini */}
      <div
        ref={carouselRef}
        className="h-full overflow-y-auto scrollbar-hide"
        style={{
          scrollBehavior: 'smooth'
        }}
      >
        {/* Items principaux */}
        <div className="py-4 space-y-2">
          {allNavItems.map((item, index) => {
            const ItemIcon = item.icon;
            const isActive = index === activeIndex;
            const hasItemAccess = hasAccess(item);

            return (
              <div key={item.id} className="flex justify-center">
                {hasItemAccess ? (
                  <Link href={item.href}>
                    <button
                      className={`
                        relative flex items-center justify-center w-10 h-10 rounded-lg
                        transition-all duration-300 ease-out group
                        ${isActive
                          ? 'text-white transform scale-110 shadow-lg'
                          : 'text-gray-400 hover:text-gray-600 hover:scale-105'
                        }
                        ${!hasItemAccess && 'opacity-40 cursor-not-allowed'}
                      `}
                      title={item.label}
                      onClick={() => hasItemAccess && handleNavigation(item.href, index)}
                    >
                      {/* Effet de sur-brillance pour l'élément actif */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 animate-pulse">
                          <div className="absolute inset-0 rounded-lg shadow-lg shadow-blue-400/40"></div>
                        </div>
                      )}

                      <ItemIcon className={`
                        w-5 h-5 relative z-10 transition-all duration-300
                        ${isActive ? 'drop-shadow-lg' : ''}
                      `} />

                      {/* Indicateur d'accès restreint */}
                      {!hasItemAccess && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white/50">
                          <div className="w-full h-full bg-red-500 rounded-full animate-ping opacity-75"></div>
                        </div>
                      )}
                    </button>
                  </Link>
                ) : (
                  <button
                    className={`
                      relative flex items-center justify-center w-10 h-10 rounded-lg
                      opacity-40 cursor-not-allowed text-gray-400
                    `}
                    title={`${item.label} (accès restreint)`}
                    disabled
                  >
                    <ItemIcon className="w-5 h-5" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white/50">
                      <div className="w-full h-full bg-red-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Séparateur */}
        <div className="flex justify-center py-4">
          <div className="w-6 h-px bg-gray-300/30"></div>
        </div>

        {/* Raccourcis */}
        <div className="py-4 space-y-2">
          {shortcuts.map((shortcut, index) => {
            const shortcutIndex = allNavItems.length + index;
            const isActive = shortcutIndex === activeIndex;
            const hasShortcutAccess = hasAccess(shortcut);

            return (
              <div key={shortcut.id} className="flex justify-center">
                {hasShortcutAccess ? (
                  <Link href={shortcut.href}>
                    <button
                      className={`
                        relative flex items-center justify-center w-10 h-10 rounded-lg
                        transition-all duration-300 ease-out group
                        ${isActive
                          ? 'transform scale-110 shadow-lg'
                          : 'hover:scale-105'
                        }
                      `}
                      title={shortcut.label}
                      onClick={() => handleNavigation(shortcut.href, shortcutIndex)}
                    >
                      {/* Effet de sur-brillance pour l'élément actif */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 animate-pulse">
                          <div className="absolute inset-0 rounded-lg shadow-lg shadow-blue-400/40"></div>
                        </div>
                      )}

                      <div className={`
                        w-3 h-3 ${shortcut.color} rounded-full
                        group-hover:scale-125 group-hover:shadow-lg
                        transition-all duration-200 relative z-10
                        ${shortcut.color.includes('emerald') ? 'shadow-emerald-400/50' : ''}
                        ${shortcut.color.includes('blue') ? 'shadow-blue-400/50' : ''}
                        ${shortcut.color.includes('red') ? 'shadow-red-400/50' : ''}
                        ${shortcut.color.includes('purple') ? 'shadow-purple-400/50' : ''}
                        ${isActive ? 'shadow-lg' : ''}
                      `}></div>
                    </button>
                  </Link>
                ) : (
                  <button
                    className={`
                      relative flex items-center justify-center w-10 h-10 rounded-lg
                      opacity-40 cursor-not-allowed
                    `}
                    title={`${shortcut.label} (accès restreint)`}
                    disabled
                  >
                    <div className={`w-3 h-3 ${shortcut.color} rounded-full opacity-50`}></div>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer avec version */}
        <div className="py-4 px-1">
          <div className="text-center">
            <p className="text-gray-400 text-xs font-medium">v2.1</p>
          </div>
        </div>
      </div>
    </div>
  );
};