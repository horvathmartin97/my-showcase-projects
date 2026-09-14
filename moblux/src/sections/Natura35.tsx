import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { ZoomImage } from '../components/Zoom';
import { IMAGES } from '../lib/assets';

const FACTS = [
  ['34,6 m²', 'hasznos alapterület'],
  ['12,5 m²', 'fedett WPC terasz'],
  ['2 szoba', 'négy évszakos kivitel'],
];

export default function Natura35() {
  return (
    <section id="natura" className="pad bg-white">
      <div className="grid min-h-[780px] bg-[#121310] text-white max-xl:min-h-0 max-xl:grid-cols-1 xl:grid-cols-[minmax(0,1.42fr)_minmax(360px,0.58fr)]">
        <ZoomImage
          src={IMAGES.natura35Garden}
          alt="MOBLUX Natura 35 parkosított kertben"
          tag="Főnézet · nagyítás ↗"
          className="max-xl:h-[620px] max-sm:h-[420px]"
        />

        <div className="grid grid-rows-[auto_minmax(250px,1fr)] max-xl:grid-cols-2 max-xl:grid-rows-none max-md:grid-cols-1">
          <Reveal className="px-12 pt-[52px] pb-[46px] max-sm:px-6 max-sm:py-10">
            <p className="eyebrow">MOBLUX NATURA 35</p>
            <h2 className="text-[clamp(39px,4vw,64px)] max-sm:text-[42px]">
              Házformába öntött szabadság.
              <br />
              <em className="text-gold-light">Valódi otthonérzés.</em>
            </h2>
            <p className="my-6 text-base leading-[1.7] text-[#b9bbb5]">
              A klasszikus házforma, a természetes fa hatású burkolat és a fedett terasz olyan
              barátságos, négy évszakos otthont alkot, ahová minden alkalommal jó megérkezni.
            </p>
            <dl className="mt-7 mb-[30px] grid grid-cols-3 border-t border-[#454640] max-sm:grid-cols-1">
              {FACTS.map(([value, label]) => (
                <div key={label} className="pt-4 pr-3 max-sm:border-b max-sm:border-[#30312d] max-sm:py-3 max-sm:pr-0">
                  <dt className="text-[17px] text-gold-light">{value}</dt>
                  <dd className="m-0 mt-[3px] text-[10px] leading-[1.4] text-[#91938d]">{label}</dd>
                </div>
              ))}
            </dl>
            <Link to="/ajanlatkeres" className="btn btn-gold">
              Ajánlatot kérek →
            </Link>
          </Reveal>

          <ZoomImage
            src={IMAGES.natura35Terrace}
            alt="MOBLUX Natura 35 fedett terasza"
            tag="Fedett terasz · részlet ↗"
            className="max-xl:min-h-[480px] max-sm:min-h-[320px]"
          />
        </div>
      </div>
    </section>
  );
}
