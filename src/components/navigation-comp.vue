<template>
   
   <div id="nav">
      <div class="home-wrapper">
         <router-link to="/">
            <img src="../assets/logo.png" alt="logo img" />
         </router-link>
      </div>
      <div class="menu-wrapper">
         <router-link :to="{name: 'Plan'}">Plan Your Trip</router-link>
      </div>
      <div class="login-wrapper">
         <router-link :to="{name: 'Login'}">Log-In</router-link>
      </div>
   </div>
   
</template>

<script>
export default {};
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
   width: 25%;
   height: 50px;
}

.menu-wrapper {
   left: 50%;
   width: 60%;
   height: 30px;
   padding: 10px;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
}

.login-wrapper {
   right: 0;
   height: 30px;
   width: 15%;
   padding: 10px;
}

#nav {
   position: absolute;
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
   color: white;
}

#nav a.router-link-exact-active {
   color: whiteSmoke;
}
</style>