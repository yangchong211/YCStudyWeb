import type { Plugin } from 'vuepress/core';
import type { WatermarkPluginOptions } from './options.js';
export declare const watermarkPlugin: ({ enabled, ...options }?: WatermarkPluginOptions) => Plugin;
