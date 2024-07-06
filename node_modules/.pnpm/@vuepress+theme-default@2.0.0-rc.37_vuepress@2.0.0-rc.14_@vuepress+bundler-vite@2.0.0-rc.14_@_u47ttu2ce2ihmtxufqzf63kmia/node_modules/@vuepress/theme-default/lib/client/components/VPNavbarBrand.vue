<script setup lang="ts">
import { useDarkMode } from '@theme/useDarkMode'
import { useThemeLocaleData } from '@theme/useThemeData'
import { computed, h } from 'vue'
import type { FunctionalComponent } from 'vue'
import {
  ClientOnly,
  RouteLink,
  useRouteLocale,
  useSiteLocaleData,
  withBase,
} from 'vuepress/client'

const routeLocale = useRouteLocale()
const siteLocale = useSiteLocaleData()
const themeLocale = useThemeLocaleData()
const isDarkMode = useDarkMode()

const navbarBrandLink = computed(
  () => themeLocale.value.home || routeLocale.value,
)
const navbarBrandTitle = computed(() => siteLocale.value.title)
const navbarBrandLogo = computed(() => {
  if (isDarkMode.value && themeLocale.value.logoDark !== undefined) {
    return themeLocale.value.logoDark
  }
  return themeLocale.value.logo
})
const navbarBrandLogoAlt = computed(
  () => themeLocale.value.logoAlt ?? navbarBrandTitle.value,
)
const navBarLogoAltMatchesTitle = computed(
  () =>
    navbarBrandTitle.value.toLocaleUpperCase().trim() ===
    navbarBrandLogoAlt.value.toLocaleUpperCase().trim(),
)
const NavbarBrandLogo: FunctionalComponent = () => {
  if (!navbarBrandLogo.value) return null
  const img = h('img', {
    class: 'vp-site-logo',
    src: withBase(navbarBrandLogo.value),
    alt: navbarBrandLogoAlt.value,
  })
  if (themeLocale.value.logoDark === undefined) {
    return img
  }
  // wrap brand logo with <ClientOnly> to avoid ssr-mismatch
  // when using a different brand logo in dark mode
  return h(ClientOnly, () => img)
}
</script>

<template>
  <RouteLink :to="navbarBrandLink">
    <NavbarBrandLogo />

    <span
      v-if="navbarBrandTitle"
      class="vp-site-name"
      :class="{ 'vp-hide-mobile': navbarBrandLogo }"
      :aria-hidden="navBarLogoAltMatchesTitle"
    >
      {{ navbarBrandTitle }}
    </span>
  </RouteLink>
</template>

<style lang="scss">
@import '../styles/variables';

.vp-site-logo {
  vertical-align: top;
  height: var(--navbar-line-height);
  margin-right: var(--navbar-padding-v);
}

.vp-site-name {
  position: relative;
  color: var(--c-text);
  font-weight: 600;
  font-size: 1.3rem;

  @media screen and (max-width: $MQMobile) {
    display: block;

    overflow: hidden;

    // 5.5rem for navbar padding-inline
    // 4.5rem for ColorModeSwitch and VPSearch
    // 1rem for gap
    width: calc(100vw - 11rem);

    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
