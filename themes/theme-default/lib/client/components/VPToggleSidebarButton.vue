<script setup lang="ts">
import { useThemeLocaleData } from '@theme/useThemeData'

defineEmits<(e: 'toggle') => void>()

const themeLocale = useThemeLocaleData()
</script>

<template>
  <div
    class="vp-toggle-sidebar-button"
    :title="themeLocale.toggleSidebar"
    aria-expanded="false"
    role="button"
    tabindex="0"
    @click="$emit('toggle')"
  >
    <div class="icon" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style lang="scss">
/* stylelint-disable max-nesting-depth */
@import '../styles/variables';

.vp-toggle-sidebar-button {
  position: absolute;
  top: 0.6rem;
  left: 1rem;

  display: none;

  padding: 0.6rem;

  cursor: pointer;

  @media screen and (max-width: $MQMobile) {
    display: block;
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;

    cursor: inherit;

    span {
      display: inline-block;

      width: 100%;
      height: 2px;
      border-radius: 2px;

      background-color: var(--c-text);

      transition: transform var(--t-transform);

      &:nth-child(2) {
        margin: 6px 0;
      }

      .vp-theme-container.sidebar-open & {
        &:nth-child(1) {
          transform: rotate(45deg) translate3d(5.5px, 5.5px, 0);
        }

        &:nth-child(2) {
          transform: scale3d(0, 1, 1);
        }

        &:nth-child(3) {
          transform: rotate(-45deg) translate3d(6px, -6px, 0);
        }

        &:nth-child(1),
        &:nth-child(3) {
          transform-origin: center;
        }
      }
    }
  }
}
</style>
