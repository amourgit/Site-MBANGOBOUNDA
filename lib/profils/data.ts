export type PersonalInfo = {
  name: string
  title: string
  location: string
  avatar?: string
  badges: string[]
  social: Array<{ platform: string; url: string }>
}

export type AboutInfo = {
  bio: string
  highlights: string[]
}

export type NavItem = {
  label: string
  href: string
}

export type ExperienceInfo = {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

export type CredentialsInfo = {
  certifications: Array<{ name: string; issuer: string; date: string; logo?: string }>
  education: Array<{ degree: string; institution: string; year: string; logo?: string }>
  skills: string[]
}

export type TechnicalSkillsInfo = {
  design: string[]
  development: string[]
  uxMethods: string[]
  softSkills: string[]
}

export type Project = {
  id: string
  title: string
  slug: string
  category: string
  thumbnailImage: string
  coverImage?: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  timeline: string
  role: string
  client?: string
  liveUrl?: string
  githubUrl?: string
  gallery?: Array<{ url: string; caption?: string }>
  relatedProjects?: Array<{ slug: string; title: string; category: string; image: string }>
}

const PERSONAL_INFO: PersonalInfo = {
  name: "Nguyen Family",
  title: "Clan & Tradition",
  location: "Libreville, Gabon",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85",
  badges: ["Unité", "Amour", "Prospérité"],
  social: [
    { platform: "Facebook", url: "#" },
    { platform: "WhatsApp", url: "#" },
    { platform: "Instagram", url: "#" },
  ],
}

const ABOUT_INFO: AboutInfo = {
  bio: "Communauté familiale unie par les valeurs et les traditions, dédiée à préserver notre héritage et bâtir un avenir durable.",
  highlights: [
    "Solidarité intergénérationnelle",
    "Transmission des traditions",
    "Projets communautaires",
  ],
}

const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#credentials" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
]

const EXPERIENCE: ExperienceInfo[] = [
  {
    title: "Organisation & Gouvernance",
    company: "Nguyen Family",
    period: "2015 — aujourd’hui",
    description: "Structuration des rôles, coordination des événements et pilotage des projets du clan.",
    achievements: [
      "Mise en place d’un comité familial",
      "Organisation de rassemblements annuels",
      "Lancement de projets solidaires",
    ],
    technologies: ["Coordination", "Communication", "Gestion"],
  },
]

const CREDENTIALS: CredentialsInfo = {
  certifications: [
    {
      name: "Leadership communautaire",
      issuer: "Clan Nguyen",
      date: "2024",
      logo: "https://placehold.co/80x80/png?text=N",
    },
  ],
  education: [
    {
      degree: "Transmission & Patrimoine",
      institution: "Académie du Clan",
      year: "2023",
      logo: "https://placehold.co/80x80/png?text=U",
    },
  ],
  skills: ["Organisation", "Solidarité", "Patrimoine", "Médiation"],
}

const TECHNICAL_SKILLS: TechnicalSkillsInfo = {
  design: ["Identité", "Narration", "Mise en page"],
  development: ["Next.js", "React", "Tailwind"],
  uxMethods: ["Ateliers", "Itération", "Tests"],
  softSkills: ["Leadership", "Empathie", "Rigueur"],
}

const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Plateforme du Clan",
    slug: "plateforme-clan",
    category: "Communauté",
    thumbnailImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=85",
    coverImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=85",
    shortDescription: "Un espace numérique pour organiser, partager et transmettre.",
    description: [
      "Centralisation des informations et de la mémoire familiale.",
      "Outils de communication et d’organisation interne.",
    ],
    features: ["Annuaire", "Événements", "Galerie", "Messagerie"],
    technologies: ["Next.js", "React", "TypeScript"],
    timeline: "Q1 2025",
    role: "Pilotage & implémentation",
    client: "Nguyen Family",
    liveUrl: "#",
    githubUrl: "#",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85",
        caption: "Atelier de planification",
      },
    ],
    relatedProjects: [
      {
        slug: "archive-memoires",
        title: "Archive des Mémoires",
        category: "Patrimoine",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=85",
      },
    ],
  },
  {
    id: "p2",
    title: "Archive des Mémoires",
    slug: "archive-memoires",
    category: "Patrimoine",
    thumbnailImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=85",
    coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600&q=85",
    shortDescription: "Préserver les récits, photos et événements clés.",
    description: ["Collection et indexation des photos et récits familiaux."],
    features: ["Albums", "Tags", "Recherche"],
    technologies: ["Next.js", "Storage"],
    timeline: "Q2 2025",
    role: "Conception",
  },
]

export function getPersonalInfo() {
  return PERSONAL_INFO
}

export function getAboutInfo() {
  return ABOUT_INFO
}

export function getNavItems() {
  return NAV_ITEMS
}

export function getExperienceInfo() {
  return EXPERIENCE
}

export function getCredentialsInfo() {
  return CREDENTIALS
}

export function getTechnicalSkillsInfo() {
  return TECHNICAL_SKILLS
}

export function getAllProjects() {
  return PROJECTS
}

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}
