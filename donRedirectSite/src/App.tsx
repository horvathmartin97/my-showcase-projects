import donBociLogo from "./assets/donbociLogo.jpg";
import donPipiLogo from "./assets/don_pipi_logo_hatter_nelkul_szines (2).png";
import { ArrowLeftRight, Clock, Facebook, MapPin, Phone } from "lucide-react";
import StarRating from "./components/starRating";

type Restaurant = {
  id: number;
  image: string;
  address: string;
  name: string;
  link: string;
  color: string;
  badge: string;
  facebook: string;
  tel?: string;
  rating?: number;
  openingHours: string;
};

const links: Restaurant[] = [
  {
    id: 1,
    image: donBociLogo,
    address: "6500 Baja, Kossuth Lajos utca 12",
    name: "DonBoci",
    link: "https://order.site/donboci/hu/hun/baja/restaurant/donboci-baja-sf",
    color: "from-orange-500 to-red-600",
    badge: "Burger & Döner",
    facebook: "https://www.facebook.com/profile.php?id=61568852720058",
    rating: 4.9,
    openingHours: "Hé-Szo, 10:30-20:00",
  },
  {
    id: 2,
    image: donPipiLogo,
    address: "6500 Baja, Szenes utca 7",
    name: "DonPipi",
    link: "https://order.site/donpipi/hu/hun/baja/restaurant/donpipi-sf",
    color: "from-yellow-400 to-orange-500",
    badge: "Csirke specialitások",
    facebook: "https://www.facebook.com/Donpipibaja",
    tel: "+36703500777",
    rating: 4.8,
    openingHours: "Ke-Szo, 11:00 - 20:00",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] px-4 py-16 sm:px-6 lg:px-8 ">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
          Online rendelés · Baja
        </p>
        <h1 className="text-5xl font-bold text-white sm:text-6xl">
          Don<span className="text-orange-500">.</span>
        </h1>
        <p className="mt-4 text-base text-white/50">
          Válassz az éttermeink közül és rendeld meg kedvenc ételed.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {links.map((r) => (
          <a
            key={r.id}
            href={r.link}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-[#141414] ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <div className={`h-1 w-full bg-linear-to-r ${r.color}`} />

            <div className="flex items-center justify-center bg-[#1a1a1a] py-10">
              <div className={`relative`}>
                <div
                  className={`absolute inset-0 scale-110 rounded-full bg-linear-to-br ${r.color} opacity-0 blur-2xl transition duration-500 group-hover:opacity-30`}
                />
                <img
                  src={r.image}
                  alt={`${r.name} logo`}
                  className="relative h-24 w-24 rounded-2xl object-contain"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between px-6 pb-6 pt-4">
              <div>
                <span
                  className={`inline-block rounded-full bg-linear-to-r ${r.color} px-3 py-0.5 text-xs font-semibold text-white`}
                >
                  {r.badge}
                </span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">
                  {r.name}
                </h2>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-white/50">
                  <MapPin className="" />
                  {r.address}
                </p>
                <a
                  target="_blank"
                  href={r.facebook}
                  className="mt-1  flex items-center gap-1 text-sm text-red-400 underline font-bold "
                >
                  <Facebook /> Kövesd akcióinkat Facebookon !
                </a>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-white/50">
                  <Clock /> {r.openingHours}
                </p>
                {r.tel && (
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-white/50">
                    <Phone /> <a href="tel:+36703500777">+36703500777 </a>
                  </div>
                )}
                {r.rating && (
                  <div className="mt-2">
                    <StarRating rating={r.rating} />
                  </div>
                )}
              </div>

              <div
                className={`mt-6 flex items-center justify-between rounded-2xl bg-linear-to-r ${r.color} px-5 py-3 transition-opacity group-hover:opacity-95`}
              >
                <span className="text-sm font-semibold text-white">
                  Rendelés indítása
                </span>
                <ArrowLeftRight className="text-white" />
              </div>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-16 text-center text-xs text-gray-400">
        © Don Restaurants · Baja | Developed by{" "}
        <a
          className=" text-gray-500 underline"
          href="https://github.com/horvathmartin97"
        >
          Martin Horváth
        </a>
      </p>
    </div>
  );
}
