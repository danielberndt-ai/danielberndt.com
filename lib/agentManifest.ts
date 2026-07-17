import { siteConfig } from "@/lib/site";

// Aiia ai-agent.json formátum. A mezőkészletet az Aiia élő manifesztje adja
// (https://aiia.ro/ai-agent.json): name és description kötelező, a többi
// opcionális. Ugyanezt a tartalmat szolgáljuk ki /agents.json és
// /ai-agent.json alatt is, mert a két elnevezés párhuzamosan él.
export function buildAgentManifest() {
  return {
    name: siteConfig.name,
    description: `${siteConfig.tagline}. ${siteConfig.bio}`,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon-512.png`,
    contact: {
      email: siteConfig.contacts.email,
      whatsapp: `https://wa.me/${siteConfig.contacts.whatsapp}`,
      linkedin: siteConfig.contacts.linkedin,
      instagram: siteConfig.contacts.instagramPro,
    },
    // Csak a valódi, működő célpontok. A belső, "hamarosan" állapotú oldalak
    // (relatív href) kimaradnak — lásd az app/llms.txt/route.ts indoklását.
    actions: siteConfig.links
      .filter((link) => link.href.startsWith("http"))
      .map((link) => ({
        name: link.label,
        description: link.description,
        url: link.href,
      })),
  };
}

export function agentManifestResponse() {
  return Response.json(buildAgentManifest(), {
    headers: { "Cache-Control": "public, max-age=3600, s-maxage=3600" },
  });
}
