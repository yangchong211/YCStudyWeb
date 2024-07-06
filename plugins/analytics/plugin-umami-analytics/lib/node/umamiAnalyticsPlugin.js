import { Logger } from '@vuepress/helper';
import { colors, getDirname, path } from 'vuepress/utils';
const __dirname = getDirname(import.meta.url);
const PLUGIN_NAME = '@vuepress/plugin-umami-analytics';
const logger = new Logger(PLUGIN_NAME);
export const umamiAnalyticsPlugin = ({ id, ...options }) => (app) => {
    const plugin = {
        name: PLUGIN_NAME,
    };
    if (!id) {
        logger.warn(`${colors.cyan('id')} is required!`);
        return plugin;
    }
    // returns an empty plugin in dev mode when debug mode is not enabled
    if (app.env.isDev) {
        return plugin;
    }
    return {
        ...plugin,
        define: {
            __UMM_OPTIONS__: { id, ...options },
        },
        clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    };
};
