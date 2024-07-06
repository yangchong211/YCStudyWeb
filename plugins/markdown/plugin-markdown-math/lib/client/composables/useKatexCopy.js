import { onMounted } from 'vue';
export const useKatexCopy = () => {
    onMounted(() => import(
    /* webpackChunkName: "katex" */ 'katex/dist/contrib/copy-tex.min.js'));
};
