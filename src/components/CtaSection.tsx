"use client";

import { Wifi, CreditCard, Accessibility, Gift, Dog, Baby } from "lucide-react";
import { BOOKSY_URL } from "@/lib/booksy";

export function CtaSection() {
    const amenities = [
        { icon: <Wifi size={20} />, label: "Wi-Fi" },
        { icon: <CreditCard size={20} />, label: "Tarjetas" },
        { icon: <Accessibility size={20} />, label: "Accesible" },
        { icon: <Gift size={20} />, label: "Fidelidad" },
        { icon: <Dog size={20} />, label: "Mascotas" },
        { icon: <Baby size={20} />, label: "Kids-friendly" },
    ];

    return (
        <section className="py-32 bg-neutral-900 border-t border-neutral-800 relative w-full flex flex-col items-center justify-center text-center px-6 z-10 overflow-hidden">
            {/* Texture / Noise Overlay (Matches Hero) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light pointer-events-none" />

            <div className="max-w-3xl relative z-10 w-full flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white mb-6">
                    Tu estilo, sin esperas. <br className="hidden md:block" />
                    <span className="text-neutral-500">Reserva en 30 segundos.</span>
                </h2>

                <p className="text-neutral-400 font-light text-lg mb-10 max-w-xl">
                    Selecciona tu servicio y elige el horario que mejor te venga a través
                    de Booksy. El proceso es rápido, sencillo y directo.
                </p>

                <a
                    href={BOOKSY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-neutral-900 px-10 py-5 text-lg font-medium hover:bg-neutral-200 transition-colors w-full sm:w-auto shadow-xl"
                >
                    Reservar en Booksy
                </a>

                {/* Amenities / Features */}
                <div className="mt-16 pt-8 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-6 gap-6 justify-center">
                    {amenities.map((item, idx) => (
                        <div key={idx} className="flex gap-2 flex-col items-center text-neutral-400 hover:text-white transition-colors cursor-default">
                            {item.icon}
                            <span className="text-xs tracking-wider uppercase font-semibold mt-2">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
