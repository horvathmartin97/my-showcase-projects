import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { ZoomImage } from '../components/Zoom';
import { MATERIALS } from '../data/materials';

export default function Materials() {
  return (
    <section id="materials" className="pad bg-white">
      <SectionHead
        eyebrow="VÁLASZTHATÓ ANYAGOK"
        title="Alakítsa saját stílusára"
        lead="Belső ajtók, padlóburkolatok és külső falburkolatok széles választékban. Kattintson a minta-táblára a nagyításhoz, vagy nyissa meg a részletes minta-ívet."
      />

      <div className="grid gap-px bg-line max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3">
        {MATERIALS.map((group) => (
          <Reveal key={group.id} as="article" className="flex flex-col bg-paper">
            <ZoomImage
              src={group.image}
              alt={group.imageAlt}
              tag="Nagyítás ↗"
              className="aspect-4/3 bg-white"
              fit="contain"
            />
            <div className="flex flex-1 flex-col p-[26px]">
              <h3 className="text-xl">{group.title}</h3>
              <p className="mt-2 text-[13px] text-muted">{group.detail}</p>
              <div className="mt-auto flex flex-wrap gap-4 pt-5">
                {group.pdfs.map((pdf) => (
                  <a
                    key={pdf.href}
                    href={pdf.href}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-gold pb-0.5 text-[11px] font-bold text-gold-dark"
                  >
                    {pdf.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="note">
        A minta-ívek a gyártói választékot mutatják; az elérhető dekorok köre a megrendelés
        időpontjában egyeztetett készlet szerint alakul.
      </p>
    </section>
  );
}
