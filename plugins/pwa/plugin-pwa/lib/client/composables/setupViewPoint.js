import { onMounted } from 'vue';
export const setupViewPoint = () => {
    onMounted(() => {
        const isStandAlone = window.matchMedia('(display-mode: standalone)').matches;
        if (isStandAlone) {
            const head = document.head.querySelector('meta[name="viewport"]');
            if (head) {
                head.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
                return;
            }
            const viewportMeta = document.createElement('meta');
            viewportMeta.name = 'viewport';
            viewportMeta.content =
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
            document.head.appendChild(viewportMeta);
        }
    });
};
