"use client";

import { useRef } from "react";
import { Star } from "lucide-react";
import {
    BOOKSY_RATING,
    GOOGLE_RATING,
    REVIEWS,
} from "@/lib/booksy";

export function Reviews() {
    const trackRef = useRef<HTMLDivElement>(null);

    const pause = () => {
        trackRef.current?.style.setProperty("animation-play-state", "paused");
    };
    const resume = () => {
        trackRef.current?.style.setProperty("animation-play-state", "running");
    };

    // Duplicate the reviews for seamless infinite loop
    const duplicated = [...REVIEWS, ...REVIEWS];

    return (
        <section id="resenas" className="py-32 bg-[#F9F9F9] dark:bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">Reseñas.</h2>
                <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} fill="currentColor" className="text-yellow-400" />
                        ))}
                    </div>
                    <span className="text-neutral-900 dark:text-white font-medium text-lg">{BOOKSY_RATING} en Booksy</span>
                    <span className="text-neutral-300 dark:text-neutral-600">|</span>
                    <span className="text-neutral-900 dark:text-white font-medium text-lg">{GOOGLE_RATING} en Google Maps</span>
                </div>
            </div>

            <div className="overflow-hidden">
                <div
                    ref={trackRef}
                    className="flex gap-6 animate-scroll"
                    onMouseEnter={pause}
                    onMouseLeave={resume}
                    onTouchStart={pause}
                    onTouchEnd={resume}
                >
                    {duplicated.map((review, idx) => (
                        <div
                            key={`${review.source}-${idx}-${review.name}`}
                            className="bg-white dark:bg-neutral-900 p-8 border border-neutral-100 dark:border-neutral-800 shadow-sm flex-shrink-0 w-[350px]"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-300 font-medium uppercase">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-medium text-neutral-900 dark:text-white">{review.name}</h4>
                                    <p className="text-neutral-400 text-xs">Barber: {review.barber}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="flex text-yellow-400 gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={12} fill="currentColor" />
                                            ))}
                                        </div>
                                        <span className="text-neutral-400 text-[10px] font-medium uppercase tracking-wide">
                                            {review.source === "Google Maps" ? "Google Maps Review" : "Booksy Review"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-300 font-light leading-relaxed italic">
                                &ldquo;{review.text}&rdquo;
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
