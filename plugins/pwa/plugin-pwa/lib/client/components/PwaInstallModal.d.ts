import type { PropType, VNode } from 'vue';
import type { PwaPluginLocaleConfig } from '../../shared/index.js';
export declare const PwaInstallModal: import("vue").DefineComponent<{
    /** locale data */
    locales: {
        type: PropType<PwaPluginLocaleConfig>;
        required: true;
    };
    /**
     * Whether use hint message instead of showing a button
     *
     * 是否使用提示
     */
    useHint: BooleanConstructor;
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "canInstall" | "hint")[], "close" | "canInstall" | "hint", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /** locale data */
    locales: {
        type: PropType<PwaPluginLocaleConfig>;
        required: true;
    };
    /**
     * Whether use hint message instead of showing a button
     *
     * 是否使用提示
     */
    useHint: BooleanConstructor;
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onCanInstall?: ((...args: any[]) => any) | undefined;
    onHint?: ((...args: any[]) => any) | undefined;
}, {
    useHint: boolean;
}, {}>;
