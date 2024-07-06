import type { WhitespacePosition } from '@vuepress/highlighter-helper';
import type { ShikiTransformer } from 'shiki';
import type { ShikiHighlightOptions } from '../types.js';
export declare const getTransformers: (options: ShikiHighlightOptions) => ShikiTransformer[];
export declare const whitespaceTransformer: (meta: string, defaultPosition?: boolean | WhitespacePosition) => ShikiTransformer[];
