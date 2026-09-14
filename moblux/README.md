# MOBLUX – React + React Router + TypeScript + Tailwind

Az eredeti MOBLUX oldal (`index.html`, `ketszintes.html`, `styles.css`, `script.js`) React 19 +
React Router 7 + Tailwind CSS 4 portja, szekciónkénti komponensekre bontva.

## Indítás

```bash
npm install
npm run dev      # fejlesztői szerver
npm run build    # típusellenőrzés + production build
```

## Képek és letöltések

Az útvonalak az eredeti mappaszerkezetet követik. A csomagban már benne van:

```
public/favicon.svg, favicon-32x32.png                    ✓
public/MOBLUX_mobilhazak_es_valaszthato_opciok.pdf       ✓
public/assets/brand/moblux-logo-white.svg                ✓
public/assets/plans/  (mind a 7 alaprajz)                ✓
public/assets/materials/  (6 anyagminta-tábla)           ✓
public/assets/photos/                                    ← IDE KELLENEK A FOTÓK
public/katalogus/     (6 anyagminta-PDF)                 ← IDE KELLENEK A PDF-EK
```

**Fotók:** a meglévő `assets/photos/` mappát egy az egyben ide kell másolni (alkönyvtárakkal:
`lumina-35/`, `two-story/`, `expandable-30/`, `grand-70/`, `office/`, `production/`, `heating/`).

**Anyagminta-PDF-ek:** a hat PDF méret miatt kimaradt a csomagból (a prémium és a laminált
együtt 25 MB); a `public/katalogus/` mappában lévő txt felsorolja a várt fájlneveket.

Minden útvonal egyetlen fájlban van: `src/lib/assets.ts`. Amíg egy fájl hiányzik, a helyén
sraffozott helykitöltő jelenik meg a képaláírással és a várt fájlnévvel — a layout nem ugrik szét,
és a build sem áll meg.

## Útvonalak

| Útvonal | Tartalom |
| --- | --- |
| `/` | Hero, bemutatkozás, modellrács, felhasználási módok, folyamat, kapcsolat |
| `/modellek` | Gyűjtőlap: szűrhető modellrács, gyorsnézet modállal |
| `/modellek/apple-cabin-40` | Apple Cabin 40 + fotógaléria |
| `/modellek/apple-cabin-20` | Apple Cabin 20 |
| `/modellek/lumina-35` | Lumina 35 (galéria, műszaki tartalom, irányár) |
| `/modellek/natura-35` | Natura 35 |
| `/modellek/expand-30` | Expand 30 (alaprajz, műszaki blokkok, galéria) |
| `/modellek/family-40` | Family 40 — **két 40 lábas gyártói alaprajz** |
| `/modellek/grand-70` | Grand 70 kétszintes (saját full-bleed hero) |
| `/alaprajzok` | 20/30/40 lábas fülek + 70 m² egyszintes |
| `/szemelyre-szabas` | Választható elemek + anyagminták (`#materials`) |
| `/extrak` | Fűtési opciók (`#heating`) + napelemes rendszer (`#solar`) |
| `/irodai-megoldasok` | Irodakonténerek, konténerpark |
| `/gyartas` | Gyártói háttér |
| `/telepites` | Telepítési folyamat (`#how`), partner, jogszabályi háttér (`#legal`), HRSZ-eszközök, telekvizsgálat-űrlap (`#siting-check`) |
| `/ajanlatkeres` | Ajánlatkérő űrlap (`#quote`) + kapcsolat (`#contact`) |

Minden modelloldal alján a `MoreModels` sáv átvisz a többi modellre, a fejlécben pedig
kenyérmorzsa vezet vissza a `/modellek` gyűjtőlapra.

### Régi linkek

Az egyoldalas verzió linkjei nem halnak el: a `src/lib/legacyRoutes.ts` táblája szerint a
`/#apple`, `/#plans`, `/#quote` stb. horgonyok átirányítanak az új aloldalra
(`src/lib/useHashScroll.ts`), a `/ketszintes`, `/index.html`, `/ketszintes.html` és
`/telepites.html` útvonalakra pedig a router tesz `Navigate` átirányítást.
## Szerkezet

```
src/
  data/        szövegek és listák (site, models, plans, materials, quote, siting)
  lib/         képútvonalak, formázók, hash-scroll hook
  components/  Nav, Footer, MobileCall, RootLayout, Reveal, SectionHead, PageHero,
               MoreModels, Img, Zoom (lightbox context + ZoomImage), ModelModal
  sections/    Hero, Statement, Models, Expand30, Uses, OfficeSolutions, AppleCabin40,
               Gallery, AppleCabin20, Natura35, Lumina35, Plans, SingleLevel70, Custom,
               Materials, Family40, ProductionProof, Heating, Solar, Process, Quote, Contact,
               SitingHero, SitingService, PartnerSection, LegalBasis, HrszTools, SitingCheck
  pages/       HomePage, ModellekPage + 7 modelloldal, AlaprajzokPage,
               SzemelyreSzabasPage, ExtrakPage, IrodaiPage, GyartasPage,
               TelepitesPage, AjanlatkeresPage, NotFoundPage
```

Szövegmódosításhoz általában elég a `src/data/` négy fájlja.

## Az eredeti viselkedések megfelelői

| Eredeti (script.js)              | React                                                     |
| -------------------------------- | --------------------------------------------------------- |
| `.header.scrolled`               | `Nav` scroll-listener                                      |
| `.menu` / `nav.open`             | `Nav` mobil menü állapot                                   |
| `.reveal` + IntersectionObserver | `<Reveal>` komponens                                       |
| `.filters button` szűrés         | `Models` szűrőállapot (`hidden` helyett szűrt lista)       |
| `.plan-tabs`                     | `Plans` tabok                                              |
| `[data-full]` + `dialog.lightbox`| `ZoomProvider` + `<ZoomImage>`                             |
| `[data-model]` + `.model-modal`  | `ModelModal` + `MODEL_DETAILS`                             |
| `#quote-form` → `wa.me`          | `Quote` űrlap, ugyanaz az üzenetsablon és WhatsApp-szám    |
| `#siting-form`                   | `SitingCheck` űrlap, ugyanaz a WhatsApp-üzenetsablon       |

## Képkomponens — fontos szabály

Az `<Img>` és a `<ZoomImage>` **mindig kitölti a szülő elemét** (`h-full w-full`), ezért:

- a **méretezés a szülő dolga** (fix magasság, `aspect-*` vagy grid-cella),
- az object-fit-et a **`fit="cover" | "contain"` prop** állítja, nem a `className`,
- a `className`-be csak nem ütköző osztály kerüljön (pozíció, `object-left`, animáció).

Ha magasságot vagy `object-contain`-t `className`-ben adsz át, nem a JSX sorrendje dönt, hanem
a Tailwind stíluslapjának sorrendje — a kép ilyenkor a natív méretét veszi fel és levágódik.
Alaprajzoknál és a logóknál ezért `fit="contain"` van.

## Design tokenek (`src/index.css`, az eredeti `:root` alapján)

`ink #10110f` · `paper #f4f2ed` · `gold #c9a85b` · `muted #73746f` · `line #d8d4ca`
Betűk: **Manrope** (szöveg) + **Playfair Display** dőlt (az `<em>` kiemelések).
A `.pad`, `.eyebrow`, `.btn`, `.note`, `.zoom-tag`, `.reveal` osztályok az eredeti CSS-ből
kerültek át `@layer components`-be, minden más Tailwind utility.

## Az eredetihez képest új

- **Többoldalas szerkezet** a korábbi egyoldalas helyett (lásd az útvonaltáblát).
- **`/modellek/family-40` oldal**: itt kapott helyet a `40ft-family-plan.png` és a
  `40ft-multifunction-plan.png` is, a katalógusból vett méretekkel.
- **`#materials` szekció** („Alakítsa saját stílusára"): a hat anyagminta-kategória nagyítható
  minta-táblával és PDF-linkkel. Az eredeti oldalon ez csak a nagy PDF katalógusban volt benne.
  Ha nem kell, töröld a `<Materials />` sort a `HomePage.tsx`-ből.

## Még hiányzik

- `assets/photos/` fotóállomány és a hat anyagminta-PDF (lásd feljebb)
- a `moblux-update.css` `.signature-model` / `.model-hero` / `.feature-panels` szabályai —
  ezekhez tartozó markup nincs a kapott HTML-ekben, ezért nem portoltam
