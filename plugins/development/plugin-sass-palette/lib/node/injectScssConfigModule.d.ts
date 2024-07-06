import type { App } from 'vuepress/core';
/**
 * Use "additionalData" to make `${getIdPrefix(id)}config` available in scss
 *
 * @param config VuePress Bundler config
 * @param app VuePress Node App
 * @param id Module id
 */
export declare const injectScssConfigModule: (config: unknown, app: App, id: string) => void;
