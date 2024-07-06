import { deepAssign, entries, fromEntries, isArray, isPlainObject, keys, } from '@vuepress/helper';
import { colors } from 'vuepress/utils';
import { logger } from './logger.js';
const AVAILABLE_FALLBACK = ['defaultLocale', 'homepage', '404'];
export const getRedirectLocaleConfig = (app, options) => {
    const { locales } = app.options;
    const localeConfig = deepAssign(fromEntries(entries(locales)
        .filter(([key, { lang }]) => {
        if (!lang) {
            logger.error(`Missing ${colors.magenta('lang')} option for locale "${key}", this locale will be ignored!`);
            return false;
        }
        return true;
    })
        .map(([key, { lang }]) => [key, [lang]])), isPlainObject(options.localeConfig)
        ? fromEntries(entries(options.localeConfig).map(([routePath, lang]) => [
            routePath,
            isArray(lang) ? lang : [lang],
        ]))
        : {});
    const defaultLocale = options.defaultLocale || keys(localeConfig).pop();
    return {
        autoLocale: options.autoLocale ?? false,
        switchLocale: options.switchLocale ?? false,
        localeConfig,
        defaultLocale,
        localeFallback: options.localeFallback ?? true,
        defaultBehavior: options.defaultBehavior &&
            AVAILABLE_FALLBACK.includes(options.defaultBehavior)
            ? options.defaultBehavior
            : 'defaultLocale',
    };
};
