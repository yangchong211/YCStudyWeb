import type { PackageManager } from '../utils/index.js'
import type { CreateLocaleOptions } from './typings.js'

export const zh: CreateLocaleOptions = {
  flow: {
    getVersion: '获取依赖的最新版本...',
    createPackage: '生成 package.json...',
    generateTemplate: '生成模板...',
    install: '安装依赖...',
    devServer:
      "启动开发服务器...\n启动成功后，请在浏览器输入给出的开发服务器地址(默认为 'localhost:8080')",
  },

  question: {
    packageManager: '选择包管理器',
    i18n: '项目需要用到多语言么?',
    workflow: '是否需要一个自动部署文档到 GitHub Pages 的工作流？',
    bundler: '你想要使用哪个打包器？',
    preset: '你想要创建什么类型的项目？',
    devServer: '是否想要现在启动 Demo 查看?',
    name: '设置应用名称',
    version: '设置应用版本号',
    description: '设置应用描述',
    license: '设置协议',
  },

  hint: {
    install:
      '这可能需要数分钟，请耐心等待.\n我们无法正确输出子进程的进度条，所以进程可能会看似未响应',
    finish: '模板已成功生成!',
    devServer: (packageManager: PackageManager): string =>
      `提示: 请使用 "${packageManager} run docs:dev" 命令启动开发服务器`,
  },

  error: {
    name: '应用名称应只包含小写字母、数字和连接线 (-)',
    version: "此版本无效，版本号应为 'x.x.x'",
    bundler: '打包器 (--bundler) 仅支持 vite 或 webpack',
    preset: '预设 (--preset) 仅支持 doc 或 blog',
    theme: '当前主题暂不支持，将使用 @vuepress/theme-default 代替',
    dirMissing: (packageManager: PackageManager): string =>
      `你应该指定一个项目文件夹名称，例如 "my-blog", "my-docs"。\n例如: "${packageManager} init vuepress my-docs"`,
    dirNotEmpty: (dir: string) =>
      `目标文件夹 "${dir}" 不为空，请选择一个空文件夹或者手动删除文件夹中的文件`,
  },
}
