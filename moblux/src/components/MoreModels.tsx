import { Link } from 'react-router-dom';
import { MODELS } from '../data/models';

/** Modelloldalak alján: átlépés a többi modellre. */
export default function MoreModels({ current }: { current: string }) {
  const others = MODELS.filter((model) => model.page !== current);

  return (
    <section className="bg-ink-panel px-[4vw] py-16 text-white max-sm:px-5 max-sm:py-12">
      <div className="mx-auto w-full max-w-[var(--max)]">
        <p className="eyebrow">TOVÁBBI MOBLUX MODELLEK</p>
        <div className="grid gap-px bg-white/12 max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((model) => (
            <Link
              key={model.id}
              to={model.page}
              className="group bg-ink-panel p-5 transition-colors hover:bg-ink-soft"
            >
              <p className="text-[8px] tracking-[0.14em] text-gold">{model.badge}</p>
              <p className="mt-2 flex items-baseline justify-between gap-3">
                <span className="font-medium">{model.name}</span>
                <b className="text-[#9d9e98]">{model.size}</b>
              </p>
              <p className="mt-1 text-[11px] text-[#9d9e98] group-hover:text-gold-light">
                Megnyitás →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
