"use client";

import { useState, useRef } from "react";
import { ShoppingBag, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePreferences } from "@/components/PreferencesProvider";

interface ProductItem {
    id: number;
    name: string;
    priceEur: number;
    image: string;
    description: string;
}

const products: ProductItem[] = [
    {
        id: 1,
        name: "Cera para el pelo",
        priceEur: 19.9,
        image: "/products/cera.png",
        description: "Fijación fuerte con acabado mate natural para un estilo duradero."
    },
    {
        id: 2,
        name: "Aceite de barba",
        priceEur: 24.9,
        image: "/products/aceite.png",
        description: "Hidrata y suaviza tu barba, con un exclusivo aroma amaderado."
    },
    {
        id: 3,
        name: "Navaja de afeitar",
        priceEur: 39.9,
        image: "/products/navaja.png",
        description: "Consigue la precisión de un barbero profesional desde casa."
    },
    {
        id: 4,
        name: "Máquina / cortapelos",
        priceEur: 89.9,
        image: "/products/maquina.png",
        description: "Potencia y precisión excepcionales para cortes perfectos."
    }
];

export function Products() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const { formatFromEur } = usePreferences();

    const scroll = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const scrollAmount = direction === "left" ? -350 : 350;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section id="productos" className="relative py-20 lg:py-24 bg-neutral-100 dark:bg-transparent transition-colors duration-500">
            {/* dark gradient bg */}
            <div className="absolute hidden dark:block inset-0 bg-[radial-gradient(1100px_500px_at_82%_100%,rgba(217,179,91,0.12),transparent_62%),linear-gradient(180deg,#0a0d14_0%,#05070b_100%)] pointer-events-none" />

            {/* light gradient bg */}
            <div className="absolute dark:hidden inset-0 bg-neutral-100 pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">Nuestros productos</h2>
                        <p className="text-neutral-600 dark:text-neutral-300 font-light text-lg max-w-xl transition-colors duration-500">
                            Mantén tu mejor versión en casa con nuestra línea de productos y herramientas de nivel profesional.
                        </p>
                    </div>

                    {/* Carousel Navigation Buttons */}
                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={() => scroll("left")}
                            className="h-12 w-12 rounded-full border border-neutral-300 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-neutral-500 dark:text-white/70 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/10 hover:border-neutral-400 dark:hover:border-[#c8a86a]/30 transition-all shadow-sm dark:shadow-none"
                            aria-label="Anterior producto"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="h-12 w-12 rounded-full border border-neutral-300 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-neutral-500 dark:text-white/70 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/10 hover:border-neutral-400 dark:hover:border-[#c8a86a]/30 transition-all shadow-sm dark:shadow-none"
                            aria-label="Siguiente producto"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative isolate">
                    {/* Carousel Container */}
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto gap-4 md:gap-6 pb-8 md:pb-14 pt-2 md:pt-4 snap-x snap-mandatory scrollbar-hide px-4 md:px-0 scroll-px-4 md:scroll-px-0"
                    >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="snap-start md:snap-center shrink-0 w-[calc(100vw-2.5rem)] max-w-[340px] md:w-[320px] group relative flex flex-col rounded-[24px] border border-neutral-200 dark:border-[#c8a86a]/20 bg-white dark:bg-[#0f141d] backdrop-blur-3xl overflow-hidden ring-1 ring-black/5 dark:ring-[#e6c98f]/10 shadow-[0_20px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-300"
                            >
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 dark:from-[#d6af69]/10 to-transparent opacity-80" />
                                <div className="pointer-events-none absolute -left-20 top-16 h-32 w-32 rounded-full bg-[#d6af69]/30 dark:bg-[#d6af69]/10 blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div
                                    className="relative h-64 w-full flex items-center justify-center p-8 overflow-hidden bg-neutral-50 dark:bg-[#0b1017] cursor-zoom-in"
                                    onClick={() => setSelectedImage(product.image)}
                                >
                                    <div className="absolute inset-0 bg-white/50 dark:bg-[radial-gradient(circle_at_center,rgba(214,175,105,0.12),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={300}
                                        height={300}
                                        className="object-contain h-full w-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] transition-transform duration-700 ease-out group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/50 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        <ZoomIn size={18} className="text-neutral-700 dark:text-white/80" />
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 flex flex-col flex-grow border-t border-neutral-100 dark:border-white/5 bg-white dark:bg-[#131a24] relative z-10 transition-colors duration-500">
                                    <div className="flex justify-between items-start mb-3 gap-4">
                                        <h3 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-white leading-tight">{product.name}</h3>
                                        <span className="text-xl font-serif text-[#b68936] dark:text-[#e4c386] font-semibold tracking-tight shrink-0">{formatFromEur(product.priceEur)}</span>
                                    </div>
                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm font-light mb-8 flex-grow">{product.description}</p>

                                    <button
                                        onClick={() => window.open(`https://wa.me/34689745124?text=Hola,%20quisiera%20comprar%20el%20producto:%20${encodeURIComponent(product.name)}`, '_blank')}
                                        className="inline-flex w-full justify-center items-center gap-2 rounded-xl border border-neutral-200 dark:border-[#9c7b45]/35 bg-neutral-50 dark:bg-[#1a2230] px-4 py-3 text-[15px] font-semibold text-neutral-800 dark:text-[#f2e6cc] transition-all duration-300 hover:bg-neutral-100 dark:hover:border-[#e1bb79]/65 dark:hover:bg-[#2a2115] dark:hover:text-[#f6d9a2] hover:shadow-sm dark:hover:shadow-[0_0_24px_rgba(225,187,121,0.22)] group/btn"
                                    >
                                        <ShoppingBag size={18} />
                                        Agregar al carrito
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
                    >
                        <button
                            className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-colors z-10"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={24} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-4xl h-[80vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Producto ampliado"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
