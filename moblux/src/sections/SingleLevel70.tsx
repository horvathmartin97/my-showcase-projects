import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { ZoomImage } from '../components/Zoom';
import { IMAGES } from '../lib/assets';

export default function SingleLevel70() {
  return (
    <section className="pad bg-[#e5dfd2]">
      <SectionHead
        eyebrow="ÚJ, EGY SZINTES KIALAKÍTÁS"
        title={
          <>
            70 m² egyetlen
            <br />
            <em className="text-[#8d6d27]">jól átlátható szinten.</em>
          </>
        }
        lead="Két külön hálószobával, nagy közös nappali–étkező térrel, konyhával és fürdőszobával. Az elrendezés kiindulási alap, amely az egyedi igényekhez alakítható."
      />

      <Reveal className="grid min-h-[590px] bg-ink-panel text-white max-lg:grid-cols-1 lg:grid-cols-[1.35fr_0.65fr]">
        <ZoomImage
          src={IMAGES.singleLevel70}
          alt="MOBLUX 70 m²-es egyszintes ház választható alaprajza"
          tag="Alaprajz nagyítása ↗"
          className="bg-white max-lg:min-h-[420px] max-sm:min-h-[300px]"
          fit="contain"
        />
        <div className="flex flex-col justify-center px-12 py-[55px] max-sm:px-6 max-sm:py-10">
          <p className="eyebrow">70 M²-ES VÁLASZTHATÓ ALAPRAJZ</p>
          <h3 className="mt-2.5 mb-[22px] text-[clamp(31px,3.8vw,52px)] leading-[1.08]">
            Tágas otthon lépcsők nélkül
          </h3>
          <ul className="mb-8 list-disc pl-[18px] text-[#c5c6c0]">
            <li>2 különálló hálószoba</li>
            <li>nagy nappali és étkező</li>
            <li>konyha és komplett fürdőszoba</li>
            <li>egyedileg módosítható helyiségkiosztás</li>
          </ul>
          <Link to="/ajanlatkeres" className="btn btn-gold self-start">
            Ehhez kérek ajánlatot →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
