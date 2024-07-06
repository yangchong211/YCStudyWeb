import type { App } from 'vuepress/core';
import type { ArticleSchema, BlogPostingSchema, ExtendPage, WebPageSchema } from '../typings/index.js';
import type { SeoPluginOptions } from './options.js';
export declare const getJSONLDInfo: (page: ExtendPage, options: SeoPluginOptions, app: App) => ArticleSchema | BlogPostingSchema | WebPageSchema;
