<template>
   <div class='island-page'>
      <island-comp id="islands_section"></island-comp>

      <cities-comp id="cities_section"></cities-comp>

      <attractions-comp id="attractions_section"></attractions-comp>
   </div>
</template>

<script>
import island_comp from "@/components/island-comp.vue"
import cities_comp from "@/components/cities-comp.vue"
import attactions_comp from "@/components/attractions-comp.vue"

export default {
   name: "PlacesPageComp",
   components: {
      "island-comp": island_comp,
      "cities-comp": cities_comp,
      "attractions-comp": attactions_comp
   }
};
</script>

<style scoped>

.island-page{
   position: relative;
   top: 75px;
}

</style>