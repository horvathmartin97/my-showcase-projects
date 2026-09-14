import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { USES } from '../data/site';

export default function Uses() {
  return (
    <section id="uses" className="pad bg-[#e7e2d8]">
      <SectionHead
        eyebrow="TÖBB MINT EGY MOBILHÁZ"
        title={
          <>
            Egy ház.
            <br />
            <em>Számtalan lehetőség.</em>
          </>
        }
        lead="Otthon, pihenés, befektetés vagy vállalkozás: a méret, az alaprajz és a felszereltség az Ön céljához alakítható."
      />

      <div className="grid gap-px border border-[#c6c0b5] bg-[#c6c0b5] max-md:grid-cols-1 md:grid-cols-2">
        {USES.map((use) => (
          <Reveal
            key={use.number}
            as="article"
            className={`flex min-h-[470px] flex-col p-[42px] max-md:min-h-0 max-sm:px-6 max-sm:py-[34px] ${
              use.featured ? 'bg-ink-soft text-white' : 'bg-[#f5f3ee]'
            }`}
          >
            <div className="font-display text-[46px] leading-none text-[#9b7b36]">{use.number}</div>
            <p
              className={`mt-[22px] mb-[7px] text-[10px] font-extrabold tracking-[0.17em] ${
                use.featured ? 'text-gold-light' : 'text-gold-dark'
              }`}
            >
              {use.label}
            </p>
            <h3 className="mb-[22px] text-[clamp(25px,2.4vw,37px)] leading-[1.15]">{use.title}</h3>
            <ul className="m-0 mb-[30px] list-none p-0">
              {use.items.map((item) => (
                <li
                  key={item}
                  className={`border-b py-2 text-[15px] ${
                    use.featured ? 'border-[#3c3d39] text-[#d1d2cd]' : 'border-line'
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-[7px]">
              {use.fits.map((fit) => (
                <span
                  key={fit}
                  className={`border px-2.5 py-[7px] text-[10px] font-bold ${
                    use.featured ? 'border-[#55564f] text-gold-light' : 'border-[#b9b4aa] text-[#686963]'
                  }`}
                >
                  {fit}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="flex items-center justify-between gap-[30px] bg-ink px-9 py-8 text-white max-md:flex-col max-md:items-start max-sm:px-6 max-sm:py-7">
        <div>
          <b className="block text-[22px]">Van egy elképzelése?</b>
          <span className="block text-sm text-[#a9aaa4]">
            Segítünk kiválasztani a megfelelő méretet, alaprajzot és felszereltséget.
          </span>
        </div>
        <Link to="/ajanlatkeres" className="btn btn-gold">
          Mondja el, mire használná →
        </Link>
      </Reveal>

      <p className="note">
        A megvalósíthatóság, az engedélyezés és az üzemeltetés feltételei a telek, a helyi előírások
        és a tervezett rendeltetés alapján eltérhetnek. Az előzetes telek- és projektvizsgálatban is
        segítünk.
      </p>
    </section>
  );
}
