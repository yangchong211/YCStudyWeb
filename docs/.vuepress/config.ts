import process from 'node:process'
import { footnote } from '@mdit/plugin-footnote'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { getRealPath } from '@vuepress/helper'
import { catalogPlugin } from '@vuepress/plugin-catalog'
import { commentPlugin } from '@vuepress/plugin-comment'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { feedPlugin } from '@vuepress/plugin-feed'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
import { redirectPlugin } from '@vuepress/plugin-redirect'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from '@vuepress/plugin-search'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { defineUserConfig } from 'vuepress'
import type { UserConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'
//导航栏 + 侧边栏
import { head } from './configs/index.js'
//主体
import theme from './theme.js'


const __dirname = getDirname(import.meta.url)

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  //部署站点的基础路径。
  //如果你想让你的网站部署到一个子路径下，你将需要设置它。它的值应当总是以斜杠开始，并以斜杠结束。举例来说，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"。
  //base 将会作为前缀自动地插入到以 / 开始的其他选项的链接中，所以你只需要指定一次。（head 中的属性除外）
  base: (process.env.BASE as `/${string}/` | '/') || '/',

  //在最终渲染出的 HTML 的 <head> 标签内加入的额外标签。
  head,

  //设置语言
  //站点的语言。它将会在最终渲染出的 HTML 中作为 <html> 标签的 lang 属性。它可以设置在不同语言的 locales 中。
  locales: {
    '/': {
      lang: 'zh-CN',
      //站点的标题。它将会作为所有页面标题的后缀，并且在默认主题的导航栏中显示。
      title: '杨充-程序员',
      //站点的描述。它将会在最终渲染出的 HTML 中作为 <meta name="description" /> 标签的 content 属性。
      //它会被每个页面的 Frontmatter 中的 description 字段覆盖。
      description: '这是我的第一个 VuePress 站点',
    },


    //设置中文 /zh/
    // '/': {
    //   lang: 'zh-CN',
    //   //站点的标题。它将会作为所有页面标题的后缀，并且在默认主题的导航栏中显示。
    //   title: '打工充',
    //   //站点的描述。它将会在最终渲染出的 HTML 中作为 <meta name="description" /> 标签的 content 属性。
    //   //它会被每个页面的 Frontmatter 中的 description 字段覆盖。
    //   description: '这是我的第一个 VuePress 站点',
    // },
  },

  //指定 vuepress build 命令的输出目录。
  //dest : '/.vuepress/dist',

  //打包
  //设置站点要使用的打包工具如果不设置该选项，将会使用默认的打包工具：
  //使用 vuepress 或 vuepress-vite 时，默认的打包工具是 Vite 。
  //使用 vuepress-webpack 时，默认的打包工具是 Webpack 。
  bundler: process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),

  //配置 markdown
  markdown: {
    importCode: {
      handleImportPath: (importPath) => {
        // handle @vuepress packages import path
        if (importPath.startsWith('@vuepress/')) {
          const packageName = importPath.match(/^(@vuepress\/[^/]*)/)![1]
          return importPath
            .replace(
              packageName,
              path.dirname(
                getRealPath(`${packageName}/package.json`, import.meta.url),
              ),
            )
            .replace('/src/', '/lib/')
            .replace(/hotKey\.ts$/, 'hotKey.d.ts')
        }
        return importPath
      },
    },
  },

  extendsMarkdown: (md) => {
    md.use(footnote)
  },

  //设置主题，设置站点要使用的主题。如果不设置该选项，将会使用默认主题
  theme,

  // use plugins
  plugins: [
    catalogPlugin(),
    commentPlugin({ provider: 'Giscus' }),
    docsearchPlugin(),
    feedPlugin({
      hostname: 'https://ecosystem.vuejs.press',
      atom: true,
      json: true,
      rss: true,
    }),
    markdownImagePlugin({
      figure: true,
      mark: true,
      size: true,
    }),
    markdownMathPlugin(),
    redirectPlugin({
      switchLocale: 'modal',
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    searchPlugin(),
    isProd
      ? shikiPlugin({
        langs: ['bash', 'diff', 'json', 'md', 'ts', 'vue'],
        theme: 'dark-plus',
        lineNumbers: 10,
        notationDiff: true,
        notationErrorLevel: true,
        notationFocus: true,
        notationHighlight: true,
        notationWordHighlight: true,
      })
      : [],
  ],
}) as UserConfig
