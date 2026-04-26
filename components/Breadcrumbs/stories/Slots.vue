<script setup lang="ts">
import { Breadcrumbs } from 'frappe-ui'
import LucideHouse from 'lucide-vue-next'
import LucideList from 'lucide-vue-next'
import LucideView from 'lucide-vue-next'
</script>

<template>
  <Breadcrumbs
    :items="[
      { label: 'Home', icon: LucideHouse, route: { name: 'Home' } },
      { label: 'Views', icon: LucideView, route: '/components' },
      {
        label: 'List',
        icon: LucideList,
        route: '/components/breadcrumbs',
      },
    ]"
  >
    <template #prefix="{ item }">
      <component :is="item.icon" class="size-4 mx-2" />
    </template>
  </Breadcrumbs>
</template>
