import { isLinkAbsolute, isLinkWithProtocol } from '@vuepress/helper'
import type { App } from 'vuepress/core'
import type { ExtendPage } from '../../typings/index.js'
import type { SeoPluginOptions } from '../options.js'
import { getUrl } from './getUrl.js'

export const getCover = (
  { frontmatter }: ExtendPage,
  { options: { base } }: App,
  { hostname }: SeoPluginOptions,
): string | null => {
  const { banner, cover } = frontmatter

  if (banner) {
    if (isLinkAbsolute(banner)) return getUrl(hostname, base, banner)
    if (isLinkWithProtocol(banner)) return banner
  }

  if (cover) {
    if (isLinkAbsolute(cover)) return getUrl(hostname, base, cover)
    if (isLinkWithProtocol(cover)) return cover
  }

  return null
}
