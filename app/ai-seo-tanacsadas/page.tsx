import type { Metadata } from "next";
import Link from "next/link";
import Background from "@/components/Background";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI SEO Tanácsadás",
  description:
    "A személyes AI SEO konzultáció online foglalása hamarosan elérhető. Addig is elérsz emailben vagy WhatsAppon.",
  alternates: { canonical: "/ai-seo-tanacsadas" },
  // Amíg nincs mögötte valódi tartalom, ne kerüljön a keresőkbe: egy üres
  // "hamarosan" oldal indexelve csak rontja a domain képét. A foglalás
  // élesítésekor ezt a blokkot törölni kell, és felvenni a sitemap.ts-be.
  robots: { index: false, follow: true },
};

export default function Consulting() {
  const c = siteConfig.contacts;
  const waHref = `https://wa.me/${c.whatsapp}${
    c.whatsappMessage ? `?text=${encodeURIComponent(c.whatsappMessage)}` : ""
  }`;

  return (
    <>
      <Background />
      <main className="page">
        <article className="card soon">
          <p className="soon__badge">Hamarosan</p>
          <h1 className="soon__title">AI SEO Tanácsadás</h1>
          <p className="soon__lead">
            Az online időpontfoglalás még készül. Ha személyes konzultációra
            gondolsz, írj nyugodtan, ugyanúgy egyeztetünk egy időpontot, csak
            eggyel kevesebb kattintással.
          </p>

          <div className="soon__actions">
            <a className="soon__btn soon__btn--primary" href={`mailto:${c.email}`}>
              Írj emailt
            </a>
            <a
              className="soon__btn"
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <p className="soon__back">
            <Link href="/">← Vissza a főoldalra</Link>
          </p>
        </article>
      </main>
    </>
  );
}
