import { Link } from 'react-router-dom';
import MoreModels from '../components/MoreModels';
import Img from '../components/Img';
import Reveal from '../components/Reveal';
import { ZoomImage } from '../components/Zoom';
import { IMAGES } from '../lib/assets';

const NUMBERS = [
  ['≈70 m²', 'hasznos élettér'],
  ['2', 'teljes szint'],
  ['2', 'külön terasz'],
  ['4 évszak', 'egész éves használat'],
];

const GALLERY = [
  { src: IMAGES.grand70Built, alt: 'Elkészült MOBLUX Grand 70 kétszintes kivitel', span: 'row-span-2' },
  {
    src: IMAGES.grand70Realistic,
    alt: 'MOBLUX Grand 70 választható, hosszú fedett oldalteraszos kialakítása',
    span: 'col-span-2',
  },
  { src: IMAGES.twoStory01, alt: 'Grand 70 homlokzat', span: 'row-span-2' },
  { src: IMAGES.twoStory03, alt: 'Grand 70 oldalnézet' },
  { src: IMAGES.twoStory05, alt: 'Grand 70 teraszok' },
  { src: IMAGES.twoStory06, alt: 'Grand 70 belső lépcső' },
  { src: IMAGES.twoStory08, alt: 'Grand 70 emeleti terasz' },
  { src: IMAGES.twoStory04, alt: 'Grand 70 hátsó homlokzat', span: 'col-span-2' },
];

export default function Grand70Page() {
  return (
    <>
      <section className="relative h-[100svh] min-h-[730px] overflow-hidden text-white">
        <Img src={IMAGES.twoStory02} alt="MOBLUX Grand 70 kétszintes otthon" loading="eager" className="absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#060705df,transparent_75%),linear-gradient(0deg,#070805d0,transparent_50%)]" />

        <Reveal className="absolute bottom-[25%] left-[max(24px,calc((100vw_-_var(--max))/2))] z-2 w-[min(850px,calc(100%_-_48px))] max-sm:bottom-[54px] max-sm:left-5 max-sm:w-[calc(100%_-_40px)]">
          <p className="eyebrow">MOBLUX GRAND 70</p>
          <h1 className="text-[clamp(54px,7vw,105px)] max-sm:text-[50px]">
            Két szint.
            <br />
            Két terasz.
            <br />
            <em className="text-gold-light">Új térélmény.</em>
          </h1>
          <p className="mt-6 max-w-[700px] text-[clamp(17px,1.5vw,21px)] text-[#e4e3df]">
            Közel 70 m²-nyi világos, karakteres élettér nagy üvegfelületekkel és személyre szabható
            belső kialakítással.
          </p>
          <div className="mt-[34px] flex items-center gap-7 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <Link to="/ajanlatkeres" className="btn btn-gold">
              Személyre szabott ajánlat
            </Link>
            <a href="#model-gallery" className="text-xs font-bold">
              Galéria megtekintése ↓
            </a>
          </div>
        </Reveal>
      </section>

      <Reveal as="section" id="details" className="pad bg-white">
        <p className="eyebrow eyebrow-dark">EGY HÁZ, AMELY KIEMELKEDIK</p>
        <div className="grid items-end gap-[70px] max-lg:grid-cols-1 max-lg:gap-[22px] lg:grid-cols-[1.35fr_0.65fr]">
          <h2 className="text-[clamp(42px,5vw,72px)]">
            Teljes értékű élettér
            <br />
            <em>két szinten.</em>
          </h2>
          <div className="text-[17px] text-muted">
            <p>
              A MOBLUX Grand 70 azoknak készült, akik kis telepítési helyigény mellett szeretnének
              tágas, látványos otthont, vendégházat vagy befektetési célú szálláshelyet.
            </p>
            <p>
              A szendvicspanel külső burkolat, a nagy dupla üvegezésű nyílászárók és a két terasz
              kortárs, könnyen felismerhető karaktert adnak.
            </p>
          </div>
        </div>
      </Reveal>

      <section className="pad bg-ink-panel text-white">
        <Reveal
          as="header"
          className="mb-[50px] grid items-end gap-[70px] max-lg:grid-cols-1 max-lg:gap-[22px] lg:grid-cols-[1.35fr_0.65fr]"
        >
          <div>
            <p className="eyebrow">FŐ JELLEMZŐK</p>
            <h2>
              Tágasabb élet,
              <br />
              kompakt alapterületen
            </h2>
          </div>
          <p className="text-[17px] text-[#bbb]">
            A belső elrendezés, a burkolatok és a felszereltség a projekt céljához igazítható.
          </p>
        </Reveal>

        <dl className="grid border-t border-[#41423e] max-sm:grid-cols-2 sm:grid-cols-4">
          {NUMBERS.map(([value, label]) => (
            <div key={label} className="border-r border-[#41423e] p-8 max-sm:p-[22px]">
              <dt className="text-[30px] text-gold-light">{value}</dt>
              <dd className="m-0 text-[10px] tracking-[0.12em] text-[#999] uppercase">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="model-gallery" className="pad bg-white">
        <Reveal
          as="header"
          className="mb-[50px] grid items-end gap-[70px] max-lg:grid-cols-1 max-lg:gap-[22px] lg:grid-cols-[1.35fr_0.65fr]"
        >
          <div>
            <p className="eyebrow eyebrow-dark">MODELLFOTÓK ÉS VÁLASZTHATÓ KIALAKÍTÁSOK</p>
            <h2>A Grand 70 többféle karakterben</h2>
          </div>
          <p className="text-[17px] text-muted">Kattintson a képekre a nagyításhoz.</p>
        </Reveal>

        <div className="grid auto-rows-[260px] grid-cols-4 gap-[9px] max-sm:auto-rows-[185px] max-sm:grid-cols-2">
          {GALLERY.map((photo) => (
            <ZoomImage key={photo.src} src={photo.src} alt={photo.alt} className={photo.span ?? ''} />
          ))}
        </div>

        <p className="note">
          A hosszú fedett oldalteraszos környezetkép illusztráció; a végleges kialakítás és
          felszereltség minden projektben személyre szabható.
        </p>
      </section>

      <section className="bg-[#cdbf9f] px-[5vw] py-[115px] text-center max-sm:py-20">
        <p className="eyebrow eyebrow-dark">MOBLUX GRAND 70</p>
        <h2 className="mb-5">Alakítsuk az Ön elképzelésére.</h2>
        <p className="mx-auto mb-[30px] max-w-[640px]">
          Mondja el, milyen célra használná, és összeállítjuk az egyedi műszaki tartalmat.
        </p>
        <Link to="/ajanlatkeres" className="btn btn-gold">
          Ajánlatkérés indítása →
        </Link>
      </section>

      <MoreModels current="/modellek/grand-70" />
    </>
  );
}
