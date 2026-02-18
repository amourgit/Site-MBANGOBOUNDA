import {
  Bell,
  Search,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Languages,
  DollarSign,
  ChevronDown,
  Package,
  Zap,
  Settings,
  Sparkles,
  Loader2,
  Phone,
  Mail,
  Grid3x3,
  LogIn,
  UserPlus,
  Plus,
  Menu,
  Home,
  MessageSquare,
  FileText,
  Book,
  Users,
  Award,
  Calendar,
} from "lucide-react";


// ============================================================================
// NAVIGATION DATA STRUCTURE
// ============================================================================

export interface NavigationItem {
    id: string;
    label: string;
    icon?: any;
    path: string;
    children?: NavigationItem[];
}
  
export const navigationData: NavigationItem[] = [
    { id: "accueil", label: "Accueil", icon: Home, path: "/home", children: [] },
    {
      id: "apps",
      label: "Application",
      icon: FileText,
      path: "/apps",
      children: [
        {
          id: "community",
          label: "Community",
          icon: FileText,
          path: "/apps/community",
          children: [],
        },
        {
          id: "gestion",
          label: "Gestion",
          icon: FileText,
          path: "/apps/gestion",
          children: [],
        },
        {
          id: "gestion.caisse",
          label: "Gestion.Caisse",
          icon: FileText,
          path: "/apps/gestion/caisse",
          children: [],
        },
        {
          id: "gestion.stats.rapport",
          label: "Gestion.Stats.Rapport",
          icon: FileText,
          path: "/apps/gestion/stats/rapport",
          children: [],
        }
      ],
    },
    {
      id: "search",
      label: "Search",
      icon: Search,
      path: "/search",
      children: [],
    },
    {
      id: "messagerie",
      label: "Messagerie",
      icon: MessageSquare,
      path: "/messagerie",
      children: [],
    },
    {
      id: "contact",
      label: "Contact",
      icon: Mail,
      path: "/contact",
      children: [],
    },
    {
      id: "evenements",
      label: "Événements",
      icon: Calendar,
      path: "/evenements",
      children: [],
    },
    {
      id: "ressources",
      label: "Ressources",
      icon: FileText,
      path: "/ressources",
      children: [],
    },
    {
      id: "etablissement",
      label: "Établissement",
      icon: Award,
      path: "/etablissement",
      children: [
        {
          id: "inptic",
          label: "INPTIC",
          icon: Award,
          path: "/etablissement/inptic",
          children: [],
        },
        {
          id: "ues",
          label: "UES",
          icon: Award,
          path: "/etablissement/ues",
          children: [],
        },
        {
          id: "ena",
          label: "ENA",
          icon: Award,
          path: "/etablissement/ena",
          children: [],
        },
      ],
    },
    {
      id: "departement",
      label: "Département",
      icon: Users,
      path: "/departement",
      children: [
        {
          id: "informatique",
          label: "Informatique",
          icon: Users,
          path: "/departement/informatique",
          children: [],
        },
        {
          id: "mathematiques",
          label: "Mathématiques",
          icon: Users,
          path: "/departement/mathematiques",
          children: [],
        },
        {
          id: "langues",
          label: "Langues",
          icon: Users,
          path: "/departement/langues",
          children: [],
        },
      ],
    },
    {
      id: "administration",
      label: "Administration",
      icon: Settings,
      path: "/administration",
      children: [
        {
          id: "admin_utilisateurs",
          label: "Utilisateurs",
          icon: Users,
          path: "/administration/utilisateurs",
        },
        {
          id: "admin_parametres",
          label: "Paramètres",
          icon: Settings,
          path: "/administration/parametres",
        },
        {
          id: "admin_rapports",
          label: "Rapports",
          icon: FileText,
          path: "/administration/rapports",
        },
      ],
    },
  ];
  