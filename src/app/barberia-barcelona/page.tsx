import type { Metadata } from "next";
import Link from "next/link";
import { BOOKSY_URL } from "@/lib/booksy";

export const metadata: Metadata = {
  title: "Barbería y peluquería en Barcelona",
  description:
    "PAMPA Barber es tu barbería y peluquería en Barcelona para corte y barba con reserva online en Booksy.",
  keywords: [
    "barberia en barcelona",
    "peluqueria en barcelona",
    "corte y barba en barcelona",
    "barberia meridiana",
    "reserva barberia booksy",
  ],
  alternates: {
    canonical: "/barberia-barcelona",
  },
};

export default function BarberiaBarcelonaPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-28 md:py-36">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4">PAMPA Barber Barcelona</p>
        <h1 className="font-serif text-4xl md:text-6xl leading-tight tracking-tight mb-6">
          Barbería y peluquería en Barcelona para corte y barba
        </h1>
        <p className="text-lg text-neutral-300 max-w-3xl leading-relaxed mb-10">
          Si buscas barbería en Barcelona con atención al detalle, en PAMPA Barber trabajamos corte, barba y asesoría de estilo
          con reserva online. Estamos en Meridiana y cerca de la zona Ciutadella para quienes quieren una experiencia precisa,
          rápida y sin improvisaciones.
        </p>

        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-neutral-900 px-6 py-3 font-medium hover:bg-neutral-200 transition-colors"
          >
            Reservar corte o barba en Booksy
          </a>
          <Link
            href="/"
            className="border border-white/25 px-6 py-3 font-medium hover:bg-white/10 transition-colors"
          >
            Ver web principal
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="font-serif text-2xl mb-3">Corte en Barcelona</h2>
            <p className="text-neutral-300 leading-relaxed">
              Corte clásico, moderno y personalizado según rostro, textura y estilo de vida. La idea es que salgas con un look
              limpio y fácil de mantener.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="font-serif text-2xl mb-3">Barba con precisión</h2>
            <p className="text-neutral-300 leading-relaxed">
              Perfilado, volumen y simetría para una barba equilibrada. Trabajamos desde barba express hasta servicios completos
              de corte + barba.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
