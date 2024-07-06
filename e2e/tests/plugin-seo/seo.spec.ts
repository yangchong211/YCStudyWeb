import { expect, test } from '@playwright/test'
import { BASE } from '../../utils/env.js'

test.describe('plugin-seo', () => {
  test('have OGP', async ({ page }) => {
    await page.goto('seo/')
    await expect(page.locator('head meta[property="og:url"]')).toHaveAttribute(
      'content',
      `https://ecosystem-e2e-test.com${BASE}seo/`,
    )

    await expect(
      page.locator('head meta[property="og:site_name"]'),
    ).toHaveAttribute('content', 'VuePress Ecosystem E2E')
    await expect(
      page.locator('head meta[property="og:title"]'),
    ).toHaveAttribute('content', 'SEO Demo Page')
    await expect(
      page.locator('head meta[property="og:description"]'),
    ).toHaveAttribute(
      'content',
      'Here is article excerpt. Content alt Here is main content of article. A B C',
    )
    await expect(page.locator('head meta[property="og:type"]')).toHaveAttribute(
      'content',
      'article',
    )
    await expect(
      page.locator('head meta[property="og:locale"]'),
    ).toHaveAttribute('content', 'en-US')
    await expect(
      page.locator('head meta[property="article:author"]'),
    ).toHaveAttribute('content', 'Mr.Hope')
    await expect(
      page.locator('head meta[property="article:tag"]'),
    ).toHaveAttribute('content', 'Demo')
    await expect(
      page.locator('head meta[property="article:published_time"]'),
    ).toHaveAttribute('content', '2021-01-01T00:00:00.000Z')
  })

  test('have JSONLD', async ({ page }) => {
    await page.goto('seo/')

    const json = JSON.parse(
      await page.locator('head script[type="application/ld+json"]').innerText(),
    )

    expect(json['@context']).toBe('https://schema.org')
    expect(json['@type']).toBe('Article')
    expect(json.headline).toBe('SEO Demo Page')
    expect(json.image).toStrictEqual([
      `https://ecosystem-e2e-test.com${BASE}logo.png`,
    ])
    expect(json.datePublished).toBe('2021-01-01T00:00:00.000Z')
    expect(json).toHaveProperty('dateModified')
    expect(json.author[0]['@type']).toBe('Person')
    expect(json.author[0].name).toBe('Mr.Hope')
  })
})
