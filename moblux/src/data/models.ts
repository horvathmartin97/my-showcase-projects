import { IMAGES } from '../lib/assets';

export type ModelFilter = 'all' | 'home' | 'invest' | 'premium';

export const MODEL_FILTERS: { id: ModelFilter; label: string }[] = [
  { id: 'all', label: 'Összes' },
  { id: 'home', label: 'Otthon' },
  { id: 'invest', label: 'Befektetés' },
  { id: 'premium', label: 'Prémium' },
];

/** A gyorsnézet modál tartalma (script.js `data` objektuma). */
export interface ModelDetail {
  kicker: string;
  title: string;
  copy: string;
  specs: [string, string][];
}

export const MODEL_DETAILS: Record<string, ModelDetail> = {
  family: {
    kicker: '40 LÁBAS KINYITHATÓ',
    title: 'MOBLUX Family 40',
    copy: 'Tágas, több helyiséges otthon családoknak, apartmanprojektnek vagy befektetési célra. Galvanizált acélvázra épül.',
    specs: [
      ['11 800 mm', 'hossz'],
      ['6 300 mm', 'kinyitott szélesség'],
      ['akár 3', 'hálószoba'],
    ],
  },
  expand30home: {
    kicker: '30 LÁBAS KINYITHATÓ',
    title: 'MOBLUX Expand 30',
    copy: 'Két oldalra nyitható, családi méretű modell akár három hálószobával, nappalival, konyhával és komplett fürdőszobával.',
    specs: [
      ['9 000 mm', 'hossz'],
      ['6 300 mm', 'kinyitott szélesség'],
      ['kb. 56,7 m²', 'alapterület'],
    ],
  },
  apple: {
    kicker: 'PRÉMIUM ÚJDONSÁG',
    title: 'Apple Cabin 40',
    copy: 'Ikonikus, lekerekített forma panorámafelületekkel, komplett konyhával és fürdőszobával.',
    specs: [
      ['11,8 m', 'hossz'],
      ['2,2 m', 'szélesség'],
      ['26 m²', 'hasznos alapterület'],
    ],
  },
  apple20: {
    kicker: 'KOMPAKT ÚJDONSÁG',
    title: 'Apple Cabin 20',
    copy: 'Az Apple Cabin karakteres formája kompakt, jól berendezhető kivitelben.',
    specs: [
      ['5,9 m', 'hossz'],
      ['2,2 m', 'szélesség'],
      ['20 láb', 'modell'],
    ],
  },
  natura: {
    kicker: 'TERMÉSZETKÖZELI OTTHON',
    title: 'MOBLUX Natura 35',
    copy: 'Meleg fa hatású külső, fedett terasz és egész évben használható, otthonos tér.',
    specs: [
      ['35', 'modell'],
      ['fedett', 'terasz'],
      ['4 évszak', 'kivitel'],
    ],
  },
  lumina: {
    kicker: 'FÉNY. TÉR. SZABADSÁG.',
    title: 'MOBLUX Lumina 35',
    copy: 'Világos, modern, négy évszakos konténerház panorámás üvegfelületekkel, két szobával, komplett konyhával és fürdőszobával.',
    specs: [
      ['34,6 m²', 'hasznos alapterület'],
      ['2', 'szoba'],
      ['8 cm EPS', 'opcionálisan 10 cm PUR'],
    ],
  },
  grand: {
    kicker: 'KÉTSZINTES OTTHON',
    title: 'MOBLUX Grand 70',
    copy: 'Különleges térélmény két terasszal, nagy dupla üvegezésű nyílászárókkal.',
    specs: [
      ['kb. 70 m²', 'hasznos tér'],
      ['2', 'szint'],
      ['2', 'terasz'],
    ],
  },
};

export interface ModelCard {
  id: string;
  /** MODEL_DETAILS kulcs a gyorsnézethez. */
  detail: keyof typeof MODEL_DETAILS;
  badge: string;
  /** Aranyszínű kiemelt címke (.gold-tag). */
  goldTag?: boolean;
  size: string;
  meta: string;
  name: string;
  image: string;
  imageAlt: string;
  /** A modell önálló oldala. */
  page: string;
  link: { label: string; to: string };
  /** Két oszlop széles kártya (.wide). */
  wide?: boolean;
  categories: Exclude<ModelFilter, 'all'>[];
}

export const MODELS: ModelCard[] = [
  {
    id: 'family-40',
    page: '/modellek/family-40',
    detail: 'family',
    badge: 'LEGTÁGASABB KINYITHATÓ',
    size: "40'",
    meta: 'Akár 3 hálószoba • 11 800 × 6 240 mm',
    name: 'MOBLUX Family 40',
    image: IMAGES.family40Plan,
    imageAlt: '40 lábas ház alaprajza',
    link: { label: 'Modelloldal →', to: '/modellek/family-40' },
    wide: true,
    categories: ['home', 'invest'],
  },
  {
    id: 'expand-30',
    page: '/modellek/expand-30',
    detail: 'expand30home',
    badge: 'ÚJ MODELL',
    goldTag: true,
    size: "30'",
    meta: '56,7 m² • 3 hálószoba • két oldalra nyitható',
    name: 'MOBLUX Expand 30',
    image: IMAGES.expand30Hero,
    imageAlt: 'MOBLUX Expand 30 két oldalra nyitható konténerház',
    link: { label: 'Modellrészletek →', to: '/modellek/expand-30' },
    categories: ['home', 'invest'],
  },
  {
    id: 'apple-40',
    page: '/modellek/apple-cabin-40',
    detail: 'apple',
    badge: 'ÚJDONSÁG',
    goldTag: true,
    size: "40'",
    meta: '11,8 × 2,2 m • 26 m² hasznos alapterület',
    name: 'Apple Cabin 40',
    image: IMAGES.apple40Hero,
    imageAlt: '40 lábas Apple Cabin természetes környezetben',
    link: { label: 'Felfedezem →', to: '/modellek/apple-cabin-40' },
    categories: ['premium', 'invest'],
  },
  {
    id: 'apple-20',
    page: '/modellek/apple-cabin-20',
    detail: 'apple20',
    badge: 'KOMPAKT ÚJDONSÁG',
    size: "20'",
    meta: '5,9 × 2,2 m • panorámás homlokzat',
    name: 'Apple Cabin 20',
    image: IMAGES.apple20Lakeside,
    imageAlt: '20 lábas Apple Cabin tóparti környezetben',
    link: { label: 'Képek →', to: '/modellek/apple-cabin-20' },
    categories: ['premium', 'home', 'invest'],
  },
  {
    id: 'grand-70',
    page: '/modellek/grand-70',
    detail: 'grand',
    badge: 'KÉTSZINTES',
    goldTag: true,
    size: '70 m²',
    meta: 'Két terasz • nagy üvegfelületek',
    name: 'MOBLUX Grand 70',
    image: IMAGES.twoStory02,
    imageAlt: 'MOBLUX Grand 70',
    link: { label: 'Modelloldal →', to: '/modellek/grand-70' },
    categories: ['premium', 'home', 'invest'],
  },
  {
    id: 'natura-35',
    page: '/modellek/natura-35',
    detail: 'natura',
    badge: 'TERMÉSZETKÖZELI OTTHON',
    size: '35',
    meta: 'Fedett terasz • fa hatású burkolat • négy évszak',
    name: 'MOBLUX Natura 35',
    image: IMAGES.natura35Garden,
    imageAlt: 'MOBLUX Natura 35 parkosított kertben',
    link: { label: 'Felfedezem →', to: '/modellek/natura-35' },
    wide: true,
    categories: ['home', 'invest'],
  },
  {
    id: 'lumina-35',
    page: '/modellek/lumina-35',
    detail: 'lumina',
    badge: 'BEMUTATÓMODELL',
    goldTag: true,
    size: '35',
    meta: '34,6 m² • 2 szoba • panorámás üvegfelületek',
    name: 'MOBLUX Lumina 35',
    image: IMAGES.lumina35Front,
    imageAlt: 'MOBLUX Lumina 35 fehér, panorámás négy évszakos konténerház',
    link: { label: 'Felfedezem →', to: '/modellek/lumina-35' },
    wide: true,
    categories: ['home', 'invest'],
  },
];

export const MODELS_NOTE =
  'A megjelenített környezeti látványképek illusztrációk; a Lumina galériájában valódi modellfotók láthatók. A végleges kivitel az egyedi konfiguráció szerint készül.';
