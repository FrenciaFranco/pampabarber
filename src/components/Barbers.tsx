"use client";

import { motion } from "framer-motion";
import { BOOKSY_BARBERS } from "@/lib/booksy";
import { usePreferences } from "@/components/PreferencesProvider";

export function Barbers() {
  const { language } = usePreferences();
  const copy =
    language === "en"
      ? {
          title: "Barbers.",
          subtitle: "Professionals specialized in haircuts and beard work, with personalized attention.",
          altPrefix: "Barber",
        }
      : language === "ca"
        ? {
            title: "Barbers.",
            subtitle: "Professionals especialitzats en tall i barba, amb atencio personalitzada.",
            altPrefix: "Barber",
          }
        : {
            title: "Barberos.",
            subtitle: "Profesionales especializados en corte y barba, con atencion personalizada.",
            altPrefix: "Barbero",
          };

  const barberDetailsByName: Record<string, { role: string; experience: string; details: string }> =
    language === "en"
      ? {
          Octavio: {
            role: "Barber",
            experience: "15 years of experience",
            details: "Design specialist. He has worked in several countries, including Argentina and Portugal.",
          },
          Freli: {
            role: "Barber",
            experience: "10 years of experience",
            details: "Specialist in haircut and beard care with strong attention to detail. He has worked in Ecuador.",
          },
        }
      : language === "ca"
        ? {
            Octavio: {
              role: "Barber",
              experience: "15 anys d'experiencia",
              details: "Especialista en disseny. Ha treballat en diversos paisos, com Argentina i Portugal.",
            },
            Freli: {
              role: "Barber",
              experience: "10 anys d'experiencia",
              details:
                "Especialista en tall i barba amb atencio al detall. Ha treballat en diversos paisos, com l'Equador.",
            },
          }
        : {
            Octavio: {
              role: "Barbero",
              experience: "15 anos de experiencia",
              details: "Especialista en diseno. Ha trabajado en varios paises del mundo, como Argentina y Portugal.",
            },
            Freli: {
              role: "Barbero",
              experience: "10 anos de experiencia",
              details:
                "Especialista en corte y barba con atencion al detalle. Ha trabajado en varios paises del mundo, como Ecuador.",
            },
          };

  return (
    <section id="barberos" className="relative py-24 bg-white dark:bg-neutral-950 overflow-hidden">
      {/* Subtle background glow for glass effect */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-neutral-200/50 dark:bg-neutral-800/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-neutral-300/30 dark:bg-neutral-700/20 blur-[100px]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
              {copy.title}
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 font-light text-lg max-w-2xl">
              {copy.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {BOOKSY_BARBERS.map((barber, idx) => (
            <motion.article
              key={barber.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] p-5 md:p-6 backdrop-blur-xl shadow-sm dark:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300/80 dark:hover:border-white/20 hover:bg-white/60 dark:hover:bg-white/[0.04] hover:shadow-md dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300/50 dark:via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex items-center gap-4 md:gap-5">
                <img
                  src={barber.image}
                  alt={`${copy.altPrefix} ${barber.name} en PAMPA Barber`}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-white/80 dark:border-white/10 shadow-sm"
                  loading="lazy"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-serif text-2xl text-neutral-900 dark:text-white">{barber.name}</h3>
                    {barber.badge && (
                      <span className="text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-[#efd39a] text-[#2d2110] font-bold">
                        {barber.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400 font-light">{barberDetailsByName[barber.name]?.role ?? barber.role}</p>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-2">{barberDetailsByName[barber.name]?.experience ?? barber.experience}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{barberDetailsByName[barber.name]?.details ?? barber.details}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
