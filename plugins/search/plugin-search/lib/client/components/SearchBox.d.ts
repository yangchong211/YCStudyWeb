import type { PropType } from 'vue';
import type { LocaleConfig } from 'vuepress/shared';
import type { HotKeyOptions } from '../../shared/index.js';
export type SearchBoxLocales = LocaleConfig<{
    placeholder: string;
}>;
export declare const SearchBox: import("vue").DefineComponent<{
    locales: {
        type: PropType<SearchBoxLocales>;
        default: () => {};
    };
    hotKeys: {
        type: PropType<(string | HotKeyOptions)[]>;
        default: () => never[];
    };
    maxSuggestions: {
        type: NumberConstructor;
        default: number;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    locales: {
        type: PropType<SearchBoxLocales>;
        default: () => {};
    };
    hotKeys: {
        type: PropType<(string | HotKeyOptions)[]>;
        default: () => never[];
    };
    maxSuggestions: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    hotKeys: (string | HotKeyOptions)[];
    maxSuggestions: number;
    locales: SearchBoxLocales;
}, {}>;
