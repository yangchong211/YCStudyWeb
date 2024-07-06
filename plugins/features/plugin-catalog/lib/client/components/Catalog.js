import { endsWith, ensureEndingSlash, ensureLeadingSlash, entries, isNumber, isPlainObject, isString, keys, startsWith, useLocaleConfig, } from '@vuepress/helper/client';
import { computed, defineComponent, h, shallowRef } from 'vue';
import { RouteLink, usePageData, useRoutes, useSiteData } from 'vuepress/client';
import { useCatalogInfoGetter } from '../helpers/index.js';
import '../styles/catalog.css';
export default defineComponent({
    name: 'Catalog',
    props: {
        /**
         * Catalog Base
         *
         * 目录的基础路径
         *
         * @default current route base
         */
        base: {
            type: String,
            default: '',
        },
        /**
         * Max level of catalog
         *
         * @description only 1,2,3 are supported
         *
         * Catalog 的最大层级
         *
         * @description 目前仅支持 1,2,3
         *
         * @default 3
         */
        level: {
            type: Number,
            default: 3,
        },
        /**
         * Whether show index for catalog
         *
         * 目录是否显示索引
         */
        index: Boolean,
        /**
         * Whether hide `Category` title
         *
         * 是否隐藏 `目录` 标题
         *
         * @default false
         */
        hideHeading: Boolean,
    },
    setup(props) {
        const catalogInfoGetter = useCatalogInfoGetter();
        const locale = useLocaleConfig(__CATALOG_LOCALES__);
        const page = usePageData();
        const routes = useRoutes();
        const siteData = useSiteData();
        const getCatalogData = () => entries(routes.value)
            .map(([path, { meta }]) => {
            const info = catalogInfoGetter(meta);
            if (!info)
                return null;
            const level = path.split('/').length;
            return {
                level: endsWith(path, '/') ? level - 2 : level - 1,
                base: path.replace(/\/[^/]+\/?$/, '/'),
                path,
                ...info,
            };
        })
            .filter((item) => isPlainObject(item) && isString(item.title));
        const catalogInfo = shallowRef(getCatalogData());
        const catalogData = computed(() => {
            const base = props.base
                ? ensureLeadingSlash(ensureEndingSlash(props.base))
                : page.value.path.replace(/\/[^/]+$/, '/');
            const baseDepth = base.split('/').length - 2;
            const result = [];
            catalogInfo.value
                .filter(({ level, path }) => {
                // filter those under current base
                if (!startsWith(path, base) || path === base)
                    return false;
                if (base === '/') {
                    const otherLocales = keys(siteData.value.locales).filter((item) => item !== '/');
                    // exclude 404 page and other locales
                    if (path === '/404.html' ||
                        otherLocales.some((localePath) => startsWith(path, localePath)))
                        return false;
                }
                return (
                // level is less than or equal to max level
                level - baseDepth <= props.level);
            })
                .sort(({ title: titleA, level: levelA, order: orderA }, { title: titleB, level: levelB, order: orderB }) => {
                const level = levelA - levelB;
                if (level)
                    return level;
                // infoA order is absent
                if (!isNumber(orderA)) {
                    // infoB order is absent
                    if (!isNumber(orderB))
                        // compare title
                        return titleA.localeCompare(titleB);
                    // infoB order is present
                    return orderB;
                }
                // infoB order is absent
                if (!isNumber(orderB))
                    return orderA;
                // now we are sure both order exist
                // infoA order is positive
                if (orderA > 0) {
                    if (orderB > 0)
                        return orderA - orderB;
                    return -1;
                }
                // both order are negative
                if (orderB < 0)
                    return orderA - orderB;
                return 1;
            })
                .forEach((info) => {
                const { base, level } = info;
                switch (level - baseDepth) {
                    case 1: {
                        result.push(info);
                        break;
                    }
                    case 2: {
                        const parent = result.find((item) => item.path === base);
                        if (parent)
                            (parent.children ??= []).push(info);
                        break;
                    }
                    default: {
                        const grandParent = result.find((item) => item.path === base.replace(/\/[^/]+\/$/, '/'));
                        if (grandParent) {
                            const parent = grandParent.children?.find((item) => item.path === base);
                            if (parent)
                                (parent.children ??= []).push(info);
                        }
                    }
                }
            });
            return result;
        });
        return () => {
            const isDeep = catalogData.value.some((item) => item.children);
            return h('div', { class: ['vp-catalog-wrapper', { index: props.index }] }, [
                props.hideHeading
                    ? null
                    : h('h2', { class: 'vp-catalog-main-title' }, locale.value.title),
                catalogData.value.length
                    ? h(props.index ? 'ol' : 'ul', { class: ['vp-catalogs', { deep: isDeep }] }, catalogData.value.map(({ children = [], title, path, content }) => {
                        const childLink = h(RouteLink, { class: 'vp-catalog-title', to: path }, () => (content ? h(content) : title));
                        return h('li', { class: 'vp-catalog' }, isDeep
                            ? [
                                h('h3', {
                                    id: title,
                                    class: [
                                        'vp-catalog-child-title',
                                        { 'has-children': children.length },
                                    ],
                                }, [
                                    h('a', {
                                        'href': `#${title}`,
                                        'class': 'vp-catalog-header-anchor',
                                        'aria-hidden': true,
                                    }, '#'),
                                    childLink,
                                ]),
                                children.length
                                    ? h(props.index ? 'ol' : 'ul', { class: 'vp-child-catalogs' }, children.map(({ children = [], content, path, title }) => h('li', { class: 'vp-child-catalog' }, [
                                        h('div', {
                                            class: [
                                                'vp-catalog-sub-title',
                                                {
                                                    'has-children': children.length,
                                                },
                                            ],
                                        }, [
                                            h('a', {
                                                href: `#${title}`,
                                                class: 'vp-catalog-header-anchor',
                                            }, '#'),
                                            h(RouteLink, {
                                                class: 'vp-catalog-title',
                                                to: path,
                                            }, () => content ? h(content) : title),
                                        ]),
                                        children.length
                                            ? h(props.index ? 'ol' : 'div', {
                                                class: props.index
                                                    ? 'vp-sub-catalogs'
                                                    : 'vp-sub-catalogs-wrapper',
                                            }, children.map(({ content, path, title }) => props.index
                                                ? h('li', {
                                                    class: 'vp-sub-catalog',
                                                }, h(RouteLink, { to: path }, () => content
                                                    ? h(content)
                                                    : title))
                                                : h(RouteLink, {
                                                    class: 'vp-sub-catalog-link',
                                                    to: path,
                                                }, () => content
                                                    ? h(content)
                                                    : title)))
                                            : null,
                                    ])))
                                    : null,
                            ]
                            : h('div', { class: 'vp-catalog-child-title' }, childLink));
                    }))
                    : h('p', { class: 'vp-empty-catalog' }, locale.value.empty),
            ]);
        };
    },
});
