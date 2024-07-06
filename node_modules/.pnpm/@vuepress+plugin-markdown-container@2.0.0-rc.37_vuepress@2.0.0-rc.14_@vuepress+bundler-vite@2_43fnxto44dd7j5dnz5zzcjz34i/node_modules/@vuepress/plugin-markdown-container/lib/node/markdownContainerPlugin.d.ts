import type Renderer from 'markdown-it/lib/renderer.mjs';
import type Token from 'markdown-it/lib/token.mjs';
import type { Plugin } from 'vuepress/core';
import type { MarkdownEnv } from 'vuepress/markdown';
import type { LocaleConfig } from 'vuepress/shared';
/**
 * Options for markdown-it-container
 */
export interface MarkdownItContainerOptions {
    /**
     * The marker of the container syntax
     *
     * @default ':'
     * @see https://github.com/markdown-it/markdown-it-container#api
     */
    marker?: string;
    /**
     * Renderer function for opening / closing tokens
     *
     * @see https://github.com/markdown-it/markdown-it-container#api
     */
    render?: MarkdownItContainerRenderFunction;
    /**
     * Function to validate tail after opening marker, should return `true` on success
     */
    validate?: (params: string) => boolean;
}
export type MarkdownItContainerRenderFunction = (tokens: Token[], index: number, options: any, env: MarkdownEnv, self: Renderer) => string;
export type RenderPlaceFunction = (info: string) => string;
/**
 * Options for @vuepress/plugin-markdown-container
 */
export interface MarkdownContainerPluginOptions extends MarkdownItContainerOptions {
    /**
     * The type of the container
     *
     * It would be used as the `name` of the container
     *
     * @see https://github.com/markdown-it/markdown-it-container#api
     */
    type: string;
    /**
     * Locales config for container
     */
    locales?: LocaleConfig<{
        /**
         * Default info of the container
         *
         * If this option is not specified, the default info will fallback to the
         * uppercase of the `type` option
         */
        defaultInfo: string;
    }>;
    /**
     * A function to render the starting tag of the container.
     *
     * This option will not take effect if you don't specify the `after` option.
     */
    before?: RenderPlaceFunction;
    /**
     * A function to render the ending tag of the container.
     *
     * This option will not take effect if you don't specify the `before` option.
     */
    after?: RenderPlaceFunction;
}
export declare const markdownContainerPlugin: ({ type, after, before, locales, validate, marker, render, }: MarkdownContainerPluginOptions) => Plugin;
