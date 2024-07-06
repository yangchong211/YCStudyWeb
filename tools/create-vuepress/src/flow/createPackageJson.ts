import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import inquirer from 'inquirer'
import type { CreateLocaleOptions } from '../i18n/index.js'
import type { PackageManager } from '../utils/index.js'
import { peerDependencies } from '../utils/index.js'

const PACKAGE_NAME_REG =
  /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/u

const VERSION_REG = /^[0-9]+\.[0-9]+\.(?:[0-9]+|[0-9]+-[a-z]+\.[0-9])$/u

interface CreatePackageJsonOptions {
  targetDir: string
  packageManager: PackageManager
  locale: CreateLocaleOptions
  preset: 'blog' | 'docs'
  bundler: 'vite' | 'webpack'
}

interface PackageJsonAnswer {
  name: string
  version: string
  description: string
  license: string
}

/**
 * generate package.json
 */
export const createPackageJson = async ({
  targetDir,
  packageManager,
  locale,
  preset,
  bundler,
}: CreatePackageJsonOptions): Promise<void> => {
  const packageJsonPath = join(targetDir, 'package.json')
  const devDependencies = {
    [`@vuepress/bundler-${bundler}`]: '2.0.0-rc.14',
    '@vuepress/theme-default': `${peerDependencies['@vuepress/theme-default']}`,
    'vue': '^3.4.29',
    'vuepress': '2.0.0-rc.14',
  }

  if (preset === 'blog') {
    devDependencies['@vuepress/plugin-blog'] =
      `${peerDependencies['@vuepress/plugin-blog']}`
  }

  console.log(locale.flow.createPackage)

  const result = await inquirer.prompt<PackageJsonAnswer>([
    {
      name: 'name',
      type: 'input',
      message: locale.question.name,
      default: 'my-vuepress-site',
      validate: (input: string): true | string =>
        PACKAGE_NAME_REG.exec(input) ? true : locale.error.name,
    },
    {
      name: 'version',
      type: 'input',
      message: locale.question.version,
      default: '0.0.1',
      validate: (input: string): true | string =>
        VERSION_REG.exec(input) ? true : locale.error.version,
    },
    {
      name: 'description',
      type: 'input',
      message: locale.question.description,
      default: 'A VuePress project',
    },
    {
      name: 'license',
      type: 'input',
      message: locale.question.license,
      default: 'MIT',
    },
  ])

  const packageContent = {
    ...result,
    type: 'module',
    scripts: {
      'docs:build': `vuepress build docs`,
      'docs:clean-dev': `vuepress dev docs --clean-cache`,
      'docs:dev': `vuepress dev docs`,
      'docs:update-package': `${
        packageManager === 'npm' ? 'npx' : `${packageManager} dlx`
      } vp-update`,
    },
    devDependencies,
  }

  writeFileSync(
    packageJsonPath,
    `${JSON.stringify(packageContent, null, 2)}\n`,
    { encoding: 'utf-8' },
  )
}
