const state = {
  list: []
}

const mutations = {
  ADD_PROJECT (state, opts) {
    state.list.push(opts)
  },
  UP (state, opts) {
    var project = state.list.filter((project) => project.uid === opts.uid)[0]
    project.services[opts.service].online = true
  },
  DOWN (state, opts) {
    var project = state.list.filter((project) => project.uid === opts.uid)[0]
    project.services[opts.service].online = false
  },
  DEINIT (state, opts) {
    var project = state.list.filter((project) => project.uid === opts.uid)[0]
    project.services[opts.service].online = null
  }
}

export default {
  state,
  mutations
}
