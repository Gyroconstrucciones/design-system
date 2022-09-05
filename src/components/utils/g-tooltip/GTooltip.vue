<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { ref } from 'vue'

const showTooltip = ref(false)

const props = defineProps({
  text: String,
  placement: String,
})

const placementClass = computed(() => {
  switch (props.placement) {
    case 'top':
      return '-top-10 left-1/2 transform -translate-x-1/2'
    case 'left':
      return 'right-full bottom-1/2 mr-2 transform translate-y-1/2'
    case 'right':
      return 'left-full bottom-1/2 ml-2 transform translate-y-1/2'
    default:
      return '-bottom-10 left-1/2 transform -translate-x-1/2'
  }
})
</script>

<template>
  <div class="relative">
    <div :onmouseenter="() => (showTooltip = true)" :onmouseleave="() => (showTooltip = false)">
      <slot></slot>
    </div>
    <div
      :class="`${placementClass}`"
      class="absolute duration-500 text-sm opacity-80 transition-all shadow-xl bg-black text-white z-50 rounded-md"
    >
      <span class="absolute px-4 py-1">
        <i-eva:arrow-down-fill v-if="placement == 'top'" class="text-black -bottom-3 right-1/3" />
        <i-eva:arrow-left-fill v-if="placement == 'right'" class="absolute text-black -right-2 bottom-1/4" />
        {{ text }}
        <i-eva:arrow-right-fill v-if="placement == 'left'" class="absolute text-black -right-2 bottom-1/4" />
        <i-eva:arrow-up-fill v-if="placement == 'bottom'" class="absolute text-black -top-3 right-1/3" />
      </span>
    </div>
  </div>
</template>
