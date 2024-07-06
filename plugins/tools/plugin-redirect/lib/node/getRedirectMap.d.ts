import type { App } from 'vuepress/core';
import type { RedirectPluginOptions } from './types/index.js';
export declare const getRedirectMap: (app: App, options: RedirectPluginOptions) => Record<string, string>;
