import { getRealPath } from '@vuepress/helper'
import type { App } from 'vuepress'
import type { MarkdownImagePluginOptions } from '../options.js'
import { PLUGIN_NAME } from '../utils.js'
import { prepareMarkStyleFile } from './prepareMarkStyleFile.js'

export const prepareClientConfigFile = async (
  app: App,
  {
    lightmodeSelector = 'html:not(.dark)',
    darkmodeSelector = 'html.dark',
    figure,
    mark,
  }: MarkdownImagePluginOptions,
): Promise<string> => {
  let content = ''

  if (figure) {
    content += `\
import "${getRealPath(`${PLUGIN_NAME}/client/styles/figure.css`, import.meta.url)}"
`
  }

  if (mark) {
    content += `\
import "${await prepareMarkStyleFile(app, lightmodeSelector, darkmodeSelector)}"
`
  }

  return app.writeTemp(
    'markdown-image/client.js',
    `\
${content}
`,
  )
}
