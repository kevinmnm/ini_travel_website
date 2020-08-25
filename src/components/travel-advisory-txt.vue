<template>
   <div v-html="txt"></div>
</template>

<script>
let text = "Do not travel Indonesia due to COVID-19, terrorism, and natural disasters.<br><br>Read the <span style='font-weight:bold; cursor:pointer;' onclick='window.open(`https://travel.state.gov/content/travel/en/traveladvisories/ea/covid-19-information.html`)'>Department of State’s COVID-19 page</span> before you plan any international travel.<br><br>The Centers for Disease Control and Prevention (CDC) has issued a Level 3 Travel Health Notice for Indonesia due to COVID-19.<br><br>Indonesia has lifted stay at home orders, and resumed some transportation options and business operations. <br><br>Are U.S. citizens permitted to enter?  Yes, but only with an existing valid visa or residence permit. Negative COVID-19 test (PCR and/or serology) is required for entery. <br><br>Visit the <span style='font-weight:bold; cursor:pointer;' onclick='window.open(`https://id.usembassy.gov/u-s-citizen-services/covid-19-information/`)'>Embassy's COVID-19 page</span> for more information on COVID-19 in Indonesia. <br><br><i style='font-size: 15px;'>Read Full Advisory on <u style='cursor:pointer;' onclick='window.open(`https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/indonesia-travel-advisory.html`)'>Travel.State.Gov</u></i>";

export default {
   name: "traveAdvArticle",
   data() {
      return {
         txt: text
      }
   }
}
</script>

