import { es, type Translations } from './es';
import { en } from './en';
import { pt } from './pt';

export const languages = {
    es: 'Español',
    en: 'English',
    pt: 'Português',
};

export const defaultLang = 'es';

export type LanguageKeys = keyof typeof ui;
export type ValidLanguage = 'es' | 'en' | 'pt';

export const ui: Record<ValidLanguage, Translations> = {
    es: es,
    en: en,
    pt: pt,
};

export type NavTexts = Translations['nav'];
export type HeroTexts = Translations['hero'];
export type AboutTexts = Translations['about'];
export type CountdownTexts = Translations['countdown'];
export type AgendaTexts = Translations['agenda'];
export type OrganizationsTexts = Translations['organizations'];
export type FaqTexts = Translations['faq'];
export type FooterTexts = Translations['footer'];
export type SoonTexts = Translations['postEvent'];
export type OgTexts = Translations['og'];
export type A11yTexts = Translations['a11y'];
export type NotFoundTexts = Translations['notFound'];

/** Prefixes an internal path with the configured base (e.g. "/demo-landing-fundacion/"). */
export const withBase = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
