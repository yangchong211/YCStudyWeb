import type { Plugin } from 'vuepress/core';
/**
 * Options for @vuepress/plugin-google-tag-manager
 */
export interface GoogleTagManagerPluginOptions {
    /**
     * The Container ID of Google Tag Manager which should start with `'GTM-'`.
     */
    id: string;
}
export declare const googleTagManagerPlugin: (options: GoogleTagManagerPluginOptions) => Plugin;
