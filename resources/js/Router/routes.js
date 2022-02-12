const routes = [
  {
    path: '',
    component: () => import('../Pages/Home.vue'),
    name: 'home'
  },
  {
    path: '/client/add',
    component: () => import('../Pages/AddClient.vue'),
    name: 'add-client'
  },
  {
    path: '/client/edit/:id',
    component: () => import('../Pages/EditClient.vue'),
    name: 'edit-client'
  },
]

export default routes;
