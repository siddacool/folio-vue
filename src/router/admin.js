export default [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('views/Admin.vue'),
    meta: {
      excludeFromSideBar: true,
    },
    children: [
      {
        path: '',
        name: 'Dashbaord',
        component: () => import('pages/admin/Dashbaord.vue'),
      },
      {
        path: 'gallary',
        name: 'Gallary',
        component: () => import('pages/admin/Gallary.vue'),
      },
      {
        path: 'home-slides',
        name: 'Home Slides',
        component: () => import('pages/admin/HomeSlides.vue'),
      },
    ],
  },
];
