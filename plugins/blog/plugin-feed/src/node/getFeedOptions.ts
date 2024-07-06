import {
  dateSorter,
  fromEntries,
  isArray,
  isFunction,
  keys,
} from '@vuepress/helper'
import type { GitData } from '@vuepress/plugin-git'
import type { App, Page } from 'vuepress/core'
import type {
  BaseFeedPluginOptions,
  FeedPluginFrontmatter,
  FeedPluginOptions,
} from '../typings/index.js'

export interface ResolvedFeedOptions
  extends Omit<
      BaseFeedPluginOptions,
      'sorter' | 'filter' | 'preservedElements'
    >,
    Required<Pick<BaseFeedPluginOptions, 'sorter' | 'filter'>> {
  hostname: string
  isPreservedElement: (tagName: string) => boolean
}

export type ResolvedFeedOptionsMap = Record<string, ResolvedFeedOptions>

export const getFeedOptions = (
  { siteData }: App,
  options: FeedPluginOptions,
): ResolvedFeedOptionsMap =>
  fromEntries(
    keys({
      // root locale must exists
      '/': {},
      ...siteData.locales,
    }).map((localePath) => {
      const preservedElements =
        options.locales?.[localePath]?.preservedElements ||
        options.preservedElements
      const { hostname, devServer, locales, ...rest } = options

      return [
        localePath,
        {
          // default values
          filter: ({
            frontmatter,
            filePathRelative,
          }: Page<Record<string, never>, FeedPluginFrontmatter>): boolean =>
            Boolean(
              frontmatter.feed ?? (filePathRelative && !frontmatter.home),
            ),
          sorter: (
            pageA: Page<{ git?: GitData }, Record<string, never>>,
            pageB: Page<{ git?: GitData }, Record<string, never>>,
          ): number =>
            dateSorter(
              pageA.data.git?.createdTime
                ? new Date(pageA.data.git?.createdTime)
                : pageA.frontmatter.date,
              pageB.data.git?.createdTime
                ? new Date(pageB.data.git?.createdTime)
                : pageB.frontmatter.date,
            ),

          ...rest,
          ...options.locales?.[localePath],

          // make sure these are not overrode
          hostname,
          isPreservedElement: isArray(preservedElements)
            ? (tagName: string): boolean =>
                preservedElements.some((item) =>
                  item instanceof RegExp
                    ? item.test(tagName)
                    : item === tagName,
                )
            : isFunction(preservedElements)
              ? preservedElements
              : (): boolean => false,
        } as ResolvedFeedOptions,
      ]
    }),
  )
