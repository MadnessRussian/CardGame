<template id="game-template">
    <div class="game-wrapper">
        <vue-modaltor :visible="open" @hide="hideModal" class="modal">
            <p>У вас будет 3 секунды, чтобы запомнить расположение карт.</p>
            <div class="desc-button">
                <button @click="open=hideModal()">Начать</button>
            </div>
        </vue-modaltor>
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
  import store from '../store/store.vue'
  export default {
    name: 'GamePage',
    store,
    data: function () {
      return {
        gameTitle: '',
        score: 0,
        timer: 0,
        selectedPairs: 0,
        cards: [],
        selected: [],
        open: false
      }
    },
    computed: {
      gameScore: function () {
        return this.score + ' баллов'
      }
    },
    methods: {
      hideModal () {
        this.open = false;
        this.hide(true);
        this.beginGame();
      },
      showModal () {
        this.open = true
      },
      selectItem (item) {
         // Щелкаем на карту и проверяем, выбрана она или нет, если нет то заносим ее в массив выбранных
         // Когда длинна массива выбранных равана двум проверяем - совпадают они или нет, так же считаем количество выбранных пар и показываем счет
        if (!item.selected && item.visible && this.selected.length <= 1) {
          item.selected = !item.selected;
          this.gameTitle = 'Откройте еще карту';
          this.selected.push(item);
          if (this.selected.length === 2) {
            if (this.selected[0].id === this.selected[1].id) {
              this.gameTitle = 'Вы угадали!';
              this.selectedPairs += 1;
              setTimeout(function () {
                this.cards[this.selected[0].index].visible = false;
                this.cards[this.selected[1].index].visible = false;
                this.selected = [];
                // Сделал  +2 балла - так лучше
                this.score += 2;
                this.gameTitle = 'Откройте карту';
                if (this.selectedPairs === 14) {
                  this.timer = new Date().getTime() - this.timer;
                  this.$store.commit('saveScore', this.score);
                  this.$store.commit('saveTime', this.timer);
                  this.$store.commit('savePlayer');
                  this.$router.push({path: '/score'})
                }
              }.bind(this), 1000)
            } else {
              this.gameTitle = 'Вы не угадали!';
              setTimeout(function () {
                this.score -= 1;
                this.selected = [];
                this.hide(false);
              }.bind(this), 1000);
            }
          }
        }
      },
      generateCards () {
        // карт у нас 28 - делим на два = 14 пар карт нам нужно
        // из 32 карточной колоды нам нужно выбрать 14 пар
        this.cards = [];

        var cards_list = [];
        var index;
        while (cards_list.length !== 28) {
          index = Math.floor(Math.random() * 32 + 1);
          if (!this.find(cards_list, index)) {
            cards_list.push({
              src: '../static/img/' + index + '.jpg',
              id: index,
              index: 0,
              selected: true,
              visible: true
            });
            cards_list.push({
              src: '../static/img/' + index + '.jpg',
              id: index,
              index: 0,
              selected: true,
              visible: true
            })
          }
        }
        // 14 пар выбрали (массив из 28 карт) - нужно раскидать по парам
        // Берем случайную карту из этого массива -  переносим в массив карт и убираем из основного
        while (this.cards.length !== 28) {
          index = Math.floor(Math.random() * cards_list.length);
          var obj = cards_list[index];
          obj.index = this.cards.length;
          this.cards.push(obj);
          cards_list.splice(index, 1);
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
      hide: function (flag) {
        // поиск по массиву, решил не юзать lodash
        this.gameTitle = 'Откройте карту';
        for (var i = 0; i < this.cards.length; i++) {
          if (this.cards[i].selected === !flag) {
            this.cards[i].selected = flag
          }
        }
      },
      beginGame: function () {
        this.timer = new Date().getTime();
        var time = 3;
        this.gameTitle = 'У ваc осталось ' + time + ' секунды чтобы запомнить карты';
        var timerId = setInterval(function () {
          time -= 1;
          this.gameTitle = 'У ваc осталось ' + time + ' секунды чтобы запомнить карты'
        }.bind(this), 1000);
        setTimeout(function () {
          clearInterval(timerId);
          this.hide(false)
        }.bind(this), 3000)
      },
      showPopup: function () {
      }
    },
    created () {
       // При запуске страницы генерируем карты и показываем попап
      this.generateCards();
      this.hide(false);
      setTimeout(function () {
        this.showModal()
      }.bind(this), 500)
    }
  }
</script>
