"use client";

import { useState } from "react";
import { Check, Copy, Map, MapPin } from "lucide-react";

type BranchStatus = "Abierta" | "Proxima apertura";

interface Branch {
    id: string;
    city: string;
    zone: string;
    address: string;
    status: BranchStatus;
    image: string;
    mapsUrl: string;
    mapsEmbed: string;
}

export function Location() {
    const [copied, setCopied] = useState(false);
    const branches: Branch[] = [
        {
            id: "barcelona-meridiana",
            city: "Barcelona",
            zone: "Meridiana",
            address: "Avinguda Meridiana, 1, Local 2, 08018, Barcelona",
            status: "Abierta",
            image:
                "https://d375139ucebi94.cloudfront.net/region2/es/121866/biz_photo/90957f91ef98499bbdc3a0fa5af429-pampa-barber-biz-photo-fb9271bc6e6a49f6b33c0dae56901d-booksy.jpeg",
            mapsUrl: "https://maps.app.goo.gl/1FYCZyfpktLx4L8q8",
            mapsEmbed: "https://www.google.com/maps?q=Pampa+Barber,+Avinguda+Meridiana,+1,+Barcelona&output=embed",
        },
        {
            id: "barcelona-laietana",
            city: "Barcelona",
            zone: "Laietana",
            address: "Via Laietana, Barcelona (proxima apertura)",
            status: "Proxima apertura",
            image:
                "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&w=1600&q=80",
            mapsUrl: "https://maps.google.com/?q=Via+Laietana,Barcelona",
            mapsEmbed: "https://www.google.com/maps?q=Via+Laietana,+Barcelona&output=embed",
        },
        {
            id: "madrid-retiro",
            city: "Madrid",
            zone: "Retiro",
            address: "Zona Retiro, Madrid (proxima apertura)",
            status: "Proxima apertura",
            image:
                "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=80",
            mapsUrl: "https://maps.google.com/?q=Parque+del+Retiro,Madrid",
            mapsEmbed: "https://www.google.com/maps?q=Parque+del+Retiro,+Madrid&output=embed",
        },
    ];

    const [selectedBranchId, setSelectedBranchId] = useState(branches[0].id);
    const selectedBranch = branches.find((branch) => branch.id === selectedBranchId) ?? branches[0];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(selectedBranch.address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="ubicacion" className="py-32 bg-white dark:bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="mb-14">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-5 tracking-tight">Nuestras sucursales.</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 font-light text-lg max-w-2xl leading-relaxed">
                        Barcelona (Meridiana) ya abierta. Proximas aperturas: Barcelona (Laietana) y Madrid (Retiro).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
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
                                    <img
                                        src={branch.image}
                                        alt={`${branch.city} ${branch.zone}`}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                                    <div className="flex items-center justify-between gap-3 mb-2">
                                        <h3 className="font-serif text-2xl leading-none">{branch.city}</h3>
                                        <span
                                            className={`text-[11px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full ${
                                                branch.status === "Abierta"
                                                    ? "bg-emerald-500/90"
                                                    : "bg-white/20 backdrop-blur"
                                            }`}
                                        >
                                            {branch.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-white/85">{branch.zone}</p>
                                </div>
                            </button>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
                    <div className="lg:col-span-2 bg-[#F9F9F9] dark:bg-neutral-900 p-7 border border-neutral-200 dark:border-neutral-800 rounded-2xl">
                        <h3 className="text-sm uppercase tracking-widest text-neutral-400 font-semibold mb-4">Sucursal seleccionada</h3>
                        <p className="font-serif text-3xl text-neutral-900 dark:text-white mb-2">
                            {selectedBranch.city}
                            <span className="text-neutral-500 dark:text-neutral-400"> ({selectedBranch.zone})</span>
                        </p>
                        <p className="font-light text-neutral-600 dark:text-neutral-400 mb-7 leading-relaxed">{selectedBranch.address}</p>

                        <div className="flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={copyToClipboard}
                                className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-600 px-4 py-2.5 hover:border-neutral-900 dark:hover:border-white transition-colors"
                            >
                                {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                                <span>{copied ? "Dirección copiada" : "Copiar dirección"}</span>
                            </button>

                            <a
                                href={selectedBranch.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2.5 font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                            >
                                <Map size={17} />
                                Ver en mapa
                            </a>
                        </div>

                        <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700 text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
                            <MapPin size={16} className="text-neutral-500 dark:text-neutral-400" />
                            Selecciona una sucursal para ver su ubicacion.
                        </div>
                    </div>

                    <div className="lg:col-span-3 min-h-[420px] relative border border-neutral-200 dark:border-neutral-700 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                        <iframe
                            key={selectedBranch.id}
                            title={`Mapa de ${selectedBranch.city} ${selectedBranch.zone}`}
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
                                Abrir en Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
