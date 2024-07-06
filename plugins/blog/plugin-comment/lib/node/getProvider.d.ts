import type { CommentPluginOptions } from './options.js';
export declare const getServiceComponent: (provider?: string) => string;
export declare const getPageviewChunk: (provider?: string) => string;
export declare const getAlias: (options: CommentPluginOptions) => Record<string, string>;
export declare const getProviderPackage: (provider?: string) => string | null;
