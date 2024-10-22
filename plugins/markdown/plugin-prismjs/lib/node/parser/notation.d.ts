import type { CodeParser } from './getCodeParser.js';
export interface NotationCommentMarkerOption {
    classMap: Record<string, string | string[]>;
    classPre?: string;
}
/**
 * line highlight
 *
 * `// [!code highlight]`, or `// [!code hl]`
 */
export declare const notationHighlight: (parser: CodeParser) => void;
/**
 * line focus
 *
 * `// [!code focus]`
 */
export declare const notationFocus: (parser: CodeParser) => void;
/**
 * line diff
 *
 * `// [!code ++]` and `// [!code --]`
 */
export declare const notationDiff: (parser: CodeParser) => void;
/**
 * line error level
 *
 * `// [!code warning]` and `// [!code error]`
 */
export declare const notationErrorLevel: (parser: CodeParser) => void;
/**
 * highlight word
 *
 * `// [!code word:xxx]`: `xxx` can be any word.
 * @param parser
 */
export declare const notationWordHighlight: (parser: CodeParser) => void;
