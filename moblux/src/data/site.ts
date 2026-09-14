import { IMAGES } from '../lib/assets';

export const SITE = {
  name: 'MOBLUX',
  legalName: 'MOBLUX Kft.',
  tagline: 'Modern, négy évszakos otthon kompromisszumok nélkül — egyenesen a gyártótól.',
  phone: '+36 30 633 8825',
  /** Az ajánlatkérő üzenet ide megy (script.js: wa.me/36306338825). */
  whatsapp: '36306338825',
  showroom: '6500 Baja, Szegedi út 86.',
  maps: 'https://maps.google.com/?q=6500+Baja+Szegedi+út+86',
  facebook: 'https://www.facebook.com/search/top?q=MOBLUX',
  logo: IMAGES.logo,
} as const;

export const NAV = [
  { label: 'Modellek', to: '/modellek' },
  { label: 'Alaprajzok', to: '/alaprajzok' },
  { label: 'Személyre szabás', to: '/szemelyre-szabas' },
  { label: 'Extrák', to: '/extrak' },
  { label: 'Telepítés', to: '/telepites' },
  { label: 'Kapcsolat', to: '/ajanlatkeres#contact' },
];

/** Teljes oldaltérkép a lábléchez. */
export const SITEMAP: { group: string; links: { label: string; to: string }[] }[] = [
  {
    group: 'Modellek',
    links: [
      { label: 'Összes modell', to: '/modellek' },
      { label: 'Apple Cabin 40', to: '/modellek/apple-cabin-40' },
      { label: 'Apple Cabin 20', to: '/modellek/apple-cabin-20' },
      { label: 'MOBLUX Lumina 35', to: '/modellek/lumina-35' },
      { label: 'MOBLUX Natura 35', to: '/modellek/natura-35' },
      { label: 'MOBLUX Expand 30', to: '/modellek/expand-30' },
      { label: 'MOBLUX Family 40', to: '/modellek/family-40' },
      { label: 'MOBLUX Grand 70', to: '/modellek/grand-70' },
    ],
  },
  {
    group: 'Tervezés',
    links: [
      { label: 'Alaprajzok', to: '/alaprajzok' },
      { label: 'Személyre szabás', to: '/szemelyre-szabas' },
      { label: 'Anyagminták', to: '/szemelyre-szabas#materials' },
      { label: 'Fűtés és napelem', to: '/extrak' },
    ],
  },
  {
    group: 'MOBLUX',
    links: [
      { label: 'Irodai megoldások', to: '/irodai-megoldasok' },
      { label: 'Gyártói háttér', to: '/gyartas' },
      { label: 'Telepítés', to: '/telepites#how' },
      { label: 'Engedélyeztetés', to: '/telepites#legal' },
      { label: 'Ajánlatkérés', to: '/ajanlatkeres' },
    ],
  },
];

export const HERO_FACTS = [
  { title: '4 évszakos', detail: 'egész éves komfort' },
  { title: 'Teljesen személyre szabható', detail: 'alaprajztól a burkolatig' },
  { title: 'Országos', detail: 'szállítás és telepítés' },
];

export const USES = [
  {
    number: '01',
    label: 'OTTHON ÉS PIHENÉS',
    title: 'Saját tér, egész évben',
    items: [
      'állandó vagy első otthon',
      'nyaraló és hétvégi ház',
      'horgászház vagy vízparti pihenő',
      'vendégház családnak és barátoknak',
    ],
    fits: ['35 m² · kompakt élet', '70 m² · családi otthon'],
    featured: false,
  },
  {
    number: '02',
    label: 'TURIZMUS ÉS BEFEKTETÉS',
    title: 'Élmény, amely bevételt termelhet',
    items: [
      'Airbnb és rövid távú szálláshely',
      'apartmanház vagy üdülőegység',
      'kemping, glamping és üdülőpark',
      'horgásztanya, vendégház és erdei szállás',
    ],
    fits: ['35 m² · önálló apartman', '70 m² · nagyobb vendégkapacitás'],
    featured: true,
  },
  {
    number: '03',
    label: 'ÜZLET ÉS SZOLGÁLTATÁS',
    title: 'Igényes hely a vállalkozásának',
    items: [
      'műkörmös, fodrász- vagy szépségszalon',
      'masszázs-, kozmetikai vagy wellnessstúdió',
      'bemutatóterem, üzlet vagy átvételi pont',
      'magánrendelő, tanácsadó- vagy terápiás tér',
    ],
    fits: ['35 m² · önálló szolgáltatótér', '70 m² · több kezelő vagy üzlettér'],
    featured: false,
  },
  {
    number: '04',
    label: 'MUNKA ÉS KÖZÖSSÉG',
    title: 'Gyorsan kialakítható funkcionális tér',
    items: [
      'iroda, tárgyaló vagy projektközpont',
      'telephelyi iroda és személyzeti pihenő',
      'oktatóterem, stúdió vagy alkotóműhely',
      'klubhelyiség és kisebb közösségi tér',
    ],
    fits: ['35 m² · fókuszált munkatér', '70 m² · többfunkciós kialakítás'],
    featured: false,
  },
];

export const CUSTOM_OPTIONS = [
  { number: '01', title: 'Alaprajz', detail: 'Szobaszám, funkciók, ajtók és ablakok.' },
  { number: '02', title: 'Megjelenés', detail: 'Külső-belső falburkolatok, padlók, színek.' },
  { number: '03', title: 'Konyha & fürdő', detail: 'Bútorok, munkalap, csaptelepek, szaniterek.' },
  {
    number: '04',
    title: 'Komfort',
    detail: 'Klíma, infrapanel-, padló- vagy mennyezetfűtés, 8 cm EPS vagy 10 cm PUR/PIR.',
  },
  { number: '05', title: 'Kültéri tér', detail: 'WPC terasz, tető, pergola, világítás.' },
  { number: '06', title: 'Energia', detail: 'Választható napelem és intelligens megoldások.' },
];

export const PROCESS = [
  { step: '01', title: 'Igényfelmérés', detail: 'Cél, méret, elrendezés, helyszín.' },
  { step: '02', title: 'Konfiguráció', detail: 'Anyagok, gépészet és extrák.' },
  { step: '03', title: 'Gyártás', detail: 'A jóváhagyott műszaki tartalom alapján.' },
  { step: '04', title: 'Szállítás', detail: 'Országos kiszállítás és daruzás megszervezése.' },
  { step: '05', title: 'Telepítés', detail: 'Szakszerű elhelyezés, összeállítás és átadás.' },
];

export const HEATING_OPTIONS = [
  {
    number: '01',
    title: 'Infrapanel fűtés',
    detail:
      'Falra vagy mennyezetre szerelhető, gyorsan reagáló elektromos megoldás. Önálló vagy kiegészítő fűtésként is tervezhető.',
  },
  {
    number: '02',
    title: 'Elektromos padlófűtés',
    detail:
      'A padlóburkolat alatt elhelyezett rendszer kellemes felületi hőmérsékletet és egyenletes komfortot biztosít, látható gépészeti elemek nélkül.',
  },
  {
    number: '03',
    title: 'Mennyezetfűtés',
    detail:
      'Diszkréten integrálható megoldás, amely szabadon hagyja a falakat és a padlót. Különösen jól illik a letisztult MOBLUX belső terekhez.',
  },
  {
    number: '04',
    title: 'Okos vezérlés',
    detail:
      'Programozható termosztáttal és helyiségenkénti zónaszabályozással is kialakítható a takarékosabb, személyre szabott használat érdekében.',
  },
];

export const SOLAR_SUMMARY = [
  { value: '9,92 kWp', detail: '16 × 620 W monokristályos napelem' },
  { value: '15 kWh', detail: 'LiFePO₄ energiatároló' },
  { value: '11 kW', detail: 'szigetüzemű inverter' },
  { value: 'kb. 45 kWh/nap', detail: 'becsült termelés kedvező körülmények között' },
];

export const SOLAR_DETAILS = [
  {
    number: '01',
    title: 'Monokristályos panelek',
    detail: '16 darab, egyenként 620 W-os modul. Panelméret: 2 382 × 1 134 × 30 mm, tömeg: 34,6 kg/db.',
  },
  {
    number: '02',
    title: 'LiFePO₄ akkumulátor',
    detail:
      '15 kWh kapacitás, 51,2 V névleges feszültség, beépített BMS és legalább 6 000 ciklusos tervezett élettartam 25 ± 2 °C-on.',
  },
  {
    number: '03',
    title: '11 kW-os inverter',
    detail: '210–240 V kimenet, 50/60 Hz, 48 V akkumulátoroldal és legfeljebb 500 V PV bemeneti feszültség.',
  },
  {
    number: '04',
    title: 'Komplett telepítési csomag',
    detail:
      'Alumínium vagy megerősített ötvözet tartószerkezet, DC kábelek, szerelési tartozékok, valamint villám- és túlfeszültség-védelemmel ellátott gyűjtődoboz.',
  },
];

export const OFFICE_SPECS = [
  { value: '5 945 × 3 000 × 2 800 mm', detail: '20 lábas modul külső mérete' },
  { value: '5 645 × 2 700 × 2 500 mm', detail: 'belső tér mérete' },
  { value: 'Acél vázszerkezet', detail: '2,2 mm főtartók és oszlopok' },
  { value: '50 mm EPS falpanel', detail: '75 mm üveggyapot tetőszigeteléssel' },
  { value: '15 mm MgO padló', detail: 'strapabíró moduláris rétegrend' },
  { value: 'Komplett elektromos rendszer', detail: 'LED világítás, kapcsolók és 10A/16A aljzatok' },
];
