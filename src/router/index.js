import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CharacterDetail from '../views/CharacterDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/character/:id',
    name: 'CharacterDetail',
    props: true,
    component: CharacterDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
