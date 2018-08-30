<template id="game-template">
    <div class="game-wrapper">
        <div class="game-rate">
            {{gameScore}}
        </div>
        <div class="game-title">
            {{ gameTitle }}
        </div>
        <div class="cards">
            <div v-for='item in cards' class="cards-item" v-bind:key="item.index" v-on:click="selectItem(item)">
                <div class="flip-container" v-bind:class="{ 'flip-container-selected': !item.selected }">
                    <div class="flipper" v-bind:class="{ 'no-display': !item.visible }">
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
        gameTitle: 'У вас 3 секунды чтобы запомнить карты',
        score: 0,
        cards: [],
        selected: []
      }
    },
    computed: {
      gameScore: function () {
        return this.score + ' баллов'
      }
    },
    methods: {
      selectItem (item) {
        if (!item.selected && this.selected.length <= 1) {
          item.selected = !item.selected
          this.gameTitle = 'Откройте еще карту';
          this.selected.push(item)
          if (this.selected.length === 2) {
            if (this.selected[0].id === this.selected[1].id) {
              this.gameTitle = 'Вы угадали!'
              setTimeout(function () {
                this.cards[this.selected[0].index].visible = false
                this.cards[this.selected[1].index].visible = false
                this.selected = []
                this.score += 1
                this.gameTitle = 'Откройте карту';
              }.bind(this), 1000)
            } else {
              this.gameTitle = 'Вы не угадали!'
              setTimeout(function () {
                this.score -= 1
                this.selected = []
                this.hide()
              }.bind(this), 1000)
            }
          }
        }
      },
      generateCards () {
        // карт у нас 28 - делим на два = 14 пар карт нам нужно
        // из 32 карточной колоды нам нужно выбрать 14 пар
        this.cards = []

        var cards_list = []
        var index
        while (cards_list.length !== 28) {
          index = Math.floor(Math.random() * 32 + 1)
          if (!this.find(cards_list, index)) {
            cards_list.push({
              src: '../static/img/' + index + '.jpg',
              id: index,
              index: 0,
              selected: true,
              visible: true
            })
            cards_list.push({
              src: '../static/img/' + index + '.jpg',
              id: index,
              index: 0,
              selected: true,
              visible: true
            })
          }
        }
        // 14 пар выбрали - нужно раскидать по парам
        while (this.cards.length !== 28) {
          index = Math.floor(Math.random() * cards_list.length)
          var obj = cards_list[index]
          obj.index = this.cards.length
          this.cards.push(obj)
          cards_list.splice(index, 1)
        }
      },
      find: function (source, id) {
        // поиск по массиву, решил не юзать lodash
        for (var i = 0; i < source.length; i++) {
          if (source[i].id === id) {
            return true
          }
        }
        return false
      },
      hide: function () {
        // поиск по массиву, решил не юзать lodash
        this.gameTitle = 'Откройте карту';
        for (var i = 0; i < this.cards.length; i++) {
          if (this.cards[i].selected === true) {
            this.cards[i].selected = false
          }
        }
      }
    },
    created () {
      this.generateCards()
      setTimeout(function () {
        this.hide()
      }.bind(this), 3000)
    }
  }
</script>
