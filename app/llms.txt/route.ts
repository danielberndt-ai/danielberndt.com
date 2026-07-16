import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

// A siteConfig.links tartalmazhat még ki nem töltött placeholdert, azt nem
// hirdetjük meg. Csak a valódi, abszolút URL-ek kerülnek be.
const publishedLinks = siteConfig.links.filter((link) =>
  link.href.startsWith("http")
);

export function GET() {
  const body = `# ${siteConfig.name}

> ${siteConfig.tagline}. ${siteConfig.bio}

${siteConfig.name} magyar nyelven dolgozik, és abban segít, hogy egy márka megjelenjen az AI keresők (ChatGPT, Perplexity, Google AI Overview, Gemini) válaszaiban. Ez az oldal egy link-in-bio belépési pont: innen érhetők el a szolgáltatásai és a közösségi profiljai.

## Szolgáltatások

${publishedLinks
  .map((link) => `- [${link.label}](${link.href}): ${link.description}`)
  .join("\n")}

## Kapcsolat

- [Email](mailto:${siteConfig.contacts.email}): Közvetlen megkeresés
- [LinkedIn](${siteConfig.contacts.linkedin}): Szakmai profil
- [Instagram](${siteConfig.contacts.instagramPro}): Szakmai tartalmak az AI SEO-ról

## Optional

- [Weboldal](${siteConfig.url}): Ez az oldal HTML formában
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
