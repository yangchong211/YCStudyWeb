// eslint-disable-next-line vue/prefer-import-from-vue
import { isHTMLTag } from '@vue/shared';
import { load } from 'cheerio';
import {} from 'vuepress/shared';
import { isArray } from '../../shared/index.js';
const MEDIA_WITH_ALT = ['img'];
const REMOVED_TAGS = [
    // non content
    'title',
    'base',
    'meta',
    'template',
    'script',
    'style',
    'canvas',
    'slot',
    // not main content
    'nav',
    'aside',
    'footer',
    // deleted
    'del',
    's',
    // rich media
    'audio',
    'video',
    'canvas',
    'iframe',
    'map',
    'area',
    'track',
    'object',
    // input
    'input',
    'textarea',
    'select',
    'option',
    'optgroup',
    'datalist',
];
const handleNode = (node, { base, removedTags }) => {
    if (node.type === 'tag') {
        // toc should be dropped
        if ([node.attribs.class, node.attribs.id].some((item) => ['table-of-contents', 'toc'].includes(item)))
            return '';
        // return alt text
        if (MEDIA_WITH_ALT.includes(node.tagName)) {
            return node.attribs.alt || '';
        }
        // html tags can be returned
        if (!REMOVED_TAGS.includes(node.tagName) &&
            !removedTags.includes(node.tagName) &&
            isHTMLTag(node.tagName)) {
            return handleNodes(node.children, { base, removedTags });
        }
        return '';
    }
    if (node.type === 'text')
        return node.data;
    return '';
};
const handleNodes = (nodes, { base, removedTags }) => isArray(nodes)
    ? nodes.map((node) => handleNode(node, { base, removedTags })).join('')
    : '';
const $ = load('');
export const getText = (content, base, { length = 300, singleLine, removedTags = ['table', 'pre'], } = {}) => {
    let result = '';
    const rootNodes = $.parseHTML(content) ?? [];
    for (const node of rootNodes) {
        const text = handleNode(node, { base, removedTags });
        if (text) {
            result += text;
            if (text.length >= length)
                break;
        }
    }
    return (singleLine ? result.replace(/\n/g, ' ').replace(/\s+/g, ' ') : result).trim();
};
export const getPageText = ({ options: { base } }, { contentRendered }, options = {}) => getText(contentRendered, base, options);
