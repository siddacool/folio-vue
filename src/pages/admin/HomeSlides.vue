<template>
  Home slides
  <button :disabled="store.isSlidesFetching" @click="addEntry">
    add entry
  </button>
  <ul>
    <li v-for="slide in store.slides" :key="slide.id">
      {{ slide.name }}
      {{ slide.url }}
    </li>
  </ul>
</template>

<script setup>
import { onMounted } from 'vue';
import { useHomeSlidesAdminStore } from 'stores/admin/home-slides';
const store = useHomeSlidesAdminStore();

onMounted(() => {
  store.getHomeSlides();
});

const addEntry = () => {
  store.addHomeSlide({
    name: 'Gaga',
    url: 'wah',
  });
};
</script>
