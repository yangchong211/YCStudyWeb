import { expect, it } from 'vitest'
import { getRegistry } from '../src/utils/registry.js'

it('getRegistry', () => {
  expect(getRegistry('pnpm')).toBe('https://registry.npmjs.org/')
})
