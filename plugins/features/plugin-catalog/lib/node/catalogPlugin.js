import { addViteSsrNoExternal, getLocaleConfig } from '@vuepress/helper';
import { getDirname, path } from 'vuepress/utils';
import { generateCatalogPage } from './generateCatalogPage.js';
import { catalogLocales as defaultLocales } from './locales.js';
import { logger, PLUGIN_NAME } from './logger.js';
const __dirname = getDirname(import.meta.url);
export const catalogPlugin = (options = {}) => (app) => {
    if (app.env.isDebug)
        logger.info('Options:', options);
    const { component, locales } = options;
    return {
        name: PLUGIN_NAME,
        define: () => ({
            __CATALOG_LOCALES__: getLocaleConfig({
                app,
                name: PLUGIN_NAME,
                default: defaultLocales,
                config: locales,
            }),
        }),
        onInitialized: (app) => generateCatalogPage(app, options),
        extendsBundlerOptions: (bundlerOptions, app) => {
            addViteSsrNoExternal(bundlerOptions, app, '@vuepress/helper');
        },
        ...(component
            ? {}
            : { clientConfigFile: path.join(__dirname, '../client/config.js') }),
    };
};
