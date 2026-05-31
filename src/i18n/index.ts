import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh from './zh';
import en from './en';
import de from './de';
import fr from './fr';
import es from './es';
import ar from './ar';
import nl from './nl';
import no from './no';
import ko from './ko';
import pt from './pt';
import ru from './ru';
import uk from './uk';

const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;

i18n.use(initReactI18next).init({
  resources: {
    zh: { translation: zh },
    en: { translation: en },
    de: { translation: de },
    fr: { translation: fr },
    es: { translation: es },
    ar: { translation: ar },
    nl: { translation: nl },
    no: { translation: no },
    ko: { translation: ko },
    pt: { translation: pt },
    ru: { translation: ru },
    uk: { translation: uk },
  },
  lng: saved || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
