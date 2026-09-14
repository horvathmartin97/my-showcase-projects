import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { ZoomImage } from '../components/Zoom';
import { IMAGES } from '../lib/assets';
import { HEATING_OPTIONS } from '../data/site';

const TAGS = ['csendes működés', 'egyenletes hőleadás', 'zónánkénti vezérlés', 'karbantartásszegény rendszer'];

export default function Heating() {
  return (
    <section id="heating" className="pad bg-[#e8e3d9]">
      <SectionHead
        eyebrow="PRÉMIUM FŰTÉSI EXTRÁK"
        title={
          <>
            Az Ön komfortjához
            <br />
            <em>tervezett fűtés.</em>
          </>
        }
        lead="A MOBLUX házak fűtése az életvitelhez és a kiválasztott modellhez igazítható. Infrapanel, elektromos padlófűtés és mennyezetfűtés is kérhető, önállóan vagy hűtő-fűtő klímával kombinálva."
      />

      <Reveal className="grid grid-rows-[360px_auto] bg-ink-panel text-white max-lg:grid-cols-1 max-lg:grid-rows-none lg:grid-cols-[1.15fr_0.85fr]">
        <ZoomImage
          src={IMAGES.heatingDetail}
          alt="Elektromos infra padlófűtési rendszer részlete"
          tag="Infra fűtőfólia · nagyítás ↗"
          className="lg:row-span-2 max-lg:min-h-[520px] max-sm:min-h-[370px]"
        />
        <ZoomImage
          src={IMAGES.heatingInstall}
          alt="Infra padlófűtés telepítése MOBLUX mobilházban"
          tag="Gyártás közbeni telepítés · nagyítás ↗"
          className="max-lg:min-h-[420px] max-sm:min-h-[300px]"
        />
        <div className="px-12 pt-11 pb-12 max-sm:px-6 max-sm:py-10">
          <p className="eyebrow">LÁTHATATLAN KOMFORT</p>
          <h3 className="mb-[17px] text-[clamp(28px,3vw,43px)] leading-[1.1]">
            Kellemes hőérzet, szabadon berendezhető tér
          </h3>
          <p className="text-[#b7b8b2]">
            A burkolat vagy mennyezeti felület mögé integrált elektromos rendszer nem foglal hasznos
            helyet, nem igényel látható radiátorokat, és helyiségenként szabályozható kialakítással is
            rendelhető.
          </p>
          <div className="my-6 flex flex-wrap gap-[7px]">
            {TAGS.map((tag) => (
              <span key={tag} className="border border-[#55564f] px-2.5 py-[7px] text-[9px] font-bold text-gold-light">
                {tag}
              </span>
            ))}
          </div>
          <Link to="/ajanlatkeres" className="btn btn-gold">
            Fűtési opciót kérek →
          </Link>
        </div>
      </Reveal>

      <Reveal className="mt-px grid gap-px bg-[#c7c1b6] max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4">
        {HEATING_OPTIONS.map((option) => (
          <article key={option.number} className="bg-[#f8f6f1] p-8 max-sm:px-6 max-sm:py-[30px]">
            <b className="text-[10px] text-[#987937]">{option.number}</b>
            <h3 className="mt-6 mb-2 text-xl">{option.title}</h3>
            <p className="m-0 text-xs text-[#6d6e68]">{option.detail}</p>
          </article>
        ))}
      </Reveal>

      <p className="note">
        A szükséges fűtési teljesítményt a ház mérete, szigetelése, üvegfelületei, rendeltetése és
        telepítési helye alapján méretezzük. Az elérhető rendszer és rétegrend a választott burkolattól
        és modelltől is függ.
      </p>
    </section>
  );
}
