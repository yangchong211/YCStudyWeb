import type { SidebarConfig } from '@vuepress/theme-default'
//侧边导航栏
export const sidebarZh: SidebarConfig = {


  '/zh/design/': [
    {
      text: '六大设计原则',
      link: 'principle/',
    },
    {
      text: '创建型设计模式',
      link: 'creational/',
    },
    {
      text: '结构型设计模式',
      link: 'behavioral/',
    },
    {
      text: '行为型设计模式',
      link: 'structural/',
    },
  ],
  '/zh/design/principle/': [
    '01.面向对象六大原则',
    '02.单一职责原则详解',
    '03.开闭原则详细介绍',
    '04.里式替换原则介绍',
    '05.接口隔离原则介绍',
    '06.依赖倒置原则介绍',
    '07.迪米特原则介绍',
    '08.代码保持简单原则',
    '09.DRY原则简单介绍',
  ],
  '/zh/design/creational/': [
    '01.创建型：单例设计模式思想',
    '02.创建型：工厂设计模式思想',
    '03.创建型：建造者设计模式',
    '04.创建型：原型设计模式',
  ],


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
    '01.面向对象六大原则',
    '02.单一职责原则详解',
    '03.开闭原则详细介绍',
    '04.里式替换原则介绍',
    '05.接口隔离原则介绍',
    '06.依赖倒置原则介绍',
    '07.迪米特原则介绍',
    '08.代码保持简单原则',
    '09.DRY原则简单介绍',
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
