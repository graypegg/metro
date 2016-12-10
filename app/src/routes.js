export default [
  {
    path: '/',
    name: 'dash',
    component: require('./views/Dash.vue')
  },
  {
    path: '/apache',
    name: 'apache',
    component: require('./views/services/Apache.vue')
  },
  {
    path: '/mysql',
    name: 'mysql',
    component: require('./views/services/MySQL.vue')
  },
  {
    path: '/nginx',
    name: 'nginx',
    component: require('./views/services/Nginx.vue')
  }
]
