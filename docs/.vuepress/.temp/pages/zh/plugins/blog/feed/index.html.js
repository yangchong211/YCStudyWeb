import comp from "/Users/yc/github/YCBlogBook/docs/.vuepress/.temp/pages/zh/plugins/blog/feed/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/plugins/blog/feed/\",\"title\":\"feed\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"feed\",\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://ecosystem.vuejs.press/plugins/blog/feed/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://ecosystem.vuejs.press/zh/plugins/blog/feed/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"打工充学习网站\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"feed\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"feed\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"feed\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]}],\"autoDesc\":true,\"filePathRelative\":\"zh/plugins/blog/feed/README.md\"}")
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
