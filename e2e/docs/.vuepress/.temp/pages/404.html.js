import comp from "/Users/yangchong/Downloads/ecosystem-main/e2e/docs/.vuepress/.temp/pages/404.html.vue"
const data = JSON.parse("{\"path\":\"/404.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"NotFound\",\"description\":\"404 Not Found\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://ecosystem-e2e-test.com/404.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VuePress Ecosystem E2E\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"404 Not Found\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"\\\",\\\"description\\\":\\\"404 Not Found\\\"}\"],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/atom+xml\",\"href\":\"https://ecosystem-e2e-test.com/atom.xml\",\"title\":\"VuePress Ecosystem E2E Atom Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/json\",\"href\":\"https://ecosystem-e2e-test.com/feed.json\",\"title\":\"VuePress Ecosystem E2E JSON Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/rss+xml\",\"href\":\"https://ecosystem-e2e-test.com/rss.xml\",\"title\":\"VuePress Ecosystem E2E RSS Feed\"}]]},\"headers\":[],\"git\":{},\"autoDesc\":true,\"filePathRelative\":null,\"excerpt\":\"<p>404 Not Found</p>\\n\"}")
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
