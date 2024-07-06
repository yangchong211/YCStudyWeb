<script setup lang="ts">
import VPDropdownTransition from '@theme/VPDropdownTransition.vue'
import { computed, ref, toRefs, watch } from 'vue'
import { AutoLink, useRoute } from 'vuepress/client'
import type { AutoLinkOptions, NavGroup } from '../../shared/index.js'

const props = defineProps<{
  item: NavGroup<AutoLinkOptions | NavGroup<AutoLinkOptions>>
}>()

const { item } = toRefs(props)
const route = useRoute()

const open = ref(false)

const dropdownAriaLabel = computed(
  () => item.value.ariaLabel || item.value.text,
)

const isLastItemOfArray = (item: unknown, arr: unknown[]): boolean =>
  arr[arr.length - 1] === item

/**
 * Open the dropdown when user tab and click from keyboard.
 *
 * Use event.detail to detect tab and click from keyboard.
 * The Tab + Click is UIEvent > KeyboardEvent, so the detail is 0.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
 */
const handleDropdown = (e): void => {
  const isTriggerByTab = e.detail === 0

  open.value = isTriggerByTab ? !open.value : false
}

watch(
  () => route.path,
  () => {
    open.value = false
  },
)
</script>

<template>
  <div class="vp-navbar-dropdown-wrapper" :class="{ open }">
    <button
      class="vp-navbar-dropdown-title"
      type="button"
      :aria-label="dropdownAriaLabel"
      @click="handleDropdown"
    >
      <span class="title">{{ item.text }}</span>
      <span class="arrow down" />
    </button>

    <button
      class="vp-navbar-dropdown-title-mobile"
      type="button"
      :aria-label="dropdownAriaLabel"
      @click="open = !open"
    >
      <span class="title">{{ item.text }}</span>
      <span class="arrow" :class="open ? 'down' : 'right'" />
    </button>

    <VPDropdownTransition>
      <ul v-show="open" class="vp-navbar-dropdown">
        <li
          v-for="child in item.children"
          :key="child.text"
          class="vp-navbar-dropdown-item"
        >
          <template v-if="'children' in child">
            <h4 class="vp-navbar-dropdown-subtitle">
              <AutoLink
                v-if="child.link"
                :config="child"
                @focusout="
                  isLastItemOfArray(child, item.children) &&
                    child.children.length === 0 &&
                    (open = false)
                "
              />

              <span v-else>{{ child.text }}</span>
            </h4>

            <ul class="vp-navbar-dropdown-subitem-wrapper">
              <li
                v-for="grandchild in child.children"
                :key="grandchild.link"
                class="vp-navbar-dropdown-subitem"
              >
                <AutoLink
                  :config="grandchild"
                  @focusout="
                    isLastItemOfArray(grandchild, child.children) &&
                      isLastItemOfArray(child, item.children) &&
                      (open = false)
                  "
                />
              </li>
            </ul>
          </template>

          <template v-else>
            <AutoLink
              :config="child"
              @focusout="
                isLastItemOfArray(child, item.children) && (open = false)
              "
            />
          </template>
        </li>
      </ul>
    </VPDropdownTransition>
  </div>
</template>

<style lang="scss">
@use '../styles/mixins';
@import '../styles/variables';

.vp-navbar-dropdown-wrapper {
  cursor: pointer;

  &:not(.mobile) {
    height: 1.8rem;

    &:hover,
    &.open {
      .vp-navbar-dropdown {
        // override the inline style.
        display: block !important;
      }
    }
  }
}

.vp-navbar-dropdown {
  .vp-navbar-dropdown-wrapper.mobile & {
    @include mixins.dropdown-wrapper;

    padding-top: 0.5rem;
  }

  .vp-navbar-dropdown-wrapper:not(.mobile) & {
    position: absolute;
    top: 100%;
    right: 0;

    display: none;

    overflow-y: auto;
    box-sizing: border-box;

    // Avoid height shake by clicking
    height: auto !important;
    max-height: calc(100vh - 2.7rem);
    margin: 0;
    padding: 0.6rem 0;
    border: 1px solid var(--c-border);
    border-bottom-color: var(--c-border-dark);
    border-radius: 0.25rem;

    background-color: var(--c-bg-navbar);

    text-align: left;
    white-space: nowrap;
  }
}

.vp-navbar-dropdown-title {
  display: block;

  padding: inherit;
  border: none;

  background: transparent;
  color: var(--c-text);

  font-weight: 500;
  font-size: 0.9rem;
  font-family: inherit;
  line-height: 1.4rem;

  cursor: inherit;

  .vp-navbar-dropdown-wrapper.mobile & {
    display: none;
  }

  &:hover {
    border-color: transparent;
  }
}

.vp-navbar-dropdown-title-mobile {
  display: none;

  padding: inherit;
  border: none;

  background: transparent;
  color: var(--c-text);

  font-weight: 600;
  font-size: inherit;
  font-family: inherit;
  line-height: 1.4rem;

  cursor: inherit;

  .vp-navbar-dropdown-wrapper.mobile & {
    display: block;
  }

  &:hover {
    color: var(--c-text-accent);
  }
}

.vp-navbar-dropdown-item {
  color: inherit;
  line-height: 1.7rem;

  a {
    position: relative;

    display: block;

    margin-bottom: 0;
    padding: 0 1.5rem 0 1.25rem;
    border-bottom: none;

    font-weight: 400;
    line-height: 1.7rem;

    &:hover {
      color: var(--c-text-accent);
    }

    &.route-link-active {
      color: var(--c-text-accent);

      &::after {
        content: '';

        position: absolute;
        top: calc(50% - 2px);
        left: 9px;

        width: 0;
        height: 0;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-left: 5px solid var(--c-text-accent);
      }
    }
  }

  .vp-navbar-dropdown-wrapper.mobile & > a {
    font-size: 15px;
    line-height: 2rem;
  }
}

.vp-navbar-dropdown-subtitle {
  margin: 0.45rem 0 0;
  padding: 1rem 0 0.45rem;
  border-top: 1px solid var(--c-border);
  font-size: 0.9rem;

  .vp-navbar-dropdown-wrapper.mobile & {
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
    border-top: 0;

    font-size: 15px;
    line-height: 2rem;
  }

  .vp-navbar-dropdown-item:first-child & {
    margin-top: 0;
    padding-top: 0;
    border-top: 0;
  }

  > span {
    padding: 0 1.5rem 0 1.25rem;
  }

  > a {
    font-weight: inherit;

    &.route-link-active {
      &::after {
        display: none;
      }
    }
  }
}

.vp-navbar-dropdown-subitem-wrapper {
  padding: 0;
  list-style: none;
}

.vp-navbar-dropdown-subitem {
  font-size: 0.9em;

  .vp-navbar-dropdown-wrapper.mobile & {
    padding-left: 1rem;
    font-size: 14px;
  }
}
</style>
