<template>
   <div>
      <culture-religion-comp></culture-religion-comp>
   </div>
</template>

<script>
import culture_religion_comp from "@/components/culture-religion-comp.vue";

export default {
   name: "cultureComp",
   components: {
      "culture-religion-comp": culture_religion_comp,
   },
};
</script>

<style scoped>
</style>