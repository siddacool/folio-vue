<template>
  <div class="flex flex-wrap h-screen">
    <Header />
    <Drawer />
    <main class="bg-gray-200 p-8 flex-1 h-full">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Header from 'components/TheAdminHeader.vue';
import Drawer from 'components/TheAdminDrawer.vue';
</script>

<style scoped>
main {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
