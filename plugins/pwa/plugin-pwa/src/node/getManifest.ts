import { getRootLang } from '@vuepress/helper'
import type { App } from 'vuepress/core'
import { fs } from 'vuepress/utils'
import type { AppManifest } from '../shared/index.js'
import type { PwaPluginOptions } from './options.js'

export const getManifest = async (
  app: App,
  options: PwaPluginOptions,
): Promise<AppManifest> => {
  const { siteData } = app
  const { base } = app.options

  const userManifestPath = app.dir.source(
    '.vuepress/public/manifest.webmanifest',
  )
  const userManifestJSONPath = app.dir.source('.vuepress/public/manifest.json')

  const manifestFileContent = JSON.parse(
    fs.existsSync(userManifestPath)
      ? await fs.readFile(userManifestPath, 'utf8')
      : fs.existsSync(userManifestJSONPath)
        ? await fs.readFile(userManifestJSONPath, 'utf8')
        : '{}',
  ) as AppManifest

  const manifest: AppManifest = {
    name: siteData.title || siteData.locales['/']?.title || 'Site',
    short_name: siteData.title || siteData.locales['/']?.title || 'Site',
    description:
      siteData.description ||
      siteData.locales['/']?.description ||
      'A site built with vuepress',
    lang: getRootLang(app),
    start_url: base,
    scope: base,

    display: 'standalone',
    theme_color: options.themeColor || '#46bd87',
    background_color: '#ffffff',
    orientation: 'portrait-primary',
    prefer_related_applications: false,

    ...manifestFileContent,
    ...options.manifest,
  }

  return manifest
}
