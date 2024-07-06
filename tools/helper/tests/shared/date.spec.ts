import { describe, expect, it } from 'vitest'
import { getDate } from '../../src/shared/date.js'

describe('getDate()', () => {
  it('get date object', () => {
    expect(getDate('2020-01-01')).toBeInstanceOf(Date)
    expect(getDate('2020-01-01 12:00:00')).toBeInstanceOf(Date)
    expect(getDate('2020-01-01T12:00:00Z')).toBeInstanceOf(Date)
    expect(getDate('2020/01/01')).toBeInstanceOf(Date)
    expect(getDate('2020/1/1')).toBeInstanceOf(Date)
    expect(getDate('2020/1/1 1:00')).toBeInstanceOf(Date)
    expect(getDate(1679494007000)).toBeInstanceOf(Date)
  })

  it('return null', () => {
    expect(getDate('')).toBe(null)
    expect(getDate(undefined)).toBe(null)
    expect(getDate(null)).toBe(null)
  })
})
