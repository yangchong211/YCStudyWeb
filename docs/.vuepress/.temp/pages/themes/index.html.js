import comp from "/Users/yc/github/YCBlogBook/docs/.vuepress/.temp/pages/themes/index.html.vue"
const data = JSON.parse("{\"path\":\"/themes/\",\"title\":\"Themes\",\"lang\":\"en-US\",\"frontmatter\":{\"description\":\"Themes\",\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://ecosystem.vuejs.press/zh/themes/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://ecosystem.vuejs.press/themes/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VuePress Ecosystem\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Themes\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Themes\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Themes\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"autoDesc\":true,\"filePathRelative\":\"themes/README.md\"}")
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
