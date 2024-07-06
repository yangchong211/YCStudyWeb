import type { App } from 'vuepress/core';
import type { ExtendPage } from '../../typings/index.js';
import type { SeoPluginOptions } from '../options.js';
export declare const getCover: ({ frontmatter }: ExtendPage, { options: { base } }: App, { hostname }: SeoPluginOptions) => string | null;
