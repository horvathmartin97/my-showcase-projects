import PageHero from '../components/PageHero';
import MoreModels from '../components/MoreModels';
import Lumina35 from '../sections/Lumina35';

export default function Lumina35Page() {
  return (
    <>
      <PageHero
        parent={{ label: 'Modellek', to: '/modellek' }}
        eyebrow="BEMUTATÓMODELL"
        title="MOBLUX Lumina 35"
        lead="Világos, modern, négy évszakos konténerház panorámás üvegfelületekkel, két szobával, komplett konyhával és fürdőszobával."
      />
      <Lumina35 />
      <MoreModels current="/modellek/lumina-35" />
    </>
  );
}
