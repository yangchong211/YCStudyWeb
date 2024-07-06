import { useLocaleConfig } from '@vuepress/helper/client';
import { computed } from 'vue';
import { getReadingTimeLocale } from '../utils/index.js';
import { useReadingTimeData } from './useReadingTimeData.js';
const DEFAULT_LOCALE = { words: '', time: '' };
const readingTimeLocales = typeof __READING_TIME_LOCALES__ === 'undefined'
    ? null
    : __READING_TIME_LOCALES__;
export const useReadingTimeLocaleConfig = () => readingTimeLocales
    ? useLocaleConfig(readingTimeLocales)
    : computed(() => null);
export const useReadingTimeLocale = () => {
    if (typeof readingTimeLocales === 'undefined')
        return computed(() => DEFAULT_LOCALE);
    const readingTime = useReadingTimeData();
    const readingTimeLocale = useReadingTimeLocaleConfig();
    return computed(() => readingTime.value && readingTimeLocale.value
        ? getReadingTimeLocale(readingTime.value, readingTimeLocale.value)
        : DEFAULT_LOCALE);
};
