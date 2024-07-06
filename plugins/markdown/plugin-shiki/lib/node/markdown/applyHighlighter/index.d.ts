import type MarkdownIt from 'markdown-it';
import type { App } from 'vuepress';
import type { ShikiHighlightOptions } from '../../types.js';
export declare const applyHighlighter: (md: MarkdownIt, app: App, { langs, langAlias, defaultLang, transformers: userTransformers, ...options }?: ShikiHighlightOptions) => Promise<void>;
