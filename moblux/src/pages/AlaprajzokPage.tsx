import PageHero from '../components/PageHero';
import Plans from '../sections/Plans';
import SingleLevel70 from '../sections/SingleLevel70';

export default function AlaprajzokPage() {
  return (
    <>
      <PageHero
        eyebrow="MÉRETEZETT GYÁRTÓI ALAPRAJZOK"
        title={
          <>
            20, 30 és 40 lábas
            <br />
            <em className="text-gold-light">kinyitható kialakítások.</em>
          </>
        }
        lead="A gyártói kialakítások alapján újrarajzolt, egységes MOBLUX alaprajzok. A helyiségkiosztás és a felszereltség minden esetben egyedileg alakítható."
      />
      <Plans />
      <SingleLevel70 />
    </>
  );
}
