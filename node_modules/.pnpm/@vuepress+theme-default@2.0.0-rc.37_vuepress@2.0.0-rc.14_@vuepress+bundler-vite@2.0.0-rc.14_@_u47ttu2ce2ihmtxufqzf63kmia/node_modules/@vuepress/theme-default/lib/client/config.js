import { setupDarkMode } from '@theme/useDarkMode';
import { useScrollPromise } from '@theme/useScrollPromise';
import { setupSidebarItems } from '@theme/useSidebarItems';
import { hasGlobalComponent } from '@vuepress/helper/client';
import { h } from 'vue';
import { defineClientConfig } from 'vuepress/client';
import { Badge, CodeGroup, CodeGroupItem } from './components/global/index.js';
import Layout from './layouts/Layout.vue';
import NotFound from './layouts/NotFound.vue';
import '@vuepress/helper/normalize.css';
import './styles/index.scss';
export default defineClientConfig({
    enhance({ app, router }) {
        if (!hasGlobalComponent('Badge'))
            app.component('Badge', Badge);
        if (!hasGlobalComponent('CodeGroup'))
            app.component('CodeGroup', CodeGroup);
        if (!hasGlobalComponent('CodeGroupItem'))
            app.component('CodeGroupItem', CodeGroupItem);
        // compat with @vuepress/plugin-docsearch and @vuepress/plugin-search
        app.component('VPSearch', () => {
            const SearchComponent = app.component('Docsearch') || app.component('SearchBox');
            if (SearchComponent) {
                return h(SearchComponent);
            }
            return null;
        });
        // handle scrollBehavior with transition
        const scrollBehavior = router.options.scrollBehavior;
        router.options.scrollBehavior = async (...args) => {
            await useScrollPromise().wait();
            return scrollBehavior(...args);
        };
    },
    setup() {
        setupDarkMode();
        setupSidebarItems();
    },
    layouts: {
        Layout,
        NotFound,
    },
});
