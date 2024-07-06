import { customizeDevServer } from '@vuepress/helper';
import { isLinkHttp, removeEndingSlash } from 'vuepress/shared';
import { colors } from 'vuepress/utils';
import { getSiteMap } from './getSitemap.js';
import { getSiteMapTemplate } from './getSitemapTemplate.js';
import { logger, PLUGIN_NAME } from './logger.js';
import { outputSitemap } from './outputSitemap.js';
export const sitemapPlugin = (options) => (app) => {
    if (app.env.isDebug)
        logger.info('Options:', options);
    const plugin = {
        name: PLUGIN_NAME,
    };
    let hostname = app.env.isDev
        ? options.devHostname || `http://localhost:${app.options.port}`
        : options.hostname;
    if (!hostname) {
        logger.error(`Option ${colors.magenta('hostname')} is required!`);
        return plugin;
    }
    // make sure hostname do not end with `/`
    hostname = removeEndingSlash(isLinkHttp(hostname) ? hostname : `https://${hostname}`);
    return {
        ...plugin,
        extendsBundlerOptions: async (config, app) => {
            if (options.devServer)
                [
                    await getSiteMap(app, options, hostname),
                    getSiteMapTemplate(options),
                ].forEach(([path, content]) => {
                    customizeDevServer(config, app, {
                        path,
                        response: async () => Promise.resolve(content),
                        errMsg: 'Unexpected sitemap generation error',
                    });
                });
        },
        onGenerated: (app) => outputSitemap(app, options, hostname),
    };
};
