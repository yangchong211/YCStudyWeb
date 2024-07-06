import { getLocaleConfig } from '@vuepress/helper';
import { getDirname, logger, path } from 'vuepress/utils';
import { backToTopLocales } from './locales.js';
import { PLUGIN_NAME } from './logger.js';
const __dirname = getDirname(import.meta.url);
export const backToTopPlugin = (options = {}) => (app) => {
    if (app.env.isDebug)
        logger.info('Options', options);
    return {
        name: PLUGIN_NAME,
        define: (app) => ({
            __BACK_TO_TOP_LOCALES__: getLocaleConfig({
                app,
                name: 'back-to-top',
                default: backToTopLocales,
                config: options.locales,
            }),
            __BACK_TO_TOP_PROGRESS__: options.progress ?? true,
            __BACK_TO_TOP_THRESHOLD__: options.threshold ?? 100,
        }),
        clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    };
};
