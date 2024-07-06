import { h } from 'vue';
import { defineClientConfig } from 'vuepress/client';
import { Notice } from './components/index.js';
import './styles/vars.css';
export default defineClientConfig({
    rootComponents: [() => h(Notice, { config: __NOTICE_OPTIONS__ })],
});
