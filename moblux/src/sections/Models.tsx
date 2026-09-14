import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import Img from '../components/Img';
import ModelModal from '../components/ModelModal';
import { MODELS, MODELS_NOTE, MODEL_FILTERS, type ModelFilter } from '../data/models';

export default function Models() {
  const [filter, setFilter] = useState<ModelFilter>('all');
  const [detail, setDetail] = useState<string | null>(null);

  const visible = useMemo(
    () => (filter === 'all' ? MODELS : MODELS.filter((model) => model.categories.includes(filter))),
    [filter],
  );

  return (
    <section id="models" className="pad bg-[#ebe8e1]">
      <SectionHead
        eyebrow="MOBLUX KOLLEKCIÓ"
        title="Találja meg az Önnek való teret"
        lead="A praktikus belépőmodelltől az exkluzív panorámás kabinig. Böngésszen méret vagy felhasználás szerint."
      />

      <div className="mb-[22px] flex gap-1.5">
        {MODEL_FILTERS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            aria-pressed={tab.id === filter}
            onClick={() => setFilter(tab.id)}
            className={`cursor-pointer px-[17px] py-[9px] text-[11px] font-bold ${
              tab.id === filter ? 'border border-ink bg-ink text-white' : 'border border-[#c5c1b8]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid gap-3.5 max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3">
        {visible.map((model) => (
          <Reveal
            key={model.id}
            as="article"
            className={`relative flex min-h-[520px] flex-col overflow-hidden bg-white p-[23px] text-white max-sm:min-h-[470px] max-sm:col-span-1 ${
              model.wide ? 'lg:col-span-2' : ''
            }`}
          >
            <Img src={model.image} alt={model.imageAlt} className="absolute inset-0 transition-transform duration-700 hover:scale-[1.035]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,#000e,transparent_65%)]" />

            <div className="relative z-2 flex items-start justify-between">
              <span
                className={`border px-[9px] py-[5px] text-[8px] tracking-[0.14em] ${
                  model.goldTag ? 'border-gold bg-gold text-[#111]' : 'border-current'
                }`}
              >
                {model.badge}
              </span>
              <b>{model.size}</b>
            </div>

            <div className="relative z-2 mt-auto">
              <small className="opacity-[0.72]">{model.meta}</small>
              <h3 className="mt-1 mb-5 text-[30px] leading-[1.1]">{model.name}</h3>
              <div className="flex gap-[18px]">
                <button
                  type="button"
                  onClick={() => setDetail(model.detail)}
                  className="cursor-pointer border-0 border-b border-current bg-none p-0 text-[11px] font-bold text-white"
                >
                  Gyorsnézet
                </button>
                <Link to={model.link.to} className="text-[11px] font-bold">
                  {model.link.label}
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="note">{MODELS_NOTE}</p>

      <ModelModal detailKey={detail} onClose={() => setDetail(null)} />
    </section>
  );
}
