<template>
   <div class='island-page'>
      <island-comp></island-comp>
   </div>
</template>

<script>
import island_comp from "@/components/island-comp.vue"

export default {
   name: "PlacesPageComp",
   components: {
      "island-comp": island_comp
   }
};
</script>

<style scoped>

.island-page{
   position: relative;
   top: 75px;
}

</style>