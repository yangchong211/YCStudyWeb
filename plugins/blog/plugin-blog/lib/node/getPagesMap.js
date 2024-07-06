export const getPageMap = ({ pages }, filter) => {
    const pagesMap = {};
    pages
        .filter((page) => filter(page) &&
        // filter 404
        page.path.substring(page.pathLocale.length - 1) !== '/404.html')
        .forEach((page) => {
        ;
        (pagesMap[page.pathLocale] ??= []).push(page);
    });
    return pagesMap;
};
