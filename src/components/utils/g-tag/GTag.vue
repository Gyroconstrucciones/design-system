<script setup lang="ts">
defineProps({
  label: String,
  image: String,
  bgColor: String,
  textColor: String,
})

defineEmits<{
  (event: 'clicked'): void
}>()
</script>

<template>
  <div
    :class="`${bgColor} !${textColor}`"
    class="flex items-center relative justify-start bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-300 shadow m-1 rounded-full"
  >
    <img
      v-if="image"
      :src="image"
      class="h-10 w-10 object-cover rounded-full shadow transition-all hover:transform hover:scale-105"
    />
    <div class="px-3 py-1 flex gap-x-3 flex-1 items-center justify-center" :class="{ '-ml-10': image }">
      <slot name="icon" />
      <span>{{ label }}</span>
    </div>
    <button
      v-if="$slots.btnIcon"
      class="transition-all bg-gray-100 hover:transform hover:scale-105 shadow-md flex items-center justify-center cursor-pointer absolute -top-1 -right-1 z-10 rounded-full w-7 h-7 text-xl"
      :class="`${bgColor} !${textColor}`"
      @click="$emit('clicked')"
    >
      <slot name="btnIcon" />
    </button>
  </div>
</template>
