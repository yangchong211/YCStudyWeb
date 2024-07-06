import { wait } from '@vuepress/helper/client';
import { computed, defineComponent, h, nextTick, onMounted, ref, watch, } from 'vue';
import { usePageLang } from 'vuepress/client';
import { useTwikooOptions } from '../helpers/index.js';
import { LoadingIcon } from './LoadingIcon.js';
export default defineComponent({
    name: 'TwikooComment',
    props: {
        /**
         * The path of the comment
         */
        identifier: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const twikooOptions = useTwikooOptions();
        const lang = usePageLang();
        const loaded = ref(false);
        const enableTwikoo = computed(() => Boolean(twikooOptions.value.envId));
        const initTwikoo = async () => {
            const [{ init }] = await Promise.all([
                import(/* webpackChunkName: "twikoo" */ 'twikoo'),
                wait(twikooOptions.value.delay || 800),
            ]);
            loaded.value = true;
            await nextTick();
            await init({
                lang: lang.value === 'zh-CN' ? 'zh-CN' : 'en',
                path: props.identifier,
                ...twikooOptions.value,
                el: '#twikoo-comment',
            });
        };
        onMounted(() => {
            watch(() => [props.identifier, twikooOptions.value], () => initTwikoo(), { immediate: true });
        });
        return () => enableTwikoo.value
            ? h('div', { id: 'comment', class: 'twikoo-wrapper' }, [
                loaded.value ? null : h(LoadingIcon),
                h('div', { id: 'twikoo-comment' }),
            ])
            : null;
    },
});
