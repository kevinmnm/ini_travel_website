<template>
  <div class='brief-covid'>

      <div class='titler'>Indonesia Travel Advisory From <a :href='url'>Travel.State.Gov</a></div>
      <div class='alerter'>Do Not Travel</div>
      <div class='article'>
         <adv-text></adv-text>
      </div>
   </div>
</template>

<script>
import advisory_text from "./travel-advisory-txt.vue"

export default {
   name: "briefCovidComp",
   components: {
      "adv-text": advisory_text
   },
   data(){
      return {
         url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/indonesia-travel-advisory.html'
      }
   }
}
</script>

<style scoped>
.article{
   border: 1px solid red;
   font-size: 20px;
   padding: 20px;
   text-align: left;
}

.titler{
   font-size: 4vw;
   font-weight: bold;
}

.alerter{
   position: relative;
   width: 100%;
   background: red;
   color: white;
   font-size: 4vw;
}

@media only screen and (max-width: 700px) {
   .titler{font-size: 30px;}
   .alerter{font-size: 30px;}
}

.brief-covid{
   position: relative;
   display: block;
   width: 80%;
   margin: auto;
   margin-top: 60px;
   margin-bottom: 20px;
}
</style>