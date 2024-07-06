import { isLinkExternal, isLinkWithProtocol } from 'vuepress/shared';
export const isLinkInternal = (link) => !isLinkExternal(link) && !isLinkWithProtocol(link);
