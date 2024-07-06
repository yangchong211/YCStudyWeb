import type { App } from 'vuepress/core';
export interface PrepareStyleOptions {
    id: string;
    userStyle: string | null;
}
export declare const prepareStyleSass: (app: App, { id, userStyle }: PrepareStyleOptions) => Promise<string | null>;
