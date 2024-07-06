const HASH_REGEXP = /#.*$/u;
export const normalizePath = (path, removeHash = false) => (removeHash ? path.replace(HASH_REGEXP, '') : path)
    .replace(/\/(?:README\.md)?$/i, '/index.html')
    .replace(/(?:\.(?:md|html))?$/, '.html');
