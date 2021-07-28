import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MenuPage from '../views/MenuPage.vue'
import AboutPage from '../views/AboutPage.vue'
import Status from '../views/Status.vue'
import Profile from '../views/Profile.vue'

import Landing from '../components/Landing.vue'
import RegisterForm from '../components/RegisterForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/MenuPage',
    name: 'MenuPage',
    component: MenuPage
  },
  {
    path: '/AboutPage',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/RegisterForm',
    name: 'RegisterForm',
    component: RegisterForm
  },
  {
    path: '/Status',
    name: 'Status',
    component: Status
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  routes
})

export default router
