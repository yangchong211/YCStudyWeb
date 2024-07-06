import type { App, Page } from 'vuepress/core';
export type PagesMap = Record<string, Page[]>;
export declare const getPageMap: ({ pages }: App, filter: (page: Page) => boolean) => PagesMap;
