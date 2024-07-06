import { defineClientConfig } from 'vuepress/client';
import RedirectModal from './components/RedirectModal.js';
import { setupDevServerRedirect } from './composables/index.js';
import './styles/vars.css';
export default defineClientConfig({
    setup() {
        if (__VUEPRESS_DEV__)
            setupDevServerRedirect();
    },
    rootComponents: __REDIRECT_LOCALE_SWITCH__ ? [RedirectModal] : [],
});
