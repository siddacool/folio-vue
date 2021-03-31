<template>
  <router-view />
</template>

<script setup>
import { useMainStore } from 'stores/main';
const mainStore = useMainStore();

console.log(mainStore.name);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
