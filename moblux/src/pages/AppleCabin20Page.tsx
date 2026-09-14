import PageHero from '../components/PageHero';
import MoreModels from '../components/MoreModels';
import AppleCabin20 from '../sections/AppleCabin20';

export default function AppleCabin20Page() {
  return (
    <>
      <PageHero
        parent={{ label: 'Modellek', to: '/modellek' }}
        eyebrow="KOMPAKT ÚJDONSÁG • 20 LÁBAS"
        title="Apple Cabin 20"
        lead="Az Apple Cabin karakteres formája kompakt, jól berendezhető kivitelben — vendégháznak, apartmannak vagy kerti lakótérnek."
      />
      <AppleCabin20 />
      <MoreModels current="/modellek/apple-cabin-20" />
    </>
  );
}
