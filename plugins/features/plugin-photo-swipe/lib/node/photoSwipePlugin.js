import { addViteOptimizeDepsExclude, addViteSsrNoExternal, entries, fromEntries, getLocaleConfig, } from '@vuepress/helper';
import { getDirname, path } from 'vuepress/utils';
import { photoSwipeLocales } from './locales.js';
import { logger, PLUGIN_NAME } from './logger.js';
const __dirname = getDirname(import.meta.url);
export const photoSwipePlugin = (options = {}) => (app) => {
    if (app.env.isDebug)
        logger.info('Options:', options);
    return {
        name: PLUGIN_NAME,
        define: (app) => ({
            __PS_SELECTOR__: options.selector ||
                '.theme-default-content :not(a) > img:not([no-view])',
            __PS_DELAY__: options.delay || 800,
            __PS_DOWNLOAD__: options.download ?? true,
            __PS_FULLSCREEN__: options.fullscreen ?? true,
            __PS_SCROLL_TO_CLOSE__: options.scrollToClose ?? true,
            __PS_LOCALES__: fromEntries(entries(getLocaleConfig({
                app,
                name: PLUGIN_NAME,
                default: photoSwipeLocales,
                config: options.locales,
            })).map(([localePath, localeOptions]) => [
                localePath,
                fromEntries(entries(localeOptions).map(([key, value]) => [
                    `${key}Title`,
                    value,
                ])),
            ])),
        }),
        extendsBundlerOptions: (bundlerOptions, app) => {
            addViteOptimizeDepsExclude(bundlerOptions, app, 'photoswipe');
            addViteSsrNoExternal(bundlerOptions, app, '@vuepress/helper');
        },
        clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    };
};
