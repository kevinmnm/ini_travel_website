<template>
   <div class='island-page'>
      <island-comp></island-comp>

      <cities-comp></cities-comp>
   </div>
</template>

<script>
import island_comp from "@/components/island-comp.vue"
import cities_comp from "@/components/cities-comp.vue"

export default {
   name: "PlacesPageComp",
   components: {
      "island-comp": island_comp,
      "cities-comp": cities_comp
   }
};
</script>

<style scoped>

.island-page{
   position: relative;
   top: 75px;
}

</style>