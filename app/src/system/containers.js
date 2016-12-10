import Docker from 'dockerode'
import serviceMap from './service-map.js'

var sock = new Docker({socketPath: '/var/run/docker.sock'})

export default {
  create (service) {
    var image = serviceMap(service)

    sock.run({
      Image: image,
      Cmd: ['/bin/bash'],
      name: 'metro-apache'
    }, function (err, container) {
      console.log(err)
      container.start(function (err, data) {
        console.log(err, data, 'hello!')
      })
    })
  }
}
