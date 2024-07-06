import { isFunction } from '@vuepress/helper/client';
import { inject, isRef, ref, watch } from 'vue';
const photoswipeOptions = ref({});
const photoswipeSymbol = Symbol(__VUEPRESS_DEV__ ? 'photoswipe' : '');
export const definePhotoSwipeConfig = (options) => {
    if (isRef(options)) {
        watch(() => options.value, (value) => {
            photoswipeOptions.value = value;
        });
    }
    else if (isFunction(options)) {
        watch(options, (value) => {
            photoswipeOptions.value = value;
        });
    }
    else {
        photoswipeOptions.value = options;
    }
};
export const usePhotoSwipeOptions = () => inject(photoswipeSymbol);
export const injectPhotoSwipeConfig = (app) => {
    app.provide(photoswipeSymbol, photoswipeOptions);
};
