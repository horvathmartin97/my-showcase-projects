import { Link } from 'react-router-dom';
import Img from '../components/Img';
import Reveal from '../components/Reveal';
import { IMAGES } from '../lib/assets';

const MINI = [
  ['11,8 m', 'külső hossz'],
  ['2,2 m', 'külső szélesség'],
  ['26 m²', 'hasznos alapterület'],
];

export default function AppleCabin40() {
  return (
    <section id="apple" className="grid min-h-[760px] bg-clay max-lg:grid-cols-1 lg:grid-cols-[1.35fr_0.65fr]">
      <div className="relative min-h-[620px] max-sm:min-h-[500px]">
        <Img
          src={IMAGES.apple40Hero}
          alt="40 lábas Apple Cabin parkosított környezetben"
          className="absolute inset-0"
        />
        <span className="absolute bottom-6 left-6 bg-[#111] px-[11px] py-[7px] text-[9px] tracking-[0.15em] text-white">
          ÚJ MODELL • APPLE CABIN 40
        </span>
      </div>

      <Reveal className="self-center px-[7vw] py-20 max-sm:px-5 max-sm:py-[65px]">
        <p className="eyebrow">PRÉMIUM ÉLMÉNY</p>
        <h2 className="text-[clamp(45px,5vw,70px)]">
          Formabontó kívül.
          <br />
          Otthonos belül.
        </h2>
        <p className="mt-5">
          A 40 lábas Apple Cabin lekerekített építészeti formája, faburkolata és nagy panorámafelületei
          már az első pillanatban megkülönböztetik. Komplett konyhával és fürdőszobával, négy évszakos
          kivitelben készül.
        </p>
        <dl className="my-[35px] grid grid-cols-3 gap-3">
          {MINI.map(([value, label]) => (
            <div key={label} className="border-t border-[#81755c] pt-2.5">
              <dt className="font-bold">{value}</dt>
              <dd className="m-0 text-[9px] uppercase">{label}</dd>
            </div>
          ))}
        </dl>
        <Link to="/modellek/apple-cabin-40#gallery" className="btn btn-ink">
          A teljes házat megnézem
        </Link>
      </Reveal>
    </section>
  );
}
