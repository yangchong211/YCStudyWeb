import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Baz", defineAsyncComponent(() => import("/Users/yangchong/Downloads/ecosystem-main/plugins/tools/plugin-register-components/tests/__fixtures__/components/Baz.vue"))),
      app.component("FooBar", defineAsyncComponent(() => import("/Users/yangchong/Downloads/ecosystem-main/plugins/tools/plugin-register-components/tests/__fixtures__/components/FooBaz.ts")))
  },
}
