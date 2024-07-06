import type MarkdownIt from 'markdown-it'
import type { MarkdownEnv } from 'vuepress/markdown'

export type MarkdownFilePathGetter = () => string

export const createMarkdownFilePathGetter = (
  md: MarkdownIt,
): MarkdownFilePathGetter => {
  const store: { path?: string | null } = {}

  const rawRender = md.render

  // we need to store file path before each render
  md.render = (src, env: MarkdownEnv) => {
    store.path = env.filePathRelative

    return rawRender(src, env)
  }

  return () => store.path || 'dynamic pages'
}
