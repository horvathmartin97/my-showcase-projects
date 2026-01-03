import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    if (form.current) {
      try {
        await emailjs.sendForm(
          "service_wt8hqha",
          "template_as74g0b",
          form.current,
          "YI32jiBYW8Va7qcXX"
        );

        setSubmitStatus("success");
        form.current.reset();

        setTimeout(() => setSubmitStatus("idle"), 5000);
      } catch (error) {
        console.error("EmailJS hiba:", error);
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-linear-to-b from-white to-amber-50 overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-amber-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2"></div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-lg mb-2 block">
            LÉPJ KAPCSOLATBA
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">
            Időpontfoglalás
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Töltsd ki az alábbi űrlapot és hamarosan felvesszük veled a
            kapcsolatot!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">
                Elérhetőségek
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">Telefon</h4>
                    <a
                      href="tel:+36301234567"
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      +36 30 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">Email</h4>
                    <a
                      href="mailto:info@lovasakademia.hu"
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      info@lovasakademia.hu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">Cím</h4>
                    <p className="text-gray-600">
                      1234 Budapest
                      <br />
                      Példa utca 12.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">
                      Nyitvatartás
                    </h4>
                    <p className="text-gray-600">
                      Hétfő - Péntek: 8:00 - 18:00
                      <br />
                      Szombat: 9:00 - 14:00
                      <br />
                      Vasárnap: Zárva
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-linear-to-br from-amber-400 to-amber-500 rounded-xl p-6 text-white">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-2xl font-bold">24h</div>
                <div className="text-sm opacity-90">Válaszidő</div>
              </div>
              <div className="bg-linear-to-br from-orange-400 to-orange-500 rounded-xl p-6 text-white">
                <div className="text-3xl mb-2">🎁</div>
                <div className="text-2xl font-bold">Ingyenes</div>
                <div className="text-sm opacity-90">Próbaóra</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">
              Kérj visszahívást
            </h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Teljes név *
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Kovács János"
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email cím *
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="kovacs.janos@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="user_phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Telefonszám *
                </label>
                <input
                  type="tel"
                  id="user_phone"
                  name="user_phone"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="+36 30 123 4567"
                />
              </div>

              <div>
                <label
                  htmlFor="service_type"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Melyik szolgáltatás érdekel?
                </label>
                <select
                  id="service_type"
                  name="service_type"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="">Válassz...</option>
                  <option value="kezdo">Kezdő Lovasoknak</option>
                  <option value="halado">Haladó Képzés</option>
                  <option value="tabor">Gyerek Tábor</option>
                  <option value="terapias">Terápiás Lovaglás</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Üzenet / Kérdés
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Írj nekünk, miben segíthetünk..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-bold text-white text-lg transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-amber-600 hover:bg-amber-700 hover:shadow-lg hover:scale-105"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Küldés...
                  </span>
                ) : (
                  "📧 Üzenet küldése"
                )}
              </button>

              {submitStatus === "success" && (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 text-center animate-fadeIn">
                  <div className="text-3xl mb-2">✅</div>
                  <p className="text-green-800 font-semibold">
                    Köszönjük az üzeneted!
                  </p>
                  <p className="text-green-600 text-sm mt-1">
                    Hamarosan felvesszük veled a kapcsolatot.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 text-center animate-fadeIn">
                  <div className="text-3xl mb-2">❌</div>
                  <p className="text-red-800 font-semibold">Hiba történt!</p>
                  <p className="text-red-600 text-sm mt-1">
                    Kérjük próbáld újra, vagy hívj minket telefonon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
