import { isLinkExternal, isLinkWithProtocol } from 'vuepress/shared'

export const isLinkInternal = (link: string): boolean =>
  !isLinkExternal(link) && !isLinkWithProtocol(link)
