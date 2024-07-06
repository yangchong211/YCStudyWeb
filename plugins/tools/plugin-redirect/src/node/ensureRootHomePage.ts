import type { App } from 'vuepress/core'
import { createPage } from 'vuepress/core'

export const ensureRootHomePage = async (app: App): Promise<void> => {
  if (
    // root homepage not exists
    app.pages.every(({ path }) => path !== '/')
  ) {
    app.pages.push(
      await createPage(app, {
        path: '/',
        frontmatter: { title: 'Home' },
        // set markdown content
        content: `\
Redirecting to the correct locale...
`,
      }),
    )
  }
}
