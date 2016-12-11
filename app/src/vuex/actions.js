import shortid from 'shortid'

export const createProject = ({ commit }, details) => {
  let uid = shortid.generate()

  let opts = {
    uid,
    name: details.name,
    directory: details.directory,
    services: {
      apache: {
        online: null,
        options: {},
        name: 'apache'
      },
      mysql: {
        online: null,
        options: {},
        name: 'mysql'
      },
      nginx: {
        online: null,
        options: {},
        name: 'nginx'
      }
    }
  }
  commit('ADD_PROJECT', opts)
}
