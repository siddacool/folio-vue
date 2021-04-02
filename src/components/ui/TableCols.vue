<template>
  <tr
    v-for="item in items"
    :key="item[keyField]"
    class="border-b border-gray-200"
  >
    <Td v-for="column in columns" :key="column.id">
      {{ item[column.id] }}
    </Td>
  </tr>
</template>

<script setup>
import { defineProps } from 'vue';
import Td from './TableTd.vue';

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
