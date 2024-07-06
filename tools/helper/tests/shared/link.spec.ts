import { expect, it } from 'vitest'
import { isLinkAbsolute } from '../../src/shared/link.js'

it('isLinkAbsolute()', () => {
  expect(isLinkAbsolute('/a/')).toEqual(true)
  expect(isLinkAbsolute('/a.html')).toEqual(true)
  expect(isLinkAbsolute('mister-hope.com')).toEqual(false)
  expect(isLinkAbsolute('mrhope')).toEqual(false)
})
