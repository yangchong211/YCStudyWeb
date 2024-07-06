import type { VNode } from 'vue';
import '../styles/catalog.css';
export interface CatalogProps {
    base?: string;
    level?: 1 | 2 | 3;
}
declare const _default: import("vue").DefineComponent<{
    /**
     * Catalog Base
     *
     * 目录的基础路径
     *
     * @default current route base
     */
    base: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Max level of catalog
     *
     * @description only 1,2,3 are supported
     *
     * Catalog 的最大层级
     *
     * @description 目前仅支持 1,2,3
     *
     * @default 3
     */
    level: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Whether show index for catalog
     *
     * 目录是否显示索引
     */
    index: BooleanConstructor;
    /**
     * Whether hide `Category` title
     *
     * 是否隐藏 `目录` 标题
     *
     * @default false
     */
    hideHeading: BooleanConstructor;
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Catalog Base
     *
     * 目录的基础路径
     *
     * @default current route base
     */
    base: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Max level of catalog
     *
     * @description only 1,2,3 are supported
     *
     * Catalog 的最大层级
     *
     * @description 目前仅支持 1,2,3
     *
     * @default 3
     */
    level: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Whether show index for catalog
     *
     * 目录是否显示索引
     */
    index: BooleanConstructor;
    /**
     * Whether hide `Category` title
     *
     * 是否隐藏 `目录` 标题
     *
     * @default false
     */
    hideHeading: BooleanConstructor;
}>>, {
    base: string;
    level: number;
    index: boolean;
    hideHeading: boolean;
}, {}>;
export default _default;
