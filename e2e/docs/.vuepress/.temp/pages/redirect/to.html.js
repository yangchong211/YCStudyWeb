import comp from "/Users/yangchong/Downloads/ecosystem-main/e2e/docs/.vuepress/.temp/pages/redirect/to.html.vue"
const data = JSON.parse("{\"path\":\"/redirect/to.html\",\"title\":\"Redirect to\",\"lang\":\"en-US\",\"frontmatter\":{\"redirectTo\":\"/redirect/final.md\",\"description\":\"Redirect to\",\"head\":[[\"script\",{},\"{const anchor = window.location.hash.substring(1);location.href=`/redirect/final.html${anchor? `#${anchor}`: \\\"\\\"}`;}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://ecosystem-e2e-test.com/redirect/to.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VuePress Ecosystem E2E\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Redirect to\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Redirect to\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Redirect to\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/atom+xml\",\"href\":\"https://ecosystem-e2e-test.com/atom.xml\",\"title\":\"VuePress Ecosystem E2E Atom Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/json\",\"href\":\"https://ecosystem-e2e-test.com/feed.json\",\"title\":\"VuePress Ecosystem E2E JSON Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/rss+xml\",\"href\":\"https://ecosystem-e2e-test.com/rss.xml\",\"title\":\"VuePress Ecosystem E2E RSS Feed\"}]]},\"headers\":[],\"git\":{},\"autoDesc\":true,\"filePathRelative\":\"redirect/to.md\",\"excerpt\":\"\\n\"}")
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
