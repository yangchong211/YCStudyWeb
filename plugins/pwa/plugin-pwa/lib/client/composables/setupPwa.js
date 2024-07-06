import mitt from 'mitt';
import { onMounted, provide } from 'vue';
import { forceUpdate } from '../utils/index.js';
import { pwaEventSymbol } from './usePwaEvent.js';
import { useRegisterSW } from './useRegisterSW.js';
export const setupPwa = (serviceWorkerPath, shouldForceUpdate = false) => {
    if (__VUEPRESS_SSR__)
        return;
    // Create event emitter and provide it
    const event = mitt();
    provide(pwaEventSymbol, event);
    onMounted(async () => {
        if (__VUEPRESS_DEV__)
            return;
        let refreshing = false;
        // Only listen controllerchange event when a serviceWorker is active
        if (navigator.serviceWorker?.controller)
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                if (refreshing)
                    return;
                refreshing = true;
                window.location.reload();
            });
        if (shouldForceUpdate)
            forceUpdate();
        await useRegisterSW(serviceWorkerPath, event);
    });
};
