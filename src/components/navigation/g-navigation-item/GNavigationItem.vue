<script setup lang="ts">
import { MenuItem } from '@/types/menu.interface'

defineProps({
  menu: Object as () => MenuItem,
})
</script>

<template>
  <a
    :to="{ name: menu?.route }"
    class="bg-dark-700 cursor-pointer text-indigo-100 hover:bg-dark-900 hover:text-white group w-full p-3 rounded-md flex items-center font-medium transition-all flex-row text-sm"
    :class="`${menu?.isActive && 'bg-dark-900 text-white'}`"
  >
    <component :is="menu?.icon" class="icon-nav" />
    <span :class="menu?.isMobile ? 'ml-4' : 'ml-4'">{{ menu?.name }}</span>
  </a>
</template>
