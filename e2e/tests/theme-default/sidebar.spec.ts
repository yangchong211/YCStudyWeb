import { expect, test } from '@playwright/test'

test.describe('has heading sidebar', () => {
  test('frontmatter', async ({ page }) => {
    await page.goto('sidebar/frontmatter/heading.html')

    const sidebarItems = page.locator('a.vp-sidebar-item')

    await expect(sidebarItems.nth(0)).toContainText('Sidebar Heading 1')
    await expect(sidebarItems.nth(1)).toContainText('Sidebar Heading 2')
  })

  test('config', async ({ page }) => {
    await page.goto('sidebar/heading/1.html')

    const sidebarHeadings = page.locator('.vp-sidebar-heading')
    const pageTitle = page.locator('.theme-default-content h1')
    const sidebarItems = page.locator('.vp-sidebar-item.route-link')

    const pageTitleText = (await pageTitle.innerText()).replace('#', '')

    await expect(pageTitle).not.toBeEmpty()
    await expect(sidebarHeadings).toContainText(pageTitleText)

    const h2 = page.locator('.theme-default-content h2').first()
    const h2Text = (await h2.innerText()).replace('#', '')

    await expect(h2).not.toBeEmpty()
    await expect(sidebarItems.first()).toContainText(h2Text)
  })
})

test.describe('has configured sidebar', () => {
  test('theme config', async ({ page }) => {
    await page.goto('sidebar/config/1.html')

    const sidebarItems = page.locator('a.vp-sidebar-item')

    await expect(sidebarItems.nth(1)).toContainText('sidebar 1')
    await expect(sidebarItems.nth(4)).toContainText('sidebar 2')
  })

  test('frontmatter', async ({ page }) => {
    await page.goto('sidebar/frontmatter/config.html')

    const sidebarItems = page.locator('a.vp-sidebar-item')

    await expect(sidebarItems.nth(0)).toContainText('Home')
    await expect(sidebarItems.nth(1)).toContainText('主页')
  })
})

test('frontmatter disable', async ({ page }) => {
  await page.goto('sidebar/frontmatter/disable.html')

  const sidebarItems = page.locator('a.vp-sidebar-item')

  expect(await sidebarItems.count()).toBe(0)
})
