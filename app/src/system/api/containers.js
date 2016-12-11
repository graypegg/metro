function init (store, service) {
  console.log('init', service)
  store.commit('UP', {
    uid: this.project.uid,
    service: service.name
  })
}

function deinit (store, service) {
  console.log('init', service)
  store.commit('DEINIT', {
    uid: this.project.uid,
    service: service.name
  })
}

function start (store, service) {
  console.log('start', service)
  store.commit('UP', {
    uid: this.project.uid,
    service: service.name
  })
}

function stop (store, service) {
  console.log('stop', service)
  store.commit('DOWN', {
    uid: this.project.uid,
    service: service.name
  })
}

export { init, deinit, start, stop }

/**
 * import Docker from 'dockerode'
 * var sock = new Docker({socketPath: '/var/run/docker.sock'})
 */
