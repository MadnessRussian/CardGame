<template id="home-template">
  <div class="main">
    <div class="logo">
      <img src="../assets/logo.png" class="logo_img"/>
    </div>
    <div class="title">
      Игра "Memory"
    </div>
    <div class="content">
      <div class="description">
        Это игра на тренировку памяти! <br>
        В ней необходимо запомнить расположение карт на столе, а потом открыть одинаковые пары как можно быстрее с наименьшим количеством ошибок.
      </div>
      <div class="desc-button">
        <router-link to="/login">
          <button>Начать игру!</button>
        </router-link>
      </div>
    </div>
    <div class="rating">
      <div class="rating-title">Рейтинг игроков</div>
      <div class="rating-table">
        <table>
          <thead>
          <th>Место</th>
          <th>Имя</th>
          <th>Счет</th>
          <th>Время</th>
          </thead>
          <tbody>
          <tr v-for='(player, index) in players' :key="player.id">
            <td>{{index+1}}</td>
            <td>{{player.name}}</td>
            <td>{{player.score}}</td>
            <td>{{player.time}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../store/store.vue'
  export default {
    name: 'HomePage',
    store,
    data: function () {
      return {
        players: [
        ]
      }
    },
    created () {
      this.players = this.$store.getters.getPlayers;
    }
  }
</script>
