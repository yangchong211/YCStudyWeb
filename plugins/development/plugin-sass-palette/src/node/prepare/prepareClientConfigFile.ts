import type { App } from 'vuepress/core'
import { getIdPrefix } from '../utils.js'

export const prepareClientConfigFile = (
  app: App,
  id: string,
): Promise<string> =>
  app.writeTemp(
    `sass-palette/load-${id || 'default'}.js`,
    `\
import "@sass-palette/${getIdPrefix(id)}inject";
`,
  )
