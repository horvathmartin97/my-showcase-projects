import PageHero from '../components/PageHero';
import MoreModels from '../components/MoreModels';
import AppleCabin40 from '../sections/AppleCabin40';
import Gallery from '../sections/Gallery';

export default function AppleCabin40Page() {
  return (
    <>
      <PageHero
        parent={{ label: 'Modellek', to: '/modellek' }}
        eyebrow="PRÉMIUM ÚJDONSÁG • 40 LÁBAS"
        title="Apple Cabin 40"
        lead="Ikonikus, lekerekített forma panorámafelületekkel, komplett konyhával és fürdőszobával, négy évszakos kivitelben."
      />
      <AppleCabin40 />
      <Gallery />
      <MoreModels current="/modellek/apple-cabin-40" />
    </>
  );
}
