import type { ShikiTransformer } from 'shiki';
export declare const addClassTransformer: ShikiTransformer;
export declare const cleanupTransformer: ShikiTransformer;
/**
 * This `transformer` is primarily for the usage instructions of themes.
 * When developers need to provide an example like `// [!code xxx]`,
 * they can use `// [\!code xxx]` to avoid being processed by `shiki`.
 * After `shiki` completes the processing,
 * replace `[\!code` back with `[!code` to display the correct text.
 */
export declare const removeEscapeTransformer: ShikiTransformer;
export declare const emptyLineTransformer: ShikiTransformer;
