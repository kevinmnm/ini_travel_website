<template>
   <div>
      <div class="policy-page">
         <policy-comp id="privacy_section"></policy-comp>
         <terms-comp id="terms_section"></terms-comp>
         <contact-us-comp id="contact_section"></contact-us-comp>
      </div>
      <br>
      <home-footer-comp></home-footer-comp>
   </div>
</template>

<script>
import policy_comp from "@/components/policy-comp.vue";
import terms_comp from "@/components/terms-comp.vue";
import contact_us_comp from "@/components/contact-us-comp.vue";
import home_footer_comp from "@/components/home-footer-comp.vue";

export default {
   name: "PolicyPageComp",
   components: {
      "policy-comp": policy_comp,
      "terms-comp": terms_comp,
      "contact-us-comp": contact_us_comp,
      "home-footer-comp": home_footer_comp,
   },
};
</script>

<style scoped>
.policy-page {
   position: relative;
   margin: auto;
   margin-top: 70px;
   width: 70%;
}
</style>