import { describe, expect, it } from 'vitest'
import { getDirname, path } from 'vuepress/utils'
import {
  getPackageManager,
  getPackageManagerSetting,
  getTypeofLockFile,
  isPackageManagerInstalled,
} from '../../src/node/utils/packageManager.js'

const __dirname = getDirname(import.meta.url)

const fixtures = path.resolve(__dirname, '../__fixtures__/package-manager')

it('isPackageManagerInstalled()', () => {
  expect(isPackageManagerInstalled('npm')).toBeTruthy()
  expect(isPackageManagerInstalled('pnpm')).toBeTruthy()
})

describe('getPackageManagerSetting()', () => {
  it('Should be npm', () => {
    expect(
      getPackageManagerSetting(path.resolve(fixtures, 'config/npm')),
    ).toEqual('npm')
  })

  it('Should be yarn', () => {
    expect(
      getPackageManagerSetting(path.resolve(fixtures, 'config/yarn')),
    ).toEqual('yarn')
  })

  it('Should be pnpm', () => {
    expect(
      getPackageManagerSetting(path.resolve(fixtures, 'config/pnpm')),
    ).toEqual('pnpm')
  })
})

describe('getTypeofLockFile()', () => {
  it('Should be npm', () => {
    expect(getTypeofLockFile(path.resolve(fixtures, 'lock-file/npm'))).toEqual(
      'npm',
    )
  })

  it('Should be yarn', () => {
    expect(getTypeofLockFile(path.resolve(fixtures, 'lock-file/yarn'))).toEqual(
      'yarn',
    )
  })

  it('Should be pnpm', () => {
    expect(getTypeofLockFile(path.resolve(fixtures, 'lock-file/pnpm'))).toEqual(
      'pnpm',
    )
  })
})

describe('getPackageManager()', () => {
  it('Should be npm', () => {
    expect(getPackageManager(path.resolve(fixtures, 'config/npm'))).toEqual(
      'npm',
    )
    expect(getPackageManager(path.resolve(fixtures, 'lock-file/npm'))).toEqual(
      'npm',
    )
  })

  it('Should be yarn', () => {
    expect(getPackageManager(path.resolve(fixtures, 'config/yarn'))).toEqual(
      'yarn',
    )
    expect(getPackageManager(path.resolve(fixtures, 'lock-file/yarn'))).toEqual(
      'yarn',
    )
  })

  it('Should be pnpm', () => {
    expect(getPackageManager(path.resolve(fixtures, 'config/pnpm'))).toEqual(
      'pnpm',
    )
    expect(getPackageManager(path.resolve(fixtures, 'lock-file/pnpm'))).toEqual(
      'pnpm',
    )
  })
})
