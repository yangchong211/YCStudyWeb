import type { WatermarkOptions as _WatermarkRawOptions } from 'watermark-js-plus';
export type WatermarkPureOptions = Omit<Partial<_WatermarkRawOptions>, 'onSuccess' | 'onBeforeDestroy' | 'onDestroyed' | 'extraDrawFunc' | 'onObserveError' | 'parent'> & {
    /**
     * Watermark parent selector
     *
     * 水印父元素选择器
     *
     * @default 'body'
     */
    parent?: 'body' | (string & {
        __z_ignore?: never;
    });
};
export interface WatermarkPluginFrontmatter {
    watermark?: WatermarkPureOptions | boolean;
}
