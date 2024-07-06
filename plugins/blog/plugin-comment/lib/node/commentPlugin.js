import { addCustomElement, addViteOptimizeDepsExclude, addViteOptimizeDepsInclude, addViteSsrExternal, addViteSsrNoExternal, getInstalledStatus, getLocaleConfig, } from '@vuepress/helper';
import { getAlias, getProviderPackage } from './getProvider.js';
import { walineLocales } from './locales.js';
import { CLIENT_FOLDER, logger, PLUGIN_NAME } from './utils.js';
/** Comment Plugin */
export const commentPlugin = (options) => (app) => {
    if (app.env.isDebug)
        logger.info('Options:', options);
    const pkg = getProviderPackage(options.provider);
    if (pkg && !getInstalledStatus(pkg, import.meta.url)) {
        logger.error(`Package ${pkg} is not installed, please install it manually!`);
        return { name: PLUGIN_NAME };
    }
    // Remove locales so that they won’t be injected in client twice
    if (options.provider === 'Waline' && 'locales' in options)
        delete options.locales;
    return {
        name: PLUGIN_NAME,
        alias: getAlias(options),
        define: (app) => {
            const userWalineLocales = options.provider === 'Waline'
                ? getLocaleConfig({
                    app,
                    name: 'waline',
                    default: walineLocales,
                    config: options.locales,
                })
                : {};
            return {
                __COMMENT_OPTIONS__: options,
                ...(options.provider === 'Waline'
                    ? {
                        WALINE_LOCALES: userWalineLocales,
                        WALINE_META: options.metaIcon !== false,
                    }
                    : {}),
            };
        },
        extendsBundlerOptions: (bundlerOptions, app) => {
            switch (options.provider) {
                case 'Artalk': {
                    addViteOptimizeDepsExclude(bundlerOptions, app, 'artalk/dist/Artalk.mjs');
                    addViteSsrExternal(bundlerOptions, app, 'artalk');
                    break;
                }
                case 'Giscus': {
                    addCustomElement(bundlerOptions, app, 'GiscusWidget');
                    addViteSsrExternal(bundlerOptions, app, 'giscus');
                    break;
                }
                case 'Twikoo': {
                    addViteOptimizeDepsInclude(bundlerOptions, app, 'twikoo');
                    addViteSsrExternal(bundlerOptions, app, 'twikoo');
                    break;
                }
                case 'Waline': {
                    addViteOptimizeDepsInclude(bundlerOptions, app, [
                        '@waline/client > autosize',
                        '@waline/client > recaptcha-v3',
                    ]);
                    addViteOptimizeDepsExclude(bundlerOptions, app, '@waline/client');
                    addViteSsrExternal(bundlerOptions, app, '@waline/client');
                    break;
                }
            }
            addViteSsrNoExternal(bundlerOptions, app, [
                '@vuepress/helper',
                '@vuepress/plugin-comment',
            ]);
        },
        clientConfigFile: `${CLIENT_FOLDER}config.js`,
    };
};
