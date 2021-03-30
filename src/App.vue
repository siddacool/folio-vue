<template>Hi</template>

<script setup>
import homeSlidesApi from 'api/home-slides';

homeSlidesApi
  .getHomeSlides()
  .then((d) => {
    console.log(d);
  })
  .catch((e) => {
    console.log(e);
  });
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
