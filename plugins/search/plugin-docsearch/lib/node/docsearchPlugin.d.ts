import type { Plugin } from 'vuepress/core';
import type { DocsearchOptions } from '../shared/index.js';
/**
 * Options for @vuepress/plugin-docsearch
 */
export interface DocsearchPluginOptions extends DocsearchOptions {
    /**
     * Base path of the search index
     */
    indexBase?: string;
    /**
     * Whether to inject docsearch default styles
     */
    injectStyles?: boolean;
}
export declare const docsearchPlugin: ({ injectStyles, indexBase, ...options }?: DocsearchPluginOptions) => Plugin;
