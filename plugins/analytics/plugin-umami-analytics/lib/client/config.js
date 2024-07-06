import { defineClientConfig } from 'vuepress/client';
import { useUmamiAnalytics } from './composables/index.js';
export default defineClientConfig({
    setup() {
        if (__VUEPRESS_SSR__)
            return;
        useUmamiAnalytics(__UMM_OPTIONS__);
    },
});
