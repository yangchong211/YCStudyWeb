import { getDirname, path } from 'vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const tocPlugin = ({ componentName = 'Toc', defaultPropsOptions = {}, } = {}) => ({
    name: '@vuepress/plugin-toc',
    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    define: {
        __TOC_COMPONENT_NAME__: componentName,
        __TOC_DEFAULT_PROPS_OPTIONS__: defaultPropsOptions,
    },
});
