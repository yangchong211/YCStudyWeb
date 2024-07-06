import { spawnSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

export type PackageManager = 'npm' | 'yarn' | 'yarn1' | 'pnpm' | 'bun'

const globalCache = new Map<string, boolean>()
const localCache = new Map<string, PackageManager>()

const PACKAGE_CONFIG = 'package.json'
const NPM_LOCK = 'package-lock.json'
const YARN_LOCK = 'yarn.lock'
const PNPM_LOCK = 'pnpm-lock.yaml'
const BUN_LOCK = 'bun.lockb'

const isInstalled = (packageManager: PackageManager): boolean => {
  try {
    const bin = packageManager === 'yarn1' ? 'yarn' : packageManager

    const result = spawnSync(`${bin} --version`, {
      shell: true,
    })

    if (packageManager === 'yarn1')
      return result.stdout.toString().startsWith('1')

    return result.status === 0
  } catch (e) {
    return false
  }
}

/**
 * Check if a package manager is installed globally.
 *
 * @param packageManager package manager
 */
export const isPackageManagerInstalled = (
  packageManager: PackageManager,
): boolean => {
  const key = `global:${packageManager}`

  const status = globalCache.get(key)

  if (status !== undefined) return status

  if (isInstalled(packageManager)) {
    globalCache.set(key, true)

    return true
  }

  return false
}

/**
 * Get package manager setting in package.json
 *
 * @param cwd current working directory
 * @param deep whether to search in parent directories
 * @returns the type of lock file
 */
export const getPackageManagerSetting = (
  cwd = process.cwd(),
  deep = true,
): PackageManager | null => {
  const key = `package:${cwd}`

  const status = localCache.get(key)

  if (status !== undefined) return status

  if (existsSync(resolve(cwd, PACKAGE_CONFIG))) {
    const { packageManager: packageManagerSettings } = JSON.parse(
      readFileSync(resolve(cwd, PACKAGE_CONFIG), 'utf-8'),
    ) as Record<string, unknown> & { packageManager?: string }

    if (packageManagerSettings) {
      const packageManager = packageManagerSettings.split(
        '@',
      )[0] as PackageManager

      localCache.set(key, packageManager)

      return packageManager
    }
  }

  if (deep) {
    let dir = cwd

    while (dir !== dirname(dir)) {
      dir = dirname(dir)

      if (existsSync(resolve(cwd, PACKAGE_CONFIG))) {
        const { packageManager: packageManagerSettings } = JSON.parse(
          readFileSync(resolve(cwd, PACKAGE_CONFIG), 'utf-8'),
        ) as Record<string, unknown> & { packageManager?: string }

        if (packageManagerSettings) {
          const packageManager = packageManagerSettings.split(
            '@',
          )[0] as PackageManager

          localCache.set(key, packageManager)

          return packageManager
        }
      }
    }
  }

  return null
}

/**
 * Get the type of lock file.
 *
 * @param cwd current working directory
 * @param deep whether to search in parent directories
 * @returns the type of lock file
 */
export const getTypeofLockFile = (
  cwd = process.cwd(),
  deep = true,
): PackageManager | null => {
  const key = `local:${cwd}`

  const status = localCache.get(key)

  if (status !== undefined) return status

  if (existsSync(resolve(cwd, PNPM_LOCK))) {
    localCache.set(key, 'pnpm')

    return 'pnpm'
  }

  if (existsSync(resolve(cwd, YARN_LOCK))) {
    const packageManager = readFileSync(resolve(cwd, YARN_LOCK), {
      encoding: 'utf-8',
    }).includes('yarn lockfile v1')
      ? 'yarn1'
      : 'yarn'

    localCache.set(key, packageManager)

    return packageManager
  }

  if (existsSync(resolve(cwd, BUN_LOCK))) {
    localCache.set(key, 'bun')

    return 'bun'
  }

  if (existsSync(resolve(cwd, NPM_LOCK))) {
    localCache.set(key, 'npm')

    return 'npm'
  }

  if (deep) {
    let dir = cwd

    while (dir !== dirname(dir)) {
      dir = dirname(dir)

      if (existsSync(resolve(dir, PNPM_LOCK))) {
        localCache.set(key, 'pnpm')

        return 'pnpm'
      }

      if (existsSync(resolve(dir, YARN_LOCK))) {
        const packageManager = readFileSync(resolve(dir, YARN_LOCK), {
          encoding: 'utf-8',
        }).includes('yarn lockfile v1')
          ? 'yarn1'
          : 'yarn'

        localCache.set(key, packageManager)

        return packageManager
      }

      if (existsSync(resolve(dir, BUN_LOCK))) {
        localCache.set(key, 'bun')

        return 'bun'
      }

      if (existsSync(resolve(dir, NPM_LOCK))) {
        localCache.set(key, 'npm')

        return 'npm'
      }
    }
  }

  return null
}

/**
 * Detect the package manager used in the current project.
 *
 * @param cwd current working directory
 * @param deep whether to search in parent directories
 * @returns the type of package manager
 */
export const getPackageManager = (
  cwd = process.cwd(),
  deep = true,
): PackageManager =>
  getPackageManagerSetting(cwd, deep) ||
  getTypeofLockFile(cwd, deep) ||
  (isPackageManagerInstalled('pnpm')
    ? 'pnpm'
    : isPackageManagerInstalled('yarn')
      ? 'yarn'
      : isPackageManagerInstalled('bun')
        ? 'bun'
        : 'npm')
