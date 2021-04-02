<template>
  <Card no-padding>
    <div class="pb-4">
      <div>
        <slot name="header"></slot>
      </div>

      <table class="table-auto w-full">
        <tbody>
          <tr class="border-b border-gray-200">
            <Th v-for="column in columns" :key="column.id">
              {{ column.displayName ? column.displayName : '' }}
            </Th>
          </tr>

          <TableCols :items="items" :columns="columns" :key-field="keyField" />
        </tbody>
      </table>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { defineProps } from 'vue';
import TableCols from './TableCols.vue';
import Th from './TableTh.vue';
import Card from './Card.vue';

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
