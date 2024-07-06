import comp from "/Users/yc/github/YCBlogBook/docs/.vuepress/.temp/pages/zh/plugins/search/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/plugins/search/\",\"title\":\"搜索插件\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"搜索插件\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://ecosystem.vuejs.press/zh/plugins/search/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VuePress 打工充\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"搜索插件\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"搜索插件\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"搜索插件\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"autoDesc\":true,\"filePathRelative\":\"zh/plugins/search/README.md\"}")
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
