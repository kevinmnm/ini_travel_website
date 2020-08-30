import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

let firebase = require('firebase/app');

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
      path: '/culture/:id',
      name: 'Culture',
      component: () => import(/* webpackChunkName: "culture" */ '../views/Culture.vue')
   },
   {
      path: '/policy/:id',
      name: 'Policy',
      component: () => import(/* webpackChunkName: "culture" */ '../views/Policy.vue')
   },
   {
      path: '/*',
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
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

router.beforeEach((to, from, next) => {
   if (to.name === 'Home' || to.name === 'Login' || to.name === '404'){
      next();
   } else {
      let loggedin = firebase.auth().currentUser;

      if (loggedin){
         if (loggedin.emailVerified){
            next();
         } else {
            alert('Please verify your email.');
            next({name: 'Login'});
         }
      } else {
         alert('Please log in to view contents');
         next({name: 'Login'});
      }
   }
});

export default router
