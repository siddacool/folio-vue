<template>
  <td
    class="text-left p-2 text-sm"
    :class="firstChild ? 'pl-4' : ''"
    :style="`min-width: ${minWidth}px`"
  >
    <slot />
  </td>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  minWidth: {
    type: Number,
    default: 40,
  },
  firstChild: {
    type: Boolean,
    default: false,
  },
});
</script>
