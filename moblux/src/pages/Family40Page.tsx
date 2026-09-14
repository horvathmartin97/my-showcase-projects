import PageHero from '../components/PageHero';
import MoreModels from '../components/MoreModels';
import Family40 from '../sections/Family40';

export default function Family40Page() {
  return (
    <>
      <PageHero
        parent={{ label: 'Modellek', to: '/modellek' }}
        eyebrow="LEGTÁGASABB KINYITHATÓ • 40 LÁBAS"
        title="MOBLUX Family 40"
        lead="Tágas, több helyiséges otthon családoknak, apartmanprojektnek vagy befektetési célra, galvanizált acélvázon."
        facts={[
          ['11 800 mm', 'hossz'],
          ['6 240 mm', 'kinyitott szélesség'],
          ['akár 3', 'hálószoba'],
          ['2 alaprajz', 'gyártói kialakítás'],
        ]}
      />
      <Family40 />
      <MoreModels current="/modellek/family-40" />
    </>
  );
}
