import { entries, isString } from '@vuepress/helper';
export const getAlternatePaths = ({ lang, path, pathLocale }, { pages, siteData }) => entries(siteData.locales)
    .map(([localePath, { lang }]) => ({
    path: `${localePath}${path.replace(pathLocale, '')}`,
    lang,
}))
    .filter((item) => isString(item.lang) &&
    item.lang !== lang &&
    pages.some(({ path }) => path === item.path));
