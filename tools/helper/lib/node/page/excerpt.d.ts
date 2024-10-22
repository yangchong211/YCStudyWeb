import type { App, Page } from 'vuepress/core';
export interface PageExcerptOptions {
    /**
     * Excerpt separator
     *
     * 摘要分隔符
     *
     * @default "<!-- more -->"
     */
    separator?: string;
    /**
     * Length of excerpt
     *
     * @description Excerpt length will be the minimal possible length reaching this value
     *
     * 摘要的长度
     *
     * @description 摘要的长度会尽可能的接近这个值
     *
     * @default 300
     */
    length?: number;
    /**
     * Tags which is considered as custom elements
     *
     * @description This is used to determine whether a tag is a custom element since all unknown tags are removed in excerpt.
     *
     * 被认为是自定义元素的标签
     *
     * @description 用于判断一个标签是否是自定义元素，因为在摘要中，所有的未知标签都会被移除。
     */
    isCustomElement?: (tagName: string) => boolean;
    /**
     * Whether keep page title (first h1) in excerpt
     *
     * 是否保留页面标题 (第一个 h1)
     *
     * @default false
     */
    keepPageTitle?: boolean;
    /**
     * Whether preserve tags like line numbers and highlight lines for code blocks
     *
     * 是否保留代码块的标签，诸如行号和高亮行
     *
     * @default false
     */
    keepFenceDom?: boolean;
}
export declare const getPageExcerptContent: (content: string, separator?: string) => string | undefined;
export declare const getPageExcerpt: ({ markdown, options: { base } }: App, { content, contentRendered, filePath, filePathRelative, frontmatter }: Page, { isCustomElement, separator, length, keepPageTitle, keepFenceDom, }?: PageExcerptOptions) => string;
