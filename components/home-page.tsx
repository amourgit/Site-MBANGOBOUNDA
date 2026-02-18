"use client";

import { Background } from "@/components/background";
import { Footer } from "@/components/footer";
import { Start } from "@/components/start";
import Link from "next/link";

const backgroundItems = [
  {
    // Vidéo technologie - Code programming
    src: "/motion_logo1.mp4",
    placeholder: "/tech-placeholder.png"
  },
  {
    // Vidéo business - Team meeting
    src: "/videos/motion_logo2.mp4",
    placeholder: "/business-placeholder.png"
  },
  {
    // Vidéo données - Analytics dashboard
    src: "/videos/motion_logo3.mp4",
    placeholder: "/data-placeholder.png"
  },
  {
    // Vidéo innovation - City skyline tech
    src: "/videos/motion_logo4.mp4",
    placeholder: "/innovation-placeholder.png"
  },
  {
    // Vidéo workspace - Office moderne
    src: "/videos/motion_logo5.mp4",
    placeholder: "/workspace-placeholder.png"
  },
  {
    // Vidéo digital - Network connections
    src: "/videos/motion_logo6.mp4",
    placeholder: "/digital-placeholder.png"
  }
  // Ces vidéos sont en 4K, libres de droits et optimisées pour le web
];

export default function HomeLayout() {
  return (
    <main className="h-[100dvh] w-full relative">
      {/* Background en arrière-plan avec z-0 */}
      <Background 
        items={backgroundItems}
        enableTransitions={true} // Active les transitions (optionnel, défaut: true)
        imageDuration={5000} // Durée pour les images statiques (5 secondes)
      />
      
      {/* Contenu au premier plan avec z-index plus élevé */}
      <div className="relative z-20 p-4 md:p-8 h-full w-full flex flex-col">
        <div className="flex-1">
          <Start />
        </div>
        <Footer />
      </div>
    </main>
  );
}