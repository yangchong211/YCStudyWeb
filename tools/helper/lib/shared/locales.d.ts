import type { LocaleData } from 'vuepress/shared';
export type ExactLocaleConfig<T extends LocaleData = LocaleData> = Record<string, T>;
