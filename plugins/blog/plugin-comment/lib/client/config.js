import { defineClientConfig } from 'vuepress/client';
import CommentService from './components/CommentService.js';
import { injectCommentConfig } from './helpers/index.js';
import './styles/base.css';
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
export default defineClientConfig({
    enhance: ({ app }) => {
        injectCommentConfig(app);
        app.component('CommentService', CommentService);
    },
});
