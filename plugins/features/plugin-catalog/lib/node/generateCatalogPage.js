import { createPage } from 'vuepress/core';
import { getTitleFromFilename } from './getTitleFromFilename.js';
import { logger } from './logger.js';
export const generateCatalogPage = async (app, { component = 'Catalog', exclude = [], frontmatter = () => ({}), level = 3, index = false, }) => {
    const { env: { isDebug }, pages, } = app;
    const pathToBeGenerated = new Set();
    const content = `\
<${component}${[1, 2].includes(level) ? ` :level="${level}"` : ''}${index ? ' index' : ''}/>
`;
    pages.forEach(({ path: pagePath, pathLocale }) => {
        let catalogPath = pagePath;
        // not 404 page
        if (pagePath !== '/404.html')
            while (catalogPath !== pathLocale) {
                catalogPath = catalogPath.replace(/\/(?:[^/]+\/?)$/, '/');
                if (
                // not discovered yet
                !pathToBeGenerated.has(catalogPath) &&
                    // not being excluded
                    exclude.every((pattern) => !catalogPath.match(pattern)) &&
                    // path not found
                    pages.every(({ path }) => path !== catalogPath)) {
                    if (isDebug)
                        logger.info(`Generating catalog ${catalogPath}`);
                    pathToBeGenerated.add(catalogPath);
                }
            }
    });
    await Promise.all(Array.from(pathToBeGenerated)
        .map((path) => decodeURI(path))
        .map((path) => {
        const [, basename = ''] = /\/([^/]+)\/?$/.exec(path) || [];
        const title = getTitleFromFilename(basename);
        return createPage(app, {
            frontmatter: {
                title,
                ...(frontmatter(path) || {}),
            },
            content,
            path,
        });
    })).then((pages) => {
        app.pages.push(...pages);
    });
};
