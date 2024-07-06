import type { PackageManager } from '../utils/index.js'
import type { CreateLocaleOptions } from './typings.js'

export const en: CreateLocaleOptions = {
  flow: {
    getVersion: 'Getting latest version of deps...',
    createPackage: 'Generating package.json...',
    generateTemplate: 'Generating Template...',
    install: 'Installing Deps...',
    devServer:
      "Staring dev server...\nAfter the dev server starts running, please visit the given server link ('localhost:8080' by default)",
  },

  question: {
    i18n: 'Does the project need multiple languages?',
    workflow: 'Do you need a GitHub workflow to deploy docs on GitHub pages?',
    bundler: 'Which bundler do you want to use?',
    preset: 'What type of project do you want to create?',
    packageManager: 'Choose package manager',
    devServer: 'Would you like to preview template now?',
    name: 'Your project name',
    version: 'Your project version',
    description: 'Your project description',
    license: 'Your project license',
  },

  hint: {
    install:
      'This may take a few minutes, please be patient.\nWe can not correctly output progress bar from child process, so the process may look stuck.',
    finish: 'Successful Generated!',
    devServer: (packageManager: PackageManager): string =>
      `Hint: You should execute "${packageManager} run docs:dev" to start dev server.`,
  },

  error: {
    name: 'package name should only contain lowercase characters, numbers and dash',
    version: "This version is not a valid one. Version should be like 'x.x.x'",
    bundler: 'bundler (--bundler) only support "vite" or "webpack"',
    preset: 'preset (--preset) only support "doc" or "blog"',
    theme:
      'Current theme is not supported yet, using @vuepress/theme-default instead.',
    dirMissing: (packageManager: PackageManager): string =>
      `You should specific a folder name for your project, e.g.: "my-blog", "my-docs"\nFor example: "${packageManager} init vuepress my-docs"`,
    dirNotEmpty: (dir: string) =>
      `Target folder "${dir}" is not empty, please choose an empty folder or delete files in it.`,
  },
}
