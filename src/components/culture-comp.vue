<template>
   <div>
      <culture-religion-comp id="religion_section"></culture-religion-comp>

      <culture-etiquette-comp id="etiquette_section"></culture-etiquette-comp>

      <culture-foods-comp id="foods_section"></culture-foods-comp>
   </div>
</template>

<script>
import culture_religion_comp from "@/components/culture-religion-comp.vue"
import culture_etiquette_comp from "@/components/culture-etiquette-comp.vue"
import culture_foods_comp from "@/components/culture-foods-comp.vue"

export default {
   name: "cultureComp",
   components: {
      "culture-religion-comp": culture_religion_comp,
      "culture-etiquette-comp": culture_etiquette_comp,
      "culture-foods-comp": culture_foods_comp
   },
};
</script>

<style scoped>
</style>