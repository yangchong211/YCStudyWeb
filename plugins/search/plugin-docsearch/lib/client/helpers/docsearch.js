import { deepAssign, isFunction } from '@vuepress/helper/client';
import { computed, inject, isRef, ref, watch } from 'vue';
import { useRouteLocale } from 'vuepress/client';
const docSearchOptions = __DOCSEARCH_OPTIONS__;
const docsearch = ref(docSearchOptions);
const docsearchSymbol = Symbol(__VUEPRESS_DEV__ ? 'docsearch' : '');
export const defineDocSearchConfig = (options) => {
    if (isRef(options)) {
        watch(() => options.value, (value) => {
            docsearch.value = deepAssign({}, docSearchOptions, value);
        });
    }
    else if (isFunction(options)) {
        watch(options, (value) => {
            docsearch.value = deepAssign({}, docSearchOptions, value);
        });
    }
    else {
        docsearch.value = deepAssign({}, docSearchOptions, options);
    }
};
export const useDocSearchOptions = () => {
    const options = inject(docsearchSymbol);
    const routeLocale = useRouteLocale();
    return computed(() => ({
        ...options.value,
        ...options.value.locales?.[routeLocale.value],
    }));
};
export const injectDocSearchConfig = (app) => {
    app.provide(docsearchSymbol, docsearch);
};
