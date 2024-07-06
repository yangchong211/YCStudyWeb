import type { App } from 'vuepress/core';
export interface PrepareConfigOptions {
    id: string;
    defaultConfig: string;
    defaultPalette: string;
    generator: string;
    userConfig: string;
    userPalette: string;
}
export declare const prepareConfigSass: (app: App, { id, defaultConfig, defaultPalette, generator, userConfig, userPalette, }: PrepareConfigOptions) => Promise<string>;
