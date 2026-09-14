import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { ZoomImage } from '../components/Zoom';
import { IMAGES } from '../lib/assets';

const MINI = [
  ['5,9 m', 'külső hossz'],
  ['2,2 m', 'külső szélesség'],
  ["20'", 'kompakt modell'],
];

export default function AppleCabin20() {
  return (
    <section
      id="apple20"
      className="pad grid items-center gap-[55px] bg-[#e5dfd3] max-lg:grid-cols-1 lg:grid-cols-[0.72fr_1.28fr]"
    >
      <Reveal>
        <p className="eyebrow eyebrow-dark">APPLE CABIN 20</p>
        <h2 className="text-[clamp(42px,5vw,70px)]">
          Kis alapterület.
          <br />
          Nagy térélmény.
        </h2>
        <p className="mt-5">
          A 20 lábas változat az ikonikus lekerekített formát és a panorámás homlokzatot kompakt
          méretben adja. A beküldött valódi belső fotókon a konyha, a fürdő és a tárolók is
          megtekinthetők.
        </p>
        <dl className="my-[35px] grid grid-cols-3 gap-3">
          {MINI.map(([value, label]) => (
            <div key={label} className="border-t border-[#81755c] pt-2.5">
              <dt className="font-bold">{value}</dt>
              <dd className="m-0 text-[9px] uppercase">{label}</dd>
            </div>
          ))}
        </dl>
        <Link to="/ajanlatkeres" className="btn btn-ink">
          Ajánlatot kérek
        </Link>
      </Reveal>

      <div className="grid auto-rows-[240px] grid-cols-2 gap-[9px] max-sm:auto-rows-[145px]">
        <ZoomImage
          src={IMAGES.apple20Lakeside}
          alt="Apple Cabin 20 tóparti környezetben"
          className="col-span-2 row-span-2"
        />
        <ZoomImage src={IMAGES.apple20Interior} alt="Apple Cabin 20 belső tér" />
        <ZoomImage src={IMAGES.apple20Bathroom} alt="Apple Cabin 20 fürdőszoba" />
        <ZoomImage src={IMAGES.apple20Kitchen} alt="Apple Cabin 20 konyha" className="col-span-2" />
      </div>
    </section>
  );
}
