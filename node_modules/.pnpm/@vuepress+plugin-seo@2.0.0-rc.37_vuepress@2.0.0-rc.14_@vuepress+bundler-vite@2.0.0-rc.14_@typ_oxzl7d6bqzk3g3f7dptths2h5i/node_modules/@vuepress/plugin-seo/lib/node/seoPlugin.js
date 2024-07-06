import { colors } from 'vuepress/utils';
import { appendSEO } from './appendSEO.js';
import { generateDescription } from './generateDescription.js';
import { generateRobotsTxt } from './generateRobotsTxt.js';
import { logger, PLUGIN_NAME } from './utils/index.js';
export const seoPlugin = (options) => (app) => {
    if (app.env.isDebug)
        logger.info('Options:', options);
    const plugin = { name: PLUGIN_NAME };
    if (!options.hostname) {
        logger.error(`Option ${colors.magenta('hostname')} is required!`);
        return plugin;
    }
    return {
        ...plugin,
        extendsPage: (page) => {
            if (page.frontmatter.seo !== false)
                generateDescription(app, page, options.autoDescription !== false);
        },
        onInitialized: (app) => {
            appendSEO(app, options);
        },
        onGenerated: (app) => generateRobotsTxt(app),
    };
};
