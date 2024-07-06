import type { App } from 'vuepress';
import type { MarkdownImagePluginOptions } from '../options.js';
export declare const prepareClientConfigFile: (app: App, { lightmodeSelector, darkmodeSelector, figure, mark, }: MarkdownImagePluginOptions) => Promise<string>;
