import { defineClientConfig } from 'vuepress/client';
import { useBaiduAnalytics } from './composables/index.js';
export default defineClientConfig({
    setup() {
        if (__VUEPRESS_SSR__)
            return;
        useBaiduAnalytics(__BD_ID__);
    },
});
