import { Logger } from '@vuepress/helper';
import type { PluginFunction } from 'vuepress/core';
import type { CopyrightPluginOptions } from './options.js';
export declare const logger: Logger;
export declare const copyrightPlugin: (options?: CopyrightPluginOptions) => PluginFunction;
