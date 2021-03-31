export default [
  {
    path: '/',
    name: 'Landing',
    component: () => import('views/Landing.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/Home.vue'),
      },
      {
        path: 'album/:id',
        name: 'Album',
        component: () => import('pages/Album.vue'),
      },
    ],
  },
];
