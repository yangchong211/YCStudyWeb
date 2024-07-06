import { sassPalettePlugin } from './sassPalettePlugin.js';
export const useSassPalettePlugin = (app, options) => {
    const { plugins } = app.pluginApi;
    if (plugins
        .filter((plugin) => plugin.name === `@vuepress/plugin-sass-palette`)
        .every((plugin) => plugin.id !== options.id))
        app.use(sassPalettePlugin(options));
};
