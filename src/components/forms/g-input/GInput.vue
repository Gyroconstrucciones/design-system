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
  type: String,
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
    <label class="leading-7 text-sm text-gray-600" :class="`${hasError && 'text-red-400'}`">Label</label>
    <input
      :id="label"
      v-model="state.value"
      :name="label"
      :class="`input ${hasError && 'input-error'}`"
      :disabled="disabled"
      :placeholder="placeholder"
      :type="type"
      @input="$emit('onInput', state.value)"
    />

    <div v-for="error of errors" :key="error.$uid" class="">
      <span class="text-red-400 text-xs">{{ error.$message }}</span>
    </div>
  </div>
</template>
