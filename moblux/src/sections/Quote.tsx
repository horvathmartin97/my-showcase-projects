import { useState, type FormEvent } from 'react';
import Reveal from '../components/Reveal';
import { SITE } from '../data/site';
import { QUOTE_EXTRAS, QUOTE_MODELS, QUOTE_PURPOSES } from '../data/quote';

/** Az eredeti script.js üzenetsablonja, változatlan szöveggel. */
function buildMessage(form: {
  modell: string;
  cel: string;
  opciok: string[];
  nev: string;
  elerhetoseg: string;
  megjegyzes: string;
}): string {
  const opciok = form.opciok.join(', ') || 'nincs megjelölve';
  return [
    'Kedves MOBLUX!',
    '',
    'Személyre szabott ajánlatot szeretnék kérni.',
    '',
    `Modell: ${form.modell}`,
    `Felhasználás: ${form.cel}`,
    `Opciók: ${opciok}`,
    `Név: ${form.nev}`,
    `Elérhetőség: ${form.elerhetoseg}`,
    `Megjegyzés: ${form.megjegyzes || '-'}`,
  ].join('\n');
}

export default function Quote() {
  const [modell, setModell] = useState(QUOTE_MODELS[0]);
  const [cel, setCel] = useState(QUOTE_PURPOSES[0]);
  const [opciok, setOpciok] = useState<string[]>([]);
  const [nev, setNev] = useState('');
  const [elerhetoseg, setElerhetoseg] = useState('');
  const [megjegyzes, setMegjegyzes] = useState('');

  function toggleOption(value: string) {
    setOpciok((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = buildMessage({ modell, cel, opciok, nev, elerhetoseg, megjegyzes });
    window.location.href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  const field = 'w-full border-0 border-b border-[#b5b4ae] bg-transparent px-px py-3 outline-none';
  const label = 'mb-[25px] block text-[11px] font-bold';

  return (
    <section
      id="quote"
      className="pad grid gap-[90px] bg-sand max-lg:grid-cols-1 max-lg:gap-[45px] lg:grid-cols-[0.8fr_1.2fr]"
    >
      <Reveal className="self-start lg:sticky lg:top-[100px]">
        <p className="eyebrow eyebrow-dark">KEZDJÜK EL</p>
        <h2>Milyen otthont képzelt el?</h2>
        <p className="mt-5">
          Válasszon néhány lehetőséget. A rendszer összeállít egy elküldhető ajánlatkérő üzenetet.
        </p>
        <div className="mt-[45px] border-t border-[#9e9279] pt-[22px]">
          <small className="block text-[9px] tracking-[0.16em]">BEMUTATÓUDVAR</small>
          <b className="my-[7px] block">{SITE.showroom}</b>
          <a href={SITE.maps} target="_blank" rel="noreferrer" className="block text-[11px] font-bold">
            Útvonaltervezés →
          </a>
        </div>
      </Reveal>

      <form onSubmit={handleSubmit} className="bg-white p-11 max-sm:px-5 max-sm:py-7">
        <label className={label}>
          1. Melyik modell érdekli?
          <select value={modell} onChange={(event) => setModell(event.target.value)} className={field}>
            {QUOTE_MODELS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className={label}>
          2. Mire használná?
          <select value={cel} onChange={(event) => setCel(event.target.value)} className={field}>
            {QUOTE_PURPOSES.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <fieldset className="mb-[25px] border-0 p-0 text-[11px] font-bold">
          <legend>3. Mely opciók fontosak?</legend>
          <div className="mt-2 flex flex-wrap gap-[7px]">
            {QUOTE_EXTRAS.map((extra) => {
              const checked = opciok.includes(extra.value);
              return (
                <label key={extra.value} className="cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleOption(extra.value)}
                    className="absolute opacity-0"
                  />
                  <span
                    className={`block border px-[11px] py-2 font-medium ${
                      checked ? 'border-[#111] bg-[#111] text-white' : 'border-[#c7c4bd]'
                    }`}
                  >
                    {extra.label}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <label className={label}>
          4. Neve
          <input
            required
            value={nev}
            onChange={(event) => setNev(event.target.value)}
            placeholder="Az Ön neve"
            autoComplete="name"
            className={field}
          />
        </label>

        <label className={label}>
          5. Telefonszáma vagy e-mail-címe
          <input
            required
            value={elerhetoseg}
            onChange={(event) => setElerhetoseg(event.target.value)}
            placeholder="Ahol visszakereshetjük"
            autoComplete="tel email"
            className={field}
          />
        </label>

        <label className={label}>
          Megjegyzés
          <textarea
            rows={3}
            value={megjegyzes}
            onChange={(event) => setMegjegyzes(event.target.value)}
            placeholder="Méret, helyszín, különleges elképzelés…"
            className={field}
          />
        </label>

        <button type="submit" className="btn btn-gold w-full">
          Ajánlatkérés összeállítása →
        </button>
        <small className="mt-2 block text-[9px] text-[#888]">
          A gomb megnyit egy előre kitöltött üzenetet.
        </small>
      </form>
    </section>
  );
}
