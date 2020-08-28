<template>
   <div>
      <culture-religion-comp></culture-religion-comp>

      <culture-etiquette-comp></culture-etiquette-comp>
   </div>
</template>

<script>
import culture_religion_comp from "@/components/culture-religion-comp.vue"
import culture_etiquette_comp from "@/components/culture-etiquette-comp.vue"

export default {
   name: "cultureComp",
   components: {
      "culture-religion-comp": culture_religion_comp,
      "culture-etiquette-comp": culture_etiquette_comp
   },
};
</script>

<style scoped>
</style>