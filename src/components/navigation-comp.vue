<template>
   <div id="app">
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

      <router-view :key="$route.path"/>

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
   border: 1px solid green;
}

.menu-wrapper {
   left: 50%;
   width: 60%;
   height: 30px;
   padding: 10px;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   border: 1px solid red;
}

.login-wrapper {
   right: 0;
   height: 30px;
   width: 15%;
   padding: 10px;
   border: 1px solid black;
}

#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   height: 100%;
}

#nav {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   border: 2px solid blue;
   height: 50px;
   display: flex;
   flex-direction: row;
}

#nav a {
   font-weight: bold;
   color: #2c3e50;
}

#nav a.router-link-exact-active {
   color: #42b983;
}
</style>