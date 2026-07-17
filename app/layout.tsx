import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

// Display font: geometrikus, modern, kicsit futurisztikus
const sora = Sora({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Body font
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.bio,
  keywords: [
    "AI SEO",
    "AI láthatóság",
    "GEO",
    "Generative Engine Optimization",
    "AI keresőoptimalizálás",
    "AI SEO szakértő",
    "Daniel Berndt",
    "Berndt Dániel",
    "AI marketing",
    "ChatGPT SEO",
    "Perplexity",
    "AI keresők",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "hu_HU",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.bio,
    // A kép nincs itt felsorolva: az app/opengraph-image.tsx fájlkonvenció
    // generálja és fűzi be, így nem tud elavulni.
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.bio,
  },
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
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#042f2e",
  width: "device-width",
  initialScale: 1,
};

// JSON-LD strukturált adat, hogy az AI keresők és a Google is pontosan értsék,
// ki vagy és mivel foglalkozol.
function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    alternateName: "Berndt Dániel",
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.avatar}`,
    jobTitle: siteConfig.tagline,
    description: siteConfig.bio,
    email: `mailto:${siteConfig.contacts.email}`,
    knowsAbout: [
      "AI SEO",
      "Generative Engine Optimization (GEO)",
      "AI láthatóság",
      "Keresőoptimalizálás",
      "AI marketing",
    ],
    sameAs: [
      siteConfig.contacts.instagramPro,
      siteConfig.contacts.linkedin,
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.bio,
    inLanguage: "hu-HU",
    publisher: { "@id": `${siteConfig.url}/#person` },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.bio,
    inLanguage: "hu-HU",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#person` },
    primaryImageOfPage: `${siteConfig.url}/opengraph-image`,
    dateModified: siteConfig.contentModified,
  };

  return (
    <script
      type="application/ld+json"
      // A JSON-LD statikus és megbízható forrásból származik, ezért biztonságos.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([personSchema, websiteSchema, webPageSchema]),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
