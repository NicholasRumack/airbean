import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MenuPage from '../views/MenuPage.vue'
import AboutPage from '../views/AboutPage.vue'
import Status from '../views/Status.vue'
import Profile from '../views/Profile.vue'

import Landing from '../components/Landing.vue'

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
    path: '/status',
    name: 'Status',
    component: Status,
	meta: {
		requiresAuth: true
	}
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
  })
  router.beforeEach((to, from, next) => {
	if(to.meta.requiresAuth){
		if (localStorage.User){
			next()
	}
	else{
		if (from !== '/Profile')
		next('/Profile') 
	}
	}else{
		next()
}
  })
  export default router
