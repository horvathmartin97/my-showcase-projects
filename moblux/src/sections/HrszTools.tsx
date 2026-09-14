import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import { HRSZ_CHECK_URL } from '../data/siting';

export default function HrszTools() {
  return (
    <section className="pad bg-ink-panel text-white">
      <SectionHead
        inverse
        eyebrow="HELYRAJZI SZÁM ELLENŐRZÉSE"
        title={
          <>
            Ellenőrizze önállóan,
            <br />
            vagy bízza ránk.
          </>
        }
        lead="Két gyors út ugyanahhoz a célhoz: tisztább kép még a ház kiválasztása és a telepítés megtervezése előtt."
      />

      <div className="mt-[45px] grid gap-px bg-[#3c3d39] max-md:grid-cols-1 md:grid-cols-2">
        <Reveal
          as="article"
          className="flex min-h-[410px] flex-col items-start bg-[#191a17] p-12 max-sm:min-h-[380px] max-sm:px-6 max-sm:py-[34px]"
        >
          <span className="font-display text-[52px] leading-none text-gold-light">01</span>
          <small className="mt-[25px] text-[9px] font-extrabold tracking-[0.16em] text-[#aaa]">
            ÖNÁLLÓ ELLENŐRZÉS
          </small>
          <h3 className="mt-2.5 mb-4 text-[clamp(25px,3vw,38px)]">Hivatalos térképi keresés</h3>
          <p className="max-w-[620px] leading-[1.7] text-[#c4c4be]">
            Nyissa meg az állami E‑építés tájékoztató felületét, majd a település és a helyrajzi szám
            megadásával keresse meg a telket és az elérhető hivatalos térképi információkat.
          </p>
          <a
            className="btn mt-auto bg-[#f1efe8] text-[#111] hover:bg-white"
            href={HRSZ_CHECK_URL}
            target="_blank"
            rel="noreferrer"
          >
            Hivatalos HRSZ kereső ↗
          </a>
          <em className="mt-5 block text-[10px] leading-[1.55] text-[#8f908b] not-italic">
            A térképi találat önmagában nem helyettesíti a HÉSZ, a településképi és az egyéb
            előírások szakmai ellenőrzését.
          </em>
        </Reveal>

        <Reveal
          as="article"
          className="flex min-h-[410px] flex-col items-start bg-[#191a17] p-12 max-sm:min-h-[380px] max-sm:px-6 max-sm:py-[34px]"
        >
          <span className="font-display text-[52px] leading-none text-gold-light">02</span>
          <small className="mt-[25px] text-[9px] font-extrabold tracking-[0.16em] text-[#aaa]">
            MOBLUX TELEKVIZSGÁLAT
          </small>
          <h3 className="mt-2.5 mb-4 text-[clamp(25px,3vw,38px)]">
            Kérjen előzetes szakmai átvizsgálást
          </h3>
          <p className="max-w-[620px] leading-[1.7] text-[#c4c4be]">
            Küldje el nekünk a települést, a helyrajzi számot és a tervezett felhasználást.
            Áttekintjük a telek legfontosabb adottságait, a helyi szabályozást és a választott MOBLUX
            modell telepíthetőségét.
          </p>
          <a className="btn btn-gold mt-auto" href="#siting-check">
            Elküldöm a helyrajzi számot ↓
          </a>
          <em className="mt-5 block text-[10px] leading-[1.55] text-[#8f908b] not-italic">
            Az elővizsgálat után felvesszük Önnel a kapcsolatot, és ismertetjük a következő szükséges
            lépéseket.
          </em>
        </Reveal>
      </div>
    </section>
  );
}
