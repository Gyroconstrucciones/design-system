<script setup lang="ts">
import 'virtual:windi.css'
import { reactive } from 'vue'
import GInput from './GInput.vue'
import { hstEvent } from 'histoire/client'

const state = reactive({
  model: '',
  type: 'text',
})
const stateDate = reactive({
  model: new Date(),
  type: 'date',
})
const stateNumber = reactive({
  model: 0,
  type: 'number',
})
const stateTime = reactive({
  model: '',
  type: 'time',
})
const stateSearch = reactive({
  model: '',
  type: 'search',
})
const stateErrors = reactive({
  model: 'G&RO',
  type: 'text',
  errors: [{ $uid: '1234', $message: 'Theres an error' }],
})
</script>

<template>
  <Story title="Form/Input" :layout="{ type: 'grid' }">
    <Variant title="Default">
      <GInput v-bind="state" @on-input="hstEvent('Input', $event)" />
    </Variant>
    <Variant title="Search">
      <GInput v-bind="stateSearch" @on-input="hstEvent('Input', $event)" />
    </Variant>
    <Variant title="Number">
      <GInput v-bind="stateNumber" @on-input="hstEvent('Input', $event)" />
    </Variant>
    <Variant title="Date">
      <GInput v-bind="stateDate" @on-input="hstEvent('Input', $event)" />
    </Variant>
    <Variant title="Time">
      <GInput v-bind="stateTime" @on-input="hstEvent('Input', $event)" />
    </Variant>
    <Variant title="Error">
      <GInput v-bind="stateErrors" @on-input="hstEvent('Input', $event)" />
    </Variant>
  </Story>
</template>
