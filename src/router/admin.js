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
        path: 'images',
        name: 'Images',
        component: () => import('pages/admin/Images.vue'),
      },
      {
        path: 'home-slides',
        name: 'Home Slides',
        component: () => import('pages/admin/HomeSlides.vue'),
      },
    ],
  },
];
