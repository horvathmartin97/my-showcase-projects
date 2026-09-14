import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { ZoomImage } from '../components/Zoom';
import { IMAGES } from '../lib/assets';

const SPECS = [
  ['34,6 m²', 'hasznos alapterület'],
  ['2 szoba', 'praktikus elrendezés'],
  ['8 cm EPS', 'opcionálisan 10 cm PUR'],
  ['4 évszak', 'egész éves használatra'],
];

const PHOTOS = [
  { src: IMAGES.lumina35Panorama, alt: 'MOBLUX Lumina 35 panorámás nappali' },
  { src: IMAGES.lumina35Kitchen, alt: 'MOBLUX Lumina 35 L alakú konyha kő munkalappal' },
  { src: IMAGES.lumina35Bedroom, alt: 'MOBLUX Lumina 35 hálószoba' },
  { src: IMAGES.lumina35Bathroom, alt: 'MOBLUX Lumina 35 komplett fürdőszoba' },
  { src: IMAGES.lumina35Terrace, alt: 'MOBLUX Lumina 35 WPC terasz' },
];

const FEATURES_LEFT = [
  'alumínium, dupla üvegezésű panoráma nyílászárók',
  'L alakú konyhabútor kő munkalappal',
  'komplett fürdőszoba zuhanyzóval',
  'WPC burkolatú terasz',
];

const FEATURES_RIGHT = [
  '3,5 kW hűtő-fűtő klíma',
  'elektromos melegvíz-bojler',
  'választható színek, burkolatok és felszereltség',
  'országos szállítás és teljes körű telepítés',
];

export default function Lumina35() {
  return (
    <section id="lumina" className="pad bg-paper">
      <SectionHead
        eyebrow="MOBLUX LUMINA 35"
        title={
          <>
            Fény. Tér.
            <br />
            <em className="text-[#9b7b36]">Szabadság.</em>
          </>
        }
      >
        <div className="max-w-[560px]">
          <p className="mb-6 text-base leading-[1.7] text-muted">
            Világos, modern, négy évszakos konténerház azoknak, akik kis alapterületen sem mondanának
            le az otthon kényelméről. A nagy üvegfelületek, a tágas nappali és a közvetlen
            teraszkapcsolat különösen nyitott térérzetet adnak.
          </p>
          <Link to="/ajanlatkeres" className="btn btn-ink">
            Személyre szabott ajánlatot kérek
          </Link>
        </div>
      </SectionHead>

      <Reveal className="mb-3 grid border border-[#cbc7bd] bg-white max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4">
        {SPECS.map(([value, label]) => (
          <div key={label} className="border-r border-[#ddd9cf] p-6 last:border-r-0 max-sm:border-r-0 max-sm:border-b">
            <b className="block text-[22px] text-[#8d6d27]">{value}</b>
            <span className="mt-1 block text-[11px] text-[#74756f]">{label}</span>
          </div>
        ))}
      </Reveal>

      <div className="grid grid-rows-[repeat(2,245px)] gap-2.5 max-md:grid-cols-2 max-md:grid-rows-[400px_220px_220px] max-sm:grid-cols-1 max-sm:grid-rows-[340px_repeat(4,210px)] md:grid-cols-[1.45fr_repeat(2,1fr)]">
        <ZoomImage
          src={IMAGES.lumina35Front}
          alt="MOBLUX Lumina 35 külső főnézet"
          tag="Külső főnézet · nagyítás ↗"
          className="md:row-span-2 max-md:col-span-2 max-sm:col-span-1"
        />
        {PHOTOS.map((photo) => (
          <ZoomImage key={photo.src} src={photo.src} alt={photo.alt} />
        ))}
      </div>

      <Reveal className="mt-3 grid gap-px bg-[#cfcbc2] max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-[1fr_1fr_0.9fr]">
        <div className="bg-white p-[30px]">
          <p className="eyebrow eyebrow-dark">A BEMUTATOTT KIVITEL FŐ ELEMEI</p>
          <ul className="m-0 list-disc pl-[18px]">
            {FEATURES_LEFT.map((item) => (
              <li key={item} className="my-2 text-[13px] text-[#55564f]">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-[30px]">
          <ul className="m-0 list-disc pl-[18px]">
            {FEATURES_RIGHT.map((item) => (
              <li key={item} className="my-2 text-[13px] text-[#55564f]">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center bg-ink-panel p-[30px] text-white max-lg:col-span-2 max-sm:col-span-1">
          <small className="text-[9px] font-extrabold tracking-[0.16em] text-gold-light">IRÁNYÁR</small>
          <b className="my-2 text-[25px]">8 800 000 Ft + ÁFA</b>
          <span className="text-[10px] leading-[1.5] text-[#9d9e98]">
            A végleges ár a választott műszaki tartalomtól és opcióktól függ.
          </span>
        </div>
      </Reveal>
    </section>
  );
}
