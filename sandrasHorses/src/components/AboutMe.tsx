import { useState } from "react";
import img4 from "../assets/img4.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img1 from "../assets/img1.jpg";

export default function AboutMe() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  const images = [img2, img3, img4];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightBoxOpen(true);
  };

  const closeLightbox = () => setIsLightBoxOpen(false);
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Rólam
            </h2>
            <div className="h-1 bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-amber-500 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
            <img
              src={img1}
              alt="Oktató"
              className="relative rounded-2xl shadow-2xl w-full h-125 object-cover border-4 border-white"
            />
          </div>
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-amber-900 mb-6 flex items-center gap-3">
              <span className="text-5xl">🏇</span>
              Szenvedélyem a lovaglás
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Több mint X éve foglalkozom lovas oktatással. Célom, hogy minden
              tanítványom megtalálja az összhangot a lovakkal, és biztonságos,
              tudatos lovasként fejlődjön.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Kezdőktől haladókig minden szinten oktatok, és különös figyelmet
              fordítok a helyes ülésre, kommunikációra és a ló-lovas
              kapcsolatra.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-amber-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">X</div>
                <div className="text-sm text-gray-600">Év tapasztalat</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">X</div>
                <div className="text-sm text-gray-600">Tanítványom</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">100%</div>
                <div className="text-sm text-gray-600">Elkötelezettség</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Galéria
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                  index % 2 === 0 ? "md:mt-8" : ""
                }`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`Galéria ${index + 1}`}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-white font-semibold">Nagyítás</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isLightBoxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-amber-500 transition-colors"
          >
            &times;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white text-5xl hover:text-amber-500 transition-colors"
          >
            &#8249;
          </button>

          <img
            src={images[currentImageIndex]}
            alt={`Nagyított kép ${currentImageIndex + 1}`}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white text-5xl hover:text-amber-500 transition-colors"
          >
            &#8250;
          </button>

          <div className="absolute bottom-4 text-white text-lg bg-black/50 px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
