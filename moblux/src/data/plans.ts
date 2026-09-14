import { IMAGES } from '../lib/assets';

export interface PlanTab {
  id: string;
  tab: string;
  size: string;
  title: string;
  detail: string;
  bullets: string[];
  image: string;
  imageAlt: string;
}

export const PLANS: PlanTab[] = [
  {
    id: 'expand20',
    tab: '20 lábas',
    size: "20'",
    title: 'Kompakt, két hálós kialakítás',
    detail: 'Hatékony elrendezés nappalival, konyhával és fürdővel.',
    bullets: [
      'Kinyitott külső méret: 5 900 × 6 300 × 2 480 mm',
      'Kinyitható szerkezet',
      '2 hálótér',
      'Egyedileg kérhető kiosztás',
    ],
    image: IMAGES.expandable20,
    imageAlt: '20 lábas kinyitható ház alaprajza',
  },
  {
    id: 'expand30',
    tab: '30 lábas',
    size: "30'",
    title: 'Bi-Wing családi kialakítás',
    detail:
      'A gyártó 30 lábas prémium elrendezése két hálószobával, nagy nappali–étkezővel, L alakú konyhával és fürdővel.',
    bullets: [
      'Kinyitott külső méret: 9 000 × 6 300 × 2 480 mm',
      'Két hálószobás gyártói alaprajz',
      'Hőhídmentes alumínium nyílászárók',
      '1,5 m-es pergola és magastető kérhető',
    ],
    image: IMAGES.biWing30,
    imageAlt: '30 lábas HuaYing Bi-Wing kinyitható ház két hálószobás gyártói alaprajza',
  },
  {
    id: 'expand40',
    tab: '40 lábas',
    size: "40'",
    title: 'Tágas, három hálós otthon',
    detail: 'Nagy közösségi térrel és három elkülönülő hálóval.',
    bullets: [
      'Kinyitott külső méret: 11 800 × 6 300 × 2 480 mm',
      '3 hálószobás elrendezés',
      'Prémium pavilon is kérhető',
    ],
    image: IMAGES.expandable40,
    imageAlt: '40 lábas kinyitható ház alaprajza',
  },
];

export const STEEL_NOTE = {
  title: 'Galvanizált acélváz',
  detail:
    'Minden MOBLUX ház tartós, korrózióálló galvanizált acélvázra épül, rozsdamentes acél kötőelemekkel.',
};
