import type { CodeParser, OpenTag } from './getCodeParser.js';
export declare const highlightWordInLine: (node: OpenTag, pattern: string | RegExp) => void;
export declare const parseMetaHighlightWords: (meta: string) => string[];
/**
 * ```js /Hello|Hi/
 */
export declare const metaWordHighlight: (parser: CodeParser, meta: string) => void;
