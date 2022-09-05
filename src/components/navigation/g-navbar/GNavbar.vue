<script setup lang="ts">
import { ref } from 'vue'

const isCollapsed = ref(true)
</script>

<template>
  <header
    class="w-full relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex px-4 py-3 sm:px-6 items-center justify-between"
  >
    <div class="flex items-center justify-start">
      <slot name="left" />
    </div>
    <div class="flex items-center justify-center h-0 !md:h-16 overflow-y-hidden">
      <slot name="center" />
    </div>
    <div class="flex items-center justify-center space-x-4 sm:space-x-6 h-0 !md:h-16 overflow-y-hidden">
      <slot name="right" />
    </div>

    <button class="flex block md:hidden" @click="isCollapsed = !isCollapsed">
      <i-gg:menu-grid-o class="h-6 w-6" />
    </button>
    <!-- Mobile -->
    <div
      class="shadow w-full text-sm px-4 !md:h-0 !md:py-0 sm:px-6 flex flex-col h-auto transition-all duration-400 overflow-y-hidden absolute top-16 left-0 bg-white text-gray-700"
      :class="{ '!h-0': isCollapsed, 'py-6': !isCollapsed }"
    >
      <slot name="center" />
      <hr v-if="$slots.center && $slots.right" class="my-4" />
      <div class="flex flex-col space-y-2">
        <slot name="right" />
      </div>
    </div>
  </header>
</template>
