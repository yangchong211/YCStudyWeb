import type { App } from 'vuepress/core'
import { getIdPrefix, getPath } from '../utils.js'

export interface PreparePaletteOptions {
  id: string
  defaultPalette: string
  generator: string
  userPalette: string
}

export const preparePaletteSass = (
  app: App,
  { id, defaultPalette, generator, userPalette }: PreparePaletteOptions,
): Promise<string> =>
  app.writeTemp(
    `sass-palette/${getIdPrefix(id)}palette.scss`,
    `\
@import "file:///${getPath(defaultPalette)}";
@import "file:///${getPath(userPalette)}";
@import "file:///${getPath(generator)}";
`,
  )
