import type { ReadingTime } from '../shared/index.js';
/**
 * Get word number of given string
 */
export declare const getWordNumber: (content: string) => number;
/**
 * Get reading time info
 */
export declare const getReadingTime: (content: string, wordsPerMinute?: number) => ReadingTime;
