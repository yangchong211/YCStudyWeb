import { isString } from '@vuepress/helper/client';
import { inject } from 'vue';
let catalogGetter = (meta) => isString(meta.title) ? { title: meta.title } : null;
const catalogInfoSymbol = Symbol(__VUEPRESS_DEV__ ? 'catalog-info-getter' : '');
export const defineCatalogInfoGetter = (getter) => {
    catalogGetter = getter;
};
export const useCatalogInfoGetter = () => inject(catalogInfoSymbol);
export const injectCatalogInfoGetter = (app) => {
    app.provide(catalogInfoSymbol, catalogGetter);
};
