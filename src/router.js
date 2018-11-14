import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/about/about.component.vue')
    },
    {
      path: '/base',
      name: 'base',
      component: () => import(/* webpackChunkName: "base" */ './views/Base.vue')
    },
    {
      path: '/jim',
      name: 'jim',
      component: () => import(/* webpackChunkName: "jim" */ './views/Jim.vue')
    },
    {
      path: '/starter',
      name: 'starter',
      component: () => import(/* webpackChunkName: "starter" */ './views/Starter.vue')
    },
    {
      path: '/techasia',
      name: 'techasia',
      component: () => import(/* webpackChunkName: "techasia" */ './views/Techasia.vue')
    },
    {
      path: '/old-portfolio',
      name: 'old-portfolio',
      component: () => import(/* webpackChunkName: "old-portfolio" */ './views/OldPortfolio.vue')
    }

  ]
})
