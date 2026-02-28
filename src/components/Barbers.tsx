"use client";

import { motion } from "framer-motion";
import { BOOKSY_BARBERS, BOOKSY_URL } from "@/lib/booksy";

export function Barbers() {
  return (
    <section id="barberos" className="py-32 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
              Barberos.
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 font-light text-lg max-w-2xl">
              Equipo visible en Booksy: profesionales especializados en corte y barba, con atencion personalizada.
            </p>
          </div>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 dark:text-white font-medium text-sm border-b border-neutral-900 dark:border-white pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors"
          >
            Ver perfiles en Booksy
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {BOOKSY_BARBERS.map((barber, idx) => (
            <motion.article
              key={barber.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#F9F9F9] dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 p-5 md:p-6"
            >
              <div className="flex items-center gap-4 md:gap-5">
                <img
                  src={barber.image}
                  alt={`Barbero ${barber.name} en PAMPA Barber`}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border border-neutral-200 dark:border-neutral-700"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-serif text-2xl text-neutral-900 dark:text-white mb-1">{barber.name}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 font-light">{barber.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
