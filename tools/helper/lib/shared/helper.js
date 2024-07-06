import { isString } from 'vuepress/shared';
export { isFunction, isString, isPlainObject } from 'vuepress/shared';
/* Type helper */
export const isDef = (val) => typeof val !== 'undefined';
export const isBoolean = (val) => typeof val === 'boolean';
export const isNumber = (val) => typeof val === 'number';
export const isArray = Array.isArray;
export const isRegExp = (val) => val instanceof RegExp;
/* String helper */
export const startsWith = (str, prefix) => isString(str) && str.startsWith(prefix);
export const endsWith = (str, suffix) => isString(str) && str.endsWith(suffix);
export { ensureEndingSlash, ensureLeadingSlash, removeEndingSlash, removeLeadingSlash, } from 'vuepress/shared';
/* Object helper */
export const entries = Object.entries;
export const fromEntries = Object.fromEntries;
export const keys = Object.keys;
export const values = Object.values;
