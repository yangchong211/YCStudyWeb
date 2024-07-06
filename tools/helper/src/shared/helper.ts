import { isString } from 'vuepress/shared'

export { isFunction, isString, isPlainObject } from 'vuepress/shared'

/* Type helper */
export const isDef = <T = any>(val?: T | undefined): val is T =>
  typeof val !== 'undefined'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isArray = Array.isArray
export const isRegExp = (val: unknown): val is RegExp => val instanceof RegExp

/* String helper */
export const startsWith = (str: unknown, prefix: string): boolean =>
  isString(str) && str.startsWith(prefix)

export const endsWith = (str: unknown, suffix: string): boolean =>
  isString(str) && str.endsWith(suffix)

export {
  ensureEndingSlash,
  ensureLeadingSlash,
  removeEndingSlash,
  removeLeadingSlash,
} from 'vuepress/shared'

/* Object helper */
export const entries = Object.entries
export const fromEntries = Object.fromEntries
export const keys = Object.keys
export const values = Object.values
