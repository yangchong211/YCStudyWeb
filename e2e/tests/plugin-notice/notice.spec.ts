import { expect, test } from '@playwright/test'

test.describe('notice', () => {
  test('have no notice component', async ({ page }) => {
    await page.goto('')

    await expect(page.locator('.vp-notice-wrapper')).toHaveCount(0)
  })

  test('have notice component', async ({ page }) => {
    await page.goto('notice/')

    await expect(page.locator('.vp-notice-wrapper')).toHaveCount(1)

    const primaryButton = page.locator('.vp-notice-footer-action.primary')

    await expect(primaryButton).toHaveCount(1)

    await primaryButton.click()

    await expect(page.locator('.vp-notice-wrapper')).toHaveCount(0)
  })

  test('have fullscreen notice component', async ({ page }) => {
    await page.goto('notice/fullscreen.html')

    await expect(page.locator('.vp-notice-wrapper')).toHaveCount(1)

    const defaultButton = page.locator('.vp-notice-footer-action:not(.primary)')

    await expect(defaultButton).toHaveCount(1)

    await defaultButton.click()

    await expect(page.locator('.vp-notice-wrapper')).toHaveCount(0)
  })
})
