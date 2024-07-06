import { computed, defineComponent, h, onMounted, ref, watch } from 'vue';
import { usePageLang, useRouteLocale } from 'vuepress/client';
import { useDocsearchHotkeyListener, useDocsearchShim, } from '../composables/index.js';
import { useDocSearchOptions } from '../helpers/index.js';
import { getFacetFilters, getSearchButtonTemplate, pollToOpenDocsearch, preconnectToAlgolia, } from '../utils/index.js';
if (__DOCSEARCH_INJECT_STYLES__) {
    import('@docsearch/css');
    import('../styles/docsearch.css');
}
export const Docsearch = defineComponent({
    name: 'Docsearch',
    props: {
        containerId: {
            type: String,
            default: 'docsearch-container',
        },
        options: {
            type: Object,
            default: () => ({}),
        },
    },
    setup(props) {
        const docSearchOptions = useDocSearchOptions();
        const docsearchShim = useDocsearchShim();
        const lang = usePageLang();
        const routeLocale = useRouteLocale();
        const hasInitialized = ref(false);
        const hasTriggered = ref(false);
        // resolve docsearch options for current locale
        const options = computed(() => {
            const { locales = {}, ...options } = props.options;
            return {
                ...docSearchOptions.value,
                ...options,
                ...locales[routeLocale.value],
            };
        });
        /**
         * Import docsearch js and initialize
         */
        const initialize = async () => {
            const { default: docsearch } = await import('@docsearch/js');
            docsearch({
                ...docsearchShim,
                ...options.value,
                container: `#${props.containerId}`,
                searchParameters: {
                    ...options.value.searchParameters,
                    facetFilters: getFacetFilters(options.value.searchParameters?.facetFilters, lang.value),
                },
            });
            // mark as initialized
            hasInitialized.value = true;
        };
        /**
         * Trigger docsearch initialization and open it
         */
        const trigger = () => {
            if (hasTriggered.value || hasInitialized.value)
                return;
            // mark as triggered
            hasTriggered.value = true;
            // initialize and open
            initialize();
            pollToOpenDocsearch();
            // re-initialize when route locale changes
            watch(routeLocale, initialize);
        };
        // trigger when hotkey is pressed
        useDocsearchHotkeyListener(trigger);
        // preconnect to algolia
        onMounted(() => preconnectToAlgolia(options.value.appId));
        return () => [
            h('div', {
                id: props.containerId,
                style: { display: hasInitialized.value ? 'block' : 'none' },
            }),
            hasInitialized.value
                ? null
                : h('div', {
                    onClick: trigger,
                    innerHTML: getSearchButtonTemplate(options.value.translations?.button),
                }),
        ];
    },
});
