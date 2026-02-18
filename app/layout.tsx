// app/layout.tsx

import type React from "react"
import type { Metadata } from "next"
import { 
  Inter,           // Moderne, clean, très lisible
  Poppins,         // Élégant, géométrique
  Playfair_Display, // Serif élégant pour les titres
  Montserrat,      // Professionnel, géométrique
  Raleway,         // Moderne, sophistiqué
  Lora,            // Serif élégant pour le contenu
} from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/lib/theme"
import { ToastProvider } from "@/components/ui/toast"

// ============================================
// OPTION 1: STYLE MODERNE & ÉPURÉ (Recommandé)
// ============================================
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
})

// ============================================
// OPTION 2: STYLE CORPORATE & PROFESSIONNEL
// ============================================
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

// ============================================
// OPTION 3: STYLE TECH & INNOVANT
// ============================================
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})


export const metadata: Metadata = {
  title: {
    template: "%s | G20®",
    default: "G20®",
  },
  description:
    "La plateforme vise à moderniser et centraliser l'écosystème universitaire et scolaire au niveau national. Elle est conçue en multi-tenant pour que chaque établissement ait son propre espace tout en restant relié au datacenter central.",
  icons: {
    icon: '/logo-ioi.png',
    shortcut: '/logo-ioi.png',
    apple: '/logo-ioi.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      {/* 
        CHOISISSEZ UNE OPTION CI-DESSOUS:
        
        Option 1 - Moderne & Épuré (Inter + Playfair)
        Option 2 - Corporate & Professionnel (Poppins + Lora)
        Option 3 - Tech & Innovant (Montserrat + Raleway)
      */}
      
      {/* ===== OPTION 1: MODERNE & ÉPURÉ ===== */}
      {/* <body className={cn(
        inter.variable,
        playfair.variable,
        inter.className, // Police par défaut
        "font-sans antialiased"
      )}> */}
      
      {/* ===== OPTION 2: CORPORATE & PROFESSIONNEL ===== */}
      <body className={cn(
        poppins.variable,
        lora.variable,
        poppins.className,
        "font-sans antialiased"
      )}>
      
      
      {/* ===== OPTION 3: TECH & INNOVANT ===== 
      <body className={cn(
        montserrat.variable,
        raleway.variable,
        montserrat.className,
        "font-sans antialiased"
      )}>
      */}
      
        <ThemeProvider 
          defaultTheme="default"
          enableDarkMode={true}
        >
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}