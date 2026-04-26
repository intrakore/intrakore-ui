<script setup lang="ts">
import { computed } from 'vue'

import type { AlertProps } from "./types";

import { X as LucideX } from "lucide-vue-next";
import { Info as LucideInfo } from "lucide-vue-next";
import { CircleX as LucideCircleX } from "lucide-vue-next";
import { CircleCheck as LucideCheck } from "lucide-vue-next";
import { TriangleAlert as LucideWarning } from "lucide-vue-next";

/** Controls the visibility of the alert for dismissing or toggling it */
const visible = defineModel({ default: true });

const emit = defineEmits(['dismiss'])

const dismissAlert = () => {
  visible.value = false
  emit('dismiss')
}

const classes = computed(() => {
  const subtleBgs = {
    yellow: "bg-surface-amber-1",
    blue: "bg-surface-blue-1",
    red: "bg-surface-red-3",
    green: "bg-surface-clearing-2",
  };

  if (props.variant == "outline") return "border border-outline-gray-4";

  return props.theme ? subtleBgs[props.theme] : "bg-surface-gray-2";
});

const icon = computed(() => {
  const data = {
    yellow: { component: LucideWarning, css: 'text-ink-amber-2' },
    blue: { component: LucideInfo, css: 'text-ink-blue-2' },
    red: { component: LucideCircleX, css: 'text-ink-red-3' },
    green: { component: LucideCheck, css: 'text-ink-clearing-2' },
  }
  return props.theme ? data[props.theme] : null
})

const props = withDefaults(defineProps<AlertProps>(), {
  variant: "subtle",
  dismissable: true,
});

defineSlots<{
  /** Custom icon shown before the content */
  icon?: () => any

  /** Custom description content */
  description?: () => any

  /** Footer content shown at the bottom of the alert */
  footer?: () => any
}>()
</script>

<template>
  <div
    v-if="visible"
    role="alert"
    :class="classes"
    class="grid grid-cols-[auto_1fr_auto] gap-3 rounded-md px-4 py-3.5 text-base items-start"
  >
    <slot name="icon">
      <component
        :is="icon.component"
        class="size-4"
        v-if="icon"
        :class="icon.css"
      />
    </slot>

    <div class="grid gap-2" :class='{ "col-span-2": !$slots.icon && !icon }'>
      <span class="text-ink-gray-9"> {{ props.title }} </span>

      <slot name="description">
        <p v-if="props.description" class="text-ink-gray-6 prose-sm">
          {{ props.description }}
        </p>
      </slot>
    </div>

    <button v-if="props.dismissable" @click="dismissAlert">
      <LucideX class="size-4" />
    </button>
    <slot name="footer"> </slot>
  </div>
</template>
