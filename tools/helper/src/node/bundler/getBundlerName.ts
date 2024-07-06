import type { App } from 'vuepress/core'

export const getBundlerName = (app: App): string => {
  const { name } = app.options.bundler

  return name.match(/^@vuepress\/bundler-(.*)$/)?.[1] || name
}
