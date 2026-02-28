import type { Metadata } from "next";
import Link from "next/link";
import { BOOKSY_URL } from "@/lib/booksy";

export const metadata: Metadata = {
  title: "Barberia Meridiana y Ciutadella",
  description:
    "Barberia en Meridiana, Barcelona, cerca de Ciutadella. Servicio de peluqueria, corte y barba con reserva online.",
  keywords: [
    "barberia meridiana",
    "barberia ciutadella",
    "peluqueria meridiana barcelona",
    "corte barba meridiana",
    "barberia cerca de ciutadella",
  ],
  alternates: {
    canonical: "/barberia-meridiana-ciutadella",
  },
};

export default function BarberiaMeridianaCiutadellaPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-28 md:py-36">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Zona Meridiana - Ciutadella</p>
        <h1 className="font-serif text-4xl md:text-6xl leading-tight tracking-tight mb-6">
          Barberia en Meridiana y cerca de Ciutadella
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed mb-10">
          Estamos en Avinguda Meridiana, Barcelona. Si te mueves por Ciutadella o alrededores, puedes reservar rapido en nuestra
          barberia y peluqueria para corte, barba o packs de corte + barba con horario flexible.
        </p>

        <div className="rounded-2xl border border-neutral-200 dark:border-white/10 p-6 md:p-8 mb-10 bg-neutral-50 dark:bg-white/[0.03]">
          <h2 className="font-serif text-3xl mb-3">Direccion y reserva</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-5">
            Avinguda Meridiana, 1, Local 2, 08018, Barcelona.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-6 py-3 font-medium hover:opacity-90 transition-opacity"
            >
              Reservar en Booksy
            </a>
            <a
              href="https://maps.google.com/?q=Avinguda+Meridiana,1,08018,Barcelona"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-300 dark:border-white/25 px-6 py-3 font-medium hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <article>
            <h2 className="font-serif text-2xl mb-2">Peluqueria y barberia con enfoque tecnico</h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Nuestro enfoque combina estetica y tecnica para que cada corte y barba encaje con tu perfil. Trabajamos para que
              el resultado se vea bien el primer dia y tambien durante las semanas siguientes.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl mb-2">Ideal si buscas corte y barba en Meridiana</h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Si vives o trabajas por Meridiana o te queda comodo desde Ciutadella, puedes reservar online en segundos y venir
              directo al servicio que necesitas.
            </p>
          </article>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-sm underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-300">
            Volver a PAMPA Barber
          </Link>
        </div>
      </section>
    </main>
  );
}
