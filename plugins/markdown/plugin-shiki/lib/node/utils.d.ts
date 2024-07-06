import type { TransformerCompactLineOption } from '@shikijs/transformers';
import { Logger } from '@vuepress/helper';
export declare const PLUGIN_NAME = "@vuepress/plugin-shiki";
export declare const logger: Logger;
export declare const nanoid: (size?: number) => string;
export declare const resolveLanguage: (info: string) => string;
export declare const resolveAttr: (info: string, attr: string) => string | null;
/**
 * 2 steps:
 *
 * 1. convert attrs into line numbers:
 *    {4,7-13,16,23-27,40} -> [4,7,8,9,10,11,12,13,16,23,24,25,26,27,40]
 * 2. convert line numbers into line options:
 *    [{ line: number, classes: string[] }]
 */
export declare const attrsToLines: (attrs: string) => TransformerCompactLineOption[];
