import PageHero from '../components/PageHero';
import MoreModels from '../components/MoreModels';
import Natura35 from '../sections/Natura35';

export default function Natura35Page() {
  return (
    <>
      <PageHero
        parent={{ label: 'Modellek', to: '/modellek' }}
        eyebrow="TERMÉSZETKÖZELI OTTHON"
        title="MOBLUX Natura 35"
        lead="Meleg fa hatású külső, fedett WPC terasz és egész évben használható, otthonos tér klasszikus házformában."
      />
      <Natura35 />
      <MoreModels current="/modellek/natura-35" />
    </>
  );
}
