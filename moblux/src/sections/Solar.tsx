import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { SOLAR_DETAILS, SOLAR_SUMMARY } from '../data/site';

export default function Solar() {
  return (
    <section id="solar" className="pad bg-ink-panel text-white">
      <SectionHead
        inverse
        eyebrow="VÁLASZTHATÓ ENERGIARENDSZER"
        title={
          <>
            Komplett napelemes rendszer.
            <br />
            <em className="text-gold-light">Energiatárolással együtt.</em>
          </>
        }
      >
        <p className="text-[17px] text-[#a9aaa4]">
          A MOBLUX mobilházakhoz teljes, szigetüzemű napelemes csomag is rendelhető. A rendszer
          napelemeket, LiFePO₄ akkumulátort, invertert, tartószerkezetet, kábelezést és DC védelmi
          egységet tartalmaz.
        </p>
      </SectionHead>

      <Reveal className="grid border-t border-l border-[#454640] max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4">
        {SOLAR_SUMMARY.map((item) => (
          <div key={item.value} className="border-r border-b border-[#343530] p-[30px]">
            <strong className="block text-[clamp(25px,3vw,40px)] font-medium text-gold-light">
              {item.value}
            </strong>
            <span className="mt-[5px] block text-[10px] text-[#999]">{item.detail}</span>
          </div>
        ))}
      </Reveal>

      <Reveal className="grid gap-px bg-[#343530] max-lg:grid-cols-1 lg:grid-cols-2">
        {SOLAR_DETAILS.map((item) => (
          <article key={item.number} className="bg-[#191a17] p-[38px] max-sm:px-6 max-sm:py-8">
            <span className="text-[10px] font-extrabold text-gold-light">{item.number}</span>
            <h3 className="mt-5 mb-2 text-2xl">{item.title}</h3>
            <p className="m-0 text-[13px] text-[#a9aaa4]">{item.detail}</p>
          </article>
        ))}
      </Reveal>

      <Reveal className="flex items-center justify-between gap-[30px] bg-sand px-9 py-[30px] text-[#111] max-lg:flex-col max-lg:items-start max-sm:px-6 max-sm:py-7">
        <div>
          <b className="block text-[21px]">Teljes rendszer, egyedi méretezéssel</b>
          <span className="block max-w-[780px] text-xs text-[#595a54]">
            A végleges teljesítményt a kiválasztott ház, a fogyasztók, a telepítési hely és a kívánt
            önellátási szint alapján határozzuk meg.
          </span>
        </div>
        <Link to="/ajanlatkeres" className="btn btn-gold">
          Napelemes opciót kérek →
        </Link>
      </Reveal>

      <p className="note">
        A termelési érték becslés, amelyet a tájolás, a dőlésszög, az időjárás, az árnyékolás és a
        telepítési körülmények befolyásolnak. A hálózati vagy szigetüzemű kialakítás végleges műszaki
        tartalma helyszíni és fogyasztási felmérés alapján készül.
      </p>
    </section>
  );
}
