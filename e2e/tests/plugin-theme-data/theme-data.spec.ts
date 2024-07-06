import { expect, test } from '@playwright/test'

test.describe('plugin-theme-data', () => {
  test('theme data', async ({ page }) => {
    await page.goto('')

    const themeData = JSON.parse(
      (await page.locator('#theme-data').textContent()) ?? '{}',
    )

    await expect(themeData).toEqual({
      logo: 'https://v2.vuepress.vuejs.org/images/hero.png',
      navbar: [
        '/',
        {
          text: 'Dropdown',
          children: [
            {
              text: 'item',
              link: '/dropdown/',
            },
          ],
        },
      ],
      sidebar: {
        '/sidebar/heading/': 'heading',
        '/sidebar/config/': [
          {
            text: 'Sidebar',
            link: '',
            children: [
              {
                text: 'sidebar 1',
                link: '1.html',
              },
              {
                text: 'sidebar 2',
                link: '2.html',
              },
            ],
          },
        ],
        '/': [],
      },
      locales: {
        '/zh/': {
          navbar: ['/zh/'],
          sidebar: false,
        },
        '/': {
          selectLanguageName: 'English',
        },
      },
      colorMode: 'auto',
      colorModeSwitch: true,
      repo: null,
      selectLanguageText: 'Languages',
      selectLanguageAriaLabel: 'Select language',
      sidebarDepth: 2,
      editLink: true,
      editLinkText: 'Edit this page',
      lastUpdated: true,
      lastUpdatedText: 'Last Updated',
      contributors: true,
      contributorsText: 'Contributors',
      notFound: [
        "There's nothing here.",
        'How did we get here?',
        "That's a Four-Oh-Four.",
        "Looks like we've got some broken links.",
      ],
      backToHome: 'Take me home',
      openInNewWindow: 'open in new window',
      toggleColorMode: 'toggle color mode',
      toggleSidebar: 'toggle sidebar',
    })

    await page.locator('.vp-hero-action-button').first().click()

    await page.waitForURL('action1.html')

    await expect(page.locator('#is-theme-data-changed')).toHaveText('false')
  })

  test('theme locale data', async ({ page }) => {
    await page.goto('zh/')

    const themeLocaleData = JSON.parse(
      (await page.locator('#theme-locale-data').textContent()) ?? '{}',
    )

    expect(themeLocaleData).toHaveProperty('navbar', ['/zh/'])
    expect(themeLocaleData).not.toHaveProperty('locales')

    await page.locator('.theme-default-content a').click()

    await page.waitForURL('zh/test.html')

    await expect(page.locator('#is-theme-locale-data-changed')).toHaveText(
      'false',
    )

    await page.goto('zh/')
    await page.locator('.vp-hero-action-button').first().click()

    await page.waitForURL('action1.html')

    await expect(page.locator('#is-theme-locale-data-changed')).toHaveText(
      'true',
    )
  })
})
