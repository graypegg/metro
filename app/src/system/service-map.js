export default function (service) {
  var map = {
    'Apache': 'httpd',
    'MySQL': 'mysql',
    'Nginx': 'nginx'
  }

  return map[service] || null
}
