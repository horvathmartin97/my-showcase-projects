import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Sparkles,
  Lightbulb,
  Shield,
  Disc,
  SprayCan,
  StarIcon,
  Award,
} from "lucide-react";

export default function Services() {
  const { t } = useTranslation();
  const titles = {
    mainTitle: t("services.mainTitle"),
    subTitle: t("services.subTitle"),
    cleaningTitle: t("services.cleaningTitle"),
    polishingTitle: t("services.polishingTitle"),
    headlightPolishingTitle: t("services.headlightPolishingTitle"),
    waxingTitle: t("services.waxingTitle"),
    wheelCleaningTitle: t("services.wheelCleaningTitle"),
    qualityTitle: t("services.qualityTitle"),
  };

  const servicesData = [
    {
      icon: <SprayCan className="w-8 h-8" />,
      title: t(titles.cleaningTitle),
      description: t("services.carCleaning"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: t(titles.polishingTitle),
      description: t("services.polishing"),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t(titles.headlightPolishingTitle),
      description: t("services.headlightPolishing"),
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t(titles.waxingTitle),
      description: t("services.waxing"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Disc className="w-8 h-8" />,
      title: t(titles.wheelCleaningTitle),
      description: t("services.wheelCleaning"),
      color: "from-red-500 to-rose-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t(titles.qualityTitle),
      description: t("services.qualityDescription"),
      color: " from-white to-purple-500",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {titles.mainTitle}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-bold">
            {titles.subTitle}
          </p>

          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-cyan-500/50"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-2 bg-linear-to-r ${service.color}`}
              />

              <div className="p-6 sm:p-8">
                <div
                  className={`inline-flex p-4 rounded-xl bg-linear-to-br ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
