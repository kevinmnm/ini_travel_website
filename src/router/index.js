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
      component: () => import(/* webpackChunkName: "plan" */ '../views/Plan.vue')
   },
   {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
   },
   {
      path: '/places',
      name: 'Places',
      component: () => import(/* webpackChunkName: "places" */ '../views/Places.vue')
   },
   {
      path: '/culture',
      name: 'Culture',
      component: () => import(/* webpackChunkName: "culture" */ '../views/Culture.vue')
   },
   {
      path: '/policy/:id',
      name: 'Policy',
      component: () => import(/* webpackChunkName: "culture" */ '../views/Policy.vue')
   }
];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
});

export default router
