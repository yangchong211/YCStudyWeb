import { defineClientConfig } from 'vuepress/client';
import { useGoogleAnalytics } from './composables/index.js';
const options = __GA_OPTIONS__;
export default defineClientConfig({
    enhance() {
        if (__VUEPRESS_SSR__)
            return;
        useGoogleAnalytics(options);
    },
});
