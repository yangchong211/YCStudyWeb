import { addViteSsrNoExternal, getPageExcerpt } from '@vuepress/helper';
import { watch } from 'chokidar';
import { createPage, preparePageChunk, preparePageComponent, prepareRoutes, } from 'vuepress/core';
import { getCategory, getCategoryOptions, prepareCategoriesMap, } from './category/index.js';
import { getPageMap } from './getPagesMap.js';
import { logger, PLUGIN_NAME } from './logger.js';
import { prepareStore, Store } from './store.js';
import { getType, getTypeOptions, prepareTypesMap } from './type/index.js';
export const blogPlugin = (options) => (app) => {
    if (app.env.isDebug)
        logger.info('Options:', options);
    const { getInfo = () => ({}), filter = (page) => Boolean(page.filePathRelative) && !page.frontmatter.home, metaScope = '_blog', excerpt = true, excerptSeparator = '<!-- more -->', excerptLength = 300, excerptFilter = filter, isCustomElement = () => false, category = [], type = [], slugify = (name) => name
        .replace(/[ _]/g, '-')
        .replace(/[:?*|\\/<>]/g, '')
        .toLowerCase(), } = options;
    const categoryOptions = getCategoryOptions(category);
    const typeOptions = getTypeOptions(type);
    const store = new Store();
    let blogPagePaths = [];
    let categoriesMap = {};
    let typesMap = {};
    return {
        name: PLUGIN_NAME,
        define: () => ({
            __BLOG_META_SCOPE__: metaScope,
        }),
        extendsBundlerOptions: (bundlerOptions, app) => {
            addViteSsrNoExternal(bundlerOptions, app, '@vuepress/helper');
        },
        extendsPage: (page) => {
            // Generate page excerpt
            if (excerpt &&
                excerptFilter(page) &&
                !page.data.excerpt) {
                ;
                page.data.excerpt = getPageExcerpt(app, page, {
                    isCustomElement,
                    separator: excerptSeparator,
                    length: excerptLength,
                });
            }
            // inject meta information
            if (filter(page))
                page.routeMeta = {
                    ...(metaScope === ''
                        ? getInfo(page)
                        : { [metaScope]: getInfo(page) }),
                    ...page.routeMeta,
                };
        },
        onInitialized: async (app) => {
            const pageMap = getPageMap(app, filter);
            const categoryResult = getCategory(pageMap, store, categoryOptions, slugify, app.env.isDebug);
            const typeResult = getType(pageMap, store, typeOptions, slugify, app.env.isDebug);
            await Promise.all([...categoryResult.pageOptions, ...typeResult.pageOptions].map(async (pageOptions) => {
                const index = app.pages.findIndex((page) => page.path === pageOptions.path);
                if (index !== -1) {
                    logger.warn('Overriding existing page:', pageOptions.path);
                    const index = app.pages.findIndex((page) => page.path === pageOptions.path);
                    app.pages.splice(index, 1, await createPage(app, pageOptions));
                }
                app.pages.push(await createPage(app, pageOptions));
            }));
            // store data for onPrepared and onWatched
            blogPagePaths = [
                ...categoryResult.pageOptions,
                ...typeResult.pageOptions,
            ].map((page) => page.path);
            categoriesMap = categoryResult.categoriesMap;
            typesMap = typeResult.typesMap;
        },
        onPrepared: async (app) => {
            // Prepare store
            await prepareStore(app, store);
            // Prepare category
            await prepareCategoriesMap(app, categoriesMap);
            // Prepare type
            await prepareTypesMap(app, typesMap);
            if (app.env.isDebug)
                logger.info('temp file generated');
        },
        onWatched: (app, watchers) => {
            const hotReload = 'hotReload' in options ? options.hotReload : app.env.isDebug;
            if (hotReload) {
                const pageDataWatcher = watch('pages/**/*.js', {
                    cwd: app.dir.temp(),
                    ignoreInitial: true,
                });
                const updateBlog = async () => {
                    const pageMap = getPageMap(app, filter);
                    const categoryResult = getCategory(pageMap, store, categoryOptions, slugify, app.env.isDebug);
                    const typeResult = getType(pageMap, store, typeOptions, slugify, app.env.isDebug);
                    const newPageOptions = [
                        ...categoryResult.pageOptions,
                        ...typeResult.pageOptions,
                    ];
                    await prepareCategoriesMap(app, categoryResult.categoriesMap);
                    await prepareTypesMap(app, typeResult.typesMap);
                    const pagesToBeAdded = newPageOptions.filter((pageOptions) => !blogPagePaths.includes(pageOptions.path));
                    const pagesToBeRemoved = blogPagePaths.filter((path) => newPageOptions.every((page) => page.path !== path));
                    // add new pages
                    if (pagesToBeAdded.length) {
                        if (app.env.isDebug)
                            logger.info(`Adding new pages: ${pagesToBeAdded.map(({ path }) => path).join(', ')}`);
                        // Prepare page files
                        await Promise.all(pagesToBeAdded.map(async (pageOptions) => {
                            const page = await createPage(app, pageOptions);
                            await preparePageComponent(app, page);
                            await preparePageChunk(app, page);
                            app.pages.push(page);
                        }));
                    }
                    // Remove pages
                    if (pagesToBeRemoved.length) {
                        if (app.env.isDebug)
                            logger.info(`Removing following pages: ${pagesToBeRemoved.join(', ')}`);
                        pagesToBeRemoved.forEach((pagePath) => {
                            app.pages.splice(app.pages.findIndex(({ path }) => path === pagePath), 1);
                        });
                    }
                    // Prepare pages entry
                    if (pagesToBeRemoved.length || pagesToBeAdded.length) {
                        await prepareRoutes(app);
                    }
                    // store blog pages for next update
                    blogPagePaths = newPageOptions.map((page) => page.path);
                    if (app.env.isDebug)
                        logger.info('temp file updated');
                };
                pageDataWatcher.on('add', () => {
                    updateBlog();
                });
                pageDataWatcher.on('change', () => {
                    updateBlog();
                });
                pageDataWatcher.on('unlink', () => {
                    updateBlog();
                });
                watchers.push(pageDataWatcher);
            }
        },
    };
};
