import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// translation files
import en1 from './translations/en/common.json';
import en2 from './translations/en/landing.json';
import nb1 from './translations/no/common.json';

const locales = getLocales()[0];
const deviceLanguage = locales.languageCode;

export const defaultNS = 'common'
export const resources = {
  en: {
    common: en1,
    landing: en2,
  },
  nb: {
    common: nb1
  }
} as const;

i18n.use(initReactI18next).init({
  lng: deviceLanguage,
  // lng: "nb",
  ns: ['common', 'landing'],
  defaultNS,
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});