import SectionHead from '../components/SectionHead';
import { ZoomImage } from '../components/Zoom';
import { IMAGES } from '../lib/assets';

const PHOTOS = [
  { src: IMAGES.apple40Lakeside, alt: 'Apple Cabin 40 rendezett, kavicsos udvarban', span: 'row-span-2' },
  { src: IMAGES.apple40Forest, alt: 'Apple Cabin 40 hétköznapi vidéki telken', span: 'col-span-2' },
  { src: IMAGES.apple40Kitchen, alt: 'Apple Cabin felszerelt konyhája' },
  { src: IMAGES.apple40Bathroom, alt: 'Apple Cabin komplett fürdőszobája' },
  { src: IMAGES.apple40InteriorHall, alt: 'Apple Cabin hosszanti belső tere és panorámaüvegezése', span: 'col-span-2' },
  { src: IMAGES.apple40Storage, alt: 'Apple Cabin beépített tárolója' },
  { src: IMAGES.apple40BathroomShower, alt: 'Apple Cabin üveg zuhanykabinja' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="pad bg-white">
      <SectionHead
        eyebrow="A NAGYOBB, 40 LÁBAS KIVITEL"
        title="Apple Cabin 40 kívül és belül"
        lead="Kattintson bármelyik képre a részletekért."
      />

      <div className="grid auto-rows-[250px] grid-cols-4 gap-[9px] max-sm:auto-rows-[185px] max-sm:grid-cols-2">
        {PHOTOS.map((photo) => (
          <ZoomImage key={photo.src} src={photo.src} alt={photo.alt} className={photo.span ?? ''} />
        ))}
      </div>

      <p className="note">
        A két kültéri környezetet bemutató kép illusztráció; a galéria további fotói a 40 lábas modell
        valódi belső részleteit mutatják.
      </p>
    </section>
  );
}
