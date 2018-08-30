<template id="score-template">
    <div class="main-login">
        <div class="container-center">
            <div class="title-login">
                Игра окончена!
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
  export default {
    name: 'ScorePage',
    data: function () {
      return {
      }
    }
  }
</script>
<style scoped>
</style>
