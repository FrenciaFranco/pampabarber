"use client";

import { Crown, Scissors, ShoppingBag, Sparkles } from "lucide-react";
import { usePreferences } from "@/components/PreferencesProvider";

interface Plan {
    id: string;
    name: { es: string; en: string };
    priceEur: number;
    cuts: number;
    beard: number;
    details?: number;
    facialClean?: number;
    product: { es: string; en: string };
    highlight?: boolean;
}

const plans: Plan[] = [
    {
        id: "essential",
        name: { es: "Plan Essential", en: "Essential Plan" },
        priceEur: 100,
        cuts: 4,
        beard: 4,
        product: { es: "1 cera para el pelo", en: "1 hair wax" },
    },
    {
        id: "signature",
        name: { es: "Plan Signature", en: "Signature Plan" },
        priceEur: 150,
        cuts: 6,
        beard: 6,
        details: 2,
        facialClean: 1,
        product: { es: "1 aceite de barba", en: "1 beard oil" },
        highlight: true,
    },
    {
        id: "elite",
        name: { es: "Plan Elite", en: "Elite Plan" },
        priceEur: 200,
        cuts: 8,
        beard: 8,
        details: 4,
        facialClean: 2,
        product: { es: "1 producto premium a elegir", en: "1 premium product of your choice" },
    },
];

export function Subscriptions() {
    const { language, formatFromEur } = usePreferences();
    const contentLanguage = language === "ca" ? "es" : language;

    const copy = contentLanguage === "en"
        ? {
            title: "Subscriptions",
            subtitle: "Monthly plans that combine cuts, beard care, and products at a better value.",
            monthly: "monthly",
            cuts: "cuts",
            beard: "beard services",
            details: "detail services",
            facialClean: "facial cleans",
            includesProduct: "Includes",
            cta: "Get subscription",
            badge: "Most popular",
            note: "Monthly subscriptions. Renew and keep your routine always covered.",
        }
        : {
            title: "Suscripciones",
            subtitle: "Planes mensuales que combinan cortes, barba y productos con mejor valor.",
            monthly: "mensual",
            cuts: "cortes",
            beard: "servicios de barba",
            details: "detalles",
            facialClean: "limpiezas faciales",
            includesProduct: "Incluye",
            cta: "Quiero suscribirme",
            badge: "Mas elegido",
            note: "Suscripciones mensuales. Renueva cada mes y manten tu rutina siempre cubierta.",
        };

    return (
        <section id="suscripciones" className="relative py-20 lg:py-24 bg-neutral-100 dark:bg-transparent transition-colors duration-500">
            <div className="pointer-events-none absolute inset-0 hidden dark:block bg-[radial-gradient(1100px_500px_at_78%_0%,rgba(217,179,91,0.15),transparent_62%),linear-gradient(180deg,#090c13_0%,#06080d_100%)]" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">
                            {copy.title}
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-300 font-light text-lg max-w-2xl transition-colors duration-500">
                            {copy.subtitle}
                        </p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-[#c8a86a]/30 px-4 py-2 text-xs uppercase tracking-[0.16em] text-neutral-600 dark:text-[#e7cf9f] bg-white/80 dark:bg-white/[0.04]">
                        <Sparkles size={14} />
                        {copy.note}
                    </div>
                </div>

                <div className="grid gap-4 md:gap-6 md:grid-cols-3">
                    {plans.map((plan) => (
                        <article
                            key={plan.id}
                            className={`relative overflow-hidden rounded-2xl border p-6 md:p-7 backdrop-blur-2xl transition-all duration-300 ${plan.highlight
                                ? "border-[#c59a56]/55 bg-[#f6efe0] dark:bg-[#18130b] shadow-[0_18px_48px_rgba(96,62,20,0.22)]"
                                : "border-neutral-200 dark:border-white/10 bg-white dark:bg-[#0f141d] shadow-[0_14px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_18px_48px_rgba(0,0,0,0.45)]"
                                }`}
                        >
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/80 dark:from-[#d6af69]/10 to-transparent" />

                            {plan.highlight && (
                                <div className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full border border-[#c59a56]/45 bg-[#2e2112] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#f4ddb1]">
                                    <Crown size={12} />
                                    {copy.badge}
                                </div>
                            )}

                            <div className="relative z-10 mb-6">
                                <h3 className="text-2xl font-serif font-semibold tracking-tight text-neutral-900 dark:text-white mb-1">{plan.name[contentLanguage]}</h3>
                                <p className="text-4xl font-serif text-[#b68936] dark:text-[#e4c386] leading-none">
                                    {formatFromEur(plan.priceEur)}
                                </p>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 uppercase tracking-widest">{copy.monthly}</p>
                            </div>

                            <ul className="relative z-10 space-y-3 text-sm text-neutral-700 dark:text-neutral-300 mb-7">
                                <li className="flex items-center gap-2">
                                    <Scissors size={16} className="text-[#b68936]" />
                                    {plan.cuts} {copy.cuts} + {plan.beard} {copy.beard}
                                </li>
                                {!!plan.details && (
                                    <li className="flex items-center gap-2">
                                        <Sparkles size={16} className="text-[#b68936]" />
                                        {plan.details} {copy.details}
                                    </li>
                                )}
                                {!!plan.facialClean && (
                                    <li className="flex items-center gap-2">
                                        <Sparkles size={16} className="text-[#b68936]" />
                                        {plan.facialClean} {copy.facialClean}
                                    </li>
                                )}
                                <li className="flex items-center gap-2">
                                    <ShoppingBag size={16} className="text-[#b68936]" />
                                    {copy.includesProduct}: {plan.product[contentLanguage]}
                                </li>
                            </ul>

                            <a
                                href={`https://wa.me/34689745124?text=${encodeURIComponent(contentLanguage === "en"
                                    ? `Hi, I want the ${plan.name.en} monthly subscription.`
                                    : `Hola, quiero la suscripcion mensual ${plan.name.es}.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 inline-flex w-full justify-center items-center rounded-xl border border-neutral-200 dark:border-[#9c7b45]/35 bg-neutral-50 dark:bg-[#1a2230] px-4 py-3 text-[15px] font-semibold text-neutral-800 dark:text-[#f2e6cc] transition-all duration-300 hover:bg-neutral-100 dark:hover:border-[#e1bb79]/65 dark:hover:bg-[#2a2115] dark:hover:text-[#f6d9a2]"
                            >
                                {copy.cta}
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
