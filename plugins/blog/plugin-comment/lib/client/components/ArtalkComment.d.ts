import type { VNode } from 'vue';
import 'artalk/dist/Artalk.css';
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
