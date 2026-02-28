"use client";

import { useMemo, useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Gem, Scissors, Sparkles, VenetianMask } from "lucide-react";
import { getBooksyServiceUrl } from "@/lib/booksy";
import { usePreferences } from "@/components/PreferencesProvider";

type Category = "Corte" | "Barba" | "Extra";
type ServiceGroup = "Combos" | "Corte" | "Barba" | "Detalles";

interface Service {
    name: { es: string; en: string };
    durationMinutes: number;
    priceEur: number;
    category: Category[];
    booksyName: string;
    popular?: boolean;
}

const servicesList: Service[] = [
    { name: { es: "Corte de cabello", en: "Haircut" }, priceEur: 21, durationMinutes: 45, category: ["Corte"], booksyName: "Corte de cabello", popular: true },
    { name: { es: "Corte + Barba Express", en: "Haircut + Express Beard" }, priceEur: 29, durationMinutes: 45, category: ["Corte", "Barba"], booksyName: "Corte + Barba Express", popular: true },
    { name: { es: "Corte + Barba Completa", en: "Haircut + Full Beard" }, priceEur: 33, durationMinutes: 60, category: ["Corte", "Barba"], booksyName: "Corte + Barba Completa", popular: true },
    { name: { es: "Barba Completa", en: "Full Beard" }, priceEur: 16, durationMinutes: 30, category: ["Barba"], booksyName: "Barba Completa" },
    { name: { es: "Barba Express", en: "Express Beard" }, priceEur: 12, durationMinutes: 20, category: ["Barba"], booksyName: "Barba Express" },
    { name: { es: "Corte + Barba Completa + Limpieza facial", en: "Haircut + Full Beard + Facial Clean" }, priceEur: 38, durationMinutes: 60, category: ["Corte", "Barba", "Extra"], booksyName: "Corte + Barba Completa + Limpieza facial" },
    { name: { es: "Corte + Limpieza facial", en: "Haircut + Facial Clean" }, priceEur: 25, durationMinutes: 45, category: ["Corte", "Extra"], booksyName: "Corte + Limpieza facial" },
    { name: { es: "Cejas", en: "Eyebrows" }, priceEur: 5, durationMinutes: 15, category: ["Extra"], booksyName: "Cejas" },
    { name: { es: "Depilación con cera", en: "Waxing" }, priceEur: 10, durationMinutes: 20, category: ["Extra"], booksyName: "Depilación con cera" },
    { name: { es: "Corte jubilado", en: "Senior Haircut" }, priceEur: 16, durationMinutes: 30, category: ["Corte"], booksyName: "Corte jubilado" },
];

export function Services() {
    const [activeGroup, setActiveGroup] = useState<ServiceGroup>("Combos");
    const { language, formatFromEur } = usePreferences();
    const contentLanguage = language === "ca" ? "es" : language;

    const groupedServices = useMemo(
        () => ({
            Combos: servicesList.filter(
                (service) => service.category.includes("Corte") && service.category.includes("Barba")
            ),
            Corte: servicesList.filter(
                (service) => service.category.includes("Corte") && !service.category.includes("Barba")
            ),
            Barba: servicesList.filter(
                (service) => service.category.includes("Barba") && !service.category.includes("Corte")
            ),
            Detalles: servicesList.filter(
                (service) => service.category.includes("Extra") && !service.category.includes("Corte") && !service.category.includes("Barba")
            ),
        }),
        []
    );

    const groupMeta: {
        key: ServiceGroup;
        title: string;
        hint: string;
        icon: ComponentType<{ size?: number; className?: string }>;
    }[] = [
            {
                key: "Combos",
                title: language === "en" ? "Combos" : "Combos",
                hint: language === "en" ? "Haircut + beard" : "Corte + barba",
                icon: Sparkles,
            },
            {
                key: "Corte",
                title: language === "en" ? "Haircut" : "Corte",
                hint: language === "en" ? "Classic and precision" : "Clasico y precision",
                icon: Scissors,
            },
            {
                key: "Barba",
                title: language === "en" ? "Beard" : "Barba",
                hint: language === "en" ? "Shaping and finish" : "Perfilado y acabado",
                icon: VenetianMask,
            },
            {
                key: "Detalles",
                title: language === "en" ? "Details" : "Detalles",
                hint: language === "en" ? "Quick add-ons" : "Complementos rapidos",
                icon: Gem,
            },
        ];

    const sectionCopy = language === "en"
        ? {
            title: "Services & Pricing",
            subtitle: "Menu organized by service type to book faster and with better context.",
            popular: "Top",
            book: "Book",
            formatDuration: (minutes: number) => (minutes >= 60 ? `${Math.round(minutes / 60)} h` : `${minutes} min`),
        }
        : {
            title: "Servicios & Precios",
            subtitle: "Carta organizada por tipo de servicio para reservar mas rapido y con mejor contexto.",
            popular: "Top",
            book: "Reservar",
            formatDuration: (minutes: number) => (minutes >= 60 ? `${Math.round(minutes / 60)} h` : `${minutes} min`),
        };

    return (
        <section id="servicios" className="relative py-20 lg:py-24 bg-neutral-50 dark:bg-transparent">
            {/* dark mode gradient overlays */}
            <div className="pointer-events-none absolute inset-0 hidden dark:block bg-[radial-gradient(1100px_500px_at_18%_0%,rgba(217,179,91,0.2),transparent_62%),radial-gradient(900px_420px_at_90%_28%,rgba(187,151,74,0.16),transparent_72%),linear-gradient(180deg,#05070b_0%,#0a0d14_100%)]" />
            <div className="pointer-events-none absolute inset-0 hidden dark:block bg-[radial-gradient(700px_300px_at_78%_26%,rgba(253,223,161,0.16),transparent_72%)]" />

            <div className="relative max-w-6xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">Servicios & Precios</h2>
                        <p className="text-neutral-500 dark:text-neutral-300 font-light text-lg max-w-xl transition-colors duration-500">
                            Carta organizada por tipo de servicio para reservar más rápido y con mejor contexto.
                        </p>
                    </div>
                </div>

                <div className="relative isolate rounded-[22px] md:rounded-[28px] border border-neutral-200 dark:border-[#c8a86a]/25 bg-white dark:bg-[#0d1118]/85 backdrop-blur-3xl shadow-xl dark:shadow-[0_30px_80px_rgba(0,0,0,0.55)] overflow-hidden ring-1 ring-black/5 dark:ring-[#e6c98f]/15 transition-all duration-500">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/90 dark:from-white/[0.04] to-transparent opacity-80" />
                    <div className="pointer-events-none absolute -left-20 top-16 h-40 w-40 rounded-full bg-[#d6af69]/30 dark:bg-[#d6af69]/20 blur-3xl mix-blend-multiply dark:mix-blend-screen" />
                    <div className="pointer-events-none absolute -right-24 bottom-6 h-48 w-48 rounded-full bg-[#f0cf93]/30 dark:bg-[#f0cf93]/15 blur-3xl mix-blend-multiply dark:mix-blend-screen" />

                    <div className="relative grid grid-cols-2 md:grid-cols-4 border-b border-neutral-100 dark:border-white/10 bg-neutral-100/50 dark:bg-black/20">
                        {groupMeta.map((group) => {
                            const Icon = group.icon;
                            const isActive = activeGroup === group.key;

                            return (
                                <button
                                    key={group.key}
                                    type="button"
                                    onClick={() => setActiveGroup(group.key)}
                                    className={`px-3.5 md:px-6 py-3.5 md:py-5 text-left transition-all duration-300 border-r border-neutral-100 dark:border-white/5 last:border-r-0 ${isActive
                                        ? "bg-white dark:bg-[#c29a55]/18 text-neutral-900 dark:text-[#f8e1b4] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border-b-2 border-b-neutral-900 dark:border-b-transparent dark:shadow-[inset_0_1px_0_rgba(255,243,214,0.25)]"
                                        : "bg-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-[#d8b474]/8 hover:text-neutral-800 dark:hover:text-[#f1d29a]"
                                        }`}
                                >
                                    <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1.5">
                                        <Icon size={15} className={isActive ? "text-neutral-900 dark:text-[#f6d8a2]" : "text-neutral-400 dark:text-neutral-500"} />
                                        <span className="font-medium tracking-wide text-[15px] md:text-base">{group.title}</span>
                                    </div>
                                    <div className={`hidden md:block text-[11px] uppercase tracking-wider font-semibold ${isActive ? "text-neutral-800 dark:text-[#e8d0a4]" : "text-neutral-400 dark:text-neutral-500"}`}>{group.hint}</div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="relative p-3.5 md:p-8 bg-white/40 dark:bg-[#0a0e15]/45">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeGroup}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="grid gap-2.5 md:gap-4"
                            >
                                {groupedServices[activeGroup].map((service) => (
                                    <a
                                        key={service.booksyName}
                                        href={getBooksyServiceUrl(service.booksyName)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative overflow-hidden w-full text-left flex flex-col md:flex-row md:items-center justify-between gap-2.5 md:gap-4 rounded-xl border border-neutral-200 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] px-4 md:px-6 py-3.5 md:py-5 backdrop-blur-md transition-all duration-300 hover:border-neutral-300 dark:hover:border-[#d6af69]/55 hover:bg-white dark:hover:bg-white/[0.07] hover:shadow-lg dark:hover:shadow-[0_14px_34px_rgba(0,0,0,0.32)]"
                                    >
                                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="pointer-events-none absolute -left-10 top-0 h-32 w-32 rounded-full bg-[#e4c386]/10 dark:bg-[#e4c386]/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="min-w-0 pr-2 md:pr-3 z-10">
                                            <div className="flex items-center gap-2.5 flex-wrap mb-0.5 md:mb-1">
                                                <h3 className="text-base md:text-lg font-medium tracking-tight text-neutral-900 dark:text-white">{service.name[contentLanguage]}</h3>
                                                {service.popular && (
                                                    <span className="bg-[#efd39a] text-[#2d2110] px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                                                        {sectionCopy.popular}
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-neutral-500 dark:text-neutral-400 text-xs md:text-sm font-light">{sectionCopy.formatDuration(service.durationMinutes)}</span>
                                        </div>

                                        <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6 md:shrink-0 z-10 w-full md:w-auto">
                                            <span className="text-[1.9rem] leading-none md:text-2xl font-serif font-medium text-neutral-900 dark:text-[#faedcf] tracking-tight">{formatFromEur(service.priceEur)}</span>
                                            <span className="inline-flex items-center gap-1 rounded-full border border-transparent px-2.5 py-0.5 md:px-3 md:py-1 text-xs md:text-sm font-semibold text-neutral-600 dark:text-neutral-300 transition-all duration-300 group-hover:border-neutral-300 group-hover:bg-neutral-100 group-hover:text-neutral-900 dark:group-hover:border-[#e1bb79]/65 dark:group-hover:bg-[#d6ae68]/15 dark:group-hover:text-[#f6d9a2] dark:group-hover:shadow-[0_0_24px_rgba(225,187,121,0.22)]">
                                                {sectionCopy.book} <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
