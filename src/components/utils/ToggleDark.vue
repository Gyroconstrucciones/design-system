<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light',
})
console.log(isDark.value)
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark()">
    <i-bi-moon-fill v-show="isDark" class="align-middle" />
    <i-bi-sun-fill v-show="!isDark" class="align-middle" />

    <!-- <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span> -->
  </button>
</template>
