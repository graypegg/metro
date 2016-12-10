import Docker from 'dockerode'

var sock = new Docker({socketPath: '/var/run/docker.sock'})

export default {
  create () {
    sock.run({
      Image: 'ubuntu',
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
