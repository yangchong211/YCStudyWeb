import { useStorage } from '@vueuse/core';
import { computed, defineComponent, h, onBeforeUpdate, onMounted, ref, watch, } from 'vue';
import '../../styles/code-group.scss';
export const CodeGroup = defineComponent({
    name: 'CodeGroup',
    slots: Object,
    setup(_, { slots }) {
        // refs of the tab buttons
        const tabRefs = ref([]);
        if (__VUEPRESS_DEV__) {
            // in dev mode, we need to clear the tabs ref to avoid HMR issues
            // after removing a code-group-item
            onBeforeUpdate(() => {
                tabRefs.value = [];
            });
        }
        // index of current active item
        const activeIndex = ref(-1);
        const codeGroupStorage = useStorage('vuepress-code-group', {});
        const codeGroupKey = computed(() => tabRefs.value.map((tab) => tab.innerText).join(','));
        onMounted(() => {
            watch(() => codeGroupStorage.value[codeGroupKey.value], (val = -1) => {
                if (activeIndex.value !== val) {
                    activeIndex.value = val;
                }
            }, { immediate: true });
            watch(activeIndex, (val) => {
                if (codeGroupStorage.value[codeGroupKey.value] !== val) {
                    codeGroupStorage.value[codeGroupKey.value] = val;
                }
            });
        });
        // activate next tab
        const activateNext = (i = activeIndex.value) => {
            if (i < tabRefs.value.length - 1) {
                activeIndex.value = i + 1;
            }
            else {
                activeIndex.value = 0;
            }
            tabRefs.value[activeIndex.value].focus();
        };
        // activate previous tab
        const activatePrev = (i = activeIndex.value) => {
            if (i > 0) {
                activeIndex.value = i - 1;
            }
            else {
                activeIndex.value = tabRefs.value.length - 1;
            }
            tabRefs.value[activeIndex.value].focus();
        };
        // handle keyboard event
        const keyboardHandler = (event, i) => {
            if (event.key === ' ' || event.key === 'Enter') {
                event.preventDefault();
                activeIndex.value = i;
            }
            else if (event.key === 'ArrowRight') {
                event.preventDefault();
                activateNext(i);
            }
            else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                activatePrev(i);
            }
        };
        return () => {
            // get children code-group-item from default slots
            const items = (slots.default?.() || [])
                .filter((vnode) => vnode.type.name === 'CodeGroupItem')
                .map((vnode) => {
                if (vnode.props === null) {
                    vnode.props = {};
                }
                return vnode;
            });
            // do not render anything if there is no code-group-item
            if (items.length === 0) {
                return null;
            }
            // if activeIndex is invalid
            if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
                // find the index of the code-group-item with `active` props
                activeIndex.value = items.findIndex((vnode) => vnode.props.active === '' || vnode.props.active === true);
                // if there is no `active` props on code-group-item, set the first item active
                if (activeIndex.value === -1) {
                    activeIndex.value = 0;
                }
            }
            // if activeIndex is valid
            else {
                // set the active item
                items.forEach((vnode, i) => {
                    vnode.props.active = i === activeIndex.value;
                });
            }
            return h('div', { class: 'code-group' }, [
                h('div', { class: 'code-group-nav', role: 'tablist' }, items.map((vnode, i) => {
                    const isActive = i === activeIndex.value;
                    return h('button', {
                        ref: (element) => {
                            if (element) {
                                tabRefs.value[i] = element;
                            }
                        },
                        class: {
                            'code-group-nav-tab': true,
                            'active': isActive,
                        },
                        role: 'tab',
                        ariaSelected: isActive,
                        onClick: () => (activeIndex.value = i),
                        onKeydown: (e) => keyboardHandler(e, i),
                    }, vnode.props.title);
                })),
                items,
            ]);
        };
    },
});
