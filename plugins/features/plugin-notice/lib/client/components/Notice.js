import { isLinkAbsolute, isLinkHttp, startsWith } from '@vuepress/helper/client';
import { computed, defineComponent, h, onMounted, ref, TransitionGroup, watch, } from 'vue';
import { useRoutePath, useRouter } from 'vuepress/client';
import { CloseIcon } from './CloseIcon.js';
import '../styles/notice.css';
export const Notice = defineComponent({
    name: 'Notice',
    props: {
        /**
         * Notice locales settings
         *
         * 通知的多语言设置
         */
        config: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const router = useRouter();
        const routePath = useRoutePath();
        const isVisible = ref(false);
        const matchedConfig = computed(() => {
            const option = props.config.find((item) => 'match' in item
                ? new RegExp(item.match).test(routePath.value)
                : startsWith(routePath.value, item.path));
            if (!option)
                return null;
            const { noticeKey, actions = [], title = '', content = '', ...rest } = option;
            return {
                ...rest,
                actions,
                title,
                content,
                key: noticeKey ? `notice-${noticeKey}` : `notice:${title}${content}`,
            };
        });
        const closeModal = () => {
            isVisible.value = false;
            if (matchedConfig.value) {
                ;
                (matchedConfig.value.showOnce ? localStorage : sessionStorage).setItem(matchedConfig.value.key, 'true');
            }
        };
        const footerAction = (link) => {
            if (link)
                if (isLinkAbsolute(link))
                    router.push(link);
                else if (isLinkHttp(link))
                    window.open(link);
            closeModal();
        };
        onMounted(() => {
            watch(matchedConfig, () => {
                if (matchedConfig.value) {
                    const hasBeenClosed = (matchedConfig.value.showOnce ? localStorage : sessionStorage).getItem(matchedConfig.value.key);
                    isVisible.value = !hasBeenClosed;
                }
            }, { immediate: true });
        });
        return () => h(TransitionGroup, { name: 'notice-fade' }, () => matchedConfig.value && isVisible.value
            ? [
                matchedConfig.value.fullscreen
                    ? h('div', {
                        key: 'mask',
                        class: 'vp-notice-mask',
                        onClick: () => {
                            if (!matchedConfig.value.confirm)
                                closeModal();
                        },
                    })
                    : null,
                h('div', {
                    key: 'popup',
                    class: [
                        'vp-notice-wrapper',
                        { fullscreen: matchedConfig.value.fullscreen },
                    ],
                }, [
                    h('header', { class: 'vp-notice-title' }, [
                        matchedConfig.value.confirm
                            ? null
                            : h(CloseIcon, { onClick: closeModal }),
                        h('span', { innerHTML: matchedConfig.value.title }),
                    ]),
                    h('div', {
                        class: 'vp-notice-content',
                        innerHTML: matchedConfig.value.content,
                    }),
                    h('div', { class: 'vp-notice-footer' }, matchedConfig.value.actions.map(({ text, link, type = '' }) => h('button', {
                        type: 'button',
                        class: ['vp-notice-footer-action', type],
                        onClick: () => footerAction(link),
                        innerHTML: text,
                    }))),
                ]),
            ]
            : []);
    },
});
