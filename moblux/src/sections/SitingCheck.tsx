import { useState, type FormEvent } from 'react';
import Reveal from '../components/Reveal';
import { SITE } from '../data/site';
import { SITING_PURPOSES } from '../data/siting';

/** Az eredeti script.js #siting-form üzenetsablonja, változatlan szöveggel. */
function buildMessage(form: Record<string, string>): string {
  return [
    'Kedves MOBLUX!',
    '',
    'Előzetes telepíthetőségi vizsgálatot szeretnék kérni.',
    '',
    `Település: ${form.telepules}`,
    `Helyrajzi szám: ${form.hrsz}`,
    `Tervezett használat: ${form.cel}`,
    `Kívánt modell vagy méret: ${form.modell || '-'}`,
    `Név: ${form.nev}`,
    `Elérhetőség: ${form.elerhetoseg}`,
    `Megjegyzés: ${form.megjegyzes || '-'}`,
  ].join('\n');
}

export default function SitingCheck() {
  const [form, setForm] = useState({
    telepules: '',
    hrsz: '',
    cel: SITING_PURPOSES[0],
    modell: '',
    nev: '',
    elerhetoseg: '',
    megjegyzes: '',
  });

  function update(key: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = buildMessage(form);
    window.location.href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  const field = 'w-full border-0 border-b border-[#b5b4ae] bg-transparent px-px py-3 outline-none';
  const label = 'mb-[22px] block text-[11px] font-bold';

  return (
    <section
      id="siting-check"
      className="pad grid gap-[85px] bg-sand max-lg:grid-cols-1 max-lg:gap-[45px] lg:grid-cols-[0.78fr_1.22fr]"
    >
      <Reveal className="self-start lg:sticky lg:top-[95px]">
        <p className="eyebrow eyebrow-dark">KÜLDJE EL NEKÜNK A HRSZ-T</p>
        <h2>
          Nézzük meg,
          <br />
          mi valósítható meg.
        </h2>
        <p className="mt-5">
          Küldje el az ingatlan alapadatait. Ezek alapján felvesszük Önnel a kapcsolatot, és
          elindítjuk az előzetes telepíthetőségi egyeztetést.
        </p>
        <ul className="mt-[30px] list-disc pl-[18px]">
          <li className="my-[7px]">település és helyrajzi szám</li>
          <li className="my-[7px]">tervezett felhasználás</li>
          <li className="my-[7px]">kiválasztott vagy kívánt házméret</li>
        </ul>
      </Reveal>

      <form onSubmit={handleSubmit} className="bg-white p-[43px] max-sm:px-5 max-sm:py-7">
        <label className={label}>
          Település
          <input
            required
            value={form.telepules}
            onChange={(event) => update('telepules', event.target.value)}
            placeholder="Például: Baja"
            className={field}
          />
        </label>

        <label className={label}>
          Helyrajzi szám
          <input
            required
            value={form.hrsz}
            onChange={(event) => update('hrsz', event.target.value)}
            placeholder="Például: 1234/5"
            className={field}
          />
        </label>

        <label className={label}>
          Tervezett használat
          <select
            value={form.cel}
            onChange={(event) => update('cel', event.target.value)}
            className={field}
          >
            {SITING_PURPOSES.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className={label}>
          Kívánt modell vagy méret
          <input
            value={form.modell}
            onChange={(event) => update('modell', event.target.value)}
            placeholder="Például: Natura 35 vagy 30 lábas"
            className={field}
          />
        </label>

        <label className={label}>
          Név
          <input
            required
            value={form.nev}
            onChange={(event) => update('nev', event.target.value)}
            placeholder="Az Ön neve"
            autoComplete="name"
            className={field}
          />
        </label>

        <label className={label}>
          Telefon vagy e-mail
          <input
            required
            value={form.elerhetoseg}
            onChange={(event) => update('elerhetoseg', event.target.value)}
            placeholder="Elérhetőség"
            autoComplete="tel email"
            className={field}
          />
        </label>

        <label className={label}>
          Megjegyzés
          <textarea
            rows={3}
            value={form.megjegyzes}
            onChange={(event) => update('megjegyzes', event.target.value)}
            placeholder="A telekről vagy az elképzelésről"
            className={field}
          />
        </label>

        <button type="submit" className="btn btn-gold w-full">
          Előzetes vizsgálatot kérek →
        </button>
        <small className="mt-2 block text-[9px] text-[#888]">
          A gomb egy előre kitöltött WhatsApp-üzenetet nyit meg.
        </small>
      </form>
    </section>
  );
}
