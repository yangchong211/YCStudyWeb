import { isLinkAbsolute, isLinkWithProtocol } from '@vuepress/helper'
import type { App } from 'vuepress/core'
import type { ExtendPage } from '../../typings/index.js'
import type { SeoPluginOptions } from '../options.js'
import { getUrl } from './getUrl.js'

const IMAGE_REG_EXP = /!\[.*?\]\((.*?)\)/gu

export const getImages = (
  { content }: ExtendPage,
  { options: { base } }: App,
  { hostname }: SeoPluginOptions,
): string[] =>
  Array.from(content.matchAll(IMAGE_REG_EXP))
    .map(([, link]) => {
      if (isLinkAbsolute(link)) return getUrl(hostname, base, link)
      if (isLinkWithProtocol(link)) return link

      return null
    })
    .filter((item): item is string => item !== null)
