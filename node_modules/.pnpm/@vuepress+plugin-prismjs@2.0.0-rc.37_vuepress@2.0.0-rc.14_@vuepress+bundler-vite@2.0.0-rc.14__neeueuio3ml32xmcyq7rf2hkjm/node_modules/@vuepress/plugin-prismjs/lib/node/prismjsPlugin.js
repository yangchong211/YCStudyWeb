import { lineNumbers as lineNumbersPlugin } from '@vuepress/highlighter-helper';
import { loadLanguages } from './loadLanguages.js';
import { highlightPlugin, preWrapperPlugin } from './markdown/index.js';
import { resolveHighlighter } from './resolveHighlighter.js';
export const prismjsPlugin = ({ preloadLanguages = ['markdown', 'jsdoc', 'yaml'], preWrapper = true, lineNumbers = true, ...options } = {}) => ({
    name: '@vuepress/plugin-prismjs',
    extendsMarkdown(md) {
        if (preloadLanguages?.length !== 0) {
            loadLanguages(preloadLanguages);
        }
        md.options.highlight = (code, lang) => {
            const highlighter = resolveHighlighter(lang);
            return highlighter?.(code) || '';
        };
        md.use(highlightPlugin, options);
        md.use(preWrapperPlugin, { preWrapper });
        if (preWrapper) {
            md.use(lineNumbersPlugin, { lineNumbers, removeLastLine: true });
        }
    },
});
