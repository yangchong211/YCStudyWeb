import comp from "/Users/yangchong/Downloads/ecosystem-main/e2e/docs/.vuepress/.temp/pages/feed/custom.html.vue"
const data = JSON.parse("{\"path\":\"/feed/custom.html\",\"title\":\"Custom feed page\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Custom feed page\",\"feed\":{\"title\":\"Custom feed title\",\"description\":\"Custom feed description\",\"content\":\"Custom feed content.\"},\"description\":\"Feed item of this page is customized.\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://ecosystem-e2e-test.com/feed/custom.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VuePress Ecosystem E2E\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Custom feed page\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Feed item of this page is customized.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Custom feed page\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/atom+xml\",\"href\":\"https://ecosystem-e2e-test.com/atom.xml\",\"title\":\"VuePress Ecosystem E2E Atom Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/json\",\"href\":\"https://ecosystem-e2e-test.com/feed.json\",\"title\":\"VuePress Ecosystem E2E JSON Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/rss+xml\",\"href\":\"https://ecosystem-e2e-test.com/rss.xml\",\"title\":\"VuePress Ecosystem E2E RSS Feed\"}]]},\"headers\":[],\"git\":{},\"autoDesc\":true,\"filePathRelative\":\"feed/custom.md\",\"excerpt\":\"<p>Feed item of this page is customized.</p>\\n\"}")
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
