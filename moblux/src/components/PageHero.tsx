import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  /** Kiemelt számadatok a hero alján. */
  facts?: [string, string][];
  /** Elsődleges gomb; alapból az ajánlatkérés. */
  cta?: { label: string; to: string };
  /** Kenyérmorzsa a szülő oldalhoz. */
  parent?: { label: string; to: string };
}

/** Aloldalak fejléce — a fix navigáció alatti sötét sáv. */
export default function PageHero({
  eyebrow,
  title,
  lead,
  facts,
  cta = { label: 'Ajánlatot kérek →', to: '/ajanlatkeres' },
  parent,
}: PageHeroProps) {
  return (
    <section className="bg-ink pt-[150px] pb-16 text-white max-sm:pt-[110px] max-sm:pb-12">
      <div className="mx-auto w-full max-w-[var(--max)] px-[max(24px,calc((100vw_-_var(--max))/2))] max-sm:px-5">
        {parent && (
          <Link to={parent.to} className="mb-6 inline-block text-[11px] font-bold text-[#9d9e98] hover:text-gold">
            ← {parent.label}
          </Link>
        )}

        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="text-[clamp(44px,6vw,88px)]">{title}</h1>
          {lead && <p className="mt-6 max-w-[720px] text-[clamp(16px,1.4vw,19px)] text-[#d0d0cb]">{lead}</p>}

          <div className="mt-9 flex items-center gap-7 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <Link to={cta.to} className="btn btn-gold">
              {cta.label}
            </Link>
            <Link to="/modellek" className="text-xs font-bold">
              Összes modell ↗
            </Link>
          </div>
        </Reveal>

        {facts && facts.length > 0 && (
          <dl className="mt-14 grid border-t border-white/25 max-sm:grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
            {facts.map(([value, label]) => (
              <div key={label} className="border-r border-white/15 py-5 pr-5 max-sm:border-r-0 max-sm:py-3">
                <dt className="text-[22px] text-gold-light">{value}</dt>
                <dd className="m-0 mt-1 text-[10px] tracking-[0.12em] text-[#9d9e98] uppercase">{label}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
