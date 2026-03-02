"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, Copy, Map, MapPin } from "lucide-react";
import { usePreferences } from "@/components/PreferencesProvider";

type BranchStatus = "open" | "comingSoon";

interface Branch {
    id: string;
    city: string;
    zone: { es: string; en: string; ca: string };
    address: { es: string; en: string; ca: string };
    status: BranchStatus;
    image: string;
    mapsUrl: string;
    mapsEmbed: string;
}

export function Location() {
    const { language } = usePreferences();
    const [copied, setCopied] = useState(false);
    const copy = language === "en"
        ? {
            title: "Our barbershops",
            subtitle: "Barcelona (Meridiana) is already open. Coming soon: Barcelona (Sagrada Familia) and Madrid (Retiro).",
            selectedBranch: "Selected branch",
            copiedAddress: "Address copied",
            copyAddress: "Copy address",
            viewOnMap: "View on map",
            hint: "Select a barbershop to see its location.",
            openInGoogleMaps: "Open in Google Maps",
            branchPhotos: "Barbershop photos",
            noPhotos: "There are no published photos for this barbershop yet.",
            mapTitle: "Map of",
            status: { open: "Open", comingSoon: "Coming soon" },
        }
        : language === "ca"
            ? {
                title: "Les nostres barberies",
                subtitle: "Barcelona (Meridiana) ja esta oberta. Proximes obertures: Barcelona (Sagrada Familia) i Madrid (Retiro).",
                selectedBranch: "Sucursal seleccionada",
                copiedAddress: "Adreca copiada",
                copyAddress: "Copiar adreca",
                viewOnMap: "Veure al mapa",
                hint: "Selecciona una barberia per veure'n la ubicacio.",
                openInGoogleMaps: "Obrir a Google Maps",
                branchPhotos: "Fotos de la nostra barberia",
                noPhotos: "Encara no hi ha fotos publicades per a aquesta barberia.",
                mapTitle: "Mapa de",
                status: { open: "Oberta", comingSoon: "Propera obertura" },
            }
            : {
                title: "Nuestras barberías",
                subtitle: "Barcelona (Meridiana) ya abierta. Próximas aperturas: Barcelona (Sagrada Familia) y Madrid (Retiro).",
                selectedBranch: "Sucursal seleccionada",
                copiedAddress: "Dirección copiada",
                copyAddress: "Copiar dirección",
                viewOnMap: "Ver en mapa",
                hint: "Selecciona una barbería para ver su ubicación.",
                openInGoogleMaps: "Abrir en Google Maps",
                branchPhotos: "Fotos de nuestra barbería",
                noPhotos: "Aún no hay fotos publicadas para esta barbería.",
                mapTitle: "Mapa de",
                status: { open: "Abierta", comingSoon: "Próxima apertura" },
            };

    const branches: Branch[] = [
        {
            id: "barcelona-meridiana",
            city: "Barcelona",
            zone: { es: "Meridiana", en: "Meridiana", ca: "Meridiana" },
            address: {
                es: "Avinguda Meridiana, 1, Local 2, 08018, Barcelona",
                en: "Avinguda Meridiana, 1, Local 2, 08018, Barcelona",
                ca: "Avinguda Meridiana, 1, Local 2, 08018, Barcelona",
            },
            status: "open",
            image:
                "https://d375139ucebi94.cloudfront.net/region2/es/121866/biz_photo/90957f91ef98499bbdc3a0fa5af429-pampa-barber-biz-photo-fb9271bc6e6a49f6b33c0dae56901d-booksy.jpeg",
            mapsUrl: "https://maps.app.goo.gl/1FYCZyfpktLx4L8q8",
            mapsEmbed: "https://www.google.com/maps?q=Pampa+Barber,+Avinguda+Meridiana,+1,+Barcelona&output=embed",
        },
        {
            id: "barcelona-sagrada-familia",
            city: "Barcelona",
            zone: { es: "Sagrada Familia", en: "Sagrada Familia", ca: "Sagrada Familia" },
            address: {
                es: "Zona Sagrada Familia, Barcelona (próxima apertura)",
                en: "Sagrada Familia area, Barcelona (coming soon)",
                ca: "Zona Sagrada Familia, Barcelona (propera obertura)",
            },
            status: "comingSoon",
            image:
                "https://offloadmedia.feverup.com/barcelonasecreta.com/wp-content/uploads/2015/07/13082736/shutterstock_580489630-1.jpg",
            mapsUrl: "https://maps.google.com/?q=Sagrada+Familia,Barcelona",
            mapsEmbed: "https://www.google.com/maps?q=Sagrada+Familia,+Barcelona&output=embed",
        },
        {
            id: "madrid-retiro",
            city: "Madrid",
            zone: { es: "Retiro", en: "Retiro", ca: "Retiro" },
            address: {
                es: "Zona Retiro, Madrid (próxima apertura)",
                en: "Retiro area, Madrid (coming soon)",
                ca: "Zona Retiro, Madrid (propera obertura)",
            },
            status: "comingSoon",
            image:
                "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=80",
            mapsUrl: "https://maps.google.com/?q=Parque+del+Retiro,Madrid",
            mapsEmbed: "https://www.google.com/maps?q=Parque+del+Retiro,+Madrid&output=embed",
        },
    ];
    const branchPhotosById: Record<string, string[]> = {
        "barcelona-meridiana": [
            "/barbers/Meridiana/90957f91ef98499bbdc3a0fa5af429-pampa-barber-biz-photo-fb9271bc6e6a49f6b33c0dae56901d-booksy.jpeg",
            "/barbers/Meridiana/dc25ec16b5a74fa69ece731f79e9e7-pampa-barber-biz-photo-a081f8c47fe84c518fe67094fe5028-booksy.jpeg",
        ],
    };

    const [selectedBranchId, setSelectedBranchId] = useState(branches[0].id);
    const selectedBranch = branches.find((branch) => branch.id === selectedBranchId) ?? branches[0];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(selectedBranch.address[language]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="ubicacion" className="relative py-20 md:py-32 bg-white dark:bg-neutral-950 overflow-hidden">
            <div className="pointer-events-none absolute top-0 -left-10 h-[500px] w-[500px] rounded-full bg-neutral-200/50 dark:bg-neutral-800/30 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-neutral-300/30 dark:bg-neutral-800/20 blur-[150px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                <div className="mb-10 md:mb-14">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-5 tracking-tight">{copy.title}</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 font-light text-lg max-w-2xl leading-relaxed">
                        {copy.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6 md:mb-10">
                    {branches.map((branch) => {
                        const active = branch.id === selectedBranch.id;

                        return (
                            <button
                                key={branch.id}
                                type="button"
                                onClick={() => {
                                    setCopied(false);
                                    setSelectedBranchId(branch.id);
                                }}
                                className={`relative text-left overflow-hidden rounded-2xl border transition-all ${
                                    active
                                        ? "border-neutral-900 dark:border-white shadow-xl"
                                        : "border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500"
                                }`}
                            >
                                <div className="aspect-[4/5] overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={branch.image}
                                            alt={`${branch.city} ${branch.zone[language]}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                                <span
                                    className={`absolute right-3 top-3 z-20 text-[11px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full ${
                                        branch.status === "open" ? "bg-emerald-500/90" : "bg-white/20 backdrop-blur"
                                    }`}
                                >
                                    {copy.status[branch.status]}
                                </span>

                                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                                    <div className="flex items-center justify-between gap-3 mb-2">
                                        <h3 className="font-serif text-2xl leading-none">{branch.city}</h3>
                                    </div>
                                    <p className="text-sm text-white/85">{branch.zone[language]}</p>
                                </div>
                            </button>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
                    <div className="lg:col-span-2 relative overflow-hidden rounded-3xl border border-neutral-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] p-8 backdrop-blur-2xl shadow-sm dark:shadow-2xl transition-all">
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300/50 dark:via-white/20 to-transparent opacity-100" />
                        
                        <div className="relative z-10">
                            <h3 className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-bold mb-5">{copy.selectedBranch}</h3>
                            <p className="font-serif text-3xl md:text-4xl text-neutral-900 dark:text-white mb-3 tracking-tight">
                                {selectedBranch.city}
                                <span className="text-neutral-500 dark:text-neutral-400 font-light"> ({selectedBranch.zone[language]})</span>
                            </p>
                            <p className="font-light text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed text-lg">{selectedBranch.address[language]}</p>

                            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                                <button
                                    type="button"
                                    onClick={copyToClipboard}
                                    className="group inline-flex items-center justify-center gap-2.5 text-sm font-medium text-neutral-900 dark:text-white border border-neutral-300 dark:border-white/20 bg-white/50 dark:bg-white/5 backdrop-blur-md px-5 py-3 rounded-xl hover:border-neutral-900 dark:hover:border-white/40 hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm"
                                >
                                    {copied ? <Check size={16} className="text-emerald-600 dark:text-emerald-400" /> : <Copy size={16} />}
                                    <span>{copied ? copy.copiedAddress : copy.copyAddress}</span>
                                </button>

                                <a
                                    href={selectedBranch.mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 rounded-xl font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-md"
                                >
                                    <Map size={17} />
                                    {copy.viewOnMap}
                                </a>
                            </div>

                            <div className="mt-8 pt-6 border-t border-neutral-200/50 dark:border-white/10 text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-3">
                                <MapPin size={16} className="text-neutral-400 dark:text-neutral-500" />
                                <span>{copy.hint}</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 min-h-[420px] relative border border-neutral-200/60 dark:border-white/10 overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900 shadow-sm dark:shadow-2xl">
                        <iframe
                            key={selectedBranch.id}
                            title={`${copy.mapTitle} ${selectedBranch.city} ${selectedBranch.zone[language]}`}
                            src={selectedBranch.mapsEmbed}
                            className="absolute inset-0 w-full h-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/55 to-transparent pointer-events-none">
                            <a
                                href={selectedBranch.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pointer-events-auto inline-flex items-center gap-2 bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-100 transition-colors"
                            >
                                <Map size={16} />
                                {copy.openInGoogleMaps}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-6 md:mt-10">
                    <h3 className="font-serif text-2xl md:text-3xl text-neutral-900 dark:text-white mb-4 tracking-tight">{copy.branchPhotos}</h3>
                    {(branchPhotosById[selectedBranch.id] ?? []).length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {(branchPhotosById[selectedBranch.id] ?? []).map((photo) => (
                                <div key={photo} className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900">
                                    <div className="relative w-full h-[260px] md:h-[320px]">
                                        <Image
                                            src={photo}
                                            alt={`PAMPA Barber ${selectedBranch.zone[language]}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                            {copy.noPhotos}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
