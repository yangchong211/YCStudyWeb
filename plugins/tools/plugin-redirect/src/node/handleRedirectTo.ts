import { isLinkAbsolute, removeLeadingSlash } from '@vuepress/helper'
import type { App, Page } from 'vuepress/core'
import { normalizePath } from '../shared/normalizePath.js'
import type { RedirectPluginFrontmatterOption } from './types/index.js'

export const handleRedirectTo = ({ frontmatter }: Page, app: App): void => {
  const { base } = app.options

  const { redirectTo } = frontmatter as RedirectPluginFrontmatterOption

  if (redirectTo) {
    const redirectUrl = normalizePath(
      isLinkAbsolute(redirectTo)
        ? `${base}${removeLeadingSlash(redirectTo)}`
        : redirectTo,
    )

    ;(frontmatter.head ??= []).unshift([
      'script',
      {},
      `{\
const anchor = window.location.hash.substring(1);\
location.href=\`${redirectUrl}\${anchor? \`#\${anchor}\`: ""}\`;\
}`,
    ])
  }
}
