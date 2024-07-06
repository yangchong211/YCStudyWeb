import { expect, test } from '@playwright/test'

test.describe('plugin-feed', () => {
  test('have atom feed', async ({ request }) => {
    const response = await request.get('atom.xml')

    expect(response).toBeOK()

    const content = await response.text()

    expect(content).toContain('<?xml version="1.0"')
    expect(content).toContain('<strong>article excerpt</strong>')
  })

  test('have atom feed style file', async ({ request }) => {
    const response = await request.get('atom.xsl')

    expect(response).toBeOK()

    const content = await response.text()

    expect(content).toContain('<?xml version="1.0"')
  })

  test('have json feed', async ({ request }) => {
    const response = await request.get('feed.json')

    expect(response).toBeOK()

    const content = await response.json()

    expect(content).toHaveProperty(
      'version',
      'https://jsonfeed.org/version/1.1',
    )
    expect(JSON.stringify(content)).toContain(
      '<strong>article excerpt</strong>',
    )
  })

  test('have rss feed', async ({ request }) => {
    const response = await request.get('rss.xml')

    expect(response).toBeOK()

    const content = await response.text()

    expect(content).toContain('<?xml version="1.0"')
    expect(content).toContain('<strong>article excerpt</strong>')
  })

  test('have rss feed style file', async ({ request }) => {
    const response = await request.get('rss.xsl')

    expect(response).toBeOK()

    const content = await response.text()

    expect(content).toContain('<?xml version="1.0"')
  })

  test('customize feed', async ({ request }) => {
    const atomResponse = await request.get('atom.xml')

    expect(atomResponse).toBeOK()

    const atomContent = await atomResponse.text()

    expect(atomContent).toContain('Custom feed title')
    expect(atomContent).toContain('Custom feed content.')

    const jsonResponse = await request.get('feed.json')

    expect(jsonResponse).toBeOK()

    const jsonContent = await jsonResponse.text()

    expect(jsonContent).toContain('Custom feed title')
    expect(jsonContent).toContain('Custom feed description')
    expect(jsonContent).toContain('Custom feed content.')

    const rssResponse = await request.get('rss.xml')

    expect(rssResponse).toBeOK()

    const rssContent = await rssResponse.text()

    expect(rssContent).toContain('Custom feed title')
    expect(rssContent).toContain('Custom feed description')
    expect(rssContent).toContain('Custom feed content.')
  })

  test('exclude feed', async ({ request }) => {
    const atomResponse = await request.get('atom.xml')

    expect(atomResponse).toBeOK()

    const atomContent = await atomResponse.text()

    expect(atomContent).not.toContain('Excluded feed page content.')

    const jsonResponse = await request.get('feed.json')

    expect(jsonResponse).toBeOK()

    const jsonContent = await jsonResponse.text()

    expect(jsonContent).not.toContain('Excluded feed page content.')

    const rssResponse = await request.get('rss.xml')

    expect(rssResponse).toBeOK()

    const rssContent = await rssResponse.text()

    expect(rssContent).not.toContain('Excluded feed page content.')
  })
})
