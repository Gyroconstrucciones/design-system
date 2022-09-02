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
  model: String,
  errors: Object as () => { $uid: string; $message: string }[],
})

const state = reactive({
  value: '',
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
    <label class="leading-7 text-sm text-gray-600" :class="`${hasError && 'text-red-400'}`">Label</label>
    <input
      :id="label"
      v-model="state.value"
      type="text"
      :name="label"
      :class="`input ${hasError && 'input-error'}`"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="$emit('onInput', state.value)"
    />

    <div v-for="error of errors" :key="error.$uid" class="">
      <span class="text-red-400 text-xs">{{ error.$message }}</span>
    </div>
  </div>
</template>
