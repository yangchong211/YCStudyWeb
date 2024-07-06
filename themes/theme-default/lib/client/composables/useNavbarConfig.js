import { useThemeLocaleData } from '@theme/useThemeData';
import { computed } from 'vue';
import { isString } from 'vuepress/shared';
import { getAutoLink, isLinkInternal, resolvePrefix } from '../utils/index.js';
const resolveNavbarItem = (item, prefix = '') => {
    if (isString(item)) {
        return getAutoLink(resolvePrefix(prefix, item));
    }
    if ('children' in item) {
        return {
            ...item,
            children: item.children.map((child) => resolveNavbarItem(child, resolvePrefix(prefix, item.prefix))),
        };
    }
    return {
        ...item,
        link: isLinkInternal(item.link)
            ? getAutoLink(resolvePrefix(prefix, item.link)).link
            : item.link,
    };
};
export const useNavbarConfig = () => {
    const themeLocale = useThemeLocaleData();
    return computed(() => (themeLocale.value.navbar || []).map((item) => resolveNavbarItem(item)));
};
