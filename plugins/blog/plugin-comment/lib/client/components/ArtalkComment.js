import { isString, wait } from '@vuepress/helper/client';
import { computed, defineComponent, h, nextTick, onMounted, onUnmounted, ref, shallowRef, watch, } from 'vue';
import { usePageData, useSiteData } from 'vuepress/client';
import { useArtalkOptions } from '../helpers/index.js';
import { LoadingIcon } from './LoadingIcon.js';
import 'artalk/dist/Artalk.css';
export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'ArtalkComment',
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
        const artalkOptions = useArtalkOptions();
        const page = usePageData();
        const site = useSiteData();
        const loaded = ref(false);
        const artalkContainer = shallowRef();
        let artalk = null;
        const enableArtalk = computed(() => isString(artalkOptions.value.server));
        const initArtalk = async () => {
            const [{ default: Artalk }] = await Promise.all([
                import(/* webpackChunkName: "artalk" */ 'artalk/dist/Artalk.mjs'),
                wait(artalkOptions.value.delay || 800),
            ]);
            loaded.value = true;
            await nextTick();
            artalk = Artalk.init({
                useBackendConf: false,
                site: site.value.title,
                pageTitle: page.value.title,
                ...artalkOptions.value,
                el: artalkContainer.value,
                pageKey: props.identifier,
                darkMode: props.darkmode,
            });
            if (artalkOptions.value.useBackendConf)
                artalk.on('mounted', () => {
                    artalk.setDarkMode(props.darkmode);
                });
        };
        const updateArtalk = () => {
            artalk.update({
                site: site.value.title,
                pageTitle: page.value.title,
                pageKey: props.identifier,
            });
            artalk.reload();
        };
        onMounted(() => {
            watch(() => artalkOptions.value, () => {
                artalk?.destroy();
                initArtalk();
            }, { immediate: true });
            watch(() => props.identifier, () => {
                if (artalk)
                    nextTick().then(() => updateArtalk());
            });
            watch(() => props.darkmode, (value) => {
                artalk?.setDarkMode(value);
            });
        });
        onUnmounted(() => {
            artalk?.destroy();
        });
        return () => enableArtalk.value
            ? h('div', { class: 'artalk-wrapper' }, [
                loaded.value ? null : h(LoadingIcon),
                h('div', { ref: artalkContainer }),
            ])
            : null;
    },
});
