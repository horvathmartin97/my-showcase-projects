import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationDE from "./src/locales/de/translationDE.json";
import translationHU from "./src/locales/hu/translationHU.json";

const resources = {
  de: { translation: translationDE },
  hu: { translation: translationHU },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "hu",
  fallbackLng: "de",

  interpolation: {
    escapeValue: false,
  },
});
