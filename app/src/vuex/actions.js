import shortid from 'shortid'

export const createProject = ({ commit }, details) => {
  let uid = shortid.generate()

  let opts = {
    uid,
    name: details.name,
    directory: details.directory,
    services: []
  }
  commit('ADD_PROJECT', opts)
}
