<template>
   <navigation-comp></navigation-comp>
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

</style>
