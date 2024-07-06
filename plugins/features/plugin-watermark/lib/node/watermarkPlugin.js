import { isFunction } from 'vuepress/shared';
import { getDirname, path } from 'vuepress/utils';
import { logger, PLUGIN_NAME } from './logger.js';
const __dirname = getDirname(import.meta.url);
export const watermarkPlugin = ({ enabled = true, ...options } = {}) => (app) => {
    if (app.env.isDebug)
        logger.info('Options:', options);
    return {
        name: PLUGIN_NAME,
        define: {
            __WM_DELAY__: options.delay ?? 500,
            __WM_GLOBAL__: enabled === true,
            __WM_OPTIONS__: options.watermarkOptions ?? {},
        },
        extendsPage: (page) => {
            // When watermark is a filter function, enable watermark for matching pages.
            if (isFunction(enabled)) {
                const { frontmatter } = page;
                if (!('watermark' in frontmatter) && enabled(page)) {
                    frontmatter.watermark = true;
                }
            }
        },
        clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    };
};
