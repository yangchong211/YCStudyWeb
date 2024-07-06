import {
  entries,
  fromEntries,
  isArray,
  isFunction,
  isPlainObject,
} from '@vuepress/helper'
import type { App, Page } from 'vuepress/core'
import { normalizePath } from '../shared/normalizePath.js'
import type {
  RedirectPluginFrontmatterOption,
  RedirectPluginOptions,
} from './types/index.js'

export const getRedirectMap = (
  app: App,
  options: RedirectPluginOptions,
): Record<string, string> => {
  const config = isFunction(options.config)
    ? options.config(app)
    : isPlainObject(options.config)
      ? options.config
      : {}

  return {
    ...fromEntries(
      (
        app.pages as Page<
          Record<string, never>,
          RedirectPluginFrontmatterOption
        >[]
      )
        .map<[string, string][]>(({ frontmatter, path }) =>
          isArray(frontmatter.redirectFrom)
            ? frontmatter.redirectFrom.map((from) => [
                normalizePath(from, true),
                path,
              ])
            : frontmatter.redirectFrom
              ? [[normalizePath(frontmatter.redirectFrom, true), path]]
              : [],
        )
        .flat(),
    ),
    ...fromEntries(
      entries(config).map(([from, to]) => [
        normalizePath(from, true),
        normalizePath(to),
      ]),
    ),
  }
}
