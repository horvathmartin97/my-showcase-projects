import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CheckCircle, Award, Star } from "lucide-react";

export default function AboutMe() {
  const { t } = useTranslation();

  const features = [
    { icon: <Award className="w-5 h-5" />, text: "7 év tapasztalat" },
    { icon: <Star className="w-5 h-5" />, text: "Prémium minőség" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Garantált eredmény" },
  ];

  return (
    <section
      id="about_me"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-xl bg-slate-800 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-6xl sm:text-8xl mb-4">🚗</div>
                  <p className="text-cyan-400 font-bold text-xl">
                    Szaki Autókozmetika
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3"
              >
                {t("aboutMe.title")}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg sm:text-xl text-cyan-400 font-medium"
              >
                {t("aboutMe.subTitle")}
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 leading-relaxed text-base sm:text-lg"
            >
              {t("aboutMe.mainSection")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-colors"
                >
                  <div className="text-cyan-400">{feature.icon}</div>
                  <span className="text-slate-200 font-medium text-sm">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
              >
                Időpontfoglalás
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
