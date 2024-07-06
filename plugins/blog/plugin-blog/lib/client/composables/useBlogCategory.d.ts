import type { ComputedRef } from 'vue';
import type { BlogCategoryData } from '../typings.js';
export declare const blogCategoryMap: any;
export declare const useBlogCategory: <T extends Record<string, unknown> = Record<string, unknown>>(key?: string) => ComputedRef<BlogCategoryData<T>>;
