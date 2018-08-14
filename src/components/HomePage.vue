<template>
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
        <button>Начать игру!</button>
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
          <tr v-for='player in players'>
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
          { position: 1, name: 'Вася', score: '14', time: '3:32' },
          { position: 2, name: 'Дима', score: '12', time: '3:45' },
          { position: 3, name: 'Саша', score: '10', time: '5:17' }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    min-width: 100%;
    font-family: 'Roboto Condensed', sans-serif;
  }

  .logo {
    width: 100%;
    text-align: center;
  }

  .logo_img {
    width: 70%;
    max-width: 400px;
  }

  .title {
    width: 100%;
    text-align: center;
    font-size: 3em;
  }

  .content {
    padding: 5%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .description {
    font-size: 1em;
    flex: 2;
    min-width: 300px;
    padding-bottom: 2%;
  }

  .desc-button {
    padding-left: 2%;
    text-align: center;
    flex: 1;
  }

  .desc-button button {
    padding: 20px;
    font-size: 2em;
    background: #42b983;
    border: none;
    color: #fff;
    cursor: pointer;
  }

  .desc-button button:focus, .desc-button button:hover, .desc-button button:active {
    background: #2c3e50;
  }

  .rating {
    text-align: center;
  }

  .rating-title {
    font-size: 2em;
  }

  .rating-table {
    width: 100%;
  }

  .rating-table table {
    width: 100%;
    margin: 0 auto;
    max-width: 700px;
  }

  .rating-table table thead th {
    padding: 4%;
  }

</style>
