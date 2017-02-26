import settings from 'electron-settings'

export default function () {
  settings.defaults({
    setup: true,
    docker: {
      connection: {
        protocol: 'socket',
        host: '/var/run/docker.sock',
        port: 0
      }
    },
    projects: []
  })
}
