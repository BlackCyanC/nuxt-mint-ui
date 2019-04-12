import Vuex from 'vuex'

let store = () => new Vuex.Store({
  state: {
    token: '123123'
  },
  mutations: {
    valChange(state, { type, val }) {
      state[type] = val
    }
  }
})

export default store