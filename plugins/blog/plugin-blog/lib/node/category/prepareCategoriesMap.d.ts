import type { App } from 'vuepress/core';
import type { CategoriesMap } from '../../shared/index.js';
/**
 * @returns Page paths to be generated
 */
export declare const prepareCategoriesMap: (app: App, categoriesMap: CategoriesMap) => Promise<void>;
