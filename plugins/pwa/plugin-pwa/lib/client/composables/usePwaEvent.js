import { inject } from 'vue';
export const pwaEventSymbol = Symbol(__VUEPRESS_DEV__ ? 'PwaEvent' : '');
export const usePwaEvent = () => {
    const pwaEvent = inject(pwaEventSymbol);
    if (!pwaEvent)
        throw new Error('usePwaEvent() is called without provider.');
    return pwaEvent;
};
