import { expect, test } from '@playwright/test'

test.describe('copy-code', () => {
  test('have copy code button', async ({ context, page }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write'])

    await page.goto('copy-code/')
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const locator = page.locator('.vp-copy-code-button')

    await expect(locator).toHaveCount(1)

    await locator.first().click()

    expect(locator.first()).toHaveAttribute('class', /copied/)

    const content = await page.evaluate(() => navigator.clipboard.readText())

    expect(content).toMatch(/const a = 1\r?\nconst b = 2\r?\n/)

    await page.evaluate(() => navigator.clipboard.writeText(''))
  })
})
