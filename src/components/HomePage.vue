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
          <tr v-for='player in players' :key="player.id">
            <td>{{player.position}}</td>
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
  export default {
    name: 'HomePage',
    data: function () {
      return {
        players: [
          {position: 1, name: 'Вася', score: '14', time: '3:32'},
          {position: 2, name: 'Дима', score: '12', time: '3:45'},
          {position: 3, name: 'Саша', score: '10', time: '5:17'}
        ]
      }
    }
  }
</script>
