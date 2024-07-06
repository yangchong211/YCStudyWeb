import { getDirname, path } from 'vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const rltPlugin = (options = {}) => ({
    name: '@vuepress/plugin-rtl',
    define: {
        __RTL_LOCALES__: Array.isArray(options.locales) ? options.locales : ['/'],
        __RTL_SELECTOR__: options.selector || { html: { dir: 'rtl' } },
    },
    clientConfigFile: path.join(__dirname, '../client/config.js'),
});
