<script setup lang="ts">
import { useNavbarConfig } from '@theme/useNavbarConfig'
import { useNavbarRepo } from '@theme/useNavbarRepo'
import { useNavbarSelectLanguage } from '@theme/useNavbarSelectLanguage'
import { useThemeLocaleData } from '@theme/useThemeData'
import { DeviceType, useUpdateDeviceStatus } from '@theme/useUpdateDeviceStatus'
import VPNavbarDropdown from '@theme/VPNavbarDropdown.vue'
import { computed, ref } from 'vue'
import { AutoLink } from 'vuepress/client'

const navbarConfig = useNavbarConfig()
const navbarSelectLanguage = useNavbarSelectLanguage()
const navbarRepo = useNavbarRepo()

const isMobile = ref(false)

const navbarLabel = computed(() => {
  const themeLocale = useThemeLocaleData()
  return themeLocale.value.navbarLabel ?? 'site navigation'
})

const navbarLinks = computed(() => [
  ...navbarConfig.value,
  ...navbarSelectLanguage.value,
  ...navbarRepo.value,
])

useUpdateDeviceStatus(
  DeviceType.MOBILE,
  (mobileDesktopBreakpoint: number): void => {
    // avoid overlapping of long title and long navbar links
    isMobile.value = window.innerWidth < mobileDesktopBreakpoint
  },
)
</script>

<template>
  <nav
    v-if="navbarLinks.length"
    class="vp-navbar-items"
    :aria-label="navbarLabel"
  >
    <div v-for="item in navbarLinks" :key="item.text" class="vp-navbar-item">
      <VPNavbarDropdown
        v-if="'children' in item"
        :class="{ mobile: isMobile }"
        :item="item"
      />
      <AutoLink v-else :config="item" />
    </div>
  </nav>
</template>

<style lang="scss">
@import '../styles/variables';

.vp-navbar-items {
  display: inline-block;

  @media print {
    display: none;
  }

  a {
    display: inline-block;
    color: inherit;
    line-height: 1.4rem;

    &:hover,
    &.route-link-active {
      color: var(--c-text);
    }
  }
}

.vp-navbar-item {
  position: relative;
  display: inline-block;
  margin-left: 1.5rem;
  line-height: var(--navbar-line-height);

  @media (max-width: $MQMobile) {
    margin-left: 0;
  }

  &:first-child {
    margin-left: 0;
  }

  a {
    &:hover,
    &.route-link-active {
      color: var(--c-text-accent);
    }
  }

  > a {
    &:hover,
    &.route-link-active {
      margin-bottom: -2px;
      border-bottom: 2px solid var(--c-text-accent);

      @media (max-width: $MQMobile) {
        margin-bottom: 0;
        border-bottom: none;
      }
    }
  }
}
</style>
