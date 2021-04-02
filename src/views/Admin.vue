<template>
  <div class="flex flex-wrap h-screen">
    <Header />
    <Drawer />
    <main class="bg-gray-200" :class="store.showMenu ? 'flex-1' : 'w-full'">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { useMainAdminStore } from 'stores/admin/main';
import Header from 'components/TheAdminHeader.vue';
import Drawer from 'components/TheAdminDrawer.vue';

const store = useMainAdminStore();
</script>

<style scoped>
main {
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100% - 56px);
}
</style>
