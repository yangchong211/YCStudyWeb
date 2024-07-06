import type { PluginObject } from 'vuepress/core';
export interface RemovePwaPluginOptions {
    /**
     * Original service worker cache prefix
     *
     * 原始 service worker 缓存前缀
     *
     * @default "workbox"
     */
    cachePrefix?: string;
    /**
     * Original service worker location relative to dest folder
     *
     * 相对于 dest 文件夹的原始 service worker 位置
     *
     * @default "service-worker.js"
     */
    swLocation?: string;
}
export declare const removePwaPlugin: ({ cachePrefix, swLocation, }: RemovePwaPluginOptions) => PluginObject;
