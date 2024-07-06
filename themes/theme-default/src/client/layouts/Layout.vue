<script setup lang="ts">
import { useScrollPromise } from '@theme/useScrollPromise'
import { useSidebarItems } from '@theme/useSidebarItems'
import { useThemeLocaleData } from '@theme/useThemeData'
import VPHome from '@theme/VPHome.vue'
import VPNavbar from '@theme/VPNavbar.vue'
import VPPage from '@theme/VPPage.vue'
import VPSidebar from '@theme/VPSidebar.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { usePageData, usePageFrontmatter, useRouter } from 'vuepress/client'
import type { DefaultThemePageFrontmatter } from '../../shared/index.js'

defineSlots<{
  'navbar'?: (props: Record<never, never>) => any
  'navbar-before'?: (props: Record<never, never>) => any
  'navbar-after'?: (props: Record<never, never>) => any
  'sidebar'?: (props: Record<never, never>) => any
  'sidebar-top'?: (props: Record<never, never>) => any
  'sidebar-bottom'?: (props: Record<never, never>) => any
  'page'?: (props: Record<never, never>) => any
  'page-top'?: (props: Record<never, never>) => any
  'page-bottom'?: (props: Record<never, never>) => any
  'page-content-top'?: (props: Record<never, never>) => any
  'page-content-bottom'?: (props: Record<never, never>) => any
}>()

const page = usePageData()
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
const themeLocale = useThemeLocaleData()

// navbar
const shouldShowNavbar = computed(
  () =>
    frontmatter.value.navbar !== false && themeLocale.value.navbar !== false,
)

// sidebar
const sidebarItems = useSidebarItems()
const isSidebarOpen = ref(false)
const toggleSidebar = (to?: boolean): void => {
  isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
}
const touchStart = { x: 0, y: 0 }
const onTouchStart = (e): void => {
  touchStart.x = e.changedTouches[0].clientX
  touchStart.y = e.changedTouches[0].clientY
}
const onTouchEnd = (e): void => {
  const dx = e.changedTouches[0].clientX - touchStart.x
  const dy = e.changedTouches[0].clientY - touchStart.y
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx > 0 && touchStart.x <= 80) {
      toggleSidebar(true)
    } else {
      toggleSidebar(false)
    }
  }
}

// external-link-icon
const enableExternalLinkIcon = computed(
  () =>
    frontmatter.value.externalLinkIcon ??
    themeLocale.value.externalLinkIcon ??
    true,
)

// classes
const containerClass = computed(() => [
  {
    'no-navbar': !shouldShowNavbar.value,
    'no-sidebar': !sidebarItems.value.length,
    'sidebar-open': isSidebarOpen.value,
    'external-link-icon': enableExternalLinkIcon.value,
  },
  frontmatter.value.pageClass,
])

// close sidebar after navigation
let unregisterRouterHook
onMounted(() => {
  const router = useRouter()
  unregisterRouterHook = router.afterEach(() => {
    toggleSidebar(false)
  })
})
onUnmounted(() => {
  unregisterRouterHook()
})

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending
</script>

<template>
  <div
    class="vp-theme-container"
    :class="containerClass"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <slot name="navbar">
      <VPNavbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar">
        <template #before>
          <slot name="navbar-before" />
        </template>
        <template #after>
          <slot name="navbar-after" />
        </template>
      </VPNavbar>
    </slot>

    <div class="vp-sidebar-mask" @click="toggleSidebar(false)" />

    <slot name="sidebar">
      <VPSidebar>
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </VPSidebar>
    </slot>

    <slot name="page">
      <VPHome v-if="frontmatter.home" />

      <Transition
        v-else
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <VPPage :key="page.path">
          <template #top>
            <slot name="page-top" />
          </template>
          <template #content-top>
            <slot name="page-content-top" />
          </template>
          <template #content-bottom>
            <slot name="page-content-bottom" />
          </template>
          <template #bottom>
            <slot name="page-bottom" />
          </template>
        </VPPage>
      </Transition>
    </slot>
  </div>
</template>

<style lang="scss">
@import '../styles/variables';

.vp-sidebar-mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  display: none;

  width: 100vw;
  height: 100vh;
}

.vp-theme-container {
  // navbar is disabled
  &.no-navbar {
    .vp-sidebar {
      top: 0;

      @media (max-width: $MQMobile) {
        padding-top: 0;
      }
    }

    .vp-page {
      padding-top: 0;
    }

    // adjust heading margin and padding;
    .theme-default-content {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 1.5rem;
        padding-top: 0;
      }
    }
  }

  &.no-sidebar {
    // hide sidebar
    .vp-sidebar {
      display: none;

      // show sidebar on mobile because it has navbar links
      @media (max-width: $MQMobile) {
        display: block;
      }
    }

    .vp-page {
      padding-left: 0;
    }
  }

  &.sidebar-open {
    @media (max-width: $MQMobile) {
      // show sidebar
      .vp-sidebar {
        transform: translateX(0);
      }

      // show sidebar mask
      .vp-sidebar-mask {
        display: block;
      }
    }
  }
}

/**
 * fade-slide-y transition
 */
.fade-slide-y {
  &-enter-active {
    transition: all 0.2s ease;
  }

  &-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
