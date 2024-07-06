import comp from "/Users/yangchong/Downloads/ecosystem-main/e2e/docs/.vuepress/.temp/pages/zh/test.html.vue"
const data = JSON.parse("{\"path\":\"/zh/test.html\",\"title\":\"Test\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"Test\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://ecosystem-e2e-test.com/zh/test.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VuePress 生态系统 E2e\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Test\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Test\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Test\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/atom+xml\",\"href\":\"https://ecosystem-e2e-test.com/zh/atom.xml\",\"title\":\"VuePress 生态系统 E2e Atom Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/json\",\"href\":\"https://ecosystem-e2e-test.com/zh/feed.json\",\"title\":\"VuePress 生态系统 E2e JSON Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/rss+xml\",\"href\":\"https://ecosystem-e2e-test.com/zh/rss.xml\",\"title\":\"VuePress 生态系统 E2e RSS Feed\"}]]},\"headers\":[],\"git\":{},\"autoDesc\":true,\"filePathRelative\":\"zh/test.md\",\"excerpt\":\"\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
