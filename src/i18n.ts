import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {LANGUAGES} from "./core/constants/language.constants";
import resourcesToBackend from "i18next-resources-to-backend";

i18n.use(Backend)
    .use(resourcesToBackend((lng: string, ns: string) => import(`../public/locales/${lng}/${ns}.json`)))
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        partialBundledLanguages: true,
        fallbackLng: 'us',
        debug: true,
        supportedLngs: LANGUAGES.map(({code}) => code),
        detection: {
            order: ['cookie', 'querystring', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie'],
        },
        resources: {},
        ns: ['common', 'monitoring', 'auth'],
        defaultNS: ['common'],
        saveMissing: false,
        react: {
            useSuspense: false
        }
    });
export default i18n;
