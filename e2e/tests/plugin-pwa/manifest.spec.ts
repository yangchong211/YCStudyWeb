import { expect, test } from '@playwright/test'
import { BASE } from '../../utils/env.js'

test.describe('plugin-pwa', () => {
  test('have manifest', async ({ request }) => {
    const response = await request.get('manifest.webmanifest')

    expect(response).toBeOK()

    const content = await response.json()

    expect(typeof content).toBe('object')
    expect(content).toHaveProperty('name', 'VuePress Ecosystem E2E')
    expect(content).toHaveProperty('short_name', 'VuePress Ecosystem E2E')
    expect(content).toHaveProperty(
      'description',
      'VuePress Ecosystem E2E Test Site',
    )
    expect(content).toHaveProperty('lang', 'en-US')
    expect(content).toHaveProperty('start_url', BASE)
    expect(content).toHaveProperty('display', 'standalone')
    expect(content).toHaveProperty('theme_color', '#46bd87')
    expect(content).toHaveProperty('background_color', '#ffffff')
    expect(content).toHaveProperty('theme_color', '#46bd87')
    expect(content).toHaveProperty('icons')
    expect(content).toHaveProperty('orientation', 'portrait-primary')
  })

  test('have manifest links', async ({ page }) => {
    await page.goto('')

    await expect(page.locator('link[rel="manifest"]')).toHaveAttribute(
      'href',
      `${BASE}manifest.webmanifest`,
    )
    await page.goto('404.html')

    await expect(page.locator('link[rel="manifest"]')).toHaveAttribute(
      'href',
      `${BASE}manifest.webmanifest`,
    )
  })
})
