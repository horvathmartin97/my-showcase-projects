import PageHero from '../components/PageHero';
import OfficeSolutions from '../sections/OfficeSolutions';

export default function IrodaiPage() {
  return (
    <>
      <PageHero
        eyebrow="MOBIL IRODAI MEGOLDÁSOK"
        title={
          <>
            Egy irodától
            <br />
            <em className="text-gold-light">a teljes konténerparkig.</em>
          </>
        }
        lead="20 és 40 lábas modulokból kialakított irodakonténerek, többszintes irodaépületek és komplett telephelyi konténerparkok."
        cta={{ label: 'Projektajánlatot kérek →', to: '/ajanlatkeres' }}
      />
      <OfficeSolutions />
    </>
  );
}
