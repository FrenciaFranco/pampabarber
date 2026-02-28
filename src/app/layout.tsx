import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PreferencesProvider } from "@/components/PreferencesProvider";
import { BOOKSY_DESCRIPTION, BOOKSY_URL } from "@/lib/booksy";
import { defaultKeywords, getStructuredData, siteUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Barberia en Barcelona | PAMPA Barber",
    template: "%s | PAMPA Barber",
  },
  description: BOOKSY_DESCRIPTION,
  keywords: defaultKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Barberia en Barcelona | PAMPA Barber",
    description: BOOKSY_DESCRIPTION,
    url: "/",
    siteName: "PAMPA Barber",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/silla.png",
        width: 1200,
        height: 630,
        alt: "PAMPA Barber en Barcelona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barberia en Barcelona | PAMPA Barber",
    description: BOOKSY_DESCRIPTION,
    images: ["/silla.png"],
  },
  category: "beauty",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getStructuredData();

  return (
    <html lang="es" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans bg-[#F9F9F9] dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100`}
      >
        <ThemeProvider>
          <PreferencesProvider>{children}</PreferencesProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PAMPA Barber",
              url: siteUrl,
              sameAs: [BOOKSY_URL],
            }),
          }}
        />
      </body>
    </html>
  );
}
