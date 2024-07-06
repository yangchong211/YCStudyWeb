<script setup lang="ts">
defineOptions({
  name: 'CodeGroupItem',
})

defineProps<{
  title: string
  active?: boolean
}>()
</script>

<template>
  <div class="code-group-item" :class="{ active }" role="tabpanel">
    <slot />
  </div>
</template>
