import { useThemeLocaleData } from '@theme/useThemeData';
import { getHeaders, keys, startsWith } from '@vuepress/helper/client';
import { computed, inject, onMounted, provide, ref, watch } from 'vue';
import { usePageData, usePageFrontmatter, useRoute, useRouteLocale, useRouter, } from 'vuepress/client';
import { isPlainObject, isString } from 'vuepress/shared';
import { getAutoLink, isLinkInternal, resolvePrefix } from '../utils/index.js';
export const headersRef = ref([]);
export const setupHeaders = () => {
    const router = useRouter();
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const levels = computed(() => frontmatter.value.sidebarDepth ?? themeLocale.value.sidebarDepth ?? 2);
    router.beforeEach((to, from) => {
        if (to.path !== from.path) {
            headersRef.value = [];
        }
    });
    const updateHeaders = () => {
        if (levels.value <= 0) {
            headersRef.value = [];
            return;
        }
        headersRef.value = getHeaders({
            selector: [...new Array(6)]
                .map((_, i) => `.theme-default-content h${i + 1}`)
                .join(','),
            levels: [2, levels.value + 1],
            ignore: ['.vp-badge'],
        });
    };
    watch(levels, updateHeaders);
    onMounted(updateHeaders);
};
export const useHeaders = () => headersRef;
export const sidebarItemsSymbol = Symbol('sidebarItems');
/**
 * Inject sidebar items global computed
 */
export const useSidebarItems = () => {
    const sidebarItems = inject(sidebarItemsSymbol);
    if (!sidebarItems) {
        throw new Error('useSidebarItems() is called without provider.');
    }
    return sidebarItems;
};
/**
 * Create sidebar items ref and provide as global computed in setup
 */
export const setupSidebarItems = () => {
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const page = usePageData();
    const route = useRoute();
    const routeLocale = useRouteLocale();
    const headers = useHeaders();
    const sidebarConfig = computed(() => frontmatter.value.home
        ? false
        : frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? 'heading');
    const sidebarItems = computed(() => resolveSidebarItems(sidebarConfig.value, page.value, route.path, routeLocale.value, headers.value));
    provide(sidebarItemsSymbol, sidebarItems);
};
/**
 * Resolve sidebar items global computed
 *
 * It should only be resolved and provided once
 */
export const resolveSidebarItems = (sidebarConfig, page, path, routeLocale, headers) => {
    // resolve sidebar items according to the config
    if (sidebarConfig === false) {
        return [];
    }
    if (sidebarConfig === 'heading') {
        return resolveSidebarHeadingItem(page, headers);
    }
    if (Array.isArray(sidebarConfig)) {
        return resolveArraySidebarItems(sidebarConfig, headers, path, routeLocale);
    }
    if (isPlainObject(sidebarConfig)) {
        return resolveMultiSidebarItems(sidebarConfig, page, headers, path);
    }
    return [];
};
/**
 * Util to transform page header to sidebar item
 */
export const resolveSidebarHeaderItem = (header) => ({
    text: header.title,
    link: header.link,
    children: resolveSidebarHeaderItems(header.children),
});
export const resolveSidebarHeaderItems = (headers) => headers ? headers.map((header) => resolveSidebarHeaderItem(header)) : [];
/**
 * Resolve current page and its header to sidebar items if the config is `heading`
 */
export const resolveSidebarHeadingItem = (page, headers) => [
    {
        text: page.title,
        children: resolveSidebarHeaderItems(headers),
    },
];
/**
 * Resolve sidebar items if the config is an array
 */
export const resolveArraySidebarItems = (sidebarConfig, headers, path, prefix = '') => {
    const handleChildItem = (item, pathPrefix) => {
        const childItem = isString(item)
            ? getAutoLink(resolvePrefix(pathPrefix, item))
            : isString(item.link)
                ? {
                    ...item,
                    link: isLinkInternal(item.link)
                        ? getAutoLink(resolvePrefix(pathPrefix, item.link)).link
                        : item.link,
                }
                : item;
        if ('children' in childItem) {
            return {
                ...childItem,
                children: childItem.children.map((item) => handleChildItem(item, resolvePrefix(pathPrefix, childItem.prefix))),
            };
        }
        // if the sidebar item is current page and children is not set
        // use headers of current page as children
        if (childItem.link === path) {
            // skip h1 header
            const currentHeaders = headers[0]?.level === 1 ? headers[0].children : headers;
            return {
                ...childItem,
                children: resolveSidebarHeaderItems(currentHeaders),
            };
        }
        return childItem;
    };
    return sidebarConfig.map((item) => handleChildItem(item, prefix));
};
/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
 */
export const resolveMultiSidebarItems = (sidebarConfig, page, headers, path) => {
    const sidebarRoutes = keys(sidebarConfig).sort((x, y) => y.length - x.length);
    // Find matching config
    for (const base of sidebarRoutes)
        if (startsWith(decodeURI(path), base)) {
            const matched = sidebarConfig[base];
            return matched
                ? matched === 'heading'
                    ? resolveSidebarHeadingItem(page, headers)
                    : resolveArraySidebarItems(matched, headers, path, base)
                : [];
        }
    console.warn(`${decodeURI(path)} is missing sidebar config.`);
    return [];
};
