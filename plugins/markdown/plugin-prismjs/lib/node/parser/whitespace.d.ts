import type { WhitespacePosition } from '@vuepress/highlighter-helper';
import type { CodeParser, OpenTag } from './getCodeParser.js';
export declare const renderWhitespaceInLine: (node: OpenTag, position: WhitespacePosition) => void;
/**
 * type: 'all' | 'boundary' | 'trailing'
 *
 * ```js :whitespace[=type]
 */
export declare const metaWhitespace: (parser: CodeParser, meta: string, defaultPosition?: boolean | WhitespacePosition) => void;
