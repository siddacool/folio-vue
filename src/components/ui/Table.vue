<template>
  <Card no-padding>
    <div class="pb-4">
      <div>
        <slot name="header"></slot>
      </div>

      <table class="table-auto w-full">
        <tbody>
          <tr class="border-b border-gray-200">
            <Th
              v-for="(column, indexCol) in columns"
              :key="column.id"
              :first-child="indexCol === 0"
            >
              {{ column.displayName ? column.displayName : '' }}
            </Th>
          </tr>
          <tr
            v-for="item in items"
            :key="item[keyField]"
            class="border-b border-gray-200"
          >
            <Td
              v-for="(column, indexCol) in columns"
              :key="column.id"
              :first-child="indexCol === 0"
            >
              <slot name="td" :row="item" :colName="column.id">yyy</slot>
            </Td>
          </tr>
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
import Th from './TableTh.vue';
import Td from './TableTd.vue';
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
