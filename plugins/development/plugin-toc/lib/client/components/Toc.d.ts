import type { PropType, VNode } from 'vue';
import type { PageHeader } from 'vuepress/client';
import type { TocPropsOptions } from '../../shared/index.js';
export type TocPropsHeaders = PageHeader[];
export interface TocProps {
    headers: TocPropsHeaders;
    options: TocPropsOptions;
}
export declare const Toc: import("vue").DefineComponent<{
    headers: {
        type: PropType<TocPropsHeaders>;
        default: null;
    };
    options: {
        type: PropType<Partial<TocPropsOptions>>;
        default: () => {};
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    headers: {
        type: PropType<TocPropsHeaders>;
        default: null;
    };
    options: {
        type: PropType<Partial<TocPropsOptions>>;
        default: () => {};
    };
}>>, {
    headers: TocPropsHeaders;
    options: Partial<TocPropsOptions>;
}, {}>;
