"use client";

import { Wifi, CreditCard, Accessibility, Gift, Dog, Baby } from "lucide-react";
import { BOOKSY_URL } from "@/lib/booksy";
import { usePreferences } from "@/components/PreferencesProvider";

export function CtaSection() {
    const { language } = usePreferences();
    const copy = language === "en"
        ? {
            titleTop: "Your style, no waiting.",
            titleBottom: "Book in 30 seconds.",
            subtitle: "Choose your service and pick the best time on Booksy. The process is quick, simple, and direct.",
            cta: "Book on Booksy",
            amenities: ["Wi-Fi", "Cards", "Accessible", "Loyalty", "Pets", "Kids-friendly"],
        }
        : language === "ca"
            ? {
                titleTop: "El teu estil, sense esperes.",
                titleBottom: "Reserva en 30 segons.",
                subtitle: "Selecciona el teu servei i tria l'horari que et vagi millor a Booksy. El proces es rapid, senzill i directe.",
                cta: "Reservar a Booksy",
                amenities: ["Wi-Fi", "Targetes", "Accessible", "Fidelitat", "Mascotes", "Kids-friendly"],
            }
            : {
                titleTop: "Tu estilo, sin esperas.",
                titleBottom: "Reserva en 30 segundos.",
                subtitle: "Selecciona tu servicio y elige el horario que mejor te venga a través de Booksy. El proceso es rápido, sencillo y directo.",
                cta: "Reservar en Booksy",
                amenities: ["Wi-Fi", "Tarjetas", "Accesible", "Fidelidad", "Mascotas", "Kids-friendly"],
            };

    const amenities = [
        { icon: <Wifi size={20} />, label: copy.amenities[0] },
        { icon: <CreditCard size={20} />, label: copy.amenities[1] },
        { icon: <Accessibility size={20} />, label: copy.amenities[2] },
        { icon: <Gift size={20} />, label: copy.amenities[3] },
        { icon: <Dog size={20} />, label: copy.amenities[4] },
        { icon: <Baby size={20} />, label: copy.amenities[5] },
    ];

    return (
        <section className="py-32 bg-neutral-900 border-t border-neutral-800 relative w-full flex flex-col items-center justify-center text-center px-6 z-10 overflow-hidden">
            <div className="max-w-3xl relative z-10 w-full flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white mb-6">
                    {copy.titleTop} <br className="hidden md:block" />
                    <span className="text-neutral-500">{copy.titleBottom}</span>
                </h2>

                <p className="text-neutral-400 font-light text-lg mb-10 max-w-xl">
                    {copy.subtitle}
                </p>

                <a
                    href={BOOKSY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-neutral-900 px-10 py-5 text-lg font-medium hover:bg-neutral-200 transition-colors w-full sm:w-auto shadow-xl"
                >
                    {copy.cta}
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
