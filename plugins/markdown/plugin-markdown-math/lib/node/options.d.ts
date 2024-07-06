import type { MarkdownItKatexOptions } from '@mdit/plugin-katex-slim';
import type { MarkdownItMathjaxOptions } from '@mdit/plugin-mathjax-slim';
export interface MarkdownKatexPluginOptions extends Omit<MarkdownItKatexOptions, 'transformer'> {
    type?: 'katex';
    /**
     * Whether enable copy plugin
     *
     * @default false
     */
    copy?: boolean;
}
export interface MarkdownMathjaxPluginOptions extends Omit<MarkdownItMathjaxOptions, 'transformer'> {
    type?: 'mathjax';
}
export type MarkdownMathPluginOptions = MarkdownKatexPluginOptions | MarkdownMathjaxPluginOptions;
