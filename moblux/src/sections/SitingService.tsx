import SectionHead from '../components/SectionHead';
import { SITING_STEPS } from '../data/siting';

export default function SitingService() {
  return (
    <section id="how" className="pad bg-ink-panel text-white">
      <SectionHead
        inverse
        eyebrow="NEM MARAD EGYEDÜL A FOLYAMATBAN"
        title={
          <>
            Telekellenőrzéstől
            <br />
            a kész telepítésig
          </>
        }
        lead="Egy kapcsolattartással, egymásra épülő szakmai lépésekben haladunk."
      />

      <ol className="grid list-none border-t border-l border-[#41423e] p-0 max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3">
        {SITING_STEPS.map((item) => (
          <li
            key={item.step}
            className="min-h-[245px] border-r border-b border-[#333] p-[30px] max-sm:min-h-0"
          >
            <b className="text-[11px] text-gold">{item.step}</b>
            <h3 className="mt-[42px] mb-2 text-xl">{item.title}</h3>
            <p className="m-0 text-[13px] text-[#999]">{item.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
