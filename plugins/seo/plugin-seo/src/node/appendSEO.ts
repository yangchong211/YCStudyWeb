/* eslint-disable @typescript-eslint/naming-convention */
import type { App } from 'vuepress/core'
import type { ExtendPage } from '../typings/index.js'
import {
  addOGP,
  appendAlternate,
  appendCanonical,
  appendJSONLD,
} from './appendHead.js'
import { getJSONLDInfo } from './getJSONLDInfo.js'
import { getOGPInfo } from './getOGPInfo.js'
import type { SeoPluginOptions } from './options.js'
import { getAlternateLinks, getCanonicalLink, logger } from './utils/index.js'

export const appendSEO = (app: App, options: SeoPluginOptions): void => {
  app.pages.forEach((page: ExtendPage) => {
    const head = page.frontmatter.head || []

    const canonicalLink = getCanonicalLink(page, options)
    const alternateLinks = getAlternateLinks(app, page, options)

    appendCanonical(head, canonicalLink)
    appendAlternate(head, alternateLinks)

    if (page.frontmatter.seo !== false) {
      const defaultOGP = getOGPInfo(page, options, app)
      const defaultJSONLD = getJSONLDInfo(page, options, app)

      const ogpContent = options.ogp
        ? options.ogp(defaultOGP, page, app)
        : defaultOGP

      const jsonLDContent = options.jsonLd
        ? options.jsonLd(defaultJSONLD, page, app)
        : defaultJSONLD

      if (app.env.isDebug) {
        logger.info(`OGP of ${page.path}:`, ogpContent)
        logger.info(`JSON-LD of ${page.path}:`, ogpContent)
      }

      addOGP(head, ogpContent)
      appendJSONLD(head, jsonLDContent)

      if (options.customHead) options.customHead(head, page, app)
    }

    page.frontmatter.head = head
  })
}
