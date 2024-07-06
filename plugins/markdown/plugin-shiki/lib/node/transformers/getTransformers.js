import { transformerMetaWordHighlight, transformerNotationDiff, transformerNotationErrorLevel, transformerNotationFocus, transformerNotationHighlight, transformerNotationWordHighlight, transformerRenderWhitespace, } from '@shikijs/transformers';
import { resolveWhitespacePosition } from '@vuepress/highlighter-helper';
import { addClassTransformer, cleanupTransformer, emptyLineTransformer, removeEscapeTransformer, } from './vuepressTransformers.js';
export const getTransformers = (options) => {
    const transformers = [];
    if (options.notationDiff) {
        transformers.push(transformerNotationDiff());
    }
    if (options.notationFocus) {
        transformers.push(transformerNotationFocus({
            classActiveLine: 'has-focus',
            classActivePre: 'has-focused-lines',
        }));
    }
    if (options.notationHighlight) {
        transformers.push(transformerNotationHighlight());
    }
    if (options.notationErrorLevel) {
        transformers.push(transformerNotationErrorLevel());
    }
    if (options.notationWordHighlight) {
        transformers.push(transformerNotationWordHighlight());
        transformers.push(transformerMetaWordHighlight());
    }
    transformers.push(addClassTransformer, cleanupTransformer, removeEscapeTransformer, emptyLineTransformer);
    return transformers;
};
export const whitespaceTransformer = (meta, defaultPosition = false) => {
    const position = resolveWhitespacePosition(meta, defaultPosition);
    // disabled current code block
    if (position === false)
        return [];
    return [transformerRenderWhitespace({ position })];
};
