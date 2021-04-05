<template>
  <td class="text-left p-2 text-sm" :class="firstChild ? 'pl-4' : ''">
    <slot />
  </td>
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
