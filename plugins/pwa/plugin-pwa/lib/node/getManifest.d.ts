import type { App } from 'vuepress/core';
import type { AppManifest } from '../shared/index.js';
import type { PwaPluginOptions } from './options.js';
export declare const getManifest: (app: App, options: PwaPluginOptions) => Promise<AppManifest>;
