import { useState } from 'react';
import SectionHead from '../components/SectionHead';
import { ZoomImage } from '../components/Zoom';
import { PLANS, STEEL_NOTE } from '../data/plans';

export default function Plans() {
  const [active, setActive] = useState(0);
  const plan = PLANS[active];

  return (
    <section id="plans" className="pad bg-ink text-white">
      <SectionHead
        inverse
        eyebrow="KINYITHATÓ HÁZAK"
        title="20, 30 és 40 lábas alaprajzok"
        lead="A gyártói kialakítások alapján újrarajzolt, egységes MOBLUX alaprajzok. A helyiségkiosztás és a felszereltség egyedileg alakítható."
      />

      <div className="mt-[-5px] mb-[34px] flex justify-between gap-[25px] border border-[#444] px-[22px] py-[18px] max-sm:flex-col">
        <b className="text-gold">{STEEL_NOTE.title}</b>
        <span className="text-[#aaa]">{STEEL_NOTE.detail}</span>
      </div>

      <div role="tablist" aria-label="Alaprajz méret" className="mb-7 flex overflow-auto border-b border-[#3d3e39]">
        {PLANS.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            onClick={() => setActive(index)}
            className={`cursor-pointer border-0 border-b-2 bg-none px-[22px] py-[15px] whitespace-nowrap ${
              index === active ? 'border-gold text-white' : 'border-transparent text-[#777]'
            }`}
          >
            {item.tab}
          </button>
        ))}
      </div>

      <article className="grid items-center gap-[60px] max-lg:grid-cols-1 max-lg:gap-[22px] lg:grid-cols-[0.6fr_1.4fr]">
        <div>
          <b className="text-[44px] text-gold">{plan.size}</b>
          <h3 className="text-[30px]">{plan.title}</h3>
          <p className="text-[#aaa]">{plan.detail}</p>
          <ul className="list-disc pl-[18px] text-[#aaa]">
            {plan.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
        <ZoomImage
          src={plan.image}
          alt={plan.imageAlt}
          tag="Nagyítás ⤢"
          className="aspect-16/9 bg-white p-5"
          fit="contain"
        />
      </article>
    </section>
  );
}
