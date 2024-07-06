export const themeData = JSON.parse("{\"logo\":\"https://v2.vuepress.vuejs.org/images/hero.png\",\"navbar\":[\"/\",{\"text\":\"Dropdown\",\"children\":[{\"text\":\"item\",\"link\":\"/dropdown/\"}]}],\"sidebar\":{\"/sidebar/heading/\":\"heading\",\"/sidebar/config/\":[{\"text\":\"Sidebar\",\"link\":\"\",\"children\":[{\"text\":\"sidebar 1\",\"link\":\"1.html\"},{\"text\":\"sidebar 2\",\"link\":\"2.html\"}]}],\"/\":[]},\"locales\":{\"/zh/\":{\"navbar\":[\"/zh/\"],\"sidebar\":false},\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
