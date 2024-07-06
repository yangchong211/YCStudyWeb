import { isLinkHttp, removeEndingSlash, removeLeadingSlash, } from 'vuepress/shared';
export const getUrl = (hostname, base = '', path = '') => `${isLinkHttp(hostname)
    ? removeEndingSlash(hostname)
    : `https://${removeEndingSlash(hostname)}`}${base}${removeLeadingSlash(path)}`;
