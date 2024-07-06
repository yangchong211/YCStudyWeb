import { startsWith } from './helper.js';
export { isLinkExternal, isLinkHttp, isLinkWithProtocol } from 'vuepress/shared';
/**
 * Whether a variable is a valid absolute url
 */
export const isLinkAbsolute = (test) => startsWith(test, '/');
