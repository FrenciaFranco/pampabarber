"use client";

import { getLocalFaq } from "@/lib/seo";
import { usePreferences } from "@/components/PreferencesProvider";

export function Faq() {
  const { language } = usePreferences();
  const localFaq = getLocalFaq(language);
  const copy =
    language === "en"
      ? {
          title: "FAQ",
          subtitle: "Quick answers about PAMPA Barber, Booksy bookings, and our location in Barcelona.",
        }
      : language === "ca"
        ? {
            title: "Preguntes frequents",
            subtitle: "Respostes rapides sobre PAMPA Barber, les reserves a Booksy i la nostra ubicacio a Barcelona.",
          }
        : {
            title: "FAQ",
            subtitle: "Respuestas rapidas sobre PAMPA Barber, reservas en Booksy y nuestra ubicacion en Barcelona.",
          };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
          {copy.title}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-10 text-lg max-w-3xl">
          {copy.subtitle}
        </p>

        <div className="space-y-4">
          {localFaq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/50 p-5"
            >
              <summary className="cursor-pointer list-none font-medium text-lg text-neutral-900 dark:text-neutral-100">
                {item.question}
              </summary>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
