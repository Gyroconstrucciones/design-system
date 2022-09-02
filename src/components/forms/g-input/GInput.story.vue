<script setup lang="ts">
import 'virtual:windi.css'
import { reactive } from 'vue'
import GInput from './GInput.vue'
import { hstEvent } from 'histoire/client'

const state = reactive({
  model: '',
})
const stateErrors = reactive({
  model: 'G&RO',
  errors: [{ $uid: '1234', $message: 'Theres an error' }],
})
</script>

<template>
  <Story title="Form/Input" :layout="{ type: 'grid' }">
    <Variant title="Default">
      <GInput v-bind="state" @on-input="hstEvent('Input', $event)" />
    </Variant>
    <Variant title="Error">
      <GInput v-bind="stateErrors" @on-input="hstEvent('Input', $event)" />
    </Variant>
  </Story>
</template>
