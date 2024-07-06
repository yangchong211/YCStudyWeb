import { resolveAttr, resolveLanguage } from '../utils.js';
const PRE_ATTRS_REGEXP = /<pre([\s\S]*?)style="([^"]*)"([^>]*)>/;
export const preWrapperPlugin = (md, { preWrapper = true } = {}) => {
    const rawFence = md.renderer.rules.fence;
    md.renderer.rules.fence = (...args) => {
        let result = rawFence(...args);
        if (!result.startsWith('<pre')) {
            return result;
        }
        const [tokens, idx, options] = args;
        const token = tokens[idx];
        // get token info
        const info = token.info ? md.utils.unescapeAll(token.info).trim() : '';
        const lang = resolveLanguage(info);
        const languageClass = `${options.langPrefix}${lang}`;
        if (!preWrapper) {
            /**
             * remove `<code>` attributes
             *
             * In the source code of `markdown-it fence line 71, line 74`,
             * `fence` writes `class="language-*"` onto the `code` element,
             * whereas in past versions, `vuepress` wrote it on the `pre` element.
             * Therefore, this behavior needs to be reset.
             *
             * Even though `shiki` directly returns the contents within `<pre>`
             * at `line 48` of `markdown-it`, I believe it is still prudent to make this adjustment.
             *
             * @see https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.mjs
             */
            result = result.replace(/<code[^]*?>/, '<code>');
            result = `<pre class="${languageClass}"${result.slice('<pre'.length)}`;
            return result;
        }
        const title = resolveAttr(info, 'title') || lang;
        let styles = '';
        // before: maybe `v-pre class="shiki *"`
        // after: style="*" tab-index="*"
        result = result.replace(PRE_ATTRS_REGEXP, (_, before, style, after) => {
            styles = style.trim();
            // Keep `v-pre class="*"`, remove the rest.
            return `<pre ${before.trim()}${after.trimEnd()}>`;
        });
        /**
         * Add information to dataset for current code block.
         */
        return `<div class="${languageClass}" data-highlighter="shiki" data-ext="${lang}" data-title="${title}" style="${styles}">${result}</div>`;
    };
};
