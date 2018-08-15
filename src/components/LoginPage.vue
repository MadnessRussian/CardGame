<template id="login-template">
    <div class="main-login">
        <div class="container-center">
            <div class="title-login">
                Для участия в игре введите ваше имя
            </div>
            <input type="text" class="login-input"/>
            <div class="login-desc">
                имя будут видеть другие игроки
            </div>
            <div class="desc-button">
                <router-link to="/">
                    <button>Продолжить!</button>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'LoginPage',
    data: function () {
      return {
      }
    }
  }
</script>
<style scoped>
</style>
