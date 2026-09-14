import PageHero from '../components/PageHero';
import Custom from '../sections/Custom';
import Materials from '../sections/Materials';

export default function SzemelyreSzabasPage() {
  return (
    <>
      <PageHero
        eyebrow="AZ ÖN HÁZA. AZ ÖN DÖNTÉSEI."
        title={
          <>
            Szinte minden
            <br />
            <em className="text-gold-light">részlet választható.</em>
          </>
        }
        lead="Alaprajz, burkolatok, konyha és fürdő, komfort, kültéri tér és energia — állítsa össze velünk a ház teljes műszaki tartalmát."
      />
      <Custom />
      <Materials />
    </>
  );
}
