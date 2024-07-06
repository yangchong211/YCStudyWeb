import { defineClientConfig } from 'vuepress/client';
import { Docsearch } from './components/index.js';
import { injectDocSearchConfig } from './helpers/index.js';
export default defineClientConfig({
    enhance({ app }) {
        injectDocSearchConfig(app);
        app.component('Docsearch', Docsearch);
    },
});
