import comp from "/Users/yc/github/YCBlogBook/docs/.vuepress/.temp/pages/plugins/blog/feed/index.html.vue"
const data = JSON.parse("{\"path\":\"/plugins/blog/feed/\",\"title\":\"feed\",\"lang\":\"en-US\",\"frontmatter\":{\"description\":\"feed\",\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://ecosystem.vuejs.press/zh/plugins/blog/feed/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://ecosystem.vuejs.press/plugins/blog/feed/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VuePress Ecosystem\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"feed\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"feed\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"feed\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Usage\",\"slug\":\"usage\",\"link\":\"#usage\",\"children\":[]}],\"autoDesc\":true,\"filePathRelative\":\"plugins/blog/feed/README.md\"}")
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
