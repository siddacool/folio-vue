import { defineStore } from 'pinia';

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    counter: 0,
    name: 'Eduardo',
  }),
  actions: {
    reset() {
      this.counter = 0;
    },
  },
});
