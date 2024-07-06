import type { ExactLocaleConfig } from '@vuepress/helper/shared';
export interface CopyCodePluginLocaleData {
    /**
     * Copy text
     *
     * 复制文字
     */
    copy: string;
    /**
     * Copied text
     *
     * 已复制文字
     */
    copied: string;
}
export type CopyCodePluginLocaleConfig = ExactLocaleConfig<CopyCodePluginLocaleData>;
