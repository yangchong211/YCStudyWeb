import type { PluginObject } from 'vuepress/core';
export interface RTLPluginOptions {
    /**
     * RTL locales
     *
     * @default ['/']
     */
    locales?: string[];
    /**
     * RTL selector
     *
     * @default { 'html': { dir: 'rtl' } }
     */
    selector?: {
        [element: string]: {
            [attr: string]: string;
        };
    };
}
export declare const rltPlugin: (options?: RTLPluginOptions) => PluginObject;
