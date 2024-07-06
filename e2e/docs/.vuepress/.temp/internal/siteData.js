export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"meta\",{\"name\":\"foo\",\"content\":\"foo\"}],[\"meta\",{\"name\":\"bar\",\"content\":\"bar\"}],[\"meta\",{\"name\":\"baz\",\"content\":\"baz\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/logo.png\",\"type\":\"image/png\",\"sizes\":\"600x600\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossorigin\":\"use-credentials\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#46bd87\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/logo.png\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"meta\",{\"name\":\"msapplication-TileImage\",\"content\":\"/logo.png\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#46bd87\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"VuePress Ecosystem E2E\",\"description\":\"VuePress Ecosystem E2E Test Site\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"VuePress 生态系统 E2e\",\"description\":\"VuePress 生态系统 E2E 测试站\"}}}")

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
