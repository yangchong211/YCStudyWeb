import { h } from 'vue';
import { defineClientConfig } from 'vuepress/client';
import { Toc } from './components/Toc.js';
const defaultPropsOptions = __TOC_DEFAULT_PROPS_OPTIONS__;
export default defineClientConfig({
    enhance({ app }) {
        // wrap the toc component with default options
        app.component(__TOC_COMPONENT_NAME__, (props) => h(Toc, {
            headers: props.headers,
            options: {
                ...defaultPropsOptions,
                ...props.options,
            },
        }));
    },
});
