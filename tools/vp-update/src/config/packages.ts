export const VUE_RELATED_PACKAGES = [
  '@vue/compiler-core',
  '@vue/compiler-dom',
  '@vue/compiler-sfc',
  '@vue/compiler-ssr',
  '@vue/devtools-api',
  '@vue/reactivity',
  '@vue/reactivity-transform',
  '@vue/runtime-core',
  '@vue/runtime-dom',
  '@vue/server-renderer',
  '@vue/shared',
  'vue',
  'vue-router',
]

export const OFFICIAL_PACKAGES = [
  '@vuepress/bundler-vite',
  '@vuepress/bundler-webpack',
  'vuepress',
]

export const OFFICIAL_PLUGINS_AND_THEMES_REGEXP =
  /^@vuepress\/(?:plugin|theme)-/

export const REMOVED_PACKAGES = ['vuepress-webpack', 'vuepress-vite']

export const DEPRECATED_PACKAGES = [
  '@vuepress/cli',
  '@vuepress/client',
  '@vuepress/core',
  '@vuepress/markdown',
  '@vuepress/shared',
  '@vuepress/utils',
]

export const THIRD_PARTY_PLUGINS = /^(@.*\/)?vuepress-plugin-/

export const THIRD_PARTY_THEMES = /^(@.*\/)?vuepress-theme-/
