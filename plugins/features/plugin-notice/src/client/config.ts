import { h } from 'vue'
import { defineClientConfig } from 'vuepress/client'
import type { NoticeAttrOptions } from '../shared/index.js'
import { Notice } from './components/index.js'

import './styles/vars.css'

declare const __NOTICE_OPTIONS__: NoticeAttrOptions[]

export default defineClientConfig({
  rootComponents: [() => h(Notice, { config: __NOTICE_OPTIONS__ })],
})
