export const SITING_FACTS: [string, string][] = [
  ['Országosan', 'szállítás és telepítés'],
  ['Helyrajzi szám alapján', 'előzetes telekellenőrzés'],
  ['Szakmai háttérrel', 'tervezés és ügyintézés'],
];

export const SITING_STEPS = [
  {
    step: '01',
    title: 'Adatok bekérése',
    detail: 'Település, cím vagy helyrajzi szám, a választott modell és a tervezett használat.',
  },
  {
    step: '02',
    title: 'Telepíthetőségi elővizsgálat',
    detail:
      'Övezeti besorolás, beépíthetőség, épületmagasság, elhelyezési távolságok és településkép áttekintése.',
  },
  {
    step: '03',
    title: 'Szakmai javaslat',
    detail: 'Megmutatjuk, melyik méret, kialakítás és telepítési mód illeszthető az ingatlanhoz.',
  },
  {
    step: '04',
    title: 'Tervezés és ügyintézés',
    detail:
      'Igény esetén megszervezzük a szükséges tervezői dokumentációt és az önkormányzati vagy hatósági egyeztetést.',
  },
  {
    step: '05',
    title: 'Szállítás és daruzás',
    detail:
      'Megtervezzük az útvonalat, a helyszíni megközelítést, a beemelést és a biztonságos lehelyezést.',
  },
  {
    step: '06',
    title: 'Helyszíni telepítés',
    detail: 'A ház összeállítása, rögzítése és a vállalt helyszíni munkák összehangolt elvégzése.',
  },
];

export const PARTNER = {
  mark: 'ND',
  name: 'Nyisztor Daru Kft.',
  detail:
    'A MOBLUX mobilházak országos szállítását, daruzását és helyszíni mozgatását tapasztalt együttműködő partnerünkkel, a Nyisztor Daru Kft.-vel összehangolva végezzük. A jármű, az emelési feladat és a telepítési helyszín előzetes felmérése egyaránt a biztonságos kivitelezést szolgálja.',
  tags: ['Országos szállítás', 'Szakszerű daruzás', 'Helyszíni koordináció'],
  url: 'https://nyisztor-daru.hu/',
};

export const THRESHOLDS: [string, string][] = [
  ['< 35 m²', 'összes hasznos alapterület'],
  ['< 4,0 m', 'standard gerincmagasság'],
];

export const COMPLIANCE_POINTS = [
  'CE-megfelelőségi dokumentáció',
  'Európai követelmények szerint szerelt vízhálózat',
  'Európai követelmények szerint szerelt villamos hálózat',
  'Igény szerinti érintésvédelmi dokumentáció',
  'Igény szerinti tűzvédelmi dokumentáció',
  'Teljes körű engedélyeztetési koordináció',
];

export const LAWS = [
  {
    label: 'ELJÁRÁSI SZABÁLYOK',
    title: '281/2024. (IX. 30.) Korm. rendelet',
    detail:
      'Meghatározza az egyszerű bejelentés és az építési engedély alapján végezhető építési tevékenységek körét, köztük a 35 m²-es és 4,5 méteres küszöböt.',
    href: 'https://njt.hu/jogszabaly/2024-281-20-22',
    linkLabel: 'Hivatalos jogszabály ↗',
  },
  {
    label: 'ORSZÁGOS KÖVETELMÉNYEK',
    title: '280/2024. (IX. 30.) Korm. rendelet – TÉKA',
    detail:
      'Az országos településrendezési és építési követelmények alapját adja; a helyi szabályokkal együtt alkalmazandó.',
    href: 'https://njt.hu/jogszabaly/2024-280-20-22',
    linkLabel: 'Hivatalos jogszabály ↗',
  },
  {
    label: 'HELYI ELŐÍRÁSOK',
    title: 'HÉSZ és településkép',
    detail:
      'A telek övezete határozhatja meg többek között a rendeltetést, a beépítettséget, a zöldfelületet, az épületmagasságot és az elhelyezést.',
    href: 'https://www.e-epites.hu/helyi-epitesi-szabalyzat-es-telepuleskep-vedelem',
    linkLabel: 'Hivatalos tájékoztató ↗',
  },
];

export const HRSZ_CHECK_URL =
  'https://www.e-epites.hu/tervezes/uzemeltetok/telek-beepithetosege';

export const SITING_PURPOSES = [
  'Állandó otthon',
  'Nyaraló / hétvégi ház',
  'Vendégház / apartman',
  'Iroda / üzleti cél',
  'Egyéb',
];
