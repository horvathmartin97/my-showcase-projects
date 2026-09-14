/**
 * Az eredeti oldal mappaszerkezetét tükrözi: a meglévő `assets/` könyvtár
 * változtatás nélkül bemásolható a `public/` alá.
 * Amíg egy fájl hiányzik, a <ZoomImage>/<Img> jelölt helykitöltőt mutat.
 */
const A = '/assets';

export const IMAGES = {
  logo: `${A}/brand/moblux-logo-white.svg`,

  // Apple Cabin 40
  apple40Hero: `${A}/photos/apple-40-hero-sunset.png`,
  apple40Lakeside: `${A}/photos/apple-40-lakeside-morning.png`,
  apple40Forest: `${A}/photos/apple-40-forest-retreat.png`,
  apple40Kitchen: `${A}/photos/apple-40-kitchen.jpg`,
  apple40Bathroom: `${A}/photos/apple-40-bathroom.jpg`,
  apple40BathroomShower: `${A}/photos/apple-40-bathroom-shower.jpg`,
  apple40InteriorHall: `${A}/photos/apple-40-interior-hall.jpg`,
  apple40Storage: `${A}/photos/apple-40-storage.jpg`,

  // Apple Cabin 20
  apple20Lakeside: `${A}/photos/apple-20-lakeside.webp`,
  apple20Interior: `${A}/photos/apple-20-6468.webp`,
  apple20Bathroom: `${A}/photos/apple-20-6471.webp`,
  apple20Kitchen: `${A}/photos/apple-20-6482.webp`,

  // Natura 35
  natura35Garden: `${A}/photos/natura-35-garden.webp`,
  natura35Terrace: `${A}/photos/natura-35-terrace.webp`,

  // Lumina 35
  lumina35Front: `${A}/photos/lumina-35/lumina-35-exterior-front.jpg`,
  lumina35Panorama: `${A}/photos/lumina-35/lumina-35-panorama.jpg`,
  lumina35Kitchen: `${A}/photos/lumina-35/lumina-35-kitchen.jpg`,
  lumina35Bedroom: `${A}/photos/lumina-35/lumina-35-bedroom.jpg`,
  lumina35Bathroom: `${A}/photos/lumina-35/lumina-35-bathroom.jpg`,
  lumina35Terrace: `${A}/photos/lumina-35/lumina-35-terrace.jpg`,

  // Expand 30
  expand30Hero: `${A}/photos/expandable-30/expandable-30-hero.webp`,
  expand30Floorplan: `${A}/photos/expandable-30/expandable-30-floorplan.jpg`,
  expand30Exterior: `${A}/photos/expandable-30/expandable-30-exterior.jpg`,
  expand30Interior1: `${A}/photos/expandable-30/expandable-30-interior-1.jpg`,
  expand30Interior3: `${A}/photos/expandable-30/expandable-30-interior-3.jpg`,
  expand30Kitchen1: `${A}/photos/expandable-30/expandable-30-kitchen-1.jpeg`,
  expand30Kitchen2: `${A}/photos/expandable-30/expandable-30-kitchen-2.jpeg`,
  expand30Bathroom: `${A}/photos/expandable-30/expandable-30-bathroom.jpeg`,

  // Grand 70 / kétszintes
  grand70Built: `${A}/photos/grand-70/grand-70-built-option.jpg`,
  grand70Realistic: `${A}/photos/grand-70/grand-70-realistic-option.png`,
  twoStory01: `${A}/photos/two-story/two-story-01.webp`,
  twoStory02: `${A}/photos/two-story/two-story-02.webp`,
  twoStory03: `${A}/photos/two-story/two-story-03.webp`,
  twoStory04: `${A}/photos/two-story/two-story-04.webp`,
  twoStory05: `${A}/photos/two-story/two-story-05.webp`,
  twoStory06: `${A}/photos/two-story/two-story-06.webp`,
  twoStory08: `${A}/photos/two-story/two-story-08.webp`,

  // Egyéb
  office: `${A}/photos/office/modular-office-building.jpg`,
  production: `${A}/photos/production/moblux-production-line.jpg`,
  heatingDetail: `${A}/photos/heating/infra-floor-heating-detail.webp`,
  heatingInstall: `${A}/photos/heating/infra-floor-heating-installation.webp`,

  // Anyagminták (a PDF katalógus 8. oldalának kategóriái)
  materialDoors: `${A}/materials/belso-ajtok.jpg`,
  materialFacade: `${A}/materials/kulso-fal.jpg`,
  materialFloorBase: `${A}/materials/alaparas-padlo.jpg`,
  materialFloorInterior: `${A}/materials/belso-padlo.jpg`,
  materialFloorLaminate: `${A}/materials/laminalt-padlo.jpg`,
  materialFloorPremium: `${A}/materials/premium-padlo.jpg`,

  // Alaprajzok
  family40Plan: `${A}/plans/40ft-family-plan.png`,
  expandable20: `${A}/plans/expandable-20.svg`,
  expandable40: `${A}/plans/expandable-40.svg`,
  biWing30: `${A}/plans/huaying-30ft-bi-wing-floorplan.png`,
  singleLevel70: `${A}/plans/moblux-70-single-level-plan.jpg`,
  /** Megvan a fájl, de az eredeti oldal még nem hivatkozik rá. */
  multifunction40: `${A}/plans/40ft-multifunction-plan.png`,
} as const;

export const CATALOG_PDF = '/MOBLUX_mobilhazak_es_valaszthato_opciok.pdf';
