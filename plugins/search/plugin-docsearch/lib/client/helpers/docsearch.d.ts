import type { DocSearchProps } from '@docsearch/react';
import type { App, ComputedRef, MaybeRefOrGetter } from 'vue';
export type DocSearchClientLocaleOptions = Partial<Omit<DocSearchProps, 'hitComponent' | 'navigator' | 'transformSearchClient'>>;
export interface DocSearchClientOptions extends DocSearchClientLocaleOptions {
    locales?: Record<string, DocSearchClientLocaleOptions>;
}
export declare const defineDocSearchConfig: (options: MaybeRefOrGetter<DocSearchClientOptions>) => void;
export declare const useDocSearchOptions: () => ComputedRef<DocSearchProps>;
export declare const injectDocSearchConfig: (app: App) => void;
