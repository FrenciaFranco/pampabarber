"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LiquidMetal } from "@paper-design/shaders-react";
import {
    BOOKSY_DESCRIPTION,
    BOOKSY_URL,
    BOOKSY_GALLERY_IMAGES,
} from "@/lib/booksy";
import { usePreferences } from "@/components/PreferencesProvider";

export function Hero() {
    const { language } = usePreferences();
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    // Pause shader when hero scrolls out of view to save GPU
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const copy = language === "en"
        ? {
            titleTop: "PAMPA Barber is not a traditional barbershop.",
            subtitle: (
                <>
                    <p>It's a space for those who understand the value of detail.</p>
                    <p className="text-white font-normal mt-2">Refined technique. Real precision. Minimalist aesthetics.</p>
                    <p className="mt-2">We don't improvise here: your image is designed.</p>
                    <p>The 5★ are a consequence, not a promise.</p>
                    <p className="text-white text-lg md:text-xl font-normal mt-4">Book when you are ready to elevate your standards.</p>
                </>
            ),
            reserve: "Book appointment",
            prices: "View services and prices",
        }
        : language === "ca"
            ? {
                titleTop: "PAMPA Barber no és una barberia tradicional.",
                subtitle: (
                    <>
                        <p>És un espai per a qui entén el valor del detall.</p>
                        <p className="text-white font-normal mt-2">Tècnica depurada. Precisió real. Estètica minimalista.</p>
                        <p className="mt-2">Aquí no s'improvisa: es dissenya la teva imatge.</p>
                        <p>Les 5★ són conseqüència, no promesa.</p>
                        <p className="text-white text-lg md:text-xl font-normal mt-4">Reserva quan estiguis llest per elevar el teu estàndard.</p>
                    </>
                ),
                reserve: "Reservar cita",
                prices: "Veure serveis i preus",
            }
            : {
                titleTop: "PAMPA Barber no es una barbería tradicional.",
                subtitle: (
                    <>
                        <p>Es un espacio para quienes entienden el valor del detalle.</p>
                        <p className="text-white font-normal mt-2">Técnica depurada. Precisión real. Estética minimalista.</p>
                        <p className="mt-2">Aquí no se improvisa: se diseña tu imagen.</p>
                        <p>Las 5★ son consecuencia, no promesa.</p>
                        <p className="text-white text-lg md:text-xl font-normal mt-4">Reserva cuando estés listo para elevar tu estándar.</p>
                    </>
                ),
                reserve: "Reservar cita",
                prices: "Ver servicios y precios",
            };

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white">
            {/* LiquidMetal shader — rendered at low res (480×320) and scaled up for performance */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
                    <div
                        style={{
                            width: 480,
                            height: 320,
                            transform: "scale(5)",
                            transformOrigin: "center center",
                            willChange: "transform",
                        }}
                    >
                        <LiquidMetal
                            style={{ width: "100%", height: "100%", opacity: 0.5 }}
                            colorBack="hsl(0, 0%, 0%, 0)"
                            colorTint="hsl(29, 77%, 49%)"
                            repetition={2}
                            softness={0.9}
                            shiftRed={0.05}
                            shiftBlue={0.05}
                            distortion={0.03}
                            contour={0.4}
                            shape="metaballs"
                            offsetX={0}
                            offsetY={0}
                            scale={1}
                            rotation={25}
                            speed={isVisible ? 0.3 : 0}
                        />
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6"
                        >
                            {copy.titleTop}
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="text-base md:text-lg lg:text-xl text-neutral-400 max-w-2xl mb-12 font-light tracking-wide flex flex-col gap-1.5"
                        >
                            {copy.subtitle}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <a
                                href={BOOKSY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-neutral-900 px-6 py-3 md:px-8 md:py-4 rounded-none font-medium text-base md:text-lg hover:bg-neutral-200 transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
                            >
                                {copy.reserve}
                            </a>
                            <a
                                href="#servicios"
                                className="bg-transparent border border-white/30 text-white px-6 py-3 md:px-8 md:py-4 rounded-none font-medium text-base md:text-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
                            >
                                {copy.prices}
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="relative h-[420px] md:h-[560px] overflow-hidden shadow-[0_28px_80px_rgba(0,0,0,0.65)]"
                    >
                        <img
                            src="/silla.png"
                            alt="Interior de PAMPA Barber"
                            className="h-full w-full object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_92%_at_50%_50%,transparent_58%,rgba(8,8,8,0.56)_84%,rgba(8,8,8,0.94)_100%)]" />
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,transparent_28%,transparent_72%,rgba(0,0,0,0.45)_100%)]" />
                        <div className="pointer-events-none absolute inset-0 border border-white/10" />
                        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/55 via-transparent to-neutral-950/20" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
