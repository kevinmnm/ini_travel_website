<template>
   <div class='policy-page'>
      <policy-comp></policy-comp>
      <terms-comp></terms-comp>
      <contact-us-comp></contact-us-comp>
   </div>
</template>

<script>
import policy_comp from "@/components/policy-comp.vue"
import terms_comp from "@/components/terms-comp.vue"
import contact_us_comp from "@/components/contact-us-comp.vue"

export default {
   name: "PolicyPageComp",
   components: {
      "policy-comp": policy_comp,
      "terms-comp": terms_comp,
      "contact-us-comp": contact_us_comp
   }
}
</script>

<style scoped>
.policy-page{
   position: relative;
   margin: auto;
   margin-top: 70px;
   width: 70%;
}
</style>