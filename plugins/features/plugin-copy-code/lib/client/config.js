import { defineClientConfig } from 'vuepress/client';
import { useCopyCode } from './composables/index.js';
export default defineClientConfig({
    setup: () => {
        useCopyCode({
            selector: __CC_SELECTOR__,
            locales: __CC_LOCALES__,
            duration: __CC_DURATION__,
            delay: __CC_DELAY__,
            showInMobile: __CC_SHOW_IN_MOBILE__,
        });
    },
});
