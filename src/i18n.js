import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import en from './locales/en/en.json'
import ua from './locales/ua/ua.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
      resources: {
        en: { translation: en },
        ua: { translation: ua }
      },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
