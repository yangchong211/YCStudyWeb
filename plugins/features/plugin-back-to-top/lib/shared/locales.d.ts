import type { ExactLocaleConfig } from '@vuepress/helper/shared';
export interface BackToTopPluginLocaleData {
    /**
     * Back to top button label text
     *
     * 返回顶部文字
     */
    backToTop: string;
}
export type BackToTopPluginLocaleConfig = ExactLocaleConfig<BackToTopPluginLocaleData>;
