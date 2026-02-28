"use client";

import { Instagram } from "lucide-react";
import { BOOKSY_URL } from "@/lib/booksy";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 text-neutral-400 border-t border-neutral-800 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12">
                {/* Brand */}
                <div className="md:w-1/3 flex flex-col items-start text-left">
                    <span className="text-2xl font-serif font-bold tracking-tighter text-white mb-6">
                        PAMPA <span className="text-neutral-500 font-sans text-lg font-normal">Barber</span>
                    </span>
                    <p className="font-light leading-relaxed mb-6 max-w-[80%] text-sm">
                        La esencia de la barbería clásica adaptada al hombre moderno.
                        Corte, detalle y una experiencia libre de ruido.
                    </p>
                    <a
                        href="https://instagram.com/pampabarberbcn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-neutral-400 transition-colors"
                    >
                        <Instagram size={20} />
                        <span className="text-sm font-medium tracking-wide">@pampabarberbcn</span>
                    </a>
                </div>

                {/* Info/Links */}
                <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">Visítanos</h4>
                        <span className="font-light leading-relaxed">
                            Avinguda Meridiana, 1<br /> Local 2<br />
                            08018, Barcelona
                        </span>
                        <a
                            href="https://maps.google.com/?q=Avinguda+Meridiana,1,08018,Barcelona"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline w-fit mt-2"
                        >
                            Google Maps
                        </a>
                    </div>

                    <div className="flex flex-col gap-4 text-left">
                        <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">Horarios</h4>
                        <span className="font-light">
                            Consultar en Booksy.
                        </span>
                        <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="text-white underline font-medium hover:text-neutral-400 w-fit">Ver horarios</a>
                    </div>

                    <div className="flex flex-col gap-4 text-left">
                        <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">Páginas</h4>
                        <a href="#servicios" className="hover:text-white transition-colors w-fit">Servicios</a>
                        <a href="#estilo" className="hover:text-white transition-colors w-fit">Estilo</a>
                        <a href="#resenas" className="hover:text-white transition-colors w-fit">Reseñas</a>
                        <a href="#ubicacion" className="hover:text-white transition-colors w-fit">Ubicación</a>
                        <a href="#faq" className="hover:text-white transition-colors w-fit">FAQ</a>
                        <a href="/barberia-barcelona" className="hover:text-white transition-colors w-fit">Barberia Barcelona</a>
                        <a href="/barberia-meridiana-ciutadella" className="hover:text-white transition-colors w-fit">Meridiana y Ciutadella</a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs font-light tracking-wide gap-4">
                <span>&copy; {currentYear} PAMPA Barber. Todos los derechos reservados.</span>
                <div className="flex bg-neutral-800 p-1 rounded-full px-4 gap-4 text-neutral-500">
                    <a href="#" className="hover:text-white transition-colors">Términos</a>
                    <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                </div>
            </div>
        </footer>
    );
}
