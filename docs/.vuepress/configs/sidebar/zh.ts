import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/plugins/': [
    {
      text: '六大设计原则',
      link: 'features/',
    },
    {
      text: '创建型设计模式',
      link: 'markdown/',
    },
    {
      text: '结构型设计模式',
      link: 'search/',
    },
    {
      text: '行为型设计模式',
      link: 'blog/',
    },

    {
      text: '设计模式拓展',
      link: 'analytics/',
    },
    {
      text: '搜索引擎优化',
      link: 'seo/',
    },
    {
      text: '渐进式应用',
      link: 'pwa/',
    },
    {
      text: '主题开发',
      link: 'development/',
    },
    {
      text: '工具',
      link: 'tools/',
    },
  ],

  '/zh/plugins/analytics/': [
    'baidu-analytics',
    'google-analytics',
    'umami-analytics',
  ],

  '/zh/plugins/blog/': [
    {
      text: '博客',
      prefix: 'blog/',
      link: 'blog/',
      children: ['guide', 'config'],
    },
    {
      text: '评论',
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

  '/zh/plugins/development/': [
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

  '/zh/plugins/features/': [
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

  '/zh/plugins/markdown/': [
    'append-date',
    'markdown-container',
    'markdown-image',
    'markdown-math',
    'links-check',
    'prismjs',
    'shiki',
  ],

  '/zh/plugins/pwa/': [
    {
      text: 'PWA',
      prefix: 'pwa/',
      link: 'pwa/',
      children: ['guide', 'config'],
    },
    '/plugins/pwa/remove-pwa',
  ],

  '/zh/plugins/tools/': [
    'google-tag-manager',
    'redirect',
    'register-components',
  ],

  '/zh/plugins/search/': ['docsearch', 'search'],

  '/zh/plugins/seo/': [
    {
      text: '搜索引擎增强',
      prefix: 'seo/',
      link: 'seo/',
      children: ['guide', 'config'],
    },
    {
      text: '站点地图',
      prefix: 'sitemap/',
      link: 'sitemap/',
      children: ['guide', 'config', 'frontmatter'],
    },
  ],

  '/zh/themes/': [
    {
      text: '默认主题',
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

  '/zh/tools/': [
    {
      text: '@vuepress/helper',
      prefix: 'helper/',
      link: 'helper/',
      children: ['node/bundler', 'node/page', 'client', 'shared', 'style'],
    },
  ],
}
