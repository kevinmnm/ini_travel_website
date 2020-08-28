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
      path: '/plan/:id',
      name: 'Plan',
      component: () => import(/* webpackChunkName: "plan" */ '../views/Plan.vue')
   },
   {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
   },
   {
      path: '/places:id',
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
   scrollBehavior(to, from, savedPosition){
      if (savedPosition){
         return savedPosition
      } else {
         let position = {};
         if (to.hash){
            position.selector = to.hash;
            position.offset = { y: 60 };
            if (document.querySelector(to.hash)){
               return position
            }
            return false
         }
      }
   },
   routes
});

export default router
