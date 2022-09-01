<script lang="ts">
import { useI18n } from 'vue-i18n'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LanguageSwitcher',
  setup() {
    const { locale, availableLocales } = useI18n()
    locale.value = localStorage.getItem('locale') || 'en'
    return { locale, availableLocales }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setLanguage(event: any) {
      localStorage.setItem('locale', event.target.value)
    },
  },
})
</script>

<template>
  <select v-model="locale" :onchange="setLanguage" class="dark:bg-black bg-white px-3 mr-4 cursor-pointer">
    <option v-for="code in availableLocales" :key="code" :value="code">{{ code }}</option>
  </select>
</template>
