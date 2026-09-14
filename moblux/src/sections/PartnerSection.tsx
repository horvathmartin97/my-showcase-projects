import Reveal from '../components/Reveal';
import { PARTNER } from '../data/siting';

export default function PartnerSection() {
  return (
    <section className="pad grid items-center gap-[65px] bg-sand max-lg:grid-cols-[0.55fr_1.45fr] max-sm:grid-cols-1 max-sm:gap-7 lg:grid-cols-[0.36fr_1.64fr]">
      <div className="grid aspect-square place-items-center border border-[#8e826a] text-[clamp(64px,10vw,145px)] font-bold tracking-[-0.09em] text-[#8d7133] max-sm:w-[170px]">
        {PARTNER.mark}
      </div>

      <Reveal>
        <p className="eyebrow eyebrow-dark">EGYÜTTMŰKÖDŐ PARTNERÜNK</p>
        <h2 className="text-[clamp(42px,5vw,70px)]">{PARTNER.name}</h2>
        <p className="mt-5 max-w-[850px] text-[#55564f]">{PARTNER.detail}</p>
        <div className="mt-[25px] flex flex-wrap gap-[7px]">
          {PARTNER.tags.map((tag) => (
            <span key={tag} className="border border-[#8e826a] px-3 py-2 text-[10px] font-bold">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={PARTNER.url}
          target="_blank"
          rel="noreferrer"
          className="mt-[22px] inline-flex border-b border-[#111] pb-[5px] text-[11px] font-extrabold tracking-[0.08em] text-[#111] uppercase"
        >
          {PARTNER.name} weboldala ↗
        </a>
      </Reveal>
    </section>
  );
}
