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
    ],
  },
];
