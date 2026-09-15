import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Models from "../sections/Models";

export default function ModellekPage() {
  return (
    <>
      <PageHero
        eyebrow="MOBLUX KOLLEKCIÓ"
        title={
          <>
            Számtalan lehetőség.
            <br />
            <em className="text-gold-light">Egy gyártói háttér.</em>
          </>
        }
        lead="A kompakt Apple Cabin 20-tól a kétszintes Grand 70-ig. Minden modellnek saját oldala van műszaki adatokkal, alaprajzokkal és fotókkal."
        facts={[
          ["12–90 m²", "méretválaszték"],
          ["4 évszak", "egész éves kivitel"],
          ["Galvanizált acélváz", "minden modellnél"],
          ["Országos", "szállítás és telepítés"],
        ]}
      />

      <Models />

      <section className="bg-sand px-[4vw] py-14 max-sm:px-5">
        <div className="mx-auto flex w-full max-w-[var(--max)] items-center justify-between gap-8 max-md:flex-col max-md:items-start">
          <div>
            <b className="block text-[21px]">
              Nem a modell, hanem az alaprajz a kérdés?
            </b>
            <span className="block max-w-[720px] text-[13px] text-[#595a54]">
              A 20, 30 és 40 lábas kinyitható kialakítások és a 70 m²-es
              egyszintes elrendezés egy helyen, méretezett rajzokkal.
            </span>
          </div>
          <Link to="/alaprajzok" className="btn btn-ink shrink-0">
            Alaprajzok megnyitása →
          </Link>
        </div>
      </section>
    </>
  );
}
