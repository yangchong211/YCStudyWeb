#!/usr/bin/env node
import { spawnSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { cac } from 'cac'
import { version } from './config/index.js'
import {
  checkTaobaoRegistry,
  getPackageManager,
  updatePackages,
} from './utils/index.js'

const cli = cac('vp-update')

cli
  .command('[dir]', 'Update VuePress project')
  .usage(
    'pnpm dlx vp-update [dir] / npx vp-update [dir] / bunx vp-update [dir]',
  )
  .example('docs')
  .action(async (targetDir = ''): Promise<Error | void> => {
    console.log('Bumping deps...')
    const dir = resolve(process.cwd(), targetDir)
    const packageJSON = resolve(dir, 'package.json')

    if (!existsSync(packageJSON))
      return new Error(`No package.json found in ${targetDir || 'current dir'}`)

    const packageManager = getPackageManager()

    checkTaobaoRegistry(packageManager)

    const content = readFileSync(packageJSON, { encoding: 'utf-8' })

    const packageJSONContent = JSON.parse(content)

    await Promise.all([
      packageJSONContent.dependencies
        ? updatePackages(packageManager, packageJSONContent.dependencies)
        : Promise.resolve(),
      packageJSONContent.devDependencies
        ? updatePackages(packageManager, packageJSONContent.devDependencies)
        : Promise.resolve(),
    ])

    writeFileSync(
      packageJSON,
      `${JSON.stringify(packageJSONContent, null, 2)}\n`,
    )

    console.log('Install deps...')

    spawnSync(`${packageManager} install`, {
      shell: true,
      stdio: 'inherit',
    })

    console.log('Upgrading deps...')

    spawnSync(
      packageManager === 'pnpm'
        ? `pnpm update`
        : packageManager === 'yarn1'
          ? `yarn upgrade`
          : packageManager === 'yarn'
            ? `yarn up`
            : packageManager === 'bun'
              ? `bun update`
              : `npm update`,
      {
        shell: true,
        stdio: 'inherit',
      },
    )
  })

cli.help(() => [
  {
    title:
      'pnpm dlx vp-update [dir] / npx vp-update [dir] / bunx vp-update [dir]',
    body: 'Update VuePress project in [dir]',
  },
])

cli.version(version)

cli.parse()
