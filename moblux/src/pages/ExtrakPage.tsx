import PageHero from '../components/PageHero';
import Heating from '../sections/Heating';
import Solar from '../sections/Solar';

export default function ExtrakPage() {
  return (
    <>
      <PageHero
        eyebrow="VÁLASZTHATÓ MŰSZAKI CSOMAGOK"
        title={
          <>
            Fűtés és energia
            <br />
            <em className="text-gold-light">az Ön komfortjához.</em>
          </>
        }
        lead="Infrapanel, elektromos padló- és mennyezetfűtés, valamint komplett szigetüzemű napelemes rendszer energiatárolóval."
      />
      <Heating />
      <Solar />
    </>
  );
}
