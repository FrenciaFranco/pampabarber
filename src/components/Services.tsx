"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Scissors, Shield, Sparkles } from "lucide-react";
import { getBooksyServiceUrl } from "@/lib/booksy";

type Category = "Corte" | "Barba" | "Extra";
type ServiceGroup = "Combos" | "Corte" | "Barba" | "Detalles";

interface Service {
    name: string;
    price: string;
    duration: string;
    category: Category[];
    popular?: boolean;
}

const servicesList: Service[] = [
    { name: "Corte de cabello", price: "21,00€", duration: "45 min", category: ["Corte"], popular: true },
    { name: "Corte + Barba Express", price: "29,00€", duration: "45 min", category: ["Corte", "Barba"], popular: true },
    { name: "Corte + Barba Completa", price: "33,00€", duration: "1 h", category: ["Corte", "Barba"], popular: true },
    { name: "Barba Completa", price: "16,00€", duration: "30 min", category: ["Barba"] },
    { name: "Barba Express", price: "12,00€", duration: "20 min", category: ["Barba"] },
    { name: "Corte + Barba Completa + Limpieza facial", price: "38,00€", duration: "1 h", category: ["Corte", "Barba", "Extra"] },
    { name: "Corte + Limpieza facial", price: "25,00€", duration: "45 min", category: ["Corte", "Extra"] },
    { name: "Cejas", price: "5,00€", duration: "15 min", category: ["Extra"] },
    { name: "Depilación con cera", price: "10,00€", duration: "20 min", category: ["Extra"] },
    { name: "Corte jubilado", price: "16,00€", duration: "30 min", category: ["Corte"] },
];

export function Services() {
    const [activeGroup, setActiveGroup] = useState<ServiceGroup>("Combos");
    const openServiceBooking = (serviceName: string) => {
        window.open(getBooksyServiceUrl(serviceName), "_blank", "noopener,noreferrer");
    };

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
        icon: typeof Scissors;
    }[] = [
        { key: "Combos", title: "Combos", hint: "Corte + barba", icon: Sparkles },
        { key: "Corte", title: "Corte", hint: "Clasico y precision", icon: Scissors },
        { key: "Barba", title: "Barba", hint: "Perfilado y acabado", icon: Shield },
        { key: "Detalles", title: "Detalles", hint: "Complementos rapidos", icon: Sparkles },
    ];

    return (
        <section id="servicios" className="relative py-32 bg-[radial-gradient(1200px_500px_at_20%_0%,rgba(245,200,98,0.08),transparent_60%),linear-gradient(180deg,#0a0a0a_0%,#101010_100%)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_280px_at_80%_30%,rgba(255,255,255,0.05),transparent_70%)]" />
            <div className="relative max-w-6xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Servicios & Precios</h2>
                        <p className="text-neutral-300 font-light text-lg max-w-xl">
                            Carta organizada por tipo de servicio para reservar mas rapido y con mejor contexto.
                        </p>
                    </div>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] backdrop-blur-md shadow-[0_20px_70px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden">
                    <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/10 bg-black/15">
                        {groupMeta.map((group) => {
                            const Icon = group.icon;
                            const isActive = activeGroup === group.key;

                            return (
                            <button
                                key={group.key}
                                type="button"
                                onClick={() => setActiveGroup(group.key)}
                                className={`px-4 md:px-6 py-4 text-left transition-all border-r border-white/10 last:border-r-0 ${
                                    isActive
                                        ? "bg-[linear-gradient(145deg,rgba(245,200,98,0.26),rgba(245,200,98,0.08))] text-amber-100 shadow-[inset_0_0_0_1px_rgba(245,200,98,0.35)]"
                                        : "bg-transparent text-neutral-300 hover:bg-white/5 hover:text-white"
                                }`}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <Icon size={16} />
                                    <span className="font-medium">{group.title}</span>
                                </div>
                                <div className={`text-xs ${isActive ? "text-amber-200/85" : "text-neutral-400"}`}>{group.hint}</div>
                            </button>
                            );
                        })}
                    </div>

                    <div className="p-4 md:p-6 bg-[linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0.03))]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeGroup}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                                className="grid gap-3"
                            >
                                {groupedServices[activeGroup].map((service) => (
                                    <button
                                        key={service.name}
                                        type="button"
                                        onClick={() => openServiceBooking(service.name)}
                                        className="group w-full text-left flex items-center justify-between rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] px-4 py-4 hover:border-amber-300/50 hover:bg-[linear-gradient(180deg,rgba(245,200,98,0.09),rgba(255,255,255,0.02))] transition-all hover:-translate-y-[1px] hover:shadow-[0_12px_34px_rgba(0,0,0,0.34)]"
                                    >
                                        <div className="min-w-0 pr-3">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <h3 className="text-base md:text-lg font-medium text-white">{service.name}</h3>
                                                {service.popular && (
                                                    <span className="border border-amber-300/65 bg-amber-200/12 text-amber-200 text-[10px] px-2 py-1 uppercase tracking-[0.15em] font-semibold rounded-md shadow-[0_0_16px_rgba(251,191,36,0.35)]">
                                                        Top
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-neutral-400 text-sm">{service.duration}</span>
                                        </div>

                                        <div className="flex items-center gap-4 shrink-0">
                                            <span className="text-xl md:text-2xl font-serif text-amber-100">{service.price}</span>
                                            <span className="flex items-center gap-1 text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
                                                Reservar <ArrowRight size={15} />
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
