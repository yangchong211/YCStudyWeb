import type { App } from 'vuepress/core'
import { getIdPrefix, getPath } from '../utils.js'

export interface PrepareStyleOptions {
  id: string
  userStyle: string | null
}

export const prepareStyleSass = (
  app: App,
  { id, userStyle }: PrepareStyleOptions,
): Promise<string | null> =>
  userStyle
    ? app.writeTemp(
        `sass-palette/${getIdPrefix(id)}style.scss`,
        `\
@forward "file:///${getPath(userStyle)}";
`,
      )
    : Promise.resolve(null)
