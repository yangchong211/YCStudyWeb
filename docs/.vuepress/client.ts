import { defineGiscusConfig } from '@vuepress/plugin-comment/client'
import { defineDocSearchConfig } from '@vuepress/plugin-docsearch/client'
import { defineClientConfig } from 'vuepress/client'
import CommentPage from './layouts/CommentPage.vue'

defineGiscusConfig({
  repo: 'vuepress/ecosystem',
  repoId: 'R_kgDOKPxScA',
  category: 'Announcements',
  categoryId: 'DIC_kwDOKPxScM4CbWy7',
})

defineDocSearchConfig({
  appId: 'N7UOPMVZ5B',
  apiKey: 'aa626dfa43a5e32cd519ba84735ad384',
  indexName: 'ecosystem-vuejs',
  locales: {
    '/zh/': {
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档',
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消',
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除',
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接',
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索提供者',
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈',
          },
        },
      },
    },
  },
})

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
export default defineClientConfig({
  layouts: {
    // We override the default layout to provide comment service
    CommentPage,
  },
})
