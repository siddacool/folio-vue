<template>
  <div
    class="bg-white shadow rounded-md overflow-x-auto overscroll-y-auto"
    :class="noPadding ? '' : 'p-4'"
  >
    <slot />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  noPadding: {
    type: Boolean,
    default: false,
  },
});
</script>
