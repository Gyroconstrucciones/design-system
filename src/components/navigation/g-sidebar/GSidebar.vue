<script setup lang="ts">
import { MenuSection } from '@/types/menu.interface'
import GNavigationItem from '../g-navigation-item/GNavigationItem.vue'

defineProps({
  menu: Object as () => MenuSection[],
})
</script>

<template>
  <div class="hidden md:w-64 bg-dark-700 text-gray-600 overflow-y-auto md:block h-full border-r-2">
    <div class="w-full py-6 flex flex-col items-center">
      <div class="flex flex-shrink-0 font-bold items-center px-5 w-full">
        <slot />
      </div>
      <div class="flex-1 mt-6 w-full px-2 space-y-1">
        <slot name="main" />
        <div v-for="(menuSection, index) in menu" :key="index">
          <h4 v-if="menuSection.name" class="text-left px-3 pt-4 mb-2 uppercase text-xs">
            {{ menuSection.name }}
          </h4>
          <GNavigationItem v-for="menuItem in menuSection.items" :key="menuItem.route" :menu="menuItem" />
        </div>
      </div>
    </div>
  </div>
</template>
