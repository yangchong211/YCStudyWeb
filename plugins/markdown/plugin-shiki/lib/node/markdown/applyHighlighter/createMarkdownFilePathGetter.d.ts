import type MarkdownIt from 'markdown-it';
export type MarkdownFilePathGetter = () => string;
export declare const createMarkdownFilePathGetter: (md: MarkdownIt) => MarkdownFilePathGetter;
