import { useState } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Kezdő Lovasoknak",
      description: "Alapoktól tanítunk, biztonságos környezetben.",
      icon: "🎓",
      price: "8.000 Ft / óra",
      features: [
        "Első lépések a lovak körül",
        "Helyes ülés és egyensúly",
        "Alapvető irányítás",
        "Biztonságos lovagolás",
        "Max 3-4 fős csoportok",
      ],
    },
    {
      id: 2,
      title: "Haladó Képzés",
      description: "Technika finomítás és versenyre felkészítés.",
      icon: "🏆",
      price: "12.000 Ft / óra",
      features: [
        "Díjlovaglás és ugrás",
        "Verseny előkészítés",
        "Egyéni fejlesztési terv",
        "Videó elemzés",
        "Egyéni órák",
      ],
      highlighted: true,
    },
    {
      id: 3,
      title: "Gyerek Tábor",
      description: "Nyári lovas táborok 6-14 éves korig.",
      icon: "⛺",
      price: "65.000 Ft / hét",
      features: [
        "Teljes ellátás",
        "Napi 2 lovaglás",
        "Lovaglás elméleti",
        "Lovak gondozása",
        "Max 8 fős csoportok",
      ],
    },
    {
      id: 4,
      title: "Terápiás Lovaglás",
      description: "Gyógyító hatású lovaglás speciális igényekhez.",
      icon: "💚",
      price: "Egyedi ajánlat",
      features: [
        "Gyógypedagógiai lovaglás",
        "Egyéni törődés",
        "Biztonságos terápiás lovak",
        "Szakképzett oktató",
        "Családi együttműködés",
      ],
    },
  ];

  return (
    <section className="relative py-20 bg-linear-to-b from-amber-50 to-orange-50 overflow-hidden">
      {/* Dekoratív elemek */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative container mx-auto px-4 z-10">
        {/* Fejléc */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-lg mb-2 block">
            MIT KÍNÁLOK
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">
            Szolgáltatások
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Válaszd ki a hozzád illő oktatási programot, és indulj el a lovaglás
            csodálatos világába!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                service.highlighted
                  ? "ring-4 ring-amber-500 scale-105 md:scale-110"
                  : ""
              }`}
              onClick={() =>
                setSelectedService(
                  selectedService === service.id ? null : service.id
                )
              }
            >
              {service.highlighted && (
                <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  NÉPSZERŰ
                </div>
              )}

              <div
                className={`p-6 pb-8 ${
                  service.highlighted
                    ? "bg-linear-to-br from-amber-500 to-orange-500"
                    : "bg-linear-to-br from-amber-400 to-amber-300"
                }`}
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm">{service.description}</p>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-amber-900">
                    {service.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-amber-500 mt-1">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-amber-900 hover:bg-amber-800 text-white font-semibold py-3 rounded-lg transition-colors duration-300">
                  Több infó
                </button>
              </div>

              {selectedService === service.id && (
                <div className="absolute inset-0 bg-black/90 p-6 flex flex-col justify-center items-center text-white animate-fadeIn">
                  <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                  <p className="text-center mb-4">{service.description}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(null);
                    }}
                    className="text-amber-400 hover:text-amber-300"
                  >
                    Bezárás
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-amber-900 mb-6">
              Miért válassz engem?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="text-4xl mb-3">🛡️</div>
                <h4 className="font-bold text-lg text-amber-900 mb-2">
                  Biztonság
                </h4>
                <p className="text-gray-600 text-sm">
                  Modern felszerelés és jól képzett lovak garantálják a
                  biztonságos tanulást.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">👨‍🏫</div>
                <h4 className="font-bold text-lg text-amber-900 mb-2">
                  Tapasztalat
                </h4>
                <p className="text-gray-600 text-sm">
                  15+ év szakmai gyakorlat és több száz elégedett tanuló.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold text-lg text-amber-900 mb-2">
                  Egyéni Figyelem
                </h4>
                <p className="text-gray-600 text-sm">
                  Minden tanítványra személyre szabott oktatási tervet
                  készítünk.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Ingyenes konzultáció kérése
          </a>
          <p className="mt-4 text-gray-600">
            Hívj most:{" "}
            <span className="font-bold text-amber-900">+36 30 123 4567</span>
          </p>
        </div>
      </div>
    </section>
  );
}
