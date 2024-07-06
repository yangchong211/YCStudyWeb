import { entries, fromEntries, isArray, isFunction, isPlainObject, } from '@vuepress/helper';
import { normalizePath } from '../shared/normalizePath.js';
export const getRedirectMap = (app, options) => {
    const config = isFunction(options.config)
        ? options.config(app)
        : isPlainObject(options.config)
            ? options.config
            : {};
    return {
        ...fromEntries(app.pages
            .map(({ frontmatter, path }) => isArray(frontmatter.redirectFrom)
            ? frontmatter.redirectFrom.map((from) => [
                normalizePath(from, true),
                path,
            ])
            : frontmatter.redirectFrom
                ? [[normalizePath(frontmatter.redirectFrom, true), path]]
                : [])
            .flat()),
        ...fromEntries(entries(config).map(([from, to]) => [
            normalizePath(from, true),
            normalizePath(to),
        ])),
    };
};
