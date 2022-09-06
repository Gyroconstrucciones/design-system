<script setup lang="ts">
defineProps({
  isLoading: Boolean,
})
</script>
<template>
  <div
    v-if="isLoading"
    class="h-full w-full flex items-center justify-center text-4xl dark:text-gray-100 text-gray-500"
  >
    <i-eos-icons-bubble-loading />
  </div>
</template>
