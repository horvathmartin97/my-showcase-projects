import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Phone, MapPin, FacebookIcon } from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      value: "+36 30 341 9693",
      href: "tel:+36303419693",
    },
    {
      icon: <FacebookIcon className="w-6 h-6" />,
      title: "Facebook",
      value: "Szakáll Attila",
      href: "https://www.facebook.com/attila.szakall.5",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Cím",
      value: "Szaki Autókozmetika Baja",
      href: "https://maps.app.goo.gl/egkDe33b33LyE5Di8",
    },
  ];

  const contact = t("contact.contact");
  const subTitle = t("contact.subTitle");
  const contactUs = t("contact.contactUs");
  const paragraph = t("contact.paragraph");
  const openingTimes = t("contact.openingTimes");
  const openDays = t("contact.openDays");

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b bg-gray-200 to-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {contact}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subTitle}</p>
          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {contactUs}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">{paragraph}</p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-slate-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="shrink-0 p-3 bg-linear-to-br from-cyan-500 to-blue-600 text-white rounded-lg group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">
                      {info.title}
                    </p>
                    <p className="text-slate-900 font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-linear-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-200"
            >
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-cyan-600">📅</span> {openingTimes}
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">{openDays}</span>
                  <span className="font-semibold text-slate-900">
                    8:00 - 17:00
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[500px] lg:min-h-[600px]"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d319.08848428780635!2d18.957147298482358!3d46.204330860484355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47431f2475b82e59%3A0x5df1a458ccbb1b30!2sSzaki%20Aut%C3%B3kozmetika%20Baja!5e1!3m2!1sen!2shu!4v1765645271273!5m2!1sen!2shu"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Szaki Autókozmetika Baja helyszín"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
