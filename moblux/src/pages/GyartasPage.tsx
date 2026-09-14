import PageHero from '../components/PageHero';
import ProductionProof from '../sections/ProductionProof';

export default function GyartasPage() {
  return (
    <>
      <PageHero
        eyebrow="KIZÁRÓLAGOS GYÁRTÓI HÁTTÉR"
        title={
          <>
            Saját fejlesztés.
            <br />
            <em className="text-gold-light">Ellenőrzött gyártás.</em>
          </>
        }
        lead="Modelljeinket saját tervezőinkkel fejlesztettük tovább, és gyártópartnerünk kizárólag a MOBLUX számára, az általunk meghatározott műszaki tartalommal készíti őket."
      />
      <ProductionProof />
    </>
  );
}
