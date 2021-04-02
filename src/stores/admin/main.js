import { defineStore } from 'pinia';

export const useMainAdminStore = defineStore({
  id: 'main-admin',
  state: () => ({
    showMenu: true,
  }),
  actions: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
});
