<template>
  <header
    class="the-admin-header flex shadow-md h-14 z-20 bg-white px-6 items-center w-full relative"
  >
    <button class="mr-4" @click="() => store.toggleMenu()">
      <icon-menu />
    </button>

    <h2 class="text-xl font-medium text-gray-600">Folio HQ</h2>

    <router-link to="/" target="_blank">Home</router-link>
  </header>
</template>

<script setup>
import { useMainAdminStore } from 'stores/admin/main';
import iconMenu from 'components/icons/Menu.vue';

const store = useMainAdminStore();
</script>
