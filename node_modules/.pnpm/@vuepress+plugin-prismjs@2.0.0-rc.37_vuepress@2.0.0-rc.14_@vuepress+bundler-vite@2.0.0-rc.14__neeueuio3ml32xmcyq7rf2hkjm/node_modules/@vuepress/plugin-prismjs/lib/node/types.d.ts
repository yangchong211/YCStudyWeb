import type { WhitespacePosition } from '@vuepress/highlighter-helper';
export interface PreWrapperOptions {
    /**
     * Wrap the `<pre>` tag with an extra `<div>` or not. Do not disable it unless you
     * understand what's it for
     *
     * - Required for `lineNumbers`
     * - Required for title display of default theme
     */
    preWrapper?: boolean;
}
export interface LineNumbersOptions {
    /**
     * Enable line numbers or not
     *
     * - A `boolean` value is to enable line numbers or not.
     * - A `number` value is the minimum number of lines to enable line numbers
     *
     * @default true
     */
    lineNumbers?: boolean | number;
}
export interface HighlightOptions {
    /**
     * Enable highlight lines or not
     *
     * @default true
     */
    highlightLines?: boolean;
    /**
     * Enable notation diff
     *
     * @default false
     *
     * @see https://shiki.style/packages/transformers#transformernotationdiff
     */
    notationDiff?: boolean;
    /**
     * Enable notation focus
     *
     * @default false
     *
     * @see https://shiki.style/packages/transformers#transformernotationfocus
     */
    notationFocus?: boolean;
    /**
     * Enable notation highlight
     *
     * @default false
     *
     * @see https://shiki.style/packages/transformers#transformernotationhighlight
     */
    notationHighlight?: boolean;
    /**
     * Enable notation error level
     *
     * @default false
     *
     * @see https://shiki.style/packages/transformers#transformernotationerrorlevel
     */
    notationErrorLevel?: boolean;
    /**
     * Enable notation word highlight
     *
     * @default false
     *
     * @see https://shiki.style/packages/transformers#transformernotationwordhighlight
     */
    notationWordHighLight?: boolean;
    /**
     * Enable render whitespace
     * - true: enable render whitespace, same of `all`
     * - false: disable render whitespace
     * - 'all': render all whitespace
     * - 'boundary': render leading and trailing whitespace of each line.
     * - 'trailing': render trailing whitespace of each line
     *
     * you are able to use `:whitespace` or `:no-whitespace` or `:whitespace=position` to set single code block
     *
     * position: 'all' | 'boundary' | 'trailing'
     *
     * @default false
     *
     * @see https://shiki.style/packages/transformers#transformerrenderwhitespace
     */
    whitespace?: boolean | WhitespacePosition;
}
