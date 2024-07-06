import type { CopyCodePluginLocaleConfig } from '../../shared/index.js';
import '../styles/copy-code.css';
export interface UseCopyCodeOptions {
    locales: CopyCodePluginLocaleConfig;
    selector: string[];
    /** @default 500 */
    delay: number;
    /** @default 2000 */
    duration: number;
    /** @default false */
    showInMobile?: boolean;
    /** @default [] */
    ignoreSelector?: string[];
    /**
     * Transform pre element before copy
     *
     * For example, deleting certain elements before copying, or inserting copyright information.
     *
     * @param preElement `<pre>` clone Node
     *
     * @example
     * ```js
     * {
     *   transform(pre) {
     *     // Remove all `.ignore` elements
     *     pre.querySelectorAll('.ignore').remove()
     *     // insert copyright
     *     pre.innerHTML += `\n Copied by VuePress`
     *   }
     * }
     * ```
     */
    transform?: (preElement: HTMLElement) => void;
}
export declare const useCopyCode: ({ delay, duration, locales, selector, showInMobile, ignoreSelector, transform, }: UseCopyCodeOptions) => void;
