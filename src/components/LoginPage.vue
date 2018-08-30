<template id="login-template">
    <div class="main-login">
        <div class="container-center">
            <div class="title-login">
                Для участия в игре введите ваше имя
            </div>
            <input type="text" class="login-input" v-model="playerName"/>
            <div class="login-desc" >
                имя будут видеть другие игроки
            </div>
            <div class="desc-button">
                <button @click="startGame()">Продолжить!</button>
            </div>
        </div>

    </div>
</template>

<script>
  import store from '../store/store.vue'
  export default {
    name: 'LoginPage',
    store,
    data: function () {
      return {
        playerName: ''
      }
    },
    methods: {
      startGame: function () {
        this.$store.commit('saveName', this.playerName)
        this.$router.push({path: '/game'})
      }
    }
  }
</script>
