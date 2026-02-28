import { BOOKSY_DESCRIPTION, BOOKSY_REVIEW_COUNT, BOOKSY_RATING, BOOKSY_URL } from "@/lib/booksy";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://pampabarber.com";

export const siteUrl = rawSiteUrl.endsWith("/") ? rawSiteUrl.slice(0, -1) : rawSiteUrl;

export const defaultKeywords = [
  "barberia en barcelona",
  "barberia barcelona",
  "barbero barcelona",
  "corte de pelo barcelona",
  "barba y corte barcelona",
  "barberia meridiana",
  "barberia sagrada familia",
  "reserva barberia booksy",
  "pampa barber",
];

export const localFaq = [
  {
    question: "Donde esta PAMPA Barber en Barcelona?",
    answer: "Estamos en Avinguda Meridiana, 1, Local 2, 08018, Barcelona.",
  },
  {
    question: "Como reservo una cita en PAMPA Barber?",
    answer: "Puedes reservar online en Booksy, disponible 24/7.",
  },
  {
    question: "Que servicios ofrece la barberia?",
    answer:
      "Realizamos corte de cabello, barba completa, barba express, diseno de cejas, limpieza facial y packs de corte + barba.",
  },
  {
    question: "PAMPA Barber tiene buenas resenas?",
    answer: `Si. Nuestros clientes nos valoran con ${BOOKSY_RATING}/5 en Booksy.`,
  },
];

export function getStructuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BarberShop",
      "@id": `${siteUrl}/#barbershop`,
      name: "PAMPA Barber",
      image: `${siteUrl}/silla.png`,
      url: siteUrl,
      description: BOOKSY_DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avinguda Meridiana, 1, Local 2",
        addressLocality: "Barcelona",
        postalCode: "08018",
        addressCountry: "ES",
      },
      areaServed: ["Barcelona", "Sagrada Familia", "Meridiana"],
      sameAs: [BOOKSY_URL, "https://maps.app.goo.gl/1FYCZyfpktLx4L8q8"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: BOOKSY_RATING,
        reviewCount: BOOKSY_REVIEW_COUNT,
      },
      makesOffer: {
        "@type": "Offer",
        url: BOOKSY_URL,
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "PAMPA Barber",
      inLanguage: "es",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: localFaq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];
}
