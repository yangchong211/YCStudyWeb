import type { PageOptions } from 'vuepress/core';
import type { TypesMap } from '../../shared/index.js';
import type { PagesMap } from '../getPagesMap.js';
import type { BlogTypeOptions } from '../options.js';
import type { Store } from '../store.js';
export declare const getType: (pagesMap: PagesMap, store: Store, type: BlogTypeOptions[], slugify: (name: string) => string, isDebug?: boolean) => {
    typesMap: TypesMap;
    pageOptions: PageOptions[];
};
