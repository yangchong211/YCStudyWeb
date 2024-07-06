import type { App, Component } from 'vue';
export interface CatalogInfo {
    /**
     * Catalog title
     *
     * 目录标题
     */
    title: string;
    /**
     * Catalog order
     *
     * 目录顺序
     */
    order?: number;
    /**
     * Catalog content
     *
     * 目录内容
     */
    content?: Component;
}
export type CatalogInfoGetter = (meta: Record<string, unknown>) => CatalogInfo | null;
export declare const defineCatalogInfoGetter: (getter: CatalogInfoGetter) => void;
export declare const useCatalogInfoGetter: () => CatalogInfoGetter;
export declare const injectCatalogInfoGetter: (app: App) => void;
