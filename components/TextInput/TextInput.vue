<template>
  <div
    class="relative flex items-center"
    :class="attrs.class"
    :style="attrs.style"
  >
    <div
      :class="[
        'absolute inset-y-0 start-0 flex items-center',
        textColor,
        prefixClasses,
      ]"
      v-if="$slots.prefix"
    >
      <slot name="prefix"> </slot>
    </div>
    <input
      ref="inputRef"
      :type="type"
      :placeholder="placeholder"
      :class="inputClasses"
      :disabled="disabled"
      :id="id"
      :value="modelValue"
      :required="required"
      @input="handleChange"
      @change="handleChange"
      v-bind="attrsWithoutClassStyle"
    />
    <div
      :class="[
        'absolute inset-y-0 end-0 flex items-center',
        textColor,
        suffixClasses,
      ]"
      v-if="$slots.suffix"
    >
      <slot name="suffix"> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots, useAttrs, ref } from 'vue'
import debounce from '../../utils/debounce'
import type { TextInputProps } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TextInputProps>(), {
  type: 'text',
  size: 'sm',
  variant: 'subtle',
})

const emit = defineEmits(['update:modelValue'])
const slots = useSlots()

defineSlots<{
  /** Content rendered before the input (left side) */
  prefix?: () => any

  /** Content rendered after the input (right side) */
  suffix?: () => any
}>()

const attrs = useAttrs()

const attrsWithoutClassStyle = computed(() => {
  return Object.fromEntries(
    // class and style is passed to the root element
    Object.entries(attrs).filter(([key]) => key !== 'class' && key !== 'style'),
  )
})

const inputRef = ref<HTMLInputElement | null>(null)

defineExpose({ el: inputRef })

const textColor = computed(() => {
  return props.disabled ? 'text-ink-blueprint-2' : 'text-ink-blueprint-2'
})

const inputClasses = computed(() => {
  let sizeClasses = {
    sm: 'text-base rounded h-7',
    md: 'text-base rounded h-8',
    lg: 'text-lg rounded-md h-10',
    xl: 'text-xl rounded-md h-10',
  }[props.size]

  let paddingClasses = {
    sm: [
      'py-1.5',
      slots.prefix ? 'ps-8' : 'ps-2',
      slots.suffix ? 'pe-8' : 'pe-2',
    ],
    md: [
      'py-1.5',
      slots.prefix ? 'ps-9' : 'ps-2.5',
      slots.suffix ? 'pe-9' : 'pe-2.5',
    ],
    lg: [
      'py-1.5',
      slots.prefix ? 'ps-10' : 'ps-3',
      slots.suffix ? 'pe-10' : 'pe-3',
    ],
    xl: [
      'py-1.5',
      slots.prefix ? 'ps-10' : 'ps-3',
      slots.suffix ? 'pe-10' : 'pe-3',
    ],
  }[props.size]

  let variant = props.disabled ? 'disabled' : props.variant
  let variantClasses = {
    subtle:
      'border border-transparent bg-surface-blueprint-2 placeholder-ink-blueprint-2 hover:text-ink-blueprint-2 hover:bg-surface-blueprint-1 focus:text-ink-blueprint-4 focus:bg-surface-blueprint-2 focus:border-transparent focus:ring-2 focus:ring-outline-blueprint-2 focus:ring-offset-0 active:text-ink-blueprint-4 active:bg-surface-blueprint-2 active:border-outline-blueprint-3',
    outline:
      'border border-outline-blueprint-2 bg-surface-white placeholder-ink-blueprint-3 hover:text-ink-blueprint-3 hover:border-outline-blueprint-3 focus:text-ink-blueprint-4 focus:border-transparent focus:ring-2 focus:ring-outline-blueprint-2 focus:ring-offset-0 active:text-ink-blueprint-4 active:border-outline-blueprint-4',
    disabled: [
      'border bg-surface-blueprint-1 placeholder-ink-blueprint-2',
      props.variant === 'outline'
        ? 'border-outline-blueprint-1'
        : 'border-transparent',
    ],
    ghost: 'border-0 focus:ring-0 focus-visible:ring-0',
  }[variant]

  return [
    sizeClasses,
    paddingClasses,
    variantClasses,
    textColor.value,
    'transition-colors w-full dark:[color-scheme:dark]',
  ]
})

let prefixClasses = computed(() => {
  return {
    sm: 'ps-2',
    md: 'ps-2.5',
    lg: 'ps-3',
    xl: 'ps-3',
  }[props.size]
})

let suffixClasses = computed(() => {
  return {
    sm: 'pe-2',
    md: 'pe-2.5',
    lg: 'pe-3',
    xl: 'pe-3',
  }[props.size]
})

let emitChange = (value: string) => {
  emit('update:modelValue', value)
}
if (props.debounce) {
  emitChange = debounce(emitChange, props.debounce)
}

let handleChange = (e: Event) => {
  emitChange((e.target as HTMLInputElement).value)
}
</script>
