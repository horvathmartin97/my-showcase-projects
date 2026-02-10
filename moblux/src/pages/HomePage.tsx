import { motion } from "framer-motion";
import { useState } from "react";

// Típusok
interface ContainerModel {
  id: string;
  name: string;
  size: string;
  rooms: string;
  containers: number;
  image: string;
  price: string;
}

const HomePage = () => {
  const [selectedModel, setSelectedModel] = useState<ContainerModel | null>(
    null,
  );

  // Modellek adatai
  const models: ContainerModel[] = [
    {
      id: "1",
      name: "Studio 20",
      size: "20 m²",
      rooms: "1 szoba",
      containers: 1,
      image:
        "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800",
      price: "8.5M Ft",
    },
    {
      id: "2",
      name: "Family 40",
      size: "40 m²",
      rooms: "2 szoba",
      containers: 2,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      price: "14.9M Ft",
    },
    {
      id: "3",
      name: "Luxury Duo",
      size: "60 m²",
      rooms: "3 szoba",
      containers: 2,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      price: "22.5M Ft",
    },
  ];

  const features = [
    {
      icon: "♻️",
      title: "Fenntartható",
      description: "Újrahasznosított konténerek, minimális karbon lábnyom",
    },
    {
      icon: "⚡",
      title: "Gyors telepítés",
      description: "2-3 hónap alatt költözhető állapot",
    },
    {
      icon: "💰",
      title: "Költséghatékony",
      description: "Fix árazás, átlátható kalkuláció",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-black text-gray-100">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-yellow-400 via-yellow-200 to-gray-300 bg-clip-text text-transparent">
            Modern Konténerházak
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Fenntartható otthonok a jövőnek – stílusos, költséghatékony,
            környezetbarát
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-linear-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-shadow"
              onClick={() =>
                document
                  .getElementById("models")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Modellek megtekintése
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-800 border-2 border-gray-600 text-gray-100 font-semibold rounded-lg hover:border-yellow-500 transition-colors"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Árajánlat kérése
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-yellow-400"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-linear-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
              Miért konténerház?
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-gray-400 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="models" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent">
              Modelljeink
            </h2>
            <p className="text-gray-400 text-lg">
              Válaszd ki az igényeidnek megfelelő otthont
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <motion.div
                key={model.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all cursor-pointer group"
                onClick={() => setSelectedModel(model)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold text-sm">
                    {model.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-yellow-400">
                    {model.name}
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <p className="flex items-center gap-2">
                      <span className="text-gray-500">📐</span> {model.size}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-gray-500">🏠</span> {model.rooms}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-gray-500">📦</span>{" "}
                      {model.containers} konténer
                    </p>
                  </div>
                  <button className="mt-4 w-full py-2 bg-gray-800 text-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors font-semibold">
                    Részletek
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-linear-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-300">
              Galéria
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800",
              "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
              "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
              "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800",
            ].map((img, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative h-64 md:h-80 overflow-hidden rounded-lg cursor-pointer group"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 px-4 bg-linear-to-b from-gray-900 to-black"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
              Készen állsz az álmaid otthonára?
            </h2>
            <p className="text-gray-400 text-lg">
              Kérj ingyenes konzultációt és árajánlatot
            </p>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Név"
                className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-500 focus:outline-none text-gray-100 placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-500 focus:outline-none text-gray-100 placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Telefonszám"
                className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-500 focus:outline-none text-gray-100 placeholder-gray-500"
              />
            </div>
            <div>
              <select className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-500 focus:outline-none text-gray-100">
                <option value="">Milyen modell érdekel?</option>
                {models.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name} - {model.price}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <textarea
                placeholder="Üzenet (opcionális)"
                rows={4}
                className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-500 focus:outline-none text-gray-100 placeholder-gray-500"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-linear-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-shadow"
            >
              Ingyenes konzultáció kérése
            </motion.button>
          </motion.form>
        </div>
      </section>

      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-yellow-400 to-gray-300 bg-clip-text text-transparent">
            ContainerHomes
          </h3>
          <div className="flex justify-center gap-6 mb-6 text-gray-400">
            <a
              href="mailto:info@example.com"
              className="hover:text-yellow-400 transition-colors"
            >
              info@containerhomes.hu
            </a>
            <span>|</span>
            <a
              href="tel:+36301234567"
              className="hover:text-yellow-400 transition-colors"
            >
              +36 30 123 4567
            </a>
          </div>
          <div className="flex justify-center gap-4 mb-6">
            {["facebook", "instagram", "linkedin"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors"
              >
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5 bg-gray-400 rounded-full" />
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 ContainerHomes. Minden jog fenntartva. |{" "}
            <a href="#" className="hover:text-yellow-400">
              ÁSZF
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-yellow-400">
              Adatvédelem
            </a>
          </p>
        </div>
      </footer>

      {selectedModel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={() => setSelectedModel(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 rounded-lg max-w-2xl w-full p-8 border border-yellow-500"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-3xl font-bold text-yellow-400">
                {selectedModel.name}
              </h3>
              <button
                onClick={() => setSelectedModel(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <img
              src={selectedModel.image}
              alt={selectedModel.name}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="space-y-3 text-gray-300">
              <p>
                <strong className="text-yellow-400">Alapterület:</strong>{" "}
                {selectedModel.size}
              </p>
              <p>
                <strong className="text-yellow-400">Szobák:</strong>{" "}
                {selectedModel.rooms}
              </p>
              <p>
                <strong className="text-yellow-400">Konténerek:</strong>{" "}
                {selectedModel.containers} db
              </p>
              <p>
                <strong className="text-yellow-400">Ár:</strong>{" "}
                {selectedModel.price}
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedModel(null);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-6 w-full py-3 bg-linear-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-shadow"
            >
              Árajánlat kérése ehhez a modellhez
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default HomePage;
