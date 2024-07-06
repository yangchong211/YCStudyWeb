import { defineClientConfig } from 'vuepress/client'
import ThemeData from './components/ThemeData.vue'
import Article from './layouts/Article.vue'
import Category from './layouts/Category.vue'
import Tag from './layouts/Tag.vue'
import Timeline from './layouts/Timeline.vue'

export default defineClientConfig({
  layouts: {
    Article,
    Category,
    Tag,
    Timeline,
  },
  rootComponents: [ThemeData],
})
