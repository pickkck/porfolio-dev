import es from './es.json';
import en from './en.json';

export const languages = {
  es: 'Español 🇲🇽',
  en: 'English 🇬🇧',
};
export const showDefaultLang = true;
export const defaultLang = 'es';

export const ui = {
  es: es,
  en: en,
} as const;