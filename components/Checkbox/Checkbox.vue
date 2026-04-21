<template>
  <div
    class="inline-flex gap-2 rounded transition"
    :class="{
      'px-2.5 py-1.5': padding && size === 'sm',
      'px-3 py-2': padding && size === 'md',
      'focus-within:bg-surface-blueprint-3 focus-within:ring-2 focus-within:ring-outline-blueprint-2 hover:bg-surface-blueprint-2 active:bg-surface-blueprint-3':
        padding && !disabled,
    }"
  >
    <input
      class="rounded-sm mt-[1px] bg-surface-white"
      :class="inputClasses"
      type="checkbox"
      :disabled="disabled"
      :id="htmlId"
      :checked="Boolean(modelValue)"
      @change="
        (e) =>
          $emit('update:modelValue', (e.target as HTMLInputElement).checked)
      "
      v-bind="attrs"
    />
    <label class="block" :class="labelClasses" v-if="label" :for="htmlId">
      {{ label }}
    </label>
  </div>
</template>
<script lang="ts" setup>
import { computed, useAttrs } from 'vue'
import { useId } from '../../utils/useId'
import type { CheckboxProps } from './types'

const props = withDefaults(defineProps<CheckboxProps>(), {
  size: 'sm',
  padding: false,
})

const attrs = useAttrs()

const htmlId = props.id ?? useId()

const labelClasses = computed(() => {
  return [
    {
      sm: 'text-base font-medium',
      md: 'text-lg font-medium',
    }[props.size],
    props.disabled ? 'text-ink-blueprint-2' : 'text-ink-blueprint-4',
    'select-none',
  ]
})

const inputClasses = computed(() => {
  let baseClasses = props.disabled
    ? 'border-outline-blueprint-1 bg-surface-blueprint-2 text-ink-blueprint-1'
    : 'border-outline-blueprint-4 text-blueprint-500 hover:border-outline-blueprint-3 hover:text-blueprint-500 focus:ring-offset-0 focus:border-outline-blueprint-4 active:border-outline-blueprint-4 active:text-blueprint-500 transition'

  let interactionClasses = props.disabled
    ? ''
    : props.padding
      ? 'focus:ring-0'
      : 'hover:shadow-sm focus:ring-0 focus-visible:ring-2 focus-visible:ring-outline-blueprint-2 active:bg-surface-blueprint-1'

  let sizeClasses = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
  }[props.size]

  return [baseClasses, interactionClasses, sizeClasses]
})
</script>
