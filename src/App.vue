<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
}

.fade-enter-active, .fade-leave-active {
  transition: all .9s;
}
.fade-enter , .fade-leave {
  opacity: 0;
}
</style>
