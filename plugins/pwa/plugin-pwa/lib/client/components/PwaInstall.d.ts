import type { PropType, VNode } from 'vue';
import type { PwaPluginLocaleConfig } from '../../shared/index.js';
import '../styles/modal.css';
export declare const PwaInstall: import("vue").DefineComponent<{
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
}>>, {}, {}>;
