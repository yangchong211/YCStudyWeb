import {
  isLinkHttp,
  removeEndingSlash,
  removeLeadingSlash,
} from 'vuepress/shared'

export const getUrl = (hostname: string, base: string, url: string): string =>
  `${removeEndingSlash(
    isLinkHttp(hostname) ? hostname : `https://${hostname}`,
  )}${base}${removeLeadingSlash(url)}`
