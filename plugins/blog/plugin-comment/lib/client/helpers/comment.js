import { isFunction } from '@vuepress/helper/client';
import { inject, isRef, ref, watch } from 'vue';
const commentOptions = __COMMENT_OPTIONS__;
const comment = ref(commentOptions);
const commentSymbol = Symbol(__VUEPRESS_DEV__ ? 'comment' : '');
const defineCommentConfig = (options) => {
    if (isRef(options)) {
        watch(() => options.value, (value) => {
            comment.value = { ...commentOptions, ...value };
        });
    }
    else if (isFunction(options)) {
        watch(options, (value) => {
            comment.value = { ...commentOptions, ...value };
        });
    }
    else {
        comment.value = { ...commentOptions, ...options };
    }
};
export const useCommentOptions = () => inject(commentSymbol);
export const defineArtalkConfig = (defineCommentConfig);
export const useArtalkOptions = (useCommentOptions);
export const defineGiscusConfig = (defineCommentConfig);
export const useGiscusOptions = (useCommentOptions);
export const defineTwikooConfig = (defineCommentConfig);
export const useTwikooOptions = (useCommentOptions);
export const defineWalineConfig = (defineCommentConfig);
export const useWalineOptions = (useCommentOptions);
export const injectCommentConfig = (app) => {
    app.provide(commentSymbol, comment);
};
