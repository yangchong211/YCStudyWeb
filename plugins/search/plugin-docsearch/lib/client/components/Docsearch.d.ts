import type { PropType } from 'vue';
import type { DocsearchOptions } from '../../shared/index.js';
export declare const Docsearch: import("vue").DefineComponent<{
    containerId: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: PropType<DocsearchOptions>;
        default: () => {};
    };
}, () => (import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | null)[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    containerId: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: PropType<DocsearchOptions>;
        default: () => {};
    };
}>>, {
    containerId: string;
    options: DocsearchOptions;
}, {}>;
