import { Link } from 'react-router-dom';
import SectionHead from '../components/SectionHead';
import { CUSTOM_OPTIONS } from '../data/site';
import { CATALOG_PDF } from '../lib/assets';

export default function Custom() {
  return (
    <section id="custom" className="pad bg-paper">
      <SectionHead
        eyebrow="AZ ÖN HÁZA. AZ ÖN DÖNTÉSEI."
        title="Szinte minden részlet választható"
        lead="Állítsa össze velünk a külső és belső megjelenést, a komfortot és a felszereltséget."
      />

      <div className="grid border-t border-l border-line max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3">
        {CUSTOM_OPTIONS.map((option) => (
          <article key={option.number} className="min-h-[200px] border-r border-b border-line p-[30px]">
            <span className="text-[11px] text-[#957633]">{option.number}</span>
            <h3 className="mt-7 mb-[7px]">{option.title}</h3>
            <p className="text-[13px] text-muted">{option.detail}</p>
          </article>
        ))}
      </div>

      <div className="mt-[17px] flex items-center justify-between bg-[#d7c8a4] px-[35px] py-[30px] max-sm:flex-col max-sm:items-start max-sm:gap-[22px]">
        <div>
          <h3 className="m-0">A teljes anyagválaszték egy helyen</h3>
          <p className="m-0 text-[13px]">Ajtók, padlók, falburkolatok és prémium opciók.</p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Link to="/szemelyre-szabas#materials" className="text-[11px] font-bold">
            Anyagminták →
          </Link>
          <a className="btn btn-ink" href={CATALOG_PDF} target="_blank" rel="noreferrer">
            PDF katalógus
          </a>
        </div>
      </div>
    </section>
  );
}
