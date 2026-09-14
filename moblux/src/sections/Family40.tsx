import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { ZoomImage } from '../components/Zoom';
import { IMAGES } from '../lib/assets';

/** A gyártói alaprajzok adatai a MOBLUX katalógusból. */
const LAYOUTS = [
  {
    id: 'harom-halos',
    label: 'HÁROM HÁLÓSZOBÁS KIALAKÍTÁS',
    title: 'Nagy nappali-étkező-konyha, három külön hálószoba',
    detail:
      'A fürdőszobai blokk a konyha mellé kerül, a három háló pedig a hosszanti oldalon, egymástól függetlenül nyílik.',
    image: IMAGES.family40Plan,
    imageAlt: '40 lábas ház három hálószobás alaprajza',
  },
  {
    id: 'multifunkcios',
    label: 'TÖBBFUNKCIÓS KIALAKÍTÁS',
    title: 'Nagy közösségi tér és két külön mosdóblokk',
    detail:
      'Három elkülöníthető helyiséggel és két mosdóval — apartmanprojekthez, szálláshelyhez vagy irodai használatra.',
    image: IMAGES.multifunction40,
    imageAlt: '40 lábas ház többfunkciós alaprajza',
  },
];

const DIMENSIONS = [
  ['11 800 × 6 240 mm', 'külső méret nyitva'],
  ['11 380 mm', 'belső hossz'],
  ['3820 / 3740 / 3820 mm', 'fő szakaszok'],
  ['akár 3', 'hálószoba'],
];

export default function Family40() {
  return (
    <section className="pad bg-[#ebe8e1]">
      <SectionHead
        eyebrow="KÉT VÁLASZTHATÓ GYÁRTÓI ALAPRAJZ"
        title={
          <>
            Ugyanaz a ház.
            <br />
            <em>Kétféle életvitel.</em>
          </>
        }
        lead="A 40 lábas modell ugyanazon a galvanizált acélvázon készül; a belső kiosztás a felhasználási céltól függ."
      />

      <Reveal className="mb-3 grid border border-[#cbc7bd] bg-white max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4">
        {DIMENSIONS.map(([value, label]) => (
          <div
            key={label}
            className="border-r border-[#ddd9cf] p-6 last:border-r-0 max-sm:border-r-0 max-sm:border-b"
          >
            <b className="block text-[17px] text-[#8d6d27]">{value}</b>
            <span className="mt-1 block text-[11px] text-[#74756f]">{label}</span>
          </div>
        ))}
      </Reveal>

      <div className="grid gap-px bg-[#cbc6bb] max-lg:grid-cols-1 lg:grid-cols-2">
        {LAYOUTS.map((layout) => (
          <Reveal key={layout.id} as="article" className="flex flex-col bg-white">
            <ZoomImage
              src={layout.image}
              alt={layout.imageAlt}
              tag="Alaprajz nagyítása ↗"
              className="aspect-4/3 bg-white p-4"
              fit="contain"
            />
            <div className="p-[38px] max-sm:px-6 max-sm:py-8">
              <small className="text-[9px] font-extrabold tracking-[0.13em] text-[#8d7133]">
                {layout.label}
              </small>
              <h3 className="mt-4 mb-3 text-2xl leading-[1.15]">{layout.title}</h3>
              <p className="m-0 text-[13px] text-[#696a64]">{layout.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="note">
        A méretezett rajzok a gyártói kivitelt mutatják. A helyiségkiosztás, a nyílászárók és a
        felszereltség az egyedi megrendelés szerint módosítható.
      </p>
    </section>
  );
}
