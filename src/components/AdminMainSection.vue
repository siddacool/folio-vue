<template>
  <div class="grid grid-flow-row gap-4 py-6 px-6">
    <page-h1>{{ title }}</page-h1>
    <slot />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

import PageH1 from 'components/AdminPageH1.vue';

defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>
