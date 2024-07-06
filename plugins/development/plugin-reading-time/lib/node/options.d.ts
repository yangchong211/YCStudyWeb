import type { LocaleConfig } from 'vuepress/shared';
import type { ReadingTimePluginLocaleData } from '../shared/index.js';
export interface ReadingTimePluginOptions {
    /**
     * reading speed (words per minute)
     *
     * 每分钟阅读的字数
     *
     * @default 300
     */
    wordPerMinute?: number;
    /**
     * Locales config
     *
     * @see https://ecosystem.vuejs.press/plugins/reading-time.html#locales
     *
     * 多语言选项
     *
     * @see https://ecosystem.vuejs.press/plugins/zh/reading-time.html#locales
     */
    locales?: LocaleConfig<ReadingTimePluginLocaleData>;
}
