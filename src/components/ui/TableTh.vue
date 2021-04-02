<template>
  <th class="text-left p-2 text-xs" :style="`min-width: ${minWidth}px`">
    <slot />
  </th>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  minWidth: {
    type: Number,
    default: 40,
  },
});
</script>
