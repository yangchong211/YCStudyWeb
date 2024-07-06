import { getPageExcerptContent, getText } from '@vuepress/helper'
import type { App } from 'vuepress/core'
import type { ExtendPage } from '../typings/index.js'

export const generateDescription = (
  app: App,
  page: ExtendPage,
  autoDescription = true,
): void => {
  // generate description
  if (!page.frontmatter.description && autoDescription) {
    const content = getPageExcerptContent(page.content)
      ? page.data.excerpt ?? page.contentRendered
      : page.contentRendered

    const pageText = getText(content, app.options.base, {
      length: 180,
      singleLine: true,
    })

    if (pageText.length) {
      page.frontmatter.description =
        pageText.length > 180 ? `${pageText.slice(0, 177)}...` : pageText
      page.data.autoDesc = true
    }
  }
}
