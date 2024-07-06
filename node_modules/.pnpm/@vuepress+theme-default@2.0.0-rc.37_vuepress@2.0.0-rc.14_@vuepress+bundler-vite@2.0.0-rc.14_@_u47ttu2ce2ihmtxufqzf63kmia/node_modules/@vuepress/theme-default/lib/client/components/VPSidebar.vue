<script setup lang="ts">
import VPNavbarItems from '@theme/VPNavbarItems.vue'
import VPSidebarItems from '@theme/VPSidebarItems.vue'

defineSlots<{
  top?: (props: Record<never, never>) => any
  bottom?: (props: Record<never, never>) => any
}>()
</script>

<template>
  <aside class="vp-sidebar">
    <VPNavbarItems />
    <slot name="top" />
    <VPSidebarItems />
    <slot name="bottom" />
  </aside>
</template>

<style lang="scss">
@import '../styles/variables';

.vp-sidebar {
  position: fixed;

  // leave space for navbar
  top: var(--navbar-height);
  bottom: 0;
  left: 0;
  z-index: 10;

  overflow-y: auto;
  box-sizing: border-box;

  width: var(--sidebar-width);
  margin: 0;
  border-right: 1px solid var(--c-border);

  background-color: var(--c-bg-sidebar);

  font-size: 16px;

  transition:
    transform var(--t-transform),
    background-color var(--t-color),
    border-color var(--t-color);

  scrollbar-color: var(--c-brand) var(--c-border);
  scrollbar-width: thin;

  // narrow desktop / iPad
  @media (max-width: $MQNarrow) {
    width: var(--sidebar-width-mobile);
    font-size: 15px;
  }

  // wide mobile
  @media (max-width: $MQMobile) {
    top: 0;

    // leave space for navbar
    padding-top: var(--navbar-height);
    transform: translateX(-100%);
  }

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--c-border);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--c-brand);
  }

  // override styles
  .vp-navbar-items {
    display: none;
    padding: 0.5rem 0 0.75rem;
    border-bottom: 1px solid var(--c-border);
    transition: border-color var(--t-color);

    @media (max-width: $MQMobile) {
      display: block;

      .vp-navbar-dropdown-item a.route-link-active::after {
        top: calc(1rem - 2px);
      }
    }

    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    a {
      font-weight: 600;
    }
  }

  // override styles
  .vp-navbar-item {
    display: block;
    padding: 0.5rem 0 0.5rem 1.5rem;
    font-size: 1.1em;
    line-height: 1.25rem;
  }
}
</style>
