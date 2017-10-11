import Vue from 'vue'
import Router from 'vue-router'

// Components
import Home from '../components/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      // props: { pageContentID: 383 }
    }
  ],
  mode: 'history',
  base: '',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
