import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("GlobalComponent1", defineAsyncComponent(() => import("/Users/yangchong/Downloads/ecosystem-main/e2e/docs/.vuepress/global-components/GlobalComponent1.vue"))),
      app.component("GlobalComponent2", defineAsyncComponent(() => import("/Users/yangchong/Downloads/ecosystem-main/e2e/docs/.vuepress/global-components/GlobalComponent2.ts"))),
      app.component("GlobalComponent3", defineAsyncComponent(() => import("/Users/yangchong/Downloads/ecosystem-main/e2e/docs/.vuepress/global-components/GlobalComponent3.js"))),
      app.component("GlobalComponent4", defineAsyncComponent(() => import("/Users/yangchong/Downloads/ecosystem-main/e2e/docs/.vuepress/components/GlobalComponent4.vue"))),
      app.component("GlobalComponent5", defineAsyncComponent(() => import("/Users/yangchong/Downloads/ecosystem-main/e2e/docs/.vuepress/components/GlobalComponent5.ts"))),
      app.component("GlobalComponent6", defineAsyncComponent(() => import("/Users/yangchong/Downloads/ecosystem-main/e2e/docs/.vuepress/components/GlobalComponent6.js")))
  },
}
