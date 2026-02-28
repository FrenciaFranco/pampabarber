"use client";

import { useEffect, useState } from "react";
import { ChevronUp, CircleDollarSign, Languages } from "lucide-react";
import { usePreferences, type Currency, type Language } from "@/components/PreferencesProvider";

export function PreferencesButtons() {
  const { language, setLanguage, currency, setCurrency } = usePreferences();
  const [open, setOpen] = useState<"language" | "currency" | null>(null);
  const copy =
    language === "en"
      ? {
          currency: "Currency",
          language: "Language",
          selectCurrency: "Select currency",
          selectLanguage: "Select language",
        }
      : language === "ca"
        ? {
            currency: "Moneda",
            language: "Idioma",
            selectCurrency: "Selecciona moneda",
            selectLanguage: "Selecciona idioma",
          }
        : {
            currency: "Moneda",
            language: "Idioma",
            selectCurrency: "Seleccionar moneda",
            selectLanguage: "Seleccionar idioma",
          };

  useEffect(() => {
    const close = () => setOpen(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  const languageOptions: Array<{ code: Language; label: string; name: string }> = [
    { code: "es", label: "ES", name: "Castellano" },
    { code: "ca", label: "CA", name: "Catala" },
    { code: "en", label: "EN", name: "English" },
  ];

  const currencyOptions: Array<{ code: Currency; label: string; name: string }> = [
    { code: "EUR", label: "EUR", name: "Euro" },
    { code: "USD", label: "USD", name: "US Dollar" },
  ];

  return (
    <div
      className="fixed right-3 md:right-4 bottom-4 md:bottom-6 z-[80] flex items-end gap-1.5 md:gap-2"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="relative">
        {open === "currency" && (
          <div className="absolute bottom-14 right-0 w-44 rounded-xl border border-[#8a6a37]/50 bg-[#0b0d11] p-1 text-[#f2e4c6] shadow-[0_24px_56px_rgba(0,0,0,0.6)]">
            <p className="px-3 pt-2 pb-1 text-[10px] uppercase tracking-widest text-neutral-300">{copy.currency}</p>
            {currencyOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => {
                  setCurrency(option.code);
                  setOpen(null);
                }}
                className={`w-full rounded-lg px-3 py-2 text-left text-xs transition-colors ${currency === option.code ? "bg-[#9f7a3e]/35 text-[#f7e7c1]" : "hover:bg-[#9f7a3e]/18"}`}
              >
                <span className="font-semibold">{option.label}</span> - {option.name}
              </button>
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={() => setOpen((prev) => (prev === "currency" ? null : "currency"))}
          className="h-10 md:h-12 px-2.5 md:px-3 rounded-full border border-[#a8884b] bg-gradient-to-br from-[#2a2117] via-[#3a2c1d] to-[#5b4528] text-[#f7e7c1] shadow-[0_14px_28px_-10px_rgba(35,25,15,0.75)] inline-flex items-center gap-1.5 md:gap-2"
          aria-label={copy.selectCurrency}
        >
          <CircleDollarSign size={15} />
          <span className="text-xs font-semibold">{currency}</span>
          <ChevronUp size={12} className={`transition-transform ${open === "currency" ? "rotate-180" : ""}`} />
        </button>
      </div>

      <div className="relative">
        {open === "language" && (
          <div className="absolute bottom-14 right-0 w-44 rounded-xl border border-[#8a6a37]/50 bg-[#0b0d11] p-1 text-[#f2e4c6] shadow-[0_24px_56px_rgba(0,0,0,0.6)]">
            <p className="px-3 pt-2 pb-1 text-[10px] uppercase tracking-widest text-neutral-300">{copy.language}</p>
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => {
                  setLanguage(option.code);
                  setOpen(null);
                }}
                className={`w-full rounded-lg px-3 py-2 text-left text-xs transition-colors ${language === option.code ? "bg-[#9f7a3e]/35 text-[#f7e7c1]" : "hover:bg-[#9f7a3e]/18"}`}
              >
                <span className="font-semibold">{option.label}</span> - {option.name}
              </button>
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={() => setOpen((prev) => (prev === "language" ? null : "language"))}
          className="h-10 md:h-12 px-2.5 md:px-3 rounded-full border border-[#a8884b] bg-gradient-to-br from-[#131821] via-[#1b2330] to-[#2a3546] text-[#f7e7c1] shadow-[0_14px_28px_-10px_rgba(12,16,24,0.75)] inline-flex items-center gap-1.5 md:gap-2"
          aria-label={copy.selectLanguage}
        >
          <Languages size={15} />
          <span className="text-xs font-semibold">{language.toUpperCase()}</span>
          <ChevronUp size={12} className={`transition-transform ${open === "language" ? "rotate-180" : ""}`} />
        </button>
      </div>
    </div>
  );
}
