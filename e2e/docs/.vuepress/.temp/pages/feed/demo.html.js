import comp from "/Users/yangchong/Downloads/ecosystem-main/e2e/docs/.vuepress/.temp/pages/feed/demo.html.vue"
const data = JSON.parse("{\"path\":\"/feed/demo.html\",\"title\":\"Feed Demo Page\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Feed Demo Page\",\"author\":\"Mr.Hope\",\"date\":\"2021-01-01T00:00:00.000Z\",\"category\":[\"Demo\"],\"tag\":[\"Demo\"],\"description\":\"Here is article excerpt. Content Here is main content of article. A B C\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://ecosystem-e2e-test.com/feed/demo.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"VuePress Ecosystem E2E\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Feed Demo Page\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Here is article excerpt. Content Here is main content of article. A B C\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Hope\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-01-01T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Feed Demo Page\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2021-01-01T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Hope\\\"}]}\"],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/atom+xml\",\"href\":\"https://ecosystem-e2e-test.com/atom.xml\",\"title\":\"VuePress Ecosystem E2E Atom Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/json\",\"href\":\"https://ecosystem-e2e-test.com/feed.json\",\"title\":\"VuePress Ecosystem E2E JSON Feed\"}],[\"link\",{\"rel\":\"alternate\",\"type\":\"application/rss+xml\",\"href\":\"https://ecosystem-e2e-test.com/rss.xml\",\"title\":\"VuePress Ecosystem E2E RSS Feed\"}]]},\"headers\":[{\"level\":2,\"title\":\"Content\",\"slug\":\"content\",\"link\":\"#content\",\"children\":[]}],\"git\":{},\"autoDesc\":true,\"filePathRelative\":\"feed/demo.md\",\"excerpt\":\"<p>Here is <strong>article excerpt</strong>.</p>\\n<div class=\\\"language-javascript\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"line\\\"><span class=\\\"token keyword\\\">const</span> a <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">1</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
