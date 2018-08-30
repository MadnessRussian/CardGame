<template id="game-template">
    <div class="game-wrapper">
        <div class="game-rate">
            0 баллов
        </div>
        <div class="game-title">
            {{ gameTitle }}
        </div>
        <div class="cards">
            <div v-for='item in cards'  class="cards-item" v-bind:key="item">
                <div class="flip-container">
                    <div class="flipper">
                        <img src="../assets/back.jpg" class="front">
                        <img v-bind:src="item.src" class="back">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'GamePage',
    data: function () {
      return {
        gameTitle: 'Выберите карту',
        cards: []
      }
    },
    methods: {
      generateCards () {
        // карт у нас 28 - делим на два = 14 пар карт нам нужно
        // из 32 карточной колоды нам нужно выбрать 14 карт
        // генерируем массив
        this.cards = [];
        while (this.cards.length !== 28) {
          var index = Math.floor(Math.random() * 32 + 1);
          if (!this.find(this.cards, index)) {
            this.cards.push({src: '../static/img/' + index + '.jpg', id: index})
          }
        }
      },
      find: function (source, id) {
        // поиск по массиву, решил не юзать lodash
        for (var i = 0; i < source.length; i++) {
          if (source[i].id === id) {
            return true;
          }
        }
       return false
      }
    },
    created () {
      this.generateCards()
    }
  }
</script>
