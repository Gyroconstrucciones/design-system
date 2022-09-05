<script setup lang="ts">
defineProps({
  title: String,
})
</script>

<template>
  <div
    class="flex-1 grid overflow-x-hidden lg:py-2 lg:px-2 lg:grid-cols-5 gap-y-2 lg:gap-2 lg:overflow-hidden grid-cols-1 no-scrollbar px-1 py-1"
  >
    <aside
      class="relative col-span-2 min-h-80 bg-white rounded-xl px-3 py-4 lg:px-6 flex flex-col overflow-auto shadow lg:max-h-none max-w-full"
    >
      <div class="flex items-center justify-between">
        <h1 class="lg:text-lg text-lg font-semibold leading-none">{{ title }}</h1>
        <slot name="actions"></slot>
      </div>
      <slot name="aside"></slot>
    </aside>
    <div class="bg-white lg:mt-0 col-span-3 shadow px-4 py-5 rounded-lg p-6 overflow-y-scroll no-scrollbar">
      <slot name="main"></slot>
    </div>
  </div>
</template>
