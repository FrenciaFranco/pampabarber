"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, Watch } from "lucide-react";

export function Claims() {
    const claims = [
        {
            title: "Cortes precisos",
            desc: "Técnica impecable y atención al detalle en cada trazo.",
            icon: <Scissors className="w-6 h-6 text-neutral-900 dark:text-neutral-100" strokeWidth={1.5} />,
        },
        {
            title: "Barbas limpias",
            desc: "Perfilado milimétrico y cuidado facial superior.",
            icon: <Sparkles className="w-6 h-6 text-neutral-900 dark:text-neutral-100" strokeWidth={1.5} />,
        },
        {
            title: "Ritual minimalista",
            desc: "Tu tiempo valorado en un entorno libre de distracciones.",
            icon: <Watch className="w-6 h-6 text-neutral-900 dark:text-neutral-100" strokeWidth={1.5} />,
        },
    ];

    return (
        <section className="py-20 bg-white dark:bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {claims.map((claim, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col items-start gap-4"
                        >
                            {/* Icon container */}
                            <div className="w-12 h-12 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center bg-neutral-50 dark:bg-neutral-800">
                                {claim.icon}
                            </div>
                            <h3 className="font-serif text-2xl font-semibold text-neutral-900 dark:text-white">{claim.title}</h3>
                            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">{claim.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
