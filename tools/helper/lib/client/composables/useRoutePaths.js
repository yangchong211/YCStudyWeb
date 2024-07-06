import { computed } from 'vue';
import { useRoutes } from 'vuepress/client';
export const useRoutePaths = () => {
    const routes = useRoutes();
    return computed(() => Object.keys(routes.value));
};
