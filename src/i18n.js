import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {  initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr","es"],
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie", "localStorage"],
    },
    backend: {
      loadPath: "/locale/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });