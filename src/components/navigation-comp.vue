<template>
   
   <div id="nav">
      <div class="home-wrapper">
         <router-link to="/">
            <img src="../assets/logo.png" alt="logo img" />
         </router-link>
      </div>

      <div class="menu-wrapper">
         <router-link :to="{name: 'Plan'}">
            <div>Plan Your Trip</div>
            <div class='expander'>
               <router-link>COVID-19</router-link>
               <router-link>Visa</router-link>
               <router-link>Essentials</router-link>
            </div>
         </router-link>

         <router-link :to="{name: 'Plan'}">
            <div>Places To Go</div>
            <div class='expander'>
               <router-link>Islands</router-link>
               <router-link>Cities</router-link>
               <router-link>Famous Attractions</router-link>
            </div>
         </router-link>

         <router-link :to="{name: 'Plan'}">
            <div>Learn The Culture</div>
            <router-link>About</router-link>
            <router-link>Etiquette</router-link>
            <router-link>Foods</router-link>
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
   components: {
      "hamburger-icon": hamburger_icon
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

#nav a {
   font-weight: bold;
   color: whitesmoke;
}

#nav a.router-link-exact-active {
   text-decoration-color: gold;
   color: white;
}

@media only screen and (max-width: 700px) {
   .menu-wrapper{
      display: none;
   }
   
   .login-wrapper{
      display: none;
   }
}

</style>