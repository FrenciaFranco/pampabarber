"use client";

import { motion } from "framer-motion";
import { BOOKSY_BARBERS } from "@/lib/booksy";

export function Barbers() {
  return (
    <section id="barberos" className="relative py-24 bg-white dark:bg-neutral-950 overflow-hidden">
      {/* Subtle background glow for glass effect */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-neutral-200/50 dark:bg-neutral-800/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-neutral-300/30 dark:bg-neutral-700/20 blur-[100px]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
              Barberos.
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 font-light text-lg max-w-2xl">
              Profesionales especializados en corte y barba, con atencion personalizada.
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
                  alt={`Barbero ${barber.name} en PAMPA Barber`}
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
                  <p className="text-neutral-500 dark:text-neutral-400 font-light">{barber.role}</p>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-2">{barber.experience}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{barber.details}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
