import { hasGlobalComponent } from '@vuepress/helper/client';
import { defineClientConfig } from 'vuepress/client';
import Catalog from './components/Catalog.js';
import { injectCatalogInfoGetter } from './helpers/index.js';
import './styles/vars.css';
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
export default defineClientConfig({
    enhance: ({ app }) => {
        injectCatalogInfoGetter(app);
        if (!hasGlobalComponent('Catalog', app))
            app.component('Catalog', Catalog);
    },
});
