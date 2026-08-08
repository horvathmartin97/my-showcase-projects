import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";

interface ContainerModel {
  id: string;
  name: string;
  size: string;
  rooms: string;
  containers: number;
  image: string;
  price: string;
  description: string;
}

const HomePage = () => {
  const [selectedModel, setSelectedModel] = useState<ContainerModel | null>(
    null,
  );

  const models: ContainerModel[] = [
    {
      id: "1",
      name: "Studio 20",
      size: "20 m²",
      rooms: "1 szoba",
      containers: 1,
      image:
        "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=1200",
      price: "8,5 M Ft-tól",
      description:
        "Kompakt és átgondolt otthon egy személy vagy pár számára. Ideális hétvégi háznak, vendégháznak vagy első önálló otthonnak.",
    },
    {
      id: "2",
      name: "Family 40",
      size: "40 m²",
      rooms: "2 szoba",
      containers: 2,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      price: "14,9 M Ft-tól",
      description:
        "Praktikus alaprajz kényelmes közös terekkel és elkülönített hálószobával. Jó kiindulópont a mindennapi élethez.",
    },
    {
      id: "3",
      name: "Duo 60",
      size: "60 m²",
      rooms: "3 szoba",
      containers: 2,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      price: "22,5 M Ft-tól",
      description:
        "Tágasabb, családok számára tervezett modell. Világos belső terek, rugalmas kialakítás és prémium komfortérzet.",
    },
  ];

  const features = [
    {
      number: "01",
      title: "Egyszerű folyamat",
      description:
        "Az első egyeztetéstől a megvalósításig átlátható és jól követhető lépésekben haladunk.",
    },
    {
      number: "02",
      title: "Rugalmas terek",
      description:
        "Az alaprajz, a belső kialakítás és a felszereltség a te életviteledhez igazítható.",
    },
    {
      number: "03",
      title: "Természetközeli szemlélet",
      description:
        "Olyan otthonokban gondolkodunk, amelyek illeszkednek a telekhez és a környezetükhöz.",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
    "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f5ef] text-[#24382b]">
      <main>
        <section className="relative min-h-[780px] overflow-hidden pt-20">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=2200"
            alt="Modern, természetközeli otthon"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3025]/85 via-[#1e3025]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3025]/45 via-transparent to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="relative z-10 mx-auto flex min-h-[700px] max-w-7xl items-end px-6 pb-24 lg:px-8"
          >
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#dce8cf]">
                Moduláris otthonok
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-white md:text-7xl">
                Otthon, amely
                <span className="block text-[#dce8cf]">együtt él veled.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                Letisztult terek, átgondolt részletek és természetes
                anyaghasználat. Ismerd meg a NATURA HOME moduláris otthonait.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link to="/modellek">
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#f7f5ef] px-7 py-4 font-semibold text-[#2d4736] transition hover:bg-white"
                  >
                    Modellek felfedezése
                  </motion.span>
                </Link>

                <Link to="/kapcsolat">
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/50 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                  >
                    Konzultáció kérése
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-8 right-6 z-10 hidden text-right text-sm text-white/65 lg:right-8 lg:block">
            <p>Természetes formák.</p>
            <p>Átgondolt otthonok.</p>
          </div>
        </section>

        <section className="bg-[#f7f5ef] py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bb7050]">
                NATURA HOME szemlélet
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] text-[#24382b] md:text-5xl">
                A kisebb alapterület is lehet teljes értékű otthon.
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col justify-end"
            >
              <p className="max-w-2xl text-xl leading-9 text-[#526357]">
                Hiszünk abban, hogy az otthon minőségét nem csak a mérete
                határozza meg. A jól átgondolt tér, a természetes fény és a
                valódi igényekhez igazodó kialakítás sokkal többet számít.
              </p>

              <Link
                to="/rolunk"
                className="mt-8 inline-flex w-fit items-center gap-2 border-b border-[#2d4736] pb-1 text-sm font-semibold text-[#2d4736] transition hover:border-[#bb7050] hover:text-[#bb7050]"
              >
                Ismerd meg a szemléletünket
                <span>→</span>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#e5e9df] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bb7050]">
                Miért NATURA HOME?
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-[#24382b] md:text-5xl">
                Egyszerűbb út egy jól működő otthonhoz.
              </h2>
            </motion.div>

            <div className="mt-14 grid gap-px overflow-hidden border border-[#2d4736]/10 bg-[#2d4736]/10 md:grid-cols-3">
              {features.map((feature, index) => (
                <motion.article
                  key={feature.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#f7f5ef] p-8 md:p-10"
                >
                  <p className="text-sm font-bold text-[#bb7050]">
                    {feature.number}
                  </p>

                  <h3 className="mt-14 text-2xl font-semibold text-[#24382b]">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#526357]">
                    {feature.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f5ef] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between gap-6 border-b border-[#24382b]/15 pb-10 md:flex-row md:items-end"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bb7050]">
                  Modellválaszték
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-[#24382b] md:text-5xl">
                  Találd meg a megfelelő kiindulópontot.
                </h2>
              </div>

              <p className="max-w-sm leading-7 text-[#526357]">
                Alapmodellek, amelyekből a saját otthonod formálható.
              </p>
            </motion.div>

            <div className="mt-8">
              {models.map((model, index) => (
                <motion.article
                  key={model.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group grid gap-6 border-b border-[#24382b]/15 py-8 md:grid-cols-[190px_1fr_auto] md:items-center"
                >
                  <div className="h-44 overflow-hidden bg-[#2d4736] md:h-32">
                    <img
                      src={model.image}
                      alt={`${model.name} konténerház`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-[#bb7050]">
                        0{index + 1}
                      </span>

                      <span className="text-sm text-[#6d7e70]">
                        {model.containers} konténeres kialakítás
                      </span>
                    </div>

                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#24382b]">
                      {model.name}
                    </h3>

                    <p className="mt-2 text-[#526357]">
                      {model.size} · {model.rooms}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 md:items-end">
                    <p className="text-lg font-semibold text-[#2d4736]">
                      {model.price}
                    </p>

                    <button
                      onClick={() => setSelectedModel(model)}
                      className="border-b border-[#2d4736] pb-1 text-sm font-semibold text-[#2d4736] transition hover:border-[#bb7050] hover:text-[#bb7050]"
                    >
                      Modell részletei →
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">
              <p className="max-w-2xl text-sm leading-6 text-[#6d7e70]">
                A feltüntetett árak tájékoztató jellegű induló árak. A végleges
                ár a választott kialakítástól, műszaki tartalomtól és a telek
                adottságaitól is függ.
              </p>

              <Link
                to="/modellek"
                className="w-fit rounded-full border border-[#2d4736]/20 px-5 py-3 text-sm font-semibold text-[#2d4736] transition hover:border-[#2d4736] hover:bg-[#2d4736] hover:text-white"
              >
                Összes modell
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#2d4736] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#dce8cf]">
                  Inspiráció
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">
                  Terek, amelyekhez jó hazatérni.
                </h2>
              </div>

              <Link
                to="/galeria"
                className="w-fit border-b border-[#dce8cf] pb-1 text-sm font-semibold text-[#dce8cf] transition hover:border-white hover:text-white"
              >
                Galéria megtekintése →
              </Link>
            </motion.div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="h-[500px] overflow-hidden md:row-span-2"
              >
                <img
                  src={galleryImages[0]}
                  alt="Világos, modern enteriőr"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {galleryImages.slice(1).map((image, index) => (
                <motion.div
                  key={image}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-60 overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`NATURA HOME galéria ${index + 2}`}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#bb7050] py-20 text-white">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 lg:flex-row lg:items-end lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Az első lépés
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] md:text-6xl">
                Van egy telked vagy egy elképzelésed?
                <br />
                Beszéljünk róla.
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+36301234567"
                className="rounded-full bg-white px-6 py-4 text-center font-semibold text-[#2d4736] transition hover:bg-[#f7f5ef]"
              >
                +36 30 123 4567
              </a>

              <Link
                to="/kapcsolat"
                className="rounded-full border border-white/60 px-6 py-4 text-center font-semibold transition hover:bg-white/10"
              >
                Kapcsolatfelvétel
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#24382b] py-12 text-[#dce8cf]/70">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-end lg:px-8">
          <div>
            <p className="text-xl font-semibold tracking-tight text-white">
              NATURA HOME
            </p>

            <p className="mt-3 max-w-sm text-sm leading-6">
              Moduláris otthonok, amelyek a természetesebb és egyszerűbb
              mindennapokhoz igazodnak.
            </p>
          </div>

          <div className="text-sm md:text-right">
            <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
              <Link to="/rolunk" className="transition hover:text-white">
                Rólunk
              </Link>
              <Link to="/galeria" className="transition hover:text-white">
                Galéria
              </Link>
              <Link to="/kapcsolat" className="transition hover:text-white">
                Kapcsolat
              </Link>
              <a href="#" className="transition hover:text-white">
                Adatvédelem
              </a>
            </div>

            <p className="mt-4">© 2026 NATURA HOME. Minden jog fenntartva.</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedModel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedModel(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#24382b]/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 16 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-[#f7f5ef] shadow-2xl"
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedModel.image}
                  alt={`${selectedModel.name} konténerház`}
                  className="h-full w-full object-cover"
                />

                <button
                  onClick={() => setSelectedModel(null)}
                  aria-label="Bezárás"
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f5ef] text-2xl text-[#24382b] transition hover:bg-[#2d4736] hover:text-white"
                >
                  ×
                </button>
              </div>

              <div className="p-7 md:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bb7050]">
                  NATURA HOME modell
                </p>

                <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row">
                  <div>
                    <h3 className="text-4xl font-semibold tracking-[-0.035em] text-[#24382b]">
                      {selectedModel.name}
                    </h3>

                    <p className="mt-4 max-w-lg leading-7 text-[#526357]">
                      {selectedModel.description}
                    </p>
                  </div>

                  <p className="whitespace-nowrap text-xl font-semibold text-[#2d4736]">
                    {selectedModel.price}
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 border-y border-[#24382b]/15 py-6">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#6d7e70]">
                      Alapterület
                    </p>
                    <p className="mt-2 font-semibold text-[#24382b]">
                      {selectedModel.size}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#6d7e70]">
                      Elrendezés
                    </p>
                    <p className="mt-2 font-semibold text-[#24382b]">
                      {selectedModel.rooms}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#6d7e70]">
                      Konténerek
                    </p>
                    <p className="mt-2 font-semibold text-[#24382b]">
                      {selectedModel.containers} db
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <a
                    href="tel:+36301234567"
                    className="bg-[#2d4736] px-5 py-3.5 text-center font-semibold text-white transition hover:bg-[#3c5b46]"
                  >
                    Telefonos egyeztetés
                  </a>

                  <Link
                    to="/kapcsolat"
                    onClick={() => setSelectedModel(null)}
                    className="border border-[#2d4736]/25 px-5 py-3.5 text-center font-semibold text-[#2d4736] transition hover:border-[#2d4736] hover:bg-[#e5e9df]"
                  >
                    Konzultáció kérése
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
