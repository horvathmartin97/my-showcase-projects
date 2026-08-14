import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import de from "./locales/de.json";
import en from "./locales/en.json";
import hu from "./locales/hu.json";

const savedLanguage = localStorage.getItem("moblux-language");

i18n.use(initReactI18next).init({
  resources: {
    hu: { translation: hu },
    en: { translation: en },
    de: { translation: de },
  },
  lng: savedLanguage || "hu",
  fallbackLng: "hu",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
