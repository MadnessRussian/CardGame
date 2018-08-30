<script>
  import Vuex from 'vuex'
  import Vue from 'vue'

  Vue.use(Vuex)
  const store = new Vuex.Store({
    state: {
      player: {
        name: '',
        score: '',
        time: ''
      },
      players: []
    },
    mutations: {
      saveName: function (state, name) {
        this.state.player.name = name
      },
      saveScore: function (state, score) {
        this.state.player.score = score
      },
      saveTime: function (state, time) {
        var minutes = Math.floor((Math.floor(time / 600) / 60))
        var sec = Math.floor((time - minutes * 60 * 600) / 600)
        this.state.player.time = minutes + ':' + sec
      },
      savePlayer: function (state, time) {
        this.state.players.push(Object.assign({}, this.state.player))
      }
    },
    getters: {
      getName: (state, getters) => {
        return state.player.name
      },
      getScore: (state, getters) => {
        return state.player.score
      },
      getTime: (state, getters) => {
        return state.player.time
      },
      getPlayers: (state, getters) => {
        return state.players.filter(player => player.score)
      }
    }

  })
  export default store
</script>
