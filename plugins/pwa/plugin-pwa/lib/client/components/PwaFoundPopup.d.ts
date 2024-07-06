import type { PropType, SlotsType, VNode } from 'vue';
import type { PwaPluginLocaleConfig } from '../../shared/index.js';
import '../styles/popup.css';
export declare const PwaFoundPopup: import("vue").DefineComponent<{
    /** locale data */
    locales: {
        type: PropType<PwaPluginLocaleConfig>;
        required: true;
    };
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** locale data */
    locales: {
        type: PropType<PwaPluginLocaleConfig>;
        required: true;
    };
}>>, {}, SlotsType<{
    default?: (props: {
        found: boolean;
        refresh: () => void;
    }) => VNode[] | VNode | null;
}>>;
