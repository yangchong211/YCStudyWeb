import type { Page } from 'vuepress';
import type { WatermarkPureOptions } from '../shared/index.js';
export interface WatermarkPluginOptions {
    /**
     * Specify which pages need to have watermarks added.
     *
     * Pages with `true` value will have watermarks added.
     *
     * 指定哪些页面需要添加水印。
     *
     * 拥有 `true` 值的页面将会被添加水印。
     *
     * @default false
     */
    enabled?: boolean | ((page: Page) => boolean);
    /**
     * Watermark options
     *
     * 水印配置选项
     *
     * @see [watermark-js-plus](https://zhensherlock.github.io/watermark-js-plus/config/)
     */
    watermarkOptions?: WatermarkPureOptions;
    /**
     * Delay for adding watermarks. In milliseconds.
     *
     * This delay will only take effect when adding watermarks to a specific element on the page.
     *
     * A delay may be required when the watermark parent is rerendered when switching pages.
     *
     * 添加水印的延时。以毫秒为单位。
     * 该延迟仅会在添加水印到页面某个元素时生效。
     * 在切换路由后，需要延迟一段时间后才能添加水印。
     *
     * @default 500
     */
    delay?: number;
}
