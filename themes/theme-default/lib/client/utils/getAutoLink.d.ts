import type { AutoLinkOptions } from '../../shared';
/**
 * Resolve AutoLink props from string
 *
 * @example
 * - Input: '/README.md'
 * - Output: { text: 'Home', link: '/' }
 */
export declare const getAutoLink: (config: string, currentPath?: string) => AutoLinkOptions;
