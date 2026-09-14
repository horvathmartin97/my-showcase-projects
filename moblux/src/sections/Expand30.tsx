import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { ZoomImage } from '../components/Zoom';
import { IMAGES } from '../lib/assets';

const NUMBERS = [
  ['9 000 mm', 'hossz'],
  ['6 300 mm', 'kinyitott szélesség'],
  ['2 480 mm', 'külső magasság'],
  ['kb. 56,7 m²', 'kinyitott alapterület'],
];

const SPECS = [
  {
    label: 'SZERKEZET ÉS HŐSZIGETELÉS',
    title: 'Négy évszakra kialakítható',
    detail:
      'Galvanizált acél vázszerkezet, a referenciakivitelben 75 mm-es EPS szendvicspanel falazattal. Az anyaghasználat, a külső burkolat és a szigetelés a MOBLUX műszaki csomagjai szerint tovább fejleszthető.',
  },
  {
    label: 'NYÍLÁSZÁRÓK',
    title: 'Világos, jól szellőző terek',
    detail:
      'Fekete, hőhídmegszakításos alumínium bejárati ajtók; 11 darab 930 × 930 mm-es alumínium tolóablak rovarhálóval, valamint külön 500 × 700 mm-es fürdőszobai ablak.',
  },
  {
    label: 'KONYHA ÉS FÜRDŐ',
    title: 'Komplett belső kialakítás',
    detail:
      'L alakú konyhabútor műmárvány munkalappal és dupla rozsdamentes mosogatóval. Teljes fürdőszoba WC-vel, mosdószekrénnyel, zuhanyzóval és csúszásmentes kialakítással.',
  },
  {
    label: 'ELEKTROMOS RENDSZER',
    title: 'Európai szabványú kiépítés',
    detail:
      'Komplett elektromos hálózat európai rendszer szerint, világítással, kapcsolókkal és aljzatokkal. A végleges kiépítés minden esetben a megrendelés műszaki specifikációjához igazodik.',
  },
];

const GALLERY = [
  { src: IMAGES.expand30Exterior, alt: '30 lábas kinyitható ház tetővel és fa hatású burkolattal', wide: true },
  { src: IMAGES.expand30Interior1, alt: '30 lábas kinyitható ház bézs külső változata' },
  { src: IMAGES.expand30Interior3, alt: '30 lábas kinyitható ház fa hatású külső változata' },
  { src: IMAGES.expand30Kitchen1, alt: 'MOBLUX Expand 30 konyhai kialakítása' },
  { src: IMAGES.expand30Kitchen2, alt: 'MOBLUX Expand 30 L alakú konyhája' },
  { src: IMAGES.expand30Bathroom, alt: 'MOBLUX Expand 30 komplett fürdőszobája', wide: true },
];

export default function Expand30() {
  return (
    <section id="expandable30" className="pad bg-[#ebe8e1]">
      <SectionHead
        eyebrow="30 LÁBAS, KÉT OLDALRA NYITHATÓ MODELL"
        title={
          <>
            MOBLUX Expand 30.
            <br />
            <em>Nagy tér, kompakt szállítás.</em>
          </>
        }
        lead="A két oldalszárny helyszíni kinyitásával teljes értékű, családi méretű otthon alakítható ki. A bemutatott elrendezés három hálószobát, nappalit, L alakú konyhát és teljes fürdőszobát kínál."
      />

      <Reveal className="grid min-h-[650px] bg-ink-panel text-white max-lg:grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
        <ZoomImage
          src={IMAGES.expand30Hero}
          alt="MOBLUX Expand 30 antracit külső kivitelben"
          tag="Nagyítás ↗"
          className="max-lg:min-h-[440px] max-sm:min-h-[310px]"
        />
        <div className="self-center px-[52px] py-[60px] max-sm:px-6 max-sm:py-[42px]">
          <p className="eyebrow">MOBLUX KONFIGURÁCIÓ</p>
          <h3 className="mb-[18px] text-[clamp(30px,3.5vw,50px)] leading-[1.08]">
            Akár három külön hálószobával
          </h3>
          <p className="text-[#b9bbb5]">
            A 30 lábas központi egység szállításkor mindössze 2,2 méter széles, kinyitva pedig 6,3
            méteres épületszélességet és közel 57 m²-es alapterületet biztosít. Lakóháznak,
            nyaralónak, vendégháznak vagy befektetési célra is személyre szabható.
          </p>
          <div className="my-[30px] grid grid-cols-2 border-t border-[#444] max-sm:grid-cols-1">
            {NUMBERS.map(([value, label]) => (
              <div key={label} className="border-b border-[#333] pt-[15px] pr-3 pb-2">
                <b className="block text-gold-light">{value}</b>
                <span className="block text-[9px] uppercase text-[#888]">{label}</span>
              </div>
            ))}
          </div>
          <Link to="/ajanlatkeres" className="btn btn-gold">
            Személyre szabott ajánlatot kérek →
          </Link>
        </div>
      </Reveal>

      <Reveal className="mt-px grid min-h-[560px] bg-white max-lg:grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
        <ZoomImage
          src={IMAGES.expand30Floorplan}
          alt="30 lábas kinyitható konténerház választható alaprajza"
          tag="Választható alaprajz · nagyítás ↗"
          className="bg-white max-lg:min-h-[430px] max-sm:min-h-[300px]"
          fit="contain"
        />
        <div className="self-center p-[55px] max-sm:px-6 max-sm:py-[42px]">
          <p className="eyebrow eyebrow-dark">BELSŐ ELRENDEZÉS</p>
          <h3 className="mb-[18px] text-[clamp(30px,3.5vw,50px)] leading-[1.08]">
            Az életviteléhez alakítható
          </h3>
          <ul className="list-disc pl-[18px] text-[#555]">
            <li>akár 3 hálószoba</li>
            <li>tágas nappali és étkező</li>
            <li>L alakú, felszerelhető konyha</li>
            <li>zuhanyzós, külön száraz–nedves zónás fürdőszoba</li>
            <li>első és oldalsó bejárat választható</li>
          </ul>
          <p className="note">
            A bemutatott alaprajz egy választható elrendezés. A helyiségek száma és kiosztása az
            egyedi megrendelés szerint módosítható.
          </p>
        </div>
      </Reveal>

      <Reveal className="my-px grid gap-px bg-[#cbc6bb] max-lg:grid-cols-1 lg:grid-cols-2">
        {SPECS.map((spec) => (
          <article key={spec.label} className="bg-[#f8f6f1] p-[38px]">
            <small className="text-[9px] font-extrabold tracking-[0.13em] text-[#8d7133]">
              {spec.label}
            </small>
            <h3 className="mt-[18px] mb-2.5 text-2xl">{spec.title}</h3>
            <p className="m-0 text-[13px] text-[#696a64]">{spec.detail}</p>
          </article>
        ))}
      </Reveal>

      <Reveal className="mt-px grid auto-rows-[280px] grid-cols-4 gap-[9px] max-sm:auto-rows-[220px] max-sm:grid-cols-2">
        {GALLERY.map((photo) => (
          <ZoomImage
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className={photo.wide ? 'col-span-2' : ''}
          />
        ))}
      </Reveal>

      <p className="note">
        A képek és műszaki adatok a gyártói referenciakivitelt mutatják. A MOBLUX-változat alaprajza,
        szigetelése, burkolatai, nyílászárói és felszereltsége személyre szabható.
      </p>
    </section>
  );
}
