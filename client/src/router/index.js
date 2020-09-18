import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Lobby from '../views/Lobby'
// import Input from '../views/Input.vue'
import Game from '../views/Game.vue'
import Finish from '../views/Finish.vue'
// import Score from '../views/Score.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/input',
  //   name: 'Input',
  //   component: Input
  // },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  // {
  //   path: '/lobby',
  //   name: 'Lobby',
  //   component: Lobby
  // },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/finish',
    name: 'Finish',
    component: Finish
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
