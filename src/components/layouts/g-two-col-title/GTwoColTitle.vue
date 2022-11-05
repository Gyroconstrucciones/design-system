<script setup lang="ts">
defineProps({
  title: String,
  activePanel: String,
})
</script>

<template>
  <div class="h-full flex-1 flex flex-col gap-5 overflow-hidden">
    <section class="flex w-full items-center justify-between">
      <h1 class="lg:text-2xl text-lg font-semibold leading-none">
        {{ title }}
      </h1>
      <div class="flex">
        <slot name="actions"></slot>
      </div>
    </section>
    <section class="w-full h-full flex gap-2 overflow-hidden">
      <div
        class="relative h-full bg-white rounded-xl flex flex-col overflow-hidden shadow transition-all duration-500"
        :class="{ 'w-full px-3 py-4 lg:px-6': activePanel != 'right', 'w-5': activePanel == 'right' }"
      >
        <div class="h-full overflow-hidden relative">
          <slot v-if="activePanel !== 'right'" name="aside"></slot>
        </div>
      </div>
      <div
        class="relative h-full bg-white rounded-xl flex flex-col overflow-auto shadow transition-all duration-500"
        :class="{ 'w-full px-3 py-4 lg:px-6': activePanel == 'right', 'w-5': activePanel != 'right' }"
      >
        <slot v-if="activePanel == 'right'" name="main"></slot>
      </div>
    </section>
  </div>
</template>
