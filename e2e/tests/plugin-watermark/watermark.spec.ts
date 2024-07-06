import { expect, test } from '@playwright/test'

test.describe('plugin-watermark', () => {
  test('enabled watermark', async ({ page }) => {
    await page.goto('watermark/')

    expect(
      await page.locator('//html/body/div[2]').getAttribute('style'),
    ).toContain('z-index: 2147483647 !important;')

    expect(
      await page.locator('//html/body/div[2]/div').getAttribute('style'),
    ).toContain('background-image: url("data:image/png;base64,')
  })

  test('disabled watermark', async ({ page }) => {
    await page.goto('watermark/disabled.html')

    await expect(page.locator('//html/body/div[2]')).not.toBeVisible()
  })
})
