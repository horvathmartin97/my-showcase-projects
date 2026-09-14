import Reveal from '../components/Reveal';
import { ZoomImage } from '../components/Zoom';
import { IMAGES } from '../lib/assets';

const TAGS = [
  'kizárólagos gyártói együttműködés',
  'saját tervezésű modellek',
  'továbbfejlesztett műszaki tartalom',
  'ellenőrzött gyártás',
  'egyedi konfiguráció',
];

export default function ProductionProof() {
  return (
    <section className="grid bg-ink-panel text-white max-lg:grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]">
      <Reveal className="flex flex-col justify-center px-[max(35px,6vw)] py-[90px] max-sm:px-6 max-sm:py-16">
        <p className="eyebrow">KIZÁRÓLAGOS GYÁRTÓI HÁTTÉR</p>
        <h2 className="text-[clamp(38px,4.6vw,67px)]">
          Saját fejlesztés.
          <br />
          <em className="text-gold-light">Megbízható gyártói kapacitás.</em>
        </h2>
        <p className="mt-5 text-base leading-[1.75] text-[#b9bbb5]">
          A MOBLUX nem egyszerűen katalógusból választott házakat értékesít. Modelljeinket saját
          tervezőinkkel, a korábbi gyártási tapasztalatok alapján felülvizsgáltuk, továbbfejlesztettük
          és a magyar vásárlók igényeihez alakítottuk.
        </p>
        <p className="text-base leading-[1.75] text-[#b9bbb5]">
          Gyártópartnerünk a magyar piacra szánt modelleket kizárólag a MOBLUX számára, az általunk
          meghatározott egyedi műszaki tartalom és minőségi követelmények szerint készíti. A stabil
          gyártói kapacitás, a közvetlen kapcsolattartás és a folyamatos ellenőrzés kiszámítható
          hátteret biztosít minden megrendeléshez.
        </p>
        <div className="mt-6 flex flex-wrap gap-[7px]">
          {TAGS.map((tag) => (
            <span key={tag} className="border border-[#55564f] px-[11px] py-2 text-[10px] font-bold text-gold-light">
              {tag}
            </span>
          ))}
        </div>
      </Reveal>

      <ZoomImage
        src={IMAGES.production}
        alt="MOBLUX mobilházak a gyártósoron"
        tag="Betekintés a gyártásba ↗"
        className="min-h-[650px] bg-[#222] max-lg:min-h-[500px] max-sm:min-h-[330px]"
      />
    </section>
  );
}
