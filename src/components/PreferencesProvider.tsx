"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "es" | "en" | "ca";
export type Currency = "EUR" | "USD";

type PreferencesContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertFromEur: (amountInEur: number) => number;
  formatFromEur: (amountInEur: number) => string;
};

const fallbackRates: Record<Currency, number> = {
  EUR: 1,
  USD: 1.08,
};

const PreferencesContext = createContext<PreferencesContextValue>({
  language: "es",
  setLanguage: () => {},
  currency: "EUR",
  setCurrency: () => {},
  convertFromEur: (amountInEur) => amountInEur,
  formatFromEur: (amountInEur) => `${amountInEur.toFixed(2)} EUR`,
});

export function usePreferences() {
  return useContext(PreferencesContext);
}

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [rates, setRates] = useState<Record<Currency, number>>(fallbackRates);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("language") as Language | null;
    const savedCurrency = window.localStorage.getItem("currency") as Currency | null;

    if (savedLanguage === "es" || savedLanguage === "en" || savedLanguage === "ca") {
      setLanguage(savedLanguage);
    }

    if (savedCurrency === "EUR" || savedCurrency === "USD") {
      setCurrency(savedCurrency);
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [hydrated, language]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem("currency", currency);
  }, [hydrated, currency]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRates() {
      try {
        const response = await fetch("https://api.frankfurter.app/latest?from=EUR&to=USD", {
          signal: controller.signal,
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { rates?: { USD?: number } };

        setRates((prev) => ({
          EUR: 1,
          USD: typeof data.rates?.USD === "number" ? data.rates.USD : prev.USD,
        }));
      } catch {
        // Keep fallback rates when network fails.
      }
    }

    void loadRates();
    return () => controller.abort();
  }, []);

  const value = useMemo<PreferencesContextValue>(() => {
    const convertFromEur = (amountInEur: number) => amountInEur * (rates[currency] ?? fallbackRates[currency]);

    const formatFromEur = (amountInEur: number) => {
      const converted = convertFromEur(amountInEur);
      const locale = language === "en" ? "en-US" : language === "ca" ? "ca-ES" : "es-ES";
      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 2,
      }).format(converted);
    };

    return {
      language,
      setLanguage,
      currency,
      setCurrency,
      convertFromEur,
      formatFromEur,
    };
  }, [currency, language, rates]);

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}
