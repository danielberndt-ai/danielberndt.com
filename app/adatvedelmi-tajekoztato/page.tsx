import type { Metadata } from "next";
import Link from "next/link";
import Background from "@/components/Background";
import CookieConsent from "@/components/CookieConsent";
import { siteConfig } from "@/lib/site";

// FONTOS: ez a tájékoztató kizárólag a danielberndt.com adatkezelését írja le.
// Itt nincs hírlevél, űrlap, audit eszköz vagy marketing pixel — ha ilyen
// kerül az oldalra, ezt a dokumentumot bővíteni kell.
export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató",
  description:
    "Hogyan kezelem a személyes adataidat a danielberndt.com oldalon: technikai naplók, kapcsolatfelvétel és a Google Analytics sütik.",
  alternates: { canonical: "/adatvedelmi-tajekoztato" },
};

const EFFECTIVE_FROM = "2026. július 17";

export default function PrivacyPolicy() {
  return (
    <>
      <Background />
      <main className="page page--legal">
        <article className="card legal">
          <p className="legal__eyebrow">{EFFECTIVE_FROM}-TŐL</p>
          <h1 className="legal__title">Adatvédelmi tájékoztató</h1>

          <h2>1. Bevezetés</h2>
          <p>
            Ez a tájékoztató azt mutatja be, hogyan kezelem a személyes
            adataidat, amikor felkeresed a danielberndt.com weboldalt. A
            tájékoztató az Európai Unió Általános Adatvédelmi Rendelete (GDPR)
            és az információs önrendelkezési jogról és az információszabadságról
            szóló 2011. évi CXII. törvény (Infotv.) alapján készült.
          </p>
          <p>
            Ez az oldal egy egyszerű bemutatkozó és linkgyűjtő felület: nincs
            rajta űrlap, regisztráció, hírlevél-feliratkozás vagy webshop. Az
            innen kivezető szolgáltatásokra (például az AI SEO Klub vagy az
            AI-láthatósági audit) azok saját adatvédelmi tájékoztatója
            vonatkozik.
          </p>

          <h2>2. Az adatkezelő adatai</h2>
          <ul>
            <li>
              <strong>Név:</strong> Bernát Dániel, egyéni vállalkozó
            </li>
            <li>
              <strong>Székhely:</strong> 2038 Sóskút, Fő utca 45.
            </li>
            <li>
              <strong>Nyilvántartó kamara:</strong> Pest Vármegyei és Érdi
              Kereskedelmi és Iparkamara
            </li>
            <li>
              <strong>Nyilvántartási szám:</strong> PE69395828
            </li>
            <li>
              <strong>Kapcsolattartási email:</strong>{" "}
              <a href="mailto:danielberndt@aiseoklub.hu">
                danielberndt@aiseoklub.hu
              </a>
            </li>
          </ul>
          <p>
            Adatvédelemmel kapcsolatos bármilyen kérdésedet, kérésedet a fenti
            email címre küldheted el.
          </p>

          <h2>3. Milyen adatokat kezelek, és milyen célból</h2>

          <h3>3.1. Az oldal meglátogatása</h3>
          <p>
            Amikor megnyitod az oldalt, a tárhelyszolgáltató (Vercel) a
            működéshez és a biztonsághoz technikai naplóadatokat rögzít:
            IP-cím, a kérés időpontja, a böngésző és az operációs rendszer
            típusa, a lekért oldal címe.
          </p>
          <p>
            <strong>Jogalap:</strong> jogos érdek (GDPR 6. cikk (1) f)) — az
            oldal biztonságos és stabil üzemeltetése. Ezek az adatok nem
            kapcsolódnak össze a személyeddel, és nem használom marketingre.
          </p>
          <p>
            <strong>Megőrzési idő:</strong> a szolgáltató saját naplózási
            gyakorlata szerint, jellemzően néhány hét.
          </p>

          <h3>3.2. Kapcsolatfelvétel</h3>
          <p>
            Az oldalon nincs űrlap. Ha az email vagy a WhatsApp ikonra
            kattintasz, a saját leveleződ, illetve a WhatsApp nyílik meg — az
            adataidat csak akkor és annyiban ismerem meg, amennyit magad
            elküldesz nekem. Ilyenkor a megkeresésed tartalmát és az elérhetőségedet
            kezelem, hogy válaszolni tudjak.
          </p>
          <p>
            <strong>Jogalap:</strong> jogos érdek, illetve a szerződéskötést
            megelőző lépések megtétele a kérésedre (GDPR 6. cikk (1) b) és f)).
          </p>
          <p>
            <strong>Megőrzési idő:</strong> a megkeresés elintézéséig, illetve
            amíg az abból eredő igények érvényesíthetők.
          </p>
          <p>
            A WhatsApp-on folytatott beszélgetésre a WhatsApp (Meta Platforms
            Ireland Limited) saját adatvédelmi tájékoztatója is vonatkozik. Az
            Instagram és a LinkedIn ikonok egyszerű hivatkozások: rájuk
            kattintva az adott platform saját szabályai szerint kezelik az
            adataidat.
          </p>

          <h3 id="sutik">3.3. Sütik és mérőkódok (Google Analytics)</h3>
          <p>
            A danielberndt.com egy süti-sávval indul, ami alapértelmezetten{" "}
            <strong>semmilyen mérőkódot nem tölt be</strong>. A hozzájárulást
            igénylő sütik csak azután települnek, hogy a sávon kifejezetten
            engedélyezted őket.
          </p>
          <p>
            <strong>Feltétlenül szükséges sütik.</strong> Az oldal működéséhez
            és a süti-döntésed megjegyzéséhez kell. A döntésedet a böngésződ
            saját tárolójában (localStorage) tárolom, nem küldöm el sehova, és
            nem igényel hozzájárulást.
          </p>
          <p>
            <strong>Statisztika / analitika.</strong> Ha engedélyezed, betöltődik
            a Google Analytics 4 (Google Ireland Limited). Ez sütiket és egyedi
            azonosítókat helyez el a böngésződben, és névtelen látogatottsági
            adatokat gyűjt: hány látogató érkezik, honnan, milyen eszközről,
            mely linkekre kattintanak. Ezekből nem azonosítalak téged.
          </p>
          <p>
            <strong>Jogalap:</strong> a hozzájárulásod, amit a süti-sávon adsz
            meg (GDPR 6. cikk (1) a)).
          </p>
          <p>
            <strong>Megőrzési idő:</strong> az adott süti saját, a Google által
            meghatározott lejáratáig, illetve amíg vissza nem vonod a
            hozzájárulásod.
          </p>
          <p>
            A döntésedet bármikor, ugyanolyan egyszerűen megváltoztathatod vagy
            visszavonhatod az oldal alján található{" "}
            <strong>{"„Süti beállítások”"}</strong> linkre kattintva.
          </p>

          <h2>4. Kik férnek hozzá az adataidhoz</h2>
          <div className="legal__tablewrap">
            <table>
              <thead>
                <tr>
                  <th>Szolgáltató</th>
                  <th>Szerepe</th>
                  <th>Mit lát az adataidból</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vercel Inc.</td>
                  <td>A weboldal hostingja</td>
                  <td>technikai naplóadatok, IP-cím</td>
                </tr>
                <tr>
                  <td>Google Ireland Limited</td>
                  <td>Google Analytics (csak hozzájárulás után)</td>
                  <td>süti-azonosítók, IP-cím, látogatottsági adatok</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Ezek a szolgáltatók saját adatvédelmi tájékoztatóval rendelkeznek,
            amit érdemes külön is átnézned, ha részletesebben érdekel, ők hogyan
            kezelik az adataidat.
          </p>

          <h2>5. Adattovábbítás az Európai Unión kívülre</h2>
          <p>
            A Google és a Vercel amerikai székhelyű vállalatok, ezért
            előfordulhat, hogy az általuk kezelt adatok az Európai Gazdasági
            Térségen kívülre, az Egyesült Államokba kerülnek továbbításra. Ezt a
            továbbítást az EU-USA Adatvédelmi Keretrendszer (EU-U.S. Data
            Privacy Framework), illetve a szolgáltatók által alkalmazott egyéb, a
            GDPR szerint megfelelő garanciák (például általános szerződési
            feltételek) biztosítják.
          </p>

          <h2>6. Milyen jogaid vannak</h2>
          <ul>
            <li>
              <strong>Hozzáférés joga:</strong> megkérdezheted, milyen adatokat
              kezelek rólad.
            </li>
            <li>
              <strong>Helyesbítés joga:</strong> kérheted a pontatlan adatok
              javítását.
            </li>
            <li>
              <strong>Törlés joga:</strong> kérheted az adataid törlését.
            </li>
            <li>
              <strong>Adatkezelés korlátozásának joga:</strong> bizonyos
              esetekben kérheted az adatkezelés korlátozását.
            </li>
            <li>
              <strong>Tiltakozás joga:</strong> tiltakozhatsz az adataid
              kezelése ellen.
            </li>
            <li>
              <strong>Adathordozhatóság joga:</strong> kérheted, hogy az
              adataidat tagolt, géppel olvasható formában megkapd.
            </li>
            <li>
              <strong>A hozzájárulás visszavonásának joga:</strong> a
              süti-hozzájárulásodat bármikor, indoklás nélkül visszavonhatod a
              {"„Süti beállítások”"} linken. Ez nem érinti a visszavonás előtti
              adatkezelés jogszerűségét.
            </li>
          </ul>
          <p>
            Ezeket a jogaidat a{" "}
            <a href="mailto:danielberndt@aiseoklub.hu">
              danielberndt@aiseoklub.hu
            </a>{" "}
            email címen gyakorolhatod.
          </p>

          <h2>7. Adatbiztonság</h2>
          <p>
            Az adataid védelme érdekében megfelelő technikai és szervezési
            intézkedéseket alkalmazok, és csak a fentebb felsorolt, megbízható
            szolgáltatókkal dolgozom együtt, akik szintén kötelesek a GDPR
            előírásait betartani.
          </p>

          <h2>8. Kiskorúak adatai</h2>
          <p>
            A weboldal nem 18 év alatti személyeknek szól. Ha tudomásomra jut,
            hogy kiskorú adatait kezelem a hozzájárulása vagy a törvényes
            képviselője hozzájárulása nélkül, az érintett adatokat
            haladéktalanul törlöm.
          </p>

          <h2>9. Jogorvoslati lehetőségek</h2>
          <p>
            Ha úgy érzed, hogy megsértettem az adataid kezelésével kapcsolatos
            jogaidat, panasszal fordulhatsz a felügyeleti hatósághoz:
          </p>
          <ul>
            <li>Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</li>
            <li>Székhely: 1055 Budapest, Falk Miksa utca 9-11.</li>
            <li>Postacím: 1363 Budapest, Pf. 9.</li>
            <li>Telefon: +36 (1) 391-1400</li>
            <li>
              Email:{" "}
              <a href="mailto:ugyfelszolgalat@naih.hu">
                ugyfelszolgalat@naih.hu
              </a>
            </li>
            <li>
              Honlap:{" "}
              <a
                href="https://www.naih.hu"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.naih.hu
              </a>
            </li>
          </ul>
          <p>
            Emellett jogaid érvényesítése érdekében bírósághoz is fordulhatsz, a
            lakóhelyed vagy tartózkodási helyed szerint illetékes törvényszéken.
          </p>

          <h2>10. A tájékoztató módosítása</h2>
          <p>
            Ezt a tájékoztatót időről időre frissíthetem, például ha új
            szolgáltatást vezetek be, vagy változik a jogszabályi környezet. A
            mindenkor aktuális verzió ezen az oldalon érhető el.
          </p>

          <p className="legal__back">
            <Link href="/">← Vissza a főoldalra</Link>
          </p>
        </article>

        <footer className="footer">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          {/* A süti-sávnak ezen az oldalon is meg kell jelennie: aki
              közvetlenül ide érkezik, ugyanúgy dönthessen. */}
          <span className="footer__legal">
            <CookieConsent />
          </span>
        </footer>
      </main>
    </>
  );
}
