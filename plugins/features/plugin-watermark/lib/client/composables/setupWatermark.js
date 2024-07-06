import { wait } from '@vuepress/helper/client';
import { isRef, nextTick, onMounted, toValue, watch } from 'vue';
import { useRoutePath, useSiteLocaleData, withBase } from 'vuepress/client';
import { Watermark } from 'watermark-js-plus';
export const setupWatermark = (options, enabled, delay = 500) => {
    const routePath = useRoutePath();
    const siteData = useSiteLocaleData();
    onMounted(() => {
        const watermark = new Watermark();
        const updateWaterMark = (watermarkOptions) => {
            const options = {
                // set default text to site title
                content: siteData.value.title,
                // set font color to make it readable both lightmode and darkmode
                fontColor: '#76747f',
                // default alpha of blind mode is 0.005 while default mode is 0.165
                globalAlpha: watermarkOptions.mode === 'blind' ? 0.005 : 0.165,
                ...watermarkOptions,
            };
            if (options.image?.startsWith('/')) {
                options.image = withBase(options.image);
            }
            if (toValue(enabled)) {
                watermark.changeOptions(options);
            }
        };
        watch([enabled, routePath], () => nextTick(() => {
            if (enabled.value) {
                wait(delay).then(() => updateWaterMark(toValue(options)));
            }
            else {
                watermark.destroy();
            }
        }), { immediate: true });
        if (isRef(options))
            watch(options, updateWaterMark);
    });
};
