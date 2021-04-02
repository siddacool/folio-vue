<template>
  <div v-for="column in columns" :key="column.id">
    {{ items[column] ? items[column.id] : '' }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  items: {
    type: Array,
    default: [],
  },
  columns: {
    type: Array,
    default: [],
  },
  keyField: {
    type: String,
    default: 'id',
  },
});
</script>
