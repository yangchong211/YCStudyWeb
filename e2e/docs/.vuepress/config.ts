import process from 'node:process'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { blogPlugin } from '@vuepress/plugin-blog'
import { catalogPlugin } from '@vuepress/plugin-catalog'
import { copyrightPlugin } from '@vuepress/plugin-copyright'
import { feedPlugin } from '@vuepress/plugin-feed'
import { noticePlugin } from '@vuepress/plugin-notice'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { redirectPlugin } from '@vuepress/plugin-redirect'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { watermarkPlugin } from '@vuepress/plugin-watermark'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import type { UserConfig } from 'vuepress/cli'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

const E2E_BASE = (process.env.E2E_BASE ?? '/') as '/' | `/${string}/`
const E2E_BUNDLER = process.env.E2E_BUNDLER ?? 'vite'

export default defineUserConfig({
  base: E2E_BASE,

  dest: path.join(__dirname, 'dist', E2E_BASE),

  port: 9080,

  head: [
    ['meta', { name: 'foo', content: 'foo' }],
    ['meta', { name: 'bar', content: 'bar' }],
    ['meta', { name: 'baz', content: 'baz' }],
  ],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress Ecosystem E2E',
      description: 'VuePress Ecosystem E2E Test Site',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress 生态系统 E2e',
      description: 'VuePress 生态系统 E2E 测试站',
    },
  },

  bundler: E2E_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),

  theme: defaultTheme({
    hostname: 'https://ecosystem-e2e-test.com',
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
            { text: 'sidebar 1', link: '1.html' },
            { text: 'sidebar 2', link: '2.html' },
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
    },

    themePlugins: {
      sitemap: {
        devServer: true,
        devHostname: 'https://ecosystem-e2e-test.com',
        excludePaths: ['/sitemap/config-exclude.html', '/404.html'],
      },
    },
  }),

  shouldPrefetch: false,

  plugins: [
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || '',
      }),

      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== 'string',

      category: [
        {
          key: 'category',
          getter: (page): string[] =>
            (page.frontmatter.category as string[]) || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: (): Record<string, unknown> => ({
            title: 'Categories',
            sidebar: false,
          }),
          itemFrontmatter: (name): Record<string, unknown> => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: 'tag',
          getter: (page): string[] => (page.frontmatter.tag as string[]) || [],
          layout: 'Tag',
          itemLayout: 'Tag',
          frontmatter: (): Record<string, unknown> => ({
            title: 'Tags',
            sidebar: false,
          }),
          itemFrontmatter: (name): Record<string, unknown> => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: 'article',
          // Remove archive articles
          filter: (page): boolean => !page.frontmatter.archive,
          layout: 'Article',
          frontmatter: (): Record<string, unknown> => ({
            title: 'Articles',
            sidebar: false,
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB): number => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return (
                (pageB.frontmatter.sticky as number) -
                (pageA.frontmatter.sticky as number)
              )

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'timeline',
          // Only article with date should be added to timeline
          filter: (page): boolean => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB): number =>
            new Date(pageB.frontmatter.date as Date).getTime() -
            new Date(pageA.frontmatter.date as Date).getTime(),
          layout: 'Timeline',
          frontmatter: (): Record<string, unknown> => ({
            title: 'Timeline',
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
    catalogPlugin(),
    copyrightPlugin(),
    feedPlugin({
      hostname: 'https://ecosystem-e2e-test.com',
      devServer: true,
      devHostname: 'https://example.com',
      atom: true,
      json: true,
      rss: true,
    }),
    noticePlugin({
      config: [
        {
          path: '/notice/',
          title: 'Notice Title',
          content: 'Notice content',
          actions: [
            {
              text: 'Primary Action',
              link: 'https://example.com/',
              type: 'primary',
            },
            { text: 'Default Action' },
          ],
        },
        {
          match: /^\/notice\/fullscreen\.html$/,
          title: 'Notice Title',
          content: 'Notice fullscreen content',
          actions: [
            {
              text: 'Primary Action',
              link: 'https://example.com/',
              type: 'primary',
            },
            { text: 'Default Action' },
          ],
          fullscreen: true,
        },
      ],
    }),
    pwaPlugin({
      manifest: {
        icons: [
          {
            src: '/logo.png',
            sizes: '600x600',
            type: 'image/png',
          },
        ],
      },
    }),
    redirectPlugin({
      config: {
        '/redirect/config.html': '/redirect/final.html',
        '/redirect/config/': '/redirect/final.html',
      },
    }),
    registerComponentsPlugin({
      components: {
        GlobalComponent4: path.resolve(
          __dirname,
          './components/GlobalComponent4.vue',
        ),
        GlobalComponent5: path.resolve(
          __dirname,
          './components/GlobalComponent5.ts',
        ),
        GlobalComponent6: path.resolve(
          __dirname,
          './components/GlobalComponent6.js',
        ),
      },
      componentsDir: path.resolve(__dirname, 'global-components/'),
      componentsPatterns: ['**/*.vue', '**/*.ts', '**/*.js'],
    }),
    watermarkPlugin({
      enabled: (page) => page.path.startsWith('/watermark/'),

      watermarkOptions: {
        content: 'VuePress Watermark',
        width: 200,
        height: 200,
      },
    }),
  ],
}) as UserConfig
