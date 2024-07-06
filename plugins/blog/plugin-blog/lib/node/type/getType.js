import { entries, fromEntries, removeLeadingSlash } from '@vuepress/helper';
import { colors } from 'vuepress/utils';
import { logger } from '../logger.js';
import { getPagePath } from '../utils.js';
export const getType = (pagesMap, store, type, slugify, isDebug = false) => {
    const result = type.map(({ key, sorter = () => -1, filter = () => true, path = '/:key/', layout = 'Layout', frontmatter = () => ({}), }) => {
        if (isDebug)
            logger.info(`Generating ${colors.cyan(key)} type.\n`);
        const pageOptions = [];
        const typeMap = {};
        entries(pagesMap).forEach(([localePath, pages]) => {
            // get type page path
            const pagePath = path
                ? `${localePath}${removeLeadingSlash(path.replace(/:key/g, slugify(key)))}`
                : '';
            // get type indexes
            const indexes = store.addItems(
            // get page paths
            pages
                .filter(filter)
                .sort(sorter)
                .map(({ path }) => path));
            if (pagePath)
                pageOptions.push({
                    path: pagePath,
                    frontmatter: {
                        ...frontmatter(localePath),
                        blog: {
                            type: 'type',
                            key,
                        },
                        layout,
                    },
                });
            if (isDebug)
                logger.info(`${key} type in locale ${localePath}: found ${indexes.length} items\n`);
            typeMap[localePath] = { path: getPagePath(pagePath), indexes };
        });
        return { key, typeMap, pageOptions };
    });
    return {
        typesMap: fromEntries(result.map(({ key, typeMap }) => [key, typeMap])),
        pageOptions: result.map(({ pageOptions }) => pageOptions).flat(),
    };
};
