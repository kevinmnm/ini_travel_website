<template>
   
   <div id="nav">
      <div class="home-wrapper">
         <router-link to="/">
            <img src="../assets/logo.png" alt="logo img" />
         </router-link>
      </div>

      <div class="menu-wrapper">
         <router-link :to="{name: 'Plan'}">
            <div @mouseenter="expand($event)" @mouseleave='collapse($event)'>
               Plan Your Trip
               <div class='expander' >
                  <router-link :to="{name: 'Plan'}">COVID-19</router-link>
                  <router-link :to="{name: 'Plan'}">Visa</router-link>
                  <router-link :to="{name: 'Plan'}">Essentials</router-link>
               </div>
            </div>
         </router-link>

         <router-link :to="{name: 'Places'}">
            <div @mouseenter="expand($event)" @mouseleave='collapse($event)'>
               Places To Go
               <div class='expander'>
                  <router-link :to="{name: 'Places'}">Islands</router-link>
                  <router-link :to="{name: 'Places'}">Cities</router-link>
                  <router-link :to="{name: 'Places'}">Attractions</router-link>
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
         <router-link :to="{name: 'Login'}" class='login'>LOG-IN</router-link>
      </div>

      <div class="hamburger-icon">
         <hamburger-icon></hamburger-icon>
      </div>
   </div>
   
</template>

<script>
import hamburger_icon from "@/components/hamburger-icon.vue"

export default {
   name: "navigationComp",
   components: {
      "hamburger-icon": hamburger_icon
   },
   methods: {
      expand(e){
         e.target.childNodes[1].style.display = 'block';
      },
      collapse(e){
         e.target.childNodes[1].style.display = 'none';
      }
   }
};
</script>

<style scoped>

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

#nav {
   position: sticky;
   z-index: 5;
   top: 0;
   left: 0;
   width: 100%;
   height: 50px;
   display: flex;
   flex-direction: row;
   background-image: url('../assets/nav_background.png');
}

/* #nav a.router-link-exact-active {
   text-decoration-color: gold;
} */

.hamburger-icon{
   position: absolute;
   right: 20px;
   display: none;
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
   color: black;
   display: block;
   text-decoration-color: transparent !important;
}

#nav .expander a:hover{
   background-color: lightGrey;
}

.expander{
   background-color: white;
   border-radius: 1px;
   box-shadow: 0 0 5px brown;
   display: none;
}

</style>