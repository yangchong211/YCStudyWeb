import comp from "/Users/yc/github/YCBlogBook/docs/.vuepress/.temp/pages/plugins/blog/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/plugins/blog/blog/\",\"title\":\"blog\",\"lang\":\"en-US\",\"frontmatter\":{\"description\":\"blog\",\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://ecosystem.vuejs.press/zh/plugins/blog/blog/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://ecosystem.vuejs.press/plugins/blog/blog/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VuePress Ecosystem\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"blog\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"blog\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"blog\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Usage\",\"slug\":\"usage\",\"link\":\"#usage\",\"children\":[]}],\"autoDesc\":true,\"filePathRelative\":\"plugins/blog/blog/README.md\"}")
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
