<script setup lang="ts">
import {
  useThemeData,
  useThemeLocaleData,
} from '@vuepress/plugin-theme-data/client'
import { ref, watch } from 'vue'

const themeData = useThemeData()
const themeLocaleData = useThemeLocaleData()

const isThemeDataChanged = ref(false)
const isThemeLocaleDataChanged = ref(false)

watch(themeData, () => {
  isThemeDataChanged.value = true
})

watch(themeLocaleData, () => {
  isThemeLocaleDataChanged.value = true
})
</script>

<template>
  <div class="theme-data">
    <pre id="theme-data">{{ JSON.stringify(themeData, null, 2) }}</pre>

    <pre id="theme-locale-data">{{
      JSON.stringify(themeLocaleData, null, 2)
    }}</pre>

    <div id="is-theme-data-changed">{{ isThemeDataChanged }}</div>
    <div id="is-theme-locale-data-changed">{{ isThemeLocaleDataChanged }}</div>
  </div>
</template>

<style lang="scss">
.theme-data {
  display: none;
}
</style>
