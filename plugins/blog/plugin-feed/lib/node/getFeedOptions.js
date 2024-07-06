import { dateSorter, fromEntries, isArray, isFunction, keys, } from '@vuepress/helper';
export const getFeedOptions = ({ siteData }, options) => fromEntries(keys({
    // root locale must exists
    '/': {},
    ...siteData.locales,
}).map((localePath) => {
    const preservedElements = options.locales?.[localePath]?.preservedElements ||
        options.preservedElements;
    const { hostname, devServer, locales, ...rest } = options;
    return [
        localePath,
        {
            // default values
            filter: ({ frontmatter, filePathRelative, }) => Boolean(frontmatter.feed ?? (filePathRelative && !frontmatter.home)),
            sorter: (pageA, pageB) => dateSorter(pageA.data.git?.createdTime
                ? new Date(pageA.data.git?.createdTime)
                : pageA.frontmatter.date, pageB.data.git?.createdTime
                ? new Date(pageB.data.git?.createdTime)
                : pageB.frontmatter.date),
            ...rest,
            ...options.locales?.[localePath],
            // make sure these are not overrode
            hostname,
            isPreservedElement: isArray(preservedElements)
                ? (tagName) => preservedElements.some((item) => item instanceof RegExp
                    ? item.test(tagName)
                    : item === tagName)
                : isFunction(preservedElements)
                    ? preservedElements
                    : () => false,
        },
    ];
}));
