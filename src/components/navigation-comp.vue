<template>
   
   <div id="nav">
      <div class="home-wrapper">
         <router-link to="/">
            <img src="../assets/logo.png" alt="logo img" />
         </router-link>
      </div>

      <div class="menu-wrapper">
         <router-link :to="{name: 'Plan', params: {id: 'main'}}">
            <div @mouseenter="expand($event)" @mouseleave='collapse($event)'>
               Plan Your Trip
               <div class='expander' >
                  <router-link :to="{name: 'Plan', params: {id: 'covid'}, hash: '#covid_section'}">COVID-19</router-link>
                  <router-link :to="{name: 'Plan', params: {id: 'visa'}, hash: '#visa_section'}">Visa</router-link>
                  <router-link :to="{name: 'Plan', params: {id: 'essentials'}, hash: '#essentials_section'}">Essentials</router-link>
               </div>
            </div>
         </router-link>

         <router-link :to="{name: 'Places'}">
            <div @mouseenter="expand($event)" @mouseleave='collapse($event)'>
               Places To Go
               <div class='expander'>
                  <router-link :to="{name: 'Places', params: {id: 'islands'}, hash: '#islands_section'}">Islands</router-link>
                  <router-link :to="{name: 'Places', params: {id: 'cities'}, hash: '#cities_section'}">Cities</router-link>
                  <router-link :to="{name: 'Places', params: {id: 'attractions'}, hash: '#attractions_section'}">Attractions</router-link>
               </div>
            </div>
         </router-link>

         <router-link :to="{name: 'Culture'}">
            <div @mouseenter="expand($event)" @mouseleave='collapse($event)'>
               Learn The Culture
               <div class='expander'>
                  <router-link :to="{name: 'Culture'}">About</router-link>
                  <router-link :to="{name: 'Culture'}">Etiquette</router-link>
                  <router-link :to="{name: 'Culture'}">Foods</router-link>
               </div>
            </div>
         </router-link>
      </div>

      <div class="login-wrapper">
         <router-link :to="{name: 'Login'}" class='login'>{{ logged_or_not }}</router-link>
      </div>

      <div class="hamburger-icon">
         <hamburger-icon @expand-nav="expand_nav($event)"></hamburger-icon>
      </div>

         <transition name='small-slide-opacity'>
         <div class='nav-small-wrap' v-show='small_nav_show'>

            <transition name='small-slide'>
            <div class='nav-small' v-show='small_nav_show' @click='create_event($event)'>
               <br>

               <router-link class='login-small' :to="{name: 'Login'}">{{ logged_or_not }}</router-link>

               <br>

               <router-link :to="{name: 'Plan', params: {id:'main'}}">Plan Your Trip</router-link>
               <div class='sub-menu'>
                  <router-link :to="{name: 'Plan', params: {id: 'covid'}, hash: '#covid_section'}">COVID-19</router-link>
                  <router-link :to="{name: 'Plan', params: {id: 'visa'}, hash: '#visa_section'}">Visa</router-link>
                  <router-link :to="{name: 'Plan', params: {id: 'essentials'}, hash: '#essentials_section'}">Essentials</router-link>
               </div>

               <br>

               <router-link :to="{name: 'Places'}">Places To Go</router-link>
               <div class='sub-menu'>
                  <router-link :to="{name: 'Places', params: {id: 'island'}, hash: '#islands_section'}">Island</router-link>
                  <router-link :to="{name: 'Places', params: {id: 'cities'}, hash: '#cities_section'}">Cities</router-link>
                  <router-link :to="{name: 'Places', params: {id: 'attractions'}, hash: '#attractions_section'}">Attractions</router-link>
               </div>

               <br>

               <router-link :to="{name: 'Culture'}">Learn The Culture</router-link>
               <div class='sub-menu'>
                  <router-link :to="{name: 'Culture'}">About</router-link>
                  <router-link :to="{name: 'Culture'}">Etiquette</router-link>
                  <router-link :to="{name: 'Culture'}">Foods</router-link>
               </div>
               
            </div>
            </transition>

         </div>
         </transition>
   </div>
   
</template>

<script>

// let firebase = require('firebase/app');
import 'firebase/auth'
import * as firebase from 'firebase/app'
import firebaseConfig from "@/firebase.js";
firebase.initializeApp(firebaseConfig);
import hamburger_icon from "@/components/hamburger-icon.vue"

export default {
   name: "navigationComp",
   components: {
      "hamburger-icon": hamburger_icon
   },
   data(){
      return {
         small_nav_show: false,
         logged_or_not: ''
      }
   },
   methods: {
      expand(e){
         e.target.childNodes[1].style.display = 'block';
      },
      collapse(e){
         e.target.childNodes[1].style.display = 'none';
      },
      expand_nav(e){
         this.small_nav_show = e;
      },
      create_event(e){
         if (e.target.nodeName === 'A'){
            document.querySelector('.change').click();
         }
      }
   },
   created(){
      firebase.auth().onAuthStateChanged(user => {
         (user) ? this.logged_or_not = 'Dashboard' : this.logged_or_not = 'LOG-IN';
      });
   }
};
</script>

<style scoped>

/****/
.small-slide-enter-active,
.small-slide-leave-active{
   transition: 0.3s;
}

.small-slide-enter{
   opacity: 0;
   transform: translateX(100%);
}

.small-slide-enter-to{
   opacity: 1;
}

.small-slide-leave-to{
   opacity: 0;
}
/****/

/****/
.small-slide-opacity-enter-active,
.small-slide-opacity-leave-active{
   transition: 0.3s;
}

.small-slide-opacity-enter{
   opacity: 0;
}

.small-slide-opacity-enter-to{
   opacity: 1;
}

.small-slide-opacity-leave-to{
   opacity: 0;
}
/****/

.login-small{
   display: block;
   font-size: 12px;
   margin-bottom: 10px;
   color: lightGrey !important;
   width: 20%;
   margin: auto;
}
.login-small:hover,
.login-small:active{
   color: white !important;
}

.sub-menu{
   display: block;
   margin: auto;
   width: 50%;
   margin-top: 3px;
}

.sub-menu a{
   display: block;
   text-decoration: none;
   font-weight: lighter !important;
   margin: auto;
   margin: 10px;
   font-size: 18px;
   color: lightGrey !important;
}
.sub-menu a:hover,
.sub-menu a:active{
   color: white !important;
}

.nav-small{
   position: absolute;
   top: 0;
   left: 20%;
   width: 80%;
   height: 100%;
   background-color: black;
   font-size: 20px;
   z-index: 1;
   overflow: auto;
}

@media only screen and (max-width: 400px) {
   .nav-small{
      width: 100%;
      left: 0;
   }
   
   .sub-menu{
      width: 100%
   }
}

.nav-small-wrap{
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgb(0, 0, 0, 0.3);
   box-sizing: border-box;
   display: none;
}

@media only screen and (max-width: 700px) {
   .nav-small-wrap{
      display: block;
   }
}

img{
   position: absolute;
   width: 50px;
   height: 50px;
   left: 0;
}

.home-wrapper {
   left: 0;
   width: 20%;
   height: 50px;
}

.menu-wrapper {
   left: 50%;
   width: 65%;
   height: 30px;
   padding: 10px;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   line-height: 1.6;
}

.login-wrapper {
   right: 0;
   height: 30px;
   width: 15%;
   padding: 10px;
   line-height: 1.6;
}

.login{
   text-decoration: none;
   font-family: "Nunito", sans-serif !important;
   font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.login:hover{color:lightGrey !important;}

#nav {
   position: fixed;
   z-index: 5;
   top: 0;
   left: 0;
   width: 100%;
   height: 50px;
   display: flex;
   flex-direction: row;
   background-image: url('../assets/nav_background.png');
   box-shadow: 0 4px 2px -2px gray;
}

/* #nav a.router-link-exact-active {
   text-decoration-color: gold;
} */

.hamburger-icon{
   position: absolute;
   right: 20px;
   display: none;
   top: 5px;
   z-index: 10;
}

@media only screen and (max-width: 700px) {
   .menu-wrapper{
      display: none;
   }
   
   .login-wrapper{
      display: none;
   }

   .hamburger-icon{
      display: block;
   }
}

#nav a{
   color: white;
   font-weight: bold;
   text-underline-position: under;
}

#nav .expander a{
   color: #505050;
   display: block;
   text-decoration-color: transparent !important;
}

#nav .expander a:hover{
   background-color: lightGrey;
   color: black;
}

.expander{
   background-color: white;
   box-shadow: 0 0 8px black;
   display: none;
}

</style>