import { getBundlerName, isFunction, isString, mergeViteConfig, } from '@vuepress/helper';
import { getIdPrefix } from './utils.js';
/**
 * Use "additionalData" to make `${getIdPrefix(id)}config` available in scss
 *
 * @param config VuePress Bundler config
 * @param app VuePress Node App
 * @param id Module id
 */
export const injectScssConfigModule = (config, app, id) => {
    const bundlerName = getBundlerName(app);
    // For vite
    if (bundlerName === 'vite') {
        const viteBundlerConfig = config;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const originalAdditionalData = 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        viteBundlerConfig.viteOptions?.css?.preprocessorOptions?.scss
            .additionalData; // eslint-disable-line @typescript-eslint/no-unsafe-member-access
        // eslint-disable-next-line
        viteBundlerConfig.viteOptions = mergeViteConfig(viteBundlerConfig.viteOptions ?? {}, {
            css: {
                preprocessorOptions: {
                    scss: {
                        charset: false,
                        additionalData: async (source, file) => {
                            const originalContent = isString(originalAdditionalData)
                                ? `${originalAdditionalData}${source}`
                                : isFunction(originalAdditionalData)
                                    ? await originalAdditionalData(source, file)
                                    : source;
                            return originalContent.match(new RegExp(`@use\\s+["']@sass-palette\\/${getIdPrefix(id)}config["'];`))
                                ? originalContent
                                : `@use "@sass-palette/${getIdPrefix(id)}config";\n${originalContent}`;
                        },
                    },
                },
            },
        });
    }
    // For webpack
    else if (bundlerName === 'webpack') {
        const webpackBundlerConfig = config;
        if (!webpackBundlerConfig.scss)
            webpackBundlerConfig.scss = {};
        const { additionalData } = webpackBundlerConfig.scss;
        const additionalDataHandler = (content, loaderContext) => {
            const originalContent = isString(additionalData)
                ? `${additionalData}${content}`
                : isFunction(additionalData)
                    ? additionalData(content, loaderContext)
                    : content;
            return originalContent.match(new RegExp(`@use\\s+(["'])@sass-palette\\/${getIdPrefix(id)}config\\1;`))
                ? originalContent
                : `@use "@sass-palette/${getIdPrefix(id)}config";\n${originalContent}`;
        };
        webpackBundlerConfig.scss.additionalData = additionalDataHandler;
    }
};
