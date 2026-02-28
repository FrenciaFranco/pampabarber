import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Claims } from "@/components/Claims";
import { Barbers } from "@/components/Barbers";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Location } from "@/components/Location";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { PreferencesButtons } from "@/components/PreferencesButtons";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900">
      <Navbar />
      <Hero />
      <Claims />
      <Barbers />
      <Services />
      <Products />
      <Gallery />
      <Reviews />
      <Location />
      <CtaSection />
      <Footer />
      <PreferencesButtons />
    </main>
  );
}
