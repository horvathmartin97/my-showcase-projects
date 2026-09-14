import { IMAGES } from '../lib/assets';

export interface MaterialGroup {
  id: string;
  title: string;
  detail: string;
  image: string;
  imageAlt: string;
  /** A /public/katalogus mappába másolt minta-PDF-ek. */
  pdfs: { label: string; href: string }[];
}

export const MATERIALS: MaterialGroup[] = [
  {
    id: 'belso-ajtok',
    title: 'Belső ajtók',
    detail: 'Tizenhárom ajtókivitel fehér, szürke, antracit és fa hatású felülettel.',
    image: IMAGES.materialDoors,
    imageAlt: 'Belső ajtók mintaválasztéka',
    pdfs: [{ label: 'Ajtóminták', href: '/katalogus/belso-ajtok.pdf' }],
  },
  {
    id: 'kulso-falburkolatok',
    title: 'Külső falburkolatok',
    detail: 'Metal carved board panelek tégla-, kő-, vakolat- és fa hatású mintákkal.',
    image: IMAGES.materialFacade,
    imageAlt: 'Külső falburkolatok minataválasztéka',
    pdfs: [{ label: 'Falburkolatok', href: '/katalogus/kulso-falburkolatok.pdf' }],
  },
  {
    id: 'alaparas-padlok',
    title: 'Alapáras padlók',
    detail: 'Nyolc alapkivitelű dekor a világos fenyőtől a sötét tónusokig.',
    image: IMAGES.materialFloorBase,
    imageAlt: 'Alapáras padlóburkolatok minataválasztéka',
    pdfs: [{ label: 'Alapáras minták', href: '/katalogus/alaparas-padlo.pdf' }],
  },
  {
    id: 'belso-padlomintak',
    title: 'Belső padlóminták',
    detail: 'Kő- és fa hatású belső felületek, két minta-ívvel.',
    image: IMAGES.materialFloorInterior,
    imageAlt: 'Belső padlóminták',
    pdfs: [
      { label: '1. minta-ív', href: '/katalogus/belso-padlo.pdf' },
      { label: '2. minta-ív', href: '/katalogus/padlo-mintak-2.pdf' },
    ],
  },
  {
    id: 'laminalt-padlok',
    title: 'Laminált padlók',
    detail: 'D001–D008 dekorok enteriőrfotókkal, szürke és meleg tölgy tónusokban.',
    image: IMAGES.materialFloorLaminate,
    imageAlt: 'Laminált padlók minataválasztéka',
    pdfs: [{ label: 'Laminált minták', href: '/katalogus/laminalt-padlo.pdf' }],
  },
  {
    id: 'premium-padlok',
    title: 'Prémium padlók',
    detail: 'PET és prémium dekorsorozat kő-, textil- és nemes fa mintázatokkal.',
    image: IMAGES.materialFloorPremium,
    imageAlt: 'Prémium padlók minataválasztéka',
    pdfs: [{ label: 'Prémium minták', href: '/katalogus/premium-padlo.pdf' }],
  },
];
