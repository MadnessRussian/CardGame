<template id="game-template">
    <div class="game-wrapper">
        <div class="game-rate">
            0 баллов
        </div>
        <div class="game-title">
            {{ gameTitle }}
        </div>
        <div class="cards">
            <div v-for='item in cards'  class="cards-item" v-bind:key="item.index">
                <div class="flip-container">
                    <div class="flipper">
                        <img src="../assets/back.jpg" class="back">
                        <img v-bind:src="item.src" class="front">
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
        // из 32 карточной колоды нам нужно выбрать 14 пар
        this.cards = [];

        var cards_list = [];
        var index;
        while (cards_list.length !== 28) {
          index = Math.floor(Math.random() * 32 + 1);
          if (!this.find(cards_list, index)) {
            cards_list.push({src: '../static/img/' + index + '.jpg', id: index, index: 0})
            cards_list.push({src: '../static/img/' + index + '.jpg', id: index, index: 0})
          }
        }

        // 14 пар выбрали - нужно раскидать по парам

        while (this.cards.length !== 28) {
          index = Math.floor(Math.random() * cards_list.length);
          var obj = cards_list[index];
          obj.index = this.cards.length;
          this.cards.push(obj);
          cards_list.splice(index, 1);
        }
        console.log(cards_list);
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
