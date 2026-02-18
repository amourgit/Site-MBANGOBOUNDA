import SectHeader from '@/components/sections/sect-header';
import HeroCarousel from '@/components/sections/sect-carrousel';
import SectHistoire from '@/components/sections/sect-histoire';
import SectValeurs from '@/components/sections/sect-valeur';
import SectGalerie from '@/components/sections/sect-gallery';
import SectMembre from '@/components/sections/sect-membre';
import SectEvenements from '@/components/sections/sect-events';
import SectContact from '@/components/sections/sect-contact';
import SectFooter from '@/components/sections/sect-footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          style={{ filter: "contrast(1.08) brightness(0.62)" }}
          src="/motion_logo1.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10">
        <SectHeader />
        <HeroCarousel />
        <SectHistoire />
        <SectValeurs />
        <SectGalerie />
        <SectMembre />
        <SectEvenements />
        <SectContact />
        <SectFooter />
      </div>
    </main>
  );
}