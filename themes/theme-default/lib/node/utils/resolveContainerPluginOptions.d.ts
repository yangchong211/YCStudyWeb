import type { MarkdownContainerPluginOptions } from '@vuepress/plugin-markdown-container';
import type { DefaultThemeData } from '../../shared/index.js';
/**
 * Resolve options for @vuepress/plugin-markdown-container
 *
 * For custom containers default title
 */
export declare const resolveMarkdownContainerPluginOptions: (localeOptions: DefaultThemeData, type: "tip" | "warning" | "danger") => MarkdownContainerPluginOptions;
