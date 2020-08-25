import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home
   },
   {
      path: '/plan',
      name: 'Plan',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Plan.vue')
   },
   {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
   },
   // {
   //    path: '/signup',
   //    name: 'Signup',
   //    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
   // },
   {
      path: '/places',
      name: 'Places',
      compnents: () => import(/* webpackChunkName: "places" */ '../views/Places.vue')
   },
   {
      path: '/culture',
      name: 'Culture',
      compnents: () => import(/* webpackChunkName: "culture" */ '../views/Culture.vue')
   },
   {
      path: '/policy',
      name: 'Policy',
      compnents: () => import(/* webpackChunkName: "policy" */ '../views/Policy.vue')
   }
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

export default router
