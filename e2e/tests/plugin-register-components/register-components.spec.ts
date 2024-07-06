import { expect, test } from '@playwright/test'

test.describe('plugin-register-components', () => {
  test('components', async ({ page }) => {
    await page.goto('register-components/')

    await expect(page.locator('#global-component-4')).toHaveCount(1)
    await expect(page.locator('#global-component-5')).toHaveCount(1)
    await expect(page.locator('#global-component-6')).toHaveCount(1)
  })

  test('componentsDir', async ({ page }) => {
    await page.goto('register-components/')

    await expect(page.locator('#global-component-1')).toHaveCount(1)
  })

  test('componentsPatterns', async ({ page }) => {
    await page.goto('register-components/')

    await expect(page.locator('#global-component-2')).toHaveCount(1)
    await expect(page.locator('#global-component-3')).toHaveCount(1)
  })
})
