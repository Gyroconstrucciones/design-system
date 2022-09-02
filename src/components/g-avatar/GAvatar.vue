<script setup lang="ts">
defineProps({
  isRounded: Boolean,
  label: String,
  image: String,
})
</script>

<template>
  <div
    :class="`h-24 w-24 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-dark-800 rounded-full ring-4 m-1 ring-white dark:ring-dark-700 flex items-center justify-center shadow ${
      isRounded ? 'rounded-full' : 'rounded-md'
    }`"
  >
    <h1 v-if="label" class="text-3xl font-bold">
      {{ label.charAt(0) }}
    </h1>
    <img v-if="image" class="object-center object-cover m-2" :src="image" />
    <slot />
  </div>
</template>
