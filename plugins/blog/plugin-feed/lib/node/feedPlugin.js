import { customizeDevServer, values } from '@vuepress/helper';
import { isLinkHttp, removeEndingSlash } from 'vuepress/shared';
import { colors } from 'vuepress/utils';
import { addFeedLinks } from './addFeedLinks.js';
import { getFeedFiles } from './getFeedFiles.js';
import { getFeedOptions } from './getFeedOptions.js';
import { getAtomTemplates, getRSSTemplates } from './getTemplates.js';
import { writeFiles } from './output.js';
import { FEED_GENERATOR, logger } from './utils/index.js';
export const feedPlugin = (options) => (app) => {
    if (app.env.isDebug)
        logger.info('Options:', options);
    const plugin = {
        name: FEED_GENERATOR,
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
    if (
    //  no output in root
    !options.atom &&
        !options.json &&
        !options.rss &&
        // no output in every locales
        options.locales &&
        values(options.locales).every(({ atom, json, rss }) => !atom && !json && !rss)) {
        logger.info('No feed output requested, the plugin won’t start!');
        return plugin;
    }
    const feedOptions = getFeedOptions(app, options);
    return {
        ...plugin,
        onInitialized: (app) => {
            if (app.env.isBuild || options.devServer)
                addFeedLinks(app, feedOptions);
        },
        extendsBundlerOptions: (config, app) => {
            if (options.devServer)
                [
                    ...getFeedFiles(app, feedOptions, hostname),
                    ...getAtomTemplates(feedOptions),
                    ...getRSSTemplates(feedOptions),
                ].forEach(([path, content, contentType]) => {
                    customizeDevServer(config, app, {
                        path,
                        response: (_res, req) => {
                            if (contentType)
                                req.setHeader('Content-Type', contentType);
                            return Promise.resolve(content);
                        },
                        errMsg: 'Unexpected feed generation error',
                    });
                });
        },
        onGenerated: async (app) => {
            await Promise.all([
                ...writeFiles(app, getFeedFiles(app, feedOptions, hostname)),
                ...writeFiles(app, getAtomTemplates(feedOptions)),
                ...writeFiles(app, getRSSTemplates(feedOptions)),
            ]);
        },
    };
};
