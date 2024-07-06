import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
  {
    text: '主题',
    prefix: '/zh/themes/',
    children: [
      {
        text: '默认主题',
        link: 'default/',
      },
      {
        text: 'Hope 主题',
        link: 'https://theme-hope.vuejs.press/zh/',
      },
      {
        text: 'Plume 主题',
        link: 'https://theme-plume.vuejs.press',
      },
      {
        text: 'Reco 主题',
        link: 'https://theme-reco.vuejs.press',
      },
    ],
  },
  {
    text: '插件',
    prefix: '/zh/plugins/',
    children: [
      {
        text: '常用功能',
        link: 'features/',
      },
      {
        text: 'Markdown',
        link: 'markdown/',
      },
      {
        text: '搜索',
        link: 'search/',
      },
      {
        text: '博客',
        link: 'blog/',
      },
      {
        text: 'PWA',
        link: 'pwa/',
      },
      {
        text: '统计分析',
        link: 'analytics/',
      },
      {
        text: '搜索引擎增强',
        link: 'seo/',
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
  },
  {
    text: '工具',
    prefix: '/zh/tools/',
    children: [
      {
        text: 'helper',
        link: 'helper/',
      },
    ],
  },
]
