import type { ComputedRef } from 'vue';
import type { BlogTypeData } from '../typings.js';
export declare const blogTypeMap: any;
export declare const useBlogType: <T extends Record<string, unknown> = Record<string, unknown>>(key?: string) => ComputedRef<BlogTypeData<T>>;
