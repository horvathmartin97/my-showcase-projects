import { Link } from 'react-router-dom';
import Img from '../components/Img';
import Reveal from '../components/Reveal';
import { IMAGES } from '../lib/assets';
import { HERO_FACTS } from '../data/site';

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[740px] overflow-hidden bg-[#111] text-white max-sm:min-h-[700px]">
      <Img
        src={IMAGES.apple40Hero}
        alt="MOBLUX 40 lábas Apple Cabin naplementében"
        loading="eager"
        className="absolute inset-0 animate-[heroZoom_14s_ease-out_both]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#060705df,transparent_75%),linear-gradient(0deg,#070805d0,transparent_50%)]" />

      <Reveal className="absolute bottom-[25%] left-[max(24px,calc((100vw_-_var(--max))/2))] z-2 w-[min(850px,calc(100%_-_48px))] max-sm:bottom-[31%] max-sm:left-5 max-sm:w-[calc(100%_-_40px)]">
        <p className="eyebrow">FÉNY. TÉR. SZABADSÁG.</p>
        <h1 className="text-[clamp(58px,7.8vw,116px)] max-sm:text-[52px]">
          Az otthon,
          <br />
          amit <em className="text-gold-light">Ön alakít.</em>
        </h1>
        <p className="mt-6 max-w-[700px] text-[clamp(17px,1.5vw,21px)] text-[#e4e3df]">
          Modern, négy évszakos mobilházak közvetlen gyártói háttérrel — az első ötlettől a teljes
          helyszíni telepítésig.
        </p>
        <div className="mt-[34px] flex items-center gap-7 max-sm:flex-col max-sm:items-start max-sm:gap-4">
          <Link to="/modellek" className="btn btn-gold">
            Fedezze fel a modelleket
          </Link>
          <Link to="/ajanlatkeres" className="text-xs font-bold">
            Saját házat tervezek ↗
          </Link>
        </div>
      </Reveal>

      <dl className="absolute right-[4vw] bottom-0 z-2 grid w-[min(720px,65%)] grid-cols-3 border-t border-white/30 max-sm:inset-x-5 max-sm:w-auto max-sm:grid-cols-1">
        {HERO_FACTS.map((fact) => (
          <div key={fact.title} className="border-r border-white/20 p-[22px] max-sm:border-r-0 max-sm:px-0 max-sm:py-2">
            <dt className="text-xs font-bold">{fact.title}</dt>
            <dd className="m-0 text-[10px] text-[#aaa]">{fact.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
