export const removePalettePlugin = (app, id) => {
    const { plugins } = app.pluginApi;
    const index = plugins
        .filter((plugin) => plugin.name === `@vuepress/plugin-sass-palette`)
        .findIndex((plugin) => plugin.id === id);
    if (index !== -1)
        plugins.splice(index, 1);
};
