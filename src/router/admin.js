export default [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('views/Admin.vue'),
    children: [
      {
        path: '',
        name: 'Dashbaord',
        component: () => import('pages/admin/Dashbaord.vue'),
      },
      {
        path: 'home-slides',
        name: 'Home Slides',
        component: () => import('pages/admin/HomeSlides.vue'),
      },
    ],
  },
];
