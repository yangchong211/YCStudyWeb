import type { App } from 'vuepress/core';
import type { CatalogPluginOptions } from './options.js';
export declare const generateCatalogPage: (app: App, { component, exclude, frontmatter, level, index, }: CatalogPluginOptions) => Promise<void>;
