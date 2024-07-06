import { describe, expect, it } from 'vitest'
import { getInstalledStatus } from '../../src/node/utils/getInstalledStatus.js'

describe('getInstalledStatus', () => {
  it('should return true with deps', () => {
    expect(getInstalledStatus('vue', import.meta.url)).toEqual(true)
  })

  it('should return true with built-in', () => {
    expect(getInstalledStatus('path', import.meta.url)).toEqual(true)
    expect(getInstalledStatus('node:path', import.meta.url)).toEqual(true)
  })

  it('should return true with built-in', () => {
    expect(getInstalledStatus('path', import.meta.url)).toEqual(true)
    expect(getInstalledStatus('node:path', import.meta.url)).toEqual(true)
  })

  it('should return false with not existed', () => {
    expect(getInstalledStatus('not-existed', import.meta.url)).toEqual(false)
  })
})
