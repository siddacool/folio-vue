<template>
  <Card no-padding>
    <div class="pb-4">
      <div>
        <slot name="header"></slot>
      </div>

      <div class="w-full">
        <div class="overflow-y-auto overflow-x-auto" style="max-height: 600px">
          <TableHeader :columns="columns" />
          <div v-for="item in items" :key="item[keyField]" class="flex">
            <Td
              v-for="(column, indexCol) in columns"
              :key="column.id"
              :first-child="indexCol === 0"
              :min-width="column.minWidth ? column.minWidth : null"
              :max-width="column.maxWidth ? column.maxWidth : null"
            >
              <slot name="td" :row="item" :colName="column.id"></slot>
            </Td>
          </div>
        </div>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';
import TableHeader from './TableHeader.vue';
import Td from './TableTd.vue';
import Card from './Card.vue';

const props = defineProps({
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

toRefs(props);
</script>
