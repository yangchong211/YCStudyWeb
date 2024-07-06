const normalizePath = (path) => decodeURI(path)
    .replace(/#.*$/, '')
    .replace(/(index)?\.(md|html)$/, '');
const isActiveLink = (link, route) => {
    if (route.hash === link) {
        return true;
    }
    const currentPath = normalizePath(route.path);
    const targetPath = normalizePath(link);
    return currentPath === targetPath;
};
export const isActiveLinkItem = (item, route) => {
    if (item.link && isActiveLink(item.link, route)) {
        return true;
    }
    if ('children' in item) {
        return item.children.some((child) => isActiveLinkItem(child, route));
    }
    return false;
};
