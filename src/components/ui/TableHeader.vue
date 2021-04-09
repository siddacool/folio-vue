<template>
  <div class="flex sticky top-0 left-0 bg-white">
    <Th
      v-for="(column, indexCol) in columns"
      :key="column.id"
      :first-child="indexCol === 0"
      :min-width="column.minWidth ? column.minWidth : null"
      :max-width="column.maxWidth ? column.maxWidth : null"
    >
      {{ column.displayName ? column.displayName : '' }}
    </Th>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Th from './TableTh.vue';

defineProps({
  columns: {
    type: Array,
    default: [],
  },
});
</script>
