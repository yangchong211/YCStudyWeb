import { onMounted, watch } from 'vue';
import { defineClientConfig, useRouteLocale } from 'vuepress/client';
const entries = Object.entries;
const getElement = (selector) => selector === 'html'
    ? document.documentElement
    : selector === 'body'
        ? document.body
        : document.querySelector(selector);
export default defineClientConfig({
    setup() {
        const routeLocale = useRouteLocale();
        const toggleRTL = (routeLocale) => {
            if (__RTL_LOCALES__.includes(routeLocale)) {
                entries(__RTL_SELECTOR__).forEach(([selector, attrs = {}]) => {
                    const element = getElement(selector);
                    if (element)
                        entries(attrs).forEach(([attr, value]) => {
                            if (attr === 'class')
                                element.classList.add(value);
                            else
                                element.setAttribute(attr, value);
                        });
                });
                document.documentElement.style.setProperty('direction', 'rtl');
            }
            else {
                entries(__RTL_LOCALES__).forEach(([selector, attrs = {}]) => {
                    const element = getElement(selector);
                    if (element)
                        entries(attrs).forEach(([attr, value]) => {
                            if (attr === 'class')
                                element.classList.remove(value);
                            else
                                element.removeAttribute(attr);
                        });
                });
                document.documentElement.style.removeProperty('direction');
            }
        };
        onMounted(() => {
            watch(routeLocale, toggleRTL, { immediate: true });
        });
    },
});
