import { describe, expect, it } from 'vitest'
import { createBaseApp } from 'vuepress/core'
import { path } from 'vuepress/utils'
import { getPageText } from '../../src/node/page/text.js'
import type { PageTextOptions } from '../../src/node/page/text.js'
import { emptyTheme } from '../__fixtures__/theme/empty.js'

describe('getPageText', async () => {
  const app = createBaseApp({
    bundler: {} as any,
    source: path.resolve(__dirname, '../__fixtures__/src'),
    theme: emptyTheme,
  })

  await app.init()

  const getText = (options: PageTextOptions = {}) =>
    app.pages
      .filter(({ path }) => path !== '/404.html')
      .map((page) => ({
        path: page.path,
        text: getPageText(app, page, options),
      }))

  it('default', () => {
    getText().forEach(({ text, path }) => {
      expect(text.length).toBeGreaterThan(0)
      expect(text).toMatchSnapshot(path)

      if (path === '/markdown.html') {
        expect(text).not.toContain('console.log(foo(5))')
        expect(text).not.toContain('table text')
      }
    })
  })

  it('singleLine', () => {
    getText({ singleLine: true }).forEach(({ text, path }) => {
      expect(text.length).toBeGreaterThan(0)

      expect(text).not.toContain('\n')
      expect(text).toMatchSnapshot(path)
    })
  })

  it('removedTags', () => {
    getText({ removedTags: [] }).forEach(({ text, path }) => {
      expect(text.length).toBeGreaterThan(0)
      expect(text).toMatchSnapshot(path)

      if (path === '/markdown.html') {
        expect(text).toContain('Create a list')
        expect(text).toContain('Integer molestie lorem at massa')
        expect(text).toContain('console.log(foo(5))')
        expect(text).toContain('table text')
      }
    })

    getText({ removedTags: ['table', 'pre', 'ol', 'ul', 'dl'] }).forEach(
      ({ text, path }) => {
        expect(text.length).toBeGreaterThan(0)
        expect(text).toMatchSnapshot(path)

        if (path === '/markdown.html') {
          expect(text).not.toContain('Create a list')
          expect(text).not.toContain('Integer molestie lorem at massa')
          expect(text).not.toContain('console.log(foo(5))')
          expect(text).not.toContain('table text')
        }
      },
    )
  })
})
