"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  applyConsent,
  EMPTY_CONSENT,
  readStoredConsent,
  writeStoredConsent,
  type Consent,
} from "@/lib/consent";

function CategoryRow({
  title,
  desc,
  checked,
  onChange,
  locked,
}: {
  title: string;
  desc: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  locked?: boolean;
}) {
  return (
    <div className="consent-cat">
      <input
        type="checkbox"
        checked={checked}
        disabled={locked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="consent-cat__box"
      />
      <div>
        <div className="consent-cat__title">
          {title}
          {locked && <span className="consent-cat__locked">MINDIG AKTÍV</span>}
        </div>
        <div className="consent-cat__desc">{desc}</div>
      </div>
    </div>
  );
}

function CookieBanner({ onDecide }: { onDecide: (c: Consent) => void }) {
  const [showSettings, setShowSettings] = useState(false);
  // Az opcionális kategória alapból be van kapcsolva (üzemeltetői döntés), de
  // a mérőkód ettől még csak a döntés UTÁN töltődik be.
  const [analytics, setAnalytics] = useState(true);

  // Portállal a <body> alá rendereljük: a fő konténer overflow/pozíció
  // szabályai mellett a backdrop-filter nem az oldal tartalmát mosná el.
  return createPortal(
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Süti-hozzájárulás"
      className="consent"
    >
      <div className="consent__panel">
        <p className="consent__lead">
          Ez az oldal sütiket használ a működéséhez és statisztikához. A
          feltétlenül szükséges sütik automatikusan bekapcsolnak, a
          statisztikáról te döntesz. A Google Analytics csak a hozzájárulásod
          után töltődik be.
        </p>

        {showSettings && (
          <div className="consent__cats">
            <CategoryRow
              locked
              checked
              title="Feltétlenül szükséges"
              desc="Az oldal működéséhez és a süti-döntésed megjegyzéséhez kell. Nem küld adatot harmadik félnek."
            />
            <CategoryRow
              title="Statisztika / analitika"
              desc="Google Analytics: névtelen látogatottsági adatok, hogy lássam, mi működik az oldalon."
              checked={analytics}
              onChange={setAnalytics}
            />
          </div>
        )}

        {/* A gombok szándékosan azonos méretűek: az elutasítás nem lehet
            nehezebb, mint az elfogadás. */}
        <div className="consent__actions">
          <button
            type="button"
            className="consent-btn consent-btn--accept"
            onClick={() => onDecide({ analytics: true })}
          >
            Elfogadom
          </button>
          <button
            type="button"
            className="consent-btn consent-btn--reject"
            onClick={() => onDecide({ analytics: false })}
          >
            Elutasítom
          </button>
          {showSettings ? (
            <button
              type="button"
              className="consent-btn consent-btn--ghost"
              onClick={() => onDecide({ analytics })}
            >
              Mentés
            </button>
          ) : (
            <button
              type="button"
              className="consent-btn consent-btn--ghost"
              onClick={() => setShowSettings(true)}
            >
              Beállítások
            </button>
          )}
        </div>

        <p className="consent__links">
          <a href="/adatvedelmi-tajekoztato#sutik">Süti tájékoztató</a>
          {" · "}
          <a href="/adatvedelmi-tajekoztato">Adatkezelési tájékoztató</a>
        </p>
      </div>
    </div>,
    document.body
  );
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored === null) {
      // Még nem döntött: a banner megjelenik, és addig semmilyen mérőkód
      // nem töltődik be.
      setShowBanner(true);
    } else {
      applyConsent(stored);
    }
  }, []);

  function handleDecision(consent: Consent) {
    const decision = { ...EMPTY_CONSENT, ...consent };
    writeStoredConsent(decision);
    setShowBanner(false);
    applyConsent(decision);
  }

  return (
    <>
      <a href="/adatvedelmi-tajekoztato">Adatvédelmi tájékoztató</a>
      {" · "}
      <button
        type="button"
        className="footer-link"
        onClick={() => setShowBanner(true)}
      >
        Süti beállítások
      </button>
      {showBanner && <CookieBanner onDecide={handleDecision} />}
    </>
  );
}
