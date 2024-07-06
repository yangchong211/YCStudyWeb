<script setup lang="ts">
import { useNavigate } from '@theme/useNavigate'
import { useRelatedLinks } from '@theme/useRelatedLinks'
import { useThemeLocaleData } from '@theme/useThemeData'
import { useEventListener } from '@vueuse/core'
import { computed } from 'vue'
import { AutoLink } from 'vuepress/client'

const themeLocale = useThemeLocaleData()
const navigate = useNavigate()

const { prevLink, nextLink } = useRelatedLinks()

const navbarLabel = computed(() => {
  const themeLocale = useThemeLocaleData()
  return themeLocale.value.pageNavbarLabel ?? 'page navigation'
})

useEventListener('keydown', (event): void => {
  if (event.altKey) {
    if (event.key === 'ArrowRight') {
      if (nextLink.value) {
        navigate(nextLink.value.link)
        event.preventDefault()
      }
    } else if (event.key === 'ArrowLeft') {
      if (prevLink.value) {
        navigate(prevLink.value.link)
        event.preventDefault()
      }
    }
  }
})
</script>

<template>
  <nav
    v-if="prevLink || nextLink"
    class="vp-page-nav"
    :aria-label="navbarLabel"
  >
    <AutoLink v-if="prevLink" class="prev" :config="prevLink">
      <div class="hint">
        <span class="arrow left" />
        {{ themeLocale.prev ?? 'Prev' }}
      </div>
      <div class="link">
        <span>{{ prevLink.text }}</span>
      </div>
    </AutoLink>

    <AutoLink v-if="nextLink" class="next" :config="nextLink">
      <div class="hint">
        {{ themeLocale.next ?? 'Next' }}
        <span class="arrow right" />
      </div>
      <div class="link">
        <span>{{ nextLink.text }}</span>
      </div>
    </AutoLink>
  </nav>
</template>

<style lang="scss">
@import '../styles/variables';

.vp-page-nav {
  display: flex;
  flex-wrap: wrap;

  max-width: var(--content-width, 740px);
  min-height: 2rem;
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  padding: 1rem 2rem 0;
  border-top: 1px solid var(--c-border);

  transition: border-top var(--t-color);

  @media (max-width: $MQNarrow) {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  @media print {
    display: none;
  }

  .route-link {
    display: inline-block;
    flex-grow: 1;

    margin: 0.25rem;
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--c-border);
    border-radius: 0.25rem;

    &:hover {
      background: var(--c-bg-light);
    }

    .hint {
      color: var(--c-text-quote);
      font-size: 0.875rem;
      line-height: 2;
    }
  }

  .prev {
    text-align: start;
  }

  .next {
    text-align: end;
  }
}
</style>
