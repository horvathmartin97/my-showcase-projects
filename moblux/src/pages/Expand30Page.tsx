import PageHero from '../components/PageHero';
import MoreModels from '../components/MoreModels';
import Expand30 from '../sections/Expand30';

export default function Expand30Page() {
  return (
    <>
      <PageHero
        parent={{ label: 'Modellek', to: '/modellek' }}
        eyebrow="ÚJ MODELL • 30 LÁBAS KINYITHATÓ"
        title="MOBLUX Expand 30"
        lead="Két oldalra nyitható, családi méretű modell akár három hálószobával, nappalival, L alakú konyhával és komplett fürdőszobával."
      />
      <Expand30 />
      <MoreModels current="/modellek/expand-30" />
    </>
  );
}
