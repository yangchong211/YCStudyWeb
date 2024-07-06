import type { PageExcerptOptions } from '@vuepress/helper';
import type { Page } from 'vuepress/core';
export interface BlogCategoryOptions<ExtraPageData extends Record<any, any> = Record<never, never>, ExtraPageFrontmatter extends Record<any, any> = Record<string, unknown>, ExtraPageFields extends Record<any, any> = Record<never, never>> {
    /**
     * Unique category name
     *
     * 唯一的分类名称
     */
    key: string;
    /**
     * Function getting category from page
     *
     * 从页面中获取分类的函数
     */
    getter: (page: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>) => string[];
    /**
     * A custom function to sort the pages
     *
     * 页面排序器
     */
    sorter?: (pageA: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>, pageB: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>) => number;
    /**
     * Path pattern of page to be registered
     *
     * @description `:key` will be replaced by the "slugify" result of the original key
     *
     * 待注册的页面路径图案
     *
     * @description `:key` 将会被替换为原 key 的 slugify 结果
     *
     * @default `/:key/`
     */
    path?: string | false;
    /**
     * Page layout name
     *
     * 页面布局组件名称
     *
     * @default "Layout"
     */
    layout?: string;
    /**
     * Frontmatter
     *
     * Front Matter 配置
     */
    frontmatter?: (localePath: string) => Record<string, unknown>;
    /**
     * Item page path pattern or custom function to be registered
     *
     * @description When filling in a string, `:key` and `:name` will be replaced by the "slugify" result of the original key and name
     *
     * 待注册的项目页面路径图案或自定义函数
     *
     * @description 当填入字符串的时候, `:key` 和 `:name` 会被自动替换为原始的 key、name 的 slugify 结果。
     *
     * @default `/:key/:name/`
     */
    itemPath?: string | ((name: string) => string) | false;
    /**
     * Item page layout name
     *
     * 项目页面布局组件名称
     *
     * @default "Layout"
     */
    itemLayout?: string;
    /**
     * Items Frontmatter
     *
     * 项目 Front Matter 配置
     */
    itemFrontmatter?: (name: string, localePath: string) => Record<string, unknown>;
}
export interface BlogTypeOptions<ExtraPageData extends Record<any, any> = Record<never, never>, ExtraPageFrontmatter extends Record<any, any> = Record<string, unknown>, ExtraPageFields extends Record<any, any> = Record<never, never>> {
    /**
     * Unique type name
     *
     * 唯一的类型名称
     */
    key: string;
    /**
     * A filter function to determine whether a page should be the type
     *
     * 一个过滤函数来决定页面是否满足此类型
     */
    filter: (page: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>) => boolean;
    /**
     * A custom function to sort the pages
     *
     * 页面排序器
     */
    sorter?: (pageA: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>, pageB: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>) => number;
    /**
     * Page path to be registered
     *
     * 待注册的页面路径
     *
     * @default "/:key/"
     */
    path?: string | false;
    /**
     * Page layout name
     *
     * 页面布局组件名称
     *
     * @default "Layout"
     */
    layout?: string;
    /**
     * Frontmatter
     *
     * Front Matter 配置
     */
    frontmatter?: (localePath: string) => Record<string, unknown>;
}
export interface BlogPluginPageData {
    /**
     * Page excerpt content
     *
     * 页面摘要内容
     */
    excerpt?: string;
}
export interface BlogPluginOptions extends Pick<PageExcerptOptions, 'isCustomElement' | 'keepPageTitle' | 'keepFenceDom'> {
    /**
     * Function getting article info.
     *
     * 获取文章信息的函数。
     */
    getInfo?: <ExtraPageData extends Record<string, unknown> = Record<never, never>, ExtraPageFrontmatter extends Record<string, unknown> = Record<string, unknown>, ExtraPageFields extends Record<string, unknown> = Record<never, never>>(page: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>) => Record<string, unknown>;
    /**
     * Page filter, determine whether a page should be included.
     *
     * 页面过滤器，此函数用于鉴别页面是否作为文章。
     *
     * @default (page) => Boolean(page.filePathRelative) && !page.frontmatter.home
     */
    filter?: <ExtraPageData extends Record<string, unknown> = Record<never, never>, ExtraPageFrontmatter extends Record<string, unknown> = Record<string, unknown>, ExtraPageFields extends Record<string, unknown> = Record<never, never>>(page: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>) => boolean;
    /**
     * Categories config
     */
    category?: BlogCategoryOptions[];
    /**
     * Types config
     */
    type?: BlogTypeOptions[];
    /**
     * Key used when injecting info to route meta.
     *
     * 注入文章信息至路由元数据时使用的键名。
     *
     * @default "_blog"
     */
    metaScope?: string;
    /**
     * Slugify function
     *
     * Slugify 函数
     *
     * @default (name) => name.replace(/ _/g, "-").toLowerCase()
     */
    slugify?: (name: string) => string;
    /**
     * Excerpt generation
     *
     * 摘要生成
     *
     * @default false
     */
    excerpt?: boolean;
    /**
     * Excerpt separator
     *
     * 摘要分隔符
     *
     * @default "<!-- more -->"
     */
    excerptSeparator?: string;
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
    excerptLength?: number;
    /**
     * Page filter, determine whether the plugin should generate excerpt for it.
     *
     * @description You should use this to skip pages that you don't need to generate excerpt for. E.g.: If users set `excerpt` or `description` in frontmatter, you may want to use them directly.
     *
     * 页面过滤器，此函数用于鉴别插件是否需要生成摘要
     *
     * @description 你可以使用此函数来跳过你不需要生成摘要的页面。例如：如果用户在 frontmatter 中设置了 `excerpt` 或 `description`，你可能希望直接使用它们。
     *
     * @default options.filter
     */
    excerptFilter?: <ExtraPageData extends Record<string, unknown> = Record<never, never>, ExtraPageFrontmatter extends Record<string, unknown> = Record<string, unknown>, ExtraPageFields extends Record<string, unknown> = Record<never, never>>(page: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>) => boolean;
    /**
     * Whether enable hotReload
     *
     * @description This may have performance impact in large sites
     *
     * 是否启用热更新
     *
     * @description 在大型站点上，这可能会有性能影响
     *
     * @default false
     */
    hotReload?: boolean;
}
