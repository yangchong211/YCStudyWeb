import type { ComputedRef } from 'vue';
import type { ReadingTimePluginLocaleData } from '../../shared/index.js';
export declare const useReadingTimeLocaleConfig: () => ComputedRef<ReadingTimePluginLocaleData | null>;
export interface ReadingTimeLocale {
    /**
     * Reading time text
     *
     * 阅读时间文字
     */
    time: string;
    /**
     * Words count text
     *
     * 字数统计文字
     */
    words: string;
}
export declare const useReadingTimeLocale: () => ComputedRef<ReadingTimeLocale>;
