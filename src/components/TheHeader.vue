<template>
  <header>
    Folio
    <router-link v-if="isDevelopment" to="/admin" target="_blank">
      Admin
    </router-link>
  </header>
</template>

<script setup>
import { isDevelopment } from 'helpers/utils';
</script>
