import type { App, Page } from 'vuepress/core';
export interface PageTextOptions {
    /**
     * Whether convert text to single line content
     *
     * 是否将文字转换成单行内容
     *
     * @default false
     */
    singleLine?: boolean;
    /**
     * Length of text
     *
     * @description Text length will be the minimal possible length reaching this value
     *
     * 文字的长度
     *
     * @description 文字的长度会尽可能的接近这个值
     *
     * @default 300
     */
    length?: number;
    /**
     * Tags to be removed
     *
     * @description Table and code blocks are removed by default.
     *
     * 需要移除的标签
     *
     * @description 默认情况下表格和代码块会被移除
     *
     * @default ['table', 'pre']
     */
    removedTags?: string[];
}
export declare const getText: (content: string, base: string, { length, singleLine, removedTags, }?: PageTextOptions) => string;
export declare const getPageText: ({ options: { base } }: App, { contentRendered }: Page, options?: PageTextOptions) => string;
