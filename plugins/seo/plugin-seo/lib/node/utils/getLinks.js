import { isFunction, isString } from '@vuepress/helper';
import { removeEndingSlash } from 'vuepress/shared';
import { getAlternatePaths } from './getAlternatePaths.js';
import { getUrl } from './getUrl.js';
export const getCanonicalLink = (page, options) => isFunction(options.canonical)
    ? options.canonical(page)
    : isString(options.canonical)
        ? `${removeEndingSlash(options.canonical)}${page.path}`
        : null;
export const getAlternateLinks = (app, page, { hostname }) => getAlternatePaths(page, app).map(({ lang, path }) => ({
    lang,
    path: getUrl(hostname, app.options.base, path),
}));
