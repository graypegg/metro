export default [
  {
    path: '/',
    name: 'dash',
    component: require('./views/Dash.vue')
  },
  {
    path: '/create-project',
    name: 'create-project',
    component: require('./views/CreateProject.vue')
  },
  {
    path: '/apache/:uid',
    name: 'apache',
    component: require('./views/services/Apache.vue')
  },
  {
    path: '/mysql/:uid',
    name: 'mysql',
    component: require('./views/services/MySQL.vue')
  },
  {
    path: '/nginx/:uid',
    name: 'nginx',
    component: require('./views/services/Nginx.vue')
  }
]
