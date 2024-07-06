import { computed } from 'vue';
import { usePageData } from 'vuepress/client';
export const useReadingTimeData = () => {
    const page = usePageData();
    return computed(() => page.value.readingTime ?? null);
};
