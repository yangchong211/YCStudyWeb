import { expect, test } from '@playwright/test'
import { BASE } from '../../utils/env.js'

test.describe('sitemap', () => {
  test('have sitemap xml', async ({ request }) => {
    const response = await request.get('sitemap.xml')

    expect(response).toBeOK()

    const content = await response.text()

    expect(content).toContain('<?xml version="1.0"')
    expect(content).toContain(
      `https://ecosystem-e2e-test.com${BASE}markdown.html`,
    )
  })

  test('have sitemap style file', async ({ request }) => {
    const response = await request.get('sitemap.xsl')

    expect(response).toBeOK()

    const content = await response.text()

    expect(content).toContain('<?xml version="1.0"')
  })

  test('frontmatter config', async ({ request }) => {
    const response = await request.get('sitemap.xml')

    expect(response).toBeOK()

    const content = await response.text()

    expect(content).toContain('<changefreq>yearly</changefreq>')
  })

  test('exclude url', async ({ request }) => {
    const response = await request.get('sitemap.xml')

    expect(response).toBeOK()

    const content = await response.text()

    expect(content).not.toContain('/sitemap/config-exclude.html')
    expect(content).not.toContain('/sitemap/frontmatter-exclude.html')
    expect(content).not.toContain('/sitemap/meta-exclude.html')
  })
})
