<template>
  <nav v-if="store.showMenu" class="w-52 pt-3 shadow-md relative z-20">
    <ul>
      <li
        v-for="route in routes"
        :key="route.name"
        class="py-3 px-6 cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors"
        :class="
          routeCurrunt.name === route.name ? 'font-medium text-gray-800' : ''
        "
        @click="() => handleRouteClick(route.path)"
      >
        {{ route.name }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useMainAdminStore } from 'stores/admin/main';
import { useRouter, useRoute } from 'vue-router';

const store = useMainAdminStore();

const router = useRouter();
let routes = router
  .getRoutes()
  .filter(
    (r) =>
      r.path.startsWith('/admin') &&
      !(r.meta && r.meta.excludeFromSideBar) &&
      r.name !== 'Dashbaord',
  );

const dahsbaordRoute = router.getRoutes().find((r) => r.name == 'Dashbaord');

routes = [dahsbaordRoute, ...routes];
const routeCurrunt = useRoute();

const handleRouteClick = (path) => {
  router.push(path);
};
</script>
