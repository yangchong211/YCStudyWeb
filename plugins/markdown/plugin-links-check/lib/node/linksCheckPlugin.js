import { isArray, isFunction, isRegExp } from '@vuepress/helper';
import { checkMarkdownLink } from './checkMarkdownLink.js';
export const linksCheckPlugin = ({ dev = true, build = true, exclude: ignore = [], }) => (app) => {
    const enabled = (app.env.isDev && dev) || (app.env.isBuild && build) || false;
    const isLinkIgnored = isFunction(ignore)
        ? (link) => ignore(link, app.env.isDev)
        : isArray(ignore)
            ? (link) => ignore.some((item) => isRegExp(item) ? item.test(link) : item === link)
            : () => false;
    const shouldThrowError = app.env.isBuild && build === 'error';
    let isAppInitialized = false;
    return {
        name: '@vuepress/plugin-links-check',
        extendsPage: (page, app) => {
            if (enabled && isAppInitialized) {
                checkMarkdownLink(page, app, isLinkIgnored);
            }
        },
        onInitialized: () => {
            isAppInitialized = true;
            if (enabled) {
                const results = app.pages.map((page) => checkMarkdownLink(page, app, isLinkIgnored));
                if (shouldThrowError && results.some(Boolean)) {
                    throw new Error('Dead links found in markdown, please check the console logs for details');
                }
            }
        },
    };
};
