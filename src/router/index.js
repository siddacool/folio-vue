import { createWebHashHistory, createRouter } from 'vue-router';

import landingRoutes from './landing';

const routes = [...landingRoutes];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
