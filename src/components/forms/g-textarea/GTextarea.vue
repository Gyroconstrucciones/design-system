<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  placeholder: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  model: [String, Date, Number],
  errors: Object as () => { $uid: string; $message: string }[],
})

const state = reactive({
  value: null as any,
})

const hasError = computed(() => props.errors && props.errors.length > 0)

defineEmits<{
  (event: 'onInput', value: string): void
}>()
onMounted(() => {
  state.value = props.model ?? ''
})
</script>

<template>
  <div>
    <label class="leading-7 text-sm text-gray-600 dark:text-gray-300" :class="{ 'text-red-400': hasError }">{{
      label
    }}</label>
    <textarea
      :id="label"
      v-model="state.value"
      :name="label"
      :class="{
        input: true,
        'input-error': hasError,
      }"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="$emit('onInput', state.value)"
    />

    <div v-for="error of errors" :key="error.$uid" class="">
      <span class="text-red-400 text-xs">{{ error.$message }}</span>
    </div>
  </div>
</template>

<style scoped>
.input {
  @apply w-full bg-white dark:bg-gray-600 rounded border border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 text-base outline-none text-gray-700 dark:text-gray-300 py-2 px-5 leading-8 transition-colors duration-200 ease-in-out;
}

.input-error {
  @apply !border-red-300;
}
</style>
