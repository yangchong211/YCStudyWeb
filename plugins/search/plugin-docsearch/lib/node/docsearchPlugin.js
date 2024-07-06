import { getDirname, path } from 'vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const docsearchPlugin = ({ injectStyles = true, indexBase, ...options } = {}) => ({
    name: '@vuepress/plugin-docsearch',
    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    define: (app) => ({
        __DOCSEARCH_INJECT_STYLES__: injectStyles,
        __DOCSEARCH_INDEX_BASE__: indexBase || app.options.base,
        __DOCSEARCH_OPTIONS__: options,
    }),
});
