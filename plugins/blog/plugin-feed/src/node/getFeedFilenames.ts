import type { App } from 'vuepress/core'
import { removeLeadingSlash } from 'vuepress/shared'
import type { FeedPluginOptions } from '../typings/index.js'
import type { ResolvedFeedOptions } from './getFeedOptions.js'
import { getUrl } from './utils/index.js'

export const getFeedFilenames = (
  options: ResolvedFeedOptions,
  prefix = '/',
): Required<
  Pick<
    FeedPluginOptions,
    | 'atomOutputFilename'
    | 'atomXslFilename'
    | 'jsonOutputFilename'
    | 'rssOutputFilename'
    | 'rssXslFilename'
  >
> => ({
  atomOutputFilename: `${removeLeadingSlash(prefix)}${
    options.atomOutputFilename || 'atom.xml'
  }`,
  atomXslFilename: `${removeLeadingSlash(prefix)}${
    options.atomXslFilename || 'atom.xsl'
  }`,

  jsonOutputFilename: `${removeLeadingSlash(prefix)}${
    options.jsonOutputFilename || 'feed.json'
  }`,
  rssOutputFilename: `${removeLeadingSlash(prefix)}${
    options.rssOutputFilename || 'rss.xml'
  }`,
  rssXslFilename: `${removeLeadingSlash(prefix)}${
    options.rssXslFilename || 'rss.xsl'
  }`,
})

export interface FeedLinks {
  localePath: string
  atom: string
  atomXsl: string
  json: string
  rss: string
  rssXsl: string
}

export const getFeedLinks = (
  app: App,
  options: ResolvedFeedOptions,
  localePath: string,
): FeedLinks => {
  const { base } = app.options
  const { hostname } = options
  const {
    atomOutputFilename,
    atomXslFilename,
    jsonOutputFilename,
    rssOutputFilename,
    rssXslFilename,
  } = getFeedFilenames(options, localePath)

  return {
    localePath,
    atom: getUrl(hostname, base, atomOutputFilename),
    atomXsl: getUrl(hostname, base, atomXslFilename),
    json: getUrl(hostname, base, jsonOutputFilename),
    rss: getUrl(hostname, base, rssOutputFilename),
    rssXsl: getUrl(hostname, base, rssXslFilename),
  }
}
