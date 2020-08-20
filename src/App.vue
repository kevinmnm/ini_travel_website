<template>
   <div id="app">
      <navigation-comp></navigation-comp>

      <router-view />
   </div>
</template>

<script>
import navigation_comp from "@/components/navigation-comp.vue"

export default {
   name: "AppComp",
   components: {
      "navigation-comp": navigation_comp
   }
}
</script>
<style>

body{
   position: absolute;
   margin: 0;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   box-sizing: border-box;
}

#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   height: 100%;
   text-underline-position: under;
}

</style>
