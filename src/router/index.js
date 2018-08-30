import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Login from '@/components/LoginPage'
import Game from '@/components/GamePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: Login
    },
    {
      path: '/game',
      name: 'GamePage',
      component: Game
    }
  ]
})
