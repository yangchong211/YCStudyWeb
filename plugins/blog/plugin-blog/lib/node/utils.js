import { sanitizeFileName } from 'vuepress/utils';
export const getPagePath = (path) => encodeURI(path.split('/').map(sanitizeFileName).join('/'));
