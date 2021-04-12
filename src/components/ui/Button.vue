<template>
  <button
    class="text-base p-1 px-2 rounded outline-none focus:outline-none"
    :class="`${variant === 'solid' ? 'shadow' : ''}
    ${color === 'primary' ? 'bg-gray-800 text-white ' : ''}`"
  >
    <slot />
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'solid'].indexOf(value) !== -1,
  },
  color: {
    type: String,
    default: 'default',
    validator: (value) =>
      ['default', 'white', 'primary', 'secondary', 'safe'].indexOf(value) !==
      -1,
  },
});
</script>
