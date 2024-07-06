<script setup lang="ts">
import { useThemeLocaleData } from '@theme/useThemeData'
import { RouteLink, useRouteLocale } from 'vuepress/client'

const routeLocale = useRouteLocale()
const themeLocale = useThemeLocaleData()

const messages = themeLocale.value.notFound ?? ['Not Found']
const getMsg = (): string =>
  messages[Math.floor(Math.random() * messages.length)]
const homeLink = themeLocale.value.home ?? routeLocale.value
const homeText = themeLocale.value.backToHome ?? 'Back to home'
</script>

<template>
  <div class="vp-theme-container">
    <main class="page">
      <div class="theme-default-content">
        <h1>404</h1>

        <blockquote>{{ getMsg() }}</blockquote>

        <RouteLink :to="homeLink">{{ homeText }}</RouteLink>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.vp-theme-container {
  max-width: 740px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}

@media (max-width: 959px) {
  .vp-theme-container {
    padding: 2rem;
  }
}
</style>
