import { readdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const getSubDirectories = (dir: string): string[] =>
  readdirSync(dir).filter((item) => statSync(join(dir, item)).isDirectory())

const pluginPackages = getSubDirectories(join(__dirname, 'plugins')).flatMap(
  (category) => getSubDirectories(join(__dirname, 'plugins', category)),
)
const themePackages = getSubDirectories(join(__dirname, 'themes'))
const toolPackages = getSubDirectories(join(__dirname, 'tools'))

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['e2e', 'release', ...pluginPackages, ...themePackages, ...toolPackages],
    ],
    'footer-max-line-length': [0],
  },
}
