<template>
  <div
    class="border-b border-gray-200 text-left p-2 text-sm flex-1"
    :class="firstChild ? 'pl-8' : ''"
    :style="`${minWidth ? `min-width: ${minWidth}px;` : ''} ${
      maxWidth ? `max-width: ${maxWidth}px;` : ''
    }`"
  >
    <slot />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  firstChild: {
    type: Boolean,
    default: false,
  },
  minWidth: {
    type: Number,
  },
  maxWidth: {
    type: Number,
  },
});
</script>
