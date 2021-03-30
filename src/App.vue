<template>
  <Hello />
</template>

<script setup>
import db from 'pack-pack/db.json';
import Hello from 'components/Hello.vue';

console.log(process.env.NODE_ENV);

fetch('http://localhost:8080/homepage-slides')
  .then((response) => response.json())
  .then((data) => console.log(data));
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
