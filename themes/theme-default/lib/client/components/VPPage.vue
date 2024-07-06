<script setup lang="ts">
import VPPageMeta from '@theme/VPPageMeta.vue'
import VPPageNav from '@theme/VPPageNav.vue'
import { Content } from 'vuepress/client'
import { setupHeaders } from '../composables/index.js'

defineSlots<{
  'top'?: (props: Record<never, never>) => any
  'bottom'?: (props: Record<never, never>) => any
  'content-top'?: (props: Record<never, never>) => any
  'content-bottom'?: (props: Record<never, never>) => any
}>()

setupHeaders()
</script>

<template>
  <main class="vp-page">
    <slot name="top" />

    <div class="theme-default-content">
      <slot name="content-top" />

      <Content />

      <slot name="content-bottom" />
    </div>

    <VPPageMeta />

    <VPPageNav />

    <slot name="bottom" />
  </main>
</template>

<style lang="scss">
@use '../styles/mixins';
@import '../styles/variables';

.vp-page {
  display: block;

  // leave space for navbar
  padding-top: var(--navbar-height);
  padding-bottom: 2rem;

  // leave space for sidebar
  padding-left: var(--sidebar-width);

  // narrow desktop / iPad
  @media (max-width: $MQNarrow) {
    // leave space for sidebar
    padding-left: var(--sidebar-width-mobile);
  }

  // wide mobile
  @media (max-width: $MQMobile) {
    // sidebar is collapsed
    padding-left: 0;
  }

  .theme-default-content {
    @include mixins.content-wrapper;

    padding-top: 0;
  }
}
</style>
