import Reveal from '../components/Reveal';
import { SITING_FACTS } from '../data/siting';

export default function SitingHero() {
  return (
    <section className="relative flex min-h-[790px] items-center overflow-hidden bg-[radial-gradient(circle_at_82%_35%,#786742_0,transparent_24%),linear-gradient(125deg,#0a0b09_0,#191a16_58%,#29271f_100%)] text-white max-sm:min-h-[760px]">
      <span
        aria-hidden
        className="absolute top-[46%] right-[-2vw] -translate-y-1/2 text-[min(37vw,520px)] leading-none font-bold text-transparent [-webkit-text-stroke:1px_#ffffff13]"
      >
        35
      </span>

      <Reveal className="relative z-2 mt-[92px] ml-[max(24px,calc((100vw_-_var(--max))/2))] w-[min(880px,calc(100%_-_48px))] max-sm:ml-5 max-sm:w-[calc(100%_-_40px)]">
        <p className="eyebrow">MOBLUX TELEPÍTÉSI SZOLGÁLTATÁS</p>
        <h1 className="text-[clamp(52px,7.2vw,104px)] max-sm:text-[49px]">
          A megfelelő ház.
          <br />
          A megfelelő telekre.
          <br />
          <em className="text-gold-light">Biztonságosan.</em>
        </h1>
        <p className="mt-6 max-w-[720px] text-[19px] text-[#d0d0cb] max-sm:text-base">
          A helyrajzi szám alapú előzetes vizsgálattól az országos szállításon és daruzáson át a
          szakszerű helyszíni telepítésig összehangoljuk a teljes folyamatot.
        </p>
        <div className="mt-[34px] flex items-center gap-7 max-sm:flex-col max-sm:items-start max-sm:gap-4">
          <a className="btn btn-gold" href="#siting-check">
            Telepíthetőségi vizsgálatot kérek
          </a>
          <a href="#how" className="text-xs font-bold">
            Így működik ↓
          </a>
        </div>
      </Reveal>

      <dl className="absolute right-[4vw] bottom-0 z-2 grid w-[min(760px,68%)] grid-cols-3 border-t border-white/30 max-sm:inset-x-5 max-sm:w-auto max-sm:grid-cols-1">
        {SITING_FACTS.map(([value, label]) => (
          <div
            key={label}
            className="border-r border-white/20 p-[23px] max-sm:border-r-0 max-sm:px-0 max-sm:py-[7px]"
          >
            <dt className="text-xs font-bold">{value}</dt>
            <dd className="m-0 text-[10px] text-[#999]">{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
