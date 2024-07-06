export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"sizes\":\"16x16\",\"href\":\"/images/icons/favicon-16x16.png\"}],[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"sizes\":\"32x32\",\"href\":\"/images/icons/favicon-32x32.png\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\"}],[\"meta\",{\"name\":\"application-name\",\"content\":\"VuePress\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-title\",\"content\":\"VuePress\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/icons/apple-touch-icon.png\"}],[\"link\",{\"rel\":\"mask-icon\",\"href\":\"/images/icons/safari-pinned-tab.svg\",\"color\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#3eaf7c\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"VuePress Ecosystem\",\"description\":\"VuePress official themes and plugins\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"打工充学习网站\",\"description\":\"VuePress 官方主题和插件\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
