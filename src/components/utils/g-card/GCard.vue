<script setup lang="ts">
defineProps({
  isClickable: Boolean,
})

defineEmits<{
  (event: 'clicked'): void
}>()
</script>

<template>
  <div
    class="py-3 px-3 mb-2 mt-1 border-1 rounded-xl text-left text-dark-700 dark:text-gray-300 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
    :class="`${isClickable && 'cursor-pointer'}`"
    @click="isClickable ? $emit('clicked') : null"
  >
    <slot />
    <footer v-if="$slots.footer">
      <hr class="my-3 border-gray-300 dark:border-gray-600" />
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
