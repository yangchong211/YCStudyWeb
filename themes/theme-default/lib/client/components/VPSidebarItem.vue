<script setup lang="ts">
import VPDropdownTransition from '@theme/VPDropdownTransition.vue'
import { useToggle } from '@vueuse/core'
import { computed, nextTick, onBeforeUnmount, toRefs } from 'vue'
import { AutoLink, useRoute, useRouter } from 'vuepress/client'
import type { SidebarItem } from '../typings.js'
import { isActiveLinkItem } from '../utils/index.js'

const props = withDefaults(
  defineProps<{
    item: SidebarItem
    depth?: number
  }>(),
  { depth: 0 },
)

const { item, depth } = toRefs(props)
const route = useRoute()
const router = useRouter()

const collapsible = computed(
  () => 'collapsible' in item.value && item.value.collapsible,
)
const isActive = computed(() => isActiveLinkItem(item.value, route))
const itemClass = computed(() => ({
  'vp-sidebar-item': true,
  'vp-sidebar-heading': depth.value === 0,
  'active': isActive.value,
  'collapsible': collapsible.value,
}))

const isOpenDefault = computed(() =>
  collapsible.value ? isActive.value : true,
)
const [isOpen, toggleIsOpen] = useToggle(isOpenDefault.value)
const onClick = (e: Event): void => {
  if (collapsible.value) {
    e.preventDefault()
    // toggle open status on click
    toggleIsOpen()
  }
}

// reset open status after navigation
const unregisterRouterHook = router.afterEach((to) => {
  nextTick(() => {
    isOpen.value = isOpenDefault.value
  })
})
onBeforeUnmount(() => {
  unregisterRouterHook()
})
</script>

<template>
  <li>
    <AutoLink v-if="item.link" :class="itemClass" :config="item" />
    <p
      v-else
      tabindex="0"
      :class="itemClass"
      @click="onClick"
      @keydown.enter="onClick"
    >
      {{ item.text }}
      <span
        v-if="collapsible"
        class="arrow"
        :class="isOpen ? 'down' : 'right'"
      />
    </p>

    <VPDropdownTransition v-if="'children' in item && item.children.length">
      <ul v-show="isOpen" class="vp-sidebar-children">
        <VPSidebarItem
          v-for="child in item.children"
          :key="`${depth}${child.text}${child.link}`"
          :item="child"
          :depth="depth + 1"
        />
      </ul>
    </VPDropdownTransition>
  </li>
</template>

<style lang="scss">
@use '../styles/mixins';
@import '../styles/variables';

.vp-sidebar-item {
  border-left: 0.25rem solid transparent;
  color: var(--c-text);
  cursor: default;

  &:focus-visible {
    outline-width: 1px;
    outline-offset: -1px;
  }

  &.vp-sidebar-heading {
    box-sizing: border-box;

    width: 100%;
    margin: 0;
    padding: 0.35rem 1.5rem 0.35rem 1.25rem;

    font-weight: bold;
    font-size: 1.1em;

    transition: color 0.15s ease;

    + .vp-sidebar-children {
      @include mixins.dropdown-wrapper;

      margin-bottom: 0.75rem;
    }
  }

  &.collapsible {
    cursor: pointer;
  }

  &:not(.vp-sidebar-heading) {
    display: inline-block;

    box-sizing: border-box;

    width: 100%;
    margin: 0;
    padding: 0.35rem 1rem 0.35rem 2rem;

    font-weight: 400;
    font-size: 1em;
    line-height: 1.4;

    + .vp-sidebar-children {
      padding-left: 1rem;
      font-size: 0.95em;
    }

    .vp-sidebar-children .vp-sidebar-children & {
      padding: 0.25rem 1rem 0.25rem 1.75rem;

      &.active {
        border-left-color: transparent;
        font-weight: 500;
      }
    }

    a.vp-sidebar-heading + .vp-sidebar-children &.active {
      border-left-color: transparent;
    }
  }

  &.active:not(p.vp-sidebar-heading) {
    border-left-color: var(--c-text-accent);
    color: var(--c-text-accent);
    font-weight: 600;
  }
}

a.vp-sidebar-item {
  cursor: pointer;

  &:hover {
    color: var(--c-text-accent);
  }
}
</style>
