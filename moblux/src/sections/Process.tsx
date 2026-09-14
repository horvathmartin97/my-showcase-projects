import { Link } from 'react-router-dom';
import SectionHead from '../components/SectionHead';
import { PROCESS } from '../data/site';

export default function Process() {
  return (
    <section id="process" className="pad bg-ink text-white">
      <SectionHead
        inverse
        eyebrow="AZ ÖTLETTŐL AZ ÁTADÁSIG"
        title="Összehangolt teljes folyamat"
        lead="Átlátható lépések és folyamatos egyeztetés."
      />

      <ol className="grid list-none p-0 max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5">
        {PROCESS.map((step) => (
          <li key={step.step} className="border-t border-[#444] border-r border-r-[#333] p-[26px]">
            <b className="text-[11px] text-gold">{step.step}</b>
            <h3 className="mt-9">{step.title}</h3>
            <p className="text-xs text-[#999]">{step.detail}</p>
          </li>
        ))}
      </ol>

      <div className="mt-7 flex items-center justify-between gap-[25px] border border-[#444] px-[25px] py-[22px] max-sm:flex-col max-sm:items-start">
        <div>
          <b className="block">Telekellenőrzéstől a helyszíni telepítésig</b>
          <span className="mt-1 block text-xs text-[#999]">
            Helyrajzi szám alapú elővizsgálat, ügyintézési támogatás és országos kivitelezés.
          </span>
        </div>
        <Link to="/telepites" className="text-[11px] font-bold whitespace-nowrap text-gold">
          Telepítés és engedélyeztetés →
        </Link>
      </div>
    </section>
  );
}
