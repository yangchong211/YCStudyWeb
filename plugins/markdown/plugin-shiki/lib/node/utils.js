import { Logger } from '@vuepress/helper';
import { customAlphabet } from 'nanoid';
const VUE_RE = /-vue$/;
export const PLUGIN_NAME = '@vuepress/plugin-shiki';
export const logger = new Logger(PLUGIN_NAME);
export const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', 10);
export const resolveLanguage = (info) => info
    .match(/^([^ :[{]+)/)?.[1]
    ?.replace(VUE_RE, '')
    .toLowerCase() ?? '';
export const resolveAttr = (info, attr) => {
    // try to match specified attr mark
    const pattern = `\\b${attr}\\s*=\\s*(?<quote>['"])(?<content>.+?)\\k<quote>(\\s|$)`;
    const regex = new RegExp(pattern, 'i');
    const match = info.match(regex);
    // return content if matched, null if not specified
    return match?.groups?.content ?? null;
};
/**
 * 2 steps:
 *
 * 1. convert attrs into line numbers:
 *    {4,7-13,16,23-27,40} -> [4,7,8,9,10,11,12,13,16,23,24,25,26,27,40]
 * 2. convert line numbers into line options:
 *    [{ line: number, classes: string[] }]
 */
export const attrsToLines = (attrs) => {
    attrs = attrs.replace(/^(?:\[.*?\])?.*?([\d,-]+).*/, '$1').trim();
    const result = [];
    if (!attrs) {
        return [];
    }
    attrs
        .split(',')
        .map((v) => v.split('-').map((v) => parseInt(v, 10)))
        .forEach(([start, end]) => {
        if (start && end) {
            result.push(...Array.from({ length: end - start + 1 }, (_, i) => start + i));
        }
        else {
            result.push(start);
        }
    });
    return result.map((line) => ({
        line,
        classes: ['highlighted'],
    }));
};
