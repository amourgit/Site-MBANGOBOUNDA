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
    <>
      <SectHeader />
      <HeroCarousel />
      <SectHistoire />
      <SectValeurs />
      <SectGalerie />
      <SectMembre />
      <SectEvenements />
      <SectContact />
      <SectFooter />
    </>
  );
}