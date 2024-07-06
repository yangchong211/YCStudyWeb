import type { App } from 'vuepress';
import type { MarkdownMathPluginOptions } from '../options.js';
export declare const prepareClientConfigFile: (app: App, mathRenderer: "katex" | "mathjax", options: MarkdownMathPluginOptions) => Promise<string>;
