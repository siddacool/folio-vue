<template>
  <div class="grid grid-flow-row gap-4 py-6 px-6">
    <page-h1 class="flex">
      <Button v-if="backButton" class="mr-1" @click="emit('backPress')">
        <arrow-left />
      </Button>
      {{ title }}
    </page-h1>
    <slot />
  </div>
</template>

<script setup>
import { defineProps, defineEmit } from 'vue';

import PageH1 from 'components/AdminPageH1.vue';
import Button from 'components/ui/Button.vue';
import ArrowLeft from 'components/icons/ArrowLeft.vue';

const emit = defineEmit();

defineProps({
  title: {
    type: String,
    default: '',
  },
  backButton: {
    type: Boolean,
    default: false,
  },
});
</script>
