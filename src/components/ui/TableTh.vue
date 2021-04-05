<template>
  <th class="text-left p-2 text-xs" :class="firstChild ? 'pl-4' : ''">
    <slot />
  </th>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  firstChild: {
    type: Boolean,
    default: false,
  },
});
</script>
