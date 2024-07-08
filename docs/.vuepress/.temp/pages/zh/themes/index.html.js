import comp from "/Users/yc/github/YCBlogBook/docs/.vuepress/.temp/pages/zh/themes/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/themes/\",\"title\":\"主题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"主题\",\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://ecosystem.vuejs.press/themes/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://ecosystem.vuejs.press/zh/themes/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"打工充学习网站\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主题\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"主题\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"主题\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"autoDesc\":true,\"filePathRelative\":\"zh/themes/README.md\"}")
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
