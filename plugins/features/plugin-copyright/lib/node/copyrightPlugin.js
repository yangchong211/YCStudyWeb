import { addViteSsrNoExternal, getLocaleConfig, Logger } from '@vuepress/helper';
import { getDirname, path } from 'vuepress/utils';
import { copyrightLocales } from './locales.js';
const PLUGIN_NAME = '@vuepress/plugin-copyright';
export const logger = new Logger(PLUGIN_NAME);
const __dirname = getDirname(import.meta.url);
export const copyrightPlugin = (options = {}) => (app) => {
    if (app.env.isDebug)
        logger.info('Options:', options);
    const { canonical, author = '', authorGetter, license = '', licenseGetter, copyrightGetter, disableCopy = false, disableSelection = false, global = false, triggerLength = 100, maxLength = 0, } = options;
    const locales = getLocaleConfig({
        app,
        name: PLUGIN_NAME,
        default: copyrightLocales,
        config: options.locales,
    });
    return {
        name: PLUGIN_NAME,
        define: () => ({
            __COPYRIGHT_OPTIONS__: {
                canonical: canonical || '',
                author: author || '',
                license: license || '',
                global,
                disableCopy,
                disableSelection,
                triggerLength,
                maxLength,
            },
            __COPYRIGHT_LOCALES__: locales,
        }),
        extendsPage: (page) => {
            const authorText = authorGetter?.(page) ?? author;
            const licenseText = licenseGetter?.(page) ?? license;
            const copyright = copyrightGetter?.(page);
            if (copyright) {
                page.data.copyright = copyright;
            }
            else {
                const hasDifferentAuthor = authorText && authorText !== author;
                const hasDifferentLicense = licenseText && licenseText !== license;
                if (hasDifferentAuthor || hasDifferentLicense) {
                    const copyrightInfo = {};
                    if (hasDifferentAuthor)
                        copyrightInfo.author = authorText;
                    if (hasDifferentLicense)
                        copyrightInfo.license = licenseText;
                    page.data.copyright = copyrightInfo;
                }
            }
        },
        extendsBundlerOptions: (bundlerOptions, app) => {
            addViteSsrNoExternal(bundlerOptions, app, '@vuepress/helper');
        },
        clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    };
};
