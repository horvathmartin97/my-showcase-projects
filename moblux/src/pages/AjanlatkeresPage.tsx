import PageHero from '../components/PageHero';
import Quote from '../sections/Quote';
import Contact from '../sections/Contact';

export default function AjanlatkeresPage() {
  return (
    <>
      <PageHero
        eyebrow="KEZDJÜK EL"
        title={
          <>
            Milyen otthont
            <br />
            <em className="text-gold-light">képzelt el?</em>
          </>
        }
        lead="Válasszon néhány lehetőséget, és a rendszer összeállít egy elküldhető ajánlatkérő üzenetet. Személyesen a bajai bemutatóudvarban is várjuk."
        cta={{ label: 'Ugrás az űrlaphoz ↓', to: '/ajanlatkeres#quote' }}
      />
      <Quote />
      <Contact />
    </>
  );
}
