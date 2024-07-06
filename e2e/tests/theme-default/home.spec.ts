import { expect, test } from '@playwright/test'
import { BASE } from '../../utils/env.js'

test.describe('homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('')
  })

  test('has hero info', async ({ page }) => {
    const TITLE = 'VuePress Ecosystem E2E'
    const DESCRIPTION = 'VuePress Ecosystem E2E Test Site'
    const HERO_IMAGE = 'https://v2.vuepress.vuejs.org/images/hero.png'

    const img = page.locator('.vp-hero-image')
    const mainTitle = page.locator('#main-title')
    const mainDescription = page.locator('.vp-hero-description')
    const actionButtons = page.locator('.vp-hero-action-button')

    await expect(img).toHaveAttribute('src', HERO_IMAGE)
    await expect(img).toHaveAttribute('alt', TITLE)

    await expect(mainTitle).toHaveText(TITLE)
    await expect(mainDescription).toHaveText(DESCRIPTION)
    await expect(actionButtons).toHaveCount(2)

    for (let index = 0; index < 2; index++) {
      const actionButton = actionButtons.nth(index)

      await expect(actionButton).toHaveAttribute(
        'href',
        `${BASE}action${index + 1}.html`,
      )
      await expect(actionButton).toHaveAttribute(
        'aria-label',
        `Action${index + 1}`,
      )
      await expect(actionButton).toHaveText(`Action${index + 1}`)
    }
  })

  test('has feature', async ({ page }) => {
    const features = page.locator('.vp-feature')

    await expect(features).toHaveCount(3)

    for (let index = 0; index < 3; index++) {
      const featureHeading = page.locator('.vp-feature h2').nth(index)
      const featureDetail = page.locator('.vp-feature p').nth(index)

      await expect(featureHeading).toHaveText(`Feature${index + 1}`)
      await expect(featureDetail).toHaveText(`Detail${index + 1}`)
    }
  })

  test('has content', async ({ page }) => {
    await expect(page.locator('.theme-default-content')).toHaveText(
      'HomePage Content',
    )
  })

  test('has footer', async ({ page }) => {
    await expect(page.locator('.vp-footer')).toHaveText('Footer Content')
  })
})
