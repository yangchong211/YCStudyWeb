import { lineNumbers as lineNumbersPlugin } from '@vuepress/highlighter-helper';
import { isPlainObject } from 'vuepress/shared';
import { applyHighlighter, highlightLinesPlugin, preWrapperPlugin, } from './markdown/index.js';
export const shikiPlugin = ({ preWrapper = true, lineNumbers = true, ...options } = {}) => ({
    name: '@vuepress/plugin-shiki',
    extendsMarkdown: async (md, app) => {
        const { code } = app.options.markdown;
        await applyHighlighter(md, app, {
            ...(isPlainObject(code) ? code : {}),
            ...options,
        });
        md.use(highlightLinesPlugin);
        md.use(preWrapperPlugin, { preWrapper });
        if (preWrapper) {
            md.use(lineNumbersPlugin, { lineNumbers });
        }
    },
});
