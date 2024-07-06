import type { Plugin } from 'vuepress/core';
import type { ShikiPluginOptions } from './options.js';
export declare const shikiPlugin: ({ preWrapper, lineNumbers, ...options }?: ShikiPluginOptions) => Plugin;
