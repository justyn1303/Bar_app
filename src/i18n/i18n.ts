import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
//import ICU from "i18next-icu";
import { initReactI18next } from "react-i18next";
import en from "./translations/enEN";
import pl from "./translations/plPL";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en,
      pl,
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
export default i18n;
