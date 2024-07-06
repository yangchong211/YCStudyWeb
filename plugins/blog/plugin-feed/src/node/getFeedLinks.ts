import type { App } from 'vuepress/core'
import { getFeedFilenames } from './getFeedFilenames.js'
import type { ResolvedFeedOptions } from './getFeedOptions.js'
import { getUrl } from './utils/index.js'

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
