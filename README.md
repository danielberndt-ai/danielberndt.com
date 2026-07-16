# Daniel Berndt, link-in-bio oldal

Modern, futurisztikus link-in-bio oldal Next.js-ben (App Router, TypeScript),
teljes SEO optimalizálással. GitHub + Vercel deployra készen.

Domain: **danielberndt.com**

---

## Mit tartalmaz

- Reszponzív, sötét teal (#042f2e) + narancs (#ff8c00) neon dizájn
- Profilkép szignatúra "jel-gyűrű" animációval
- Kapcsolati ikonok: email, WhatsApp, Instagram (2 fiók), LinkedIn
- 3 fő gomb: AI SEO Klub, Ingyenes AI audit, AI SEO Tanácsadás
- Teljes SEO: metaadatok, Open Graph, Twitter Card, canonical, `sitemap.xml`,
  `robots.txt`, PWA manifest, kedvenc ikonok
- JSON-LD strukturált adat (Person + WebSite), hogy az AI keresők és a Google is
  pontosan értsék, ki vagy és mivel foglalkozol

---

## Helyi futtatás

Szükséges: Node.js 18.17 vagy újabb.

```bash
npm install
npm run dev
```

Ezután nyisd meg: http://localhost:3000

Éles build teszteléséhez:

```bash
npm run build
npm run start
```

---

## Testreszabás

Szinte minden szöveg és link egy helyen szerkeszthető:

**`lib/site.ts`**

Itt tudod állítani a nevet, tagline-t, biót, a kapcsolati adatokat és a gombokat.

### Fontos: a Tanácsadás gomb linkje

A `lib/site.ts`-ben a harmadik gomb `href` értéke jelenleg egy helyőrző:

```ts
href: "REPLACE_WITH_GOOGLE_CALENDAR_URL",
```

Cseréld ki a végleges Google Calendar időpontfoglaló linkedre, amint megvan.

### Képek cseréje

- Profilkép: `public/profile.jpg` (négyzetes, ajánlott legalább 800x800 px)
- Megosztási kép: `public/og.jpg` (1200x630 px)
- Favikon: `app/icon.png`, `app/apple-icon.png`
- PWA ikonok: `public/icon-192.png`, `public/icon-512.png`

---

## Deploy GitHubról Vercelre

1. Hozz létre egy új GitHub repót, és pushold fel ezt a mappát:

   ```bash
   git init
   git add .
   git commit -m "Init: link-in-bio oldal"
   git branch -M main
   git remote add origin https://github.com/FELHASZNALONEV/REPO.git
   git push -u origin main
   ```

2. Menj a [vercel.com](https://vercel.com) oldalra, **Add New, Project**, és
   importáld a repót. A Vercel automatikusan felismeri a Next.js-t, nincs külön
   beállítás.

3. **Domain hozzáadása:** a projekt **Settings, Domains** menüjében add hozzá a
   `danielberndt.com` domaint (és a `www.danielberndt.com` átirányítást). A Vercel
   megmutatja, milyen DNS rekordokat (A / CNAME) kell beállítanod a domain
   szolgáltatódnál.

4. Ha él a domain, ellenőrizd:
   - `https://danielberndt.com/sitemap.xml`
   - `https://danielberndt.com/robots.txt`
   - A megosztási kép megjelenését (pl. a LinkedIn Post Inspectorban vagy a
     [opengraph.xyz](https://www.opengraph.xyz) oldalon)

---

## Megjegyzés a betűtípusokról

A dizájn a Google Fonts **Sora** (címsorok) és **Inter** (szövegtörzs)
betűtípusait használja, `latin-ext` karakterkészlettel, ami tartalmazza a magyar
ékezeteket (ő, ű is). A betűket a Next a build során tölti le, ehhez a build
környezetnek van internetkapcsolata (a Vercel ezt automatikusan biztosítja).
