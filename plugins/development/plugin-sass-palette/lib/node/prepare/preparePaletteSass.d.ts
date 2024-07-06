import type { App } from 'vuepress/core';
export interface PreparePaletteOptions {
    id: string;
    defaultPalette: string;
    generator: string;
    userPalette: string;
}
export declare const preparePaletteSass: (app: App, { id, defaultPalette, generator, userPalette }: PreparePaletteOptions) => Promise<string>;
