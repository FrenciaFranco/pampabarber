"use client";

import { Instagram } from "lucide-react";
import { BOOKSY_URL } from "@/lib/booksy";
import { usePreferences } from "@/components/PreferencesProvider";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { language } = usePreferences();
    const copy = language === "en"
        ? {
            brand: "The essence of classic barbershop culture adapted to the modern man. Haircut, detail, and a noise-free experience.",
            visitUs: "Visit us",
            schedule: "Hours",
            checkBooksy: "Check on Booksy.",
            seeHours: "View hours",
            pages: "Pages",
            services: "Services",
            style: "Style",
            reviews: "Reviews",
            location: "Location",
            rights: "All rights reserved.",
            terms: "Terms",
            privacy: "Privacy",
            localPage1: "Barcelona barbershop",
            localPage2: "Meridiana and Ciutadella",
        }
        : language === "ca"
            ? {
                brand: "L'essencia de la barberia classica adaptada a l'home modern. Tall, detall i una experiencia sense soroll.",
                visitUs: "Visita'ns",
                schedule: "Horaris",
                checkBooksy: "Consulta-ho a Booksy.",
                seeHours: "Veure horaris",
                pages: "Pagines",
                services: "Serveis",
                style: "Estil",
                reviews: "Ressenyes",
                location: "Ubicacio",
                rights: "Tots els drets reservats.",
                terms: "Termes",
                privacy: "Privacitat",
                localPage1: "Barberia Barcelona",
                localPage2: "Meridiana i Ciutadella",
            }
            : {
                brand: "La esencia de la barbería clásica adaptada al hombre moderno. Corte, detalle y una experiencia libre de ruido.",
                visitUs: "Visítanos",
                schedule: "Horarios",
                checkBooksy: "Consultar en Booksy.",
                seeHours: "Ver horarios",
                pages: "Páginas",
                services: "Servicios",
                style: "Estilo",
                reviews: "Reseñas",
                location: "Ubicación",
                rights: "Todos los derechos reservados.",
                terms: "Términos",
                privacy: "Privacidad",
                localPage1: "Barbería Barcelona",
                localPage2: "Meridiana y Ciutadella",
            };

    return (
        <footer className="bg-neutral-900 text-neutral-400 border-t border-neutral-800 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12">
                {/* Brand */}
                <div className="md:w-1/3 flex flex-col items-start text-left">
                    <span className="text-2xl font-serif font-bold tracking-tighter text-white mb-6">
                        PAMPA <span className="text-neutral-500 font-sans text-lg font-normal">Barber</span>
                    </span>
                    <p className="font-light leading-relaxed mb-6 max-w-[80%] text-sm">
                        {copy.brand}
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
                        <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">{copy.visitUs}</h4>
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
                        <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">{copy.schedule}</h4>
                        <span className="font-light">
                            {copy.checkBooksy}
                        </span>
                        <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="text-white underline font-medium hover:text-neutral-400 w-fit">{copy.seeHours}</a>
                    </div>

                    <div className="flex flex-col gap-4 text-left">
                        <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">{copy.pages}</h4>
                        <a href="#servicios" className="hover:text-white transition-colors w-fit">{copy.services}</a>
                        <a href="#estilo" className="hover:text-white transition-colors w-fit">{copy.style}</a>
                        <a href="#resenas" className="hover:text-white transition-colors w-fit">{copy.reviews}</a>
                        <a href="#ubicacion" className="hover:text-white transition-colors w-fit">{copy.location}</a>
                        <a href="#faq" className="hover:text-white transition-colors w-fit">FAQ</a>
                        <a href="/barberia-barcelona" className="hover:text-white transition-colors w-fit">{copy.localPage1}</a>
                        <a href="/barberia-meridiana-ciutadella" className="hover:text-white transition-colors w-fit">{copy.localPage2}</a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs font-light tracking-wide gap-4">
                <span>&copy; {currentYear} PAMPA Barber. {copy.rights}</span>
                <div className="flex bg-neutral-800 p-1 rounded-full px-4 gap-4 text-neutral-500">
                    <a href="#" className="hover:text-white transition-colors">{copy.terms}</a>
                    <a href="#" className="hover:text-white transition-colors">{copy.privacy}</a>
                </div>
            </div>
        </footer>
    );
}
