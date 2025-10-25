import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import commonEn from './common.en.json'
import commonIt from './common.it.json'

void i18n.use(initReactI18next).init({
  resources: {
    it: {
      common: commonIt,
    },
    en: {
      common: commonEn,
    },
  },
  lng: 'it',
  fallbackLng: 'it',
  supportedLngs: ['it', 'en'],
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
