import type { App } from 'vuepress/core';
import type { ExtendPage } from '../../typings/index.js';
import type { SeoPluginOptions } from '../options.js';
export declare const getCanonicalLink: (page: ExtendPage, options: SeoPluginOptions) => string | null;
export declare const getAlternateLinks: (app: App, page: ExtendPage, { hostname }: SeoPluginOptions) => {
    lang: string;
    path: string;
}[];
