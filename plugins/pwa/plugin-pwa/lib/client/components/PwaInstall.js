import { useLocaleConfig } from '@vuepress/helper/client';
import { useToggle } from '@vueuse/core';
import { computed, defineComponent, h, onMounted, ref } from 'vue';
import { PwaInstallModal } from './PwaInstallModal.js';
import '../styles/modal.css';
export const PwaInstall = defineComponent({
    name: 'PwaInstall',
    props: {
        /** locale data */
        locales: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const locale = useLocaleConfig(props.locales);
        const [isOpen, toggleIsOpen] = useToggle(false);
        const canInstall = ref(false);
        const hasRelatedApps = ref(false);
        const isIOS = ref(false);
        const isSafari = ref(false);
        const hinted = ref(false);
        const useHint = computed(() => isIOS.value && isSafari.value && hinted.value === false);
        const showInstall = computed(() => (hasRelatedApps.value && canInstall.value) || useHint.value);
        const getInstalledStatus = () => {
            if (navigator.standalone)
                return navigator.standalone;
            return matchMedia('(display-mode: standalone)').matches;
        };
        const hint = () => {
            toggleIsOpen(false);
            hinted.value = true;
            // do not notify again
            localStorage.setItem('iOS-pwa-hint', 'hinted');
        };
        onMounted(() => {
            if (getInstalledStatus()) {
                const { userAgent } = navigator;
                // handle iOS specifically
                isIOS.value =
                    // regular iPhone
                    userAgent.includes('iPhone') ||
                        // regular iPad
                        userAgent.includes('iPad') ||
                        // iPad pro
                        Boolean(userAgent.includes('Macintosh') &&
                            navigator.maxTouchPoints &&
                            navigator.maxTouchPoints > 2);
                isSafari.value =
                    navigator.userAgent.includes('Safari') &&
                        !userAgent.includes('Chrome');
                hinted.value = Boolean(localStorage.getItem('iOS-pwa-hint'));
            }
            if ('getInstalledRelatedApps' in navigator)
                navigator
                    .getInstalledRelatedApps()
                    .then((result) => {
                    hasRelatedApps.value = result.length > 0;
                });
        });
        return () => h('div', { id: 'pwa-install' }, [
            showInstall.value
                ? h('button', {
                    type: 'button',
                    class: 'modal-button',
                    onClick: () => {
                        toggleIsOpen(true);
                    },
                }, locale.value.install)
                : null,
            h(PwaInstallModal, {
                style: {
                    display: isOpen.value ? 'block' : 'none',
                },
                locales: props.locales,
                useHint: useHint.value,
                onCanInstall: (value) => {
                    canInstall.value = value;
                },
                onHint: () => hint(),
                onClose: () => toggleIsOpen(false),
            }),
        ]);
    },
});
