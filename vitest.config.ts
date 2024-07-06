import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

const getSubDirectories = (dir: string): string[] =>
  fs
    .readdirSync(dir)
    .filter((item) => fs.statSync(path.join(dir, item)).isDirectory())
const root = path.dirname(fileURLToPath(import.meta.url))

const pluginPackages = getSubDirectories(path.resolve(root, 'plugins'))
const themePackages = getSubDirectories(path.resolve(root, 'themes'))

export default defineConfig({
  resolve: {
    alias: [
      {
        find: new RegExp(`^@vuepress/(${pluginPackages.join('|')})$`),
        replacement: path.resolve(root, './plugins/$1/src/index.ts'),
      },
      {
        find: new RegExp(`^@vuepress/(${themePackages.join('|')})$`),
        replacement: path.resolve(root, './themes/$1/src/index.ts'),
      },
      {
        find: new RegExp(`^@vuepress/(${themePackages.join('|')}/client)$`),
        replacement: path.resolve(root, './themes/$1/src/client/index.ts'),
      },
    ],
  },
  test: {
    coverage: {
      all: false,
      provider: 'istanbul',
      reporter: ['clover', 'json', 'lcov', 'text'],
    },
    include: [
      'plugins/**/tests/**/*.spec.ts',
      'themes/**/tests/**/*.spec.ts',
      'tools/**/tests/**/*.spec.ts',
    ],
  },
})
