import type { PageOptions } from 'vuepress/core';
import type { CategoriesMap } from '../../shared/index.js';
import type { PagesMap } from '../getPagesMap.js';
import type { BlogCategoryOptions } from '../options.js';
import type { Store } from '../store.js';
/**
 * @returns Page paths to be generated
 */
export declare const getCategory: (pagesMap: PagesMap, store: Store, category: BlogCategoryOptions[], slugify: (name: string) => string, isDebug: boolean) => {
    categoriesMap: CategoriesMap;
    pageOptions: PageOptions[];
};
