<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="font-bold text-4xl mb-2">{{ msg }}</h1>

  <button class="btn btn-secondary my-4" @click="count++">
    <i-akar-icons-calculator class="mx-2" />{{ $t('count is') }}: {{ count }}
  </button>

  <p>{{ $t('Check README for more information') }}</p>
  <p>
    {{ $t('Edit') }}
    <code>components/HelloWorld.vue</code> {{ $t('to test hot module replacement') }}
  </p>
</template>
