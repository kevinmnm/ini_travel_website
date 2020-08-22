<template>
   <div v-html="txt"></div>
</template>

<script>
let text = "Do not travel Indonesia due to COVID-19, terrorism, and natural disasters.<br><br>Read the Department of State’s COVID-19 page before you plan any international travel.<br><br>The Centers for Disease Control and Prevention (CDC) has issued a Level 3 Travel Health Notice for Indonesia due to COVID-19.<br><br>Indonesia has lifted stay at home orders, and resumed some transportation options and business operations. <br><br>Visit the Embassy's COVID-19 page for more information on COVID-19 in Indonesia.";

export default {
   name: "traveAdvArticle",
   data() {
      return {
         txt: text,
      };
   },
};
</script>

<style>
</style>