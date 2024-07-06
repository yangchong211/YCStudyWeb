import type { VNode } from 'vue';
import type { GiscusInputPosition, GiscusMapping, GiscusRepo, GiscusTheme } from '../../shared/index.js';
import '../styles/giscus.css';
declare const SUPPORTED_LANGUAGES: readonly ["ar", "ca", "da", "de", "en", "eo", "es", "fa", "fr", "he", "id", "it", "ja", "ko", "nl", "pl", "pt", "ro", "ru", "th", "tr", "uk", "uz", "vi", "zh-CN", "zh-TW"];
type BooleanString = '0' | '1';
export type GiscusLang = (typeof SUPPORTED_LANGUAGES)[number];
export type GiscusLoading = 'lazy' | 'eager';
export interface GiscusProps {
    id?: string | undefined;
    repo: GiscusRepo;
    repoId: string;
    category?: string | undefined;
    categoryId?: string | undefined;
    mapping: GiscusMapping;
    term?: string | undefined;
    theme?: GiscusTheme | undefined;
    reactionsEnabled?: BooleanString | undefined;
    strict?: BooleanString | undefined;
    emitMetadata?: BooleanString | undefined;
    inputPosition?: GiscusInputPosition | undefined;
    lang?: GiscusLang | undefined;
    loading?: GiscusLoading | undefined;
}
declare const _default: import("vue").DefineComponent<{
    /**
     * The path of the comment
     */
    identifier: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Whether the component is in darkmode
     *
     * 组件是否处于夜间模式
     */
    darkmode: BooleanConstructor;
}, () => VNode | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The path of the comment
     */
    identifier: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Whether the component is in darkmode
     *
     * 组件是否处于夜间模式
     */
    darkmode: BooleanConstructor;
}>>, {
    darkmode: boolean;
}, {}>;
export default _default;
