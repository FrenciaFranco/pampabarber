import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Claims } from "@/components/Claims";
import { Barbers } from "@/components/Barbers";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Location } from "@/components/Location";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { BOOKSY_URL } from "@/lib/booksy";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900 pb-[72px] md:pb-0">
      <Navbar />
      <Hero />
      <Claims />
      <Barbers />
      <Services />
      <Gallery />
      <Reviews />
      <Location />
      <CtaSection />
      <Footer />

      {/* Mobile Sticky CTA Booksy Button */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-neutral-950 p-3 shadow-2xl safe-area-pb">
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 w-full py-3.5 text-[15px] font-medium transition-transform active:scale-95"
        >
          Reservar cita
        </a>
      </div>
    </main>
  );
}
