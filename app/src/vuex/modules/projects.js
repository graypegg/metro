const state = {
  list: []
}

const mutations = {
  ADD_PROJECT (state, opts) {
    state.list.push(opts)
  }
}

export default {
  state,
  mutations
}
