// prismjs comments
const COMMENT_EMPTY_TAG = /<span class="token comment">\s*?<\/span>/;
export const createNotationRule = (parser, pattern, onMatch) => {
    const nodeRemove = [];
    parser.lines.forEach((node, index) => {
        let replaced = false;
        node.content = node.content.replace(pattern, (...match) => {
            if (onMatch(match, index)) {
                replaced = true;
                return '';
            }
            return match[0];
        });
        if (replaced &&
            !(node.content = node.content.replace(COMMENT_EMPTY_TAG, '')).trim()) {
            nodeRemove.push(node);
        }
    });
    for (const node of nodeRemove)
        parser.lines.splice(parser.lines.indexOf(node), 1);
};
