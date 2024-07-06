import { expect, test } from '@playwright/test'

test.describe('plugin-copyright', () => {
  test('disable selection', async ({ page }) => {
    await page.goto('')

    await expect(page.locator('#app')).toHaveCSS('user-select', 'auto')

    await page.goto('copyright/selection.html')

    await expect(page.locator('#app')).toHaveCSS('user-select', 'none')
  })
})
