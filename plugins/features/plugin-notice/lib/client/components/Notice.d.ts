import type { PropType } from 'vue';
import type { NoticeItemOptions } from '../../shared/index.js';
import '../styles/notice.css';
type NoticeClientOption = Omit<NoticeItemOptions, 'key'> & {
    noticeKey?: string;
} & ({
    path: string;
} | {
    match: string;
});
export declare const Notice: import("vue").DefineComponent<{
    /**
     * Notice locales settings
     *
     * 通知的多语言设置
     */
    config: {
        type: PropType<NoticeClientOption[]>;
        required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Notice locales settings
     *
     * 通知的多语言设置
     */
    config: {
        type: PropType<NoticeClientOption[]>;
        required: true;
    };
}>>, {}, {}>;
export {};
