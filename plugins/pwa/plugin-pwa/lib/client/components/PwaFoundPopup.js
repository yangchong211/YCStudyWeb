import { useLocaleConfig } from '@vuepress/helper/client';
import { defineComponent, h, onMounted, ref, Transition } from 'vue';
import { usePwaEvent } from '../composables/index.js';
import { UpdateIcon } from './icons.js';
import '../styles/popup.css';
export const PwaFoundPopup = defineComponent({
    name: 'PwaFoundPopup',
    props: {
        /** locale data */
        locales: {
            type: Object,
            required: true,
        },
    },
    slots: Object,
    setup(props, { slots }) {
        const locale = useLocaleConfig(props.locales);
        const found = ref(false);
        const refresh = () => {
            if (found.value) {
                // force refresh
                // @ts-expect-error: A non-standard API
                window.location.reload(true);
                found.value = false;
            }
        };
        onMounted(() => {
            const event = usePwaEvent();
            event.on('updatefound', () => {
                navigator.serviceWorker.getRegistration().then((registration) => {
                    // Check whether a valid service worker is active
                    if (registration && registration.active)
                        found.value = true;
                });
            });
            event.on('updated', () => {
                found.value = false;
            });
        });
        return () => h(Transition, { name: 'popup' }, () => slots.default?.({
            found: found.value,
            refresh,
        }) ||
            (found.value
                ? h('button', {
                    type: 'button',
                    class: 'sw-hint-popup',
                    tabindex: 0,
                    onClick: () => refresh(),
                }, [
                    locale.value.hint,
                    h('span', { class: 'icon-wrapper' }, h(UpdateIcon)),
                ])
                : null));
    },
});
