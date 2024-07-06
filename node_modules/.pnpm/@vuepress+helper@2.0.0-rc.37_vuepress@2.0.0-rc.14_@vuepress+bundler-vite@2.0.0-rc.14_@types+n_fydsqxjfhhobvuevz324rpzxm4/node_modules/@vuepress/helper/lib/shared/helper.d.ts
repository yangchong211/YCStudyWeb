export { isFunction, isString, isPlainObject } from 'vuepress/shared';
export declare const isDef: <T = any>(val?: T | undefined) => val is T;
export declare const isBoolean: (val: any) => val is boolean;
export declare const isNumber: (val: any) => val is number;
export declare const isArray: (arg: any) => arg is any[];
export declare const isRegExp: (val: unknown) => val is RegExp;
export declare const startsWith: (str: unknown, prefix: string) => boolean;
export declare const endsWith: (str: unknown, suffix: string) => boolean;
export { ensureEndingSlash, ensureLeadingSlash, removeEndingSlash, removeLeadingSlash, } from 'vuepress/shared';
export declare const entries: {
    <T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): [string, T][];
    (o: {}): [string, any][];
};
export declare const fromEntries: {
    <T = any>(entries: Iterable<readonly [PropertyKey, T]>): {
        [k: string]: T;
    };
    (entries: Iterable<readonly any[]>): any;
};
export declare const keys: {
    (o: object): string[];
    (o: {}): string[];
};
export declare const values: {
    <T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): T[];
    (o: {}): any[];
};
