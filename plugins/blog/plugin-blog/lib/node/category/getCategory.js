import { fromEntries, isFunction, isString, removeLeadingSlash, } from '@vuepress/helper';
import { colors } from 'vuepress/utils';
import { logger } from '../logger.js';
import { getPagePath } from '../utils.js';
/**
 * @returns Page paths to be generated
 */
export const getCategory = (pagesMap, store, category, slugify, isDebug) => {
    const result = category.map(({ key, getter, sorter = () => -1, path = '/:key/', layout = 'Layout', frontmatter = () => ({}), itemPath = '/:key/:name/', itemLayout = 'Layout', itemFrontmatter = () => ({}), }) => {
        if (isDebug)
            logger.info(`Generating ${colors.cyan(key)} category.\n`);
        const getItemPath = isFunction(itemPath)
            ? itemPath
            : isString(itemPath)
                ? (name) => itemPath
                    .replace(/:key/g, slugify(key))
                    .replace(/:name/g, slugify(name))
                : () => null;
        const categoryMap = {};
        const pageOptions = [];
        for (const localePath in pagesMap) {
            if (path) {
                const pagePath = `${localePath}${removeLeadingSlash(path.replace(/:key/g, slugify(key)))}`;
                pageOptions.push({
                    path: pagePath,
                    frontmatter: {
                        ...frontmatter(localePath),
                        blog: {
                            type: 'category',
                            key,
                        },
                        layout,
                    },
                });
                categoryMap[localePath] = {
                    path: getPagePath(pagePath),
                    map: {},
                };
            }
            else {
                categoryMap[localePath] = {
                    path: '',
                    map: {},
                };
            }
            const { map } = categoryMap[localePath];
            const pageMapStore = {};
            for (const page of pagesMap[localePath]) {
                const categories = getter(page);
                for (const category of categories) {
                    if (!map[category]) {
                        const itemPath = getItemPath(category);
                        if (itemPath) {
                            const itemPagePath = `${localePath}${removeLeadingSlash(itemPath)}`;
                            pageOptions.push({
                                path: itemPagePath,
                                frontmatter: {
                                    ...itemFrontmatter(category, localePath),
                                    blog: {
                                        type: 'category',
                                        name: category,
                                        key,
                                    },
                                    layout: itemLayout,
                                },
                            });
                            map[category] = {
                                path: getPagePath(itemPagePath),
                                indexes: [],
                            };
                        }
                        else {
                            map[category] = {
                                path: '',
                                indexes: [],
                            };
                        }
                        pageMapStore[category] = [];
                    }
                    pageMapStore[category].push(page);
                }
            }
            for (const category in pageMapStore)
                map[category].indexes = store.addItems(pageMapStore[category].sort(sorter).map(({ path }) => path));
            if (isDebug) {
                let infoMessage = `${key} category in locale ${localePath}:\n`;
                for (const category in map) {
                    const { path, indexes: items } = map[category];
                    infoMessage += `${category}: found ${items.length} items${path ? ` in path: ${path}` : ''}\n`;
                }
                logger.info(infoMessage);
            }
        }
        return {
            key,
            categoryMap,
            pageOptions,
        };
    });
    return {
        categoriesMap: fromEntries(result.map(({ key, categoryMap }) => [key, categoryMap])),
        pageOptions: result.map(({ pageOptions }) => pageOptions).flat(),
    };
};
