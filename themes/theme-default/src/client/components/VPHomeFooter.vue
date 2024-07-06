<script setup lang="ts">
import { computed } from 'vue'
import { usePageFrontmatter } from 'vuepress/client'
import type { DefaultThemeHomePageFrontmatter } from '../../shared/index.js'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()

const footer = computed(() => frontmatter.value.footer)
const footerHtml = computed(() => frontmatter.value.footerHtml)
</script>

<template>
  <template v-if="footer">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="footerHtml" class="vp-footer" v-html="footer" />
    <div v-else class="vp-footer" v-text="footer" />
  </template>
</template>

<style>
.vp-footer {
  padding: 2.5rem;
  border-top: 1px solid var(--c-border);

  color: var(--c-text-lighter);

  text-align: center;

  transition: border-color var(--t-color);
}
</style>
