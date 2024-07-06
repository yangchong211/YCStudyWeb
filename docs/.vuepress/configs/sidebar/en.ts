import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/plugins/': [
    {
      text: 'Common Features',
      link: 'features/',
    },
    {
      text: 'Markdown',
      link: 'markdown/',
    },
    {
      text: 'Content Search',
      link: 'search/',
    },
    {
      text: 'Blogging',
      link: 'blog/',
    },

    {
      text: 'Analytics',
      link: 'analytics/',
    },
    {
      text: 'SEO',
      link: 'seo/',
    },
    {
      text: 'PWA',
      link: 'pwa/',
    },
    {
      text: 'Theme Development',
      link: 'development/',
    },
    {
      text: 'Tools',
      link: 'tools/',
    },
  ],

  '/plugins/analytics/': [
    'baidu-analytics',
    'google-analytics',
    'umami-analytics',
  ],

  '/plugins/blog/': [
    {
      text: 'Blog',
      prefix: 'blog/',
      link: 'blog/',
      children: ['guide', 'config'],
    },
    {
      text: 'Comment',
      prefix: 'comment/',
      link: 'comment/',
      children: ['guide', 'giscus/', 'waline/', 'artalk/', 'twikoo/'],
    },
    {
      text: 'Feed',
      prefix: 'feed/',
      link: 'feed/',
      children: ['guide', 'config', 'frontmatter', 'channel', 'getter'],
    },
  ],

  '/plugins/development/': [
    'active-header-links',
    'git',
    'palette',
    'reading-time',
    'rtl',
    {
      text: 'Sass Palette',
      prefix: 'sass-palette/',
      link: 'sass-palette/',
      children: ['guide', 'config'],
    },
    'theme-data',
    'toc',
  ],

  '/plugins/features/': [
    'back-to-top',
    'catalog',
    'copy-code',
    'copyright',
    'medium-zoom',
    'notice',
    'nprogress',
    'photo-swipe',
    'watermark',
  ],

  '/plugins/markdown/': [
    'append-date',
    'markdown-container',
    'markdown-image',
    'markdown-math',
    'links-check',
    'prismjs',
    'shiki',
  ],

  '/plugins/pwa/': [
    {
      text: 'PWA',
      prefix: 'pwa/',
      link: 'pwa/',
      children: ['guide', 'config'],
    },
    '/plugins/pwa/remove-pwa',
  ],

  '/plugins/tools/': ['google-tag-manager', 'redirect', 'register-components'],

  '/plugins/search/': ['docsearch', 'search'],

  '/plugins/seo/': [
    {
      text: 'SEO',
      prefix: 'seo/',
      link: 'seo/',
      children: ['guide', 'config'],
    },
    {
      text: 'Sitemap',
      prefix: 'sitemap/',
      link: 'sitemap/',
      children: ['guide', 'config', 'frontmatter'],
    },
  ],

  '/themes/': [
    {
      text: 'Default Theme',
      prefix: 'default/',
      link: 'default/',
      children: [
        'config',
        'plugin',
        'locale',
        'frontmatter',
        'components',
        'markdown',
        'styles',
        'extending',
      ],
    },
  ],

  '/tools/': [
    {
      text: '@vuepress/helper',
      prefix: 'helper/',
      link: 'helper/',
      children: ['node/bundler', 'node/page', 'client', 'shared', 'style'],
    },
  ],
}
