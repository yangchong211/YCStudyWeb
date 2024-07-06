import { isFunction, isPlainObject } from '@vuepress/helper/client';
import { computed, inject, isRef, ref, toValue, watch } from 'vue';
import { usePageFrontmatter } from 'vuepress/client';
const watermarkSymbol = Symbol(__VUEPRESS_DEV__ ? 'watermark' : '');
const watermarkOptions = ref({});
/**
 * Define additional watermark configurations in the client-side.
 *
 * In most cases, the majority of options should be defined in Node,
 * but there are some special situations. For example,
 * it may be necessary to control different watermark opacities, font colors,
 * etc., in dark/light mode, or to pass in callbacks such as `onSuccess`, `extraDrawFunc`, and so on.
 *
 * 在客户端中定义额外的水印配置。
 *
 * 通常来说，大部分选项应该在 Node 中定义，但存在一些特殊情况。
 * 比如需要在 深色/浅色 模式下控制不同的 水印 透明度、字体颜色等，
 * 或者需要传入如 `onSuccess`、`extraDrawFunc` 等回调函数。
 *
 * @example
 * ```ts
 * import { computed } from 'vue'
 *
 * const isDark = useDarkMode()
 *
 * const watermarkConfig = computed(() => ({
 *   fontColor: isDark.value ? '#fff' : '#000',
 *   onSuccess: () => {
 *     console.log('success')
 *   },
 * }))
 *
 * defineWatermarkConfig(watermarkConfig)
 * ```
 *
 * @param userConfig Watermark options
 *
 */
export const defineWatermarkConfig = (userConfig) => {
    if (isRef(userConfig)) {
        watch(userConfig, (value) => {
            watermarkOptions.value = value;
        }, { immediate: true });
    }
    else if (isFunction(userConfig)) {
        watch(userConfig, (value) => {
            watermarkOptions.value = value;
        });
    }
    else {
        watermarkOptions.value = userConfig;
    }
};
export const useWatermarkOptions = (options) => {
    const globalOptions = inject(watermarkSymbol);
    const frontmatter = usePageFrontmatter();
    return computed(() => {
        const { watermark } = frontmatter.value;
        return {
            ...toValue(options),
            ...globalOptions.value,
            ...(isPlainObject(watermark) ? watermark : {}),
        };
    });
};
export const injectWatermarkConfig = (app) => {
    app.provide(watermarkSymbol, watermarkOptions);
};
