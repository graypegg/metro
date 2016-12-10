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
        options: {}
      },
      mysql: {
        online: null,
        options: {}
      },
      nginx: {
        online: null,
        options: {}
      }
    }
  }
  commit('ADD_PROJECT', opts)
}
