import comp from "/Users/yc/github/YCBlogBook/docs/.vuepress/.temp/pages/zh/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/images/hero.png\",\"actions\":[{\"text\":\"主题\",\"link\":\"./themes/\",\"type\":\"primary\"},{\"text\":\"插件\",\"link\":\"./plugins/\",\"type\":\"primary\"}],\"footer\":\"MIT 协议 | 版权所有 © 2018-至今 VuePress 社区\",\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://ecosystem.vuejs.press/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://ecosystem.vuejs.press/zh/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VuePress 打工充\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"首页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"首页\\\"}\"]]},\"headers\":[],\"filePathRelative\":\"zh/README.md\"}")
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
