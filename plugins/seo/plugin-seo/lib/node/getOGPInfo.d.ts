import type { App } from 'vuepress/core';
import type { ExtendPage, SeoContent } from '../typings/index.js';
import type { SeoPluginOptions } from './options.js';
export declare const getOGPInfo: (page: ExtendPage, options: SeoPluginOptions, app: App) => SeoContent;
