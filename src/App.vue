<template>
  <button @click="handleGetHomeSlides">Yo</button>

  <button @click="handleGetHomeSlideRemove">Delete</button>

  {{ homeSlides }}
</template>

<script setup>
import { ref } from 'vue';
import homeSlidesApi from './api/home-slides';

const homeSlides = ref([]);

const handleGetHomeSlides = async () => {
  try {
    const homeSlidesFetched = await homeSlidesApi.getHomeSlides();

    homeSlides.value = homeSlidesFetched;
  } catch (e) {
    console.dir(e);
  }
};

const handleGetHomeSlideRemove = async () => {
  try {
    await homeSlidesApi.removeHomeSlideById(1);
    const homeSlidesFetched = await homeSlidesApi.getHomeSlides();

    homeSlides.value = homeSlidesFetched;
  } catch (e) {
    console.dir(e);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
