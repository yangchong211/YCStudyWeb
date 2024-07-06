import type { Markdown } from 'vuepress/markdown';
import type { HighlightOptions } from '../types.js';
export declare const highlightPlugin: (md: Markdown, { highlightLines, notationDiff: enabledDiff, notationErrorLevel: enabledErrorLevel, notationFocus: enabledFocus, notationHighlight: enabledHighlight, notationWordHighLight: enabledWordHighlight, whitespace: whitespacePosition, }?: HighlightOptions) => void;
