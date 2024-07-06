import type { CreateLocaleOptions, Lang } from './typings.js';
export * from './typings.js';
interface LanguageResult {
    lang: Lang;
    locale: CreateLocaleOptions;
}
export declare const getLanguage: () => Promise<LanguageResult>;
