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
        path: 'images/:id',
        name: 'Images Edit',
        component: () => import('pages/admin/ImagesEdit.vue'),
        meta: {
          excludeFromSideBar: true,
        },
      },
      {
        path: 'home-slides',
        name: 'Home Slides',
        component: () => import('pages/admin/HomeSlides.vue'),
      },
    ],
  },
];
