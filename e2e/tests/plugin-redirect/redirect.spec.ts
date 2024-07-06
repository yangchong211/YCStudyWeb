import { expect, test } from '@playwright/test'
import { BASE } from '../../utils/env.js'

test.describe('plugin-redirect', () => {
  test('frontmatter redirectFrom', async ({ page }) => {
    await page.goto('redirect/from.html')
    await page.waitForURL('redirect/final.html')
    expect(new URL(await page.url()).pathname).toBe(
      `${BASE}redirect/final.html`,
    )
  })

  test('frontmatter redirectTo', async ({ page }) => {
    await page.goto('redirect/to.html')
    await page.waitForURL('redirect/final.html')

    expect(new URL(await page.url()).pathname).toBe(
      `${BASE}redirect/final.html`,
    )
  })

  test('config', async ({ page }) => {
    await page.goto('redirect/config.html')
    await page.waitForURL('redirect/final.html')

    expect(new URL(await page.url()).pathname).toBe(
      `${BASE}redirect/final.html`,
    )

    await page.goto('redirect/config/')
    await page.waitForURL('redirect/final.html')

    expect(new URL(await page.url()).pathname).toBe(
      `${BASE}redirect/final.html`,
    )
  })
})
