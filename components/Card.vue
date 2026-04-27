<template>
<<<<<<< HEAD
  <div class="flex flex-col rounded-lg border bg-white px-6 py-5 shadow">
=======
  <div class="flex flex-col px-6 py-5 bg-white border rounded-lg shadow">
>>>>>>> 9165654b (feat: first commit)
    <div class="flex items-baseline justify-between">
      <div class="flex items-baseline space-x-2">
        <div class="flex items-center space-x-2" v-if="$slots['actions-left']">
          <slot name="actions-left"></slot>
        </div>
        <h2 class="text-xl font-semibold">{{ title }}</h2>
      </div>
      <div class="flex items-center space-x-2" v-if="$slots['actions']">
        <slot name="actions"></slot>
      </div>
    </div>
<<<<<<< HEAD
    <p class="mt-1.5 text-base text-gray-600" v-if="subtitle">
=======
    <p class="text-base text-gray-600 mt-1.5" v-if="subtitle">
>>>>>>> 9165654b (feat: first commit)
      {{ subtitle }}
    </p>
    <div
      v-if="loading"
<<<<<<< HEAD
      class="mt-4 flex flex-auto flex-col items-center justify-center rounded-md"
    >
      <LoadingText />
    </div>
    <div class="mt-4 flex-auto overflow-auto" v-else-if="$slots['default']">
=======
      class="flex flex-col items-center justify-center flex-auto mt-4 rounded-md"
    >
      <LoadingText />
    </div>
    <div class="flex-auto mt-4 overflow-auto" v-else-if="$slots['default']">
>>>>>>> 9165654b (feat: first commit)
      <slot></slot>
    </div>
  </div>
</template>
<script>
import LoadingText from './LoadingText.vue'
export default {
  name: 'Card',
<<<<<<< HEAD
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
  },
=======
  props: ['title', 'subtitle', 'loading'],
>>>>>>> 9165654b (feat: first commit)
  components: {
    LoadingText,
  },
}
</script>
