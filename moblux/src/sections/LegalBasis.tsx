import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { COMPLIANCE_POINTS, LAWS, THRESHOLDS } from '../data/siting';

export default function LegalBasis() {
  return (
    <section id="legal" className="pad bg-white">
      <SectionHead
        eyebrow="JOGSZABÁLYI HÁTTÉR"
        title={
          <>
            Komoly döntéshez
            <br />
            <em>ellenőrzött alapok.</em>
          </>
        }
        lead="Nem általános ígéretet adunk, hanem az adott ingatlanra vonatkozó előírásokat vizsgáljuk meg."
      />

      <div className="bg-[#f3f0e9] px-0 pt-[72px] pb-[55px] max-sm:pt-12">
        <div className="px-9 max-sm:px-5">
          <SectionHead
            className="mb-[35px]"
            eyebrow="EGYSZERŰBBEN TERVEZHETŐ MÉRETKATEGÓRIA"
            title={
              <>
                35 m² alatt.
                <br />
                <em>4 méter alatt.</em>
              </>
            }
            lead="Standard MOBLUX házainkat tudatosan kompakt méretben kínáljuk. Ez kedvező kiindulópontot jelent a telepítéshez, miközben az adott ingatlan szabályait minden esetben előre ellenőrizzük."
          />

          <Reveal className="grid border border-line bg-white max-lg:grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-[0.32fr_0.32fr_1.36fr]">
            {THRESHOLDS.map(([value, label]) => (
              <div
                key={label}
                className="border-r border-line px-[30px] py-[38px] max-sm:border-r-0 max-sm:border-b"
              >
                <b className="block text-[clamp(34px,4vw,58px)] leading-none text-[#927126]">
                  {value}
                </b>
                <span className="mt-3.5 block text-[9px] tracking-[0.12em] text-muted uppercase">
                  {label}
                </span>
              </div>
            ))}

            <div className="px-[30px] py-[38px] max-lg:col-span-2 max-sm:col-span-1">
              <h3 className="mb-2.5 text-[26px]">A jogszabályi küszöbértékek alatt</h3>
              <p className="m-0 text-sm text-muted">
                A 281/2024. (IX. 30.) Korm. rendelet 17. § a) pontja az új épület építési engedélyhez
                kötését a 35 m² összes hasznos alapterület vagy a 4,5 méteres gerincmagasság
                meghaladásához kapcsolja. Standard, 35 m² alatti és legfeljebb 4 méter magas
                modelljeink egyik határt sem lépik túl.
              </p>
              <p className="mt-3.5 border-l-2 border-gold pl-4 text-xs text-[#343530]">
                Ez a kedvező méretkategória önmagában nem írja felül a telek övezeti, helyi építési,
                településképi, rendeltetési vagy más hatósági követelményeit. Ezek tisztázásában
                segítünk.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-[18px] bg-gold px-9 py-8 text-[#111] max-sm:px-[22px] max-sm:py-7">
            <small className="text-[8px] font-bold tracking-[0.16em]">MOBLUX MŰSZAKI BIZTONSÁG</small>
            <h3 className="my-2 max-w-[920px] text-[clamp(24px,3vw,38px)] leading-[1.16]">
              Dokumentált megfelelőség. Európai kivitel. Teljes szakmai támogatás.
            </h3>
            <div className="mt-6 grid gap-px bg-[#806821] max-sm:grid-cols-1 sm:grid-cols-3">
              {COMPLIANCE_POINTS.map((point) => (
                <span key={point} className="bg-gold px-4 py-3.5 text-[11px] font-bold">
                  {point}
                </span>
              ))}
            </div>
            <p className="mt-5 max-w-[1030px] text-xs">
              A szükséges igazolások és szakági dokumentumok körét a választott modell, a
              felszereltség, a tervezett rendeltetés és a telepítési hely alapján állítjuk össze.
              Igény esetén a ház dokumentációját a vevő projektjéhez szükséges követelmények szerint
              egészítjük ki és koordináljuk.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-9 grid border-t border-l border-line max-lg:grid-cols-1 lg:grid-cols-3">
        {LAWS.map((law) => (
          <article
            key={law.title}
            className="flex min-h-[310px] flex-col border-r border-b border-line p-8 max-lg:min-h-0"
          >
            <small className="text-[8px] font-bold tracking-[0.15em] text-[#8d6d27]">
              {law.label}
            </small>
            <h3 className="mt-8 mb-3 text-[21px] leading-[1.25]">{law.title}</h3>
            <p className="mb-[22px] text-[13px] text-muted">{law.detail}</p>
            <a
              href={law.href}
              target="_blank"
              rel="noreferrer"
              className="mt-auto text-[11px] font-bold"
            >
              {law.linkLabel}
            </a>
          </article>
        ))}
      </div>

      <p className="mt-[18px] border-l-[3px] border-gold bg-[#f3f0e9] px-5 py-4 text-xs text-[#5e5e58]">
        A weboldalon szereplő információ általános tájékoztatás. A szükséges eljárásról minden esetben
        a konkrét ingatlan, a tervezett rendeltetés és a hatályos helyi előírások alapján lehet
        felelős álláspontot adni.
      </p>
    </section>
  );
}
