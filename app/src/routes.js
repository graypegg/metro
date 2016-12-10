export default [
  {
    path: '/',
    name: 'dash',
    component: require('./views/Dash.vue')
  },
  {
    path: '/service/:name',
    name: 'service',
    component: require('./views/Service.vue')
  }
]
