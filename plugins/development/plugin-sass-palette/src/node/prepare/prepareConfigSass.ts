import type { App } from 'vuepress/core'
import { getIdPrefix, getPath } from '../utils.js'

export interface PrepareConfigOptions {
  id: string
  defaultConfig: string
  defaultPalette: string
  generator: string
  userConfig: string
  userPalette: string
}

export const prepareConfigSass = (
  app: App,
  {
    id,
    defaultConfig,
    defaultPalette,
    generator,
    userConfig,
    userPalette,
  }: PrepareConfigOptions,
): Promise<string> =>
  app.writeTemp(
    `sass-palette/${getIdPrefix(id)}config.scss`,
    `\
@import "file:///${getPath(defaultPalette)}";
@import "file:///${getPath(defaultConfig)}";
@import "file:///${getPath(userPalette)}";
@import "file:///${getPath(userConfig)}";
@import "file:///${getPath(generator)}";
`,
  )
