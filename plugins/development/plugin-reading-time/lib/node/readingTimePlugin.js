import { addViteSsrNoExternal, getLocaleConfig } from '@vuepress/helper';
import { getReadingTime } from './getReadingTime.js';
import { readingTimeLocales } from './locales.js';
import { logger, PLUGIN_NAME } from './logger.js';
/** Reading time plugin */
export const readingTimePlugin = (options = {}) => (app) => {
    if (app.env.isDebug)
        logger.info('Options:', options);
    return {
        name: PLUGIN_NAME,
        define: (app) => ({
            __READING_TIME_LOCALES__: getLocaleConfig({
                app,
                name: PLUGIN_NAME,
                default: readingTimeLocales,
                config: options.locales,
            }),
        }),
        extendsPage: (page) => {
            page.data.readingTime = getReadingTime(page.content, options.wordPerMinute || 300);
        },
        extendsBundlerOptions: (bundlerOptions, app) => {
            addViteSsrNoExternal(bundlerOptions, app, '@vuepress/helper');
        },
    };
};
