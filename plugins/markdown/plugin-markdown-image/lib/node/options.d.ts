import type { MarkdownItFigureOptions } from '@mdit/plugin-figure';
import type { MarkdownItImgMarkOptions } from '@mdit/plugin-img-mark';
export interface MarkdownImagePluginOptions {
    /**
     * Whether render figure with standalone imag
     *
     * 是否将单独的图片渲染为 figure
     *
     * @default false
     */
    figure?: MarkdownItFigureOptions | boolean;
    /**
     * Whether enable native image lazy loading
     *
     * 是否启用原生的图片懒加载。
     *
     * @default false
     */
    lazyload?: boolean;
    /**
     * Whether to enable gfm image id mark support
     *
     * 是否启用 GFM 图片 ID 标记。
     *
     * @default false
     */
    mark?: MarkdownItImgMarkOptions | boolean;
    /**
     * Whether to enable image size mark support
     *
     * 是否启用图片大小标记支持。
     *
     * @default false
     */
    size?: boolean;
    /**
     * Whether to enable obsidian image size mark support
     *
     * 是否启用 obsidian 图片大小标记支持。
     *
     * @default false
     */
    obsidianSize?: boolean;
    /**
     * @default 'html:not(.dark)'
     */
    lightmodeSelector?: string;
    /**
     * @default 'html.dark'
     */
    darkmodeSelector?: string;
}
