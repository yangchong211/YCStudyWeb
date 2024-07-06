import type { App } from 'vuepress/core'
import { fs, path } from 'vuepress/utils'
import type { FeedConfig } from '../typings/index.js'

export const writeFiles = (app: App, files: FeedConfig[]): Promise<void>[] =>
  files.map(async ([filename, content]) => {
    const location = app.dir.dest(filename)

    await fs.ensureDir(path.dirname(location))
    await fs.writeFile(location, content, 'utf-8')
  })
