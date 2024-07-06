const CODE_ESCAPE_RE = /\[\\!code/g;
export const addClassTransformer = {
    name: 'vuepress:add-class',
    pre(node) {
        this.addClassToHast(node, 'vp-code');
    },
};
export const cleanupTransformer = {
    name: 'vuepress:cleanup',
    pre(node) {
        delete node.properties.tabindex;
    },
};
/**
 * This `transformer` is primarily for the usage instructions of themes.
 * When developers need to provide an example like `// [!code xxx]`,
 * they can use `// [\!code xxx]` to avoid being processed by `shiki`.
 * After `shiki` completes the processing,
 * replace `[\!code` back with `[!code` to display the correct text.
 */
export const removeEscapeTransformer = {
    name: 'vuepress:remove-escape',
    postprocess(code) {
        return code.replace(CODE_ESCAPE_RE, '[!code');
    },
};
export const emptyLineTransformer = {
    name: 'vuepress:empty-line',
    code(hast) {
        hast.children.forEach((span) => {
            if (span.type === 'element' &&
                span.tagName === 'span' &&
                Array.isArray(span.properties.class) &&
                span.properties.class.includes('line') &&
                span.children.length === 0) {
                span.children.push({
                    type: 'element',
                    tagName: 'wbr',
                    properties: {},
                    children: [],
                });
            }
        });
    },
};
