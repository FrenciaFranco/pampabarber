"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, Environment, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { BarbersPoleModel } from "@/components/BarbersPoleModel";
import {
    BOOKSY_DESCRIPTION,
    BOOKSY_URL,
    BOOKSY_GALLERY_IMAGES,
} from "@/lib/booksy";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white">
            {/* Background with pseudo-noise and image overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={BOOKSY_GALLERY_IMAGES[0]}
                    alt="PAMPA Barber Barcelona"
                    className="object-cover w-full h-full opacity-35 blur-sm mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light" />
            </div>

            <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6"
                        >
                            Estilo. Detalle. <br className="hidden md:block" />
                            <span className="text-neutral-400">Minimalismo.</span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="text-lg md:text-2xl text-neutral-300 max-w-2xl mb-12 font-light tracking-wide"
                        >
                            {BOOKSY_DESCRIPTION}
                        </motion.p>

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
                                className="bg-white text-neutral-900 px-8 py-4 rounded-none font-medium text-lg hover:bg-neutral-200 transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
                            >
                                Reservar cita
                            </a>
                            <a
                                href="#servicios"
                                className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-none font-medium text-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
                            >
                                Ver servicios y precios
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="relative h-[420px] md:h-[560px] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.24),rgba(255,255,255,0)_58%)]" />

                        <Canvas
                            className="h-full w-full"
                            dpr={[1, 2]}
                            camera={{ position: [0, 0, 7], fov: 36 }}
                        >
                            <ambientLight intensity={1} />
                            <hemisphereLight args={["#ffffff", "#b8c4d4", 0.65]} />
                            <directionalLight position={[3, 4, 3]} intensity={1.7} color="#f9fcff" />
                            <directionalLight position={[-4, 2, -2]} intensity={0.85} color="#ffffff" />
                            <pointLight position={[0, 1.2, 2.8]} intensity={1.1} color="#ffffff" />

                            <Suspense fallback={null}>
                                <Bounds fit clip observe margin={1.25}>
                                    <Float speed={0.55} rotationIntensity={0.015} floatIntensity={0.05}>
                                        <BarbersPoleModel rotation={[-Math.PI / 2, 0, 0]} scale={1.2} />
                                    </Float>
                                </Bounds>
                            </Suspense>

                            <Environment preset="studio" />
                        </Canvas>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
