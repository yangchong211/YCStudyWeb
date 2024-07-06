import type { Plugin } from 'vuepress/core';
import type { TocPropsOptions } from '../shared/index.js';
/**
 * Options for @vuepress/plugin-toc
 */
export interface TocPluginOptions {
    /**
     * Specify the name of the TOC component
     *
     * @default 'Toc'
     */
    componentName?: string;
    /**
     * Override the default values of the `options` prop of the TOC component
     */
    defaultPropsOptions?: Partial<TocPropsOptions>;
}
export declare const tocPlugin: ({ componentName, defaultPropsOptions, }?: TocPluginOptions) => Plugin;
