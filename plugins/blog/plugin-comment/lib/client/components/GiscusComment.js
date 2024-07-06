import { computed, defineComponent, h, onMounted, ref } from 'vue';
import { usePageLang } from 'vuepress/client';
import { useGiscusOptions } from '../helpers/index.js';
import { LoadingIcon } from './LoadingIcon.js';
import '../styles/giscus.css';
// Note: Should be updated with https://github.com/giscus/giscus/tree/main/locales
const SUPPORTED_LANGUAGES = [
    'ar',
    'ca',
    'da',
    'de',
    'en',
    'eo',
    'es',
    'fa',
    'fr',
    'he',
    'id',
    'it',
    'ja',
    'ko',
    'nl',
    'pl',
    'pt',
    'ro',
    'ru',
    'th',
    'tr',
    'uk',
    'uz',
    'vi',
    'zh-CN',
    'zh-TW',
];
export default defineComponent({
    name: 'GiscusComment',
    props: {
        /**
         * The path of the comment
         */
        identifier: {
            type: String,
            required: true,
        },
        /**
         * Whether the component is in darkmode
         *
         * 组件是否处于夜间模式
         */
        darkmode: Boolean,
    },
    setup(props) {
        const giscusOptions = useGiscusOptions();
        const lang = usePageLang();
        const enableGiscus = computed(() => Boolean(giscusOptions.value.repo &&
            giscusOptions.value.repoId &&
            giscusOptions.value.category &&
            giscusOptions.value.categoryId));
        const loaded = ref(false);
        const giscusLang = computed(() => {
            if (SUPPORTED_LANGUAGES.includes(lang.value))
                return lang.value;
            const shortCode = lang.value.split('-')[0];
            if (SUPPORTED_LANGUAGES.includes(shortCode))
                return shortCode;
            return 'en';
        });
        const config = computed(() => ({
            repo: giscusOptions.value.repo,
            repoId: giscusOptions.value.repoId,
            category: giscusOptions.value.category,
            categoryId: giscusOptions.value.categoryId,
            lang: giscusLang.value,
            theme: props.darkmode
                ? giscusOptions.value.darkTheme || 'dark'
                : giscusOptions.value.lightTheme || 'light',
            mapping: giscusOptions.value.mapping || 'pathname',
            term: props.identifier,
            inputPosition: giscusOptions.value.inputPosition || 'top',
            reactionsEnabled: giscusOptions.value.reactionsEnabled === false ? '0' : '1',
            strict: giscusOptions.value.strict === false ? '0' : '1',
            loading: giscusOptions.value.lazyLoading === false ? 'eager' : 'lazy',
            emitMetadata: '0',
        }));
        onMounted(async () => {
            await import(/* webpackChunkName: "giscus" */ 'giscus');
            loaded.value = true;
        });
        return () => enableGiscus.value
            ? h('div', {
                id: 'comment',
                class: [
                    'giscus-wrapper',
                    { 'input-top': giscusOptions.value.inputPosition !== 'bottom' },
                ],
            }, loaded.value ? h('giscus-widget', config.value) : h(LoadingIcon))
            : null;
    },
});
