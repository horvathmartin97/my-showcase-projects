import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import bmwFront from "../assets/bmwIx/bmwIxfront.jpeg";
import bmwInterior1 from "../assets/bmwIx/bmwIxInterior1.jpeg";
import bmwInterior2 from "../assets/bmwIx/bmwIxInterior2.jpeg";
import bmwInterior3 from "../assets/bmwIx/bmwIxInterior3.jpeg";
import bmwLeftSide from "../assets/bmwIx/bmwIxLeftSide.jpeg";
import bmwLeftWheel from "../assets/bmwIx/bmwIxLeftWheel.jpeg";
import sangYongFront from "../assets/sangYongRexton/sangYongFront.jpeg";
import sangYongInterior1 from "../assets/sangYongRexton/sangYongInterior1.jpeg";
import sangYongInterior2 from "../assets/sangYongRexton/sangYongInterior2.jpeg";
import sangYongInterior3 from "../assets/sangYongRexton/sangYongInterior3.jpeg";
import sangYongInterior4 from "../assets/sangYongRexton/sangYongInterior4.jpeg";
import sangYongInterior5 from "../assets/sangYongRexton/sangYongInterior5.jpeg";
import toyotaRav4Back from "../assets/toyotaRav4/back.jpeg";
import toyotaRav4Front from "../assets/toyotaRav4/front.jpeg";
import toyotaRav4Front2 from "../assets/toyotaRav4/front2.jpeg";
import toyotaRav4Interior1 from "../assets/toyotaRav4/interior1.jpeg";
import toyotaRav4Interior2 from "../assets/toyotaRav4/interior2.jpeg";
import toyotaRav4Interior3 from "../assets/toyotaRav4/interior3.jpeg";
import toyotaRav4Interior4 from "../assets/toyotaRav4/interior4.jpeg";
import toyotaRav4Interior5 from "../assets/toyotaRav4/interior5.jpeg";
import fordFiestaFront1 from "../assets/fordFiesta/front.jpeg";
import fordFiestaFront2 from "../assets/fordFiesta/front2.jpeg";
import fordFiestaInterior1 from "../assets/fordFiesta/interior1.jpeg";
import fordFiestaInterior2 from "../assets/fordFiesta/interior2.jpeg";
import fordFiestaInterior3 from "../assets/fordFiesta/interior3.jpeg";
import fordFiestaInterior4 from "../assets/fordFiesta/interior4.jpeg";
import toyotaYarisFront from "../assets/toyotaYaris/toyotaYarisFront.jpeg";
import toyotaYarisFront2 from "../assets/toyotaYaris/toyotaYarisFront2.jpeg";
import toyotaYarisBack from "../assets/toyotaYaris/toyotaYarisBack.jpeg";
import toyotaYarisBack2 from "../assets/toyotaYaris/toyotaYarisBack2.jpeg";
import toyotaYarisInterior1 from "../assets/toyotaYaris/toyotaYarisInterior1.jpeg";
import toyotaYarisInterior2 from "../assets/toyotaYaris/toyotaYarisInterior2.jpeg";
import toyotaYarisBackDoor from "../assets/toyotaYaris/toyotaYarisBackDoor.jpeg";
import passatInterior1 from "../assets/vwPassatVIII/passatInterior1.jpeg";
import passatInterior2 from "../assets/vwPassatVIII/passatInterior2.jpeg";
import passatInterior3 from "../assets/vwPassatVIII/passatInterior3.jpeg";
import passatInterior4 from "../assets/vwPassatVIII/passatInterior4.jpeg";
import passatTrunk from "../assets/vwPassatVIII/passatTrunk.jpeg";
import mercedes1 from "../assets/mercedesGLC/0EBD41E8-8A22-4FE8-A86E-230F213B1043_1_105_c.jpeg";
import mercedes2 from "../assets/mercedesGLC/14BC9ADF-6A13-4AA0-BD8E-582938EDAEB3_1_105_c.jpeg";
import mercedes3 from "../assets/mercedesGLC/16F5A986-3AE1-477B-AE9D-4A7E2A80857E_1_105_c.jpeg";
import mercedes4 from "../assets/mercedesGLC/31720155-1DB3-44B2-8351-D244CCE22713_1_105_c.jpeg";
import mercedes5 from "../assets/mercedesGLC/62DE7196-7CCD-40F7-B1AA-B57F2D8C6390_1_105_c.jpeg";
import mercedes6 from "../assets/mercedesGLC/D8C09AB2-F8A3-4011-ACA6-CADEF5C9454E_1_105_c.jpeg";
import { useTranslation } from "react-i18next";

interface CarGallery {
  carName: string;
  images: string[];
}

export default function MyJobs() {
  const { t } = useTranslation();
  const [selectedCar, setSelectedCar] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const carGalleries: CarGallery[] = [
    {
      carName: "BMW IX",
      images: [
        bmwFront,
        bmwLeftSide,
        bmwInterior1,
        bmwInterior2,
        bmwInterior3,
        bmwLeftWheel,
      ],
    },
    {
      carName: "SangYong Rexton",
      images: [
        sangYongFront,
        sangYongInterior1,
        sangYongInterior2,
        sangYongInterior3,
        sangYongInterior4,
        sangYongInterior5,
      ],
    },
    {
      carName: "Toyota Rav 4",
      images: [
        toyotaRav4Front,
        toyotaRav4Front2,
        toyotaRav4Back,
        toyotaRav4Interior1,
        toyotaRav4Interior2,
        toyotaRav4Interior3,
        toyotaRav4Interior4,
        toyotaRav4Interior5,
      ],
    },
    {
      carName: "Ford Fiesta",
      images: [
        fordFiestaFront1,
        fordFiestaFront2,
        fordFiestaInterior1,
        fordFiestaInterior2,
        fordFiestaInterior3,
        fordFiestaInterior4,
      ],
    },
    {
      carName: "Toyota Yaris",
      images: [
        toyotaYarisFront,
        toyotaYarisFront2,
        toyotaYarisBack,
        toyotaYarisBack2,
        toyotaYarisBackDoor,
        toyotaYarisInterior1,
        toyotaYarisInterior2,
      ],
    },
    {
      carName: "VolksWagen Passat VIII",
      images: [
        passatInterior1,
        passatInterior2,
        passatInterior3,
        passatInterior4,
        passatTrunk,
      ],
    },
    {
      carName: "Mercedes-Benz GLC",
      images: [
        mercedes1,
        mercedes2,
        mercedes3,
        mercedes4,
        mercedes5,
        mercedes6,
      ],
    },
  ];

  const currentGallery = carGalleries[selectedCar];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentGallery.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentGallery.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleCarChange = (index: number) => {
    setSelectedCar(index);
    setCurrentImageIndex(0);
  };

  const carSelector = t("my_jobs.carSelector");
  const jobs = t("my_jobs.jobs");
  const previousJobs = t("my_jobs.previousJobs");

  return (
    <section
      id="my_jobs"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b bg-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {jobs}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {previousJobs}
          </p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 max-w-md mx-auto"
        >
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            {carSelector}
          </label>
          <select
            value={selectedCar}
            onChange={(e) => handleCarChange(Number(e.target.value))}
            className="w-auto px-4 py-3 bg-white border-2 border-slate-300 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer shadow-sm hover:border-slate-400"
          >
            {carGalleries.map((gallery, index) => (
              <option key={index} value={index}>
                {gallery.carName}
              </option>
            ))}
          </select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
        >
          <div className="relative aspect-video bg-slate-900 ">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${selectedCar}-${currentImageIndex}`}
                src={currentGallery.images[currentImageIndex]}
                alt={`${currentGallery.carName} - ${currentImageIndex + 1}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className=" w-full h-full object-cover cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              />
            </AnimatePresence>

            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Előző kép"
            >
              <ChevronLeft className="w-6 h-6 text-slate-900" />
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Következő kép"
            >
              <ChevronRight className="w-6 h-6 text-slate-900" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 text-white rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {currentGallery.images.length}
            </div>
          </div>

          <div className="p-4 bg-gray-200">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {currentGallery.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all  ${
                    index === currentImageIndex
                      ? "border-cyan-500 scale-105 shadow-lg"
                      : "border-slate-300 hover:border-slate-400"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setIsLightboxOpen(false)}
            >
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <motion.img
                src={currentGallery.images[currentImageIndex]}
                alt={currentGallery.carName}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
