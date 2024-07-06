import { appendDateToPage } from './appendDate.js';
import { isGitPluginEnabled } from './checkGitPlugin.js';
import { PLUGIN_NAME } from './logger.js';
export const appendDatePlugin = (options = {}) => ({
    name: PLUGIN_NAME,
    onInitialized: async (app) => {
        if (isGitPluginEnabled(app))
            await Promise.all(app.pages.map((page) => appendDateToPage(options, page)));
    },
});
