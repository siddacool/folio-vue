import { createWebHashHistory, createRouter } from 'vue-router';

import { isDevelopment } from 'helpers/utils';
import landingRoutes from './landing';
import adminRoutes from './admin';
import NotFound from 'pages/NotFound.vue';

const adminRoutesFilter = isDevelopment ? adminRoutes : [];

const routes = [
  ...landingRoutes,
  ...adminRoutesFilter,
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
