import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { ZoomImage } from '../components/Zoom';
import { IMAGES } from '../lib/assets';
import { OFFICE_SPECS } from '../data/site';

const SERVICES = [
  'irodakonténer',
  'többszintes irodaépület',
  'telephelyi konténerpark',
  'szállás- és kiszolgálóegységek',
];

export default function OfficeSolutions() {
  return (
    <section className="pad bg-[#f2f0e9]">
      <SectionHead
        eyebrow="MOBIL IRODAI MEGOLDÁSOK"
        title={
          <>
            Egy irodától
            <br />
            <em className="text-[#8d6d27]">a teljes konténerparkig.</em>
          </>
        }
        lead="Vállalkozások, ipari telephelyek és nagyobb projektek számára 20 és 40 lábas modulokból kialakított irodakonténereket, többszintes irodaépületeket és komplett mobil konténerparkokat is értékesítünk és telepítünk."
      />

      <div className="grid min-h-[630px] bg-ink-panel text-white max-lg:grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
        <ZoomImage
          src={IMAGES.office}
          alt="Kétszintes, moduláris irodakonténer épület külső lépcsővel"
          tag="Moduláris irodaépület · nagyítás ↗"
          className="max-lg:min-h-[520px] max-sm:min-h-[370px]"
        />
        <Reveal className="flex flex-col justify-center px-[52px] py-[58px] max-sm:px-6 max-sm:py-[42px]">
          <p className="eyebrow">20 ÉS 40 LÁBAS MODULOK</p>
          <h3 className="mt-2.5 mb-5 text-[clamp(32px,3.5vw,51px)] leading-[1.08]">
            Gyorsan bővíthető üzleti infrastruktúra
          </h3>
          <p className="leading-[1.7] text-[#bfc0ba]">
            Az egységek önálló irodaként vagy egymás mellé és fölé telepítve, nagyobb irodaházként is
            kialakíthatók. A belső elrendezés, a nyílászárók, az elektromos rendszer és a megjelenés a
            projekt működéséhez igazítható.
          </p>
          <div className="my-6 flex flex-wrap gap-[7px]">
            {SERVICES.map((service) => (
              <span key={service} className="border border-[#55564f] px-[11px] py-2 text-[10px] font-bold text-gold-light">
                {service}
              </span>
            ))}
          </div>
          <Link to="/ajanlatkeres" className="btn btn-gold self-start">
            Projektajánlatot kérek →
          </Link>
        </Reveal>
      </div>

      <Reveal className="mt-px grid gap-px bg-[#c9c5bb] max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3">
        {OFFICE_SPECS.map((spec) => (
          <div key={spec.value} className="bg-white p-[25px]">
            <b className="block text-base text-[#80672f]">{spec.value}</b>
            <span className="mt-[5px] block text-[11px] text-[#73746e]">{spec.detail}</span>
          </div>
        ))}
      </Reveal>

      <p className="note">
        A bemutatott műszaki tartalom a gyártói referenciakivitel adatait mutatja; a végleges rendszer
        mérete, elrendezése és felszereltsége az adott projekt szerint készül.
      </p>
    </section>
  );
}
