// -----------------------------------------------------------------------------
// Központi konfiguráció. Ha bármit módosítani szeretnél (linkek, szövegek),
// szinte mindent itt tudsz megtenni, nem kell a komponensekhez nyúlni.
// -----------------------------------------------------------------------------

export const siteConfig = {
  // Alap adatok
  name: "Daniel Berndt",
  tagline: "AI SEO & AI láthatóság szakértő",
  bio: "11 év IT mérnöki, 8 év online marketinges és 6 év AI tapasztalattal abban segítek, hogy ott legyél az AI keresők válaszaiban.",

  // Domain (canonical, sitemap, JSON-LD). Végén NE legyen perjel.
  url: "https://danielberndt.com",

  // A tartalom utolsó érdemi módosítása (dateModified, sitemap lastmod).
  // Szándékosan kézzel írt dátum, nem build-idő: csak akkor írd át, ha a
  // szövegek vagy a linkek tényleg változtak. Így a frissesség jelzés igaz
  // marad egy puszta újradeploy után is. Formátum: YYYY-MM-DD.
  contentModified: "2026-07-16",

  // Profilkép a public mappából
  avatar: "/profile.jpg",

  // OG / közösségi megosztási kép
  ogImage: "/og.jpg",

  // ---------------------------------------------------------------------------
  // Kapcsolati ikonok (a profil alatt, sorban)
  // ---------------------------------------------------------------------------
  contacts: {
    email: "danielberndt89@gmail.com",
    // WhatsApp: nemzetközi formátum, csak számjegyek (a + és a szóközök nélkül)
    whatsapp: "36304441892",
    // Előre kitöltött WhatsApp üzenet (opcionális)
    whatsappMessage: "Szia Dani! Az oldaladról írok.",
    instagramPro: "https://instagram.com/danielberndt.ai",
    linkedin: "https://www.linkedin.com/in/danielberndtai",
  },

  // ---------------------------------------------------------------------------
  // Fő gombok (linkek a weboldalaidra / szolgáltatásokra)
  // A sorrend itt szabadon átrendezhető.
  // ---------------------------------------------------------------------------
  links: [
    {
      label: "AI SEO Klub",
      description: "Egy közösség, ahol az AI keresőoptimalizálást tanulhatod",
      href: "https://aiseoklub.hu",
      external: true,
    },
    {
      label: "Ingyenes AI audit",
      description: "Egy perc alatt megnézheted, mennyire látszol az AI keresőkben",
      href: "https://audit.aiseoklub.hu",
      external: true,
    },
    {
      label: "AI SEO Tanácsadás",
      description: "Foglalj egy időpontot egy személyes konzultációra",
      // FIGYELEM: ide illeszd be a végleges Google Calendar foglalási linked!
      href: "REPLACE_WITH_GOOGLE_CALENDAR_URL",
      external: true,
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
