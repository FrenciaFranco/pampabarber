"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram, X, ZoomIn, ZoomOut } from "lucide-react";
import { BOOKSY_GALLERY_IMAGES } from "@/lib/booksy";
import { usePreferences } from "@/components/PreferencesProvider";

export function Gallery() {
    const { language } = usePreferences();
    const images = useMemo(
        () => BOOKSY_GALLERY_IMAGES.filter((image) => image.includes("/inspiration/")),
        []
    );
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);

    useEffect(() => {
        if (isPaused) {
            return;
        }

        const timer = window.setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 4500);

        return () => {
            window.clearTimeout(timer);
        };
    }, [activeIndex, images.length, isPaused]);

    const goToPrev = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const openLightbox = () => {
        setZoomLevel(1);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setZoomLevel(1);
    };

    const zoomIn = () => {
        setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
    };

    const zoomOut = () => {
        setZoomLevel((prev) => Math.max(prev - 0.25, 1));
    };

    const copy = language === "en"
        ? {
            title: "Style.",
            subtitle: "Real cuts, clean finishes, and studio details in a more visual and modern format.",
            prevPhoto: "Previous photo",
            nextPhoto: "Next photo",
            goToPhoto: "Go to photo",
            closeZoom: "Close zoom",
            zoomOut: "Zoom out",
            zoomIn: "Zoom in",
            viewFullGallery: "View full gallery",
            styleAlt: "PAMPA Barber Style",
            thumbAlt: "Thumbnail",
        }
        : language === "ca"
            ? {
                title: "Estil.",
                subtitle: "Talls reals, acabats nets i detalls de l'estudi en un format mes visual i modern.",
                prevPhoto: "Foto anterior",
                nextPhoto: "Foto seguent",
                goToPhoto: "Anar a la foto",
                closeZoom: "Tancar zoom",
                zoomOut: "Reduir zoom",
                zoomIn: "Augmentar zoom",
                viewFullGallery: "Veure galeria completa",
                styleAlt: "Estil PAMPA Barber",
                thumbAlt: "Miniatura",
            }
            : {
                title: "Estilo.",
                subtitle: "Cortes reales, acabados limpios y detalles del estudio en un formato más visual y moderno.",
                prevPhoto: "Foto anterior",
                nextPhoto: "Foto siguiente",
                goToPhoto: "Ir a foto",
                closeZoom: "Cerrar zoom",
                zoomOut: "Reducir zoom",
                zoomIn: "Aumentar zoom",
                viewFullGallery: "Ver galería completa",
                styleAlt: "PAMPA Barber Style",
                thumbAlt: "Miniatura",
            };

    return (
        <section id="estilo" className="py-28 bg-gradient-to-b from-white to-neutral-100/60 dark:from-neutral-950 dark:to-neutral-900/60">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">{copy.title}</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 font-light text-lg max-w-md leading-relaxed">
                            {copy.subtitle}
                        </p>
                    </div>
                    <a
                        href="https://instagram.com/pampabarberbcn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white px-6 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                        <Instagram size={18} />
                        <span className="text-sm font-medium tracking-wide">@pampabarberbcn</span>
                    </a>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto w-full max-w-[980px] overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="relative aspect-[16/10] md:aspect-[16/8.5] lg:aspect-[21/9] overflow-hidden bg-neutral-900/20">
                        <Image
                            src={images[activeIndex]}
                            alt=""
                            aria-hidden="true"
                            fill
                            sizes="(max-width: 1024px) 100vw, 980px"
                            className="absolute inset-0 object-cover blur-2xl scale-110 opacity-40"
                        />

                        <motion.div
                            key={images[activeIndex]}
                            className="relative z-[1] w-full h-full cursor-zoom-in"
                            initial={{ opacity: 0.2, scale: 1.01 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.45 }}
                            onClick={openLightbox}
                        >
                            <Image
                                src={images[activeIndex]}
                                alt={`${copy.styleAlt} ${activeIndex + 1}`}
                                fill
                                sizes="(max-width: 1024px) 100vw, 980px"
                                className="object-contain"
                            />
                        </motion.div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 pointer-events-none" />

                        <div className="absolute z-20 bottom-4 left-4 right-4 flex items-center justify-between">
                            <div className="rounded-full bg-black/55 backdrop-blur-md px-4 py-2 text-white text-xs md:text-sm tracking-wide">
                                {activeIndex + 1} / {images.length}
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    aria-label={copy.prevPhoto}
                                    onClick={goToPrev}
                                    className="h-10 w-10 rounded-full bg-white/90 text-neutral-900 grid place-items-center hover:bg-white transition-colors"
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <button
                                    type="button"
                                    aria-label={copy.nextPhoto}
                                    onClick={goToNext}
                                    className="h-10 w-10 rounded-full bg-white/90 text-neutral-900 grid place-items-center hover:bg-white transition-colors"
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:p-5 border-t border-neutral-100 dark:border-neutral-800">
                        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-3">
                            {images.map((src, idx) => {
                                const isActive = idx === activeIndex;

                                return (
                                    <button
                                        key={src}
                                        type="button"
                                        onClick={() => setActiveIndex(idx)}
                                        aria-label={`${copy.goToPhoto} ${idx + 1}`}
                                        className={`relative overflow-hidden rounded-xl border transition-all ${
                                            isActive
                                                ? "border-neutral-900 dark:border-white ring-2 ring-neutral-900/10 dark:ring-white/20"
                                                : "border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500"
                                        }`}
                                    >
                                        <div className="relative w-full aspect-[4/3]">
                                            <Image
                                                src={src}
                                                alt={`${copy.thumbAlt} ${idx + 1}`}
                                                fill
                                                sizes="(max-width: 768px) 25vw, 12vw"
                                                className="object-cover"
                                            />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                <AnimatePresence>
                    {isLightboxOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[120] bg-black/88 backdrop-blur-sm"
                            onClick={closeLightbox}
                        >
                            <button
                                type="button"
                                aria-label={copy.closeZoom}
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-white/95 text-neutral-900 grid place-items-center"
                            >
                                <X size={18} />
                            </button>

                            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                                <button
                                    type="button"
                                    aria-label={copy.zoomOut}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        zoomOut();
                                    }}
                                    className="h-10 w-10 rounded-full bg-white/95 text-neutral-900 grid place-items-center"
                                >
                                    <ZoomOut size={18} />
                                </button>
                                <button
                                    type="button"
                                    aria-label={copy.zoomIn}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        zoomIn();
                                    }}
                                    className="h-10 w-10 rounded-full bg-white/95 text-neutral-900 grid place-items-center"
                                >
                                    <ZoomIn size={18} />
                                </button>
                                <div className="rounded-full bg-black/45 text-white text-xs px-3 py-1.5">
                                    Zoom {Math.round(zoomLevel * 100)}%
                                </div>
                            </div>

                            <button
                                type="button"
                                aria-label={copy.prevPhoto}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    goToPrev();
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-white/95 text-neutral-900 grid place-items-center"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <button
                                type="button"
                                aria-label={copy.nextPhoto}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    goToNext();
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-white/95 text-neutral-900 grid place-items-center"
                            >
                                <ChevronRight size={20} />
                            </button>

                            <div
                                className="absolute inset-0 flex items-center justify-center p-8"
                                onClick={(event) => event.stopPropagation()}
                            >
                                <Image
                                    src={images[activeIndex]}
                                    alt={`${copy.styleAlt} ${activeIndex + 1}`}
                                    width={1600}
                                    height={1200}
                                    className="max-w-[92vw] max-h-[86vh] object-contain select-none"
                                    style={{ transform: `scale(${zoomLevel})`, transformOrigin: "center center" }}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-10 flex justify-center">
                    <a
                        href="https://booksy.com/es-es/121866_pampa-barber_barberia_48863_barcelona"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-900 dark:text-white font-medium text-sm border-b border-neutral-900 dark:border-white pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors"
                    >
                        {copy.viewFullGallery}
                    </a>
                </div>
            </div>
        </section>
    );
}
