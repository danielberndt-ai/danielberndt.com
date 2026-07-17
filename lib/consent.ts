// Süti-hozzájárulás kezelése és a mérőkód feltételes betöltése.
//
// Az audit.aiseoklub.hu megoldását követi, két eltéréssel:
//  - itt csak GA4 fut, marketing pixel nincs, ezért nincs "marketing"
//    kategória sem. Ha később pixel kerül az oldalra, azt új kategóriaként
//    kell felvenni, nem a statisztika alá csúsztatva (NAIH: a hozzájárulást
//    célonként külön kell kérni).
//  - a tárolókulcs domainenként külön, hogy az audit döntése ne szivárogjon át.

export const GA_MEASUREMENT_ID = "G-XPQQZZT483";

const CONSENT_STORAGE_KEY = "danielberndt_cookie_consent_v1";

export type Consent = { analytics: boolean };

// A "feltétlenül szükséges" kategória nem kapcsolható és nem igényel
// hozzájárulást, ezért nem is tároljuk.
export const EMPTY_CONSENT: Consent = { analytics: false };

export function readStoredConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.analytics !== "boolean") return null;
    return { analytics: parsed.analytics };
  } catch {
    return null;
  }
}

export function writeStoredConsent({ analytics }: Consent) {
  try {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({ analytics, decidedAt: new Date().toISOString() })
    );
  } catch {
    // A localStorage nem mindig elérhető (inkognitó, letiltott sütik).
    // Ilyenkor a döntés csak az adott munkamenetre él, ez nem hiba.
  }
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __dbAnalyticsLoaded?: boolean;
  }
}

// FONTOS: kizárólag a látogató kifejezett hozzájárulása után futhat le.
// Az oldal betöltésekor semmilyen mérőkód nem települ (előzetes hozzájárulás).
function loadAnalytics() {
  if (typeof window === "undefined") return;
  if (!GA_MEASUREMENT_ID || window.__dbAnalyticsLoaded) return;
  window.__dbAnalyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);
}

export function applyConsent(consent: Consent | null) {
  if (consent?.analytics) loadAnalytics();
}
