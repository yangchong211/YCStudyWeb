import { getDate, isArray, isString } from '@vuepress/helper';
import { getAlternatePaths, getCover, getImages, getSEOAuthor, getUrl, } from './utils/index.js';
export const getOGPInfo = (page, options, app) => {
    const { isArticle = (page) => Boolean(page.filePathRelative && !page.frontmatter.home), author: globalAuthor, } = options;
    const { options: { base }, siteData, } = app;
    const { frontmatter: { author: pageAuthor, time, date = time, tag, tags = tag, }, data: { git = {} }, } = page;
    const title = siteData.locales[page.pathLocale]?.title ||
        siteData.title ||
        siteData.locales['/']?.title ||
        '';
    const author = getSEOAuthor(pageAuthor || globalAuthor);
    const modifiedTime = git.updatedTime
        ? new Date(git.updatedTime).toISOString()
        : null;
    const articleTags = isArray(tags) ? tags : isString(tag) ? [tag] : [];
    const articleTitle = page.title;
    const cover = getCover(page, app, options);
    const images = getImages(page, app, options);
    const locales = getAlternatePaths(page, app);
    const publishedTime = getDate(date)?.toISOString();
    const ogImage = cover || images[0] || options.fallBackImage || '';
    const defaultOGP = {
        'og:url': getUrl(options.hostname, base, page.path),
        'og:site_name': title,
        'og:title': articleTitle,
        'og:description': page.frontmatter.description || '',
        'og:type': isArticle(page) ? 'article' : 'website',
        'og:image': ogImage,
        'og:locale': page.lang,
        'og:locale:alternate': locales.map(({ lang }) => lang),
        ...(modifiedTime ? { 'og:updated_time': modifiedTime } : {}),
        ...(options.restrictions
            ? { 'og:restrictions:age': options.restrictions }
            : {}),
        ...(options.twitterID ? { 'twitter:creator': options.twitterID } : {}),
        ...(cover
            ? {
                'twitter:card': 'summary_large_image',
                'twitter:image:src': cover,
                'twitter:image:alt': articleTitle,
            }
            : {}),
        'article:author': author[0]?.name,
        'article:tag': articleTags,
        ...(publishedTime ? { 'article:published_time': publishedTime } : {}),
        ...(modifiedTime ? { 'article:modified_time': modifiedTime } : {}),
    };
    return defaultOGP;
};
