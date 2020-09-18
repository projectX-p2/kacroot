import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
    scoreboard: [],
    players: []
  },
  mutations: {

  },
  actions: {
    SOCKET_getQuestion () {
      this.$socket.emit('getQuestions')
    }
  },
  modules: {
  }
})
