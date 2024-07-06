import { addViteSsrNoExternal, getLocaleConfig, isArray, isString, } from '@vuepress/helper';
import { getDirname, path } from 'vuepress/utils';
import { copyCodeLocales } from './locales.js';
import { logger, PLUGIN_NAME } from './logger.js';
const __dirname = getDirname(import.meta.url);
export const copyCodePlugin = (options = {}) => (app) => {
    if (app.env.isDebug)
        logger.info('Options:', options);
    return {
        name: PLUGIN_NAME,
        define: (app) => ({
            __CC_DELAY__: options.delay || 500,
            __CC_DURATION__: options.duration || 2000,
            __CC_IGNORE_SELECTOR__: options.ignoreSelector || [],
            __CC_LOCALES__: getLocaleConfig({
                app,
                name: PLUGIN_NAME,
                default: copyCodeLocales,
                config: options.locales,
            }),
            __CC_SELECTOR__: isArray(options.selector)
                ? options.selector
                : isString(options.selector)
                    ? [options.selector]
                    : ['.theme-default-content div[class*="language-"] pre'],
            __CC_SHOW_IN_MOBILE__: options.showInMobile || false,
        }),
        extendsBundlerOptions: (bundlerOptions, app) => {
            addViteSsrNoExternal(bundlerOptions, app, '@vuepress/helper');
        },
        clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    };
};
