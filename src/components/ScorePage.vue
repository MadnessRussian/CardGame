<template id="score-template">
    <div class="main-login">
        <div class="container-center">
            <div class="title-login">
                Игра окончена!
            </div>

            <div class="score-text">
                Ваше имя: {{name}}
            </div>
            <div class="score-text">
                Баллы: {{score}}
             </div>
            <div class="score-text">
                Время:  {{time}} минут
             </div>

            <div class="desc-button">
                <router-link to="/">
                    <button>Вернуться на главную</button>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
  import store from '../store/store.vue'

  export default {
    name: 'ScorePage',
    store,
    data: function () {
      return {
        name: '',
        score: 0,
        time: 0
      }
    },
    created () {
      this.name = this.$store.getters.getName;
      this.score = this.$store.getters.getScore;
      this.time = this.$store.getters.getTime;
    }
  }
</script>
<style scoped>
</style>
