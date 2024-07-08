import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("NpmBadge", defineAsyncComponent(() => import("/Users/yc/github/YCBlogBook/docs/.vuepress/components/NpmBadge.vue")))
  },
}
