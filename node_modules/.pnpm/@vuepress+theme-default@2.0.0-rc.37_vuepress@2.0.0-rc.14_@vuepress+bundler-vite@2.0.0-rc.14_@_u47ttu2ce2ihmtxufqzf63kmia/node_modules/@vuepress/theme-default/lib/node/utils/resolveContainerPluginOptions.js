/**
 * Resolve options for @vuepress/plugin-markdown-container
 *
 * For custom containers default title
 */
export const resolveMarkdownContainerPluginOptions = (localeOptions, type) => {
    const locales = Object.entries(localeOptions.locales || {}).reduce((result, [key, value]) => {
        result[key] = {
            defaultInfo: value?.[type] ?? localeOptions[type],
        };
        return result;
    }, {});
    return {
        type,
        locales,
    };
};
