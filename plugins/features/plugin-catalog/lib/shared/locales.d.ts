import type { ExactLocaleConfig } from '@vuepress/helper';
export interface CatalogPluginLocaleData {
    /**
     * Catalog title text
     *
     * 目录标题文字
     */
    title: string;
    /**
     * Empty hint
     *
     * 空目录提示
     */
    empty: string;
}
export type CatalogPluginLocaleConfig = ExactLocaleConfig<CatalogPluginLocaleData>;
