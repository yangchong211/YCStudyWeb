import { categoriesMap } from '@temp/blog/category';
import { store } from '@temp/blog/store';
import { computed, readonly, shallowRef } from 'vue';
import { resolveRoute, usePageData, usePageFrontmatter, useRouteLocale, } from 'vuepress/client';
const categoryMapRef = shallowRef(categoriesMap);
export const blogCategoryMap = readonly(categoryMapRef);
export const useBlogCategory = (key) => {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const routeLocale = useRouteLocale();
    return computed(() => {
        const mapKey = key ?? frontmatter.value.blog?.key ?? '';
        if (!mapKey) {
            console.warn(`useBlogCategory: key not found`);
            // Fallback data
            return { path: '/', map: {} };
        }
        if (!categoryMapRef.value[mapKey])
            throw new Error(`useBlogCategory: key ${mapKey} is invalid`);
        const currentMap = categoryMapRef.value[mapKey][routeLocale.value];
        const result = {
            path: currentMap.path,
            map: {},
        };
        for (const category in currentMap.map) {
            const categoryMap = currentMap.map[category];
            result.map[category] = { path: categoryMap.path, items: [] };
            for (const index of categoryMap.indexes) {
                const { path, meta } = resolveRoute(store[index]);
                result.map[category].items.push({
                    path,
                    info: __BLOG_META_SCOPE__ === ''
                        ? meta
                        : meta[__BLOG_META_SCOPE__],
                });
            }
            if (page.value.path === categoryMap.path)
                result.currentItems = result.map[category].items;
        }
        return result;
    });
};
if (__VUEPRESS_DEV__ && (import.meta.webpackHot || import.meta.hot))
    __VUE_HMR_RUNTIME__.updateBlogCategory = (categoriesMap) => {
        categoryMapRef.value = categoriesMap;
    };
