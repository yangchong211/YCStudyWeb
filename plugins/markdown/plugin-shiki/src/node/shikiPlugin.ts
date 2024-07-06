import { lineNumbers as lineNumbersPlugin } from '@vuepress/highlighter-helper'
import type { Plugin } from 'vuepress/core'
import { isPlainObject } from 'vuepress/shared'
import {
  applyHighlighter,
  highlightLinesPlugin,
  preWrapperPlugin,
} from './markdown/index.js'
import type { ShikiPluginOptions } from './options.js'

export const shikiPlugin = ({
  preWrapper = true,
  lineNumbers = true,
  ...options
}: ShikiPluginOptions = {}): Plugin => ({
  name: '@vuepress/plugin-shiki',

  extendsMarkdown: async (md, app) => {
    const { code } = app.options.markdown

    await applyHighlighter(md, app, {
      ...(isPlainObject(code) ? code : {}),
      ...options,
    })

    md.use(highlightLinesPlugin)
    md.use(preWrapperPlugin, { preWrapper })
    if (preWrapper) {
      md.use(lineNumbersPlugin, { lineNumbers })
    }
  },
})
