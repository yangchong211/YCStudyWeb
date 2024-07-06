import type { App } from 'vuepress/core';
import type { ReadingTimePluginOptions } from './options.js';
/**
 * Composition Api to use `@vuepress/plugin-reading-time`
 */
export declare const useReadingTimePlugin: (app: App, options?: ReadingTimePluginOptions) => void;
/**
 * Composition Api to remove `@vuepress/plugin-reading-time`
 */
export declare const removeReadingTimePlugin: (app: App) => void;
